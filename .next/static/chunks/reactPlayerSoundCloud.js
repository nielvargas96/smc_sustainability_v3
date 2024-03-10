/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerSoundCloud"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/players/SoundCloud.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-player/lib/players/SoundCloud.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar SoundCloud_exports = {};\n__export(SoundCloud_exports, {\n  default: () => SoundCloud\n});\nmodule.exports = __toCommonJS(SoundCloud_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(app-pages-browser)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://w.soundcloud.com/player/api.js\";\nconst SDK_GLOBAL = \"SC\";\nclass SoundCloud extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"duration\", null);\n    __publicField(this, \"currentTime\", null);\n    __publicField(this, \"fractionLoaded\", null);\n    __publicField(this, \"mute\", () => {\n      this.setVolume(0);\n    });\n    __publicField(this, \"unmute\", () => {\n      if (this.props.volume !== null) {\n        this.setVolume(this.props.volume);\n      }\n    });\n    __publicField(this, \"ref\", (iframe) => {\n      this.iframe = iframe;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url, isReady) {\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((SC) => {\n      if (!this.iframe)\n        return;\n      const { PLAY, PLAY_PROGRESS, PAUSE, FINISH, ERROR } = SC.Widget.Events;\n      if (!isReady) {\n        this.player = SC.Widget(this.iframe);\n        this.player.bind(PLAY, this.props.onPlay);\n        this.player.bind(PAUSE, () => {\n          const remaining = this.duration - this.currentTime;\n          if (remaining < 0.05) {\n            return;\n          }\n          this.props.onPause();\n        });\n        this.player.bind(PLAY_PROGRESS, (e) => {\n          this.currentTime = e.currentPosition / 1e3;\n          this.fractionLoaded = e.loadedProgress;\n        });\n        this.player.bind(FINISH, () => this.props.onEnded());\n        this.player.bind(ERROR, (e) => this.props.onError(e));\n      }\n      this.player.load(url, {\n        ...this.props.config.options,\n        callback: () => {\n          this.player.getDuration((duration) => {\n            this.duration = duration / 1e3;\n            this.props.onReady();\n          });\n        }\n      });\n    });\n  }\n  play() {\n    this.callPlayer(\"play\");\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"seekTo\", seconds * 1e3);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction * 100);\n  }\n  getDuration() {\n    return this.duration;\n  }\n  getCurrentTime() {\n    return this.currentTime;\n  }\n  getSecondsLoaded() {\n    return this.fractionLoaded * this.duration;\n  }\n  render() {\n    const { display } = this.props;\n    const style = {\n      width: \"100%\",\n      height: \"100%\",\n      display\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\n      \"iframe\",\n      {\n        ref: this.ref,\n        src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,\n        style,\n        frameBorder: 0,\n        allow: \"autoplay\"\n      }\n    );\n  }\n}\n__publicField(SoundCloud, \"displayName\", \"SoundCloud\");\n__publicField(SoundCloud, \"canPlay\", import_patterns.canPlay.soundcloud);\n__publicField(SoundCloud, \"loopOnEnded\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvU291bmRDbG91ZC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsNkRBQTZEO0FBQzNJO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEZBQTRGO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLG1HQUFtRztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSw4QkFBOEI7QUFDdkc7QUFDQTtBQUNBLG9EQUFvRCxrQkFBa0IsYUFBYTtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJCQUEyQixtQkFBTyxDQUFDLG1GQUFPO0FBQzFDLG1CQUFtQixtQkFBTyxDQUFDLDhFQUFVO0FBQ3JDLHNCQUFzQixtQkFBTyxDQUFDLG9GQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw0Q0FBNEM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxtQ0FBbUM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYXllci9saWIvcGxheWVycy9Tb3VuZENsb3VkLmpzPzJkZTAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvRVNNID0gKG1vZCwgaXNOb2RlTW9kZSwgdGFyZ2V0KSA9PiAodGFyZ2V0ID0gbW9kICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kKSkgOiB7fSwgX19jb3B5UHJvcHMoXG4gIC8vIElmIHRoZSBpbXBvcnRlciBpcyBpbiBub2RlIGNvbXBhdGliaWxpdHkgbW9kZSBvciB0aGlzIGlzIG5vdCBhbiBFU01cbiAgLy8gZmlsZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCB0byBhIENvbW1vbkpTIGZpbGUgdXNpbmcgYSBCYWJlbC1cbiAgLy8gY29tcGF0aWJsZSB0cmFuc2Zvcm0gKGkuZS4gXCJfX2VzTW9kdWxlXCIgaGFzIG5vdCBiZWVuIHNldCksIHRoZW4gc2V0XG4gIC8vIFwiZGVmYXVsdFwiIHRvIHRoZSBDb21tb25KUyBcIm1vZHVsZS5leHBvcnRzXCIgZm9yIG5vZGUgY29tcGF0aWJpbGl0eS5cbiAgaXNOb2RlTW9kZSB8fCAhbW9kIHx8ICFtb2QuX19lc01vZHVsZSA/IF9fZGVmUHJvcCh0YXJnZXQsIFwiZGVmYXVsdFwiLCB7IHZhbHVlOiBtb2QsIGVudW1lcmFibGU6IHRydWUgfSkgOiB0YXJnZXQsXG4gIG1vZFxuKSk7XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xuICBfX2RlZk5vcm1hbFByb3Aob2JqLCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiID8ga2V5ICsgXCJcIiA6IGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIFNvdW5kQ2xvdWRfZXhwb3J0cyA9IHt9O1xuX19leHBvcnQoU291bmRDbG91ZF9leHBvcnRzLCB7XG4gIGRlZmF1bHQ6ICgpID0+IFNvdW5kQ2xvdWRcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoU291bmRDbG91ZF9leHBvcnRzKTtcbnZhciBpbXBvcnRfcmVhY3QgPSBfX3RvRVNNKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgaW1wb3J0X3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIGltcG9ydF9wYXR0ZXJucyA9IHJlcXVpcmUoXCIuLi9wYXR0ZXJuc1wiKTtcbmNvbnN0IFNES19VUkwgPSBcImh0dHBzOi8vdy5zb3VuZGNsb3VkLmNvbS9wbGF5ZXIvYXBpLmpzXCI7XG5jb25zdCBTREtfR0xPQkFMID0gXCJTQ1wiO1xuY2xhc3MgU291bmRDbG91ZCBleHRlbmRzIGltcG9ydF9yZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJjYWxsUGxheWVyXCIsIGltcG9ydF91dGlscy5jYWxsUGxheWVyKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwiZHVyYXRpb25cIiwgbnVsbCk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImN1cnJlbnRUaW1lXCIsIG51bGwpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJmcmFjdGlvbkxvYWRlZFwiLCBudWxsKTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibXV0ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFZvbHVtZSgwKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwidW5tdXRlXCIsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnZvbHVtZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldFZvbHVtZSh0aGlzLnByb3BzLnZvbHVtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcInJlZlwiLCAoaWZyYW1lKSA9PiB7XG4gICAgICB0aGlzLmlmcmFtZSA9IGlmcmFtZTtcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uTW91bnQgJiYgdGhpcy5wcm9wcy5vbk1vdW50KHRoaXMpO1xuICB9XG4gIGxvYWQodXJsLCBpc1JlYWR5KSB7XG4gICAgKDAsIGltcG9ydF91dGlscy5nZXRTREspKFNES19VUkwsIFNES19HTE9CQUwpLnRoZW4oKFNDKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaWZyYW1lKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCB7IFBMQVksIFBMQVlfUFJPR1JFU1MsIFBBVVNFLCBGSU5JU0gsIEVSUk9SIH0gPSBTQy5XaWRnZXQuRXZlbnRzO1xuICAgICAgaWYgKCFpc1JlYWR5KSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gU0MuV2lkZ2V0KHRoaXMuaWZyYW1lKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuYmluZChQTEFZLCB0aGlzLnByb3BzLm9uUGxheSk7XG4gICAgICAgIHRoaXMucGxheWVyLmJpbmQoUEFVU0UsICgpID0+IHtcbiAgICAgICAgICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5jdXJyZW50VGltZTtcbiAgICAgICAgICBpZiAocmVtYWluaW5nIDwgMC4wNSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnByb3BzLm9uUGF1c2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucGxheWVyLmJpbmQoUExBWV9QUk9HUkVTUywgKGUpID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gZS5jdXJyZW50UG9zaXRpb24gLyAxZTM7XG4gICAgICAgICAgdGhpcy5mcmFjdGlvbkxvYWRlZCA9IGUubG9hZGVkUHJvZ3Jlc3M7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBsYXllci5iaW5kKEZJTklTSCwgKCkgPT4gdGhpcy5wcm9wcy5vbkVuZGVkKCkpO1xuICAgICAgICB0aGlzLnBsYXllci5iaW5kKEVSUk9SLCAoZSkgPT4gdGhpcy5wcm9wcy5vbkVycm9yKGUpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGxheWVyLmxvYWQodXJsLCB7XG4gICAgICAgIC4uLnRoaXMucHJvcHMuY29uZmlnLm9wdGlvbnMsXG4gICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbGF5ZXIuZ2V0RHVyYXRpb24oKGR1cmF0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb24gLyAxZTM7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uUmVhZHkoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcGxheSgpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJwbGF5XCIpO1xuICB9XG4gIHBhdXNlKCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInBhdXNlXCIpO1xuICB9XG4gIHN0b3AoKSB7XG4gIH1cbiAgc2Vla1RvKHNlY29uZHMsIGtlZXBQbGF5aW5nID0gdHJ1ZSkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNlZWtUb1wiLCBzZWNvbmRzICogMWUzKTtcbiAgICBpZiAoIWtlZXBQbGF5aW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgfVxuICB9XG4gIHNldFZvbHVtZShmcmFjdGlvbikge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInNldFZvbHVtZVwiLCBmcmFjdGlvbiAqIDEwMCk7XG4gIH1cbiAgZ2V0RHVyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZHVyYXRpb247XG4gIH1cbiAgZ2V0Q3VycmVudFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWU7XG4gIH1cbiAgZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFjdGlvbkxvYWRlZCAqIHRoaXMuZHVyYXRpb247XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGlzcGxheSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBkaXNwbGF5XG4gICAgfTtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImlmcmFtZVwiLFxuICAgICAge1xuICAgICAgICByZWY6IHRoaXMucmVmLFxuICAgICAgICBzcmM6IGBodHRwczovL3cuc291bmRjbG91ZC5jb20vcGxheWVyLz91cmw9JHtlbmNvZGVVUklDb21wb25lbnQodGhpcy5wcm9wcy51cmwpfWAsXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBmcmFtZUJvcmRlcjogMCxcbiAgICAgICAgYWxsb3c6IFwiYXV0b3BsYXlcIlxuICAgICAgfVxuICAgICk7XG4gIH1cbn1cbl9fcHVibGljRmllbGQoU291bmRDbG91ZCwgXCJkaXNwbGF5TmFtZVwiLCBcIlNvdW5kQ2xvdWRcIik7XG5fX3B1YmxpY0ZpZWxkKFNvdW5kQ2xvdWQsIFwiY2FuUGxheVwiLCBpbXBvcnRfcGF0dGVybnMuY2FuUGxheS5zb3VuZGNsb3VkKTtcbl9fcHVibGljRmllbGQoU291bmRDbG91ZCwgXCJsb29wT25FbmRlZFwiLCB0cnVlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/players/SoundCloud.js\n"));

/***/ })

}]);