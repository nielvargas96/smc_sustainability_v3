(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6011],{9737:function(e,t,s){var r,i,n=Object.create,o=Object.defineProperty,a=Object.getOwnPropertyDescriptor,h=Object.getOwnPropertyNames,l=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,d=(e,t,s)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,u=(e,t,s,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of h(t))p.call(e,i)||i===s||o(e,i,{get:()=>t[i],enumerable:!(r=a(t,i))||r.enumerable});return e},c=(e,t,s)=>(d(e,"symbol"!=typeof t?t+"":t,s),s),y={};((e,t)=>{for(var s in t)o(e,s,{get:t[s],enumerable:!0})})(y,{default:()=>k}),e.exports=u(o({},"__esModule",{value:!0}),y);var f=(i=null!=(r=s(2265))?n(l(r)):{},u(r&&r.__esModule?i:o(i,"default",{value:r,enumerable:!0}),r)),E=s(4117),m=s(5087);let v="undefined"!=typeof navigator,P=v&&"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1,g=v&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||P)&&!window.MSStream,b=v&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,L=/www\.dropbox\.com\/.+/,S=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;class k extends f.Component{constructor(){super(...arguments),c(this,"onReady",(...e)=>this.props.onReady(...e)),c(this,"onPlay",(...e)=>this.props.onPlay(...e)),c(this,"onBuffer",(...e)=>this.props.onBuffer(...e)),c(this,"onBufferEnd",(...e)=>this.props.onBufferEnd(...e)),c(this,"onPause",(...e)=>this.props.onPause(...e)),c(this,"onEnded",(...e)=>this.props.onEnded(...e)),c(this,"onError",(...e)=>this.props.onError(...e)),c(this,"onPlayBackRateChange",e=>this.props.onPlaybackRateChange(e.target.playbackRate)),c(this,"onEnablePIP",(...e)=>this.props.onEnablePIP(...e)),c(this,"onDisablePIP",e=>{let{onDisablePIP:t,playing:s}=this.props;t(e),s&&this.play()}),c(this,"onPresentationModeChange",e=>{if(this.player&&(0,E.supportsWebKitPresentationMode)(this.player)){let{webkitPresentationMode:t}=this.player;"picture-in-picture"===t?this.onEnablePIP(e):"inline"===t&&this.onDisablePIP(e)}}),c(this,"onSeek",e=>{this.props.onSeek(e.target.currentTime)}),c(this,"mute",()=>{this.player.muted=!0}),c(this,"unmute",()=>{this.player.muted=!1}),c(this,"renderSourceElement",(e,t)=>"string"==typeof e?f.default.createElement("source",{key:t,src:e}):f.default.createElement("source",{key:t,...e})),c(this,"renderTrack",(e,t)=>f.default.createElement("track",{key:t,...e})),c(this,"ref",e=>{this.player&&(this.prevPlayer=this.player),this.player=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);let e=this.getSource(this.props.url);e&&(this.player.src=e),(g||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url===e.url||(0,E.isMediaStream)(this.props.url)||this.props.url instanceof Array||(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.hls&&this.hls.destroy()}addListeners(e){let{url:t,playsinline:s}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.addEventListener("canplay",this.onReady),s&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}removeListeners(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}shouldUseAudio(e){return!e.config.forceVideo&&!e.config.attributes.poster&&(m.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio)}shouldUseHLS(e){return!!b&&!!this.props.config.forceSafariHLS||!!this.props.config.forceHLS||!g&&!this.props.config.forceDisableHls&&(m.HLS_EXTENSIONS.test(e)||S.test(e))}shouldUseDASH(e){return m.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}shouldUseFLV(e){return m.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}load(e){let{hlsVersion:t,hlsOptions:s,dashVersion:r,flvVersion:i}=this.props.config;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,E.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION",t),"Hls").then(t=>{if(this.hls=new t(s),this.hls.on(t.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(t.Events.ERROR,(e,s)=>{this.props.onError(e,s,this.hls,t)}),S.test(e)){let t=e.match(S)[1];this.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}",t))}else this.hls.loadSource(e);this.hls.attachMedia(this.player),this.props.onLoaded()}),this.shouldUseDASH(e)&&(0,E.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION",r),"dashjs").then(t=>{this.dash=t.MediaPlayer().create(),this.dash.initialize(this.player,e,this.props.playing),this.dash.on("error",this.props.onError),3>parseInt(r)?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:t.Debug.LOG_LEVEL_NONE}}),this.props.onLoaded()}),this.shouldUseFLV(e)&&(0,E.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION",i),"flvjs").then(t=>{this.flv=t.createPlayer({type:"flv",url:e}),this.flv.attachMediaElement(this.player),this.flv.on(t.Events.ERROR,(e,s)=>{this.props.onError(e,s,this.flv,t)}),this.flv.load(),this.props.onLoaded()}),e instanceof Array)this.player.load();else if((0,E.isMediaStream)(e))try{this.player.srcObject=e}catch(t){this.player.src=window.URL.createObjectURL(e)}}play(){let e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,E.supportsWebKitPresentationMode)(this.player)&&"picture-in-picture"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,E.supportsWebKitPresentationMode)(this.player)&&"inline"!==this.player.webkitPresentationMode&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(e){try{this.player.playbackRate=e}catch(e){this.props.onError(e)}}getDuration(){if(!this.player)return null;let{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;let{buffered:e}=this.player;if(0===e.length)return 0;let t=e.end(e.length-1),s=this.getDuration();return t>s?s:t}getSource(e){let t=this.shouldUseHLS(e),s=this.shouldUseDASH(e),r=this.shouldUseFLV(e);return e instanceof Array||(0,E.isMediaStream)(e)||t||s||r?void 0:L.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}render(){let{url:e,playing:t,loop:s,controls:r,muted:i,config:n,width:o,height:a}=this.props,h=this.shouldUseAudio(this.props);return f.default.createElement(h?"audio":"video",{ref:this.ref,src:this.getSource(e),style:{width:"auto"===o?o:"100%",height:"auto"===a?a:"100%"},preload:"auto",autoPlay:t||void 0,controls:r,muted:i,loop:s,...n.attributes},e instanceof Array&&e.map(this.renderSourceElement),n.tracks.map(this.renderTrack))}}c(k,"displayName","FilePlayer"),c(k,"canPlay",m.canPlay.file)}}]);