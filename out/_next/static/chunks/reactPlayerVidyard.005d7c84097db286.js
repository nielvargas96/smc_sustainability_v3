(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8888],{1296:function(e,t,a){var r,s,l=Object.create,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,p=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,u=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of n(t))h.call(e,s)||s===a||o(e,s,{get:()=>t[s],enumerable:!(r=i(t,s))||r.enumerable});return e},d=(e,t,a)=>(u(e,"symbol"!=typeof t?t+"":t,a),a),c={};((e,t)=>{for(var a in t)o(e,a,{get:t[a],enumerable:!0})})(c,{default:()=>b}),e.exports=y(o({},"__esModule",{value:!0}),c);var m=(s=null!=(r=a(2265))?l(p(r)):{},y(r&&r.__esModule?s:o(s,"default",{value:r,enumerable:!0}),r)),P=a(4117),f=a(5087);class b extends m.Component{constructor(){super(...arguments),d(this,"callPlayer",P.callPlayer),d(this,"mute",()=>{this.setVolume(0)}),d(this,"unmute",()=>{null!==this.props.volume&&this.setVolume(this.props.volume)}),d(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){let{playing:t,config:a,onError:r,onDuration:s}=this.props,l=e&&e.match(f.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,P.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then(e=>{this.container&&(e.api.addReadyListener((e,t)=>{this.player||(this.player=t,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))},l),e.api.renderPlayer({uuid:l,container:this.container,autoplay:t?1:0,...a.options}),e.api.getPlayerMetadata(l).then(e=>{this.duration=e.length_in_seconds,s(e.length_in_seconds)}))},r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){let{display:e}=this.props;return m.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},m.default.createElement("div",{ref:this.ref}))}}d(b,"displayName","Vidyard"),d(b,"canPlay",f.canPlay.vidyard)}}]);