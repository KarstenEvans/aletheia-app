'use strict';
/* Page bridge runs only within the ClipPipe v0.3 pathname. */
const CP_ORIGIN='https://karstenevans.github.io';
const CP_PATH='/aletheia-app/aletheia-clippipe/v0.3.html';
if(location.origin===CP_ORIGIN&&location.pathname===CP_PATH){
  const channel='aletheia-clippipe-v03';
  window.postMessage({channel,side:'extension',kind:'READY'},location.origin);
  window.addEventListener('message',event=>{
    if(event.source!==window||event.origin!==location.origin||event.data?.channel!==channel||event.data?.side!=='page')return;
    const {id,op,params}=event.data;
    if(!Number.isSafeInteger(id)||!['PING','LIST','SEND','CAPTURE','PULL','ACK_REPLY'].includes(op))return;
    chrome.runtime.sendMessage({channel,op,params:params||{}},answer=>{
      const error=chrome.runtime.lastError?.message;
      window.postMessage({channel,side:'extension',kind:'RESPONSE',id,answer:error?{ok:false,error}:answer||{ok:false,error:'No extension response'}},location.origin);
    });
  });
  chrome.runtime.onMessage.addListener(message=>{
    if(message?.channel!==channel||message?.op!=='REPLY_READY')return;
    window.postMessage({channel,side:'extension',kind:'REPLY_READY',message:message.message},location.origin);
  });
}