/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hls/HLS.ts":
/*!************************!*\
  !*** ./src/hls/HLS.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HLS": () => (/* binding */ HLS)
/* harmony export */ });
class HLS {
    constructor() {
        this._header = ["#EXTM3U", "#EXT-X-VERSION:3", "#EXT-X-TARGETDURATION:6", "#EXT-X-MEDIA-SEQUENCE:"];
        this._playlist = [];
        this._sequence = 0;
    }
    addPlaylistTest(playlist) { }
    addPlaylist(playlist, allowAds = false) {
        if (playlist === null) {
            return false;
        }
        let changed = false;
        const lines = playlist.toString().split(/[\r\n]/);
        this._header[4] = lines[4];
        this._header[5] = lines[5];
        //take all m3u9 content to the playlist and build a varible
        for (const i in lines) {
            if (lines[i].includes("#EXTINF")) {
                if (!allowAds) {
                    if (!lines[i].includes(",live")) {
                        continue;
                    }
                }
                //timestamp sequence
                const sequenceTimestamp = Math.floor(new Date(lines[parseInt(i) - 1].slice(lines[parseInt(i) - 1].length - 24, lines[parseInt(i) - 1].length)).getTime() / 1000);
                //select all sequence that no exist
                const r = this._playlist.filter((x) => {
                    return x.timestamp >= sequenceTimestamp;
                });
                //add the sequence on playlist variable if it no exist
                if (!r.length) {
                    this._sequence = this._sequence + 1;
                    this._playlist.push({
                        time: lines[parseInt(i) - 1],
                        timestamp: sequenceTimestamp,
                        info: lines[parseInt(i)],
                        url: lines[parseInt(i) + 1],
                    });
                    changed = true;
                }
                while (this._playlist.length > 15) {
                    this._playlist.shift();
                }
            }
        }
        return changed;
    }
    getPlaylist() {
        let playlist = "";
        this._playlist.forEach((x) => (playlist = playlist + x.time + "\n" + x.info + "\n" + x.url + "\n"));
        return (this._header[0] +
            "\n" +
            this._header[1] +
            "\n" +
            this._header[2] +
            "\n" +
            this._header[3] +
            this._sequence +
            "\n" +
            this._header[4] +
            "\n" +
            this._header[5] +
            "\n" +
            playlist);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSExTLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hscy9ITFMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLEdBQUc7SUFBaEI7UUFDVSxZQUFPLEdBQWtCLENBQUMsU0FBUyxFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDOUcsY0FBUyxHQUFtQixFQUFFLENBQUM7UUFDL0IsY0FBUyxHQUFHLENBQUMsQ0FBQztJQXdFeEIsQ0FBQztJQXRFQyxlQUFlLENBQUMsUUFBZ0IsSUFBRyxDQUFDO0lBRXBDLFdBQVcsQ0FBQyxRQUFnQixFQUFFLFdBQW9CLEtBQUs7UUFDckQsSUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFcEIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUzQiwyREFBMkQ7UUFDM0QsS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLEVBQUU7WUFDckIsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUMvQixTQUFTO3FCQUNWO2lCQUNGO2dCQUNELG9CQUFvQjtnQkFDcEIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMs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

/***/ }),

/***/ "./src/player/message.ts":
/*!*******************************!*\
  !*** ./src/player/message.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerMessage": () => (/* binding */ PlayerMessage)
/* harmony export */ });
class PlayerMessage {
    constructor() {
        this.getQuality = () => __webpack_require__.g.postMessage({ type: "getQuality" });
        this.init = () => __webpack_require__.g.postMessage({ type: "init" });
        this.pause = () => __webpack_require__.g.postMessage({ type: "pause" });
        this.play = () => __webpack_require__.g.postMessage({ type: "play" });
        this.pauseAndPlay = () => {
            this.pause();
            this.play();
        };
        this.isLoaded = false;
        this.quality = "";
        __webpack_require__.g.onEventMessage = (e) => {
            // var myMessage = new MessageEvent('worker', { data: 'hello' });
            // if (global.onmessage) global.onmessage(this, myMessage);
            switch (e.data.funcName) {
                case "Buffering": {
                    break;
                }
                case "onClientSinkPlaying": {
                    break;
                }
                case "onClientSinkUpdate": {
                    break;
                }
                case "pause": {
                    break;
                }
                case "play": {
                    break;
                }
                case "Ready": {
                    break;
                }
                case "Playing": {
                    break;
                }
                case "setQuality": {
                    if (e.data.args)
                        this.quality = e.data.args[0].name;
                    if (e.data.value)
                        this.quality = e.data.value;
                    break;
                }
                case "setSetting": {
                    this.setting = e.data.value;
                    break;
                }
                default: {
                    break;
                }
            }
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wbGF5ZXIvbWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sYUFBYTtJQWdCeEI7UUFmQSxlQUFVLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzlELFNBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbEQsVUFBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNwRCxTQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQztRQUVGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUtuQixNQUFNLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDakMsaUVBQWlFO1lBRWpFLDJEQUEyRDtZQUUzRCxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN2QixLQUFLLFdBQVcsQ0FBQyxDQUFDO29CQUNoQixNQUFNO2lCQUNQO2dCQUNELEtBQUsscUJBQXFCLENBQUMsQ0FBQztvQkFDMUIsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLG9CQUFvQixDQUFDLENBQUM7b0JBQ3pCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxPQUFPLENBQUMsQ0FBQztvQkFDWixNQUFNO2lCQUNQO2dCQUNELEtBQUssTUFBTSxDQUFDLENBQUM7b0JBQ1gsTUFBTTtpQkFDUDtnQkFDRCxLQUFLLE9BQU8sQ0FBQyxDQUFDO29CQUNaLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxTQUFTLENBQUMsQ0FBQztvQkFDZCxNQUFNO2lCQUNQO2dCQUNELEtBQUssWUFBWSxDQUFDLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO3dCQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNwRCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUM5QyxNQUFNO2lCQUNQO2dCQUNELEtBQUssWUFBWSxDQUFDLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7b0JBQzVCLE1BQU07aUJBQ1A7Z0JBQ0QsT0FBTyxDQUFDLENBQUM7b0JBQ1AsTUFBTTtpQkFDUDthQUNGO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNGIn0=

/***/ }),

/***/ "./src/player/player.ts":
/*!******************************!*\
  !*** ./src/player/player.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _stream_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stream/stream */ "./src/stream/stream.ts");
/* harmony import */ var _stream_type_stream_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stream/type/stream.type */ "./src/stream/type/stream.type.ts");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ "./src/player/message.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class Player {
    constructor() {
        this.streamList = [];
        this.actualChannel = "";
        this.playingAds = false;
        this.message = new _message__WEBPACK_IMPORTED_MODULE_2__.PlayerMessage();
        this.LogPrint = __webpack_require__.g.LogPrint;
        this.onStartAds = () => { };
        this.onEndAds = () => { };
        this.isAds = (x, allowChange = false) => {
            // const ads = x.toString().includes("stitched-ad") || x.toString().includes("twitch-client-ad") || x.toString().includes("twitch-ad-quartile");
            const ads = x.toString().includes("stitched");
            if (!allowChange)
                return ads;
            if (this.playingAds != ads && ads)
                this.onStartAds();
            if (this.playingAds != ads && !ads)
                this.onEndAds();
            this.playingAds = ads;
            return this.playingAds;
        };
        this.currentStream = (channel = this.actualChannel) => {
            return this.streamList.find((x) => x.channelName === channel);
        };
        this.message.init();
    }
    onfetch(url, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentStream = yield this.currentStream();
            currentStream.hls.addPlaylist(response);
            if (!this.isAds(response, true))
                return true;
            try {
                const local = yield this.fetchm3u8ByStreamType(_stream_type_stream_type__WEBPACK_IMPORTED_MODULE_1__.streams.local);
                if (local)
                    currentStream.hls.addPlaylist(local);
                if (!local)
                    currentStream.streamAccess(_stream_type_stream_type__WEBPACK_IMPORTED_MODULE_1__.streams.local);
                if (local)
                    return true;
                const external = yield this.fetchm3u8ByStreamType(_stream_type_stream_type__WEBPACK_IMPORTED_MODULE_1__.streams.external);
                if (external)
                    currentStream.hls.addPlaylist(external);
                if (external)
                    return true;
                console.log("fail");
                // currentStream.hls.addPlaylist(response, true);
                return false;
            }
            catch (e) {
                console.log(e.message);
            }
        });
    }
    fetchm3u8ByStreamType(accessType) {
        return __awaiter(this, void 0, void 0, function* () {
            this.LogPrint("Stream Type: " + accessType.name);
            const streamUrlList = this.currentStream().getStreamServersByStreamType(accessType, this.message.quality);
            //by the array order, try get m3u8 content and return if don't have ads.
            for (const streamUrl of streamUrlList) {
                const text = yield (yield __webpack_require__.g.realFetch(streamUrl === null || streamUrl === void 0 ? void 0 : streamUrl.url)).text();
                if (this.isAds(text))
                    continue;
                return text;
            }
            return "";
        });
    }
    onStartChannel(url, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const channelName = /hls\/(.*).m3u8/gm.exec(url) || [];
            let existent = false;
            let whitelist = [];
            if (!channelName[1])
                return false;
            this.actualChannel = channelName[1];
            this.LogPrint("Channel " + this.actualChannel);
            if (!this.message.setting == undefined) {
                if (!this.message.setting.whitelist == undefined) {
                    whitelist = this.message.setting.whitelist;
                }
            }
            if (whitelist.includes(this.actualChannel))
                return false;
            if (!this.streamList.find((c) => c.channelName === this.actualChannel)) {
                let proxyUrl = "";
                if (this.message.setting)
                    proxyUrl = this.message.setting.proxyUrl ? this.message.setting.proxyUrl : "";
                this.streamList.push(new _stream_stream__WEBPACK_IMPORTED_MODULE_0__.Stream(this.actualChannel, proxyUrl));
            }
            else {
                this.LogPrint("Exist: " + this.actualChannel);
                this.currentStream().serverList = [];
                existent = true;
            }
            const stream = this.currentStream();
            //--------------------------------------------//
            //--------------------------------------------//
            this.LogPrint("Local Server: Loading");
            yield stream.addStreamLink(text, "local");
            this.LogPrint("Local Server: OK");
            stream.streamAccess(_stream_type_stream_type__WEBPACK_IMPORTED_MODULE_1__.streams.local);
            if (existent)
                return;
            //if the proxy option on popup is disabled, it is never called.
            if (this.message.setting) {
                if (this.message.setting.toggleProxy)
                    stream.tryExternalPlayer();
            }
            return;
        });
    }
    inflateFetch() {
        //eslint-disable-next-line no-this-assign
        __webpack_require__.g.fetch = function (url, options) {
            return __awaiter(this, arguments, void 0, function* () {
                if (typeof url === "string") {
                    if (url.endsWith("m3u8") && url.includes("ttvnw.net")) {
                        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                            try {
                                yield __webpack_require__.g
                                    .realFetch(url, options)
                                    .then((response) => __awaiter(this, void 0, void 0, function* () { return response.text(); }))
                                    .then((text) => __awaiter(this, void 0, void 0, function* () {
                                    //send the flow stream to script valitor and classificator
                                    yield __webpack_require__.g.player.onfetch(url, text);
                                    var playlist = __webpack_require__.g.player.currentStream().hls.getPlaylist();
                                    resolve(new Response(playlist));
                                }));
                            }
                            catch (_a) {
                                resolve(new Response());
                            }
                        }));
                    }
                    if (url.includes("usher.ttvnw.net/api/channel/hls/") && !url.includes("picture-by-picture")) {
                        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                            try {
                                const response = yield __webpack_require__.g.realFetch(url, options);
                                if (!response.ok) {
                                    resolve(response);
                                    //this.LogPrint("channel offline");
                                }
                                response.text().then((text) => __awaiter(this, void 0, void 0, function* () {
                                    yield __webpack_require__.g.player.onStartChannel(url, text);
                                    resolve(new Response(text));
                                }));
                            }
                            catch (_b) {
                                resolve(new Response());
                            }
                        }));
                    }
                    if (url.includes("picture-by-picture")) {
                        this.LogPrint("picture-by-picture");
                        return new Response();
                    }
                }
                return __webpack_require__.g.realFetch.apply(this, arguments);
            });
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3BsYXllci9wbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSw0QkFBNEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTFDLE1BQU0sT0FBTyxNQUFNO0lBUWpCO1FBUEEsZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUMxQixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLFlBQU8sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQzlCLGFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBTTNCLGVBQVUsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkIsYUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVyQixVQUFLLEdBQUcsQ0FBQyxDQUFTLEVBQUUsY0FBdUIsS0FBSyxFQUFFLEVBQUU7WUFDbEQsZ0pBQWdKO1lBQ2hKLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLFdBQVc7Z0JBQUUsT0FBTyxHQUFHLENBQUM7WUFDN0IsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLEdBQUcsSUFBSSxHQUFHO2dCQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRztnQkFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7WUFFdEIsT0FBTyxJQUFJLENBQUMs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

/***/ }),

/***/ "./src/stream/stream.ts":
/*!******************************!*\
  !*** ./src/stream/stream.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stream": () => (/* binding */ Stream)
/* harmony export */ });
/* harmony import */ var _hls_HLS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hls/HLS */ "./src/hls/HLS.ts");
/* harmony import */ var _type_stream_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type/stream.type */ "./src/stream/type/stream.type.ts");
/* harmony import */ var _type_streamServer_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type/streamServer.types */ "./src/stream/type/streamServer.types.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class Stream {
    constructor(channelName, tunnel = "") {
        this.serverList = [];
        this.hls = new _hls_HLS__WEBPACK_IMPORTED_MODULE_0__.HLS();
        this.channelName = "";
        this.tunnel = ["https://eu1.jupter.ga/channel/{channelname}", "https://eu2.jupter.ga/channel/{channelname}"];
        this.currentTunnel = this.tunnel[0];
        this.tryExternalPlayer = () => __awaiter(this, void 0, void 0, function* () {
            if (!(yield this.streamAccess(_type_stream_type__WEBPACK_IMPORTED_MODULE_1__.streams.external))) {
                this.externalPlayer(true);
            }
        });
        this.channelName = channelName;
        if (tunnel)
            this.currentTunnel = tunnel;
    }
    //add m3u8 links with quality to the list of servers
    addStreamLink(text, type = "local", sig = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const qualityUrlSplit = [];
            let captureArray;
            const REGEX = /NAME="((?:\S+\s+\S+|\S+))",AUTO(?:^|\S+\s+)(?:^|\S+\s+)(https:\/\/video(\S+).m3u8)/g;
            while ((captureArray = REGEX.exec(text)) !== null) {
                qualityUrlSplit.push({ quality: captureArray[1], url: captureArray[2] });
            }
            const streamList = new _type_streamServer_types__WEBPACK_IMPORTED_MODULE_2__.streamServer({ type: type, urlList: qualityUrlSplit, sig: sig });
            this.serverList.push(streamList);
            if (!sig) {
                yield this.signature();
            }
            return true;
        });
    }
    signature() {
        return __awaiter(this, void 0, void 0, function* () {
            const REGEX = /video-weaver.(.*).hls.ttvnw.net\/v1\/playlist\/(.*).m3u8$/gm;
            yield new Promise((resolve) => {
                this.serverList
                    .filter((x) => x.sig == false)
                    .forEach((x) => __awaiter(this, void 0, void 0, function* () {
                    const match = REGEX.exec(x.urlList[0].url);
                    if (match) {
                        try {
                            yield fetch("https://jupter.ga/hls/v2/sig/" + match[2] + "/" + match[1]);
                            x.sig = true;
                            resolve(true);
                        }
                        catch (_a) {
                            resolve(false);
                        }
                    }
                    else {
                        resolve(false);
                    }
                })),
                    resolve(false);
            });
        });
    }
    //add a new player stream external
    externalPlayer(customIgnore = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if (customIgnore)
                this.currentTunnel = this.tunnel[0];
            try {
                __webpack_require__.g.LogPrint("External Server: Loading");
                const response = yield __webpack_require__.g.realFetch(this.currentTunnel.replace("{channelname}", this.channelName));
                if (!response.ok) {
                    throw new Error("server proxy return error or not found");
                }
                const text = yield response.text();
                __webpack_require__.g.LogPrint("External Server: OK");
                this.addStreamLink(text, _type_stream_type__WEBPACK_IMPORTED_MODULE_1__.streams.external.name);
                return true;
            }
            catch (e) {
                __webpack_require__.g.LogPrint("server proxy return error or not found " + this.currentTunnel);
                __webpack_require__.g.LogPrint(e);
                return false;
            }
        });
    }
    //create a new stream access
    streamAccess(stream) {
        return __awaiter(this, void 0, void 0, function* () {
            if (stream.name == _type_stream_type__WEBPACK_IMPORTED_MODULE_1__.streams.external.name)
                return yield this.externalPlayer();
            try {
                const query = 'query PlaybackAccessToken_Template($login: String!, $isLive: Boolean!, $vodID: ID!, $isVod: Boolean!, $playerType: String!) {  streamPlaybackAccessToken(channelName: $login, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isLive) {    value    signature    __typename  }  videoPlaybackAccessToken(id: $vodID, params: {platform: "web", playerBackend: "mediaplayer", playerType: $playerType}) @include(if: $isVod) {    value    signature    __typename  }}';
                const body = {
                    operationName: "PlaybackAccessToken_Template",
                    query: query,
                    variables: {
                        isLive: true,
                        login: this.channelName,
                        isVod: false,
                        vodID: "",
                        playerType: stream.playerType,
                    },
                };
                const gql = yield __webpack_require__.g.realFetch("https://gql.twitch.tv/gql", {
                    method: "POST",
                    headers: { "Client-ID": "kimne78kx3ncx6brgo4mv6wki5h1ko" },
                    body: JSON.stringify(body),
                });
                const streamDataAccess = yield gql.json();
                const url = "https://usher.ttvnw.net/api/channel/hls/" +
                    this.channelName +
                    ".m3u8?allow_source=true&fast_bread=true&p=" +
                    Math.floor(Math.random() * 1e7) +
                    "&player_backend=mediaplayer&playlist_include_framerate=true&reassignments_supported=false&sig=" +
                    streamDataAccess.data.streamPlaybackAccessToken.signature +
                    "&supported_codecs=avc1&token=" +
                    streamDataAccess.data.streamPlaybackAccessToken.value;
                const text = yield (yield __webpack_require__.g.realFetch(url)).text();
                __webpack_require__.g.LogPrint("Server loaded " + stream.name);
                this.addStreamLink(text, stream.name);
                return true;
            }
            catch (e) {
                console.log(e);
                return false;
            }
        });
    }
    getStreamServersByStreamType(accessType, quality) {
        //filter all server by type
        const servers = this.serverList.filter((x) => x.type == accessType.name);
        if (!servers)
            return [];
        //filter all server url by quality or bestquality
        const streamUrlList = servers.map((x) => x.findByQuality(quality)).filter((x) => x !== undefined);
        return !streamUrlList.length ? servers.map((x) => x.bestQuality()) : streamUrlList;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3N0cmVhbS9zdHJlYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNqQyxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXJFLE1BQU0sT0FBTyxNQUFNO0lBUWpCLFlBQVksV0FBbUIsRUFBRSxTQUFpQixFQUFFO1FBUHBELGVBQVUsR0FBbUIsRUFBRSxDQUFDO1FBQ2hDLFFBQUcsR0FBUSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRXpCLFdBQU0sR0FBRyxDQUFDLDZDQUE2QyxFQUFFLDZDQUE2QyxDQUFDLENBQUM7UUFDeEcsa0JBQWEsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBNEV2QyxzQkFBaUIsR0FBRyxHQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNCO1FBQ0gsQ0FBQyxDQUFBLENBQUM7UUE3RUEsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxNQUFNO1lBQUUsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7SUFDMUMsQ0FBQztJQUVELG9EQUFvRDtJQUM5QyxhQUFhLENBQUMsSUFBWSxFQUFFLElBQUksR0FBRyxPQUFPLEVBQUUsR0FBRyxHQUFHLElBQUk7O1lBQzFELE1BQU0sZUFBZSxHQUFpQixFQUFFLENBQUM7WUFDekMsSUFBSSxZQUFvQyxDQUFDO1lBRXpDLE1B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

/***/ }),

/***/ "./src/stream/type/stream.type.ts":
/*!****************************************!*\
  !*** ./src/stream/type/stream.type.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "streams": () => (/* binding */ streams)
/* harmony export */ });
const streams = {
    picture: { playerType: "thunderdome", name: "lower" },
    local: { playerType: "embed", name: "normal" },
    external: { name: "external" },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtLnR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RyZWFtL3R5cGUvc3RyZWFtLnR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHO0lBQ3JCLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUNyRCxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDOUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtDQUMvQixDQUFDIn0=

/***/ }),

/***/ "./src/stream/type/streamServer.types.ts":
/*!***********************************************!*\
  !*** ./src/stream/type/streamServer.types.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qualityUrl": () => (/* binding */ qualityUrl),
/* harmony export */   "streamServer": () => (/* binding */ streamServer)
/* harmony export */ });
class qualityUrl {
    constructor() {
        this.url = "";
        this.quality = "";
    }
}
class streamServer {
    constructor(partial) {
        this.bestQuality = () => {
            return this.urlList[0];
        };
        this.findByQuality = (quality) => this.urlList.find((x) => x.quality == quality);
        Object.assign(this, partial);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtU2VydmVyLnR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0cmVhbS90eXBlL3N0cmVhbVNlcnZlci50eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sVUFBVTtJQUF2QjtRQUNFLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQUE7QUFDRCxNQUFNLE9BQU8sWUFBWTtJQVV2QixZQUFZLE9BQThCO1FBTDFDLGdCQUFXLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUM7UUFDRixrQkFBYSxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQztRQUdsRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0YifQ==

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/app.worker.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player/player */ "./src/player/player.ts");

function app() {
    __webpack_require__.g.LogPrint = (x) => console.log("[Purple]: ", x);
    __webpack_require__.g.addEventListener("message", (e) => {
        __webpack_require__.g.onEventMessage(e);
    });
    const player = new _player_player__WEBPACK_IMPORTED_MODULE_0__.Player();
    __webpack_require__.g.realFetch = __webpack_require__.g.fetch;
    __webpack_require__.g.player = player;
    player.inflateFetch();
    __webpack_require__.g.LogPrint("Script running");
}
app();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLndvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAud29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVN6QyxNQUFNLENBQUMsT0FBTyxVQUFVLEdBQUc7SUFDekIsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFO1FBQzVDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBRTVCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNoQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUV2QixNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFDRCxHQUFHLEVBQUUsQ0FBQyJ9
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDMUI7QUFDZixJQUFJLHFCQUFNO0FBQ1YsSUFBSSxxQkFBTTtBQUNWLFFBQVEscUJBQU07QUFDZCxLQUFLO0FBQ0wsdUJBQXVCLGtEQUFNO0FBQzdCLElBQUkscUJBQU0sYUFBYSxxQkFBTTtBQUM3QixJQUFJLHFCQUFNO0FBQ1Y7QUFDQSxJQUFJLHFCQUFNO0FBQ1Y7QUFDQTtBQUNBLDJDQUEyQywyMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGxzL0hMUy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyL21lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXllci9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmVhbS9zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cmVhbS90eXBlL3N0cmVhbS50eXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHJlYW0vdHlwZS9zdHJlYW1TZXJ2ZXIudHlwZXMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC53b3JrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhMUyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9oZWFkZXIgPSBbXCIjRVhUTTNVXCIsIFwiI0VYVC1YLVZFUlNJT046M1wiLCBcIiNFWFQtWC1UQVJHRVREVVJBVElPTjo2XCIsIFwiI0VYVC1YLU1FRElBLVNFUVVFTkNFOlwiXTtcclxuICAgICAgICB0aGlzLl9wbGF5bGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3NlcXVlbmNlID0gMDtcclxuICAgIH1cclxuICAgIGFkZFBsYXlsaXN0VGVzdChwbGF5bGlzdCkgeyB9XHJcbiAgICBhZGRQbGF5bGlzdChwbGF5bGlzdCwgYWxsb3dBZHMgPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChwbGF5bGlzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBwbGF5bGlzdC50b1N0cmluZygpLnNwbGl0KC9bXFxyXFxuXS8pO1xyXG4gICAgICAgIHRoaXMuX2hlYWRlcls0XSA9IGxpbmVzWzRdO1xyXG4gICAgICAgIHRoaXMuX2hlYWRlcls1XSA9IGxpbmVzWzVdO1xyXG4gICAgICAgIC8vdGFrZSBhbGwgbTN1OSBjb250ZW50IHRvIHRoZSBwbGF5bGlzdCBhbmQgYnVpbGQgYSB2YXJpYmxlXHJcbiAgICAgICAgZm9yIChjb25zdCBpIGluIGxpbmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChsaW5lc1tpXS5pbmNsdWRlcyhcIiNFWFRJTkZcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYWxsb3dBZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxpbmVzW2ldLmluY2x1ZGVzKFwiLGxpdmVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy90aW1lc3RhbXAgc2VxdWVuY2VcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlVGltZXN0YW1wID0gTWF0aC5mbG9vcihuZXcgRGF0ZShsaW5lc1twYXJzZUludChpKSAtIDFdLnNsaWNlKGxpbmVzW3BhcnNlSW50KGkpIC0gMV0ubGVuZ3RoIC0gMjQsIGxpbmVzW3BhcnNlSW50KGkpIC0gMV0ubGVuZ3RoKSkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAvL3NlbGVjdCBhbGwgc2VxdWVuY2UgdGhhdCBubyBleGlzdFxyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuX3BsYXlsaXN0LmZpbHRlcigoeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4LnRpbWVzdGFtcCA+PSBzZXF1ZW5jZVRpbWVzdGFtcDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy9hZGQgdGhlIHNlcXVlbmNlIG9uIHBsYXlsaXN0IHZhcmlhYmxlIGlmIGl0IG5vIGV4aXN0XHJcbiAgICAgICAgICAgICAgICBpZiAoIXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VxdWVuY2UgPSB0aGlzLl9zZXF1ZW5jZSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWxpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGxpbmVzW3BhcnNlSW50KGkpIC0gMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogc2VxdWVuY2VUaW1lc3RhbXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZm86IGxpbmVzW3BhcnNlSW50KGkpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBsaW5lc1twYXJzZUludChpKSArIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3BsYXlsaXN0Lmxlbmd0aCA+IDE1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxheWxpc3Quc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2hhbmdlZDtcclxuICAgIH1cclxuICAgIGdldFBsYXlsaXN0KCkge1xyXG4gICAgICAgIGxldCBwbGF5bGlzdCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fcGxheWxpc3QuZm9yRWFjaCgoeCkgPT4gKHBsYXlsaXN0ID0gcGxheWxpc3QgKyB4LnRpbWUgKyBcIlxcblwiICsgeC5pbmZvICsgXCJcXG5cIiArIHgudXJsICsgXCJcXG5cIikpO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5faGVhZGVyWzBdICtcclxuICAgICAgICAgICAgXCJcXG5cIiArXHJcbiAgICAgICAgICAgIHRoaXMuX2hlYWRlclsxXSArXHJcbiAgICAgICAgICAgIFwiXFxuXCIgK1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFkZXJbMl0gK1xyXG4gICAgICAgICAgICBcIlxcblwiICtcclxuICAgICAgICAgICAgdGhpcy5faGVhZGVyWzNdICtcclxuICAgICAgICAgICAgdGhpcy5fc2VxdWVuY2UgK1xyXG4gICAgICAgICAgICBcIlxcblwiICtcclxuICAgICAgICAgICAgdGhpcy5faGVhZGVyWzRdICtcclxuICAgICAgICAgICAgXCJcXG5cIiArXHJcbiAgICAgICAgICAgIHRoaXMuX2hlYWRlcls1XSArXHJcbiAgICAgICAgICAgIFwiXFxuXCIgK1xyXG4gICAgICAgICAgICBwbGF5bGlzdCk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pU0V4VExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDJoc2N5OUlURk11ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNUVUZCVFN4UFFVRlBMRWRCUVVjN1NVRkJhRUk3VVVGRFZTeFpRVUZQTEVkQlFXdENMRU5CUVVNc1UwRkJVeXhGUVVGRkxHdENRVUZyUWl4RlFVRkZMSGxDUVVGNVFpeEZRVUZGTEhkQ1FVRjNRaXhEUVVGRExFTkJRVU03VVVGRE9VY3NZMEZCVXl4SFFVRnRRaXhGUVVGRkxFTkJRVU03VVVGREwwSXNZMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVhkRmVFSXNRMEZCUXp0SlFYUkZReXhsUVVGbExFTkJRVU1zVVVGQlowSXNTVUZCUnl4RFFVRkRPMGxCUlhCRExGZEJRVmNzUTBGQlF5eFJRVUZuUWl4RlFVRkZMRmRCUVc5Q0xFdEJRVXM3VVVGRGNrUXNTVUZCU1N4UlFVRlJMRXRCUVVzc1NVRkJTU3hGUVVGRk8xbEJRM0pDTEU5QlFVOHNTMEZCU3l4RFFVRkRPMU5CUTJRN1VVRkZSQ3hKUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZGY0VJc1RVRkJUU3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEZGQlFWRXNSVUZCUlN4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU5zUkN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVNelFpeEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0UlFVVXpRaXd5UkVGQk1rUTdVVUZETTBRc1MwRkJTeXhOUVVGTkxFTkJRVU1zU1VGQlNTeExRVUZMTEVWQlFVVTdXVUZEY2tJc1NVRkJTU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhGUVVGRk8yZENRVU5vUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8yOUNRVU5pTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZPM2RDUVVNdlFpeFRRVUZUTzNGQ1FVTldPMmxDUVVOR08yZENRVU5FTEc5Q1FVRnZRanRuUWtGRGNFSXNUVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVTnNReXhKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGRE0wZ3NRMEZCUXp0blFrRkZSaXh0UTBGQmJVTTdaMEpCUTI1RExFMUJRVTBzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUTNCRExFOUJRVThzUTBGQlF5eERRVUZETEZOQlFWTXNTVUZCU1N4cFFrRkJhVUlzUTBGQlF6dG5Ra0ZETVVNc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEwZ3NjMFJCUVhORU8yZENRVU4wUkN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJUdHZRa0ZEWWl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRPMjlDUVVOd1F5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJRenQzUWtGRGJFSXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPM2RDUVVNMVFpeFRRVUZUTEVWQlFVVXNhVUpCUVdsQ08zZENRVU0xUWl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0M1FrRkRlRUlzUjBGQlJ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzNGQ1FVTTFRaXhEUVVGRExFTkJRVU03YjBKQlEwZ3NUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRwUWtGRGFFSTdaMEpCUTBRc1QwRkJUeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RlFVRkZMRVZCUVVVN2IwSkJRMnBETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03YVVKQlEzaENPMkZCUTBZN1UwRkRSanRSUVVORUxFOUJRVThzVDBGQlR5eERRVUZETzBsQlEycENMRU5CUVVNN1NVRkZSQ3hYUVVGWE8xRkJRMVFzU1VGQlNTeFJRVUZSTEVkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUlRGQ0xFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEZGQlFWRXNSMEZCUnl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRM0JITEU5QlFVOHNRMEZEVEN4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5tTEVsQlFVazdXVUZEU2l4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5tTEVsQlFVazdXVUZEU2l4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5tTEVsQlFVazdXVUZEU2l4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5tTEVsQlFVa3NRMEZCUXl4VFFVRlRPMWxCUTJRc1NVRkJTVHRaUVVOS0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJZc1NVRkJTVHRaUVVOS0xFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRPMWxCUTJZc1NVRkJTVHRaUVVOS0xGRkJRVkVzUTBGRFZDeERRVUZETzBsQlEwb3NRMEZCUXp0RFFVTkdJbjA9IiwiZXhwb3J0IGNsYXNzIFBsYXllck1lc3NhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRRdWFsaXR5ID0gKCkgPT4gZ2xvYmFsLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJnZXRRdWFsaXR5XCIgfSk7XHJcbiAgICAgICAgdGhpcy5pbml0ID0gKCkgPT4gZ2xvYmFsLnBvc3RNZXNzYWdlKHsgdHlwZTogXCJpbml0XCIgfSk7XHJcbiAgICAgICAgdGhpcy5wYXVzZSA9ICgpID0+IGdsb2JhbC5wb3N0TWVzc2FnZSh7IHR5cGU6IFwicGF1c2VcIiB9KTtcclxuICAgICAgICB0aGlzLnBsYXkgPSAoKSA9PiBnbG9iYWwucG9zdE1lc3NhZ2UoeyB0eXBlOiBcInBsYXlcIiB9KTtcclxuICAgICAgICB0aGlzLnBhdXNlQW5kUGxheSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuaXNMb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnF1YWxpdHkgPSBcIlwiO1xyXG4gICAgICAgIGdsb2JhbC5vbkV2ZW50TWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHZhciBteU1lc3NhZ2UgPSBuZXcgTWVzc2FnZUV2ZW50KCd3b3JrZXInLCB7IGRhdGE6ICdoZWxsbycgfSk7XHJcbiAgICAgICAgICAgIC8vIGlmIChnbG9iYWwub25tZXNzYWdlKSBnbG9iYWwub25tZXNzYWdlKHRoaXMsIG15TWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS5kYXRhLmZ1bmNOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQnVmZmVyaW5nXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbkNsaWVudFNpbmtQbGF5aW5nXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJvbkNsaWVudFNpbmtVcGRhdGVcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBcInBhdXNlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJwbGF5XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJSZWFkeVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiUGxheWluZ1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic2V0UXVhbGl0eVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuZGF0YS5hcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1YWxpdHkgPSBlLmRhdGEuYXJnc1swXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmRhdGEudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVhbGl0eSA9IGUuZGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgXCJzZXRTZXR0aW5nXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHRpbmcgPSBlLmRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXVnpjMkZuWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3YkdGNVpYSXZiV1Z6YzJGblpTNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVN4TlFVRk5MRTlCUVU4c1lVRkJZVHRKUVdkQ2VFSTdVVUZtUVN4bFFVRlZMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3haUVVGWkxFVkJRVVVzUTBGQlF5eERRVUZETzFGQlF6bEVMRk5CUVVrc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZEYkVRc1ZVRkJTeXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVOQlFVTXNRMEZCUXp0UlFVTndSQ3hUUVVGSkxFZEJRVWNzUjBGQlJ5eEZRVUZGTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1EwRkJReXhGUVVGRkxFbEJRVWtzUlVGQlJTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRkRPMUZCUTJ4RUxHbENRVUZaTEVkQlFVY3NSMEZCUnl4RlFVRkZPMWxCUTJ4Q0xFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0WlFVTmlMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dFJRVU5rTEVOQlFVTXNRMEZCUXp0UlFVVkdMR0ZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRmFrSXNXVUZCVHl4SFFVRlhMRVZCUVVVc1EwRkJRenRSUVV0dVFpeE5RVUZOTEVOQlFVTXNZMEZCWXl4SFFVRkhMRU5CUVVNc1EwRkJUU3hGUVVGRkxFVkJRVVU3V1VGRGFrTXNhVVZCUVdsRk8xbEJSV3BGTERKRVFVRXlSRHRaUVVVelJDeFJRVUZSTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8yZENRVU4yUWl4TFFVRkxMRmRCUVZjc1EwRkJReXhEUVVGRE8yOUNRVU5vUWl4TlFVRk5PMmxDUVVOUU8yZENRVU5FTEV0QlFVc3NjVUpCUVhGQ0xFTkJRVU1zUTBGQlF6dHZRa0ZETVVJc1RVRkJUVHRwUWtGRFVEdG5Ra0ZEUkN4TFFVRkxMRzlDUVVGdlFpeERRVUZETEVOQlFVTTdiMEpCUTNwQ0xFMUJRVTA3YVVKQlExQTdaMEpCUTBRc1MwRkJTeXhQUVVGUExFTkJRVU1zUTBGQlF6dHZRa0ZEV2l4TlFVRk5PMmxDUVVOUU8yZENRVU5FTEV0QlFVc3NUVUZCVFN4RFFVRkRMRU5CUVVNN2IwSkJRMWdzVFVGQlRUdHBRa0ZEVUR0blFrRkRSQ3hMUVVGTExFOUJRVThzUTBGQlF5eERRVUZETzI5Q1FVTmFMRTFCUVUwN2FVSkJRMUE3WjBKQlEwUXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJRenR2UWtGRFpDeE5RVUZOTzJsQ1FVTlFPMmRDUVVORUxFdEJRVXNzV1VGQldTeERRVUZETEVOQlFVTTdiMEpCUTJwQ0xFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpPM2RDUVVGRkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRPMjlDUVVOd1JDeEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTenQzUWtGQlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETzI5Q1FVTTVReXhOUVVGTk8ybENRVU5RTzJkQ1FVTkVMRXRCUVVzc1dVRkJXU3hEUVVGRExFTkJRVU03YjBKQlEycENMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNN2IwSkJRelZDTEUxQlFVMDdhVUpCUTFBN1owSkJRMFFzVDBGQlR5eERRVUZETEVOQlFVTTdiMEpCUTFBc1RVRkJUVHRwUWtGRFVEdGhRVU5HTzFGQlEwZ3NRMEZCUXl4RFFVRkRPMGxCUTBvc1EwRkJRenREUVVOR0luMD0iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IFN0cmVhbSB9IGZyb20gXCIuLi9zdHJlYW0vc3RyZWFtXCI7XHJcbmltcG9ydCB7IHN0cmVhbXMgfSBmcm9tIFwiLi4vc3RyZWFtL3R5cGUvc3RyZWFtLnR5cGVcIjtcclxuaW1wb3J0IHsgUGxheWVyTWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2VcIjtcclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0cmVhbUxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmFjdHVhbENoYW5uZWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucGxheWluZ0FkcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG5ldyBQbGF5ZXJNZXNzYWdlKCk7XHJcbiAgICAgICAgdGhpcy5Mb2dQcmludCA9IGdsb2JhbC5Mb2dQcmludDtcclxuICAgICAgICB0aGlzLm9uU3RhcnRBZHMgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5vbkVuZEFkcyA9ICgpID0+IHsgfTtcclxuICAgICAgICB0aGlzLmlzQWRzID0gKHgsIGFsbG93Q2hhbmdlID0gZmFsc2UpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc3QgYWRzID0geC50b1N0cmluZygpLmluY2x1ZGVzKFwic3RpdGNoZWQtYWRcIikgfHwgeC50b1N0cmluZygpLmluY2x1ZGVzKFwidHdpdGNoLWNsaWVudC1hZFwiKSB8fCB4LnRvU3RyaW5nKCkuaW5jbHVkZXMoXCJ0d2l0Y2gtYWQtcXVhcnRpbGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGFkcyA9IHgudG9TdHJpbmcoKS5pbmNsdWRlcyhcInN0aXRjaGVkXCIpO1xyXG4gICAgICAgICAgICBpZiAoIWFsbG93Q2hhbmdlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkcztcclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWluZ0FkcyAhPSBhZHMgJiYgYWRzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblN0YXJ0QWRzKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXlpbmdBZHMgIT0gYWRzICYmICFhZHMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW5kQWRzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWluZ0FkcyA9IGFkcztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWluZ0FkcztcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0cmVhbSA9IChjaGFubmVsID0gdGhpcy5hY3R1YWxDaGFubmVsKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0cmVhbUxpc3QuZmluZCgoeCkgPT4geC5jaGFubmVsTmFtZSA9PT0gY2hhbm5lbCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UuaW5pdCgpO1xyXG4gICAgfVxyXG4gICAgb25mZXRjaCh1cmwsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFN0cmVhbSA9IHlpZWxkIHRoaXMuY3VycmVudFN0cmVhbSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50U3RyZWFtLmhscy5hZGRQbGF5bGlzdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0FkcyhyZXNwb25zZSwgdHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsID0geWllbGQgdGhpcy5mZXRjaG0zdThCeVN0cmVhbVR5cGUoc3RyZWFtcy5sb2NhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9jYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmVhbS5obHMuYWRkUGxheWxpc3QobG9jYWwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsb2NhbClcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U3RyZWFtLnN0cmVhbUFjY2VzcyhzdHJlYW1zLmxvY2FsKTtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhbClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsID0geWllbGQgdGhpcy5mZXRjaG0zdThCeVN0cmVhbVR5cGUoc3RyZWFtcy5leHRlcm5hbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmVhbS5obHMuYWRkUGxheWxpc3QoZXh0ZXJuYWwpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gY3VycmVudFN0cmVhbS5obHMuYWRkUGxheWxpc3QocmVzcG9uc2UsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmZXRjaG0zdThCeVN0cmVhbVR5cGUoYWNjZXNzVHlwZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTG9nUHJpbnQoXCJTdHJlYW0gVHlwZTogXCIgKyBhY2Nlc3NUeXBlLm5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJlYW1VcmxMaXN0ID0gdGhpcy5jdXJyZW50U3RyZWFtKCkuZ2V0U3RyZWFtU2VydmVyc0J5U3RyZWFtVHlwZShhY2Nlc3NUeXBlLCB0aGlzLm1lc3NhZ2UucXVhbGl0eSk7XHJcbiAgICAgICAgICAgIC8vYnkgdGhlIGFycmF5IG9yZGVyLCB0cnkgZ2V0IG0zdTggY29udGVudCBhbmQgcmV0dXJuIGlmIGRvbid0IGhhdmUgYWRzLlxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0cmVhbVVybCBvZiBzdHJlYW1VcmxMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0geWllbGQgKHlpZWxkIGdsb2JhbC5yZWFsRmV0Y2goc3RyZWFtVXJsID09PSBudWxsIHx8IHN0cmVhbVVybCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RyZWFtVXJsLnVybCkpLnRleHQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQWRzKHRleHQpKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvblN0YXJ0Q2hhbm5lbCh1cmwsIHRleHQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjaGFubmVsTmFtZSA9IC9obHNcXC8oLiopLm0zdTgvZ20uZXhlYyh1cmwpIHx8IFtdO1xyXG4gICAgICAgICAgICBsZXQgZXhpc3RlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHdoaXRlbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoIWNoYW5uZWxOYW1lWzFdKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdHVhbENoYW5uZWwgPSBjaGFubmVsTmFtZVsxXTtcclxuICAgICAgICAgICAgdGhpcy5Mb2dQcmludChcIkNoYW5uZWwgXCIgKyB0aGlzLmFjdHVhbENoYW5uZWwpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMubWVzc2FnZS5zZXR0aW5nID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2Uuc2V0dGluZy53aGl0ZWxpc3QgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVsaXN0ID0gdGhpcy5tZXNzYWdlLnNldHRpbmcud2hpdGVsaXN0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh3aGl0ZWxpc3QuaW5jbHVkZXModGhpcy5hY3R1YWxDaGFubmVsKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0cmVhbUxpc3QuZmluZCgoYykgPT4gYy5jaGFubmVsTmFtZSA9PT0gdGhpcy5hY3R1YWxDaGFubmVsKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByb3h5VXJsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2Uuc2V0dGluZylcclxuICAgICAgICAgICAgICAgICAgICBwcm94eVVybCA9IHRoaXMubWVzc2FnZS5zZXR0aW5nLnByb3h5VXJsID8gdGhpcy5tZXNzYWdlLnNldHRpbmcucHJveHlVcmwgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdHJlYW1MaXN0LnB1c2gobmV3IFN0cmVhbSh0aGlzLmFjdHVhbENoYW5uZWwsIHByb3h5VXJsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxvZ1ByaW50KFwiRXhpc3Q6IFwiICsgdGhpcy5hY3R1YWxDaGFubmVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN0cmVhbSgpLnNlcnZlckxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGV4aXN0ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzdHJlYW0gPSB0aGlzLmN1cnJlbnRTdHJlYW0oKTtcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgICAgICAgICB0aGlzLkxvZ1ByaW50KFwiTG9jYWwgU2VydmVyOiBMb2FkaW5nXCIpO1xyXG4gICAgICAgICAgICB5aWVsZCBzdHJlYW0uYWRkU3RyZWFtTGluayh0ZXh0LCBcImxvY2FsXCIpO1xyXG4gICAgICAgICAgICB0aGlzLkxvZ1ByaW50KFwiTG9jYWwgU2VydmVyOiBPS1wiKTtcclxuICAgICAgICAgICAgc3RyZWFtLnN0cmVhbUFjY2VzcyhzdHJlYW1zLmxvY2FsKTtcclxuICAgICAgICAgICAgaWYgKGV4aXN0ZW50KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvL2lmIHRoZSBwcm94eSBvcHRpb24gb24gcG9wdXAgaXMgZGlzYWJsZWQsIGl0IGlzIG5ldmVyIGNhbGxlZC5cclxuICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZS5zZXR0aW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlLnNldHRpbmcudG9nZ2xlUHJveHkpXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtLnRyeUV4dGVybmFsUGxheWVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW5mbGF0ZUZldGNoKCkge1xyXG4gICAgICAgIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRoaXMtYXNzaWduXHJcbiAgICAgICAgZ2xvYmFsLmZldGNoID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXJsLmVuZHNXaXRoKFwibTN1OFwiKSAmJiB1cmwuaW5jbHVkZXMoXCJ0dHZudy5uZXRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgZ2xvYmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWFsRmV0Y2godXJsLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTsgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCh0ZXh0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2VuZCB0aGUgZmxvdyBzdHJlYW0gdG8gc2NyaXB0IHZhbGl0b3IgYW5kIGNsYXNzaWZpY2F0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgZ2xvYmFsLnBsYXllci5vbmZldGNoKHVybCwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwbGF5bGlzdCA9IGdsb2JhbC5wbGF5ZXIuY3VycmVudFN0cmVhbSgpLmhscy5nZXRQbGF5bGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShwbGF5bGlzdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXMoXCJ1c2hlci50dHZudy5uZXQvYXBpL2NoYW5uZWwvaGxzL1wiKSAmJiAhdXJsLmluY2x1ZGVzKFwicGljdHVyZS1ieS1waWN0dXJlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZ2xvYmFsLnJlYWxGZXRjaCh1cmwsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5Mb2dQcmludChcImNoYW5uZWwgb2ZmbGluZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4oKHRleHQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgZ2xvYmFsLnBsYXllci5vblN0YXJ0Q2hhbm5lbCh1cmwsIHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZSh0ZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXcgUmVzcG9uc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5pbmNsdWRlcyhcInBpY3R1cmUtYnktcGljdHVyZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkxvZ1ByaW50KFwicGljdHVyZS1ieS1waWN0dXJlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdsb2JhbC5yZWFsRmV0Y2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljR3hoZVdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZjM0pqTDNCc1lYbGxjaTl3YkdGNVpYSXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPMEZCUVVFc1QwRkJUeXhGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEd0Q1FVRnJRaXhEUVVGRE8wRkJRekZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRVZCUVdNc1RVRkJUU3cwUWtGQk5FSXNRMEZCUXp0QlFVVnFSU3hQUVVGUExFVkJRVVVzWVVGQllTeEZRVUZGTEUxQlFVMHNWMEZCVnl4RFFVRkRPMEZCUlRGRExFMUJRVTBzVDBGQlR5eE5RVUZOTzBsQlVXcENPMUZCVUVFc1pVRkJWU3hIUVVGaExFVkJRVVVzUTBGQlF6dFJRVU14UWl4clFrRkJZU3hIUVVGWExFVkJRVVVzUTBGQlF6dFJRVU16UWl4bFFVRlZMRWRCUVVjc1MwRkJTeXhEUVVGRE8xRkJSVzVDTEZsQlFVOHNSMEZCUnl4SlFVRkpMR0ZCUVdFc1JVRkJSU3hEUVVGRE8xRkJRemxDTEdGQlFWRXNSMEZCUnl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRE8xRkJUVE5DTEdWQlFWVXNSMEZCUnl4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGRrSXNZVUZCVVN4SFFVRkhMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dFJRVVZ5UWl4VlFVRkxMRWRCUVVjc1EwRkJReXhEUVVGVExFVkJRVVVzWTBGQmRVSXNTMEZCU3l4RlFVRkZMRVZCUVVVN1dVRkRiRVFzWjBwQlFXZEtPMWxCUTJoS0xFMUJRVTBzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdXVUZET1VNc1NVRkJTU3hEUVVGRExGZEJRVmM3WjBKQlFVVXNUMEZCVHl4SFFVRkhMRU5CUVVNN1dVRkROMElzU1VGQlNTeEpRVUZKTEVOQlFVTXNWVUZCVlN4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSE8yZENRVUZGTEVsQlFVa3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRaUVVOeVJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4VlFVRlZMRWxCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ6dG5Ra0ZCUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRkxFTkJRVU03V1VGRGNFUXNTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhIUVVGSExFTkJRVU03V1VGRmRFSXNUMEZCVHl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRE8xRkJRM3BDTEVOQlFVTXNRMEZCUXp0UlFVVkdMR3RDUVVGaExFZEJRVWNzUTBGQlF5eFZRVUZyUWl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGVkxFVkJRVVU3V1VGREwwUXNUMEZCVHl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFWTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExGZEJRVmNzUzBGQlN5eFBRVUZQTEVOQlFVVXNRMEZCUXp0UlFVTjZSU3hEUVVGRExFTkJRVU03VVVGdVFrRXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU4wUWl4RFFVRkRPMGxCYjBKTExFOUJRVThzUTBGQlF5eEhRVUZYTEVWQlFVVXNVVUZCWjBJN08xbEJRM3BETEUxQlFVMHNZVUZCWVN4SFFVRlhMRTFCUVUwc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZETzFsQlEzcEVMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMWxCUlhoRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU03WjBKQlFVVXNUMEZCVHl4SlFVRkpMRU5CUVVNN1dVRkZOME1zU1VGQlNUdG5Ra0ZEUml4TlFVRk5MRXRCUVVzc1IwRkJSeXhOUVVGTkxFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdaMEpCUXpsRUxFbEJRVWtzUzBGQlN6dHZRa0ZCUlN4aFFVRmhMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0blFrRkRhRVFzU1VGQlNTeERRVUZETEV0QlFVczdiMEpCUVVVc1lVRkJZU3hEUVVGRExGbEJRVmtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1owSkJRM1JFTEVsQlFVa3NTMEZCU3p0dlFrRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dG5Ra0ZGZGtJc1RVRkJUU3hSUVVGUkxFZEJRVWNzVFVGQlRTeEpRVUZKTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMmRDUVVOd1JTeEpRVUZKTEZGQlFWRTdiMEpCUVVVc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1owSkJRM1JFTEVsQlFVa3NVVUZCVVR0dlFrRkJSU3hQUVVGUExFbEJRVWtzUTBGQlF6dG5Ra0ZGTVVJc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0blFrRkZjRUlzYVVSQlFXbEVPMmRDUVVOcVJDeFBRVUZQTEV0QlFVc3NRMEZCUXp0aFFVTmtPMWxCUVVNc1QwRkJUeXhEUVVGTkxFVkJRVVU3WjBKQlEyWXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdZVUZEZUVJN1VVRkRTQ3hEUVVGRE8wdEJRVUU3U1VGRlN5eHhRa0ZCY1VJc1EwRkJReXhWUVVGelFqczdXVUZEYUVRc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eGxRVUZsTEVkQlFVY3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xbEJSV3BFTEUxQlFVMHNZVUZCWVN4SFFVRnBRaXhKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTXNORUpCUVRSQ0xFTkJRVU1zVlVGQlZTeEZRVUZGTEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03V1VGRmVFZ3NkMFZCUVhkRk8xbEJRM2hGTEV0QlFVc3NUVUZCVFN4VFFVRlRMRWxCUVVrc1lVRkJZU3hGUVVGRk8yZENRVU55UXl4TlFVRk5MRWxCUVVrc1IwRkJWeXhOUVVGTkxFTkJRVU1zVFVGQlRTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRk5CUVZNc1lVRkJWQ3hUUVVGVExIVkNRVUZVTEZOQlFWTXNRMEZCUlN4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzJkQ1FVTXpSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRPMjlDUVVGRkxGTkJRVk03WjBKQlF5OUNMRTlCUVU4c1NVRkJTU3hEUVVGRE8yRkJRMkk3V1VGRlJDeFBRVUZQTEVWQlFVVXNRMEZCUXp0UlFVTmFMRU5CUVVNN1MwRkJRVHRKUVVOTExHTkJRV01zUTBGQlF5eEhRVUZYTEVWQlFVVXNTVUZCV1RzN1dVRkROVU1zVFVGQlRTeFhRVUZYTEVkQlFYbENMR3RDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03V1VGRE4wVXNTVUZCU1N4UlFVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRE8xbEJRM0pDTEVsQlFVa3NVMEZCVXl4SFFVRmhMRVZCUVVVc1EwRkJRenRaUVVVM1FpeEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGQlJTeFBRVUZQTEV0QlFVc3NRMEZCUXp0WlFVVnNReXhKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOd1F5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVTTdXVUZGTDBNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHl4SlFVRkpMRk5CUVZNc1JVRkJSVHRuUWtGRGRFTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNTVUZCU1N4VFFVRlRMRVZCUVVVN2IwSkJRMmhFTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTTdhVUpCUXpWRE8yRkJRMFk3V1VGRlJDeEpRVUZKTEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF6dG5Ra0ZCUlN4UFFVRlBMRXRCUVVzc1EwRkJRenRaUVVWNlJDeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZUTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhYUVVGWExFdEJRVXNzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RlFVRkZPMmRDUVVNNVJTeEpRVUZKTEZGQlFWRXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJRMnhDTEVsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUE8yOUNRVUZGTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8yZENRVU40Unl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdZVUZEYUVVN2FVSkJRVTA3WjBKQlEwd3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMmRDUVVNNVF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNc1ZVRkJWU3hIUVVGSExFVkJRVVVzUTBGQlFUdG5Ra0ZEY0VNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF6dGhRVU5xUWp0WlFVVkVMRTFCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVXNRMEZCUXp0WlFVTndReXhuUkVGQlowUTdXVUZGYUVRc1owUkJRV2RFTzFsQlEyaEVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zZFVKQlFYVkNMRU5CUVVNc1EwRkJRenRaUVVOMlF5eE5RVUZOTEUxQlFVMHNRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzFsQlF6RkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRaUVVWc1F5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dFpRVVZ1UXl4SlFVRkpMRkZCUVZFN1owSkJRVVVzVDBGQlR6dFpRVVZ5UWl3clJFRkJLMFE3V1VGREwwUXNTVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJUdG5Ra0ZEZUVJc1NVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhPMjlDUVVGRkxFMUJRVTBzUTBGQlF5eHBRa0ZCYVVJc1JVRkJSU3hEUVVGRE8yRkJRMnhGTzFsQlJVUXNUMEZCVHp0UlFVTlVMRU5CUVVNN1MwRkJRVHRKUVVWRUxGbEJRVms3VVVGRFZpeDVRMEZCZVVNN1VVRkRla01zVFVGQlRTeERRVUZETEV0QlFVc3NSMEZCUnl4VlFVRm5RaXhIUVVGSExFVkJRVVVzVDBGQlR6czdaMEpCUTNwRExFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NVVUZCVVN4RlFVRkZPMjlDUVVNelFpeEpRVUZKTEVkQlFVY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4WFFVRlhMRU5CUVVNc1JVRkJSVHQzUWtGRGNrUXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGUExFOUJRVThzUlVGQlJTeE5RVUZOTEVWQlFVVXNSVUZCUlRzMFFrRkRNME1zU1VGQlNUdG5RMEZEUml4TlFVRk5MRTFCUVUwN2NVTkJRMVFzVTBGQlV5eERRVUZETEVkQlFVY3NSVUZCUlN4UFFVRlBMRU5CUVVNN2NVTkJRM1pDTEVsQlFVa3NRMEZCUXl4RFFVRlBMRkZCUVd0Q0xFVkJRVVVzUlVGQlJTeG5SRUZCUXl4UFFVRkJMRkZCUVZFc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlFTeEhRVUZCTEVOQlFVTTdjVU5CUTI1RUxFbEJRVWtzUTBGQlF5eERRVUZQTEVsQlFWa3NSVUZCUlN4RlFVRkZPMjlEUVVNelFpd3dSRUZCTUVRN2IwTkJRekZFTEUxQlFVMHNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMjlEUVVWMlF5eEpRVUZKTEZGQlFWRXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenR2UTBGREwwUXNUMEZCVHl4RFFVRkRMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRV1VzUTBGQlF5eERRVUZETEVOQlFVTTdaME5CUTNwRExFTkJRVU1zUTBGQlFTeERRVUZETEVOQlFVTTdOa0pCUTA0N05FSkJRVU1zVjBGQlRUdG5RMEZEVGl4UFFVRlBMRU5CUVVNc1NVRkJTU3hSUVVGUkxFVkJRVVVzUTBGQlF5eERRVUZET3paQ1FVTjZRanQzUWtGRFNDeERRVUZETEVOQlFVRXNRMEZCUXl4RFFVRkRPM0ZDUVVOS08yOUNRVVZFTEVsQlFVa3NSMEZCUnl4RFFVRkRMRkZCUVZFc1EwRkJReXhyUTBGQmEwTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eHZRa0ZCYjBJc1EwRkJReXhGUVVGRk8zZENRVU16Uml4UFFVRlBMRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVThzVDBGQlR5eEZRVUZGTEUxQlFVMHNSVUZCUlN4RlFVRkZPelJDUVVNelF5eEpRVUZKTzJkRFFVTkdMRTFCUVUwc1VVRkJVU3hIUVVGSExFMUJRVTBzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03WjBOQlEzUkVMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeEZRVUZGTzI5RFFVTm9RaXhQUVVGUExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdiME5CUTJ4Q0xHMURRVUZ0UXp0cFEwRkRjRU03WjBOQlJVUXNVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZQTEVsQlFWa3NSVUZCUlN4RlFVRkZPMjlEUVVNeFF5eE5RVUZOTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0dlEwRkRPVU1zVDBGQlR5eERRVUZETEVsQlFVa3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WjBOQlF6bENMRU5CUVVNc1EwRkJRU3hEUVVGRExFTkJRVU03TmtKQlEwbzdORUpCUVVNc1YwRkJUVHRuUTBGRFRpeFBRVUZQTEVOQlFVTXNTVUZCU1N4UlFVRlJMRVZCUVVVc1EwRkJReXhEUVVGRE96WkNRVU42UWp0M1FrRkRTQ3hEUVVGRExFTkJRVUVzUTBGQlF5eERRVUZETzNGQ1FVTktPMjlDUVVWRUxFbEJRVWtzUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4dlFrRkJiMElzUTBGQlF5eEZRVUZGTzNkQ1FVTjBReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEc5Q1FVRnZRaXhEUVVGRExFTkJRVU03ZDBKQlEzQkRMRTlCUVU4c1NVRkJTU3hSUVVGUkxFVkJRVVVzUTBGQlF6dHhRa0ZEZGtJN2FVSkJRMFk3WjBKQlJVUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1dVRkRha1FzUTBGQlF6dFRRVUZCTEVOQlFVTTdTVUZEU2l4RFFVRkRPME5CUTBZaWZRPT0iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IEhMUyB9IGZyb20gXCIuLi9obHMvSExTXCI7XHJcbmltcG9ydCB7IHN0cmVhbXMgfSBmcm9tIFwiLi90eXBlL3N0cmVhbS50eXBlXCI7XHJcbmltcG9ydCB7IHN0cmVhbVNlcnZlciB9IGZyb20gXCIuL3R5cGUvc3RyZWFtU2VydmVyLnR5cGVzXCI7XHJcbmV4cG9ydCBjbGFzcyBTdHJlYW0ge1xyXG4gICAgY29uc3RydWN0b3IoY2hhbm5lbE5hbWUsIHR1bm5lbCA9IFwiXCIpIHtcclxuICAgICAgICB0aGlzLnNlcnZlckxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmhscyA9IG5ldyBITFMoKTtcclxuICAgICAgICB0aGlzLmNoYW5uZWxOYW1lID0gXCJcIjtcclxuICAgICAgICB0aGlzLnR1bm5lbCA9IFtcImh0dHBzOi8vZXUxLmp1cHRlci5nYS9jaGFubmVsL3tjaGFubmVsbmFtZX1cIiwgXCJodHRwczovL2V1Mi5qdXB0ZXIuZ2EvY2hhbm5lbC97Y2hhbm5lbG5hbWV9XCJdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFR1bm5lbCA9IHRoaXMudHVubmVsWzBdO1xyXG4gICAgICAgIHRoaXMudHJ5RXh0ZXJuYWxQbGF5ZXIgPSAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghKHlpZWxkIHRoaXMuc3RyZWFtQWNjZXNzKHN0cmVhbXMuZXh0ZXJuYWwpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHRlcm5hbFBsYXllcih0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbE5hbWUgPSBjaGFubmVsTmFtZTtcclxuICAgICAgICBpZiAodHVubmVsKVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUdW5uZWwgPSB0dW5uZWw7XHJcbiAgICB9XHJcbiAgICAvL2FkZCBtM3U4IGxpbmtzIHdpdGggcXVhbGl0eSB0byB0aGUgbGlzdCBvZiBzZXJ2ZXJzXHJcbiAgICBhZGRTdHJlYW1MaW5rKHRleHQsIHR5cGUgPSBcImxvY2FsXCIsIHNpZyA9IHRydWUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCBxdWFsaXR5VXJsU3BsaXQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNhcHR1cmVBcnJheTtcclxuICAgICAgICAgICAgY29uc3QgUkVHRVggPSAvTkFNRT1cIigoPzpcXFMrXFxzK1xcUyt8XFxTKykpXCIsQVVUTyg/Ol58XFxTK1xccyspKD86XnxcXFMrXFxzKykoaHR0cHM6XFwvXFwvdmlkZW8oXFxTKykubTN1OCkvZztcclxuICAgICAgICAgICAgd2hpbGUgKChjYXB0dXJlQXJyYXkgPSBSRUdFWC5leGVjKHRleHQpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcXVhbGl0eVVybFNwbGl0LnB1c2goeyBxdWFsaXR5OiBjYXB0dXJlQXJyYXlbMV0sIHVybDogY2FwdHVyZUFycmF5WzJdIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbUxpc3QgPSBuZXcgc3RyZWFtU2VydmVyKHsgdHlwZTogdHlwZSwgdXJsTGlzdDogcXVhbGl0eVVybFNwbGl0LCBzaWc6IHNpZyB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJMaXN0LnB1c2goc3RyZWFtTGlzdCk7XHJcbiAgICAgICAgICAgIGlmICghc2lnKSB7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnNpZ25hdHVyZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2lnbmF0dXJlKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFJFR0VYID0gL3ZpZGVvLXdlYXZlci4oLiopLmhscy50dHZudy5uZXRcXC92MVxcL3BsYXlsaXN0XFwvKC4qKS5tM3U4JC9nbTtcclxuICAgICAgICAgICAgeWllbGQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+IHguc2lnID09IGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKCh4KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBSRUdFWC5leGVjKHgudXJsTGlzdFswXS51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgZmV0Y2goXCJodHRwczovL2p1cHRlci5nYS9obHMvdjIvc2lnL1wiICsgbWF0Y2hbMl0gKyBcIi9cIiArIG1hdGNoWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguc2lnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vYWRkIGEgbmV3IHBsYXllciBzdHJlYW0gZXh0ZXJuYWxcclxuICAgIGV4dGVybmFsUGxheWVyKGN1c3RvbUlnbm9yZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKGN1c3RvbUlnbm9yZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFR1bm5lbCA9IHRoaXMudHVubmVsWzBdO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLkxvZ1ByaW50KFwiRXh0ZXJuYWwgU2VydmVyOiBMb2FkaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBnbG9iYWwucmVhbEZldGNoKHRoaXMuY3VycmVudFR1bm5lbC5yZXBsYWNlKFwie2NoYW5uZWxuYW1lfVwiLCB0aGlzLmNoYW5uZWxOYW1lKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2VydmVyIHByb3h5IHJldHVybiBlcnJvciBvciBub3QgZm91bmRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0geWllbGQgcmVzcG9uc2UudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLkxvZ1ByaW50KFwiRXh0ZXJuYWwgU2VydmVyOiBPS1wiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3RyZWFtTGluayh0ZXh0LCBzdHJlYW1zLmV4dGVybmFsLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5Mb2dQcmludChcInNlcnZlciBwcm94eSByZXR1cm4gZXJyb3Igb3Igbm90IGZvdW5kIFwiICsgdGhpcy5jdXJyZW50VHVubmVsKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbC5Mb2dQcmludChlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy9jcmVhdGUgYSBuZXcgc3RyZWFtIGFjY2Vzc1xyXG4gICAgc3RyZWFtQWNjZXNzKHN0cmVhbSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChzdHJlYW0ubmFtZSA9PSBzdHJlYW1zLmV4dGVybmFsLm5hbWUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geWllbGQgdGhpcy5leHRlcm5hbFBsYXllcigpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAncXVlcnkgUGxheWJhY2tBY2Nlc3NUb2tlbl9UZW1wbGF0ZSgkbG9naW46IFN0cmluZyEsICRpc0xpdmU6IEJvb2xlYW4hLCAkdm9kSUQ6IElEISwgJGlzVm9kOiBCb29sZWFuISwgJHBsYXllclR5cGU6IFN0cmluZyEpIHsgIHN0cmVhbVBsYXliYWNrQWNjZXNzVG9rZW4oY2hhbm5lbE5hbWU6ICRsb2dpbiwgcGFyYW1zOiB7cGxhdGZvcm06IFwid2ViXCIsIHBsYXllckJhY2tlbmQ6IFwibWVkaWFwbGF5ZXJcIiwgcGxheWVyVHlwZTogJHBsYXllclR5cGV9KSBAaW5jbHVkZShpZjogJGlzTGl2ZSkgeyAgICB2YWx1ZSAgICBzaWduYXR1cmUgICAgX190eXBlbmFtZSAgfSAgdmlkZW9QbGF5YmFja0FjY2Vzc1Rva2VuKGlkOiAkdm9kSUQsIHBhcmFtczoge3BsYXRmb3JtOiBcIndlYlwiLCBwbGF5ZXJCYWNrZW5kOiBcIm1lZGlhcGxheWVyXCIsIHBsYXllclR5cGU6ICRwbGF5ZXJUeXBlfSkgQGluY2x1ZGUoaWY6ICRpc1ZvZCkgeyAgICB2YWx1ZSAgICBzaWduYXR1cmUgICAgX190eXBlbmFtZSAgfX0nO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25OYW1lOiBcIlBsYXliYWNrQWNjZXNzVG9rZW5fVGVtcGxhdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9naW46IHRoaXMuY2hhbm5lbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVm9kOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm9kSUQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclR5cGU6IHN0cmVhbS5wbGF5ZXJUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZ3FsID0geWllbGQgZ2xvYmFsLnJlYWxGZXRjaChcImh0dHBzOi8vZ3FsLnR3aXRjaC50di9ncWxcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNsaWVudC1JRFwiOiBcImtpbW5lNzhreDNuY3g2YnJnbzRtdjZ3a2k1aDFrb1wiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmVhbURhdGFBY2Nlc3MgPSB5aWVsZCBncWwuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL3VzaGVyLnR0dm53Lm5ldC9hcGkvY2hhbm5lbC9obHMvXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbE5hbWUgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiLm0zdTg/YWxsb3dfc291cmNlPXRydWUmZmFzdF9icmVhZD10cnVlJnA9XCIgK1xyXG4gICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlNykgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJnBsYXllcl9iYWNrZW5kPW1lZGlhcGxheWVyJnBsYXlsaXN0X2luY2x1ZGVfZnJhbWVyYXRlPXRydWUmcmVhc3NpZ25tZW50c19zdXBwb3J0ZWQ9ZmFsc2Umc2lnPVwiICtcclxuICAgICAgICAgICAgICAgICAgICBzdHJlYW1EYXRhQWNjZXNzLmRhdGEuc3RyZWFtUGxheWJhY2tBY2Nlc3NUb2tlbi5zaWduYXR1cmUgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiJnN1cHBvcnRlZF9jb2RlY3M9YXZjMSZ0b2tlbj1cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtRGF0YUFjY2Vzcy5kYXRhLnN0cmVhbVBsYXliYWNrQWNjZXNzVG9rZW4udmFsdWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0geWllbGQgKHlpZWxkIGdsb2JhbC5yZWFsRmV0Y2godXJsKSkudGV4dCgpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsLkxvZ1ByaW50KFwiU2VydmVyIGxvYWRlZCBcIiArIHN0cmVhbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU3RyZWFtTGluayh0ZXh0LCBzdHJlYW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldFN0cmVhbVNlcnZlcnNCeVN0cmVhbVR5cGUoYWNjZXNzVHlwZSwgcXVhbGl0eSkge1xyXG4gICAgICAgIC8vZmlsdGVyIGFsbCBzZXJ2ZXIgYnkgdHlwZVxyXG4gICAgICAgIGNvbnN0IHNlcnZlcnMgPSB0aGlzLnNlcnZlckxpc3QuZmlsdGVyKCh4KSA9PiB4LnR5cGUgPT0gYWNjZXNzVHlwZS5uYW1lKTtcclxuICAgICAgICBpZiAoIXNlcnZlcnMpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAvL2ZpbHRlciBhbGwgc2VydmVyIHVybCBieSBxdWFsaXR5IG9yIGJlc3RxdWFsaXR5XHJcbiAgICAgICAgY29uc3Qgc3RyZWFtVXJsTGlzdCA9IHNlcnZlcnMubWFwKCh4KSA9PiB4LmZpbmRCeVF1YWxpdHkocXVhbGl0eSkpLmZpbHRlcigoeCkgPT4geCAhPT0gdW5kZWZpbmVkKTtcclxuICAgICAgICByZXR1cm4gIXN0cmVhbVVybExpc3QubGVuZ3RoID8gc2VydmVycy5tYXAoKHgpID0+IHguYmVzdFF1YWxpdHkoKSkgOiBzdHJlYW1VcmxMaXN0O1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUnlaV0Z0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lMaTR2TGk0dmMzSmpMM04wY21WaGJTOXpkSEpsWVcwdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN08wRkJRVUVzVDBGQlR5eEZRVUZGTEVkQlFVY3NSVUZCUlN4TlFVRk5MRmxCUVZrc1EwRkJRenRCUVVOcVF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRmpMRTFCUVUwc2IwSkJRVzlDTEVOQlFVTTdRVUZEZWtRc1QwRkJUeXhGUVVGakxGbEJRVmtzUlVGQlJTeE5RVUZOTERKQ1FVRXlRaXhEUVVGRE8wRkJSWEpGTEUxQlFVMHNUMEZCVHl4TlFVRk5PMGxCVVdwQ0xGbEJRVmtzVjBGQmJVSXNSVUZCUlN4VFFVRnBRaXhGUVVGRk8xRkJVSEJFTEdWQlFWVXNSMEZCYlVJc1JVRkJSU3hEUVVGRE8xRkJRMmhETEZGQlFVY3NSMEZCVVN4SlFVRkpMRWRCUVVjc1JVRkJSU3hEUVVGRE8xRkJRM0pDTEdkQ1FVRlhMRWRCUVZjc1JVRkJSU3hEUVVGRE8xRkJSWHBDTEZkQlFVMHNSMEZCUnl4RFFVRkRMRFpEUVVFMlF5eEZRVUZGTERaRFFVRTJReXhEUVVGRExFTkJRVU03VVVGRGVFY3NhMEpCUVdFc1IwRkJWeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCTkVWMlF5eHpRa0ZCYVVJc1IwRkJSeXhIUVVGVExFVkJRVVU3V1VGRE4wSXNTVUZCU1N4RFFVRkRMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRk8yZENRVU5vUkN4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6TkNPMUZCUTBnc1EwRkJReXhEUVVGQkxFTkJRVU03VVVFM1JVRXNTVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhYUVVGWExFTkJRVU03VVVGREwwSXNTVUZCU1N4TlFVRk5PMWxCUVVVc1NVRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eE5RVUZOTEVOQlFVTTdTVUZETVVNc1EwRkJRenRKUVVWRUxHOUVRVUZ2UkR0SlFVTTVReXhoUVVGaExFTkJRVU1zU1VGQldTeEZRVUZGTEVsQlFVa3NSMEZCUnl4UFFVRlBMRVZCUVVVc1IwRkJSeXhIUVVGSExFbEJRVWs3TzFsQlF6RkVMRTFCUVUwc1pVRkJaU3hIUVVGcFFpeEZRVUZGTEVOQlFVTTdXVUZEZWtNc1NVRkJTU3haUVVGdlF5eERRVUZETzFsQlJYcERMRTFCUVUwc1MwRkJTeXhIUVVGSExIRkdRVUZ4Uml4RFFVRkRPMWxCUlhCSExFOUJRVThzUTBGQlF5eFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NSVUZCUlR0blFrRkRha1FzWlVGQlpTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRTlCUVU4c1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RlFVRkZMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdZVUZETVVVN1dVRkZSQ3hOUVVGTkxGVkJRVlVzUjBGQmFVSXNTVUZCU1N4WlFVRlpMRU5CUVVNc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEU5QlFVOHNSVUZCUlN4bFFVRmxMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdXVUZEZEVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1dVRkZha01zU1VGQlNTeERRVUZETEVkQlFVY3NSVUZCUlR0blFrRkRVaXhOUVVGTkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXp0aFFVTjRRanRaUVVORUxFOUJRVThzU1VGQlNTeERRVUZETzFGQlEyUXNRMEZCUXp0TFFVRkJPMGxCUlVzc1UwRkJVenM3V1VGRFlpeE5RVUZOTEV0QlFVc3NSMEZCUnl3MlJFRkJOa1FzUTBGQlF6dFpRVVUxUlN4TlFVRk5MRWxCUVVrc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVWQlFVVTdaMEpCUXpWQ0xFbEJRVWtzUTBGQlF5eFZRVUZWTzNGQ1FVTmFMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU03Y1VKQlEyeERMRTlCUVU4c1EwRkJReXhEUVVGUExFTkJRVTBzUlVGQlJTeEZRVUZGTzI5Q1FVTjRRaXhOUVVGTkxFdEJRVXNzUjBGQk1rSXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yOUNRVU51UlN4SlFVRkpMRXRCUVVzc1JVRkJSVHQzUWtGRFZDeEpRVUZKT3pSQ1FVTkdMRTFCUVUwc1MwRkJTeXhEUVVGRExDdENRVUVyUWl4SFFVRkhMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TkVKQlEzcEZMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZET3pSQ1FVTmlMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dDVRa0ZEWmp0M1FrRkJReXhYUVVGTk96UkNRVU5PTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenQ1UWtGRGFFSTdjVUpCUTBZN2VVSkJRVTA3ZDBKQlEwd3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8zRkNRVU5vUWp0blFrRkRTQ3hEUVVGRExFTkJRVUVzUTBGQlF6dHZRa0ZEUml4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03V1VGRGJrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRUQ3hEUVVGRE8wdEJRVUU3U1VGRlJDeHJRMEZCYTBNN1NVRkROVUlzWTBGQll5eERRVUZETEdWQlFYZENMRXRCUVVzN08xbEJRMmhFTEVsQlFVa3NXVUZCV1R0blFrRkJSU3hKUVVGSkxFTkJRVU1zWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRFUXNTVUZCU1R0blFrRkRSaXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETERCQ1FVRXdRaXhEUVVGRExFTkJRVU03WjBKQlF6VkRMRTFCUVUwc1VVRkJVU3hIUVVGaExFMUJRVTBzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFOUJRVThzUTBGQlF5eGxRVUZsTEVWQlFVVXNTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlJXcElMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeEZRVUZGTzI5Q1FVTm9RaXhOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEhkRFFVRjNReXhEUVVGRExFTkJRVU03YVVKQlF6TkVPMmRDUVVWRUxFMUJRVTBzU1VGQlNTeEhRVUZYTEUxQlFVMHNVVUZCVVN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8yZENRVVV6UXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExIRkNRVUZ4UWl4RFFVRkRMRU5CUVVNN1owSkJSWFpETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1owSkJSV2hFTEU5QlFVOHNTVUZCU1N4RFFVRkRPMkZCUTJJN1dVRkJReXhQUVVGUExFTkJRVU1zUlVGQlJUdG5Ra0ZEVml4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExIbERRVUY1UXl4SFFVRkhMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dG5Ra0ZEYUVZc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRia0lzVDBGQlR5eExRVUZMTEVOQlFVTTdZVUZEWkR0UlFVTklMRU5CUVVNN1MwRkJRVHRKUVZGRUxEUkNRVUUwUWp0SlFVTjBRaXhaUVVGWkxFTkJRVU1zVFVGQmEwSTdPMWxCUTI1RExFbEJRVWtzVFVGQlRTeERRVUZETEVsQlFVa3NTVUZCU1N4UFFVRlBMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWs3WjBKQlFVVXNUMEZCVHl4TlFVRk5MRWxCUVVrc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF6dFpRVVUzUlN4SlFVRkpPMmRDUVVOR0xFMUJRVTBzUzBGQlN5eEhRVU5VTEhWbVFVRjFaaXhEUVVGRE8yZENRVU14Wml4TlFVRk5MRWxCUVVrc1IwRkJSenR2UWtGRFdDeGhRVUZoTEVWQlFVVXNPRUpCUVRoQ08yOUNRVU0zUXl4TFFVRkxMRVZCUVVVc1MwRkJTenR2UWtGRFdpeFRRVUZUTEVWQlFVVTdkMEpCUTFRc1RVRkJUU3hGUVVGRkxFbEJRVWs3ZDBKQlExb3NTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhYUVVGWE8zZENRVU4yUWl4TFFVRkxMRVZCUVVVc1MwRkJTenQzUWtGRFdpeExRVUZMTEVWQlFVVXNSVUZCUlR0M1FrRkRWQ3hWUVVGVkxFVkJRVVVzVFVGQlRTeERRVUZETEZWQlFWVTdjVUpCUXpsQ08ybENRVU5HTEVOQlFVTTdaMEpCUlVZc1RVRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMREpDUVVFeVFpeEZRVUZGTzI5Q1FVTTVSQ3hOUVVGTkxFVkJRVVVzVFVGQlRUdHZRa0ZEWkN4UFFVRlBMRVZCUVVVc1JVRkJSU3hYUVVGWExFVkJRVVVzWjBOQlFXZERMRVZCUVVVN2IwSkJRekZFTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF6dHBRa0ZETTBJc1EwRkJReXhEUVVGRE8yZENRVU5JTEUxQlFVMHNaMEpCUVdkQ0xFZEJRVkVzVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1owSkJSUzlETEUxQlFVMHNSMEZCUnl4SFFVTlFMREJEUVVFd1F6dHZRa0ZETVVNc1NVRkJTU3hEUVVGRExGZEJRVmM3YjBKQlEyaENMRFJEUVVFMFF6dHZRa0ZETlVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRE8yOUNRVU12UWl4blIwRkJaMGM3YjBKQlEyaEhMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4NVFrRkJlVUlzUTBGQlF5eFRRVUZUTzI5Q1FVTjZSQ3dyUWtGQkswSTdiMEpCUXk5Q0xHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXg1UWtGQmVVSXNRMEZCUXl4TFFVRkxMRU5CUVVNN1owSkJRM2hFTEUxQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhOUVVGTkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dG5Ra0ZGZUVRc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdaMEpCUldoRUxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RlFVRkZMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZGZEVNc1QwRkJUeXhKUVVGSkxFTkJRVU03WVVGRFlqdFpRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZPMmRDUVVOV0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMllzVDBGQlR5eExRVUZMTEVOQlFVTTdZVUZEWkR0UlFVTklMRU5CUVVNN1MwRkJRVHRKUVVWRUxEUkNRVUUwUWl4RFFVRkRMRlZCUVhOQ0xFVkJRVVVzVDBGQlpUdFJRVU5zUlN3eVFrRkJNa0k3VVVGRE0wSXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVsQlFVa3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xRkJRM3BGTEVsQlFVa3NRMEZCUXl4UFFVRlBPMWxCUVVVc1QwRkJUeXhGUVVGRkxFTkJRVU03VVVGRmVFSXNhVVJCUVdsRU8xRkJRMnBFTEUxQlFVMHNZVUZCWVN4SFFVRkhMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZsTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhoUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4VFFVRlRMRU5CUVdsQ0xFTkJRVUU3VVVGREwwZ3NUMEZCVHl4RFFVRkRMR0ZCUVdFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eGhRVUZoTEVOQlFVTTdTVUZEY2tZc1EwRkJRenREUVVOR0luMD0iLCJleHBvcnQgY29uc3Qgc3RyZWFtcyA9IHtcclxuICAgIHBpY3R1cmU6IHsgcGxheWVyVHlwZTogXCJ0aHVuZGVyZG9tZVwiLCBuYW1lOiBcImxvd2VyXCIgfSxcclxuICAgIGxvY2FsOiB7IHBsYXllclR5cGU6IFwiZW1iZWRcIiwgbmFtZTogXCJub3JtYWxcIiB9LFxyXG4gICAgZXh0ZXJuYWw6IHsgbmFtZTogXCJleHRlcm5hbFwiIH0sXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUnlaV0Z0TG5SNWNHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOHVMaTh1TGk5emNtTXZjM1J5WldGdEwzUjVjR1V2YzNSeVpXRnRMblI1Y0dVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklrRkJRVUVzVFVGQlRTeERRVUZETEUxQlFVMHNUMEZCVHl4SFFVRkhPMGxCUTNKQ0xFOUJRVThzUlVGQlJTeEZRVUZGTEZWQlFWVXNSVUZCUlN4aFFVRmhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFOUJRVThzUlVGQlJUdEpRVU55UkN4TFFVRkxMRVZCUVVVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVN1NVRkRPVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNTVUZCU1N4RlFVRkZMRlZCUVZVc1JVRkJSVHREUVVNdlFpeERRVUZESW4wPSIsImV4cG9ydCBjbGFzcyBxdWFsaXR5VXJsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudXJsID0gXCJcIjtcclxuICAgICAgICB0aGlzLnF1YWxpdHkgPSBcIlwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBzdHJlYW1TZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IocGFydGlhbCkge1xyXG4gICAgICAgIHRoaXMuYmVzdFF1YWxpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVybExpc3RbMF07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZpbmRCeVF1YWxpdHkgPSAocXVhbGl0eSkgPT4gdGhpcy51cmxMaXN0LmZpbmQoKHgpID0+IHgucXVhbGl0eSA9PSBxdWFsaXR5KTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHBhcnRpYWwpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUnlaV0Z0VTJWeWRtVnlMblI1Y0dWekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dkxpNHZMaTR2YzNKakwzTjBjbVZoYlM5MGVYQmxMM04wY21WaGJWTmxjblpsY2k1MGVYQmxjeTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pUVVGQlFTeE5RVUZOTEU5QlFVOHNWVUZCVlR0SlFVRjJRanRSUVVORkxGRkJRVWNzUjBGQlZ5eEZRVUZGTEVOQlFVTTdVVUZEYWtJc1dVRkJUeXhIUVVGWExFVkJRVVVzUTBGQlF6dEpRVU4yUWl4RFFVRkRPME5CUVVFN1FVRkRSQ3hOUVVGTkxFOUJRVThzV1VGQldUdEpRVlYyUWl4WlFVRlpMRTlCUVRoQ08xRkJUREZETEdkQ1FVRlhMRWRCUVVjc1IwRkJSeXhGUVVGRk8xbEJRMnBDTEU5QlFVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU42UWl4RFFVRkRMRU5CUVVNN1VVRkRSaXhyUWtGQllTeEhRVUZITEVOQlFVTXNUMEZCWlN4RlFVRkZMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJRenRSUVVkc1JpeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dEpRVU12UWl4RFFVRkRPME5CUTBZaWZRPT0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyL3BsYXllclwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHAoKSB7XHJcbiAgICBnbG9iYWwuTG9nUHJpbnQgPSAoeCkgPT4gY29uc29sZS5sb2coXCJbUHVycGxlXTogXCIsIHgpO1xyXG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZ2xvYmFsLm9uRXZlbnRNZXNzYWdlKGUpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XHJcbiAgICBnbG9iYWwucmVhbEZldGNoID0gZ2xvYmFsLmZldGNoO1xyXG4gICAgZ2xvYmFsLnBsYXllciA9IHBsYXllcjtcclxuICAgIHBsYXllci5pbmZsYXRlRmV0Y2goKTtcclxuICAgIGdsb2JhbC5Mb2dQcmludChcIlNjcmlwdCBydW5uaW5nXCIpO1xyXG59XHJcbmFwcCgpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWEJ3TG5kdmNtdGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklpNHVMM055WXk5aGNIQXVkMjl5YTJWeUxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVc1RVRkJUU3hwUWtGQmFVSXNRMEZCUXp0QlFWTjZReXhOUVVGTkxFTkJRVU1zVDBGQlR5eFZRVUZWTEVkQlFVYzdTVUZEZWtJc1RVRkJUU3hEUVVGRExGRkJRVkVzUjBGQlJ5eERRVUZETEVOQlFVMHNSVUZCUlN4RlFVRkZMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNMFFzVFVGQlRTeERRVUZETEdkQ1FVRm5RaXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVOQlFVMHNSVUZCUlN4RlFVRkZPMUZCUXpWRExFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRNMElzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGU0N4TlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxFMUJRVTBzUlVGQlJTeERRVUZETzBsQlJUVkNMRTFCUVUwc1EwRkJReXhUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXp0SlFVTm9ReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVVjJRaXhOUVVGTkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTTdTVUZEZEVJc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8wRkJRM0JETEVOQlFVTTdRVUZEUkN4SFFVRkhMRVZCUVVVc1EwRkJReUo5Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9