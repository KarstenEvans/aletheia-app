'use strict';
/* ClipPipe 0.3 agent-side adapter. Nothing transmits until a user clicks SEND on ClipPipe. */
const channel='aletheia-clippipe-v03';
let pending=null,observer=null,watchTimer=null;
const visible=el=>!!(el&&el.getClientRects().length);
function assistantNodes(){
  const selectors=[
    '[data-clippipe-assistant]',
    '[data-message-author-role="assistant"]',
    '[data-testid="assistant-message"]',
    'model-response',
    '[data-role="assistant"]',
    '.message-row.assistant',
    '.ds-message.assistant'
  ],found=[];
  for(const selector of selectors){
    for(const el of document.querySelectorAll(selector))if(visible(el))found.push(el);
  }
  return [...new Set(found)].slice(-30);
}
function extractPacket(text,replyTo){
  const raw=String(text||'').replace(/\r\n?/g,'\n');
  const start=raw.indexOf('HELO ALETHEIA/1\n');if(start<0)return null;
  const end=raw.indexOf('\nEOM',start);if(end<0)return null;
  const packet=raw.slice(start,end+4).trim();
  return packet.includes('\nREPLY '+replyTo+'\n')?packet:null;
}
function latest(replyTo){
  for(const el of assistantNodes().reverse()){
    const packet=extractPacket(el.innerText||el.textContent||'',replyTo);
    if(packet)return packet;
  }
  return null;
}
function stopWatch(){
  if(observer)observer.disconnect();observer=null;
  if(watchTimer)clearTimeout(watchTimer);watchTimer=null;
  pending=null;
}
function watchReply(replyTo){
  stopWatch();pending=replyTo;
  const check=()=>{
    if(pending!==replyTo)return;
    const packet=latest(replyTo);if(!packet)return;
    chrome.runtime.sendMessage({channel,op:'AGENT_REPLY',replyTo,text:packet},()=>{void chrome.runtime.lastError});
    stopWatch();
  };
  observer=new MutationObserver(check);
  observer.observe(document.documentElement,{childList:true,subtree:true,characterData:true});
  watchTimer=setTimeout(stopWatch,5*60*1000);
  check();
}
function findEditor(){
  const selectors=[
    'textarea[data-clippipe-input]',
    '#prompt-textarea[contenteditable="true"]',
    '[data-testid="chat-input"][contenteditable="true"]',
    'div.ProseMirror[contenteditable="true"]',
    'div.ql-editor[contenteditable="true"]',
    'textarea[placeholder*="message" i]',
    'textarea',
    '[role="textbox"][contenteditable="true"]'
  ];
  for(const selector of selectors){
    const el=[...document.querySelectorAll(selector)].find(visible);if(el)return el;
  }
  return null;
}
function findSendButton(){
  const selectors=[
    '[data-clippipe-submit]',
    'button[data-testid="send-button"]',
    'button[aria-label="Send message"]',
    'button[aria-label="Send"]',
    'button[aria-label*="Send message" i]',
    'button[aria-label*="Send prompt" i]'
  ];
  for(const selector of selectors){
    const button=[...document.querySelectorAll(selector)].find(el=>visible(el)&&!el.disabled);
    if(button)return button;
  }
  return null;
}
function insert(el,value){
  el.focus();
  const text=el.isContentEditable?el.innerText:el.value;
  if(String(text||'').trim())throw Error('Recipient composer has unsent text. Please clear it yourself first.');
  if(el instanceof HTMLTextAreaElement||el instanceof HTMLInputElement){
    const proto=el instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(proto,'value').set.call(el,value);
    el.dispatchEvent(new InputEvent('input',{bubbles:true,inputType:'insertText',data:value}));
  }else{
    const selection=window.getSelection(),range=document.createRange();
    range.selectNodeContents(el);range.collapse(false);selection.removeAllRanges();selection.addRange(range);
    const done=document.execCommand('insertText',false,value);
    if(!done){
      el.textContent=value;
      el.dispatchEvent(new InputEvent('input',{bubbles:true,inputType:'insertText',data:value}));
    }
  }
}
chrome.runtime.onMessage.addListener((msg,sender,sendResponse)=>{
  if(msg?.channel!==channel||!['SEND','CAPTURE'].includes(msg.op))return;
  try{
    if(msg.op==='CAPTURE'){
      const text=latest(String(msg.replyTo||''));
      sendResponse(text?{ok:true,text}:{ok:false,error:'No complete reply containing the matching REPLY header is visible.'});
      return;
    }
    const input=findEditor();if(!input)throw Error('Cannot locate the chat composer. Use manual copy-and-paste mode.');
    if(!findSendButton())throw Error('Cannot safely identify the send button. Use manual copy-and-paste mode.');
    insert(input,String(msg.packet||''));
    const submit=findSendButton();
    if(!submit)throw Error('Send button not enabled after entering the packet. Verify the editor manually.');
    submit.click();
    watchReply(String(msg.replyTo||''));
    sendResponse({ok:true,status:'submitted'});
  }catch(error){sendResponse({ok:false,error:String(error.message||error)});}
});