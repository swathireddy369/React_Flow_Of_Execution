// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"icAAj":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "cd1566bccb65f72e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"blcJa":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$4931 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$4931.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$4931.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
// <!-- create h1 element in react// -->
// <!-- okay i ahve method to create  -->
const h1ElementReact = /*#__PURE__*/ (0, _reactDefault.default).createElement('h1', {}, "Hello React Engineer");
// <!-- //create elemt is react core  concept so we have react.createElement -->
// <!-- okay i am ready to render give me to root  -->
//  <!-- okay how can i get root in dom tree
//   i need to create root for dom tree  so that here we have to create root for our react dom tree so thet we have ReactDom.createRoot not in react make sure
console.log(h1ElementReact);
//    -->
// const root = ReactDOM.createRoot(document.getElementById('root'));
//here see you are create root for dom by suing already existed div so now your div bemcomes your reactdom root
//dom tree is ride having 
console.log(root);
// here it creates react Element (object)=HTML (broswer understands)
// while rendering again this object converts it into HTML tag and put it into the root Element
// HTML
// <div id="parent">
//     <div id="child1">
//         <h1>
//             i am h1 tag
//         </h1>
//<h2>
//             i am h2 tag
//         </h2>
//     </div>
// <div id="child2">
//         <h1>
//             i am h1 tag
//         </h1>
//<h2>
//             i am h2 tag
//         </h1>
//     </div>
// </div>
const element = /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
    id: "parent"
}, [
    /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        id: "child1"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("h1", {}, "i am h1 tag"), /*#__PURE__*/ (0, _reactDefault.default).createElement("h1", {}, "i am h2 tag")),
    /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        id: "child2"
    }, /*#__PURE__*/ (0, _reactDefault.default).createElement("h1", {}, "i am h1 tag"), /*#__PURE__*/ (0, _reactDefault.default).createElement("h1", {}, "i am h2 tag"))
]); //seee this is the that we create nested and multiple html elemnts see above commeted html example same how easy it is create same lement without react, so creating muliple and nested react elemnt inside react using react is a very tpugh job so here is tha place the hero JSX came into picture to make our job easy to create nested multiple html elemnt in react easily
 // const rootmy = ReactDOM.createRoot(document.getElementById("root"));
 // rootmy.render(element);
 // hey seee here whenevr we are rendeing something in our root elemtn wich is id:root of div here we are rendeinr element in it right so that this render method will replace already existing or rednering elemnting inside root and replace it with this new element 
 // /this is how js works 
 // but only that portion like which element has root exceptthat remaing html work remains only which ever the tag which we took as root and rendering inside it that only will replace seeee that is waht we call it as libarry means it just a piece of code it works with already existing application it is not framewokr (it comes with lot of baggage) but react does not like that seee
 // it jusra  piece of code written by facebook developers thats it and order of file smeans rendering of scrips is also matters in case where we are tryig to use or render js file whoch using reactour cdn links are after that srciot it wont work write becuase before adding react t usr code it does no who is react react.createElementand reactdom 

  $parcel$ReactRefreshHelpers$4931.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react":"jMk1U","react-dom":"i4X7T","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"jMk1U":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("a569817e6ea559f6");

},{"a569817e6ea559f6":"ghslp"}],"ghslp":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
            get: function() {
                console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
            }
        });
    }
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = !0);
    }
    function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(oldElement.type, newKey, void 0, void 0, oldElement._owner, oldElement.props, oldElement._debugStack, oldElement._debugTask);
        oldElement._store && (newKey._store.validated = oldElement._store.validated);
        return newKey;
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function escape(key) {
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
        });
    }
    function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                switch("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                    "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                }, function(error) {
                    "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                })), thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
        }
        throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = !1;
        if (null === children) invokeCallback = !0;
        else switch(type){
            case "bigint":
            case "string":
            case "number":
                invokeCallback = !0;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = !0;
                        break;
                    case REACT_LAZY_TYPE:
                        return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                }
        }
        if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if (i = getIteratorFn(children), "function" === typeof i) for(i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if ("object" === type) {
            if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
            array = String(children);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
        }
        return invokeCallback;
    }
    function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    function lazyInitializer(payload) {
        if (-1 === payload._status) {
            var ctor = payload._result;
            ctor = ctor();
            ctor.then(function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
            }, function(error) {
                if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
            });
            -1 === payload._status && (payload._status = 0, payload._result = ctor);
        }
        if (1 === payload._status) return ctor = payload._result, void 0 === ctor && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ctor), "default" in ctor || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ctor), ctor.default;
        throw payload._result;
    }
    function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
        if (null === enqueueTaskImpl) try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
            enqueueTaskImpl = function(callback) {
                !1 === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = !0, "undefined" === typeof MessageChannel && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
            };
        }
        return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue) {
            if (0 !== queue.length) try {
                flushActQueue(queue);
                enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                });
                return;
            } catch (error) {
                ReactSharedInternals.thrownErrors.push(error);
            }
            else ReactSharedInternals.actQueue = null;
        }
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
        if (!isFlushing) {
            isFlushing = !0;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do {
                        ReactSharedInternals.didUsePromise = !1;
                        var continuation = callback(!1);
                        if (null !== continuation) {
                            if (ReactSharedInternals.didUsePromise) {
                                queue[i] = callback;
                                queue.splice(0, i);
                                return;
                            }
                            callback = continuation;
                        } else break;
                    }while (1);
                }
                queue.length = 0;
            } catch (error) {
                queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally{
                isFlushing = !1;
            }
        }
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
        }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    }, fnName;
    for(fnName in deprecatedAPIs)deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = !0;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
    }, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    deprecatedAPIs = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = deprecatedAPIs["react-stack-bottom-frame"].bind(deprecatedAPIs, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
                error: error
            });
            if (!window.dispatchEvent(event)) return;
        }
        console.error(error);
    }, didWarnAboutMessageChannel = !1, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = !1, isFlushing = !1, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
            return queueMicrotask(callback);
        });
    } : enqueueTask;
    deprecatedAPIs = Object.freeze({
        __proto__: null,
        c: function(size) {
            return resolveDispatcher().useMemoCache(size);
        }
    });
    exports.Children = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments);
            }, forEachContext);
        },
        count: function(children) {
            var n = 0;
            mapChildren(children, function() {
                n++;
            });
            return n;
        },
        toArray: function(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        },
        only: function(children) {
            if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
            return children;
        }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.__COMPILER_RUNTIME = deprecatedAPIs;
    exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = !1;
        try {
            var result = callback();
        } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
                didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            });
            return {
                then: function(resolve, reject) {
                    didAwaitActCall = !0;
                    thenable.then(function(returnValue) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        if (0 === prevActScopeDepth) {
                            try {
                                flushActQueue(queue), enqueueTask(function() {
                                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                });
                            } catch (error$0) {
                                ReactSharedInternals.thrownErrors.push(error$0);
                            }
                            if (0 < ReactSharedInternals.thrownErrors.length) {
                                var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                                ReactSharedInternals.thrownErrors.length = 0;
                                reject(_thrownError);
                            }
                        } else resolve(returnValue);
                    }, function(error) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                    });
                }
            };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
            then: function(resolve, reject) {
                didAwaitActCall = !0;
                0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
                })) : resolve(returnValue$jscomp$0);
            }
        };
    };
    exports.cache = function(fn) {
        return function() {
            return fn.apply(null, arguments);
        };
    };
    exports.captureOwnerStack = function() {
        var getCurrentStack = ReactSharedInternals.getCurrentStack;
        return null === getCurrentStack ? null : getCurrentStack();
    };
    exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
            var JSCompiler_inline_result;
            a: {
                if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
                    JSCompiler_inline_result = !1;
                    break a;
                }
                JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for(propName in config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for(var i = 0; i < propName; i++)JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
        }
        props = ReactElement(element.type, key, void 0, void 0, owner, props, element._debugStack, element._debugTask);
        for(key = 2; key < arguments.length; key++)owner = arguments[key], isValidElement(owner) && owner._store && (owner._store.validated = 1);
        return props;
    };
    exports.createContext = function(defaultValue) {
        defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
    };
    exports.createElement = function(type, config, children) {
        for(var i = 2; i < arguments.length; i++){
            var node = arguments[i];
            isValidElement(node) && node._store && (node._store.validated = 1);
        }
        i = {};
        node = null;
        if (null != config) for(propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), node = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
            for(var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
        }
        if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        node && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return ReactElement(type, node, void 0, void 0, getOwner(), i, propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
    exports.createRef = function() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    };
    exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        }, ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                render.name || render.displayName || (Object.defineProperty(render, "name", {
                    value: name
                }), render.displayName = name);
            }
        });
        return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
        return {
            $$typeof: REACT_LAZY_TYPE,
            _payload: {
                _status: -1,
                _result: ctor
            },
            _init: lazyInitializer
        };
    };
    exports.memo = function(type, compare) {
        null == type && console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
        compare = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                type.name || type.displayName || (Object.defineProperty(type, "name", {
                    value: name
                }), type.displayName = name);
            }
        });
        return compare;
    };
    exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        currentTransition._updatedFibers = new Set();
        try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
        } catch (error) {
            reportGlobalError(error);
        } finally{
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
        }
    };
    exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
        return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
        return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, createDeps, update) {
        null == create && console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        var dispatcher = resolveDispatcher();
        if ("function" === typeof update) throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return dispatcher.useEffect(create, createDeps);
    };
    exports.useId = function() {
        return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
        null == create && console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
        null == create && console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
        return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
        return resolveDispatcher().useTransition();
    };
    exports.version = "19.1.0";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
})();

},{}],"i4X7T":[function(require,module,exports,__globalThis) {
'use strict';
function checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') return;
    var err;
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
}
module.exports = require("b0f0e6b9e8349dac");

},{"b0f0e6b9e8349dac":"cLd8p"}],"cLd8p":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    function noop() {}
    function testStringCoercion(value) {
        return "" + value;
    }
    function createPortal$1(children, containerInfo, implementation) {
        var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        try {
            testStringCoercion(key);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        JSCompiler_inline_result && (console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", "function" === typeof Symbol && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"), testStringCoercion(key));
        return {
            $$typeof: REACT_PORTAL_TYPE,
            key: null == key ? null : "" + key,
            children: children,
            containerInfo: containerInfo,
            implementation: implementation
        };
    }
    function getCrossOriginStringAs(as, input) {
        if ("font" === as) return "";
        if ("string" === typeof input) return "use-credentials" === input ? input : "";
    }
    function getValueDescriptorExpectingObjectForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : 'something with type "' + typeof thing + '"';
    }
    function getValueDescriptorExpectingEnumForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "string" === typeof thing ? JSON.stringify(thing) : "number" === typeof thing ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
    }
    function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = require("6f0162e9ab224cd4"), Internals = {
        d: {
            f: noop,
            r: function() {
                throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
            },
            D: noop,
            C: noop,
            L: noop,
            m: noop,
            X: noop,
            S: noop,
            M: noop
        },
        p: 0,
        findDOMNode: null
    }, REACT_PORTAL_TYPE = Symbol.for("react.portal"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    "function" === typeof Map && null != Map.prototype && "function" === typeof Map.prototype.forEach && "function" === typeof Set && null != Set.prototype && "function" === typeof Set.prototype.clear && "function" === typeof Set.prototype.forEach || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
    exports.createPortal = function(children, container) {
        var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType) throw Error("Target container is not a DOM element.");
        return createPortal$1(children, container, null, key);
    };
    exports.flushSync = function(fn) {
        var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
        try {
            if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
        } finally{
            ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f() && console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
        }
    };
    exports.preconnect = function(href, options) {
        "string" === typeof href && href ? null != options && "object" !== typeof options ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", getValueDescriptorExpectingEnumForWarning(options)) : null != options && "string" !== typeof options.crossOrigin && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", getValueDescriptorExpectingObjectForWarning(options.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
        "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
    };
    exports.prefetchDNS = function(href) {
        if ("string" !== typeof href || !href) console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
        else if (1 < arguments.length) {
            var options = arguments[1];
            "object" === typeof options && options.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", getValueDescriptorExpectingEnumForWarning(options));
        }
        "string" === typeof href && Internals.d.D(href);
    };
    exports.preinit = function(href, options) {
        "string" === typeof href && href ? null == options || "object" !== typeof options ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", getValueDescriptorExpectingEnumForWarning(options)) : "style" !== options.as && "script" !== options.as && console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".', getValueDescriptorExpectingEnumForWarning(options.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", getValueDescriptorExpectingObjectForWarning(href));
        if ("string" === typeof href && options && "string" === typeof options.as) {
            var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
            "style" === as ? Internals.d.S(href, "string" === typeof options.precedence ? options.precedence : void 0, {
                crossOrigin: crossOrigin,
                integrity: integrity,
                fetchPriority: fetchPriority
            }) : "script" === as && Internals.d.X(href, {
                crossOrigin: crossOrigin,
                integrity: integrity,
                fetchPriority: fetchPriority,
                nonce: "string" === typeof options.nonce ? options.nonce : void 0
            });
        }
    };
    exports.preinitModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "script" !== options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
        if (encountered) console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", encountered);
        else switch(encountered = options && "string" === typeof options.as ? options.as : "script", encountered){
            case "script":
                break;
            default:
                encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)', encountered, href);
        }
        if ("string" === typeof href) {
            if ("object" === typeof options && null !== options) {
                if (null == options.as || "script" === options.as) encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.M(href, {
                    crossOrigin: encountered,
                    integrity: "string" === typeof options.integrity ? options.integrity : void 0,
                    nonce: "string" === typeof options.nonce ? options.nonce : void 0
                });
            } else null == options && Internals.d.M(href);
        }
    };
    exports.preload = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        null == options || "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : "string" === typeof options.as && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s', encountered);
        if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
            encountered = options.as;
            var crossOrigin = getCrossOriginStringAs(encountered, options.crossOrigin);
            Internals.d.L(href, encountered, {
                crossOrigin: crossOrigin,
                integrity: "string" === typeof options.integrity ? options.integrity : void 0,
                nonce: "string" === typeof options.nonce ? options.nonce : void 0,
                type: "string" === typeof options.type ? options.type : void 0,
                fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
                referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
                imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
                imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
                media: "string" === typeof options.media ? options.media : void 0
            });
        }
    };
    exports.preloadModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "string" !== typeof options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s', encountered);
        "string" === typeof href && (options ? (encountered = getCrossOriginStringAs(options.as, options.crossOrigin), Internals.d.m(href, {
            as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
            crossOrigin: encountered,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0
        })) : Internals.d.m(href));
    };
    exports.requestFormReset = function(form) {
        Internals.d.r(form);
    };
    exports.unstable_batchedUpdates = function(fn, a) {
        return fn(a);
    };
    exports.useFormState = function(action, initialState, permalink) {
        return resolveDispatcher().useFormState(action, initialState, permalink);
    };
    exports.useFormStatus = function() {
        return resolveDispatcher().useHostTransitionStatus();
    };
    exports.version = "19.1.0";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
})();

},{"6f0162e9ab224cd4":"jMk1U"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7h6Pi":[function(require,module,exports,__globalThis) {
"use strict";
var Refresh = require("7422ead32dcc1e6b");
function debounce(func, delay) {
    {
        let timeout = undefined;
        let lastTime = 0;
        return function(args) {
            // Call immediately if last call was more than the delay ago.
            // Otherwise, set a timeout. This means the first call is fast
            // (for the common case of a single update), and subsequent updates
            // are batched.
            let now = Date.now();
            if (now - lastTime > delay) {
                lastTime = now;
                func.call(null, args);
            } else {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    timeout = undefined;
                    lastTime = Date.now();
                    func.call(null, args);
                }, delay);
            }
        };
    }
}
var enqueueUpdate = debounce(function() {
    Refresh.performReactRefresh();
}, 30);
module.exports.init = function() {
    if (!globalThis.$RefreshReg$) {
        Refresh.injectIntoGlobalHook(globalThis);
        globalThis.$RefreshReg$ = function() {};
        globalThis.$RefreshSig$ = function() {
            return function(type) {
                return type;
            };
        };
        if (typeof window !== 'undefined') {
            let ErrorOverlay = require("e4d875b7642f9496");
            ErrorOverlay.setEditorHandler(function(errorLocation) {
                let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
                fetch(module.bundle.devServer + `/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
            });
            ErrorOverlay.startReportingRuntimeErrors({
                onError: function() {}
            });
            window.addEventListener('parcelhmraccept', ()=>{
                ErrorOverlay.dismissRuntimeErrors();
            });
        }
    }
};
// Everything below is either adapted or copied from
// https://github.com/facebook/metro/blob/61de16bd1edd7e738dd0311c89555a644023ab2d/packages/metro/src/lib/polyfills/require.js
// MIT License - Copyright (c) Facebook, Inc. and its affiliates.
module.exports.prelude = function(module1) {
    globalThis.$RefreshReg$ = function(type, id) {
        Refresh.register(type, module1.id + ' ' + id);
    };
    globalThis.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;
};
module.exports.postlude = function(module1) {
    if (typeof window === 'undefined') return;
    if (isReactRefreshBoundary(module1.exports)) {
        registerExportsForReactRefresh(module1);
        if (module1.hot) {
            module1.hot.dispose(function(data) {
                if (Refresh.hasUnrecoverableErrors()) window.location.reload();
                data.prevExports = module1.exports;
            });
            module1.hot.accept(function(getParents) {
                var prevExports = module1.hot.data.prevExports;
                var nextExports = module1.exports;
                // Since we just executed the code for it, it's possible
                // that the new exports make it ineligible for being a boundary.
                var isNoLongerABoundary = !isReactRefreshBoundary(nextExports);
                // It can also become ineligible if its exports are incompatible
                // with the previous exports.
                // For example, if you add/remove/change exports, we'll want
                // to re-execute the importing modules, and force those components
                // to re-render. Similarly, if you convert a class component
                // to a function, we want to invalidate the boundary.
                var didInvalidate = shouldInvalidateReactRefreshBoundary(prevExports, nextExports);
                if (isNoLongerABoundary || didInvalidate) {
                    // We'll be conservative. The only case in which we won't do a full
                    // reload is if all parent modules are also refresh boundaries.
                    // In that case we'll add them to the current queue.
                    var parents = getParents();
                    if (parents.length === 0) {
                        // Looks like we bubbled to the root. Can't recover from that.
                        window.location.reload();
                        return;
                    }
                    return parents;
                }
                enqueueUpdate();
            });
        }
    }
};
function isReactRefreshBoundary(exports) {
    if (Refresh.isLikelyComponentType(exports)) return true;
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    return false;
    var hasExports = false;
    var areAllExportsComponents = true;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        hasExports = true;
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) // Don't invoke getters for CJS as they may have side effects.
        return false;
        var exportValue = exports[key];
        if (!Refresh.isLikelyComponentType(exportValue)) areAllExportsComponents = false;
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) return true;
    for(var i = 0; i < nextSignature.length; i++){
        if (prevSignature[i] !== nextSignature[i]) return true;
    }
    return false;
}
// When this signature changes, it's unsafe to stop at this refresh boundary.
function getRefreshBoundarySignature(exports) {
    var signature = [];
    signature.push(Refresh.getFamilyByType(exports));
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return signature;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        signature.push(key);
        signature.push(Refresh.getFamilyByType(exportValue));
    }
    return signature;
}
function registerExportsForReactRefresh(module1) {
    var exports = module1.exports, id = module1.id;
    Refresh.register(exports, id + ' %exports%');
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        var typeID = id + ' %exports% ' + key;
        Refresh.register(exportValue, typeID);
    }
}

},{"7422ead32dcc1e6b":"hpiFP","e4d875b7642f9496":"gnoim"}],"hpiFP":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("96622d495519d4e");

},{"96622d495519d4e":"7AD9f"}],"7AD9f":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    function computeFullKey(signature) {
        if (null !== signature.fullKey) return signature.fullKey;
        var fullKey = signature.ownKey;
        try {
            var hooks = signature.getCustomHooks();
        } catch (err) {
            return signature.forceReset = !0, signature.fullKey = fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if ("function" !== typeof hook) return signature.forceReset = !0, signature.fullKey = fullKey;
            hook = allSignaturesByType.get(hook);
            if (void 0 !== hook) {
                var nestedHookKey = computeFullKey(hook);
                hook.forceReset && (signature.forceReset = !0);
                fullKey += "\n---\n" + nestedHookKey;
            }
        }
        return signature.fullKey = fullKey;
    }
    function resolveFamily(type) {
        return updatedFamiliesByType.get(type);
    }
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function getProperty(object, property) {
        try {
            return object[property];
        } catch (err) {}
    }
    function register(type, id) {
        if (!(null === type || "function" !== typeof type && "object" !== typeof type || allFamiliesByType.has(type))) {
            var family = allFamiliesByID.get(id);
            void 0 === family ? (family = {
                current: type
            }, allFamiliesByID.set(id, family)) : pendingUpdates.push([
                family,
                type
            ]);
            allFamiliesByType.set(type, family);
            if ("object" === typeof type && null !== type) switch(getProperty(type, "$$typeof")){
                case REACT_FORWARD_REF_TYPE:
                    register(type.render, id + "$render");
                    break;
                case REACT_MEMO_TYPE:
                    register(type.type, id + "$type");
            }
        }
    }
    function setSignature(type, key) {
        var forceReset = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : !1, getCustomHooks = 3 < arguments.length ? arguments[3] : void 0;
        allSignaturesByType.has(type) || allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
        if ("object" === typeof type && null !== type) switch(getProperty(type, "$$typeof")){
            case REACT_FORWARD_REF_TYPE:
                setSignature(type.render, key, forceReset, getCustomHooks);
                break;
            case REACT_MEMO_TYPE:
                setSignature(type.type, key, forceReset, getCustomHooks);
        }
    }
    function collectCustomHooksForSignature(type) {
        type = allSignaturesByType.get(type);
        void 0 !== type && computeFullKey(type);
    }
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_MEMO_TYPE = Symbol.for("react.memo"), PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map, allFamiliesByID = new Map(), allFamiliesByType = new PossiblyWeakMap(), allSignaturesByType = new PossiblyWeakMap(), updatedFamiliesByType = new PossiblyWeakMap(), pendingUpdates = [], helpersByRendererID = new Map(), helpersByRoot = new Map(), mountedRoots = new Set(), failedRoots = new Set(), rootElements = "function" === typeof WeakMap ? new WeakMap() : null, isPerformingRefresh = !1;
    exports._getMountedRootCount = function() {
        return mountedRoots.size;
    };
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = function() {
        var savedType, hasCustomHooks, didCollectHooks = !1;
        return function(type, key, forceReset, getCustomHooks) {
            if ("string" === typeof key) return savedType || (savedType = type, hasCustomHooks = "function" === typeof getCustomHooks), null == type || "function" !== typeof type && "object" !== typeof type || setSignature(type, key, forceReset, getCustomHooks), type;
            !didCollectHooks && hasCustomHooks && (didCollectHooks = !0, collectCustomHooksForSignature(savedType));
        };
    };
    exports.getFamilyByID = function(id) {
        return allFamiliesByID.get(id);
    };
    exports.getFamilyByType = function(type) {
        return allFamiliesByType.get(type);
    };
    exports.hasUnrecoverableErrors = function() {
        return !1;
    };
    exports.injectIntoGlobalHook = function(globalObject) {
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (void 0 === hook) {
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: !0,
                inject: function() {
                    return nextID++;
                },
                onScheduleFiberRoot: function() {},
                onCommitFiberRoot: function() {},
                onCommitFiberUnmount: function() {}
            };
        }
        if (hook.isDisabled) console.warn("Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). Fast Refresh is not compatible with this shim and will be disabled.");
        else {
            var oldInject = hook.inject;
            hook.inject = function(injected) {
                var id = oldInject.apply(this, arguments);
                "function" === typeof injected.scheduleRefresh && "function" === typeof injected.setRefreshHandler && helpersByRendererID.set(id, injected);
                return id;
            };
            hook.renderers.forEach(function(injected, id) {
                "function" === typeof injected.scheduleRefresh && "function" === typeof injected.setRefreshHandler && helpersByRendererID.set(id, injected);
            });
            var oldOnCommitFiberRoot = hook.onCommitFiberRoot, oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {};
            hook.onScheduleFiberRoot = function(id, root, children) {
                isPerformingRefresh || (failedRoots.delete(root), null !== rootElements && rootElements.set(root, children));
                return oldOnScheduleFiberRoot.apply(this, arguments);
            };
            hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
                var helpers = helpersByRendererID.get(id);
                if (void 0 !== helpers) {
                    helpersByRoot.set(root, helpers);
                    helpers = root.current;
                    var alternate = helpers.alternate;
                    null !== alternate ? (alternate = null != alternate.memoizedState && null != alternate.memoizedState.element && mountedRoots.has(root), helpers = null != helpers.memoizedState && null != helpers.memoizedState.element, !alternate && helpers ? (mountedRoots.add(root), failedRoots.delete(root)) : alternate && helpers || (alternate && !helpers ? (mountedRoots.delete(root), didError ? failedRoots.add(root) : helpersByRoot.delete(root)) : alternate || helpers || didError && failedRoots.add(root))) : mountedRoots.add(root);
                }
                return oldOnCommitFiberRoot.apply(this, arguments);
            };
        }
    };
    exports.isLikelyComponentType = function(type) {
        switch(typeof type){
            case "function":
                if (null != type.prototype) {
                    if (type.prototype.isReactComponent) return !0;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (1 < ownNames.length || "constructor" !== ownNames[0] || type.prototype.__proto__ !== Object.prototype) return !1;
                }
                type = type.name || type.displayName;
                return "string" === typeof type && /^[A-Z]/.test(type);
            case "object":
                if (null != type) switch(getProperty(type, "$$typeof")){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        return !0;
                }
                return !1;
            default:
                return !1;
        }
    };
    exports.performReactRefresh = function() {
        if (0 === pendingUpdates.length || isPerformingRefresh) return null;
        isPerformingRefresh = !0;
        try {
            var staleFamilies = new Set(), updatedFamilies = new Set(), updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0];
                _ref = _ref[1];
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(_ref, family);
                family.current = _ref;
                prevType.prototype && prevType.prototype.isReactComponent || _ref.prototype && _ref.prototype.isReactComponent ? _ref = !1 : (prevType = allSignaturesByType.get(prevType), _ref = allSignaturesByType.get(_ref), _ref = void 0 === prevType && void 0 === _ref || void 0 !== prevType && void 0 !== _ref && computeFullKey(prevType) === computeFullKey(_ref) && !_ref.forceReset ? !0 : !1);
                _ref ? updatedFamilies.add(family) : staleFamilies.add(family);
            });
            var update = {
                updatedFamilies: updatedFamilies,
                staleFamilies: staleFamilies
            };
            helpersByRendererID.forEach(function(helpers) {
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = !1, firstError = null, failedRootsSnapshot = cloneSet(failedRoots), mountedRootsSnapshot = cloneSet(mountedRoots), helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (void 0 === helpers) throw Error("Could not find helpers for a root. This is a bug in React Refresh.");
                failedRoots.has(root);
                if (null !== rootElements && rootElements.has(root)) {
                    var element = rootElements.get(root);
                    try {
                        helpers.scheduleRoot(root, element);
                    } catch (err) {
                        didError || (didError = !0, firstError = err);
                    }
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (void 0 === helpers) throw Error("Could not find helpers for a root. This is a bug in React Refresh.");
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    didError || (didError = !0, firstError = err);
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = !1;
        }
    };
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"gnoim":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setEditorHandler", ()=>$da9882e673ac146b$export$25a22ac46f1bd016);
parcelHelpers.export(exports, "reportRuntimeError", ()=>$da9882e673ac146b$export$74e9101ce4078c0);
parcelHelpers.export(exports, "startReportingRuntimeErrors", ()=>$da9882e673ac146b$export$cda2c88a41631c16);
parcelHelpers.export(exports, "dismissRuntimeErrors", ()=>$da9882e673ac146b$export$1cfa6d161ca81bd9);
parcelHelpers.export(exports, "stopReportingRuntimeErrors", ()=>$da9882e673ac146b$export$25ba7d9a816639e7);
function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-env browser */ /* eslint-disable react/react-in-jsx-scope, no-console */ var $b6c7f0288a15c619$var$n, $b6c7f0288a15c619$export$41c562ebe57d11e2, $b6c7f0288a15c619$var$u, $b6c7f0288a15c619$export$a8257692ac88316c, $b6c7f0288a15c619$var$i, $b6c7f0288a15c619$var$r, $b6c7f0288a15c619$var$o, $b6c7f0288a15c619$var$e, $b6c7f0288a15c619$var$f, $b6c7f0288a15c619$var$c, $b6c7f0288a15c619$var$s, $b6c7f0288a15c619$var$a, $b6c7f0288a15c619$var$h, $b6c7f0288a15c619$var$p = {}, $b6c7f0288a15c619$var$y = [], $b6c7f0288a15c619$var$v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, $b6c7f0288a15c619$var$w = Array.isArray;
function $b6c7f0288a15c619$var$d(n, l) {
    for(var u in l)n[u] = l[u];
    return n;
}
function $b6c7f0288a15c619$var$g(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
}
function $b6c7f0288a15c619$export$c8a8987d4410bf2d(l, u, t) {
    var i, r, o, e = {};
    for(o in u)"key" == o ? i = u[o] : "ref" == o ? r = u[o] : e[o] = u[o];
    if (arguments.length > 2 && (e.children = arguments.length > 3 ? $b6c7f0288a15c619$var$n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for(o in l.defaultProps)null == e[o] && (e[o] = l.defaultProps[o]);
    return $b6c7f0288a15c619$var$m(l, e, i, r, null);
}
function $b6c7f0288a15c619$var$m(n, t, i, r, o) {
    var e = {
        type: n,
        props: t,
        key: i,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: null == o ? ++$b6c7f0288a15c619$var$u : o,
        __i: -1,
        __u: 0
    };
    return null == o && null != $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode && $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode(e), e;
}
function $b6c7f0288a15c619$export$7d1e3a5e95ceca43() {
    return {
        current: null
    };
}
function $b6c7f0288a15c619$export$ffb0004e005737fa(n) {
    return n.children;
}
function $b6c7f0288a15c619$export$16fa2f45be04daa8(n, l) {
    this.props = n, this.context = l;
}
function $b6c7f0288a15c619$var$S(n, l) {
    if (null == l) return n.__ ? $b6c7f0288a15c619$var$S(n.__, n.__i + 1) : null;
    for(var u; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
    return "function" == typeof n.type ? $b6c7f0288a15c619$var$S(n) : null;
}
function $b6c7f0288a15c619$var$C(n) {
    var l, u;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (u = n.__k[l]) && null != u.__e) {
            n.__e = n.__c.base = u.__e;
            break;
        }
        return $b6c7f0288a15c619$var$C(n);
    }
}
function $b6c7f0288a15c619$var$M(n) {
    (!n.__d && (n.__d = !0) && $b6c7f0288a15c619$var$i.push(n) && !$b6c7f0288a15c619$var$$.__r++ || $b6c7f0288a15c619$var$r != $b6c7f0288a15c619$export$41c562ebe57d11e2.debounceRendering) && (($b6c7f0288a15c619$var$r = $b6c7f0288a15c619$export$41c562ebe57d11e2.debounceRendering) || $b6c7f0288a15c619$var$o)($b6c7f0288a15c619$var$$);
}
function $b6c7f0288a15c619$var$$() {
    for(var n, u, t, r, o, f, c, s = 1; $b6c7f0288a15c619$var$i.length;)$b6c7f0288a15c619$var$i.length > s && $b6c7f0288a15c619$var$i.sort($b6c7f0288a15c619$var$e), n = $b6c7f0288a15c619$var$i.shift(), s = $b6c7f0288a15c619$var$i.length, n.__d && (t = void 0, o = (r = (u = n).__v).__e, f = [], c = [], u.__P && ((t = $b6c7f0288a15c619$var$d({}, r)).__v = r.__v + 1, $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode && $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode(t), $b6c7f0288a15c619$var$O(u.__P, t, r, u.__n, u.__P.namespaceURI, 32 & r.__u ? [
        o
    ] : null, f, null == o ? $b6c7f0288a15c619$var$S(r) : o, !!(32 & r.__u), c), t.__v = r.__v, t.__.__k[t.__i] = t, $b6c7f0288a15c619$var$z(f, t, c), t.__e != o && $b6c7f0288a15c619$var$C(t)));
    $b6c7f0288a15c619$var$$.__r = 0;
}
function $b6c7f0288a15c619$var$I(n, l, u, t, i, r, o, e, f, c, s) {
    var a, h, v, w, d, g, _ = t && t.__k || $b6c7f0288a15c619$var$y, m = l.length;
    for(f = $b6c7f0288a15c619$var$P(u, l, _, f, m), a = 0; a < m; a++)null != (v = u.__k[a]) && (h = -1 == v.__i ? $b6c7f0288a15c619$var$p : _[v.__i] || $b6c7f0288a15c619$var$p, v.__i = a, g = $b6c7f0288a15c619$var$O(n, v, h, i, r, o, e, f, c, s), w = v.__e, v.ref && h.ref != v.ref && (h.ref && $b6c7f0288a15c619$var$q(h.ref, null, v), s.push(v.ref, v.__c || w, v)), null == d && null != w && (d = w), 4 & v.__u || h.__k === v.__k ? f = $b6c7f0288a15c619$var$A(v, f, n) : "function" == typeof v.type && void 0 !== g ? f = g : w && (f = w.nextSibling), v.__u &= -7);
    return u.__e = d, f;
}
function $b6c7f0288a15c619$var$P(n, l, u, t, i) {
    var r, o, e, f, c, s = u.length, a = s, h = 0;
    for(n.__k = new Array(i), r = 0; r < i; r++)null != (o = l[r]) && "boolean" != typeof o && "function" != typeof o ? (f = r + h, (o = n.__k[r] = "string" == typeof o || "number" == typeof o || "bigint" == typeof o || o.constructor == String ? $b6c7f0288a15c619$var$m(null, o, null, null, null) : $b6c7f0288a15c619$var$w(o) ? $b6c7f0288a15c619$var$m($b6c7f0288a15c619$export$ffb0004e005737fa, {
        children: o
    }, null, null, null) : null == o.constructor && o.__b > 0 ? $b6c7f0288a15c619$var$m(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v) : o).__ = n, o.__b = n.__b + 1, e = null, -1 != (c = o.__i = $b6c7f0288a15c619$var$L(o, u, f, a)) && (a--, (e = u[c]) && (e.__u |= 2)), null == e || null == e.__v ? (-1 == c && (i > s ? h-- : i < s && h++), "function" != typeof o.type && (o.__u |= 4)) : c != f && (c == f - 1 ? h-- : c == f + 1 ? h++ : (c > f ? h-- : h++, o.__u |= 4))) : n.__k[r] = null;
    if (a) for(r = 0; r < s; r++)null != (e = u[r]) && 0 == (2 & e.__u) && (e.__e == t && (t = $b6c7f0288a15c619$var$S(e)), $b6c7f0288a15c619$var$B(e, e));
    return t;
}
function $b6c7f0288a15c619$var$A(n, l, u) {
    var t, i;
    if ("function" == typeof n.type) {
        for(t = n.__k, i = 0; t && i < t.length; i++)t[i] && (t[i].__ = n, l = $b6c7f0288a15c619$var$A(t[i], l, u));
        return l;
    }
    n.__e != l && (l && n.type && !u.contains(l) && (l = $b6c7f0288a15c619$var$S(n)), u.insertBefore(n.__e, l || null), l = n.__e);
    do l = l && l.nextSibling;
    while (null != l && 8 == l.nodeType);
    return l;
}
function $b6c7f0288a15c619$export$47e4c5b300681277(n, l) {
    return l = l || [], null == n || "boolean" == typeof n || ($b6c7f0288a15c619$var$w(n) ? n.some(function(n) {
        $b6c7f0288a15c619$export$47e4c5b300681277(n, l);
    }) : l.push(n)), l;
}
function $b6c7f0288a15c619$var$L(n, l, u, t) {
    var i, r, o = n.key, e = n.type, f = l[u];
    if (null === f && null == n.key || f && o == f.key && e == f.type && 0 == (2 & f.__u)) return u;
    if (t > (null != f && 0 == (2 & f.__u) ? 1 : 0)) for(i = u - 1, r = u + 1; i >= 0 || r < l.length;){
        if (i >= 0) {
            if ((f = l[i]) && 0 == (2 & f.__u) && o == f.key && e == f.type) return i;
            i--;
        }
        if (r < l.length) {
            if ((f = l[r]) && 0 == (2 & f.__u) && o == f.key && e == f.type) return r;
            r++;
        }
    }
    return -1;
}
function $b6c7f0288a15c619$var$T(n, l, u) {
    "-" == l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || $b6c7f0288a15c619$var$v.test(l) ? u : u + "px";
}
function $b6c7f0288a15c619$var$j(n, l, u, t, i) {
    var r;
    n: if ("style" == l) {
        if ("string" == typeof u) n.style.cssText = u;
        else {
            if ("string" == typeof t && (n.style.cssText = t = ""), t) for(l in t)u && l in u || $b6c7f0288a15c619$var$T(n.style, l, "");
            if (u) for(l in u)t && u[l] == t[l] || $b6c7f0288a15c619$var$T(n.style, l, u[l]);
        }
    } else if ("o" == l[0] && "n" == l[1]) r = l != (l = l.replace($b6c7f0288a15c619$var$f, "$1")), l = l.toLowerCase() in n || "onFocusOut" == l || "onFocusIn" == l ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + r] = u, u ? t ? u.u = t.u : (u.u = $b6c7f0288a15c619$var$c, n.addEventListener(l, r ? $b6c7f0288a15c619$var$a : $b6c7f0288a15c619$var$s, r)) : n.removeEventListener(l, r ? $b6c7f0288a15c619$var$a : $b6c7f0288a15c619$var$s, r);
    else {
        if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
            n[l] = null == u ? "" : u;
            break n;
        } catch (n) {}
        "function" == typeof u || (null == u || !1 === u && "-" != l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == u ? "" : u));
    }
}
function $b6c7f0288a15c619$var$F(n) {
    return function(u) {
        if (this.l) {
            var t = this.l[u.type + n];
            if (null == u.t) u.t = $b6c7f0288a15c619$var$c++;
            else if (u.t < t.u) return;
            return t($b6c7f0288a15c619$export$41c562ebe57d11e2.event ? $b6c7f0288a15c619$export$41c562ebe57d11e2.event(u) : u);
        }
    };
}
function $b6c7f0288a15c619$var$O(n, u, t, i, r, o, e, f, c, s) {
    var a, h, p, y, v, _, m, b, S, C, M, $, P, A, H, L, T, j = u.type;
    if (null != u.constructor) return null;
    128 & t.__u && (c = !!(32 & t.__u), o = [
        f = u.__e = t.__e
    ]), (a = $b6c7f0288a15c619$export$41c562ebe57d11e2.__b) && a(u);
    n: if ("function" == typeof j) try {
        if (b = u.props, S = "prototype" in j && j.prototype.render, C = (a = j.contextType) && i[a.__c], M = a ? C ? C.props.value : a.__ : i, t.__c ? m = (h = u.__c = t.__c).__ = h.__E : (S ? u.__c = h = new j(b, M) : (u.__c = h = new $b6c7f0288a15c619$export$16fa2f45be04daa8(b, M), h.constructor = j, h.render = $b6c7f0288a15c619$var$D), C && C.sub(h), h.props = b, h.state || (h.state = {}), h.context = M, h.__n = i, p = h.__d = !0, h.__h = [], h._sb = []), S && null == h.__s && (h.__s = h.state), S && null != j.getDerivedStateFromProps && (h.__s == h.state && (h.__s = $b6c7f0288a15c619$var$d({}, h.__s)), $b6c7f0288a15c619$var$d(h.__s, j.getDerivedStateFromProps(b, h.__s))), y = h.props, v = h.state, h.__v = u, p) S && null == j.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), S && null != h.componentDidMount && h.__h.push(h.componentDidMount);
        else {
            if (S && null == j.getDerivedStateFromProps && b !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(b, M), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(b, h.__s, M) || u.__v == t.__v) {
                for(u.__v != t.__v && (h.props = b, h.state = h.__s, h.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.some(function(n) {
                    n && (n.__ = u);
                }), $ = 0; $ < h._sb.length; $++)h.__h.push(h._sb[$]);
                h._sb = [], h.__h.length && e.push(h);
                break n;
            }
            null != h.componentWillUpdate && h.componentWillUpdate(b, h.__s, M), S && null != h.componentDidUpdate && h.__h.push(function() {
                h.componentDidUpdate(y, v, _);
            });
        }
        if (h.context = M, h.props = b, h.__P = n, h.__e = !1, P = $b6c7f0288a15c619$export$41c562ebe57d11e2.__r, A = 0, S) {
            for(h.state = h.__s, h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), H = 0; H < h._sb.length; H++)h.__h.push(h._sb[H]);
            h._sb = [];
        } else do h.__d = !1, P && P(u), a = h.render(h.props, h.state, h.context), h.state = h.__s;
        while (h.__d && ++A < 25);
        h.state = h.__s, null != h.getChildContext && (i = $b6c7f0288a15c619$var$d($b6c7f0288a15c619$var$d({}, i), h.getChildContext())), S && !p && null != h.getSnapshotBeforeUpdate && (_ = h.getSnapshotBeforeUpdate(y, v)), L = a, null != a && a.type === $b6c7f0288a15c619$export$ffb0004e005737fa && null == a.key && (L = $b6c7f0288a15c619$var$N(a.props.children)), f = $b6c7f0288a15c619$var$I(n, $b6c7f0288a15c619$var$w(L) ? L : [
            L
        ], u, t, i, r, o, e, f, c, s), h.base = u.__e, u.__u &= -161, h.__h.length && e.push(h), m && (h.__E = h.__ = null);
    } catch (n) {
        if (u.__v = null, c || null != o) {
            if (n.then) {
                for(u.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling;)f = f.nextSibling;
                o[o.indexOf(f)] = null, u.__e = f;
            } else for(T = o.length; T--;)$b6c7f0288a15c619$var$g(o[T]);
        } else u.__e = t.__e, u.__k = t.__k;
        $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, u, t);
    }
    else null == o && u.__v == t.__v ? (u.__k = t.__k, u.__e = t.__e) : f = u.__e = $b6c7f0288a15c619$var$V(t.__e, u, t, i, r, o, e, c, s);
    return (a = $b6c7f0288a15c619$export$41c562ebe57d11e2.diffed) && a(u), 128 & u.__u ? void 0 : f;
}
function $b6c7f0288a15c619$var$z(n, u, t) {
    for(var i = 0; i < t.length; i++)$b6c7f0288a15c619$var$q(t[i], t[++i], t[++i]);
    $b6c7f0288a15c619$export$41c562ebe57d11e2.__c && $b6c7f0288a15c619$export$41c562ebe57d11e2.__c(u, n), n.some(function(u) {
        try {
            n = u.__h, u.__h = [], n.some(function(n) {
                n.call(u);
            });
        } catch (n) {
            $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, u.__v);
        }
    });
}
function $b6c7f0288a15c619$var$N(n) {
    return "object" != typeof n || null == n || n.__b && n.__b > 0 ? n : $b6c7f0288a15c619$var$w(n) ? n.map($b6c7f0288a15c619$var$N) : $b6c7f0288a15c619$var$d({}, n);
}
function $b6c7f0288a15c619$var$V(u, t, i, r, o, e, f, c, s) {
    var a, h, y, v, d, _, m, b = i.props, k = t.props, x = t.type;
    if ("svg" == x ? o = "http://www.w3.org/2000/svg" : "math" == x ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != e) {
        for(a = 0; a < e.length; a++)if ((d = e[a]) && "setAttribute" in d == !!x && (x ? d.localName == x : 3 == d.nodeType)) {
            u = d, e[a] = null;
            break;
        }
    }
    if (null == u) {
        if (null == x) return document.createTextNode(k);
        u = document.createElementNS(o, x, k.is && k), c && ($b6c7f0288a15c619$export$41c562ebe57d11e2.__m && $b6c7f0288a15c619$export$41c562ebe57d11e2.__m(t, e), c = !1), e = null;
    }
    if (null == x) b === k || c && u.data == k || (u.data = k);
    else {
        if (e = e && $b6c7f0288a15c619$var$n.call(u.childNodes), b = i.props || $b6c7f0288a15c619$var$p, !c && null != e) for(b = {}, a = 0; a < u.attributes.length; a++)b[(d = u.attributes[a]).name] = d.value;
        for(a in b)if (d = b[a], "children" == a) ;
        else if ("dangerouslySetInnerHTML" == a) y = d;
        else if (!(a in k)) {
            if ("value" == a && "defaultValue" in k || "checked" == a && "defaultChecked" in k) continue;
            $b6c7f0288a15c619$var$j(u, a, null, d, o);
        }
        for(a in k)d = k[a], "children" == a ? v = d : "dangerouslySetInnerHTML" == a ? h = d : "value" == a ? _ = d : "checked" == a ? m = d : c && "function" != typeof d || b[a] === d || $b6c7f0288a15c619$var$j(u, a, d, b[a], o);
        if (h) c || y && (h.__html == y.__html || h.__html == u.innerHTML) || (u.innerHTML = h.__html), t.__k = [];
        else if (y && (u.innerHTML = ""), $b6c7f0288a15c619$var$I("template" == t.type ? u.content : u, $b6c7f0288a15c619$var$w(v) ? v : [
            v
        ], t, i, r, "foreignObject" == x ? "http://www.w3.org/1999/xhtml" : o, e, f, e ? e[0] : i.__k && $b6c7f0288a15c619$var$S(i, 0), c, s), null != e) for(a = e.length; a--;)$b6c7f0288a15c619$var$g(e[a]);
        c || (a = "value", "progress" == x && null == _ ? u.removeAttribute("value") : null != _ && (_ !== u[a] || "progress" == x && !_ || "option" == x && _ != b[a]) && $b6c7f0288a15c619$var$j(u, a, _, b[a], o), a = "checked", null != m && m != u[a] && $b6c7f0288a15c619$var$j(u, a, m, b[a], o));
    }
    return u;
}
function $b6c7f0288a15c619$var$q(n, u, t) {
    try {
        if ("function" == typeof n) {
            var i = "function" == typeof n.__u;
            i && n.__u(), i && null == u || (n.__u = n(u));
        } else n.current = u;
    } catch (n) {
        $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, t);
    }
}
function $b6c7f0288a15c619$var$B(n, u, t) {
    var i, r;
    if ($b6c7f0288a15c619$export$41c562ebe57d11e2.unmount && $b6c7f0288a15c619$export$41c562ebe57d11e2.unmount(n), (i = n.ref) && (i.current && i.current != n.__e || $b6c7f0288a15c619$var$q(i, null, u)), null != (i = n.__c)) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (n) {
            $b6c7f0288a15c619$export$41c562ebe57d11e2.__e(n, u);
        }
        i.base = i.__P = null;
    }
    if (i = n.__k) for(r = 0; r < i.length; r++)i[r] && $b6c7f0288a15c619$var$B(i[r], u, t || "function" != typeof n.type);
    t || $b6c7f0288a15c619$var$g(n.__e), n.__c = n.__ = n.__e = void 0;
}
function $b6c7f0288a15c619$var$D(n, l, u) {
    return this.constructor(n, u);
}
function $b6c7f0288a15c619$export$b3890eb0ae9dca99(u, t, i) {
    var r, o, e, f;
    t == document && (t = document.documentElement), $b6c7f0288a15c619$export$41c562ebe57d11e2.__ && $b6c7f0288a15c619$export$41c562ebe57d11e2.__(u, t), o = (r = "function" == typeof i) ? null : i && i.__k || t.__k, e = [], f = [], $b6c7f0288a15c619$var$O(t, u = (!r && i || t).__k = $b6c7f0288a15c619$export$c8a8987d4410bf2d($b6c7f0288a15c619$export$ffb0004e005737fa, null, [
        u
    ]), o || $b6c7f0288a15c619$var$p, $b6c7f0288a15c619$var$p, t.namespaceURI, !r && i ? [
        i
    ] : o ? null : t.firstChild ? $b6c7f0288a15c619$var$n.call(t.childNodes) : null, e, !r && i ? i : o ? o.__e : t.firstChild, r, f), $b6c7f0288a15c619$var$z(e, u, f);
}
function $b6c7f0288a15c619$export$fa8d919ba61d84db(n, l) {
    $b6c7f0288a15c619$export$b3890eb0ae9dca99(n, l, $b6c7f0288a15c619$export$fa8d919ba61d84db);
}
function $b6c7f0288a15c619$export$e530037191fcd5d7(l, u, t) {
    var i, r, o, e, f = $b6c7f0288a15c619$var$d({}, l.props);
    for(o in l.type && l.type.defaultProps && (e = l.type.defaultProps), u)"key" == o ? i = u[o] : "ref" == o ? r = u[o] : f[o] = null == u[o] && null != e ? e[o] : u[o];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? $b6c7f0288a15c619$var$n.call(arguments, 2) : t), $b6c7f0288a15c619$var$m(l.type, f, i || l.key, r || l.ref, null);
}
function $b6c7f0288a15c619$export$fd42f52fd3ae1109(n) {
    function l(n) {
        var u, t;
        return this.getChildContext || (u = new Set, (t = {})[l.__c] = this, this.getChildContext = function() {
            return t;
        }, this.componentWillUnmount = function() {
            u = null;
        }, this.shouldComponentUpdate = function(n) {
            this.props.value != n.value && u.forEach(function(n) {
                n.__e = !0, $b6c7f0288a15c619$var$M(n);
            });
        }, this.sub = function(n) {
            u.add(n);
            var l = n.componentWillUnmount;
            n.componentWillUnmount = function() {
                u && u.delete(n), l && l.call(n);
            };
        }), n.children;
    }
    return l.__c = "__cC" + $b6c7f0288a15c619$var$h++, l.__ = n, l.Provider = l.__l = (l.Consumer = function(n, l) {
        return n.children(l);
    }).contextType = l, l;
}
$b6c7f0288a15c619$var$n = $b6c7f0288a15c619$var$y.slice, $b6c7f0288a15c619$export$41c562ebe57d11e2 = {
    __e: function(n, l, u, t) {
        for(var i, r, o; l = l.__;)if ((i = l.__c) && !i.__) try {
            if ((r = i.constructor) && null != r.getDerivedStateFromError && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), o = i.__d), o) return i.__E = i;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, $b6c7f0288a15c619$var$u = 0, $b6c7f0288a15c619$export$a8257692ac88316c = function(n) {
    return null != n && null == n.constructor;
}, $b6c7f0288a15c619$export$16fa2f45be04daa8.prototype.setState = function(n, l) {
    var u;
    u = null != this.__s && this.__s != this.state ? this.__s : this.__s = $b6c7f0288a15c619$var$d({}, this.state), "function" == typeof n && (n = n($b6c7f0288a15c619$var$d({}, u), this.props)), n && $b6c7f0288a15c619$var$d(u, n), null != n && this.__v && (l && this._sb.push(l), $b6c7f0288a15c619$var$M(this));
}, $b6c7f0288a15c619$export$16fa2f45be04daa8.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), $b6c7f0288a15c619$var$M(this));
}, $b6c7f0288a15c619$export$16fa2f45be04daa8.prototype.render = $b6c7f0288a15c619$export$ffb0004e005737fa, $b6c7f0288a15c619$var$i = [], $b6c7f0288a15c619$var$o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, $b6c7f0288a15c619$var$e = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, $b6c7f0288a15c619$var$$.__r = 0, $b6c7f0288a15c619$var$f = /(PointerCapture)$|Capture$/i, $b6c7f0288a15c619$var$c = 0, $b6c7f0288a15c619$var$s = $b6c7f0288a15c619$var$F(!1), $b6c7f0288a15c619$var$a = $b6c7f0288a15c619$var$F(!0), $b6c7f0288a15c619$var$h = 0;
var $23b7c1cb98b19658$var$t = /["&<]/;
function $23b7c1cb98b19658$var$n(r) {
    if (0 === r.length || !1 === $23b7c1cb98b19658$var$t.test(r)) return r;
    for(var e = 0, n = 0, o = "", f = ""; n < r.length; n++){
        switch(r.charCodeAt(n)){
            case 34:
                f = "&quot;";
                break;
            case 38:
                f = "&amp;";
                break;
            case 60:
                f = "&lt;";
                break;
            default:
                continue;
        }
        n !== e && (o += r.slice(e, n)), o += f, e = n + 1;
    }
    return n !== e && (o += r.slice(e, n)), o;
}
var $23b7c1cb98b19658$var$o = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, $23b7c1cb98b19658$var$f = 0, $23b7c1cb98b19658$var$i = Array.isArray;
function $23b7c1cb98b19658$export$34b9dba7ce09269b(e, t, n, o, i, u) {
    t || (t = {});
    var a, c, p = t;
    if ("ref" in p) for(c in p = {}, t)"ref" == c ? a = t[c] : p[c] = t[c];
    var l = {
        type: e,
        props: p,
        key: n,
        ref: a,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: --$23b7c1cb98b19658$var$f,
        __i: -1,
        __u: 0,
        __source: i,
        __self: u
    };
    if ("function" == typeof e && (a = e.defaultProps)) for(c in a)void 0 === p[c] && (p[c] = a[c]);
    return $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode && $b6c7f0288a15c619$export$41c562ebe57d11e2.vnode(l), l;
}
function $23b7c1cb98b19658$export$45700d561b2268ac(r) {
    var t = $23b7c1cb98b19658$export$34b9dba7ce09269b($b6c7f0288a15c619$export$ffb0004e005737fa, {
        tpl: r,
        exprs: [].slice.call(arguments, 1)
    });
    return t.key = t.__v, t;
}
var $23b7c1cb98b19658$var$c = {}, $23b7c1cb98b19658$var$p = /[A-Z]/g;
function $23b7c1cb98b19658$export$991f6ffe102e5bac(e, t) {
    if ($b6c7f0288a15c619$export$41c562ebe57d11e2.attr) {
        var f = $b6c7f0288a15c619$export$41c562ebe57d11e2.attr(e, t);
        if ("string" == typeof f) return f;
    }
    if ("ref" === e || "key" === e) return "";
    if ("style" === e && "object" == typeof t) {
        var i = "";
        for(var u in t){
            var a = t[u];
            if (null != a && "" !== a) {
                var l = "-" == u[0] ? u : $23b7c1cb98b19658$var$c[u] || ($23b7c1cb98b19658$var$c[u] = u.replace($23b7c1cb98b19658$var$p, "-$&").toLowerCase()), s = ";";
                "number" != typeof a || l.startsWith("--") || $23b7c1cb98b19658$var$o.test(l) || (s = "px;"), i = i + l + ":" + a + s;
            }
        }
        return e + '="' + i + '"';
    }
    return null == t || !1 === t || "function" == typeof t || "object" == typeof t ? "" : !0 === t ? e : e + '="' + $23b7c1cb98b19658$var$n(t) + '"';
}
function $23b7c1cb98b19658$export$40e96e718441efeb(r) {
    if (null == r || "boolean" == typeof r || "function" == typeof r) return null;
    if ("object" == typeof r) {
        if (void 0 === r.constructor) return r;
        if ($23b7c1cb98b19658$var$i(r)) {
            for(var e = 0; e < r.length; e++)r[e] = $23b7c1cb98b19658$export$40e96e718441efeb(r[e]);
            return r;
        }
    }
    return $23b7c1cb98b19658$var$n("" + r);
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-env browser */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ let $883a43040cbd0629$var$boundErrorHandler = null;
function $883a43040cbd0629$var$errorHandler(callback, e) {
    // $FlowFixMe
    if (!e.error) return;
    // $FlowFixMe
    const { error: error } = e;
    if (error instanceof Error) callback(error);
    else // Look in your browser's devtools for more information
    callback(new Error(error));
}
function $883a43040cbd0629$export$6503ec6e8aabbaf(target, callback) {
    if ($883a43040cbd0629$var$boundErrorHandler !== null) return;
    $883a43040cbd0629$var$boundErrorHandler = $883a43040cbd0629$var$errorHandler.bind(undefined, callback);
    target.addEventListener('error', $883a43040cbd0629$var$boundErrorHandler);
}
function $883a43040cbd0629$export$d07f55d4c15c0440(target) {
    if ($883a43040cbd0629$var$boundErrorHandler === null) return;
    target.removeEventListener('error', $883a43040cbd0629$var$boundErrorHandler);
    $883a43040cbd0629$var$boundErrorHandler = null;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ let $900f8c32b7484e20$var$boundRejectionHandler = null;
function $900f8c32b7484e20$var$rejectionHandler(callback, e) {
    if (e == null || e.reason == null) return callback(new Error('Unknown'));
    let { reason: reason } = e;
    if (reason instanceof Error) return callback(reason);
    // A non-error was rejected, we don't have a trace :(
    // Look in your browser's devtools for more information
    return callback(new Error(reason));
}
function $900f8c32b7484e20$export$6503ec6e8aabbaf(target, callback) {
    if ($900f8c32b7484e20$var$boundRejectionHandler !== null) return;
    $900f8c32b7484e20$var$boundRejectionHandler = $900f8c32b7484e20$var$rejectionHandler.bind(undefined, callback);
    // $FlowFixMe
    target.addEventListener('unhandledrejection', $900f8c32b7484e20$var$boundRejectionHandler);
}
function $900f8c32b7484e20$export$d07f55d4c15c0440(target) {
    if ($900f8c32b7484e20$var$boundRejectionHandler === null) return;
    // $FlowFixMe
    target.removeEventListener('unhandledrejection', $900f8c32b7484e20$var$boundRejectionHandler);
    $900f8c32b7484e20$var$boundRejectionHandler = null;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ let $5f72ade198404e99$var$stackTraceRegistered = false;
// Default: https://docs.microsoft.com/en-us/scripting/javascript/reference/stacktracelimit-property-error-javascript
let $5f72ade198404e99$var$restoreStackTraceValue = 10;
const $5f72ade198404e99$var$MAX_STACK_LENGTH = 50;
function $5f72ade198404e99$export$6503ec6e8aabbaf(limit = $5f72ade198404e99$var$MAX_STACK_LENGTH) {
    if ($5f72ade198404e99$var$stackTraceRegistered) return;
    try {
        $5f72ade198404e99$var$restoreStackTraceValue = Error.stackTraceLimit;
        Error.stackTraceLimit = limit;
        $5f72ade198404e99$var$stackTraceRegistered = true;
    } catch (e) {
    // Not all browsers support this so we don't care if it errors
    }
}
function $5f72ade198404e99$export$d07f55d4c15c0440() {
    if (!$5f72ade198404e99$var$stackTraceRegistered) return;
    try {
        Error.stackTraceLimit = $5f72ade198404e99$var$restoreStackTraceValue;
        $5f72ade198404e99$var$stackTraceRegistered = false;
    } catch (e) {
    // Not all browsers support this so we don't care if it errors
    }
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * A representation of a stack frame.
 */ class $d35756f426c25812$export$8949fddf10447898 {
    constructor(functionName = null, fileName = null, lineNumber = null, columnNumber = null, scriptCode = null, sourceFunctionName = null, sourceFileName = null, sourceLineNumber = null, sourceColumnNumber = null, sourceScriptCode = null){
        if (functionName && functionName.indexOf('Object.') === 0) functionName = functionName.slice(7);
        if (// https://github.com/facebook/create-react-app/issues/2097
        // Let's ignore a meaningless name we get for top-level modules.
        functionName === 'friendlySyntaxErrorLabel' || functionName === 'exports.__esModule' || functionName === '<anonymous>' || !functionName) functionName = null;
        this.functionName = functionName;
        this.fileName = fileName;
        this.lineNumber = lineNumber;
        this.columnNumber = columnNumber;
        this._originalFunctionName = sourceFunctionName;
        this._originalFileName = sourceFileName;
        this._originalLineNumber = sourceLineNumber;
        this._originalColumnNumber = sourceColumnNumber;
        this._scriptCode = scriptCode;
        this._originalScriptCode = sourceScriptCode;
    }
    /**
   * Returns the name of this function.
   */ getFunctionName() {
        return this.functionName || '(anonymous function)';
    }
    /**
   * Returns the source of the frame.
   * This contains the file name, line number, and column number when available.
   */ getSource() {
        let str = '';
        if (this.fileName != null) str += this.fileName + ':';
        if (this.lineNumber != null) str += this.lineNumber + ':';
        if (this.columnNumber != null) str += this.columnNumber + ':';
        return str.slice(0, -1);
    }
    /**
   * Returns a pretty version of this stack frame.
   */ toString() {
        const functionName = this.getFunctionName();
        const source = this.getSource();
        return `${functionName}${source ? ` (${source})` : ``}`;
    }
}
var $d35756f426c25812$export$2e2bcd8739ae039 = $d35756f426c25812$export$8949fddf10447898;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $865b9ffc545cb441$var$regexExtractLocation = /\(?(.+?)(?::(\d+))?(?::(\d+))?\)?$/;
function $865b9ffc545cb441$var$extractLocation(token) {
    return $865b9ffc545cb441$var$regexExtractLocation.exec(token) // $FlowFixMe
    .slice(1).map((v)=>{
        const p = Number(v);
        if (!isNaN(p)) return p;
        return v;
    });
}
const $865b9ffc545cb441$var$regexValidFrame_Chrome = /^\s*(at|in)\s.+(:\d+)/;
const $865b9ffc545cb441$var$regexValidFrame_FireFox = /(^|@)\S+:\d+|.+line\s+\d+\s+>\s+(eval|Function).+/;
function $865b9ffc545cb441$var$parseStack(stack) {
    let frames = stack.filter((e)=>$865b9ffc545cb441$var$regexValidFrame_Chrome.test(e) || $865b9ffc545cb441$var$regexValidFrame_FireFox.test(e)).map((e)=>{
        if ($865b9ffc545cb441$var$regexValidFrame_FireFox.test(e)) {
            // Strip eval, we don't care about it
            let isEval = false;
            if (/ > (eval|Function)/.test(e)) {
                e = e.replace(/ line (\d+)(?: > eval line \d+)* > (eval|Function):\d+:\d+/g, ':$1');
                isEval = true;
            }
            const data = e.split(/[@]/g);
            const last = data.pop();
            return new $d35756f426c25812$export$2e2bcd8739ae039(data.join('@') || (isEval ? 'eval' : null), ...$865b9ffc545cb441$var$extractLocation(last));
        } else {
            // Strip eval, we don't care about it
            if (e.indexOf('(eval ') !== -1) e = e.replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
            if (e.indexOf('(at ') !== -1) e = e.replace(/\(at /, '(');
            const data = e.trim().split(/\s+/g).slice(1);
            const last = data.pop();
            return new $d35756f426c25812$export$2e2bcd8739ae039(data.join(' ') || null, ...$865b9ffc545cb441$var$extractLocation(last));
        }
    });
    let index = frames.findIndex((frame)=>frame.getFunctionName().includes('react-stack-bottom-frame'));
    if (index >= 0) frames = frames.slice(0, index);
    return frames;
}
/**
 * Turns an <code>Error</code>, or similar object, into a set of <code>StackFrame</code>s.
 * @alias parse
 */ function $865b9ffc545cb441$export$98e6a39c04603d36(error) {
    if (error == null) throw new Error('You cannot pass a null object.');
    if (typeof error === 'string') return $865b9ffc545cb441$var$parseStack(error.split('\n'));
    if (Array.isArray(error)) return $865b9ffc545cb441$var$parseStack(error);
    if (typeof error.stack === 'string') return $865b9ffc545cb441$var$parseStack(error.stack.split('\n'));
    throw new Error('The error you provided does not contain a stack trace.');
}
var $865b9ffc545cb441$export$2e2bcd8739ae039 = $865b9ffc545cb441$export$98e6a39c04603d36;
/**
 * Enhances a set of <code>StackFrame</code>s with their original positions and code (when available).
 * @param {StackFrame[]} frames A set of <code>StackFrame</code>s which contain (generated) code positions.
 * @param {number} [contextLines=3] The number of lines to provide before and after the line specified in the <code>StackFrame</code>.
 */ async function $df495b51087c401c$export$35b6448019ed80b8(error, contextLines = 3) {
    const frames = $865b9ffc545cb441$export$98e6a39c04603d36(error);
    // $FlowFixMe
    let res = await fetch(module.bundle.devServer + '/__parcel_code_frame', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contextLines: contextLines,
            frames: frames.map((f)=>({
                    fileName: f.fileName,
                    lineNumber: f.lineNumber,
                    columnNumber: f.columnNumber
                }))
        })
    });
    let json = await res.json();
    return json.map((f, i)=>new $d35756f426c25812$export$8949fddf10447898(frames[i].functionName, f.fileName, f.lineNumber, f.columnNumber, f.compiledLines, frames[i].functionName, f.sourceFileName, f.sourceLineNumber, f.sourceColumnNumber, f.sourceLines));
}
var $df495b51087c401c$export$2e2bcd8739ae039 = $df495b51087c401c$export$35b6448019ed80b8;
const $6d40ebe8356580e0$var$CONTEXT_SIZE = 3;
function $6d40ebe8356580e0$export$9123e6c9c0ac21ed(crash) {
    return (error, unhandledRejection = false)=>{
        $df495b51087c401c$export$2e2bcd8739ae039(error, $6d40ebe8356580e0$var$CONTEXT_SIZE).then((stackFrames)=>{
            if (stackFrames == null) return;
            crash({
                error: error,
                unhandledRejection: unhandledRejection,
                contextSize: $6d40ebe8356580e0$var$CONTEXT_SIZE,
                stackFrames: stackFrames
            });
        }).catch((e)=>{
            // eslint-disable-next-line no-console
            console.log('Could not get the stack frames of error:', e);
        });
    };
}
function $6d40ebe8356580e0$var$patchConsole(method, onError) {
    /* eslint-disable no-console */ let original = console[method];
    console[method] = (...args)=>{
        let error = null;
        if (typeof args[0] === 'string') {
            let format = args[0].match(/%[oOdisfc]/g);
            if (format) {
                let errorIndex = format.findIndex((match)=>match === '%o' || match === '%O');
                if (errorIndex < 0) errorIndex = format.findIndex((match)=>match === '%s');
                if (errorIndex >= 0) error = args[errorIndex + 1];
                else error = args[1];
                if (!(error instanceof Error)) {
                    let index = 1;
                    let message = args[0].replace(/%[oOdisfc]/g, (match)=>{
                        switch(match){
                            case '%s':
                                return String(args[index++]);
                            case '%f':
                                return parseFloat(args[index++]);
                            case '%d':
                            case '%i':
                                return parseInt(args[index++], 10);
                            case '%o':
                            case '%O':
                                if (args[index] instanceof Error) return String(args[index++]);
                                else return JSON.stringify(args[index++]);
                            case '%c':
                                index++;
                                return '';
                        }
                    });
                    error = new Error(message);
                }
            } else error = new Error(args[0]);
        } else error = args.find((arg)=>arg instanceof Error);
        if (error && !error.message.includes('[parcel]') && typeof window !== 'undefined' && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
            // Attempt to append the React component stack
            // TODO: use React.captureOwnerStack once stable.
            let hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (hook.renderers instanceof Map) {
                for (let renderer of hook.renderers.values())if (typeof renderer?.currentDispatcherRef?.getCurrentStack === 'function') {
                    let stack = renderer.currentDispatcherRef.getCurrentStack();
                    if (stack) {
                        error.stack += stack;
                        break;
                    }
                }
            }
            onError(error);
        }
        original.apply(console, args);
    };
/* eslint-enable no-console */ }
function $6d40ebe8356580e0$export$38ec23daa6e8dcdf(crash) {
    const crashWithFramesRunTime = $6d40ebe8356580e0$export$9123e6c9c0ac21ed(crash);
    $883a43040cbd0629$export$6503ec6e8aabbaf(window, (error)=>crashWithFramesRunTime(error, false));
    $900f8c32b7484e20$export$6503ec6e8aabbaf(window, (error)=>crashWithFramesRunTime(error, true));
    $5f72ade198404e99$export$6503ec6e8aabbaf();
    $6d40ebe8356580e0$var$patchConsole('error', (error)=>crashWithFramesRunTime(error, false));
    return function() {
        $5f72ade198404e99$export$d07f55d4c15c0440();
        $900f8c32b7484e20$export$d07f55d4c15c0440(window);
        $883a43040cbd0629$export$d07f55d4c15c0440(window);
    };
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-env browser */ var $10ecac3e4062713a$var$t, $10ecac3e4062713a$var$r, $10ecac3e4062713a$var$u, $10ecac3e4062713a$var$i, $10ecac3e4062713a$var$o = 0, $10ecac3e4062713a$var$f = [], $10ecac3e4062713a$var$c = $b6c7f0288a15c619$export$41c562ebe57d11e2, $10ecac3e4062713a$var$e = $10ecac3e4062713a$var$c.__b, $10ecac3e4062713a$var$a = $10ecac3e4062713a$var$c.__r, $10ecac3e4062713a$var$v = $10ecac3e4062713a$var$c.diffed, $10ecac3e4062713a$var$l = $10ecac3e4062713a$var$c.__c, $10ecac3e4062713a$var$m = $10ecac3e4062713a$var$c.unmount, $10ecac3e4062713a$var$s = $10ecac3e4062713a$var$c.__;
function $10ecac3e4062713a$var$p(n, t) {
    $10ecac3e4062713a$var$c.__h && $10ecac3e4062713a$var$c.__h($10ecac3e4062713a$var$r, n, $10ecac3e4062713a$var$o || t), $10ecac3e4062713a$var$o = 0;
    var u = $10ecac3e4062713a$var$r.__H || ($10ecac3e4062713a$var$r.__H = {
        __: [],
        __h: []
    });
    return n >= u.__.length && u.__.push({}), u.__[n];
}
function $10ecac3e4062713a$export$60241385465d0a34(n) {
    return $10ecac3e4062713a$var$o = 1, $10ecac3e4062713a$export$13e3392192263954($10ecac3e4062713a$var$D, n);
}
function $10ecac3e4062713a$export$13e3392192263954(n, u, i) {
    var o = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 2);
    if (o.t = n, !o.__c && (o.__ = [
        i ? i(u) : $10ecac3e4062713a$var$D(void 0, u),
        function(n) {
            var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
            t !== r && (o.__N = [
                r,
                o.__[1]
            ], o.__c.setState({}));
        }
    ], o.__c = $10ecac3e4062713a$var$r, !$10ecac3e4062713a$var$r.__f)) {
        var f = function(n, t, r) {
            if (!o.__c.__H) return !0;
            var u = o.__c.__H.__.filter(function(n) {
                return !!n.__c;
            });
            if (u.every(function(n) {
                return !n.__N;
            })) return !c || c.call(this, n, t, r);
            var i = o.__c.props !== n;
            return u.forEach(function(n) {
                if (n.__N) {
                    var t = n.__[0];
                    n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
                }
            }), c && c.call(this, n, t, r) || i;
        };
        $10ecac3e4062713a$var$r.__f = !0;
        var c = $10ecac3e4062713a$var$r.shouldComponentUpdate, e = $10ecac3e4062713a$var$r.componentWillUpdate;
        $10ecac3e4062713a$var$r.componentWillUpdate = function(n, t, r) {
            if (this.__e) {
                var u = c;
                c = void 0, f(n, t, r), c = u;
            }
            e && e.call(this, n, t, r);
        }, $10ecac3e4062713a$var$r.shouldComponentUpdate = f;
    }
    return o.__N || o.__;
}
function $10ecac3e4062713a$export$6d9c69b0de29b591(n, u) {
    var i = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 3);
    !$10ecac3e4062713a$var$c.__s && $10ecac3e4062713a$var$C(i.__H, u) && (i.__ = n, i.u = u, $10ecac3e4062713a$var$r.__H.__h.push(i));
}
function $10ecac3e4062713a$export$e5c5a5f917a5871c(n, u) {
    var i = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 4);
    !$10ecac3e4062713a$var$c.__s && $10ecac3e4062713a$var$C(i.__H, u) && (i.__ = n, i.u = u, $10ecac3e4062713a$var$r.__h.push(i));
}
function $10ecac3e4062713a$export$b8f5890fc79d6aca(n) {
    return $10ecac3e4062713a$var$o = 5, $10ecac3e4062713a$export$1538c33de8887b59(function() {
        return {
            current: n
        };
    }, []);
}
function $10ecac3e4062713a$export$d5a552a76deda3c2(n, t, r) {
    $10ecac3e4062713a$var$o = 6, $10ecac3e4062713a$export$e5c5a5f917a5871c(function() {
        if ("function" == typeof n) {
            var r = n(t());
            return function() {
                n(null), r && "function" == typeof r && r();
            };
        }
        if (n) return n.current = t(), function() {
            return n.current = null;
        };
    }, null == r ? r : r.concat(n));
}
function $10ecac3e4062713a$export$1538c33de8887b59(n, r) {
    var u = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 7);
    return $10ecac3e4062713a$var$C(u.__H, r) && (u.__ = n(), u.__H = r, u.__h = n), u.__;
}
function $10ecac3e4062713a$export$35808ee640e87ca7(n, t) {
    return $10ecac3e4062713a$var$o = 8, $10ecac3e4062713a$export$1538c33de8887b59(function() {
        return n;
    }, t);
}
function $10ecac3e4062713a$export$fae74005e78b1a27(n) {
    var u = $10ecac3e4062713a$var$r.context[n.__c], i = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 9);
    return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub($10ecac3e4062713a$var$r)), u.props.value) : n.__;
}
function $10ecac3e4062713a$export$dc8fbce3eb94dc1e(n, t) {
    $10ecac3e4062713a$var$c.useDebugValue && $10ecac3e4062713a$var$c.useDebugValue(t ? t(n) : n);
}
function $10ecac3e4062713a$export$c052f6604b7d51fe(n) {
    var u = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 10), i = $10ecac3e4062713a$export$60241385465d0a34();
    return u.__ = n, $10ecac3e4062713a$var$r.componentDidCatch || ($10ecac3e4062713a$var$r.componentDidCatch = function(n, t) {
        u.__ && u.__(n, t), i[1](n);
    }), [
        i[0],
        function() {
            i[1](void 0);
        }
    ];
}
function $10ecac3e4062713a$export$f680877a34711e37() {
    var n = $10ecac3e4062713a$var$p($10ecac3e4062713a$var$t++, 11);
    if (!n.__) {
        for(var u = $10ecac3e4062713a$var$r.__v; null !== u && !u.__m && null !== u.__;)u = u.__;
        var i = u.__m || (u.__m = [
            0,
            0
        ]);
        n.__ = "P" + i[0] + "-" + i[1]++;
    }
    return n.__;
}
function $10ecac3e4062713a$var$j() {
    for(var n; n = $10ecac3e4062713a$var$f.shift();)if (n.__P && n.__H) try {
        n.__H.__h.forEach($10ecac3e4062713a$var$z), n.__H.__h.forEach($10ecac3e4062713a$var$B), n.__H.__h = [];
    } catch (t) {
        n.__H.__h = [], $10ecac3e4062713a$var$c.__e(t, n.__v);
    }
}
$10ecac3e4062713a$var$c.__b = function(n) {
    $10ecac3e4062713a$var$r = null, $10ecac3e4062713a$var$e && $10ecac3e4062713a$var$e(n);
}, $10ecac3e4062713a$var$c.__ = function(n, t) {
    n && t.__k && t.__k.__m && (n.__m = t.__k.__m), $10ecac3e4062713a$var$s && $10ecac3e4062713a$var$s(n, t);
}, $10ecac3e4062713a$var$c.__r = function(n) {
    $10ecac3e4062713a$var$a && $10ecac3e4062713a$var$a(n), $10ecac3e4062713a$var$t = 0;
    var i = ($10ecac3e4062713a$var$r = n.__c).__H;
    i && ($10ecac3e4062713a$var$u === $10ecac3e4062713a$var$r ? (i.__h = [], $10ecac3e4062713a$var$r.__h = [], i.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
    })) : (i.__h.forEach($10ecac3e4062713a$var$z), i.__h.forEach($10ecac3e4062713a$var$B), i.__h = [], $10ecac3e4062713a$var$t = 0)), $10ecac3e4062713a$var$u = $10ecac3e4062713a$var$r;
}, $10ecac3e4062713a$var$c.diffed = function(n) {
    $10ecac3e4062713a$var$v && $10ecac3e4062713a$var$v(n);
    var t = n.__c;
    t && t.__H && (t.__H.__h.length && (1 !== $10ecac3e4062713a$var$f.push(t) && $10ecac3e4062713a$var$i === $10ecac3e4062713a$var$c.requestAnimationFrame || (($10ecac3e4062713a$var$i = $10ecac3e4062713a$var$c.requestAnimationFrame) || $10ecac3e4062713a$var$w)($10ecac3e4062713a$var$j)), t.__H.__.forEach(function(n) {
        n.u && (n.__H = n.u), n.u = void 0;
    })), $10ecac3e4062713a$var$u = $10ecac3e4062713a$var$r = null;
}, $10ecac3e4062713a$var$c.__c = function(n, t) {
    t.some(function(n) {
        try {
            n.__h.forEach($10ecac3e4062713a$var$z), n.__h = n.__h.filter(function(n) {
                return !n.__ || $10ecac3e4062713a$var$B(n);
            });
        } catch (r) {
            t.some(function(n) {
                n.__h && (n.__h = []);
            }), t = [], $10ecac3e4062713a$var$c.__e(r, n.__v);
        }
    }), $10ecac3e4062713a$var$l && $10ecac3e4062713a$var$l(n, t);
}, $10ecac3e4062713a$var$c.unmount = function(n) {
    $10ecac3e4062713a$var$m && $10ecac3e4062713a$var$m(n);
    var t, r = n.__c;
    r && r.__H && (r.__H.__.forEach(function(n) {
        try {
            $10ecac3e4062713a$var$z(n);
        } catch (n) {
            t = n;
        }
    }), r.__H = void 0, t && $10ecac3e4062713a$var$c.__e(t, r.__v));
};
var $10ecac3e4062713a$var$k = "function" == typeof requestAnimationFrame;
function $10ecac3e4062713a$var$w(n) {
    var t, r = function() {
        clearTimeout(u), $10ecac3e4062713a$var$k && cancelAnimationFrame(t), setTimeout(n);
    }, u = setTimeout(r, 100);
    $10ecac3e4062713a$var$k && (t = requestAnimationFrame(r));
}
function $10ecac3e4062713a$var$z(n) {
    var t = $10ecac3e4062713a$var$r, u = n.__c;
    "function" == typeof u && (n.__c = void 0, u()), $10ecac3e4062713a$var$r = t;
}
function $10ecac3e4062713a$var$B(n) {
    var t = $10ecac3e4062713a$var$r;
    n.__c = n.__(), $10ecac3e4062713a$var$r = t;
}
function $10ecac3e4062713a$var$C(n, t) {
    return !n || n.length !== t.length || t.some(function(t, r) {
        return t !== n[r];
    });
}
function $10ecac3e4062713a$var$D(n, t) {
    return "function" == typeof t ? t(n) : t;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $74bb4be6e9b78681$export$f30cb9bc4f736419 = {
    // Colors for components styles
    background: 'white',
    color: 'black',
    headerColor: '#ce1126',
    primaryPreBackground: 'rgba(206, 17, 38, 0.05)',
    primaryPreColor: 'inherit',
    secondaryPreBackground: 'rgba(251, 245, 180, 0.3)',
    secondaryPreColor: 'inherit',
    footer: '#878e91',
    anchorColor: '#878e91',
    toggleBackground: 'transparent',
    toggleColor: '#878e91',
    closeColor: '#293238',
    navBackground: 'rgba(206, 17, 38, 0.05)',
    navArrow: '#ce1126',
    diffAdded: 'green',
    diffRemoved: '#ce1126',
    // Light color scheme inspired by https://chriskempson.github.io/base16/css/base16-github.css
    // base00: '#ffffff',
    base01: '#f5f5f5',
    // base02: '#c8c8fa',
    base03: '#6e6e6e',
    // base04: '#e8e8e8',
    base05: '#333333',
    // base06: '#ffffff',
    // base07: '#ffffff',
    base08: '#881280',
    // base09: '#0086b3',
    // base0A: '#795da3',
    base0B: '#1155cc',
    base0C: '#994500',
    // base0D: '#795da3',
    base0E: '#c80000'
};
const $74bb4be6e9b78681$export$3e936a8db52a10a0 = {
    // Colors for components styles
    background: '#353535',
    color: 'white',
    headerColor: '#e83b46',
    primaryPreBackground: 'rgba(206, 17, 38, 0.1)',
    primaryPreColor: '#fccfcf',
    secondaryPreBackground: 'rgba(251, 245, 180, 0.1)',
    secondaryPreColor: '#fbf5b4',
    footer: '#878e91',
    anchorColor: '#878e91',
    toggleBackground: 'transparent',
    toggleColor: '#878e91',
    closeColor: '#ffffff',
    navBackground: 'rgba(206, 17, 38, 0.2)',
    navArrow: '#ce1126',
    diffAdded: '#85e285',
    diffRemoved: '#ff5459',
    // Dark color scheme inspired by https://github.com/atom/base16-tomorrow-dark-theme/blob/master/styles/colors.less
    // base00: '#1d1f21',
    base01: '#282a2e',
    // base02: '#373b41',
    base03: '#969896',
    // base04: '#b4b7b4',
    base05: '#c5c8c6',
    // base06: '#e0e0e0',
    // base07: '#ffffff',
    base08: '#cc6666',
    // base09: '#de935f',
    // base0A: '#f0c674',
    base0B: '#b5bd68',
    base0C: '#8abeb7',
    // base0D: '#81a2be',
    base0E: '#b294bb'
};
const $74bb4be6e9b78681$export$bca14c5b3b88a9c9 = Object.fromEntries(Object.keys($74bb4be6e9b78681$export$f30cb9bc4f736419).map((key)=>[
        key,
        `light-dark(${$74bb4be6e9b78681$export$f30cb9bc4f736419[key]}, ${$74bb4be6e9b78681$export$3e936a8db52a10a0[key]})`
    ]));
const $74bb4be6e9b78681$export$7ef984671d1853d7 = {
    width: '100vw',
    height: '100vh',
    maxWidth: 'none',
    maxHeight: 'none',
    border: 0,
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    textAlign: 'center',
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.background,
    outline: 'none',
    colorScheme: 'light dark'
};
const $20d888b381d18c6c$var$overlayStyle = {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column',
    height: '100%',
    width: '1024px',
    maxWidth: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: '0.5rem',
    boxSizing: 'border-box',
    textAlign: 'left',
    fontFamily: 'Consolas, Menlo, monospace',
    fontSize: '11px',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    lineHeight: 1.5,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.color
};
function $20d888b381d18c6c$var$ErrorOverlay(props) {
    const { shortcutHandler: shortcutHandler } = props;
    $10ecac3e4062713a$export$6d9c69b0de29b591(()=>{
        const onKeyDown = (e)=>{
            if (shortcutHandler) shortcutHandler(e.key);
        };
        window.addEventListener('keydown', onKeyDown);
        return ()=>{
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [
        shortcutHandler
    ]);
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $20d888b381d18c6c$var$overlayStyle,
        children: props.children
    });
}
var $20d888b381d18c6c$export$2e2bcd8739ae039 = $20d888b381d18c6c$var$ErrorOverlay;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $7aae0c9ea64fc08c$var$closeButtonStyle = {
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.closeColor,
    lineHeight: '1rem',
    fontSize: '1.5rem',
    padding: '1rem',
    cursor: 'pointer',
    position: 'absolute',
    right: 0,
    top: 0
};
function $7aae0c9ea64fc08c$var$CloseButton({ close: close }) {
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
        title: "Click or press Escape to dismiss.",
        onClick: close,
        style: $7aae0c9ea64fc08c$var$closeButtonStyle,
        children: "\xd7"
    });
}
var $7aae0c9ea64fc08c$export$2e2bcd8739ae039 = $7aae0c9ea64fc08c$var$CloseButton;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $1adc179a826c5dd2$var$navigationBarStyle = {
    marginBottom: '0.5rem'
};
const $1adc179a826c5dd2$var$buttonContainerStyle = {
    marginRight: '1em'
};
const $1adc179a826c5dd2$var$_navButtonStyle = {
    border: 'none',
    borderRadius: '4px',
    padding: '3px 6px',
    cursor: 'pointer'
};
const $1adc179a826c5dd2$var$leftButtonStyle = {
    ...$1adc179a826c5dd2$var$_navButtonStyle,
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navBackground,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navArrow,
    borderTopRightRadius: '0px',
    borderBottomRightRadius: '0px',
    marginRight: '1px'
};
const $1adc179a826c5dd2$var$rightButtonStyle = {
    ...$1adc179a826c5dd2$var$_navButtonStyle,
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navBackground,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.navArrow,
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px'
};
function $1adc179a826c5dd2$var$NavigationBar(props) {
    const { currentError: currentError, totalErrors: totalErrors, previous: previous, next: next } = props;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $1adc179a826c5dd2$var$navigationBarStyle,
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
                style: $1adc179a826c5dd2$var$buttonContainerStyle,
                children: [
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        onClick: previous,
                        style: $1adc179a826c5dd2$var$leftButtonStyle,
                        children: "\u2190"
                    }),
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        onClick: next,
                        style: $1adc179a826c5dd2$var$rightButtonStyle,
                        children: "\u2192"
                    })
                ]
            }),
            `${currentError} of ${totalErrors} errors on the page`
        ]
    });
}
var $1adc179a826c5dd2$export$2e2bcd8739ae039 = $1adc179a826c5dd2$var$NavigationBar;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $c306e3a42547c8c2$var$headerStyle = {
    fontSize: '2em',
    fontFamily: 'sans-serif',
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.headerColor,
    whiteSpace: 'pre-wrap',
    // Top bottom margin spaces header
    // Right margin revents overlap with close button
    margin: '0 2rem 0.75rem 0',
    flex: '0 0 auto'
};
function $c306e3a42547c8c2$var$Header(props) {
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $c306e3a42547c8c2$var$headerStyle,
        children: props.headerText
    });
}
var $c306e3a42547c8c2$export$2e2bcd8739ae039 = $c306e3a42547c8c2$var$Header;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $97c30df7f5c364f7$var$_preStyle = {
    position: 'relative',
    display: 'block',
    padding: '0.5em',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    borderRadius: '0.25rem'
};
const $97c30df7f5c364f7$var$codeStyle = {
    fontFamily: 'Consolas, Menlo, monospace'
};
function $97c30df7f5c364f7$var$CodeBlock({ main: main, codeHTML: codeHTML }) {
    const primaryPreStyle = {
        ...$97c30df7f5c364f7$var$_preStyle,
        backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreBackground,
        color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreColor
    };
    const secondaryPreStyle = {
        ...$97c30df7f5c364f7$var$_preStyle,
        backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.secondaryPreBackground,
        color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.secondaryPreColor
    };
    const preStyle = main ? primaryPreStyle : secondaryPreStyle;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("pre", {
        style: preStyle,
        children: $23b7c1cb98b19658$export$34b9dba7ce09269b("code", {
            style: $97c30df7f5c364f7$var$codeStyle,
            dangerouslySetInnerHTML: {
                __html: codeHTML
            }
        })
    });
}
var $97c30df7f5c364f7$export$2e2bcd8739ae039 = $97c30df7f5c364f7$var$CodeBlock;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $f78f50d61026cdc5$export$44b1e5ee7f53eae1(sourceFileName, sourceLineNumber, sourceColumnNumber, fileName, lineNumber, columnNumber, compiled) {
    let prettyURL;
    if (!compiled && sourceFileName && typeof sourceLineNumber === 'number') {
        // Remove everything up to the first /src/ or /node_modules/
        const trimMatch = /^[/|\\].*?[/|\\]((src|node_modules)[/|\\].*)/.exec(sourceFileName);
        if (trimMatch && trimMatch[1]) prettyURL = trimMatch[1];
        else prettyURL = sourceFileName;
        prettyURL += ':' + sourceLineNumber;
        // Note: we intentionally skip 0's because they're produced by cheap webpack maps
        if (sourceColumnNumber) prettyURL += ':' + sourceColumnNumber;
    } else if (fileName && typeof lineNumber === 'number') {
        prettyURL = fileName + ':' + lineNumber;
        // Note: we intentionally skip 0's because they're produced by cheap webpack maps
        if (columnNumber) prettyURL += ':' + columnNumber;
    } else prettyURL = 'unknown';
    return prettyURL.replace('webpack://', '.');
}
var $f78f50d61026cdc5$export$2e2bcd8739ae039 = $f78f50d61026cdc5$export$44b1e5ee7f53eae1;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $cdea3ae92bef6910$exports = {};
'use strict';
$cdea3ae92bef6910$exports = $cdea3ae92bef6910$var$ansiHTML;
// Reference to https://github.com/sindresorhus/ansi-regex
var $cdea3ae92bef6910$var$_regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/;
var $cdea3ae92bef6910$var$_defColors = {
    reset: [
        'fff',
        '000'
    ],
    black: '000',
    red: 'ff0000',
    green: '209805',
    yellow: 'e8bf03',
    blue: '0000ff',
    magenta: 'ff00ff',
    cyan: '00ffee',
    lightgrey: 'f0f0f0',
    darkgrey: '888'
};
var $cdea3ae92bef6910$var$_styles = {
    30: 'black',
    31: 'red',
    32: 'green',
    33: 'yellow',
    34: 'blue',
    35: 'magenta',
    36: 'cyan',
    37: 'lightgrey'
};
var $cdea3ae92bef6910$var$_openTags = {
    '1': 'font-weight:bold',
    '2': 'opacity:0.5',
    '3': '<i>',
    '4': '<u>',
    '8': 'display:none',
    '9': '<del>' // delete
};
var $cdea3ae92bef6910$var$_closeTags = {
    '23': '</i>',
    '24': '</u>',
    '29': '</del>' // reset delete
};
[
    0,
    21,
    22,
    27,
    28,
    39,
    49
].forEach(function(n) {
    $cdea3ae92bef6910$var$_closeTags[n] = '</span>';
});
/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */ function $cdea3ae92bef6910$var$ansiHTML(text) {
    // Returns the text if the string has no ANSI escape code.
    if (!$cdea3ae92bef6910$var$_regANSI.test(text)) return text;
    // Cache opened sequence.
    var ansiCodes = [];
    // Replace with markup.
    var ret = text.replace(/\033\[(\d+)m/g, function(match, seq) {
        var ot = $cdea3ae92bef6910$var$_openTags[seq];
        if (ot) {
            // If current sequence has been opened, close it.
            if (!!~ansiCodes.indexOf(seq)) {
                ansiCodes.pop();
                return '</span>';
            }
            // Open tag.
            ansiCodes.push(seq);
            return ot[0] === '<' ? ot : '<span style="' + ot + ';">';
        }
        var ct = $cdea3ae92bef6910$var$_closeTags[seq];
        if (ct) {
            // Pop sequence
            ansiCodes.pop();
            return ct;
        }
        return '';
    });
    // Make sure tags are closed.
    var l = ansiCodes.length;
    l > 0 && (ret += Array(l + 1).join('</span>'));
    return ret;
}
/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */ $cdea3ae92bef6910$var$ansiHTML.setColors = function(colors) {
    if (typeof colors !== 'object') throw new Error('`colors` parameter must be an Object.');
    var _finalColors = {};
    for(var key in $cdea3ae92bef6910$var$_defColors){
        var hex = colors.hasOwnProperty(key) ? colors[key] : null;
        if (!hex) {
            _finalColors[key] = $cdea3ae92bef6910$var$_defColors[key];
            continue;
        }
        if ('reset' === key) {
            if (typeof hex === 'string') hex = [
                hex
            ];
            if (!Array.isArray(hex) || hex.length === 0 || hex.some(function(h) {
                return typeof h !== 'string';
            })) throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000');
            var defHexColor = $cdea3ae92bef6910$var$_defColors[key];
            if (!hex[0]) hex[0] = defHexColor[0];
            if (hex.length === 1 || !hex[1]) {
                hex = [
                    hex[0]
                ];
                hex.push(defHexColor[1]);
            }
            hex = hex.slice(0, 2);
        } else if (typeof hex !== 'string') throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000');
        _finalColors[key] = hex;
    }
    $cdea3ae92bef6910$var$_setTags(_finalColors);
};
/**
 * Reset colors.
 */ $cdea3ae92bef6910$var$ansiHTML.reset = function() {
    $cdea3ae92bef6910$var$_setTags($cdea3ae92bef6910$var$_defColors);
};
/**
 * Expose tags, including open and close.
 * @type {Object}
 */ $cdea3ae92bef6910$var$ansiHTML.tags = {};
if (Object.defineProperty) {
    Object.defineProperty($cdea3ae92bef6910$var$ansiHTML.tags, 'open', {
        get: function() {
            return $cdea3ae92bef6910$var$_openTags;
        }
    });
    Object.defineProperty($cdea3ae92bef6910$var$ansiHTML.tags, 'close', {
        get: function() {
            return $cdea3ae92bef6910$var$_closeTags;
        }
    });
} else {
    $cdea3ae92bef6910$var$ansiHTML.tags.open = $cdea3ae92bef6910$var$_openTags;
    $cdea3ae92bef6910$var$ansiHTML.tags.close = $cdea3ae92bef6910$var$_closeTags;
}
function $cdea3ae92bef6910$var$_setTags(colors) {
    // reset all
    $cdea3ae92bef6910$var$_openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1];
    // inverse
    $cdea3ae92bef6910$var$_openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0];
    // dark grey
    $cdea3ae92bef6910$var$_openTags['90'] = 'color:#' + colors.darkgrey;
    for(var code in $cdea3ae92bef6910$var$_styles){
        var color = $cdea3ae92bef6910$var$_styles[code];
        var oriColor = colors[color] || '000';
        $cdea3ae92bef6910$var$_openTags[code] = 'color:#' + oriColor;
        code = parseInt(code);
        $cdea3ae92bef6910$var$_openTags[(code + 10).toString()] = 'background:#' + oriColor;
    }
}
$cdea3ae92bef6910$var$ansiHTML.reset();
// Map ANSI colors from what babel-code-frame uses to base16-github
// See: https://github.com/babel/babel/blob/e86f62b304d280d0bab52c38d61842b853848ba6/packages/babel-code-frame/src/index.js#L9-L22
const $b67e2a05a9c13039$var$colors = {
    reset: [
        $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base05,
        'transparent'
    ],
    black: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base05,
    red: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base08 /* marker, bg-invalid */ ,
    green: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0B /* string */ ,
    yellow: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base08 /* capitalized, jsx_tag, punctuator */ ,
    blue: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0C,
    magenta: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0C /* regex */ ,
    cyan: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base0E /* keyword */ ,
    gray: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base03 /* comment, gutter */ ,
    lightgrey: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base01,
    darkgrey: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.base03
};
/*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).setColors($b67e2a05a9c13039$var$colors);
// $FlowFixMe
for(let tag in /*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).tags.open)/*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).tags.open[tag] = /*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports).tags.open[tag].replace(/#light-dark/g, 'light-dark');
function $b67e2a05a9c13039$var$generateAnsiHTML(txt) {
    return /*@__PURE__*/ $parcel$interopDefault($cdea3ae92bef6910$exports)(txt.replace(/[&<>"']/g, (c)=>{
        switch(c){
            case '&':
                return '&amp';
            case '<':
                return '&lt;';
            case '>':
                return '&gt';
            case '"':
                return '&quot;';
            case "'":
                return '&#39;';
            default:
                return c;
        }
    }));
}
var $b67e2a05a9c13039$export$2e2bcd8739ae039 = $b67e2a05a9c13039$var$generateAnsiHTML;
const $e0e0fa52b83f95a9$var$linkStyle = {
    fontSize: '0.9em',
    marginBottom: '0.9em'
};
const $e0e0fa52b83f95a9$var$anchorStyle = {
    textDecoration: 'none',
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.anchorColor,
    cursor: 'pointer'
};
const $e0e0fa52b83f95a9$var$codeAnchorStyle = {
    cursor: 'pointer'
};
const $e0e0fa52b83f95a9$var$toggleStyle = {
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.toggleColor,
    cursor: 'pointer',
    border: 'none',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    background: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.toggleBackground,
    fontFamily: 'Consolas, Menlo, monospace',
    fontSize: '1em',
    padding: '0px',
    lineHeight: '1.5'
};
function $e0e0fa52b83f95a9$var$StackFrame(props) {
    const { frame: frame, critical: critical, showCode: showCode } = props;
    const { fileName: fileName, lineNumber: lineNumber, columnNumber: columnNumber, _scriptCode: scriptLines, _originalFileName: sourceFileName, _originalLineNumber: sourceLineNumber, _originalColumnNumber: sourceColumnNumber, _originalScriptCode: sourceLines } = frame;
    const functionName = frame.getFunctionName();
    const [compiled, setCompiled] = $10ecac3e4062713a$export$60241385465d0a34(!sourceLines);
    const getErrorLocation = ()=>{
        const { _originalFileName: fileName, _originalLineNumber: lineNumber } = props.frame;
        // Unknown file
        if (!fileName) return null;
        // e.g. "/path-to-my-app/webpack/bootstrap eaddeb46b67d75e4dfc1"
        const isInternalWebpackBootstrapCode = fileName.trim().indexOf(' ') !== -1;
        if (isInternalWebpackBootstrapCode) return null;
        // Code is in a real file
        return {
            fileName: fileName,
            lineNumber: lineNumber || 1
        };
    };
    const editorHandler = ()=>{
        const errorLoc = getErrorLocation();
        if (!errorLoc) return;
        props.editorHandler?.(errorLoc);
    };
    const url = $f78f50d61026cdc5$export$44b1e5ee7f53eae1(sourceFileName, sourceLineNumber, sourceColumnNumber, fileName, lineNumber, columnNumber, compiled);
    let codeBlockProps = null;
    if (showCode) {
        if (compiled && scriptLines && scriptLines.length !== 0 && lineNumber != null) codeBlockProps = {
            codeHTML: $b67e2a05a9c13039$export$2e2bcd8739ae039(scriptLines),
            main: critical
        };
        else if (!compiled && sourceLines && sourceLines.length !== 0 && sourceLineNumber != null) codeBlockProps = {
            codeHTML: $b67e2a05a9c13039$export$2e2bcd8739ae039(sourceLines),
            main: critical
        };
    }
    const canOpenInEditor = getErrorLocation() !== null && props.editorHandler !== null;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                children: functionName
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                style: $e0e0fa52b83f95a9$var$linkStyle,
                children: $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
                    role: "link",
                    style: canOpenInEditor ? $e0e0fa52b83f95a9$var$anchorStyle : null,
                    onClick: canOpenInEditor ? editorHandler : null,
                    onKeyDown: canOpenInEditor ? (e)=>{
                        if (e.key === 'Enter') editorHandler();
                    } : null,
                    tabIndex: canOpenInEditor ? '0' : null,
                    children: url
                })
            }),
            codeBlockProps && $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                style: {
                    marginBottom: '1.5em'
                },
                children: [
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
                        onClick: canOpenInEditor ? editorHandler : null,
                        style: canOpenInEditor ? $e0e0fa52b83f95a9$var$codeAnchorStyle : null,
                        children: $23b7c1cb98b19658$export$34b9dba7ce09269b($97c30df7f5c364f7$export$2e2bcd8739ae039, {
                            ...codeBlockProps
                        })
                    }),
                    scriptLines && sourceLines && $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        style: $e0e0fa52b83f95a9$var$toggleStyle,
                        onClick: ()=>{
                            setCompiled(!compiled);
                        },
                        children: 'View ' + (compiled ? 'source' : 'compiled')
                    })
                ]
            })
        ]
    });
}
var $e0e0fa52b83f95a9$export$2e2bcd8739ae039 = $e0e0fa52b83f95a9$var$StackFrame;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $9a1abb59f5d10ec8$var$_collapsibleStyle = {
    cursor: 'pointer',
    border: 'none',
    display: 'block',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Consolas, Menlo, monospace',
    fontSize: '1em',
    padding: '0px',
    lineHeight: '1.5'
};
const $9a1abb59f5d10ec8$var$collapsibleCollapsedStyle = {
    ...$9a1abb59f5d10ec8$var$_collapsibleStyle,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.color,
    background: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.background,
    marginBottom: '1.5em'
};
const $9a1abb59f5d10ec8$var$collapsibleExpandedStyle = {
    ...$9a1abb59f5d10ec8$var$_collapsibleStyle,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.color,
    background: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.background,
    marginBottom: '0.6em'
};
function $9a1abb59f5d10ec8$var$Collapsible(props) {
    const [collapsed, setCollapsed] = $10ecac3e4062713a$export$60241385465d0a34(true);
    const toggleCollapsed = ()=>{
        setCollapsed(!collapsed);
    };
    const count = props.children.length;
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("details", {
        open: !collapsed,
        onToggle: toggleCollapsed,
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b("summary", {
                style: collapsed ? $9a1abb59f5d10ec8$var$collapsibleCollapsedStyle : $9a1abb59f5d10ec8$var$collapsibleExpandedStyle,
                children: (collapsed ? "\u25B6" : "\u25BC") + ` ${count} stack frames were ` + (collapsed ? 'collapsed.' : 'expanded.')
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                children: [
                    props.children,
                    $23b7c1cb98b19658$export$34b9dba7ce09269b("button", {
                        onClick: toggleCollapsed,
                        style: $9a1abb59f5d10ec8$var$collapsibleExpandedStyle,
                        children: `\u{25B2} ${count} stack frames were expanded.`
                    })
                ]
            })
        ]
    });
}
var $9a1abb59f5d10ec8$export$2e2bcd8739ae039 = $9a1abb59f5d10ec8$var$Collapsible;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $e95d7084caaf4e6d$export$723fa77eef12dd9f(sourceFileName, fileName) {
    return sourceFileName == null || sourceFileName === '' || sourceFileName.indexOf('~/') !== -1 || sourceFileName.indexOf('node_modules/') !== -1 || sourceFileName.indexOf('error-overlay') !== -1 || sourceFileName.trim().indexOf(' ') !== -1 || fileName == null || fileName === '';
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function $a5027556d7003a42$export$64794fcb05cf0bcf(errorName) {
    switch(errorName){
        case 'EvalError':
        case 'InternalError':
        case 'RangeError':
        case 'ReferenceError':
        case 'SyntaxError':
        case 'TypeError':
        case 'URIError':
            return true;
        default:
            return false;
    }
}
var $a5027556d7003a42$export$2e2bcd8739ae039 = $a5027556d7003a42$export$64794fcb05cf0bcf;
const $5ee7d2edb790dd06$var$traceStyle = {
    fontSize: '1em',
    flex: '0 1 auto',
    minHeight: '0px',
    overflow: 'auto'
};
function $5ee7d2edb790dd06$var$StackTrace(props) {
    const { stackFrames: stackFrames, errorName: errorName, contextSize: contextSize, editorHandler: editorHandler } = props;
    const renderedFrames = [];
    let hasReachedAppCode = false, currentBundle = [], bundleCount = 0;
    stackFrames.forEach((frame, index)=>{
        const { fileName: fileName, _originalFileName: sourceFileName } = frame;
        const isInternalUrl = $e95d7084caaf4e6d$export$723fa77eef12dd9f(sourceFileName, fileName);
        const isThrownIntentionally = !$a5027556d7003a42$export$64794fcb05cf0bcf(errorName);
        const shouldCollapse = isInternalUrl && (isThrownIntentionally || hasReachedAppCode);
        if (!isInternalUrl) hasReachedAppCode = true;
        const frameEle = $23b7c1cb98b19658$export$34b9dba7ce09269b($e0e0fa52b83f95a9$export$2e2bcd8739ae039, {
            frame: frame,
            contextSize: contextSize,
            critical: index === 0,
            showCode: !shouldCollapse,
            editorHandler: editorHandler
        }, 'frame-' + index);
        const lastElement = index === stackFrames.length - 1;
        if (shouldCollapse) currentBundle.push(frameEle);
        if (!shouldCollapse || lastElement) {
            if (currentBundle.length === 1) renderedFrames.push(currentBundle[0]);
            else if (currentBundle.length > 1) {
                bundleCount++;
                renderedFrames.push($23b7c1cb98b19658$export$34b9dba7ce09269b($9a1abb59f5d10ec8$export$2e2bcd8739ae039, {
                    children: currentBundle
                }, 'bundle-' + bundleCount));
            }
            currentBundle = [];
        }
        if (!shouldCollapse) renderedFrames.push(frameEle);
    });
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $5ee7d2edb790dd06$var$traceStyle,
        children: renderedFrames
    });
}
var $5ee7d2edb790dd06$export$2e2bcd8739ae039 = $5ee7d2edb790dd06$var$StackTrace;
const $2eeadf2892cff4e4$var$diffStyle = {
    backgroundColor: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreBackground,
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.primaryPreColor,
    padding: '0.5em',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    borderRadius: '0.25rem'
};
function $2eeadf2892cff4e4$export$2e2bcd8739ae039({ diff: diff }) {
    let lines = diff.split('\n').flatMap((line, i)=>[
            $2eeadf2892cff4e4$var$formatLine(line, i),
            '\n'
        ]).slice(0, -1);
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("pre", {
        style: $2eeadf2892cff4e4$var$diffStyle,
        children: lines
    });
}
function $2eeadf2892cff4e4$var$formatLine(line, index) {
    if (line.startsWith('+')) return $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
        style: {
            color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.diffAdded,
            fontWeight: 'bold'
        },
        children: line
    }, index);
    else if (line.startsWith('-') || line.startsWith('>')) return $23b7c1cb98b19658$export$34b9dba7ce09269b("span", {
        style: {
            color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.diffRemoved,
            fontWeight: 'bold'
        },
        children: line
    }, index);
    else return line;
}
const $4baa71cb4cecc0ea$var$wrapperStyle = {
    display: 'flex',
    flexDirection: 'column'
};
function $4baa71cb4cecc0ea$var$RuntimeError({ errorRecord: errorRecord, editorHandler: editorHandler }) {
    const { error: error, unhandledRejection: unhandledRejection, contextSize: contextSize, stackFrames: stackFrames } = errorRecord;
    const errorName = unhandledRejection ? 'Unhandled Rejection (' + error.name + ')' : error.name;
    // Make header prettier
    const message = error.message;
    let headerText = message.match(/^\w*:/) || !errorName ? message : errorName + ': ' + message;
    headerText = headerText // TODO: maybe remove this prefix from fbjs?
    // It's just scaring people
    .replace(/^Invariant Violation:\s*/, '') // This is not helpful either:
    .replace(/^Warning:\s*/, '') // Break the actionable part to the next line.
    // AFAIK React 16+ should already do this.
    .replace(' Check the render method', '\n\nCheck the render method').replace(' Check your code at', '\n\nCheck your code at');
    let link, diff;
    if (headerText.includes('https://react.dev/link/hydration-mismatch')) {
        [headerText, diff] = headerText.split('https://react.dev/link/hydration-mismatch');
        link = 'https://react.dev/link/hydration-mismatch';
    } else if (headerText.includes('This will cause a hydration error.')) {
        [headerText, diff] = headerText.split('This will cause a hydration error.');
        headerText += 'This will cause a hydration error.';
    }
    let lines = headerText.split('\n');
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $4baa71cb4cecc0ea$var$wrapperStyle,
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b($c306e3a42547c8c2$export$2e2bcd8739ae039, {
                headerText: lines[0]
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b("pre", {
                children: lines.slice(1).join('\n').trim()
            }),
            link && $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
                children: $23b7c1cb98b19658$export$34b9dba7ce09269b("a", {
                    href: link,
                    target: "_blank",
                    rel: "noreferrer",
                    children: link
                })
            }),
            diff && $23b7c1cb98b19658$export$34b9dba7ce09269b($2eeadf2892cff4e4$export$2e2bcd8739ae039, {
                diff: diff.trim()
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b($5ee7d2edb790dd06$export$2e2bcd8739ae039, {
                stackFrames: stackFrames,
                errorName: errorName,
                contextSize: contextSize,
                editorHandler: editorHandler
            })
        ]
    });
}
var $4baa71cb4cecc0ea$export$2e2bcd8739ae039 = $4baa71cb4cecc0ea$var$RuntimeError;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const $7606db210182b733$var$footerStyle = {
    fontFamily: 'sans-serif',
    color: $74bb4be6e9b78681$export$bca14c5b3b88a9c9.footer,
    marginTop: '0.5rem',
    flex: '0 0 auto'
};
function $7606db210182b733$var$Footer(props) {
    return $23b7c1cb98b19658$export$34b9dba7ce09269b("div", {
        style: $7606db210182b733$var$footerStyle,
        children: [
            props.line1,
            $23b7c1cb98b19658$export$34b9dba7ce09269b("br", {}),
            props.line2
        ]
    });
}
var $7606db210182b733$export$2e2bcd8739ae039 = $7606db210182b733$var$Footer;
function $d0eac8b125ed15e2$var$RuntimeErrorContainer(props) {
    const { errorRecords: errorRecords, close: close } = props;
    const totalErrors = errorRecords.length;
    let [currentIndex, setCurrentIndex] = $10ecac3e4062713a$export$60241385465d0a34(0);
    let previous = ()=>{
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : totalErrors - 1);
    };
    let next = ()=>{
        setCurrentIndex(currentIndex < totalErrors - 1 ? currentIndex + 1 : 0);
    };
    return $23b7c1cb98b19658$export$34b9dba7ce09269b($20d888b381d18c6c$export$2e2bcd8739ae039, {
        shortcutHandler: (key)=>{
            if (key === 'Escape') props.close();
            else if (key === 'ArrowLeft') previous();
            else if (key === 'ArrowRight') next();
        },
        children: [
            $23b7c1cb98b19658$export$34b9dba7ce09269b($7aae0c9ea64fc08c$export$2e2bcd8739ae039, {
                close: close
            }),
            totalErrors > 1 && $23b7c1cb98b19658$export$34b9dba7ce09269b($1adc179a826c5dd2$export$2e2bcd8739ae039, {
                currentError: currentIndex + 1,
                totalErrors: totalErrors,
                previous: previous,
                next: next
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b($4baa71cb4cecc0ea$export$2e2bcd8739ae039, {
                errorRecord: errorRecords[currentIndex],
                editorHandler: props.editorHandler
            }),
            $23b7c1cb98b19658$export$34b9dba7ce09269b($7606db210182b733$export$2e2bcd8739ae039, {
                line1: "This screen is visible only in development. It will not appear if the app crashes in production.",
                line2: "Open your browser\u2019s developer console to further inspect this error.  Click the 'X' or hit ESC to dismiss this message."
            })
        ]
    });
}
var $d0eac8b125ed15e2$export$2e2bcd8739ae039 = $d0eac8b125ed15e2$var$RuntimeErrorContainer;
let $da9882e673ac146b$var$iframe = null;
let $da9882e673ac146b$var$editorHandler = null;
let $da9882e673ac146b$var$currentRuntimeErrorRecords = [];
let $da9882e673ac146b$var$stopListeningToRuntimeErrors = null;
function $da9882e673ac146b$export$25a22ac46f1bd016(handler) {
    $da9882e673ac146b$var$editorHandler = handler;
    if ($da9882e673ac146b$var$iframe) $da9882e673ac146b$var$update();
}
function $da9882e673ac146b$export$74e9101ce4078c0(error, options) {
    $6d40ebe8356580e0$export$9123e6c9c0ac21ed($da9882e673ac146b$var$handleRuntimeError(options))(error, false);
}
function $da9882e673ac146b$export$cda2c88a41631c16(options) {
    if ($da9882e673ac146b$var$stopListeningToRuntimeErrors !== null) throw new Error('Already listening');
    $da9882e673ac146b$var$stopListeningToRuntimeErrors = $6d40ebe8356580e0$export$38ec23daa6e8dcdf($da9882e673ac146b$var$handleRuntimeError(options));
}
const $da9882e673ac146b$var$handleRuntimeError = (options)=>(errorRecord)=>{
        try {
            if (typeof options.onError === 'function') options.onError.call(null);
        } finally{
            if ($da9882e673ac146b$var$currentRuntimeErrorRecords.some(({ error: error })=>error === errorRecord.error)) // This fixes https://github.com/facebook/create-react-app/issues/3011.
            // eslint-disable-next-line no-unsafe-finally
            return;
            $da9882e673ac146b$var$currentRuntimeErrorRecords = $da9882e673ac146b$var$currentRuntimeErrorRecords.concat([
                errorRecord
            ]);
            $da9882e673ac146b$var$update();
        }
    };
function $da9882e673ac146b$export$1cfa6d161ca81bd9() {
    $da9882e673ac146b$var$currentRuntimeErrorRecords = [];
    $da9882e673ac146b$var$update();
}
function $da9882e673ac146b$export$25ba7d9a816639e7() {
    if ($da9882e673ac146b$var$stopListeningToRuntimeErrors === null) throw new Error('Not currently listening');
    try {
        $da9882e673ac146b$var$stopListeningToRuntimeErrors();
    } finally{
        $da9882e673ac146b$var$stopListeningToRuntimeErrors = null;
    }
}
let $da9882e673ac146b$var$rootNode, $da9882e673ac146b$var$shadow;
function $da9882e673ac146b$var$update() {
    if (!$da9882e673ac146b$var$rootNode) {
        $da9882e673ac146b$var$rootNode = document.createElement('parcel-error-overlay');
        $da9882e673ac146b$var$shadow = $da9882e673ac146b$var$rootNode.attachShadow({
            mode: 'open'
        });
        if ($da9882e673ac146b$var$rootNode) document.body?.appendChild($da9882e673ac146b$var$rootNode);
    }
    if ($da9882e673ac146b$var$currentRuntimeErrorRecords.length > 0 && $da9882e673ac146b$var$shadow) $b6c7f0288a15c619$export$b3890eb0ae9dca99($23b7c1cb98b19658$export$34b9dba7ce09269b("dialog", {
        ref: (d)=>d?.showModal(),
        style: $74bb4be6e9b78681$export$7ef984671d1853d7,
        onClose: $da9882e673ac146b$export$1cfa6d161ca81bd9,
        children: $23b7c1cb98b19658$export$34b9dba7ce09269b($da9882e673ac146b$var$ErrorOverlay, {})
    }), $da9882e673ac146b$var$shadow);
    else {
        $da9882e673ac146b$var$rootNode?.remove();
        $da9882e673ac146b$var$rootNode = null;
    }
}
function $da9882e673ac146b$var$ErrorOverlay() {
    if ($da9882e673ac146b$var$currentRuntimeErrorRecords.length > 0) return $23b7c1cb98b19658$export$34b9dba7ce09269b($d0eac8b125ed15e2$export$2e2bcd8739ae039, {
        errorRecords: $da9882e673ac146b$var$currentRuntimeErrorRecords,
        close: $da9882e673ac146b$export$1cfa6d161ca81bd9,
        editorHandler: $da9882e673ac146b$var$editorHandler
    });
    return null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["icAAj","blcJa"], "blcJa", "parcelRequire81bc", {}, null, null, "http://localhost:1234")

//# sourceMappingURL=React_Flow_Of_Execution.cb65f72e.js.map
