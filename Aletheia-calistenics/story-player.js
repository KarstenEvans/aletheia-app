const A={
  installPrompt:null,data:null,ex:0,phase:'idle',left:0,timer:null,paused:false,flowToken:0,
  recent:[],bag:[],settings:{voice:'caroline',rate:1.0,music:'atlas',musicVolume:.70,generatedMusicVolume:1.0,recordedMusicVolume:.70,facts:true,captions:true,auto:true},
  ctx:null,musicTimers:[],musicNodes:[],musicBus:null,localAudio:null,localAudioUrl:null,speechActive:0,speechWaiters:new Set(),

  async init(){
    try{this.data=await fetch('./workout.json',{cache:'no-store'}).then(r=>{if(!r.ok)throw Error('workout.json '+r.status);return r.json()});}
    catch(e){this.setAudioStatus('Workout data failed to load. Reload the page.',true);return;}
    const saved=JSON.parse(localStorage.getItem('aletheiaCalSettings')||'{}');
    this.settings={...this.settings,...saved};
    // Migrate older app settings into the 0–100% music scale and new recorded default.
    if(saved.rate===undefined||saved.rate===.93)this.settings.rate=1.0;
    if(saved.musicVolume!==undefined && saved.musicVolume<=.30)this.settings.musicVolume=Math.min(1,saved.musicVolume/.30);
    if(saved.generatedMusicVolume===undefined)this.settings.generatedMusicVolume=1.0;
    if(saved.recordedMusicVolume===undefined)this.settings.recordedMusicVolume=.70;
    if(saved.music===undefined||saved.music==='zen60'){
      this.settings.music='atlas';
      this.settings.musicVolume=this.settings.recordedMusicVolume;
    }else if(this.isGeneratedMusic(this.settings.music)){
      this.settings.musicVolume=this.settings.generatedMusicVolume;
    }else if(this.settings.music!=='off'){
      this.settings.musicVolume=this.settings.recordedMusicVolume;
    }
    this.save();
    document.querySelectorAll('.poster').forEach(i=>i.src=window.ALETHEIA_POSTER);
    this.renderOverview();this.renderMenu();this.shuffle();this.show('home');this.updateVoiceStatus();
    if('speechSynthesis'in window)speechSynthesis.onvoiceschanged=()=>this.updateVoiceStatus();
    if('serviceWorker'in navigator)navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
  },

  show(id){
    document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));
    const el=document.querySelector('#'+id);if(el)el.classList.add('active');
    window.scrollTo({top:0,behavior:'smooth'});
  },

  renderOverview(){
    const d=this.data;
    document.querySelector('#elist').innerHTML=d.exercises.map((e,i)=>
      '<div class="exercise-line"><span><b>'+(i+1)+'. '+e.title+'</b><br><span class="small">'+e.cue+'</span></span><b>'+e.duration+'s</b></div>'
    ).join('');
    document.querySelector('#safety').textContent=d.safety.intro+' '+d.safety.support;
  },

  renderMenu(){
    document.querySelector('#voiceMode').value=this.settings.voice;
    document.querySelector('#speechRate').value=this.settings.rate;
    document.querySelector('#speechRateVal').textContent=Number(this.settings.rate).toFixed(2);
    document.querySelector('#musicStyle').value=this.settings.music;
    document.querySelector('#musicVolume').value=this.settings.musicVolume;
    document.querySelector('#musicVolumeVal').textContent=Math.round(this.settings.musicVolume*100)+'%';
    document.querySelector('#facts').checked=this.settings.facts;
    document.querySelector('#captions').checked=this.settings.captions;
    document.querySelector('#auto').checked=this.settings.auto;

    document.querySelector('#voiceMode').onchange=e=>{this.settings.voice=e.target.value;this.save();this.updateVoiceStatus();};
    document.querySelector('#speechRate').oninput=e=>{this.settings.rate=+e.target.value;document.querySelector('#speechRateVal').textContent=this.settings.rate.toFixed(2);this.save();};
    document.querySelector('#musicStyle').onchange=e=>{
      const oldStyle=this.settings.music;
      if(this.isGeneratedMusic(oldStyle))this.settings.generatedMusicVolume=this.settings.musicVolume;
      else if(oldStyle!=='off')this.settings.recordedMusicVolume=this.settings.musicVolume;
      this.settings.music=e.target.value;
      this.settings.musicVolume=this.isGeneratedMusic(this.settings.music)?this.settings.generatedMusicVolume:this.settings.recordedMusicVolume;
      document.querySelector('#musicVolume').value=this.settings.musicVolume;
      document.querySelector('#musicVolumeVal').textContent=Math.round(this.settings.musicVolume*100)+'%';
      this.save();this.updateLocalMusicVisibility();if(this.phase!=='idle'&&this.phase!=='done')this.restartMusic();
    };
    document.querySelector('#musicVolume').oninput=e=>{
      this.settings.musicVolume=+e.target.value;
      if(this.isGeneratedMusic(this.settings.music))this.settings.generatedMusicVolume=this.settings.musicVolume;
      else if(this.settings.music!=='off')this.settings.recordedMusicVolume=this.settings.musicVolume;
      document.querySelector('#musicVolumeVal').textContent=Math.round(this.settings.musicVolume*100)+'%';
      this.save();this.applyMusicVolume();
    };
    ['facts','captions','auto'].forEach(k=>document.querySelector('#'+k).onchange=e=>{this.settings[k]=e.target.checked;this.save();});
    document.querySelector('#localMusic').onchange=()=>{if(this.settings.music==='local'&&this.phase!=='idle'&&this.phase!=='done')this.restartMusic();};
    this.updateLocalMusicVisibility();
  },

  save(){localStorage.setItem('aletheiaCalSettings',JSON.stringify(this.settings));},

  isGeneratedMusic(style){return ['zen60','tao60','up120'].includes(style);},

  toggleMenu(force){
    const m=document.querySelector('#menu'),b=document.querySelector('#menuButton');
    const on=typeof force==='boolean'?force:!m.classList.contains('open');
    m.classList.toggle('open',on);b.setAttribute('aria-expanded',String(on));
  },

  go(id){this.toggleMenu(false);this.show(id);},

  updateLocalMusicVisibility(){
    document.querySelector('#localMusicWrap').hidden=this.settings.music!=='local';
  },

  async install(){
    const help=document.querySelector('#installHelp');
    if(this.installPrompt){
      this.installPrompt.prompt();const r=await this.installPrompt.userChoice;
      help.textContent=r.outcome==='accepted'?'Installation accepted.':'Installation was not completed; the web app still works normally.';
      this.installPrompt=null;return;
    }
    const ua=navigator.userAgent||'';
    if(/iphone|ipad/i.test(ua))help.textContent='iPhone/iPad: Safari → Share → Add to Home Screen.';
    else if(/android/i.test(ua))help.textContent='Android: browser menu → Install app / Add to Home screen.';
    else help.textContent='PC: Chrome or Edge → Install app from the address bar/browser menu.';
  },

  async start(){
    this.stopAll();this.ex=0;this.phase='exercise';this.paused=false;
    await this.startMusic();
    this.renderExercise(true);
  },

  stopWorkout(){
    this.flowToken++;clearInterval(this.timer);this.stopSpeech();this.stopMusic();this.paused=false;this.phase='idle';
    document.querySelectorAll('.pause').forEach(b=>b.textContent='Ⅱ Pause');
    this.show('overview');
  },

  async waitPausable(ms,token){
    let remaining=ms,last=performance.now();
    return await new Promise(resolve=>{
      const step=()=>{
        if(token!==this.flowToken)return resolve(false);
        const now=performance.now();
        if(!this.paused)remaining-=now-last;
        last=now;
        if(remaining<=0)return resolve(true);
        setTimeout(step,50);
      };
      step();
    });
  },

  async renderExercise(intro){
    const token=++this.flowToken;
    this.phase='exercise';this.show('player');
    const e=this.data.exercises[this.ex];
    document.querySelector('#etitle').textContent=e.title;
    document.querySelector('#ecount').textContent='Exercise '+(this.ex+1)+' of '+this.data.exercises.length;
    document.querySelector('#bar').style.width=((this.ex+1)/this.data.exercises.length*100)+'%';
    document.querySelector('#cue').textContent=this.settings.captions?e.cue:'';
    document.querySelector('#mod').textContent=e.mod;
    this.zoom(e.focus);this.left=e.duration;this.clock('#time');
    if(intro){
      await this.say(e.intro+' '+e.cue,1);
      if(token!==this.flowToken||this.phase!=='exercise')return;
      const ready=await this.waitPausable(2000,token);
      if(!ready||token!==this.flowToken||this.phase!=='exercise')return;
    }
    await this.say('Begin. '+e.duration+' seconds.',1);
    if(token!==this.flowToken||this.phase!=='exercise')return;
    this.begin(e,token);
  },

  begin(e,token){
    clearInterval(this.timer);
    this.timer=setInterval(()=>{
      if(token!==this.flowToken){clearInterval(this.timer);return;}
      if(this.paused)return;
      this.left--;this.clock('#time');
      const rounds=[];for(let n=Math.floor((e.duration-1)/10)*10;n>=10;n-=10)rounds.push(n);
      if(rounds.includes(this.left))this.say(String(this.left),.72);
      if(this.left<=5&&this.left>0)this.say(String(this.left),this.left<=2?.98:.84);
      if(this.left<=0){clearInterval(this.timer);this.say('And rest.',1).then(()=>{if(token===this.flowToken)this.rest(e);});}
    },1000);
  },

  rest(e){
    this.phase='rest';this.show('rest');this.left=e.rest;this.clock('#rtime');
    const fact=this.nextFact();
    document.querySelector('#fact').textContent=this.settings.facts?fact:'Breathe, settle, and get ready for the next movement.';
    const nx=this.data.exercises[this.ex+1];
    document.querySelector('#next').textContent=nx?'Next: '+nx.title:'Session complete';
    this.say('Rest for '+e.rest+' seconds.',1);
    if(this.settings.facts)setTimeout(()=>{if(this.phase==='rest'&&!this.paused)this.say(fact,.84)},4500);
    clearInterval(this.timer);
    this.timer=setInterval(()=>{
      if(this.paused)return;
      this.left--;this.clock('#rtime');
      if(this.left===10&&nx)this.say(e.next,.88);
      if(this.left<=0){
        clearInterval(this.timer);
        if(!this.settings.auto&&nx){document.querySelector('#rtime').textContent='READY';this.say('Rest complete. Press next when you are ready.',.9);return;}
        if(nx){this.ex++;this.renderExercise(true)}else this.done();
      }
    },1000);
  },

  done(){
    this.flowToken++;this.phase='done';this.stopMusic();this.show('done');
    this.say('Session complete. Get up slowly and notice how you feel. Mitten has completed the quality-control inspection.',1);
  },

  prev(){
    if(this.ex>0){clearInterval(this.timer);this.flowToken++;this.stopSpeech();this.ex--;this.renderExercise(true);}
  },
  next(){
    clearInterval(this.timer);this.flowToken++;this.stopSpeech();
    if(this.ex<this.data.exercises.length-1){this.ex++;this.renderExercise(true)}else this.done();
  },

  pause(){
    this.paused=!this.paused;
    document.querySelectorAll('.pause').forEach(b=>{
      b.textContent=this.paused?'▶ Resume':'Ⅱ Pause';
      b.setAttribute('aria-pressed',String(this.paused));
    });
    if(this.paused){
      if('speechSynthesis'in window&&speechSynthesis.speaking&&!speechSynthesis.paused)speechSynthesis.pause();
      this.suspendMusic();
    }else{
      if('speechSynthesis'in window&&speechSynthesis.paused)speechSynthesis.resume();
      this.resumeMusic();
    }
  },

  clock(sel){document.querySelector(sel).textContent='00:'+String(Math.max(0,this.left)).padStart(2,'0');},

  zoom(b){
    const img=document.querySelector('#stageimg'),st=document.querySelector('#stage');
    img.src=window.ALETHEIA_POSTER;
    img.onload=()=>{
      const sw=st.clientWidth,sh=st.clientHeight,iw=img.naturalWidth,ih=img.naturalHeight;
      const s=Math.max(sw/(iw*b.w),sh/(ih*b.h)),dw=iw*s,dh=ih*s;
      img.style.width=dw+'px';img.style.height=dh+'px';
      img.style.left=(sw/2-(b.x+b.w/2)*dw)+'px';
      img.style.top=(sh/2-(b.y+b.h/2)*dh)+'px';
    };
  },

  shuffle(){
    this.bag=this.data.restFacts.map((_,i)=>i);
    for(let i=this.bag.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[this.bag[i],this.bag[j]]=[this.bag[j],this.bag[i]];}
  },
  nextFact(){
    if(!this.bag.length)this.shuffle();
    let i=this.bag.shift(),g=0;
    while(this.recent.includes(i)&&this.bag.length&&g++<20){this.bag.push(i);i=this.bag.shift();}
    this.recent.push(i);if(this.recent.length>this.data.restFactNoRepeat)this.recent.shift();
    return this.data.restFacts[i];
  },

  resolvedVoice(){
    if(!('speechSynthesis'in window))return null;
    const vs=speechSynthesis.getVoices(),norm=v=>String(v.lang||'').toLowerCase().replace('_','-');
    if(!vs.length)return null;
    if(this.settings.voice==='male'){
      let v=vs.find(v=>norm(v)==='en-gb'&&/google uk english male/i.test(v.name)&&!/george/i.test(v.name));
      if(!v)v=vs.find(v=>norm(v)==='en-gb'&&/male/i.test(v.name)&&!/george/i.test(v.name));
      if(!v)v=vs.find(v=>norm(v)==='en-gb'&&!/george/i.test(v.name));
      if(!v)v=vs.find(v=>norm(v)==='en-gb');
      if(!v)v=vs.find(v=>norm(v).startsWith('en'));
      return v||vs[0]||null;
    }
    let v=vs.find(v=>norm(v)==='en-au'&&/caroline/i.test(v.name));
    if(!v)v=vs.find(v=>norm(v)==='en-au'&&/female|woman|karen|lee|catherine/i.test(v.name)&&!/george/i.test(v.name));
    if(!v)v=vs.find(v=>norm(v)==='en-au'&&!/male|george/i.test(v.name));
    if(!v)v=vs.find(v=>norm(v)==='en-au');
    if(!v)v=vs.find(v=>norm(v)==='en-gb'&&/caroline|sonia|serena|susan|hazel|libby|kate|female|woman/i.test(v.name)&&!/george/i.test(v.name));
    if(!v)v=vs.find(v=>norm(v)==='en-gb'&&!/google uk english male|george|\bmale\b/i.test(v.name));
    if(!v)v=vs.find(v=>norm(v).startsWith('en')&&!/george/i.test(v.name));
    return v||vs[0]||null;
  },

  updateVoiceStatus(){
    const el=document.querySelector('#voiceStatus');if(!el)return;
    if(!('speechSynthesis'in window)){el.textContent='Browser speech is unavailable; timers and captions still work.';return;}
    const v=this.resolvedVoice();
    el.textContent=v?'Device voice: '+v.name+' ('+v.lang+')':'Waiting for browser voices…';
  },

  testVoice(){this.say(this.settings.voice==='male'?'Ready when you are. Let us begin.':'Ready when you are. Let’s begin.',1);},

  say(t,vol=1){
    return new Promise(resolve=>{
      if(!('speechSynthesis'in window)||!t){resolve();return;}
      const u=new SpeechSynthesisUtterance(t),v=this.resolvedVoice();
      if(v)u.voice=v;
      u.lang=v?.lang||(this.settings.voice==='caroline'?'en-AU':'en-GB');
      u.rate=this.settings.rate;u.pitch=1;u.volume=Math.max(.1,Math.min(1,vol));
      let settled=false;
      const finish=()=>{
        if(settled)return;settled=true;
        this.speechWaiters.delete(finish);
        this.speechActive=Math.max(0,this.speechActive-1);
        resolve();
      };
      this.speechWaiters.add(finish);
      u.onstart=()=>{this.speechActive++;};
      u.onend=finish;u.onerror=finish;
      speechSynthesis.speak(u);
    });
  },

  stopSpeech(){
    if('speechSynthesis'in window)speechSynthesis.cancel();
    [...this.speechWaiters].forEach(f=>f());
    this.speechWaiters.clear();this.speechActive=0;
  },

  setAudioStatus(msg,warn=false){
    const el=document.querySelector('#audioStatus');if(!el)return;el.textContent=msg;el.classList.toggle('warn',!!warn);
  },

  musicDef(){
    if(this.settings.music==='zen60')return {name:'Zen Garden 60 BPM',bpm:60,scale:[196,207.65,261.63,293.66,349.23,392],drone:[98,146.83],gap:[6,13],dur:[2.5,6],type:'triangle',bright:1800,pluck:true};
    if(this.settings.music==='up120')return {name:'Upbeat 120 BPM',bpm:120,scale:[196,220,261.63,293.66,329.63,392,440],drone:[130.81,196],gap:[2.4,5],dur:[1.8,4.5],type:'triangle',bright:2400,pluck:true};
    return {name:'Tao Flow 60 BPM',bpm:60,scale:[196,220,246.94,293.66,329.63,392,440],drone:[98,146.83,196],gap:[5,11],dur:[3,7],type:'sine',bright:1700,pluck:false};
  },

  reg(...nodes){nodes.forEach(n=>{if(n)this.musicNodes.push(n)});},

  makeReverb(seconds=3.4,decay=2.2){
    const rate=this.ctx.sampleRate,length=rate*seconds,impulse=this.ctx.createBuffer(2,length,rate);
    for(let ch=0;ch<2;ch++){const d=impulse.getChannelData(ch);for(let i=0;i<length;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/length,decay);}
    const conv=this.ctx.createConvolver();conv.buffer=impulse;this.reg(conv);return conv;
  },

  createMusicBus(){
    const master=this.ctx.createGain(),target=Math.max(this.settings.musicVolume*.30,.0001);
    master.gain.setValueAtTime(.0001,this.ctx.currentTime);
    master.gain.exponentialRampToValueAtTime(target,this.ctx.currentTime+1.2);
    master.connect(this.ctx.destination);
    this.musicBus={master,reverb:this.makeReverb()};
    this.reg(master);
  },

  note(freq,start,duration,volume,type='sine',pan=0,brightness=1500,pluck=false){
    if(!this.ctx||!this.musicBus)return;
    const osc=this.ctx.createOscillator(),gain=this.ctx.createGain(),filter=this.ctx.createBiquadFilter(),
      panner=this.ctx.createStereoPanner(),dry=this.ctx.createGain(),wet=this.ctx.createGain(),rev=this.musicBus.reverb;
    osc.type=type;osc.frequency.setValueAtTime(freq,start);filter.type='lowpass';filter.frequency.value=brightness;panner.pan.value=pan;
    const attack=pluck?.015:.4,peak=Math.max(volume,.0002);
    gain.gain.setValueAtTime(.0001,start);gain.gain.exponentialRampToValueAtTime(peak,start+attack);
    if(pluck)gain.gain.exponentialRampToValueAtTime(.0001,start+duration);
    else{gain.gain.setValueAtTime(peak*.75,start+Math.max(attack+.2,duration*.55));gain.gain.exponentialRampToValueAtTime(.0001,start+duration);}
    osc.connect(filter);filter.connect(gain);gain.connect(panner);panner.connect(dry);panner.connect(wet);dry.connect(this.musicBus.master);wet.connect(rev);rev.connect(this.musicBus.master);
    dry.gain.value=.78;wet.gain.value=.25;osc.start(start);osc.stop(start+duration+.05);this.reg(osc,gain,filter,panner,dry,wet);
  },

  drone(freqs){
    freqs.forEach((f,i)=>{
      const osc=this.ctx.createOscillator(),g=this.ctx.createGain(),lp=this.ctx.createBiquadFilter();
      osc.type=i%2?'triangle':'sine';osc.frequency.value=f;g.gain.value=.11/(i+1);lp.type='lowpass';lp.frequency.value=650;
      osc.connect(lp);lp.connect(g);g.connect(this.musicBus.master);osc.start();this.reg(osc,g,lp);
    });
  },

  schedulePulse(bpm){
    const ms=60000/bpm,pulse=()=>{
      if(!this.ctx||!this.musicBus)return;
      const at=this.ctx.currentTime+.01,osc=this.ctx.createOscillator(),g=this.ctx.createGain(),lp=this.ctx.createBiquadFilter();
      osc.type='sine';osc.frequency.value=bpm===120?150:120;lp.type='lowpass';lp.frequency.value=320;
      g.gain.setValueAtTime(.0001,at);g.gain.exponentialRampToValueAtTime(.04,at+.01);g.gain.exponentialRampToValueAtTime(.0001,at+.16);
      osc.connect(lp);lp.connect(g);g.connect(this.musicBus.master);osc.start(at);osc.stop(at+.2);this.reg(osc,g,lp);
    };
    pulse();this.musicTimers.push(setInterval(pulse,ms));
  },

  scheduleMusic(def){
    this.createMusicBus();this.drone(def.drone);this.schedulePulse(def.bpm);
    const phrase=()=>{
      if(!this.ctx||!this.musicBus)return;
      const count=2+Math.floor(Math.random()*4);let at=this.ctx.currentTime+.1,idx=Math.floor(Math.random()*def.scale.length),direction=Math.random()<.5?1:-1;
      for(let i=0;i<count;i++){
        idx=Math.max(0,Math.min(def.scale.length-1,idx+(i===0?0:direction*(Math.random()<.7?1:0))));
        const dur=def.dur[0]+Math.random()*(def.dur[1]-def.dur[0]),pan=-.55+Math.random()*1.1,vol=.075+Math.random()*.045;
        this.note(def.scale[idx],at,dur,vol,def.type,pan,def.bright,def.pluck);
        at+=def.pluck?.65+Math.random()*1.25:1.8+Math.random()*2.8;
      }
      const gap=(def.gap[0]+Math.random()*(def.gap[1]-def.gap[0]))*1000;
      this.musicTimers.push(setTimeout(phrase,gap));
    };
    phrase();
  },

  async startMusic(){
    this.stopMusic();
    if(this.settings.music==='off'){this.setAudioStatus('Music off. Narration and timers remain active.');return;}
    if(this.settings.music==='atlas'){this.startBundledMusic();return;}
    if(this.settings.music==='local'){this.startLocalMusic();return;}
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC){this.setAudioStatus('Web Audio is unavailable in this browser. Workout and narration still work.',true);return;}
    try{
      this.ctx=new AC();await this.ctx.resume();const def=this.musicDef();this.scheduleMusic(def);
      this.setAudioStatus(def.name+' playing at your selected level. Trainer voice plays over the music.');
    }catch(e){this.stopMusic();this.setAudioStatus('Music could not start. Tap Start again or choose Music off; the workout still works.',true);}
  },

  startBundledMusic(){
    this.localAudio=new Audio('./atlasaudio-relax-511892.mp3');
    this.localAudio.loop=true;
    this.localAudio.volume=Math.min(1,this.settings.musicVolume);
    this.localAudio.play()
      .then(()=>this.setAudioStatus('AtlasAudio Relax playing at '+Math.round(this.settings.musicVolume*100)+'%. Trainer voice plays over the music.'))
      .catch(async()=>{
        this.setAudioStatus('Bundled AtlasAudio track is unavailable. Falling back to generated Zen music.',true);
        this.localAudio=null;
        this.settings.music='zen60';
        this.settings.musicVolume=this.settings.generatedMusicVolume;
        this.renderMenu();
        const AC=window.AudioContext||window.webkitAudioContext;
        if(!AC)return;
        try{this.ctx=new AC();await this.ctx.resume();const def=this.musicDef();this.scheduleMusic(def);}catch(e){}
      });
  },

  startLocalMusic(){
    const inp=document.querySelector('#localMusic');
    if(!inp?.files?.[0]){this.setAudioStatus('Choose a local audio file in MENU, or select another music bed.',true);return;}
    if(this.localAudioUrl)URL.revokeObjectURL(this.localAudioUrl);
    this.localAudioUrl=URL.createObjectURL(inp.files[0]);this.localAudio=new Audio(this.localAudioUrl);this.localAudio.loop=true;
    this.localAudio.volume=Math.min(1,this.settings.musicVolume);
    this.localAudio.play().then(()=>this.setAudioStatus('Local track playing from this device at '+Math.round(this.settings.musicVolume*100)+'%.')).catch(()=>this.setAudioStatus('The local track could not start.',true));
  },

  applyMusicVolume(){
    if(this.musicBus&&this.ctx){
      const target=Math.max(this.settings.musicVolume*.30,.0001);
      this.musicBus.master.gain.setTargetAtTime(target,this.ctx.currentTime,.08);
    }
    if(this.localAudio)this.localAudio.volume=Math.min(1,this.settings.musicVolume);
  },

  duckMusic(){
    // Story Workouts keep music steady under speech/countdowns.
    this.applyMusicVolume();
  },

  suspendMusic(){if(this.ctx?.state==='running')this.ctx.suspend().catch(()=>{});if(this.localAudio&&!this.localAudio.paused)this.localAudio.pause();},
  resumeMusic(){if(this.ctx?.state==='suspended')this.ctx.resume().catch(()=>{});if(this.localAudio?.paused)this.localAudio.play().catch(()=>{});},
  restartMusic(){if(this.phase==='idle'||this.phase==='done')return;this.startMusic();},

  async testMusic(){
    await this.startMusic();
    if(this.ctx&&this.musicBus){
      const now=this.ctx.currentTime+.05;
      this.note(261.63,now,2.2,.13,'triangle',-.2,1900,true);
      this.note(392,now+.18,2.5,.11,'triangle',.25,1800,true);
      this.setAudioStatus('Music test playing now. If you cannot hear it, raise Music volume and check the device/browser volume.');
    }
  },

  stopMusic(){
    this.musicTimers.forEach(t=>{clearTimeout(t);clearInterval(t)});this.musicTimers=[];
    if(this.localAudio){try{this.localAudio.pause();this.localAudio.currentTime=0}catch{}this.localAudio=null;}
    if(this.localAudioUrl){URL.revokeObjectURL(this.localAudioUrl);this.localAudioUrl=null;}
    if(this.ctx){
      this.musicNodes.forEach(n=>{try{if(n.stop)n.stop();if(n.disconnect)n.disconnect()}catch{}});
      this.musicNodes=[];this.ctx.close().catch(()=>{});this.ctx=null;
    }
    this.musicBus=null;
  },

  stopAll(){this.flowToken++;clearInterval(this.timer);this.stopSpeech();this.stopMusic();this.paused=false;}
};

window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();if(window.A)A.installPrompt=e;});
window.addEventListener('DOMContentLoaded',()=>{
  A.init();
  document.addEventListener('click',e=>{
    const m=document.querySelector('#menu'),b=document.querySelector('#menuButton');
    if(m?.classList.contains('open')&&!m.contains(e.target)&&!b.contains(e.target))A.toggleMenu(false);
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape')A.toggleMenu(false);});
});
