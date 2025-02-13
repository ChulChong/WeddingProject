"use strict";(self.webpackChunkwedding=self.webpackChunkwedding||[]).push([[158],{19320:function(e){e.exports=function(e,t){var o="calc(100% + 1px)";return e?{height:t?o:"auto",width:t?"auto":o,position:"absolute",margin:"auto",minHeight:"100%",minWidth:"100%",left:"-100%",right:"-100%",top:"-100%",bottom:"-100%"}:{width:t?o:"auto",height:t?"100%":o}}},22339:function(e,t,o){o.r(t);var i=o(3431),s=o(72791),r=o(28091),a=o(82716),n=o(70291),p=o(82468),d=o(74585),l=o(19320),h=o.n(l),u=function(e){function t(t){var o=e.call(this,t)||this;return o.pause=o.pause.bind(o),o.play=o.play.bind(o),o.playVideoIfNeeded=o.playVideoIfNeeded.bind(o),o.state={playedOnce:!1,loadVideo:t.loadVideo||t.shouldPlay,isPlaying:!1,shouldPlay:t.shouldPlay,reactPlayerLoaded:!1,vimeoPlayerLoaded:!1,hlsPlayerLoaded:!1},o}return(0,i.ZT)(t,e),t.prototype.componentDidMount=function(){this.dynamiclyImportVideoPlayers()},t.prototype.dynamiclyImportVideoPlayers=function(){var e=this;r.Z&&r.Z.ReactPlayer||Promise.resolve().then(o.bind(o,96710)).then((function(t){r.Z.ReactPlayer=t.default,e.setState({reactPlayerLoaded:!0}),e.playVideoIfNeeded()})),r.Z&&r.Z.Vimeo||!this.props.videoUrl||!this.props.videoUrl.includes("vimeo.com")||o.e(877).then(o.bind(o,70090)).then((function(t){r.Z.Vimeo={Player:t.default},e.setState({vimeoPlayerLoaded:!0}),e.playVideoIfNeeded()})),r.Z&&r.Z.Hls||!this.isHLSVideo()||o.e(164).then(o.t.bind(o,89843,23)).then((function(t){r.Z.Hls=t.default,e.setState({hlsPlayerLoaded:!0}),e.playVideoIfNeeded()}))},t.prototype.isHLSVideo=function(){return this.props.videoUrl&&(this.props.videoUrl.includes("/hls")||this.props.videoUrl.includes(".m3u8"))},t.prototype.shouldUseHlsPlayer=function(){return this.isHLSVideo()&&!a.Z.isiOS()},t.prototype.shouldForceVideoForHLS=function(){return this.isHLSVideo()&&a.Z.isiOS()},t.prototype.UNSAFE_componentWillReceiveProps=function(e){(e.shouldPlay||e.firstUserInteractionExecuted)&&this.setState({loadVideo:!0}),e.shouldPlay&&this.setState({shouldPlay:!0}),this.playVideoIfNeeded(e)},t.prototype.componentDidUpdate=function(e){e.activeIndex!==this.props.activeIndex&&this.fixIFrameTabIndexIfNeeded(),"image"===e.type&&"video"===this.props.type&&this.dynamiclyImportVideoPlayers(),this.playVideoIfNeeded()},t.prototype.play=function(){this.props.playVideo(this.props.idx)},t.prototype.pause=function(){this.props.pauseVideo()},t.prototype.playVideoIfNeeded=function(e){void 0===e&&(e=this.props);try{e.shouldPlay&&!this.isPlaying&&(this.videoElement=this.videoElement||r.Z.document.querySelector("#video-"+this.props.id+" video"),this.videoElement&&(this.isPlaying=!0,this.videoElement.play(),a.Z.isVerbose()&&console.log("[VIDEO] Playing video #"+this.props.idx,this.videoElement)))}catch(t){console.error("[VIDEO] Could not play video #"+this.props.idx,this.videoElement,t)}},t.prototype.createPlayerElement=function(){var e=this;if(!r.Z||!r.Z.ReactPlayer||!this.state.loadVideo&&!this.props.playing)return null;var t=r.Z.ReactPlayer,o=this.props.style.ratio>=this.props.cropRatio,a=this.props.options[n.Z.layoutParams.crop.enable]&&this.props.options[n.Z.layoutParams.crop.method]===p.Z[n.Z.layoutParams.crop.method].FILL,l=this.props.videoUrl?this.props.videoUrl:this.props.createUrl(p.Z.urlSizes.RESIZED,p.Z.urlTypes.VIDEO),u={controlsList:"nodownload",disablePictureInPicture:"true",muted:!this.props.options[n.Z.behaviourParams.item.video.volume],preload:"metadata",style:h()(a,o),type:"video/mp4"};return(0,d.WT)(this.props.options)&&(u.poster=this.props.createUrl(p.Z.urlSizes.SCALED,p.Z.urlTypes.HIGH_RES)),s.createElement(t,{playsinline:!0,className:"gallery-item-visible video gallery-item",id:"video-"+this.props.id,width:"100%",height:"100%",url:l,alt:"string"===typeof this.props.alt?this.props.alt:"untitled video",loop:!!this.props.options[n.Z.behaviourParams.item.video.loop],ref:function(t){return e.video=t},volume:this.props.options[n.Z.behaviourParams.item.video.volume]?.8:0,playing:this.state.shouldPlay,onEnded:function(){e.setState({isPlaying:!1}),e.props.actions.eventsListener(p.Z.events.VIDEO_ENDED,e.props)},onPause:function(){e.setState({isPlaying:!1})},onError:function(t){e.props.actions.eventsListener(p.Z.events.VIDEO_ERROR,(0,i.pi)((0,i.pi)({},e.props),{videoError:t}))},playbackRate:Number(this.props.options[n.Z.behaviourParams.item.video.speed])||1,onStart:function(){e.state.playedOnce||e.setState({playedOnce:!0})},onPlay:function(){e.props.actions.eventsListener(p.Z.events.VIDEO_PLAYED,e.props),e.setState({isPlaying:!0})},onReady:function(){e.playVideoIfNeeded(),e.fixIFrameTabIndexIfNeeded(),e.props.actions.setItemLoaded(),e.setState({ready:!0})},onProgress:function(){e.props.shouldPlay||e.setState({shouldPlay:!1})},controls:this.props.options[n.Z.behaviourParams.item.video.enableControls],config:{file:{attributes:u,forceHLS:this.shouldUseHlsPlayer(),forceVideo:this.shouldForceVideoForHLS()}},key:"video-"+this.props.id})},t.prototype.fixIFrameTabIndexIfNeeded=function(){if(this.props.isExternalVideo){var e=r.Z.document&&r.Z.document.getElementById("video-"+this.props.id),t=e&&e.getElementsByTagName("iframe"),o=t&&t[0];o&&(this.props.activeIndex===this.props.idx?o.setAttribute("tabIndex","0"):o.setAttribute("tabIndex","-1"))}},t.prototype.getVideoContainerStyles=function(){var e=(0,i.pi)({},this.props.imageDimensions);return a.Z.deviceHasMemoryIssues()||this.state.ready||!(0,d.WT)(this.props.options)||(e.backgroundImage="url("+this.props.createUrl(p.Z.urlSizes.RESIZED,p.Z.urlTypes.HIGH_RES)+")"),e},t.prototype.render=function(){var e=this.props,t=e.thumbnail,o=e.hover,i=["gallery-item-content","gallery-item-visible","gallery-item-preloaded","gallery-item-video","gallery-item","video-item"];a.Z.isiPhone()&&i.push("ios"),this.state.isPlaying&&i.push("playing"),this.state.playedOnce&&this.state.ready&&i.push("playedOnce"),this.props.isCurrentHover?i.push("item-content-hover"):i.push("item-content-regular");var r=s.createElement("div",{className:i.join(" "),"data-hook":"video_container-video-player-element",key:"video_container-"+this.props.id,style:this.getVideoContainerStyles()},this.createPlayerElement(),this.state.isPlaying?null:this.props.videoPlayButton);return s.createElement("div",{key:"video-and-hover-container"+this.props.idx},r,(0,d.WT)(this.props.options)&&t,o)},t}(s.Component);t.default=u}}]);
//# sourceMappingURL=proGallery_videoItem.cb19affb.chunk.js.map