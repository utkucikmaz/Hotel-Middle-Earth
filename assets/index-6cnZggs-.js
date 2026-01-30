(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var lo={};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ca=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},wu=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const r=i[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const o=i[t++];e[n++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=i[t++],c=i[t++],l=i[t++],h=((r&7)<<18|(o&63)<<12|(c&63)<<6|l&63)-65536;e[n++]=String.fromCharCode(55296+(h>>10)),e[n++]=String.fromCharCode(56320+(h&1023))}else{const o=i[t++],c=i[t++];e[n++]=String.fromCharCode((r&15)<<12|(o&63)<<6|c&63)}}return e.join("")},ua={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const o=i[r],c=r+1<i.length,l=c?i[r+1]:0,h=r+2<i.length,f=h?i[r+2]:0,y=o>>2,I=(o&3)<<4|l>>4;let C=(l&15)<<2|f>>6,D=f&63;h||(D=64,c||(C=64)),n.push(t[y],t[I],t[C],t[D])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(ca(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):wu(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const o=t[i.charAt(r++)],c=r<i.length?t[i.charAt(r)]:0;++r;const l=r<i.length?t[i.charAt(r)]:64;++r;const h=r<i.length?t[i.charAt(r)]:64;if(++r,o==null||c==null||l==null||h==null)throw new bu;const f=o<<2|c>>4;if(n.push(f),l!==64){const y=c<<4&240|l>>2;if(n.push(y),h!==64){const I=l<<6&192|h;n.push(I)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class bu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Su=function(i){const e=ca(i);return ua.encodeByteArray(e,!0)},ii=function(i){return Su(i).replace(/\./g,"")},Eu=function(i){try{return ua.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Tu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Iu=()=>Tu().__FIREBASE_DEFAULTS__,Cu=()=>{if(typeof process>"u"||typeof lo>"u")return;const i=lo.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},_u=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Eu(i[1]);return e&&JSON.parse(e)},Ar=()=>{try{return Iu()||Cu()||_u()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Au=i=>{var e,t;return(t=(e=Ar())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},ku=i=>{const e=Au(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},la=()=>{var i;return(i=Ar())===null||i===void 0?void 0:i.config};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Du{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Nu(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=i.iat||0,o=i.sub||i.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},i);return[ii(JSON.stringify(t)),ii(JSON.stringify(c)),""].join(".")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function xu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ru(){var i;const e=(i=Ar())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mu(){return!Ru()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lu(){try{return typeof indexedDB=="object"}catch{return!1}}function Ou(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Pu="FirebaseError";class xt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Pu,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],c=o?Vu(o,n):"Error",l=`${this.serviceName}: ${c} (${r}).`;return new xt(r,l,n)}}function Vu(i,e){return i.replace(Fu,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const Fu=/\{\$([^}]+)}/g;function sr(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const o=i[r],c=e[r];if(ho(o)&&ho(c)){if(!sr(o,c))return!1}else if(o!==c)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function ho(i){return i!==null&&typeof i=="object"}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Tt(i){return i&&i._delegate?i._delegate:i}class ln{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const st="[DEFAULT]";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Uu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Du;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e?.identifier),r=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qu(e))try{this.getOrInitializeService({instanceIdentifier:st})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:r});n.resolve(o)}catch{}}}}clearInstance(e=st){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=st){return this.instances.has(e)}getOptions(e=st){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);n===l&&c.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const c=this.instances.get(r);return c&&e(c,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Bu(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=st){return this.component?this.component.multipleInstances?e:st:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bu(i){return i===st?void 0:i}function qu(i){return i.instantiationMode==="EAGER"}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Uu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var j;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(j||(j={}));const ju={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},zu=j.INFO,Gu={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Hu=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),r=Gu[e];if(r)console[r](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class da{constructor(e){this.name=e,this._logLevel=zu,this._logHandler=Hu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ju[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Ku=(i,e)=>e.some(t=>i instanceof t);let fo,go;function Wu(){return fo||(fo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qu(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fa=new WeakMap,or=new WeakMap,ga=new WeakMap,Xi=new WeakMap,kr=new WeakMap;function Yu(i){const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("success",o),i.removeEventListener("error",c)},o=()=>{t(He(i.result)),r()},c=()=>{n(i.error),r()};i.addEventListener("success",o),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&fa.set(t,i)}).catch(()=>{}),kr.set(e,i),e}function Xu(i){if(or.has(i))return;const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("complete",o),i.removeEventListener("error",c),i.removeEventListener("abort",c)},o=()=>{t(),r()},c=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",o),i.addEventListener("error",c),i.addEventListener("abort",c)});or.set(i,e)}let ar={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return or.get(i);if(e==="objectStoreNames")return i.objectStoreNames||ga.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return He(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Ju(i){ar=i(ar)}function Zu(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(Ji(this),e,...t);return ga.set(n,e.sort?e.sort():[e]),He(n)}:Qu().includes(i)?function(...e){return i.apply(Ji(this),e),He(fa.get(this))}:function(...e){return He(i.apply(Ji(this),e))}}function el(i){return typeof i=="function"?Zu(i):(i instanceof IDBTransaction&&Xu(i),Ku(i,Wu())?new Proxy(i,ar):i)}function He(i){if(i instanceof IDBRequest)return Yu(i);if(Xi.has(i))return Xi.get(i);const e=el(i);return e!==i&&(Xi.set(i,e),kr.set(e,i)),e}const Ji=i=>kr.get(i);function tl(i,e,{blocked:t,upgrade:n,blocking:r,terminated:o}={}){const c=indexedDB.open(i,e),l=He(c);return n&&c.addEventListener("upgradeneeded",h=>{n(He(c.result),h.oldVersion,h.newVersion,He(c.transaction),h)}),t&&c.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),r&&h.addEventListener("versionchange",f=>r(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const nl=["get","getKey","getAll","getAllKeys","count"],il=["put","add","delete","clear"],Zi=new Map;function mo(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Zi.get(e))return Zi.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=il.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||nl.includes(t)))return;const o=async function(c,...l){const h=this.transaction(c,r?"readwrite":"readonly");let f=h.store;return n&&(f=f.index(l.shift())),(await Promise.all([f[t](...l),r&&h.done]))[0]};return Zi.set(e,o),o}Ju(i=>({...i,get:(e,t,n)=>mo(e,t)||i.get(e,t,n),has:(e,t)=>!!mo(e,t)||i.has(e,t)}));/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(sl(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(e=>e).join(" ")}}function sl(i){return i.getComponent()?.type==="VERSION"}const cr="@firebase/app",po="0.10.13";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Pe=new da("@firebase/app"),ol="@firebase/app-compat",al="@firebase/analytics-compat",cl="@firebase/analytics",ul="@firebase/app-check-compat",ll="@firebase/app-check",hl="@firebase/auth",dl="@firebase/auth-compat",fl="@firebase/database",gl="@firebase/data-connect",ml="@firebase/database-compat",pl="@firebase/functions",yl="@firebase/functions-compat",vl="@firebase/installations",wl="@firebase/installations-compat",bl="@firebase/messaging",Sl="@firebase/messaging-compat",El="@firebase/performance",Tl="@firebase/performance-compat",Il="@firebase/remote-config",Cl="@firebase/remote-config-compat",_l="@firebase/storage",Al="@firebase/storage-compat",kl="@firebase/firestore",Dl="@firebase/vertexai-preview",Nl="@firebase/firestore-compat",xl="firebase",Rl="10.14.1";/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ur="[DEFAULT]",Ml={[cr]:"fire-core",[ol]:"fire-core-compat",[cl]:"fire-analytics",[al]:"fire-analytics-compat",[ll]:"fire-app-check",[ul]:"fire-app-check-compat",[hl]:"fire-auth",[dl]:"fire-auth-compat",[fl]:"fire-rtdb",[gl]:"fire-data-connect",[ml]:"fire-rtdb-compat",[pl]:"fire-fn",[yl]:"fire-fn-compat",[vl]:"fire-iid",[wl]:"fire-iid-compat",[bl]:"fire-fcm",[Sl]:"fire-fcm-compat",[El]:"fire-perf",[Tl]:"fire-perf-compat",[Il]:"fire-rc",[Cl]:"fire-rc-compat",[_l]:"fire-gcs",[Al]:"fire-gcs-compat",[kl]:"fire-fst",[Nl]:"fire-fst-compat",[Dl]:"fire-vertex","fire-js":"fire-js",[xl]:"fire-js-all"};/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ri=new Map,Ll=new Map,lr=new Map;function yo(i,e){try{i.container.addComponent(e)}catch(t){Pe.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function si(i){const e=i.name;if(lr.has(e))return Pe.debug(`There were multiple attempts to register component ${e}.`),!1;lr.set(e,i);for(const t of ri.values())yo(t,i);for(const t of Ll.values())yo(t,i);return!0}function Ol(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Pl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ke=new ha("app","Firebase",Pl);/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Vl{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Fl=Rl;function ma(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n=Object.assign({name:ur,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ke.create("bad-app-name",{appName:String(r)});if(t||(t=la()),!t)throw Ke.create("no-options");const o=ri.get(r);if(o){if(sr(t,o.options)&&sr(n,o.config))return o;throw Ke.create("duplicate-app",{appName:r})}const c=new $u(r);for(const h of lr.values())c.addComponent(h);const l=new Vl(t,n,c);return ri.set(r,l),l}function Ul(i=ur){const e=ri.get(i);if(!e&&i===ur&&la())return ma();if(!e)throw Ke.create("no-app",{appName:i});return e}function St(i,e,t){var n;let r=(n=Ml[i])!==null&&n!==void 0?n:i;t&&(r+=`-${t}`);const o=r.match(/\s|\//),c=e.match(/\s|\//);if(o||c){const l=[`Unable to register library "${r}" with version "${e}":`];o&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&c&&l.push("and"),c&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pe.warn(l.join(" "));return}si(new ln(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Bl="firebase-heartbeat-database",ql=1,hn="firebase-heartbeat-store";let er=null;function pa(){return er||(er=tl(Bl,ql,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(hn)}catch(t){console.warn(t)}}}}).catch(i=>{throw Ke.create("idb-open",{originalErrorMessage:i.message})})),er}async function $l(i){try{const e=(await pa()).transaction(hn),t=await e.objectStore(hn).get(ya(i));return await e.done,t}catch(e){if(e instanceof xt)Pe.warn(e.message);else{const t=Ke.create("idb-get",{originalErrorMessage:e?.message});Pe.warn(t.message)}}}async function vo(i,e){try{const t=(await pa()).transaction(hn,"readwrite");await t.objectStore(hn).put(e,ya(i)),await t.done}catch(t){if(t instanceof xt)Pe.warn(t.message);else{const n=Ke.create("idb-set",{originalErrorMessage:t?.message});Pe.warn(n.message)}}}function ya(i){return`${i.name}!${i.options.appId}`}/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const jl=1024,zl=30*24*60*60*1e3;class Gl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kl(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wo();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=zl}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Pe.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=wo(),{heartbeatsToSend:n,unsentEntries:r}=Hl(this._heartbeatsCache.heartbeats),o=ii(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Pe.warn(t),""}}}function wo(){return new Date().toISOString().substring(0,10)}function Hl(i,e=jl){const t=[];let n=i.slice();for(const r of i){const o=t.find(c=>c.agent===r.agent);if(o){if(o.dates.push(r.date),bo(t)>e){o.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),bo(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Kl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lu()?Ou().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await $l(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return vo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return vo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function bo(i){return ii(JSON.stringify({version:2,heartbeats:i})).length}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Wl(i){si(new ln("platform-logger",e=>new rl(e),"PRIVATE")),si(new ln("heartbeat",e=>new Gl(e),"PRIVATE")),St(cr,po,i),St(cr,po,"esm2017"),St("fire-js","")}Wl("");var Ql="firebase",Yl="10.14.1";/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/St(Ql,Yl,"app");var So=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var at,va;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function p(){}p.prototype=g.prototype,b.D=g.prototype,b.prototype=new p,b.prototype.constructor=b,b.C=function(v,w,E){for(var m=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)m[Re-2]=arguments[Re];return g.prototype[w].apply(v,m)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,g,p){p||(p=0);var v=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)v[w]=g.charCodeAt(p++)|g.charCodeAt(p++)<<8|g.charCodeAt(p++)<<16|g.charCodeAt(p++)<<24;else for(w=0;16>w;++w)v[w]=g[p++]|g[p++]<<8|g[p++]<<16|g[p++]<<24;g=b.g[0],p=b.g[1],w=b.g[2];var E=b.g[3],m=g+(E^p&(w^E))+v[0]+3614090360&4294967295;g=p+(m<<7&4294967295|m>>>25),m=E+(w^g&(p^w))+v[1]+3905402710&4294967295,E=g+(m<<12&4294967295|m>>>20),m=w+(p^E&(g^p))+v[2]+606105819&4294967295,w=E+(m<<17&4294967295|m>>>15),m=p+(g^w&(E^g))+v[3]+3250441966&4294967295,p=w+(m<<22&4294967295|m>>>10),m=g+(E^p&(w^E))+v[4]+4118548399&4294967295,g=p+(m<<7&4294967295|m>>>25),m=E+(w^g&(p^w))+v[5]+1200080426&4294967295,E=g+(m<<12&4294967295|m>>>20),m=w+(p^E&(g^p))+v[6]+2821735955&4294967295,w=E+(m<<17&4294967295|m>>>15),m=p+(g^w&(E^g))+v[7]+4249261313&4294967295,p=w+(m<<22&4294967295|m>>>10),m=g+(E^p&(w^E))+v[8]+1770035416&4294967295,g=p+(m<<7&4294967295|m>>>25),m=E+(w^g&(p^w))+v[9]+2336552879&4294967295,E=g+(m<<12&4294967295|m>>>20),m=w+(p^E&(g^p))+v[10]+4294925233&4294967295,w=E+(m<<17&4294967295|m>>>15),m=p+(g^w&(E^g))+v[11]+2304563134&4294967295,p=w+(m<<22&4294967295|m>>>10),m=g+(E^p&(w^E))+v[12]+1804603682&4294967295,g=p+(m<<7&4294967295|m>>>25),m=E+(w^g&(p^w))+v[13]+4254626195&4294967295,E=g+(m<<12&4294967295|m>>>20),m=w+(p^E&(g^p))+v[14]+2792965006&4294967295,w=E+(m<<17&4294967295|m>>>15),m=p+(g^w&(E^g))+v[15]+1236535329&4294967295,p=w+(m<<22&4294967295|m>>>10),m=g+(w^E&(p^w))+v[1]+4129170786&4294967295,g=p+(m<<5&4294967295|m>>>27),m=E+(p^w&(g^p))+v[6]+3225465664&4294967295,E=g+(m<<9&4294967295|m>>>23),m=w+(g^p&(E^g))+v[11]+643717713&4294967295,w=E+(m<<14&4294967295|m>>>18),m=p+(E^g&(w^E))+v[0]+3921069994&4294967295,p=w+(m<<20&4294967295|m>>>12),m=g+(w^E&(p^w))+v[5]+3593408605&4294967295,g=p+(m<<5&4294967295|m>>>27),m=E+(p^w&(g^p))+v[10]+38016083&4294967295,E=g+(m<<9&4294967295|m>>>23),m=w+(g^p&(E^g))+v[15]+3634488961&4294967295,w=E+(m<<14&4294967295|m>>>18),m=p+(E^g&(w^E))+v[4]+3889429448&4294967295,p=w+(m<<20&4294967295|m>>>12),m=g+(w^E&(p^w))+v[9]+568446438&4294967295,g=p+(m<<5&4294967295|m>>>27),m=E+(p^w&(g^p))+v[14]+3275163606&4294967295,E=g+(m<<9&4294967295|m>>>23),m=w+(g^p&(E^g))+v[3]+4107603335&4294967295,w=E+(m<<14&4294967295|m>>>18),m=p+(E^g&(w^E))+v[8]+1163531501&4294967295,p=w+(m<<20&4294967295|m>>>12),m=g+(w^E&(p^w))+v[13]+2850285829&4294967295,g=p+(m<<5&4294967295|m>>>27),m=E+(p^w&(g^p))+v[2]+4243563512&4294967295,E=g+(m<<9&4294967295|m>>>23),m=w+(g^p&(E^g))+v[7]+1735328473&4294967295,w=E+(m<<14&4294967295|m>>>18),m=p+(E^g&(w^E))+v[12]+2368359562&4294967295,p=w+(m<<20&4294967295|m>>>12),m=g+(p^w^E)+v[5]+4294588738&4294967295,g=p+(m<<4&4294967295|m>>>28),m=E+(g^p^w)+v[8]+2272392833&4294967295,E=g+(m<<11&4294967295|m>>>21),m=w+(E^g^p)+v[11]+1839030562&4294967295,w=E+(m<<16&4294967295|m>>>16),m=p+(w^E^g)+v[14]+4259657740&4294967295,p=w+(m<<23&4294967295|m>>>9),m=g+(p^w^E)+v[1]+2763975236&4294967295,g=p+(m<<4&4294967295|m>>>28),m=E+(g^p^w)+v[4]+1272893353&4294967295,E=g+(m<<11&4294967295|m>>>21),m=w+(E^g^p)+v[7]+4139469664&4294967295,w=E+(m<<16&4294967295|m>>>16),m=p+(w^E^g)+v[10]+3200236656&4294967295,p=w+(m<<23&4294967295|m>>>9),m=g+(p^w^E)+v[13]+681279174&4294967295,g=p+(m<<4&4294967295|m>>>28),m=E+(g^p^w)+v[0]+3936430074&4294967295,E=g+(m<<11&4294967295|m>>>21),m=w+(E^g^p)+v[3]+3572445317&4294967295,w=E+(m<<16&4294967295|m>>>16),m=p+(w^E^g)+v[6]+76029189&4294967295,p=w+(m<<23&4294967295|m>>>9),m=g+(p^w^E)+v[9]+3654602809&4294967295,g=p+(m<<4&4294967295|m>>>28),m=E+(g^p^w)+v[12]+3873151461&4294967295,E=g+(m<<11&4294967295|m>>>21),m=w+(E^g^p)+v[15]+530742520&4294967295,w=E+(m<<16&4294967295|m>>>16),m=p+(w^E^g)+v[2]+3299628645&4294967295,p=w+(m<<23&4294967295|m>>>9),m=g+(w^(p|~E))+v[0]+4096336452&4294967295,g=p+(m<<6&4294967295|m>>>26),m=E+(p^(g|~w))+v[7]+1126891415&4294967295,E=g+(m<<10&4294967295|m>>>22),m=w+(g^(E|~p))+v[14]+2878612391&4294967295,w=E+(m<<15&4294967295|m>>>17),m=p+(E^(w|~g))+v[5]+4237533241&4294967295,p=w+(m<<21&4294967295|m>>>11),m=g+(w^(p|~E))+v[12]+1700485571&4294967295,g=p+(m<<6&4294967295|m>>>26),m=E+(p^(g|~w))+v[3]+2399980690&4294967295,E=g+(m<<10&4294967295|m>>>22),m=w+(g^(E|~p))+v[10]+4293915773&4294967295,w=E+(m<<15&4294967295|m>>>17),m=p+(E^(w|~g))+v[1]+2240044497&4294967295,p=w+(m<<21&4294967295|m>>>11),m=g+(w^(p|~E))+v[8]+1873313359&4294967295,g=p+(m<<6&4294967295|m>>>26),m=E+(p^(g|~w))+v[15]+4264355552&4294967295,E=g+(m<<10&4294967295|m>>>22),m=w+(g^(E|~p))+v[6]+2734768916&4294967295,w=E+(m<<15&4294967295|m>>>17),m=p+(E^(w|~g))+v[13]+1309151649&4294967295,p=w+(m<<21&4294967295|m>>>11),m=g+(w^(p|~E))+v[4]+4149444226&4294967295,g=p+(m<<6&4294967295|m>>>26),m=E+(p^(g|~w))+v[11]+3174756917&4294967295,E=g+(m<<10&4294967295|m>>>22),m=w+(g^(E|~p))+v[2]+718787259&4294967295,w=E+(m<<15&4294967295|m>>>17),m=p+(E^(w|~g))+v[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(w+(m<<21&4294967295|m>>>11))&4294967295,b.g[2]=b.g[2]+w&4294967295,b.g[3]=b.g[3]+E&4294967295}n.prototype.u=function(b,g){g===void 0&&(g=b.length);for(var p=g-this.blockSize,v=this.B,w=this.h,E=0;E<g;){if(w==0)for(;E<=p;)r(this,b,E),E+=this.blockSize;if(typeof b=="string"){for(;E<g;)if(v[w++]=b.charCodeAt(E++),w==this.blockSize){r(this,v),w=0;break}}else for(;E<g;)if(v[w++]=b[E++],w==this.blockSize){r(this,v),w=0;break}}this.h=w,this.o+=g},n.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;var p=8*this.o;for(g=b.length-8;g<b.length;++g)b[g]=p&255,p/=256;for(this.u(b),b=Array(16),g=p=0;4>g;++g)for(var v=0;32>v;v+=8)b[p++]=this.g[g]>>>v&255;return b};function o(b,g){var p=l;return Object.prototype.hasOwnProperty.call(p,b)?p[b]:p[b]=g(b)}function c(b,g){this.h=g;for(var p=[],v=!0,w=b.length-1;0<=w;w--){var E=b[w]|0;v&&E==g||(p[w]=E,v=!1)}this.g=p}var l={};function h(b){return-128<=b&&128>b?o(b,function(g){return new c([g|0],0>g?-1:0)}):new c([b|0],0>b?-1:0)}function f(b){if(isNaN(b)||!isFinite(b))return I;if(0>b)return L(f(-b));for(var g=[],p=1,v=0;b>=p;v++)g[v]=b/p|0,p*=4294967296;return new c(g,0)}function y(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return L(y(b.substring(1),g));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=f(Math.pow(g,8)),v=I,w=0;w<b.length;w+=8){var E=Math.min(8,b.length-w),m=parseInt(b.substring(w,w+E),g);8>E?(E=f(Math.pow(g,E)),v=v.j(E).add(f(m))):(v=v.j(p),v=v.add(f(m)))}return v}var I=h(0),C=h(1),D=h(16777216);i=c.prototype,i.m=function(){if(O(this))return-L(this).m();for(var b=0,g=1,p=0;p<this.g.length;p++){var v=this.i(p);b+=(0<=v?v:4294967296+v)*g,g*=4294967296}return b},i.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(O(this))return"-"+L(this).toString(b);for(var g=f(Math.pow(b,6)),p=this,v="";;){var w=se(p,g).g;p=Y(p,w.j(g));var E=((0<p.g.length?p.g[0]:p.h)>>>0).toString(b);if(p=w,x(p))return E+v;for(;6>E.length;)E="0"+E;v=E+v}},i.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(var g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function O(b){return b.h==-1}i.l=function(b){return b=Y(this,b),O(b)?-1:x(b)?0:1};function L(b){for(var g=b.g.length,p=[],v=0;v<g;v++)p[v]=~b.g[v];return new c(p,~b.h).add(C)}i.abs=function(){return O(this)?L(this):this},i.add=function(b){for(var g=Math.max(this.g.length,b.g.length),p=[],v=0,w=0;w<=g;w++){var E=v+(this.i(w)&65535)+(b.i(w)&65535),m=(E>>>16)+(this.i(w)>>>16)+(b.i(w)>>>16);v=m>>>16,E&=65535,m&=65535,p[w]=m<<16|E}return new c(p,p[p.length-1]&-2147483648?-1:0)};function Y(b,g){return b.add(L(g))}i.j=function(b){if(x(this)||x(b))return I;if(O(this))return O(b)?L(this).j(L(b)):L(L(this).j(b));if(O(b))return L(this.j(L(b)));if(0>this.l(D)&&0>b.l(D))return f(this.m()*b.m());for(var g=this.g.length+b.g.length,p=[],v=0;v<2*g;v++)p[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<b.g.length;w++){var E=this.i(v)>>>16,m=this.i(v)&65535,Re=b.i(w)>>>16,Vt=b.i(w)&65535;p[2*v+2*w]+=m*Vt,K(p,2*v+2*w),p[2*v+2*w+1]+=E*Vt,K(p,2*v+2*w+1),p[2*v+2*w+1]+=m*Re,K(p,2*v+2*w+1),p[2*v+2*w+2]+=E*Re,K(p,2*v+2*w+2)}for(v=0;v<g;v++)p[v]=p[2*v+1]<<16|p[2*v];for(v=g;v<2*g;v++)p[v]=0;return new c(p,0)};function K(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function ie(b,g){this.g=b,this.h=g}function se(b,g){if(x(g))throw Error("division by zero");if(x(b))return new ie(I,I);if(O(b))return g=se(L(b),g),new ie(L(g.g),L(g.h));if(O(g))return g=se(b,L(g)),new ie(L(g.g),g.h);if(30<b.g.length){if(O(b)||O(g))throw Error("slowDivide_ only works with positive integers.");for(var p=C,v=g;0>=v.l(b);)p=ke(p),v=ke(v);var w=de(p,1),E=de(v,1);for(v=de(v,2),p=de(p,2);!x(v);){var m=E.add(v);0>=m.l(b)&&(w=w.add(p),E=m),v=de(v,1),p=de(p,1)}return g=Y(b,w.j(g)),new ie(w,g)}for(w=I;0<=b.l(g);){for(p=Math.max(1,Math.floor(b.m()/g.m())),v=Math.ceil(Math.log(p)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),E=f(p),m=E.j(g);O(m)||0<m.l(b);)p-=v,E=f(p),m=E.j(g);x(E)&&(E=C),w=w.add(E),b=Y(b,m)}return new ie(w,b)}i.A=function(b){return se(this,b).h},i.and=function(b){for(var g=Math.max(this.g.length,b.g.length),p=[],v=0;v<g;v++)p[v]=this.i(v)&b.i(v);return new c(p,this.h&b.h)},i.or=function(b){for(var g=Math.max(this.g.length,b.g.length),p=[],v=0;v<g;v++)p[v]=this.i(v)|b.i(v);return new c(p,this.h|b.h)},i.xor=function(b){for(var g=Math.max(this.g.length,b.g.length),p=[],v=0;v<g;v++)p[v]=this.i(v)^b.i(v);return new c(p,this.h^b.h)};function ke(b){for(var g=b.g.length+1,p=[],v=0;v<g;v++)p[v]=b.i(v)<<1|b.i(v-1)>>>31;return new c(p,b.h)}function de(b,g){var p=g>>5;g%=32;for(var v=b.g.length-p,w=[],E=0;E<v;E++)w[E]=0<g?b.i(E+p)>>>g|b.i(E+p+1)<<32-g:b.i(E+p);return new c(w,b.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,va=n,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=y,at=c}).apply(typeof So<"u"?So:typeof self<"u"?self:typeof window<"u"?window:{});var zn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wa,tn,ba,Xn,hr,Sa,Ea,Ta;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,u){return s==Array.prototype||s==Object.prototype||(s[a]=u.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof zn=="object"&&zn];for(var a=0;a<s.length;++a){var u=s[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var n=t(this);function r(s,a){if(a)e:{var u=n;s=s.split(".");for(var d=0;d<s.length-1;d++){var S=s[d];if(!(S in u))break e;u=u[S]}s=s[s.length-1],d=u[s],a=a(d),a!=d&&a!=null&&e(u,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var u=0,d=!1,S={next:function(){if(!d&&u<s.length){var T=u++;return{value:a(T,s[T]),done:!1}}return d=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}r("Array.prototype.values",function(s){return s||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function y(s,a,u){return s.call.apply(s.bind,arguments)}function I(s,a,u){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,d),s.apply(a,S)}}return function(){return s.apply(a,arguments)}}function C(s,a,u){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:I,C.apply(null,arguments)}function D(s,a){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function x(s,a){function u(){}u.prototype=a.prototype,s.aa=a.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(d,S,T){for(var k=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)k[Q-2]=arguments[Q];return a.prototype[S].apply(d,k)}}function O(s){const a=s.length;if(0<a){const u=Array(a);for(let d=0;d<a;d++)u[d]=s[d];return u}return[]}function L(s,a){for(let u=1;u<arguments.length;u++){const d=arguments[u];if(h(d)){const S=s.length||0,T=d.length||0;s.length=S+T;for(let k=0;k<T;k++)s[S+k]=d[k]}else s.push(d)}}class Y{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function K(s){return/^[\s\xa0]*$/.test(s)}function ie(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function se(s){return se[" "](s),s}se[" "]=function(){};var ke=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function de(s,a,u){for(const d in s)a.call(u,s[d],d,s)}function b(s,a){for(const u in s)a.call(void 0,s[u],u,s)}function g(s){const a={};for(const u in s)a[u]=s[u];return a}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,a){let u,d;for(let S=1;S<arguments.length;S++){d=arguments[S];for(u in d)s[u]=d[u];for(let T=0;T<p.length;T++)u=p[T],Object.prototype.hasOwnProperty.call(d,u)&&(s[u]=d[u])}}function w(s){var a=1;s=s.split(":");const u=[];for(;0<a&&s.length;)u.push(s.shift()),a--;return s.length&&u.push(s.join(":")),u}function E(s){l.setTimeout(()=>{throw s},0)}function m(){var s=Ai;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Re{constructor(){this.h=this.g=null}add(a,u){const d=Vt.get();d.set(a,u),this.h?this.h.next=d:this.g=d,this.h=d}}var Vt=new Y(()=>new Fc,s=>s.reset());class Fc{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Ft,Ut=!1,Ai=new Re,ls=()=>{const s=l.Promise.resolve(void 0);Ft=()=>{s.then(Uc)}};var Uc=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(u){E(u)}var a=Vt;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Ut=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Bc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,a),l.removeEventListener("test",u,a)}catch{}return s}();function Bt(s,a){if(fe.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(ke){e:{try{se(a.nodeName);var S=!0;break e}catch{}S=!1}S||(a=null)}}else u=="mouseover"?a=s.fromElement:u=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:qc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Bt.aa.h.call(this)}}x(Bt,fe);var qc={2:"touch",3:"pen",4:"mouse"};Bt.prototype.h=function(){Bt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Cn="closure_listenable_"+(1e6*Math.random()|0),$c=0;function jc(s,a,u,d,S){this.listener=s,this.proxy=null,this.src=a,this.type=u,this.capture=!!d,this.ha=S,this.key=++$c,this.da=this.fa=!1}function _n(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function An(s){this.src=s,this.g={},this.h=0}An.prototype.add=function(s,a,u,d,S){var T=s.toString();s=this.g[T],s||(s=this.g[T]=[],this.h++);var k=Di(s,a,d,S);return-1<k?(a=s[k],u||(a.fa=!1)):(a=new jc(a,this.src,T,!!d,S),a.fa=u,s.push(a)),a};function ki(s,a){var u=a.type;if(u in s.g){var d=s.g[u],S=Array.prototype.indexOf.call(d,a,void 0),T;(T=0<=S)&&Array.prototype.splice.call(d,S,1),T&&(_n(a),s.g[u].length==0&&(delete s.g[u],s.h--))}}function Di(s,a,u,d){for(var S=0;S<s.length;++S){var T=s[S];if(!T.da&&T.listener==a&&T.capture==!!u&&T.ha==d)return S}return-1}var Ni="closure_lm_"+(1e6*Math.random()|0),xi={};function hs(s,a,u,d,S){if(Array.isArray(a)){for(var T=0;T<a.length;T++)hs(s,a[T],u,d,S);return null}return u=gs(u),s&&s[Cn]?s.K(a,u,f(d)?!!d.capture:!1,S):zc(s,a,u,!1,d,S)}function zc(s,a,u,d,S,T){if(!a)throw Error("Invalid event type");var k=f(S)?!!S.capture:!!S,Q=Mi(s);if(Q||(s[Ni]=Q=new An(s)),u=Q.add(a,u,d,k,T),u.proxy)return u;if(d=Gc(),u.proxy=d,d.src=s,d.listener=u,s.addEventListener)Bc||(S=k),S===void 0&&(S=!1),s.addEventListener(a.toString(),d,S);else if(s.attachEvent)s.attachEvent(fs(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Gc(){function s(u){return a.call(s.src,s.listener,u)}const a=Hc;return s}function ds(s,a,u,d,S){if(Array.isArray(a))for(var T=0;T<a.length;T++)ds(s,a[T],u,d,S);else d=f(d)?!!d.capture:!!d,u=gs(u),s&&s[Cn]?(s=s.i,a=String(a).toString(),a in s.g&&(T=s.g[a],u=Di(T,u,d,S),-1<u&&(_n(T[u]),Array.prototype.splice.call(T,u,1),T.length==0&&(delete s.g[a],s.h--)))):s&&(s=Mi(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Di(a,u,d,S)),(u=-1<s?a[s]:null)&&Ri(u))}function Ri(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Cn])ki(a.i,s);else{var u=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(u,d,s.capture):a.detachEvent?a.detachEvent(fs(u),d):a.addListener&&a.removeListener&&a.removeListener(d),(u=Mi(a))?(ki(u,s),u.h==0&&(u.src=null,a[Ni]=null)):_n(s)}}}function fs(s){return s in xi?xi[s]:xi[s]="on"+s}function Hc(s,a){if(s.da)s=!0;else{a=new Bt(a,this);var u=s.listener,d=s.ha||s.src;s.fa&&Ri(s),s=u.call(d,a)}return s}function Mi(s){return s=s[Ni],s instanceof An?s:null}var Li="__closure_events_fn_"+(1e9*Math.random()>>>0);function gs(s){return typeof s=="function"?s:(s[Li]||(s[Li]=function(a){return s.handleEvent(a)}),s[Li])}function ge(){Ue.call(this),this.i=new An(this),this.M=this,this.F=null}x(ge,Ue),ge.prototype[Cn]=!0,ge.prototype.removeEventListener=function(s,a,u,d){ds(this,s,a,u,d)};function we(s,a){var u,d=s.F;if(d)for(u=[];d;d=d.F)u.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new fe(a,s);else if(a instanceof fe)a.target=a.target||s;else{var S=a;a=new fe(d,s),v(a,S)}if(S=!0,u)for(var T=u.length-1;0<=T;T--){var k=a.g=u[T];S=kn(k,d,!0,a)&&S}if(k=a.g=s,S=kn(k,d,!0,a)&&S,S=kn(k,d,!1,a)&&S,u)for(T=0;T<u.length;T++)k=a.g=u[T],S=kn(k,d,!1,a)&&S}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var u=s.g[a],d=0;d<u.length;d++)_n(u[d]);delete s.g[a],s.h--}}this.F=null},ge.prototype.K=function(s,a,u,d){return this.i.add(String(s),a,!1,u,d)},ge.prototype.L=function(s,a,u,d){return this.i.add(String(s),a,!0,u,d)};function kn(s,a,u,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var S=!0,T=0;T<a.length;++T){var k=a[T];if(k&&!k.da&&k.capture==u){var Q=k.listener,ae=k.ha||k.src;k.fa&&ki(s.i,k),S=Q.call(ae,d)!==!1&&S}}return S&&!d.defaultPrevented}function ms(s,a,u){if(typeof s=="function")u&&(s=C(s,u));else if(s&&typeof s.handleEvent=="function")s=C(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(s,a||0)}function ps(s){s.g=ms(()=>{s.g=null,s.i&&(s.i=!1,ps(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Kc extends Ue{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ps(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qt(s){Ue.call(this),this.h=s,this.g={}}x(qt,Ue);var ys=[];function vs(s){de(s.g,function(a,u){this.g.hasOwnProperty(u)&&Ri(a)},s),s.g={}}qt.prototype.N=function(){qt.aa.N.call(this),vs(this)},qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oi=l.JSON.stringify,Wc=l.JSON.parse,Qc=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function Pi(){}Pi.prototype.h=null;function ws(s){return s.h||(s.h=s.i())}function bs(){}var $t={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vi(){fe.call(this,"d")}x(Vi,fe);function Fi(){fe.call(this,"c")}x(Fi,fe);var et={},Ss=null;function Dn(){return Ss=Ss||new ge}et.La="serverreachability";function Es(s){fe.call(this,et.La,s)}x(Es,fe);function jt(s){const a=Dn();we(a,new Es(a))}et.STAT_EVENT="statevent";function Ts(s,a){fe.call(this,et.STAT_EVENT,s),this.stat=a}x(Ts,fe);function be(s){const a=Dn();we(a,new Ts(a,s))}et.Ma="timingevent";function Is(s,a){fe.call(this,et.Ma,s),this.size=a}x(Is,fe);function zt(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function Gt(){this.g=!0}Gt.prototype.xa=function(){this.g=!1};function Yc(s,a,u,d,S,T){s.info(function(){if(s.g)if(T)for(var k="",Q=T.split("&"),ae=0;ae<Q.length;ae++){var G=Q[ae].split("=");if(1<G.length){var me=G[0];G=G[1];var Se=me.split("_");k=2<=Se.length&&Se[1]=="type"?k+(me+"="+G+"&"):k+(me+"=redacted&")}}else k=null;else k=T;return"XMLHTTP REQ ("+d+") [attempt "+S+"]: "+a+`
`+u+`
`+k})}function Xc(s,a,u,d,S,T,k){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+S+"]: "+a+`
`+u+`
`+T+" "+k})}function ft(s,a,u,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Zc(s,u)+(d?" "+d:"")})}function Jc(s,a){s.info(function(){return"TIMEOUT: "+a})}Gt.prototype.info=function(){};function Zc(s,a){if(!s.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var d=u[s];if(!(2>d.length)){var S=d[1];if(Array.isArray(S)&&!(1>S.length)){var T=S[0];if(T!="noop"&&T!="stop"&&T!="close")for(var k=1;k<S.length;k++)S[k]=""}}}}return Oi(u)}catch{return a}}var Nn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Cs={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ui;function xn(){}x(xn,Pi),xn.prototype.g=function(){return new XMLHttpRequest},xn.prototype.i=function(){return{}},Ui=new xn;function Be(s,a,u,d){this.j=s,this.i=a,this.l=u,this.R=d||1,this.U=new qt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _s}function _s(){this.i=null,this.g="",this.h=!1}var As={},Bi={};function qi(s,a,u){s.L=1,s.v=On(Me(a)),s.m=u,s.P=!0,ks(s,null)}function ks(s,a){s.F=Date.now(),Rn(s),s.A=Me(s.v);var u=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),$s(u.i,"t",d),s.C=0,u=s.j.J,s.h=new _s,s.g=oo(s.j,u?a:null,!s.m),0<s.O&&(s.M=new Kc(C(s.Y,s,s.g),s.O)),a=s.U,u=s.g,d=s.ca;var S="readystatechange";Array.isArray(S)||(S&&(ys[0]=S.toString()),S=ys);for(var T=0;T<S.length;T++){var k=hs(u,S[T],d||a.handleEvent,!1,a.h||a);if(!k)break;a.g[k.key]=k}a=s.H?g(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),jt(),Yc(s.i,s.u,s.A,s.l,s.R,s.m)}Be.prototype.ca=function(s){s=s.target;const a=this.M;a&&Le(s)==3?a.j():this.Y(s)},Be.prototype.Y=function(s){try{if(s==this.g)e:{const Se=Le(this.g);var a=this.g.Ba();const pt=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||Qs(this.g)))){this.J||Se!=4||a==7||(a==8||0>=pt?jt(3):jt(2)),$i(this);var u=this.g.Z();this.X=u;t:if(Ds(this)){var d=Qs(this.g);s="";var S=d.length,T=Le(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tt(this),Ht(this);var k="";break t}this.h.i=new l.TextDecoder}for(a=0;a<S;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(T&&a==S-1)});d.length=0,this.h.g+=s,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=u==200,Xc(this.i,this.u,this.A,this.l,this.R,Se,u),this.o){if(this.T&&!this.K){t:{if(this.g){var Q,ae=this.g;if((Q=ae.g?ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(Q)){var G=Q;break t}}G=null}if(u=G)ft(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ji(this,u);else{this.o=!1,this.s=3,be(12),tt(this),Ht(this);break e}}if(this.P){u=!0;let Ce;for(;!this.J&&this.C<k.length;)if(Ce=eu(this,k),Ce==Bi){Se==4&&(this.s=4,be(14),u=!1),ft(this.i,this.l,null,"[Incomplete Response]");break}else if(Ce==As){this.s=4,be(15),ft(this.i,this.l,k,"[Invalid Chunk]"),u=!1;break}else ft(this.i,this.l,Ce,null),ji(this,Ce);if(Ds(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||k.length!=0||this.h.h||(this.s=1,be(16),u=!1),this.o=this.o&&u,!u)ft(this.i,this.l,k,"[Invalid Chunked Response]"),tt(this),Ht(this);else if(0<k.length&&!this.W){this.W=!0;var me=this.j;me.g==this&&me.ba&&!me.M&&(me.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Qi(me),me.M=!0,be(11))}}else ft(this.i,this.l,k,null),ji(this,k);Se==4&&tt(this),this.o&&!this.J&&(Se==4?no(this.j,this):(this.o=!1,Rn(this)))}else yu(this.g),u==400&&0<k.indexOf("Unknown SID")?(this.s=3,be(12)):(this.s=0,be(13)),tt(this),Ht(this)}}}catch{}finally{}};function Ds(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function eu(s,a){var u=s.C,d=a.indexOf(`
`,u);return d==-1?Bi:(u=Number(a.substring(u,d)),isNaN(u)?As:(d+=1,d+u>a.length?Bi:(a=a.slice(d,d+u),s.C=d+u,a)))}Be.prototype.cancel=function(){this.J=!0,tt(this)};function Rn(s){s.S=Date.now()+s.I,Ns(s,s.I)}function Ns(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=zt(C(s.ba,s),a)}function $i(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Be.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Jc(this.i,this.A),this.L!=2&&(jt(),be(17)),tt(this),this.s=2,Ht(this)):Ns(this,this.S-s)};function Ht(s){s.j.G==0||s.J||no(s.j,s)}function tt(s){$i(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,vs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function ji(s,a){try{var u=s.j;if(u.G!=0&&(u.g==s||zi(u.h,s))){if(!s.K&&zi(u.h,s)&&u.G==3){try{var d=u.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var S=d;if(S[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)qn(u),Un(u);else break e;Wi(u),be(18)}}else u.za=S[1],0<u.za-u.T&&37500>S[2]&&u.F&&u.v==0&&!u.C&&(u.C=zt(C(u.Za,u),6e3));if(1>=Ms(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else it(u,11)}else if((s.K||u.g==s)&&qn(u),!K(a))for(S=u.Da.g.parse(a),a=0;a<S.length;a++){let G=S[a];if(u.T=G[0],G=G[1],u.G==2)if(G[0]=="c"){u.K=G[1],u.ia=G[2];const me=G[3];me!=null&&(u.la=me,u.j.info("VER="+u.la));const Se=G[4];Se!=null&&(u.Aa=Se,u.j.info("SVER="+u.Aa));const pt=G[5];pt!=null&&typeof pt=="number"&&0<pt&&(d=1.5*pt,u.L=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const Ce=s.g;if(Ce){const jn=Ce.g?Ce.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jn){var T=d.h;T.g||jn.indexOf("spdy")==-1&&jn.indexOf("quic")==-1&&jn.indexOf("h2")==-1||(T.j=T.l,T.g=new Set,T.h&&(Gi(T,T.h),T.h=null))}if(d.D){const Yi=Ce.g?Ce.g.getResponseHeader("X-HTTP-Session-Id"):null;Yi&&(d.ya=Yi,W(d.I,d.D,Yi))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),d=u;var k=s;if(d.qa=so(d,d.J?d.ia:null,d.W),k.K){Ls(d.h,k);var Q=k,ae=d.L;ae&&(Q.I=ae),Q.B&&($i(Q),Rn(Q)),d.g=k}else eo(d);0<u.i.length&&Bn(u)}else G[0]!="stop"&&G[0]!="close"||it(u,7);else u.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?it(u,7):Ki(u):G[0]!="noop"&&u.l&&u.l.ta(G),u.v=0)}}jt(4)}catch{}}var tu=class{constructor(s,a){this.g=s,this.map=a}};function xs(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rs(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ms(s){return s.h?1:s.g?s.g.size:0}function zi(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Gi(s,a){s.g?s.g.add(a):s.h=a}function Ls(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}xs.prototype.cancel=function(){if(this.i=Os(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Os(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const u of s.g.values())a=a.concat(u.D);return a}return O(s.i)}function nu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],u=s.length,d=0;d<u;d++)a.push(s[d]);return a}a=[],u=0;for(d in s)a[u++]=s[d];return a}function iu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var u=0;u<s;u++)a.push(u);return a}a=[],u=0;for(const d in s)a[u++]=d;return a}}}function Ps(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var u=iu(s),d=nu(s),S=d.length,T=0;T<S;T++)a.call(void 0,d[T],u&&u[T],s)}var Vs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ru(s,a){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var d=s[u].indexOf("="),S=null;if(0<=d){var T=s[u].substring(0,d);S=s[u].substring(d+1)}else T=s[u];a(T,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function nt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof nt){this.h=s.h,Mn(this,s.j),this.o=s.o,this.g=s.g,Ln(this,s.s),this.l=s.l;var a=s.i,u=new Qt;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),Fs(this,u),this.m=s.m}else s&&(a=String(s).match(Vs))?(this.h=!1,Mn(this,a[1]||"",!0),this.o=Kt(a[2]||""),this.g=Kt(a[3]||"",!0),Ln(this,a[4]),this.l=Kt(a[5]||"",!0),Fs(this,a[6]||"",!0),this.m=Kt(a[7]||"")):(this.h=!1,this.i=new Qt(null,this.h))}nt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Wt(a,Us,!0),":");var u=this.g;return(u||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Wt(a,Us,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Wt(u,u.charAt(0)=="/"?au:ou,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Wt(u,uu)),s.join("")};function Me(s){return new nt(s)}function Mn(s,a,u){s.j=u?Kt(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Ln(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Fs(s,a,u){a instanceof Qt?(s.i=a,lu(s.i,s.h)):(u||(a=Wt(a,cu)),s.i=new Qt(a,s.h))}function W(s,a,u){s.i.set(a,u)}function On(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Kt(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Wt(s,a,u){return typeof s=="string"?(s=encodeURI(s).replace(a,su),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function su(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Us=/[#\/\?@]/g,ou=/[#\?:]/g,au=/[#\?]/g,cu=/[#\?@]/g,uu=/#/g;function Qt(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function qe(s){s.g||(s.g=new Map,s.h=0,s.i&&ru(s.i,function(a,u){s.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}i=Qt.prototype,i.add=function(s,a){qe(this),this.i=null,s=gt(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(a),this.h+=1,this};function Bs(s,a){qe(s),a=gt(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function qs(s,a){return qe(s),a=gt(s,a),s.g.has(a)}i.forEach=function(s,a){qe(this),this.g.forEach(function(u,d){u.forEach(function(S){s.call(a,S,d,this)},this)},this)},i.na=function(){qe(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let d=0;d<a.length;d++){const S=s[d];for(let T=0;T<S.length;T++)u.push(a[d])}return u},i.V=function(s){qe(this);let a=[];if(typeof s=="string")qs(this,s)&&(a=a.concat(this.g.get(gt(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)a=a.concat(s[u])}return a},i.set=function(s,a){return qe(this),this.i=null,s=gt(this,s),qs(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},i.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function $s(s,a,u){Bs(s,a),0<u.length&&(s.i=null,s.g.set(gt(s,a),O(u)),s.h+=u.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var d=a[u];const T=encodeURIComponent(String(d)),k=this.V(d);for(d=0;d<k.length;d++){var S=T;k[d]!==""&&(S+="="+encodeURIComponent(String(k[d]))),s.push(S)}}return this.i=s.join("&")};function gt(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function lu(s,a){a&&!s.j&&(qe(s),s.i=null,s.g.forEach(function(u,d){var S=d.toLowerCase();d!=S&&(Bs(this,d),$s(this,S,u))},s)),s.j=a}function hu(s,a){const u=new Gt;if(l.Image){const d=new Image;d.onload=D($e,u,"TestLoadImage: loaded",!0,a,d),d.onerror=D($e,u,"TestLoadImage: error",!1,a,d),d.onabort=D($e,u,"TestLoadImage: abort",!1,a,d),d.ontimeout=D($e,u,"TestLoadImage: timeout",!1,a,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function du(s,a){const u=new Gt,d=new AbortController,S=setTimeout(()=>{d.abort(),$e(u,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(T=>{clearTimeout(S),T.ok?$e(u,"TestPingServer: ok",!0,a):$e(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(S),$e(u,"TestPingServer: error",!1,a)})}function $e(s,a,u,d,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),d(u)}catch{}}function fu(){this.g=new Qc}function gu(s,a,u){const d=u||"";try{Ps(s,function(S,T){let k=S;f(S)&&(k=Oi(S)),a.push(d+T+"="+encodeURIComponent(k))})}catch(S){throw a.push(d+"type="+encodeURIComponent("_badmap")),S}}function Pn(s){this.l=s.Ub||null,this.j=s.eb||!1}x(Pn,Pi),Pn.prototype.g=function(){return new Vn(this.l,this.j)},Pn.prototype.i=function(s){return function(){return s}}({});function Vn(s,a){ge.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Vn,ge),i=Vn.prototype,i.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Xt(this)},i.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yt(this)),this.readyState=0},i.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Xt(this)),this.g&&(this.readyState=3,Xt(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;js(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function js(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}i.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Yt(this):Xt(this),this.readyState==3&&js(this)}},i.Ra=function(s){this.g&&(this.response=this.responseText=s,Yt(this))},i.Qa=function(s){this.g&&(this.response=s,Yt(this))},i.ga=function(){this.g&&Yt(this)};function Yt(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Xt(s)}i.setRequestHeader=function(s,a){this.u.append(s,a)},i.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=a.next();return s.join(`\r
`)};function Xt(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function zs(s){let a="";return de(s,function(u,d){a+=d,a+=":",a+=u,a+=`\r
`}),a}function Hi(s,a,u){e:{for(d in u){var d=!1;break e}d=!0}d||(u=zs(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):W(s,a,u))}function X(s){ge.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(X,ge);var mu=/^https?$/i,pu=["POST","PUT"];i=X.prototype,i.Ha=function(s){this.J=s},i.ea=function(s,a,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ui.g(),this.v=this.o?ws(this.o):ws(Ui),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(T){Gs(this,T);return}if(s=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var S in d)u.set(S,d[S]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const T of d.keys())u.set(T,d.get(T));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(T=>T.toLowerCase()=="content-type"),S=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(pu,a,void 0))||d||S||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[T,k]of u)this.g.setRequestHeader(T,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ws(this),this.u=!0,this.g.send(s),this.u=!1}catch(T){Gs(this,T)}};function Gs(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Hs(s),Fn(s)}function Hs(s){s.A||(s.A=!0,we(s,"complete"),we(s,"error"))}i.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,we(this,"complete"),we(this,"abort"),Fn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fn(this,!0)),X.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ks(this):this.bb())},i.bb=function(){Ks(this)};function Ks(s){if(s.h&&typeof c<"u"&&(!s.v[1]||Le(s)!=4||s.Z()!=2)){if(s.u&&Le(s)==4)ms(s.Ea,0,s);else if(we(s,"readystatechange"),Le(s)==4){s.h=!1;try{const k=s.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var u;if(!(u=a)){var d;if(d=k===0){var S=String(s.D).match(Vs)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),d=!mu.test(S?S.toLowerCase():"")}u=d}if(u)we(s,"complete"),we(s,"success");else{s.m=6;try{var T=2<Le(s)?s.g.statusText:""}catch{T=""}s.l=T+" ["+s.Z()+"]",Hs(s)}}finally{Fn(s)}}}}function Fn(s,a){if(s.g){Ws(s);const u=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||we(s,"ready");try{u.onreadystatechange=d}catch{}}}function Ws(s){s.I&&(l.clearTimeout(s.I),s.I=null)}i.isActive=function(){return!!this.g};function Le(s){return s.g?s.g.readyState:0}i.Z=function(){try{return 2<Le(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Wc(a)}};function Qs(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function yu(s){const a={};s=(s.g&&2<=Le(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(K(s[d]))continue;var u=w(s[d]);const S=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const T=a[S]||[];a[S]=T,T.push(u)}b(a,function(d){return d.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jt(s,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||a}function Ys(s){this.Aa=0,this.i=[],this.j=new Gt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jt("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jt("baseRetryDelayMs",5e3,s),this.cb=Jt("retryDelaySeedMs",1e4,s),this.Wa=Jt("forwardChannelMaxRetries",2,s),this.wa=Jt("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new xs(s&&s.concurrentRequestLimit),this.Da=new fu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Ys.prototype,i.la=8,i.G=1,i.connect=function(s,a,u,d){be(0),this.W=s,this.H=a||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.I=so(this,null,this.W),Bn(this)};function Ki(s){if(Xs(s),s.G==3){var a=s.U++,u=Me(s.I);if(W(u,"SID",s.K),W(u,"RID",a),W(u,"TYPE","terminate"),Zt(s,u),a=new Be(s,s.j,a),a.L=2,a.v=On(Me(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=a.v,u=!0),u||(a.g=oo(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Rn(a)}ro(s)}function Un(s){s.g&&(Qi(s),s.g.cancel(),s.g=null)}function Xs(s){Un(s),s.u&&(l.clearTimeout(s.u),s.u=null),qn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function Bn(s){if(!Rs(s.h)&&!s.s){s.s=!0;var a=s.Ga;Ft||ls(),Ut||(Ft(),Ut=!0),Ai.add(a,s),s.B=0}}function vu(s,a){return Ms(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=zt(C(s.Ga,s,a),io(s,s.B)),s.B++,!0)}i.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const S=new Be(this,this.j,s);let T=this.o;if(this.S&&(T?(T=g(T),v(T,this.S)):T=this.S),this.m!==null||this.O||(S.H=T,T=null),this.P)e:{for(var a=0,u=0;u<this.i.length;u++){t:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=u;break e}if(a===4096||u===this.i.length-1){a=u+1;break e}}a=1e3}else a=1e3;a=Zs(this,S,a),u=Me(this.I),W(u,"RID",s),W(u,"CVER",22),this.D&&W(u,"X-HTTP-Session-Id",this.D),Zt(this,u),T&&(this.O?a="headers="+encodeURIComponent(String(zs(T)))+"&"+a:this.m&&Hi(u,this.m,T)),Gi(this.h,S),this.Ua&&W(u,"TYPE","init"),this.P?(W(u,"$req",a),W(u,"SID","null"),S.T=!0,qi(S,u,null)):qi(S,u,a),this.G=2}}else this.G==3&&(s?Js(this,s):this.i.length==0||Rs(this.h)||Js(this))};function Js(s,a){var u;a?u=a.l:u=s.U++;const d=Me(s.I);W(d,"SID",s.K),W(d,"RID",u),W(d,"AID",s.T),Zt(s,d),s.m&&s.o&&Hi(d,s.m,s.o),u=new Be(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Zs(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Gi(s.h,u),qi(u,d,a)}function Zt(s,a){s.H&&de(s.H,function(u,d){W(a,d,u)}),s.l&&Ps({},function(u,d){W(a,d,u)})}function Zs(s,a,u){u=Math.min(s.i.length,u);var d=s.l?C(s.l.Na,s.l,s):null;e:{var S=s.i;let T=-1;for(;;){const k=["count="+u];T==-1?0<u?(T=S[0].g,k.push("ofs="+T)):T=0:k.push("ofs="+T);let Q=!0;for(let ae=0;ae<u;ae++){let G=S[ae].g;const me=S[ae].map;if(G-=T,0>G)T=Math.max(0,S[ae].g-100),Q=!1;else try{gu(me,k,"req"+G+"_")}catch{d&&d(me)}}if(Q){d=k.join("&");break e}}}return s=s.i.splice(0,u),a.D=s,d}function eo(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Ft||ls(),Ut||(Ft(),Ut=!0),Ai.add(a,s),s.v=0}}function Wi(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=zt(C(s.Fa,s),io(s,s.v)),s.v++,!0)}i.Fa=function(){if(this.u=null,to(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=zt(C(this.ab,this),s)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,be(10),Un(this),to(this))};function Qi(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function to(s){s.g=new Be(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Me(s.qa);W(a,"RID","rpc"),W(a,"SID",s.K),W(a,"AID",s.T),W(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(a,"TO",s.ja),W(a,"TYPE","xmlhttp"),Zt(s,a),s.m&&s.o&&Hi(a,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=On(Me(a)),u.m=null,u.P=!0,ks(u,s)}i.Za=function(){this.C!=null&&(this.C=null,Un(this),Wi(this),be(19))};function qn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function no(s,a){var u=null;if(s.g==a){qn(s),Qi(s),s.g=null;var d=2}else if(zi(s.h,a))u=a.D,Ls(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var S=s.B;d=Dn(),we(d,new Is(d,u)),Bn(s)}else eo(s);else if(S=a.s,S==3||S==0&&0<a.X||!(d==1&&vu(s,a)||d==2&&Wi(s)))switch(u&&0<u.length&&(a=s.h,a.i=a.i.concat(u)),S){case 1:it(s,5);break;case 4:it(s,10);break;case 3:it(s,6);break;default:it(s,2)}}}function io(s,a){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*a}function it(s,a){if(s.j.info("Error code "+a),a==2){var u=C(s.fb,s),d=s.Xa;const S=!d;d=new nt(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Mn(d,"https"),On(d),S?hu(d.toString(),u):du(d.toString(),u)}else be(2);s.G=0,s.l&&s.l.sa(a),ro(s),Xs(s)}i.fb=function(s){s?(this.j.info("Successfully pinged google.com"),be(2)):(this.j.info("Failed to ping google.com"),be(1))};function ro(s){if(s.G=0,s.ka=[],s.l){const a=Os(s.h);(a.length!=0||s.i.length!=0)&&(L(s.ka,a),L(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function so(s,a,u){var d=u instanceof nt?Me(u):new nt(u);if(d.g!="")a&&(d.g=a+"."+d.g),Ln(d,d.s);else{var S=l.location;d=S.protocol,a=a?a+"."+S.hostname:S.hostname,S=+S.port;var T=new nt(null);d&&Mn(T,d),a&&(T.g=a),S&&Ln(T,S),u&&(T.l=u),d=T}return u=s.D,a=s.ya,u&&a&&W(d,u,a),W(d,"VER",s.la),Zt(s,d),d}function oo(s,a,u){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new X(new Pn({eb:u})):new X(s.pa),a.Ha(s.J),a}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function ao(){}i=ao.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function $n(){}$n.prototype.g=function(s,a){return new Ee(s,a)};function Ee(s,a){ge.call(this),this.g=new Ys(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!K(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!K(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new mt(this)}x(Ee,ge),Ee.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ee.prototype.close=function(){Ki(this.g)},Ee.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=Oi(s),s=u);a.i.push(new tu(a.Ya++,s)),a.G==3&&Bn(a)},Ee.prototype.N=function(){this.g.l=null,delete this.j,Ki(this.g),delete this.g,Ee.aa.N.call(this)};function co(s){Vi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const u in a){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}x(co,Vi);function uo(){Fi.call(this),this.status=1}x(uo,Fi);function mt(s){this.g=s}x(mt,ao),mt.prototype.ua=function(){we(this.g,"a")},mt.prototype.ta=function(s){we(this.g,new co(s))},mt.prototype.sa=function(s){we(this.g,new uo)},mt.prototype.ra=function(){we(this.g,"b")},$n.prototype.createWebChannel=$n.prototype.g,Ee.prototype.send=Ee.prototype.o,Ee.prototype.open=Ee.prototype.m,Ee.prototype.close=Ee.prototype.close,Ta=function(){return new $n},Ea=function(){return Dn()},Sa=et,hr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nn.NO_ERROR=0,Nn.TIMEOUT=8,Nn.HTTP_ERROR=6,Xn=Nn,Cs.COMPLETE="complete",ba=Cs,bs.EventType=$t,$t.OPEN="a",$t.CLOSE="b",$t.ERROR="c",$t.MESSAGE="d",ge.prototype.listen=ge.prototype.K,tn=bs,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,wa=X}).apply(typeof zn<"u"?zn:typeof self<"u"?self:typeof window<"u"?window:{});const Eo="@firebase/firestore";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ye.UNAUTHENTICATED=new ye(null),ye.GOOGLE_CREDENTIALS=new ye("google-credentials-uid"),ye.FIRST_PARTY=new ye("first-party-uid"),ye.MOCK_USER=new ye("mock-user");/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Rt="10.14.0";/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ct=new da("@firebase/firestore");function en(){return ct.logLevel}function M(i,...e){if(ct.logLevel<=j.DEBUG){const t=e.map(Dr);ct.debug(`Firestore (${Rt}): ${i}`,...t)}}function Ve(i,...e){if(ct.logLevel<=j.ERROR){const t=e.map(Dr);ct.error(`Firestore (${Rt}): ${i}`,...t)}}function It(i,...e){if(ct.logLevel<=j.WARN){const t=e.map(Dr);ct.warn(`Firestore (${Rt}): ${i}`,...t)}}function Dr(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(i)}catch{return i}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function V(i="Unexpected state"){const e=`FIRESTORE (${Rt}) INTERNAL ASSERTION FAILED: `+i;throw Ve(e),new Error(e)}function H(i,e){i||V()}function U(i,e){return i}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends xt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class We{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ia{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ye.UNAUTHENTICATED))}shutdown(){}}class Jl{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Zl{constructor(e){this.t=e,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){H(this.o===void 0);let n=this.i;const r=h=>this.i!==n?(n=this.i,t(h)):Promise.resolve();let o=new We;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new We,e.enqueueRetryable(()=>r(this.currentUser))};const c=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await r(this.currentUser)})},l=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new We)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(H(typeof n.accessToken=="string"),new Ia(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new ye(e)}}class eh{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class th{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new eh(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ih{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){H(this.o===void 0);const n=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.R;return this.R=o.token,M("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>n(o))};const r=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>r(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?r(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(H(typeof t.token=="string"),this.R=t.token,new nh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rh(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<i;n++)t[n]=Math.floor(256*Math.random());return t}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ca{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=rh(40);for(let o=0;o<r.length;++o)n.length<20&&r[o]<t&&(n+=e.charAt(r[o]%e.length))}return n}}function z(i,e){return i<e?-1:i>e?1:0}function Ct(i,e,t){return i.length===e.length&&i.every((n,r)=>t(n,e[r]))}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class re{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new R(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new R(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new R(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new re(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new re(0,0))}static max(){return new F(new re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class dn{constructor(e,t,n){t===void 0?t=0:t>e.length&&V(),n===void 0?n=e.length-t:n>e.length-t&&V(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return dn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dn?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const o=e.get(r),c=t.get(r);if(o<c)return-1;if(o>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}let Z=class Jn extends dn{construct(e,t,n){return new Jn(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new R(_.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(r=>r.length>0))}return new Jn(t)}static emptyPath(){return new Jn([])}};const sh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ue extends dn{construct(e,t,n){return new ue(e,t,n)}static isValidIdentifier(e){return sh.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ue(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const o=()=>{if(n.length===0)throw new R(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let c=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new R(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[r+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new R(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=h,r+=2}else l==="`"?(c=!c,r++):l!=="."||c?(n+=l,r++):(o(),r++)}if(o(),c)throw new R(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ue(t)}static emptyPath(){return new ue([])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let P=class nn{constructor(e){this.path=e}static fromPath(e){return new nn(Z.fromString(e))}static fromName(e){return new nn(Z.fromString(e).popFirst(5))}static empty(){return new nn(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new nn(new Z(e.slice()))}};function oh(i,e){const t=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=F.fromTimestamp(n===1e9?new re(t+1,0):new re(t,n));return new Ye(r,P.empty(),e)}function ah(i){return new Ye(i.readTime,i.key,-1)}class Ye{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ye(F.min(),P.empty(),-1)}static max(){return new Ye(F.max(),P.empty(),-1)}}function ch(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=P.comparator(i.documentKey,e.documentKey),t!==0?t:z(i.largestBatchId,e.largestBatchId))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const uh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function wn(i){if(i.code!==_.FAILED_PRECONDITION||i.message!==uh)throw i;M("LocalStore","Unexpectedly lost primary lease")}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A((n,r)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,r)},this.catchCallback=o=>{this.wrapFailure(t,o).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):A.reject(t)}static resolve(e){return new A((t,n)=>{t(e)})}static reject(e){return new A((t,n)=>{n(e)})}static waitFor(e){return new A((t,n)=>{let r=0,o=0,c=!1;e.forEach(l=>{++r,l.next(()=>{++o,c&&o===r&&t()},h=>n(h))}),c=!0,o===r&&t()})}static or(e){let t=A.resolve(!1);for(const n of e)t=t.next(r=>r?A.resolve(r):n());return t}static forEach(e,t){const n=[];return e.forEach((r,o)=>{n.push(t.call(this,r,o))}),this.waitFor(n)}static mapArray(e,t){return new A((n,r)=>{const o=e.length,c=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;t(e[f]).next(y=>{c[f]=y,++l,l===o&&n(c)},y=>r(y))}})}static doWhile(e,t){return new A((n,r)=>{const o=()=>{e()===!0?t().next(()=>{o()},r):n()};o()})}}function hh(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bn(i){return i.name==="IndexedDbTransactionError"}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Nr.oe=-1;function pi(i){return i==null}function oi(i){return i===0&&1/i==-1/0}function dh(i){return typeof i=="number"&&Number.isInteger(i)&&!oi(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function To(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Mt(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function _a(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let ne=class dr{constructor(e,t){this.comparator=e,this.root=t||ce.EMPTY}insert(e,t){return new dr(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ce.BLACK,null,null))}remove(e){return new dr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gn(this.root,e,this.comparator,!0)}};class Gn{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&r&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ce{constructor(e,t,n,r,o){this.key=e,this.value=t,this.color=n??ce.RED,this.left=r??ce.EMPTY,this.right=o??ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,o){return new ce(e??this.key,t??this.value,n??this.color,r??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const o=n(e,r.key);return r=o<0?r.copy(null,null,null,r.left.insert(e,t,n),null):o===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ce.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}ce.EMPTY=null,ce.RED=!0,ce.BLACK=!1;ce.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(i,e,t,n,r){return this}insert(i,e,t){return new ce(i,e)}remove(i,e){return this}isEmpty(){return!0}inorderTraversal(i){return!1}reverseTraversal(i){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class le{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Io(this.data.getIterator())}getIteratorFrom(e){return new Io(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=n.getNext().key;if(this.comparator(r,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new le(this.comparator);return t.data=e,t}}class Io{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _e{constructor(e){this.fields=e,e.sort(ue.comparator)}static empty(){return new _e([])}unionWith(e){let t=new le(ue.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new _e(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ct(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Aa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(n){try{return atob(n)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Aa("Invalid base64 string: "+r):r}}(e);return new he(t)}static fromUint8Array(e){const t=function(n){let r="";for(let o=0;o<n.length;++o)r+=String.fromCharCode(n[o]);return r}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const fh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xe(i){if(H(!!i),typeof i=="string"){let e=0;const t=fh.exec(i);if(H(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:J(i.seconds),nanos:J(i.nanos)}}function J(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function ut(i){return typeof i=="string"?he.fromBase64String(i):he.fromUint8Array(i)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function xr(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Rr(i){const e=i.mapValue.fields.__previous_value__;return xr(e)?Rr(e):e}function fn(i){const e=Xe(i.mapValue.fields.__local_write_time__.timestampValue);return new re(e.seconds,e.nanos)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class gh{constructor(e,t,n,r,o,c,l,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f}}class gn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new gn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gn&&e.projectId===this.projectId&&e.database===this.database}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Hn={mapValue:{}};function lt(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?xr(i)?4:ph(i)?9007199254740991:mh(i)?10:11:V()}function xe(i,e){if(i===e)return!0;const t=lt(i);if(t!==lt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return fn(i).isEqual(fn(e));case 3:return function(n,r){if(typeof n.timestampValue=="string"&&typeof r.timestampValue=="string"&&n.timestampValue.length===r.timestampValue.length)return n.timestampValue===r.timestampValue;const o=Xe(n.timestampValue),c=Xe(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(n,r){return ut(n.bytesValue).isEqual(ut(r.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(n,r){return J(n.geoPointValue.latitude)===J(r.geoPointValue.latitude)&&J(n.geoPointValue.longitude)===J(r.geoPointValue.longitude)}(i,e);case 2:return function(n,r){if("integerValue"in n&&"integerValue"in r)return J(n.integerValue)===J(r.integerValue);if("doubleValue"in n&&"doubleValue"in r){const o=J(n.doubleValue),c=J(r.doubleValue);return o===c?oi(o)===oi(c):isNaN(o)&&isNaN(c)}return!1}(i,e);case 9:return Ct(i.arrayValue.values||[],e.arrayValue.values||[],xe);case 10:case 11:return function(n,r){const o=n.mapValue.fields||{},c=r.mapValue.fields||{};if(To(o)!==To(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!xe(o[l],c[l])))return!1;return!0}(i,e);default:return V()}}function mn(i,e){return(i.values||[]).find(t=>xe(t,e))!==void 0}function _t(i,e){if(i===e)return 0;const t=lt(i),n=lt(e);if(t!==n)return z(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return z(i.booleanValue,e.booleanValue);case 2:return function(r,o){const c=J(r.integerValue||r.doubleValue),l=J(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(i,e);case 3:return Co(i.timestampValue,e.timestampValue);case 4:return Co(fn(i),fn(e));case 5:return z(i.stringValue,e.stringValue);case 6:return function(r,o){const c=ut(r),l=ut(o);return c.compareTo(l)}(i.bytesValue,e.bytesValue);case 7:return function(r,o){const c=r.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=z(c[h],l[h]);if(f!==0)return f}return z(c.length,l.length)}(i.referenceValue,e.referenceValue);case 8:return function(r,o){const c=z(J(r.latitude),J(o.latitude));return c!==0?c:z(J(r.longitude),J(o.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return _o(i.arrayValue,e.arrayValue);case 10:return function(r,o){var c,l,h,f;const y=r.fields||{},I=o.fields||{},C=(c=y.value)===null||c===void 0?void 0:c.arrayValue,D=(l=I.value)===null||l===void 0?void 0:l.arrayValue,x=z(((h=C?.values)===null||h===void 0?void 0:h.length)||0,((f=D?.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:_o(C,D)}(i.mapValue,e.mapValue);case 11:return function(r,o){if(r===Hn.mapValue&&o===Hn.mapValue)return 0;if(r===Hn.mapValue)return 1;if(o===Hn.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let y=0;y<l.length&&y<f.length;++y){const I=z(l[y],f[y]);if(I!==0)return I;const C=_t(c[l[y]],h[f[y]]);if(C!==0)return C}return z(l.length,f.length)}(i.mapValue,e.mapValue);default:throw V()}}function Co(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return z(i,e);const t=Xe(i),n=Xe(e),r=z(t.seconds,n.seconds);return r!==0?r:z(t.nanos,n.nanos)}function _o(i,e){const t=i.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const o=_t(t[r],n[r]);if(o)return o}return z(t.length,n.length)}function At(i){return fr(i)}function fr(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const t=Xe(e);return`time(${t.seconds},${t.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return ut(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return P.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=fr(r);return t+"]"}(i.arrayValue):"mapValue"in i?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const o of t)r?r=!1:n+=",",n+=`${o}:${fr(e.fields[o])}`;return n+"}"}(i.mapValue):V()}function Ao(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function gr(i){return!!i&&"integerValue"in i}function Mr(i){return!!i&&"arrayValue"in i}function ko(i){return!!i&&"nullValue"in i}function Do(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Zn(i){return!!i&&"mapValue"in i}function mh(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function on(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Mt(i.mapValue.fields,(t,n)=>e.mapValue.fields[t]=on(n)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=on(i.arrayValue.values[t]);return e}return Object.assign({},i)}function ph(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Te{constructor(e){this.value=e}static empty(){return new Te({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Zn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=on(t)}setAll(e){let t=ue.emptyPath(),n={},r=[];e.forEach((c,l)=>{if(!t.isImmediateParentOf(l)){const h=this.getFieldsMap(t);this.applyChanges(h,n,r),n={},r=[],t=l.popLast()}c?n[l.lastSegment()]=on(c):r.push(l.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,n,r)}delete(e){const t=this.field(e.popLast());Zn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Zn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Mt(t,(r,o)=>e[r]=o);for(const r of n)delete e[r]}clone(){return new Te(on(this.value))}}function ka(i){const e=[];return Mt(i.fields,(t,n)=>{const r=new ue([t]);if(Zn(n)){const o=ka(n.mapValue).fields;if(o.length===0)e.push(r);else for(const c of o)e.push(r.child(c))}else e.push(r)}),new _e(e)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ve{constructor(e,t,n,r,o,c,l){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=o,this.data=c,this.documentState=l}static newInvalidDocument(e){return new ve(e,0,F.min(),F.min(),F.min(),Te.empty(),0)}static newFoundDocument(e,t,n,r){return new ve(e,1,t,F.min(),n,r,0)}static newNoDocument(e,t){return new ve(e,2,t,F.min(),F.min(),Te.empty(),0)}static newUnknownDocument(e,t){return new ve(e,3,t,F.min(),F.min(),Te.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Te.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Te.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ai{constructor(e,t){this.position=e,this.inclusive=t}}function No(i,e,t){let n=0;for(let r=0;r<i.position.length;r++){const o=e[r],c=i.position[r];if(o.field.isKeyField()?n=P.comparator(P.fromName(c.referenceValue),t.key):n=_t(c,t.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function xo(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!xe(i.position[t],e.position[t]))return!1;return!0}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pn{constructor(e,t="asc"){this.field=e,this.dir=t}}function yh(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Da{}class te extends Da{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new wh(e,t,n):t==="array-contains"?new Eh(e,n):t==="in"?new Th(e,n):t==="not-in"?new Ih(e,n):t==="array-contains-any"?new Ch(e,n):new te(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new bh(e,n):new Sh(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(_t(t,this.value)):t!==null&&lt(this.value)===lt(t)&&this.matchesComparison(_t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ae extends Da{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ae(e,t)}matches(e){return Na(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Na(i){return i.op==="and"}function xa(i){return vh(i)&&Na(i)}function vh(i){for(const e of i.filters)if(e instanceof Ae)return!1;return!0}function mr(i){if(i instanceof te)return i.field.canonicalString()+i.op.toString()+At(i.value);if(xa(i))return i.filters.map(e=>mr(e)).join(",");{const e=i.filters.map(t=>mr(t)).join(",");return`${i.op}(${e})`}}function Ra(i,e){return i instanceof te?function(t,n){return n instanceof te&&t.op===n.op&&t.field.isEqual(n.field)&&xe(t.value,n.value)}(i,e):i instanceof Ae?function(t,n){return n instanceof Ae&&t.op===n.op&&t.filters.length===n.filters.length?t.filters.reduce((r,o,c)=>r&&Ra(o,n.filters[c]),!0):!1}(i,e):void V()}function Ma(i){return i instanceof te?function(e){return`${e.field.canonicalString()} ${e.op} ${At(e.value)}`}(i):i instanceof Ae?function(e){return e.op.toString()+" {"+e.getFilters().map(Ma).join(" ,")+"}"}(i):"Filter"}class wh extends te{constructor(e,t,n){super(e,t,n),this.key=P.fromName(n.referenceValue)}matches(e){const t=P.comparator(e.key,this.key);return this.matchesComparison(t)}}class bh extends te{constructor(e,t){super(e,"in",t),this.keys=La("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Sh extends te{constructor(e,t){super(e,"not-in",t),this.keys=La("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function La(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>P.fromName(n.referenceValue))}class Eh extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mr(t)&&mn(t.arrayValue,this.value)}}class Th extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mn(this.value.arrayValue,t)}}class Ih extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(mn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!mn(this.value.arrayValue,t)}}class Ch extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mr(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>mn(this.value.arrayValue,n))}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _h{constructor(e,t=null,n=[],r=[],o=null,c=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=o,this.startAt=c,this.endAt=l,this.ue=null}}function Ro(i,e=null,t=[],n=[],r=null,o=null,c=null){return new _h(i,e,t,n,r,o,c)}function Lr(i){const e=U(i);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>mr(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(r){return r.field.canonicalString()+r.dir}(n)).join(","),pi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>At(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>At(n)).join(",")),e.ue=t}return e.ue}function Or(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!yh(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Ra(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!xo(i.startAt,e.startAt)&&xo(i.endAt,e.endAt)}function pr(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Lt{constructor(e,t=null,n=[],r=[],o=null,c="F",l=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=o,this.limitType=c,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ah(i,e,t,n,r,o,c,l){return new Lt(i,e,t,n,r,o,c,l)}function Oa(i){return new Lt(i)}function Mo(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Pa(i){return i.collectionGroup!==null}function an(i){const e=U(i);if(e.ce===null){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(r){let o=new le(ue.comparator);return r.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(o=o.add(l.field))})}),o})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new pn(r,n))}),t.has(ue.keyField().canonicalString())||e.ce.push(new pn(ue.keyField(),n))}return e.ce}function De(i){const e=U(i);return e.le||(e.le=kh(e,an(i))),e.le}function kh(i,e){if(i.limitType==="F")return Ro(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(r=>{const o=r.dir==="desc"?"asc":"desc";return new pn(r.field,o)});const t=i.endAt?new ai(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new ai(i.startAt.position,i.startAt.inclusive):null;return Ro(i.path,i.collectionGroup,e,i.filters,i.limit,t,n)}}function yr(i,e){const t=i.filters.concat([e]);return new Lt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function ci(i,e,t){return new Lt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function yi(i,e){return Or(De(i),De(e))&&i.limitType===e.limitType}function Va(i){return`${Lr(De(i))}|lt:${i.limitType}`}function vt(i){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>Ma(n)).join(", ")}]`),pi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>At(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>At(n)).join(",")),`Target(${t})`}(De(i))}; limitType=${i.limitType})`}function vi(i,e){return e.isFoundDocument()&&function(t,n){const r=n.key.path;return t.collectionGroup!==null?n.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):P.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(i,e)&&function(t,n){for(const r of an(t))if(!r.field.isKeyField()&&n.data.field(r.field)===null)return!1;return!0}(i,e)&&function(t,n){for(const r of t.filters)if(!r.matches(n))return!1;return!0}(i,e)&&function(t,n){return!(t.startAt&&!function(r,o,c){const l=No(r,o,c);return r.inclusive?l<=0:l<0}(t.startAt,an(t),n)||t.endAt&&!function(r,o,c){const l=No(r,o,c);return r.inclusive?l>=0:l>0}(t.endAt,an(t),n))}(i,e)}function Dh(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Fa(i){return(e,t)=>{let n=!1;for(const r of an(i)){const o=Nh(r,e,t);if(o!==0)return o;n=n||r.field.isKeyField()}return 0}}function Nh(i,e,t){const n=i.field.isKeyField()?P.comparator(e.key,t.key):function(r,o,c){const l=o.data.field(r),h=c.data.field(r);return l!==null&&h!==null?_t(l,h):V()}(i.field,e,t);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return V()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ot{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,o]of n)if(this.equalsFn(r,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return void(r[o]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Mt(this.inner,(t,n)=>{for(const[r,o]of n)e(r,o)})}isEmpty(){return _a(this.inner)}size(){return this.innerSize}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const xh=new ne(P.comparator);function Fe(){return xh}const Ua=new ne(P.comparator);function rn(...i){let e=Ua;for(const t of i)e=e.insert(t.key,t);return e}function Ba(i){let e=Ua;return i.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function ot(){return cn()}function qa(){return cn()}function cn(){return new Ot(i=>i.toString(),(i,e)=>i.isEqual(e))}const Rh=new ne(P.comparator),Mh=new le(P.comparator);function q(...i){let e=Mh;for(const t of i)e=e.add(t);return e}const Lh=new le(z);function Oh(){return Lh}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Pr(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oi(e)?"-0":e}}function $a(i){return{integerValue:""+i}}function Ph(i,e){return dh(e)?$a(e):Pr(i,e)}/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wi{constructor(){this._=void 0}}function Vh(i,e,t){return i instanceof ui?function(n,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return r&&xr(r)&&(r=Rr(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(t,e):i instanceof yn?za(i,e):i instanceof vn?Ga(i,e):function(n,r){const o=ja(n,r),c=Lo(o)+Lo(n.Pe);return gr(o)&&gr(n.Pe)?$a(c):Pr(n.serializer,c)}(i,e)}function Fh(i,e,t){return i instanceof yn?za(i,e):i instanceof vn?Ga(i,e):t}function ja(i,e){return i instanceof li?function(t){return gr(t)||function(n){return!!n&&"doubleValue"in n}(t)}(e)?e:{integerValue:0}:null}class ui extends wi{}class yn extends wi{constructor(e){super(),this.elements=e}}function za(i,e){const t=Ha(e);for(const n of i.elements)t.some(r=>xe(r,n))||t.push(n);return{arrayValue:{values:t}}}class vn extends wi{constructor(e){super(),this.elements=e}}function Ga(i,e){let t=Ha(e);for(const n of i.elements)t=t.filter(r=>!xe(r,n));return{arrayValue:{values:t}}}class li extends wi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Lo(i){return J(i.integerValue||i.doubleValue)}function Ha(i){return Mr(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function Uh(i,e){return i.field.isEqual(e.field)&&function(t,n){return t instanceof yn&&n instanceof yn||t instanceof vn&&n instanceof vn?Ct(t.elements,n.elements,xe):t instanceof li&&n instanceof li?xe(t.Pe,n.Pe):t instanceof ui&&n instanceof ui}(i.transform,e.transform)}class Bh{constructor(e,t){this.version=e,this.transformResults=t}}class Oe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Oe}static exists(e){return new Oe(void 0,e)}static updateTime(e){return new Oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ei(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class bi{}function Ka(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Qa(i.key,Oe.none()):new Sn(i.key,i.data,Oe.none());{const t=i.data,n=Te.empty();let r=new le(ue.comparator);for(let o of e.fields)if(!r.has(o)){let c=t.field(o);c===null&&o.length>1&&(o=o.popLast(),c=t.field(o)),c===null?n.delete(o):n.set(o,c),r=r.add(o)}return new ht(i.key,n,new _e(r.toArray()),Oe.none())}}function qh(i,e,t){i instanceof Sn?function(n,r,o){const c=n.value.clone(),l=Po(n.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(i,e,t):i instanceof ht?function(n,r,o){if(!ei(n.precondition,r))return void r.convertToUnknownDocument(o.version);const c=Po(n.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Wa(n)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(i,e,t):function(n,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function un(i,e,t,n){return i instanceof Sn?function(r,o,c,l){if(!ei(r.precondition,o))return c;const h=r.value.clone(),f=Vo(r.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(i,e,t,n):i instanceof ht?function(r,o,c,l){if(!ei(r.precondition,o))return c;const h=Vo(r.fieldTransforms,l,o),f=o.data;return f.setAll(Wa(r)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(y=>y.field))}(i,e,t,n):function(r,o,c){return ei(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(i,e,t)}function $h(i,e){let t=null;for(const n of i.fieldTransforms){const r=e.data.field(n.field),o=ja(n.transform,r||null);o!=null&&(t===null&&(t=Te.empty()),t.set(n.field,o))}return t||null}function Oo(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(t,n){return t===void 0&&n===void 0||!(!t||!n)&&Ct(t,n,(r,o)=>Uh(r,o))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class Sn extends bi{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ht extends bi{constructor(e,t,n,r,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Wa(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=i.data.field(t);e.set(t,n)}}),e}function Po(i,e,t){const n=new Map;H(i.length===t.length);for(let r=0;r<t.length;r++){const o=i[r],c=o.transform,l=e.data.field(o.field);n.set(o.field,Fh(c,l,t[r]))}return n}function Vo(i,e,t){const n=new Map;for(const r of i){const o=r.transform,c=t.data.field(r.field);n.set(r.field,Vh(o,c,e))}return n}class Qa extends bi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jh extends bi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zh{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const o=this.mutations[r];o.key.isEqual(e.key)&&qh(o,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=un(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=un(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=qa();return this.mutations.forEach(r=>{const o=e.get(r.key),c=o.overlayedDocument;let l=this.applyToLocalView(c,o.mutatedFields);l=t.has(r.key)?null:l;const h=Ka(c,l);h!==null&&n.set(r.key,h),c.isValidDocument()||c.convertToNoDocument(F.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),q())}isEqual(e){return this.batchId===e.batchId&&Ct(this.mutations,e.mutations,(t,n)=>Oo(t,n))&&Ct(this.baseMutations,e.baseMutations,(t,n)=>Oo(t,n))}}class Vr{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){H(e.mutations.length===n.length);let r=function(){return Rh}();const o=e.mutations;for(let c=0;c<o.length;c++)r=r.insert(o[c].key,n[c].version);return new Vr(e,t,n,r)}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Gh{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Hh{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var ee,$;function Kh(i){switch(i){default:return V();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Ya(i){if(i===void 0)return Ve("GRPC error has no .code"),_.UNKNOWN;switch(i){case ee.OK:return _.OK;case ee.CANCELLED:return _.CANCELLED;case ee.UNKNOWN:return _.UNKNOWN;case ee.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case ee.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case ee.INTERNAL:return _.INTERNAL;case ee.UNAVAILABLE:return _.UNAVAILABLE;case ee.UNAUTHENTICATED:return _.UNAUTHENTICATED;case ee.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case ee.NOT_FOUND:return _.NOT_FOUND;case ee.ALREADY_EXISTS:return _.ALREADY_EXISTS;case ee.PERMISSION_DENIED:return _.PERMISSION_DENIED;case ee.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case ee.ABORTED:return _.ABORTED;case ee.OUT_OF_RANGE:return _.OUT_OF_RANGE;case ee.UNIMPLEMENTED:return _.UNIMPLEMENTED;case ee.DATA_LOSS:return _.DATA_LOSS;default:return V()}}($=ee||(ee={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Wh(){return new TextEncoder}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Qh=new at([4294967295,4294967295],0);function Fo(i){const e=Wh().encode(i),t=new va;return t.update(e),new Uint8Array(t.digest())}function Uo(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new at([t,n],0),new at([r,o],0)]}class Fr{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new sn(`Invalid padding: ${t}`);if(n<0)throw new sn(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new sn(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new sn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=at.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(at.fromNumber(n)));return r.compare(Qh)===1&&(r=new at([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Fo(e),[n,r]=Uo(t);for(let o=0;o<this.hashCount;o++){const c=this.Ee(n,r,o);if(!this.de(c))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),c=new Fr(o,r,t);return n.forEach(l=>c.insert(l)),c}insert(e){if(this.Ie===0)return;const t=Fo(e),[n,r]=Uo(t);for(let o=0;o<this.hashCount;o++){const c=this.Ee(n,r,o);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class sn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Si{constructor(e,t,n,r,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,En.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Si(F.min(),r,new ne(z),Fe(),q())}}class En{constructor(e,t,n,r,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new En(n,t,q(),q(),q())}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ti{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class Xa{constructor(e,t){this.targetId=e,this.me=t}}class Ja{constructor(e,t,n=he.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Bo{constructor(){this.fe=0,this.ge=$o(),this.pe=he.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=q(),t=q(),n=q();return this.ge.forEach((r,o)=>{switch(o){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:V()}}),new En(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=$o()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,H(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Yh{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fe(),this.qe=qo(),this.Qe=new ne(z)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:V()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,r)=>{this.ze(r)&&t(r)})}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const o=r.target;if(pr(o))if(n===0){const c=new P(o.path);this.Ue(t,c,ve.newNoDocument(c,F.min()))}else H(n===1);else{const c=this.Ye(t);if(c!==n){const l=this.Ze(e),h=l?this.Xe(l,e,c):1;if(h!==0){this.je(t);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,f)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:o=0}=t;let c,l;try{c=ut(n).toUint8Array()}catch(h){if(h instanceof Aa)return It("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Fr(c,r,o)}catch(h){return It(h instanceof sn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ie===0?null:l}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach(o=>{const c=this.Le.tt(),l=`projects/${c.projectId}/databases/${c.database}/documents/${o.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,o,null),r++)}),r}rt(e){const t=new Map;this.Be.forEach((o,c)=>{const l=this.Je(c);if(l){if(o.current&&pr(l.target)){const h=new P(l.target.path);this.ke.get(h)!==null||this.it(c,h)||this.Ue(c,h,ve.newNoDocument(h,e))}o.be&&(t.set(c,o.ve()),o.Ce())}});let n=q();this.qe.forEach((o,c)=>{let l=!0;c.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(n=n.add(o))}),this.ke.forEach((o,c)=>c.setReadTime(e));const r=new Si(e,t,this.Qe,this.ke,n);return this.ke=Fe(),this.qe=qo(),this.Qe=new ne(z),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Bo,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new le(z),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Bo),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function qo(){return new ne(P.comparator)}function $o(){return new ne(P.comparator)}const Xh={asc:"ASCENDING",desc:"DESCENDING"},Jh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zh={and:"AND",or:"OR"};class ed{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vr(i,e){return i.useProto3Json||pi(e)?e:{value:e}}function hi(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Za(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function td(i,e){return hi(i,e.toTimestamp())}function Ne(i){return H(!!i),F.fromTimestamp(function(e){const t=Xe(e);return new re(t.seconds,t.nanos)}(i))}function Ur(i,e){return wr(i,e).canonicalString()}function wr(i,e){const t=function(n){return new Z(["projects",n.projectId,"databases",n.database])}(i).child("documents");return e===void 0?t:t.child(e)}function ec(i){const e=Z.fromString(i);return H(sc(e)),e}function br(i,e){return Ur(i.databaseId,e.path)}function tr(i,e){const t=ec(e);if(t.get(1)!==i.databaseId.projectId)throw new R(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new R(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new P(nc(t))}function tc(i,e){return Ur(i.databaseId,e)}function nd(i){const e=ec(i);return e.length===4?Z.emptyPath():nc(e)}function Sr(i){return new Z(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function nc(i){return H(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function jo(i,e,t){return{name:br(i,e),fields:t.value.mapValue.fields}}function id(i,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],o=function(h,f){return h.useProto3Json?(H(f===void 0||typeof f=="string"),he.fromBase64String(f||"")):(H(f===void 0||f instanceof Buffer||f instanceof Uint8Array),he.fromUint8Array(f||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,l=c&&function(h){const f=h.code===void 0?_.UNKNOWN:Ya(h.code);return new R(f,h.message||"")}(c);t=new Ja(n,r,o,l||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=tr(i,n.document.name),o=Ne(n.document.updateTime),c=n.document.createTime?Ne(n.document.createTime):F.min(),l=new Te({mapValue:{fields:n.document.fields}}),h=ve.newFoundDocument(r,o,c,l),f=n.targetIds||[],y=n.removedTargetIds||[];t=new ti(f,y,h.key,h)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=tr(i,n.document),o=n.readTime?Ne(n.readTime):F.min(),c=ve.newNoDocument(r,o),l=n.removedTargetIds||[];t=new ti([],l,c.key,c)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=tr(i,n.document),o=n.removedTargetIds||[];t=new ti([],o,r,null)}else{if(!("filter"in e))return V();{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:o}=n,c=new Hh(r,o),l=n.targetId;t=new Xa(l,c)}}return t}function rd(i,e){let t;if(e instanceof Sn)t={update:jo(i,e.key,e.value)};else if(e instanceof Qa)t={delete:br(i,e.key)};else if(e instanceof ht)t={update:jo(i,e.key,e.data),updateMask:fd(e.fieldMask)};else{if(!(e instanceof jh))return V();t={verify:br(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(r,o){const c=o.transform;if(c instanceof ui)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof yn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof vn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof li)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw V()}(0,n))),e.precondition.isNone||(t.currentDocument=function(n,r){return r.updateTime!==void 0?{updateTime:td(n,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:V()}(i,e.precondition)),t}function sd(i,e){return i&&i.length>0?(H(e!==void 0),i.map(t=>function(n,r){let o=n.updateTime?Ne(n.updateTime):Ne(r);return o.isEqual(F.min())&&(o=Ne(r)),new Bh(o,n.transformResults||[])}(t,e))):[]}function od(i,e){return{documents:[tc(i,e.path)]}}function ad(i,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=tc(i,r);const o=function(h){if(h.length!==0)return rc(Ae.create(h,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const c=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:wt(y.field),direction:ld(y.dir)}}(f))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const l=vr(i,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:r}}function cd(i){let e=nd(i.parent);const t=i.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){H(n===1);const y=t.from[0];y.allDescendants?r=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(y){const I=ic(y);return I instanceof Ae&&xa(I)?I.getFilters():[I]}(t.where));let c=[];t.orderBy&&(c=function(y){return y.map(I=>function(C){return new pn(bt(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(I))}(t.orderBy));let l=null;t.limit&&(l=function(y){let I;return I=typeof y=="object"?y.value:y,pi(I)?null:I}(t.limit));let h=null;t.startAt&&(h=function(y){const I=!!y.before,C=y.values||[];return new ai(C,I)}(t.startAt));let f=null;return t.endAt&&(f=function(y){const I=!y.before,C=y.values||[];return new ai(C,I)}(t.endAt)),Ah(e,r,c,o,l,"F",h,f)}function ud(i,e){const t=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return V()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ic(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=bt(e.unaryFilter.field);return te.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=bt(e.unaryFilter.field);return te.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=bt(e.unaryFilter.field);return te.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bt(e.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(i):i.fieldFilter!==void 0?function(e){return te.create(bt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Ae.create(e.compositeFilter.filters.map(t=>ic(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return V()}}(e.compositeFilter.op))}(i):V()}function ld(i){return Xh[i]}function hd(i){return Jh[i]}function dd(i){return Zh[i]}function wt(i){return{fieldPath:i.canonicalString()}}function bt(i){return ue.fromServerFormat(i.fieldPath)}function rc(i){return i instanceof te?function(e){if(e.op==="=="){if(Do(e.value))return{unaryFilter:{field:wt(e.field),op:"IS_NAN"}};if(ko(e.value))return{unaryFilter:{field:wt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Do(e.value))return{unaryFilter:{field:wt(e.field),op:"IS_NOT_NAN"}};if(ko(e.value))return{unaryFilter:{field:wt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wt(e.field),op:hd(e.op),value:e.value}}}(i):i instanceof Ae?function(e){const t=e.getFilters().map(n=>rc(n));return t.length===1?t[0]:{compositeFilter:{op:dd(e.op),filters:t}}}(i):V()}function fd(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function sc(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ge{constructor(e,t,n,r,o=F.min(),c=F.min(),l=he.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(e){return new Ge(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ge(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class gd{constructor(e){this.ct=e}}function md(i){const e=cd({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?ci(e,e.limit,"L"):e}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pd{constructor(){this.un=new yd}addToCollectionParentIndex(e,t){return this.un.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(Ye.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(Ye.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class yd{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new le(Z.comparator),o=!r.has(n);return this.index[t]=r.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new le(Z.comparator)).toArray()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kt{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new kt(0)}static kn(){return new kt(-1)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vd{constructor(){this.changes=new Ot(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class bd{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(n!==null&&un(n.mutation,r,_e.empty(),re.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,q()).next(()=>n))}getLocalViewOfDocuments(e,t,n=q()){const r=ot();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(o=>{let c=rn();return o.forEach((l,h)=>{c=c.insert(l,h.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const n=ot();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,q()))}populateOverlays(e,t,n){const r=[];return n.forEach(o=>{t.has(o)||r.push(o)}),this.documentOverlayCache.getOverlays(e,r).next(o=>{o.forEach((c,l)=>{t.set(c,l)})})}computeViews(e,t,n,r){let o=Fe();const c=cn(),l=function(){return cn()}();return t.forEach((h,f)=>{const y=n.get(f.key);r.has(f.key)&&(y===void 0||y.mutation instanceof ht)?o=o.insert(f.key,f):y!==void 0?(c.set(f.key,y.mutation.getFieldMask()),un(y.mutation,f,y.mutation.getFieldMask(),re.now())):c.set(f.key,_e.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((f,y)=>c.set(f,y)),t.forEach((f,y)=>{var I;return l.set(f,new wd(y,(I=c.get(f))!==null&&I!==void 0?I:null))}),l))}recalculateAndSaveOverlays(e,t){const n=cn();let r=new ne((c,l)=>c-l),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const l of c)l.keys().forEach(h=>{const f=t.get(h);if(f===null)return;let y=n.get(h)||_e.empty();y=l.applyToLocalView(f,y),n.set(h,y);const I=(r.get(l.batchId)||q()).add(h);r=r.insert(l.batchId,I)})}).next(()=>{const c=[],l=r.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,y=h.value,I=qa();y.forEach(C=>{if(!o.has(C)){const D=Ka(t.get(C),n.get(C));D!==null&&I.set(C,D),o=o.add(C)}}),c.push(this.documentOverlayCache.saveOverlays(e,f,I))}return A.waitFor(c)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,r){return function(o){return P.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Pa(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(o=>{const c=r-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-o.size):A.resolve(ot());let l=-1,h=o;return c.next(f=>A.forEach(f,(y,I)=>(l<I.largestBatchId&&(l=I.largestBatchId),o.get(y)?A.resolve():this.remoteDocumentCache.getEntry(e,y).next(C=>{h=h.insert(y,C)}))).next(()=>this.populateOverlays(e,f,o)).next(()=>this.computeViews(e,h,f,q())).next(y=>({batchId:l,changes:Ba(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new P(t)).next(n=>{let r=rn();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const o=t.collectionGroup;let c=rn();return this.indexManager.getCollectionParents(e,o).next(l=>A.forEach(l,h=>{const f=function(y,I){return new Lt(I,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,f,n,r).next(y=>{y.forEach((I,C)=>{c=c.insert(I,C)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,n,r){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,o,r))).next(c=>{o.forEach((h,f)=>{const y=f.getKey();c.get(y)===null&&(c=c.insert(y,ve.newInvalidDocument(y)))});let l=rn();return c.forEach((h,f)=>{const y=o.get(h);y!==void 0&&un(y.mutation,f,_e.empty(),re.now()),vi(t,f)&&(l=l.insert(h,f))}),l})}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Sd{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return A.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(n){return{id:n.id,version:n.version,createTime:Ne(n.createTime)}}(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(n){return{name:n.name,query:md(n.bundledQuery),readTime:Ne(n.readTime)}}(t)),A.resolve()}}/**
* @license
* Copyright 2022 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ed{constructor(){this.overlays=new ne(P.comparator),this.Ir=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ot();return A.forEach(t,r=>this.getOverlay(e,r).next(o=>{o!==null&&n.set(r,o)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((r,o)=>{this.ht(e,t,o)}),A.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return r!==void 0&&(r.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const r=ot(),o=t.length+1,c=new P(t.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>n&&r.set(h.getKey(),h)}return A.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let o=new ne((f,y)=>f-y);const c=this.overlays.getIterator();for(;c.hasNext();){const f=c.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>n){let y=o.get(f.largestBatchId);y===null&&(y=ot(),o=o.insert(f.largestBatchId,y)),y.set(f.getKey(),f)}}const l=ot(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,y)=>l.set(f,y)),!(l.size()>=r)););return A.resolve(l)}ht(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const c=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,c)}this.overlays=this.overlays.insert(n.key,new Gh(t,n));let o=this.Ir.get(t);o===void 0&&(o=q(),this.Ir.set(t,o)),this.Ir.set(t,o.add(n.key))}}/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Td{constructor(){this.sessionToken=he.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Br{constructor(){this.Tr=new le(oe.Er),this.dr=new le(oe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new oe(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new oe(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new P(new Z([])),n=new oe(t,e),r=new oe(t,e+1),o=[];return this.dr.forEachInRange([n,r],c=>{this.Vr(c),o.push(c.key)}),o}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new P(new Z([])),n=new oe(t,e),r=new oe(t,e+1);let o=q();return this.dr.forEachInRange([n,r],c=>{o=o.add(c.key)}),o}containsKey(e){const t=new oe(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class oe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return P.comparator(e.key,t.key)||z(e.wr,t.wr)}static Ar(e,t){return z(e.wr,t.wr)||P.comparator(e.key,t.key)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Id{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new le(oe.Er)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new zh(o,t,n,r);this.mutationQueue.push(c);for(const l of r)this.br=this.br.add(new oe(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return A.resolve(c)}lookupMutationBatch(e,t){return A.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),o=r<0?0:r;return A.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new oe(t,0),r=new oe(t,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([n,r],c=>{const l=this.Dr(c.wr);o.push(l)}),A.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new le(z);return t.forEach(r=>{const o=new oe(r,0),c=new oe(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,c],l=>{n=n.add(l.wr)})}),A.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let o=n;P.isDocumentKey(o)||(o=o.child(""));const c=new oe(new P(o),0);let l=new le(z);return this.br.forEachWhile(h=>{const f=h.key.path;return!!n.isPrefixOf(f)&&(f.length===r&&(l=l.add(h.wr)),!0)},c),A.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(n=>{const r=this.Dr(n);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){H(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return A.forEach(t.mutations,r=>{const o=new oe(r.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new oe(t,0),r=this.br.firstAfterOrEqual(n);return A.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Cd{constructor(e){this.Mr=e,this.docs=function(){return new ne(P.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),o=r?r.size:0,c=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():ve.newInvalidDocument(t))}getEntries(e,t){let n=Fe();return t.forEach(r=>{const o=this.docs.get(r);n=n.insert(r,o?o.document.mutableCopy():ve.newInvalidDocument(r))}),A.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let o=Fe();const c=t.path,l=new P(c.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:y}}=h.getNext();if(!c.isPrefixOf(f.path))break;f.path.length>c.length+1||ch(ah(y),n)<=0||(r.has(y.key)||vi(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return A.resolve(o)}getAllFromCollectionGroup(e,t,n,r){V()}Or(e,t){return A.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new _d(this)}getSize(e){return A.resolve(this.size)}}class _d extends vd{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)}),A.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ad{constructor(e){this.persistence=e,this.Nr=new Ot(t=>Lr(t),Or),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Br,this.targetCount=0,this.kr=kt.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,r)=>t(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),A.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new kt(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.Kn(t),A.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let r=0;const o=[];return this.Nr.forEach((c,l)=>{l.sequenceNumber<=t&&n.get(l.targetId)===null&&(this.Nr.delete(c),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),A.waitFor(o).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),A.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,o=[];return r&&t.forEach(c=>{o.push(r.markPotentiallyOrphaned(e,c))}),A.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this.Br.containsKey(t))}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kd{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Nr(0),this.Kr=!1,this.Kr=!0,this.$r=new Td,this.referenceDelegate=e(this),this.Ur=new Ad(this),this.indexManager=new pd,this.remoteDocumentCache=function(n){return new Cd(n)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new gd(t),this.Gr=new Sd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ed,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new Id(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){M("MemoryPersistence","Starting transaction:",e);const r=new Dd(this.Qr.next());return this.referenceDelegate.zr(),n(r).next(o=>this.referenceDelegate.jr(r).next(()=>o)).toPromise().then(o=>(r.raiseOnCommittedEvent(),o))}Hr(e,t){return A.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class Dd extends lh{constructor(e){super(),this.currentSequenceNumber=e}}class qr{constructor(e){this.persistence=e,this.Jr=new Br,this.Yr=null}static Zr(e){return new qr(e)}get Xr(){if(this.Yr)return this.Yr;throw V()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),A.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(r=>this.Xr.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(o=>this.Xr.add(o.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Xr,n=>{const r=P.fromPath(n);return this.ei(e,r).next(o=>{o||t.removeEntry(r,F.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return A.or([()=>A.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $r{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=q(),r=q();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:r=r.add(o.doc.key)}return new $r(e,t.fromCache,n,r)}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xd{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Mu()?8:hh(xu())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const o={result:null};return this.Yi(e,t).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.Zi(e,t,r,n).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new Nd;return this.Xi(e,t,c).next(l=>{if(o.result=l,this.zi)return this.es(e,t,c,l.size)})}).next(()=>o.result)}es(e,t,n,r){return n.documentReadCount<this.ji?(en()<=j.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",vt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),A.resolve()):(en()<=j.DEBUG&&M("QueryEngine","Query:",vt(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?(en()<=j.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",vt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,De(t))):A.resolve())}Yi(e,t){if(Mo(t))return A.resolve(null);let n=De(t);return this.indexManager.getIndexType(e,n).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=ci(t,null,"F"),n=De(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(o=>{const c=q(...o);return this.Ji.getDocuments(e,c).next(l=>this.indexManager.getMinOffset(e,n).next(h=>{const f=this.ts(t,l);return this.ns(t,f,c,h.readTime)?this.Yi(e,ci(t,null,"F")):this.rs(e,f,t,h)}))})))}Zi(e,t,n,r){return Mo(t)||r.isEqual(F.min())?A.resolve(null):this.Ji.getDocuments(e,n).next(o=>{const c=this.ts(t,o);return this.ns(t,c,n,r)?A.resolve(null):(en()<=j.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),vt(t)),this.rs(e,c,t,oh(r,-1)).next(l=>l))})}ts(e,t){let n=new le(Fa(e));return t.forEach((r,o)=>{vi(e,o)&&(n=n.add(o))}),n}ns(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(r)>0)}Xi(e,t,n){return en()<=j.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",vt(t)),this.Ji.getDocumentsMatchingQuery(e,t,Ye.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next(o=>(t.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Rd{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new ne(z),this._s=new Ot(o=>Lr(o),Or),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bd(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function Md(i,e,t,n){return new Rd(i,e,t,n)}async function oc(i,e){const t=U(i);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next(o=>(r=o,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(o=>{const c=[],l=[];let h=q();for(const f of r){c.push(f.batchId);for(const y of f.mutations)h=h.add(y.key)}for(const f of o){l.push(f.batchId);for(const y of f.mutations)h=h.add(y.key)}return t.localDocuments.getDocuments(n,h).next(f=>({hs:f,removedBatchIds:c,addedBatchIds:l}))})})}function Ld(i,e){const t=U(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=e.batch.keys(),o=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const y=h.batch,I=y.keys();let C=A.resolve();return I.forEach(D=>{C=C.next(()=>f.getEntry(l,D)).next(x=>{const O=h.docVersions.get(D);H(O!==null),x.version.compareTo(O)<0&&(y.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(l,y))}(t,n,e,o).next(()=>o.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=q();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,r))})}function ac(i){const e=U(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function Od(i,e){const t=U(i),n=e.snapshotVersion;let r=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const c=t.cs.newChangeBuffer({trackRemovals:!0});r=t.os;const l=[];e.targetChanges.forEach((y,I)=>{const C=r.get(I);if(!C)return;l.push(t.Ur.removeMatchingKeys(o,y.removedDocuments,I).next(()=>t.Ur.addMatchingKeys(o,y.addedDocuments,I)));let D=C.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(I)!==null?D=D.withResumeToken(he.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):y.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(y.resumeToken,n)),r=r.insert(I,D),function(x,O,L){return x.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(C,D,y)&&l.push(t.Ur.updateTargetData(o,D))});let h=Fe(),f=q();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),l.push(Pd(o,c,e.documentUpdates).next(y=>{h=y.Ps,f=y.Is})),!n.isEqual(F.min())){const y=t.Ur.getLastRemoteSnapshotVersion(o).next(I=>t.Ur.setTargetsMetadata(o,o.currentSequenceNumber,n));l.push(y)}return A.waitFor(l).next(()=>c.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(t.os=r,o))}function Pd(i,e,t){let n=q(),r=q();return t.forEach(o=>n=n.add(o)),e.getEntries(i,n).next(o=>{let c=Fe();return t.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(r=r.add(l)),h.isNoDocument()&&h.version.isEqual(F.min())?(e.removeEntry(l,h.readTime),c=c.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(h),c=c.insert(l,h)):M("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{Ps:c,Is:r}})}function Vd(i,e){const t=U(i);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Fd(i,e){const t=U(i);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return t.Ur.getTargetData(n,e).next(o=>o?(r=o,A.resolve(r)):t.Ur.allocateTargetId(n).next(c=>(r=new Ge(e,c,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=t.os.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function Er(i,e,t){const n=U(i),r=n.os.get(e),o=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",o,c=>n.persistence.referenceDelegate.removeTarget(c,r))}catch(c){if(!bn(c))throw c;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}n.os=n.os.remove(e),n._s.delete(r.target)}function zo(i,e,t){const n=U(i);let r=F.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",c=>function(l,h,f){const y=U(l),I=y._s.get(f);return I!==void 0?A.resolve(y.os.get(I)):y.Ur.getTargetData(h,f)}(n,c,De(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(c,l.targetId).next(h=>{o=h})}).next(()=>n.ss.getDocumentsMatchingQuery(c,e,t?r:F.min(),t?o:q())).next(l=>(Ud(n,Dh(e),l),{documents:l,Ts:o})))}function Ud(i,e,t){let n=i.us.get(e)||F.min();t.forEach((r,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)}),i.us.set(e,n)}class Go{constructor(){this.activeTargetIds=Oh()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bd{constructor(){this.so=new Go,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Go,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class qd{_o(e){}shutdown(){}}/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ho{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Kn=null;function nr(){return Kn===null?Kn=function(){return 268435456+Math.round(2147483648*Math.random())}():Kn++,"0x"+Kn.toString(16)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const $d={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jd{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const pe="WebChannelConnection";class zd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,o){const c=nr(),l=this.xo(e,t.toUriEncodedString());M("RestConnection",`Sending RPC '${e}' ${c}:`,l,n);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,r,o),this.No(e,l,h,n).then(f=>(M("RestConnection",`Received RPC '${e}' ${c}: `,f),f),f=>{throw It("RestConnection",`RPC '${e}' ${c} failed with error: `,f,"url: ",l,"request:",n),f})}Lo(e,t,n,r,o,c){return this.Mo(e,t,n,r,o)}Oo(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rt}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,o)=>e[o]=r),n&&n.headers.forEach((r,o)=>e[o]=r)}xo(e,t){const n=$d[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const o=nr();return new Promise((c,l)=>{const h=new wa;h.setWithCredentials(!0),h.listenOnce(ba.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Xn.NO_ERROR:const y=h.getResponseJson();M(pe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),c(y);break;case Xn.TIMEOUT:M(pe,`RPC '${e}' ${o} timed out`),l(new R(_.DEADLINE_EXCEEDED,"Request time out"));break;case Xn.HTTP_ERROR:const I=h.getStatus();if(M(pe,`RPC '${e}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const D=C?.error;if(D&&D.status&&D.message){const x=function(O){const L=O.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(L)>=0?L:_.UNKNOWN}(D.status);l(new R(x,D.message))}else l(new R(_.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new R(_.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{M(pe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(r);M(pe,`RPC '${e}' ${o} sending request:`,r),h.send(t,"POST",f,n,15)})}Bo(e,t,n){const r=nr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Ta(),l=Ea(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Oo(h.initMessageHeaders,t,n),h.encodeInitMessageHeaders=!0;const y=o.join("");M(pe,`Creating RPC '${e}' stream ${r}: ${y}`,h);const I=c.createWebChannel(y,h);let C=!1,D=!1;const x=new jd({Io:L=>{D?M(pe,`Not sending because RPC '${e}' stream ${r} is closed:`,L):(C||(M(pe,`Opening RPC '${e}' stream ${r} transport.`),I.open(),C=!0),M(pe,`RPC '${e}' stream ${r} sending:`,L),I.send(L))},To:()=>I.close()}),O=(L,Y,K)=>{L.listen(Y,ie=>{try{K(ie)}catch(se){setTimeout(()=>{throw se},0)}})};return O(I,tn.EventType.OPEN,()=>{D||(M(pe,`RPC '${e}' stream ${r} transport opened.`),x.yo())}),O(I,tn.EventType.CLOSE,()=>{D||(D=!0,M(pe,`RPC '${e}' stream ${r} transport closed`),x.So())}),O(I,tn.EventType.ERROR,L=>{D||(D=!0,It(pe,`RPC '${e}' stream ${r} transport errored:`,L),x.So(new R(_.UNAVAILABLE,"The operation could not be completed")))}),O(I,tn.EventType.MESSAGE,L=>{var Y;if(!D){const K=L.data[0];H(!!K);const ie=K,se=ie.error||((Y=ie[0])===null||Y===void 0?void 0:Y.error);if(se){M(pe,`RPC '${e}' stream ${r} received error:`,se);const ke=se.status;let de=function(g){const p=ee[g];if(p!==void 0)return Ya(p)}(ke),b=se.message;de===void 0&&(de=_.INTERNAL,b="Unknown error status: "+ke+" with message "+se.message),D=!0,x.So(new R(de,b)),I.close()}else M(pe,`RPC '${e}' stream ${r} received:`,K),x.bo(K)}}),O(l,Sa.STAT_EVENT,L=>{L.stat===hr.PROXY?M(pe,`RPC '${e}' stream ${r} detected buffering proxy`):L.stat===hr.NOPROXY&&M(pe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function ir(){return typeof document<"u"?document:null}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ei(i){return new ed(i,!0)}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class cc{constructor(e,t,n=1e3,r=1.5,o=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&M("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class uc{constructor(e,t,n,r,o,c,l,h){this.ui=e,this.Ho=n,this.Jo=r,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new cc(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(Ve(t.toString()),Ve("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.Yo===t&&this.P_(n,r)},n=>{e(()=>{const r=new R(_.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(r)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{n(()=>this.I_(r))}),this.stream.onMessage(r=>{n(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gd extends uc{constructor(e,t,n,r,o,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,c),this.serializer=o}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=id(this.serializer,e),n=function(r){if(!("targetChange"in r))return F.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?Ne(o.readTime):F.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Sr(this.serializer),t.addTarget=function(r,o){let c;const l=o.target;if(c=pr(l)?{documents:od(r,l)}:{query:ad(r,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Za(r,o.resumeToken);const h=vr(r,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(F.min())>0){c.readTime=hi(r,o.snapshotVersion.toTimestamp());const h=vr(r,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=ud(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Sr(this.serializer),t.removeTarget=e,this.a_(t)}}class Hd extends uc{constructor(e,t,n,r,o,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,c),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return H(!!e.streamToken),this.lastStreamToken=e.streamToken,H(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){H(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=sd(e.writeResults,e.commitTime),n=Ne(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Sr(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>rd(this.serializer,n))};this.a_(t)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Kd extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new R(_.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Mo(e,wr(t,n),r,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new R(_.UNKNOWN,o.toString())})}Lo(e,t,n,r,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,l])=>this.connection.Lo(e,wr(t,n),r,c,l,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new R(_.UNKNOWN,c.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Wd{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ve(t),this.D_=!1):M("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Qd{constructor(e,t,n,r,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(c=>{n.enqueueAndForget(async()=>{dt(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=U(l);h.L_.add(4),await Tn(h),h.q_.set("Unknown"),h.L_.delete(4),await Ti(h)}(this))})}),this.q_=new Wd(n,r)}}async function Ti(i){if(dt(i))for(const e of i.B_)await e(!0)}async function Tn(i){for(const e of i.B_)await e(!1)}function lc(i,e){const t=U(i);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Hr(t)?Gr(t):Pt(t).r_()&&zr(t,e))}function jr(i,e){const t=U(i),n=Pt(t);t.N_.delete(e),n.r_()&&hc(t,e),t.N_.size===0&&(n.r_()?n.o_():dt(t)&&t.q_.set("Unknown"))}function zr(i,e){if(i.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Pt(i).A_(e)}function hc(i,e){i.Q_.xe(e),Pt(i).R_(e)}function Gr(i){i.Q_=new Yh({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>i.N_.get(e)||null,tt:()=>i.datastore.serializer.databaseId}),Pt(i).start(),i.q_.v_()}function Hr(i){return dt(i)&&!Pt(i).n_()&&i.N_.size>0}function dt(i){return U(i).L_.size===0}function dc(i){i.Q_=void 0}async function Yd(i){i.q_.set("Online")}async function Xd(i){i.N_.forEach((e,t)=>{zr(i,e)})}async function Jd(i,e){dc(i),Hr(i)?(i.q_.M_(e),Gr(i)):i.q_.set("Unknown")}async function Zd(i,e,t){if(i.q_.set("Online"),e instanceof Ja&&e.state===2&&e.cause)try{await async function(n,r){const o=r.cause;for(const c of r.targetIds)n.N_.has(c)&&(await n.remoteSyncer.rejectListen(c,o),n.N_.delete(c),n.Q_.removeTarget(c))}(i,e)}catch(n){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await di(i,n)}else if(e instanceof ti?i.Q_.Ke(e):e instanceof Xa?i.Q_.He(e):i.Q_.We(e),!t.isEqual(F.min()))try{const n=await ac(i.localStore);t.compareTo(n)>=0&&await function(r,o){const c=r.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=r.N_.get(h);f&&r.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=r.N_.get(l);if(!f)return;r.N_.set(l,f.withResumeToken(he.EMPTY_BYTE_STRING,f.snapshotVersion)),hc(r,l);const y=new Ge(f.target,l,h,f.sequenceNumber);zr(r,y)}),r.remoteSyncer.applyRemoteEvent(c)}(i,t)}catch(n){M("RemoteStore","Failed to raise snapshot:",n),await di(i,n)}}async function di(i,e,t){if(!bn(e))throw e;i.L_.add(1),await Tn(i),i.q_.set("Offline"),t||(t=()=>ac(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),i.L_.delete(1),await Ti(i)})}function fc(i,e){return e().catch(t=>di(i,t,e))}async function Ii(i){const e=U(i),t=Je(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ef(e);)try{const r=await Vd(e.localStore,n);if(r===null){e.O_.length===0&&t.o_();break}n=r.batchId,tf(e,r)}catch(r){await di(e,r)}gc(e)&&mc(e)}function ef(i){return dt(i)&&i.O_.length<10}function tf(i,e){i.O_.push(e);const t=Je(i);t.r_()&&t.V_&&t.m_(e.mutations)}function gc(i){return dt(i)&&!Je(i).n_()&&i.O_.length>0}function mc(i){Je(i).start()}async function nf(i){Je(i).p_()}async function rf(i){const e=Je(i);for(const t of i.O_)e.m_(t.mutations)}async function sf(i,e,t){const n=i.O_.shift(),r=Vr.from(n,e,t);await fc(i,()=>i.remoteSyncer.applySuccessfulWrite(r)),await Ii(i)}async function of(i,e){e&&Je(i).V_&&await async function(t,n){if(function(r){return Kh(r)&&r!==_.ABORTED}(n.code)){const r=t.O_.shift();Je(t).s_(),await fc(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,n)),await Ii(t)}}(i,e),gc(i)&&mc(i)}async function Ko(i,e){const t=U(i);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const n=dt(t);t.L_.add(3),await Tn(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ti(t)}async function af(i,e){const t=U(i);e?(t.L_.delete(2),await Ti(t)):e||(t.L_.add(2),await Tn(t),t.q_.set("Unknown"))}function Pt(i){return i.K_||(i.K_=function(e,t,n){const r=U(e);return r.w_(),new Gd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(i.datastore,i.asyncQueue,{Eo:Yd.bind(null,i),Ro:Xd.bind(null,i),mo:Jd.bind(null,i),d_:Zd.bind(null,i)}),i.B_.push(async e=>{e?(i.K_.s_(),Hr(i)?Gr(i):i.q_.set("Unknown")):(await i.K_.stop(),dc(i))})),i.K_}function Je(i){return i.U_||(i.U_=function(e,t,n){const r=U(e);return r.w_(),new Hd(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(i.datastore,i.asyncQueue,{Eo:()=>Promise.resolve(),Ro:nf.bind(null,i),mo:of.bind(null,i),f_:rf.bind(null,i),g_:sf.bind(null,i)}),i.B_.push(async e=>{e?(i.U_.s_(),await Ii(i)):(await i.U_.stop(),i.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${i.O_.length} pending writes`),i.O_=[]))})),i.U_}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Kr{constructor(e,t,n,r,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=o,this.deferred=new We,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,o){const c=Date.now()+n,l=new Kr(e,t,c,r,o);return l.start(n),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wr(i,e){if(Ve("AsyncQueue",`${e}: ${i}`),bn(i))return new R(_.UNAVAILABLE,`${e}: ${i}`);throw i}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Et{constructor(e){this.comparator=e?(t,n)=>e(t,n)||P.comparator(t.key,n.key):(t,n)=>P.comparator(t.key,n.key),this.keyedMap=rn(),this.sortedSet=new ne(this.comparator)}static emptySet(e){return new Et(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Et)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,o=n.getNext().key;if(!r.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Et;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wo{constructor(){this.W_=new ne(P.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):V():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Dt{constructor(e,t,n,r,o,c,l,h,f){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=o,this.fromCache=c,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(e,t,n,r,o){const c=[];return t.forEach(l=>{c.push({type:0,doc:l})}),new Dt(e,t,Et.emptySet(t),c,n,r,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class cf{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class uf{constructor(){this.queries=Qo(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,t){const n=U(e),r=n.queries;n.queries=Qo(),r.forEach((o,c)=>{for(const l of c.j_)l.onError(t)})})(this,new R(_.ABORTED,"Firestore shutting down"))}}function Qo(){return new Ot(i=>Va(i),yi)}async function lf(i,e){const t=U(i);let n=3;const r=e.query;let o=t.queries.get(r);o?!o.H_()&&e.J_()&&(n=2):(o=new cf,n=e.J_()?0:1);try{switch(n){case 0:o.z_=await t.onListen(r,!0);break;case 1:o.z_=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(c){const l=Wr(c,`Initialization of query '${vt(e.query)}' failed`);return void e.onError(l)}t.queries.set(r,o),o.j_.push(e),e.Z_(t.onlineState),o.z_&&e.X_(o.z_)&&Qr(t)}async function hf(i,e){const t=U(i),n=e.query;let r=3;const o=t.queries.get(n);if(o){const c=o.j_.indexOf(e);c>=0&&(o.j_.splice(c,1),o.j_.length===0?r=e.J_()?0:1:!o.H_()&&e.J_()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function df(i,e){const t=U(i);let n=!1;for(const r of e){const o=r.query,c=t.queries.get(o);if(c){for(const l of c.j_)l.X_(r)&&(n=!0);c.z_=r}}n&&Qr(t)}function ff(i,e,t){const n=U(i),r=n.queries.get(e);if(r)for(const o of r.j_)o.onError(t);n.queries.delete(e)}function Qr(i){i.Y_.forEach(e=>{e.next()})}var Tr,Yo;(Yo=Tr||(Tr={})).ea="default",Yo.Cache="cache";class gf{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new Dt(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Dt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Tr.Cache}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pc{constructor(e){this.key=e}}class yc{constructor(e){this.key=e}}class mf{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=q(),this.mutatedKeys=q(),this.Aa=Fa(e),this.Ra=new Et(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new Wo,r=t?t.Ra:this.Ra;let o=t?t.mutatedKeys:this.mutatedKeys,c=r,l=!1;const h=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,f=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((y,I)=>{const C=r.get(y),D=vi(this.query,I)?I:null,x=!!C&&this.mutatedKeys.has(C.key),O=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let L=!1;C&&D?C.data.isEqual(D.data)?x!==O&&(n.track({type:3,doc:D}),L=!0):this.ga(C,D)||(n.track({type:2,doc:D}),L=!0,(h&&this.Aa(D,h)>0||f&&this.Aa(D,f)<0)&&(l=!0)):!C&&D?(n.track({type:0,doc:D}),L=!0):C&&!D&&(n.track({type:1,doc:C}),L=!0,(h||f)&&(l=!0)),L&&(D?(c=c.add(D),o=O?o.add(y):o.delete(y)):(c=c.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),o=o.delete(y.key),n.track({type:1,doc:y})}return{Ra:c,fa:n,ns:l,mutatedKeys:o}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const o=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const c=e.fa.G_();c.sort((y,I)=>function(C,D){const x=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return x(C)-x(D)}(y.type,I.type)||this.Aa(y.doc,I.doc)),this.pa(n),r=r!=null&&r;const l=t&&!r?this.ya():[],h=this.da.size===0&&this.current&&!r?1:0,f=h!==this.Ea;return this.Ea=h,c.length!==0||f?{snapshot:new Dt(this.query,e.Ra,o,c,e.mutatedKeys,h===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Wo,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=q(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new yc(n))}),this.da.forEach(n=>{e.has(n)||t.push(new pc(n))}),t}ba(e){this.Ta=e.Ts,this.da=q();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Dt.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class pf{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class yf{constructor(e){this.key=e,this.va=!1}}class vf{constructor(e,t,n,r,o,c){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Ca={},this.Fa=new Ot(l=>Va(l),yi),this.Ma=new Map,this.xa=new Set,this.Oa=new ne(P.comparator),this.Na=new Map,this.La=new Br,this.Ba={},this.ka=new Map,this.qa=kt.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function wf(i,e,t=!0){const n=Tc(i);let r;const o=n.Fa.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),r=o.view.Da()):r=await vc(n,e,t,!0),r}async function bf(i,e){const t=Tc(i);await vc(t,e,!0,!1)}async function vc(i,e,t,n){const r=await Fd(i.localStore,De(e)),o=r.targetId,c=i.sharedClientState.addLocalQueryTarget(o,t);let l;return n&&(l=await Sf(i,e,o,c==="current",r.resumeToken)),i.isPrimaryClient&&t&&lc(i.remoteStore,r),l}async function Sf(i,e,t,n,r){i.Ka=(I,C,D)=>async function(x,O,L,Y){let K=O.view.ma(L);K.ns&&(K=await zo(x.localStore,O.query,!1).then(({documents:de})=>O.view.ma(de,K)));const ie=Y&&Y.targetChanges.get(O.targetId),se=Y&&Y.targetMismatches.get(O.targetId)!=null,ke=O.view.applyChanges(K,x.isPrimaryClient,ie,se);return Jo(x,O.targetId,ke.wa),ke.snapshot}(i,I,C,D);const o=await zo(i.localStore,e,!0),c=new mf(e,o.Ts),l=c.ma(o.documents),h=En.createSynthesizedTargetChangeForCurrentChange(t,n&&i.onlineState!=="Offline",r),f=c.applyChanges(l,i.isPrimaryClient,h);Jo(i,t,f.wa);const y=new pf(e,t,c);return i.Fa.set(e,y),i.Ma.has(t)?i.Ma.get(t).push(e):i.Ma.set(t,[e]),f.snapshot}async function Ef(i,e,t){const n=U(i),r=n.Fa.get(e),o=n.Ma.get(r.targetId);if(o.length>1)return n.Ma.set(r.targetId,o.filter(c=>!yi(c,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Er(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),t&&jr(n.remoteStore,r.targetId),Ir(n,r.targetId)}).catch(wn)):(Ir(n,r.targetId),await Er(n.localStore,r.targetId,!0))}async function Tf(i,e){const t=U(i),n=t.Fa.get(e),r=t.Ma.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),jr(t.remoteStore,n.targetId))}async function If(i,e,t){const n=xf(i);try{const r=await function(o,c){const l=U(o),h=re.now(),f=c.reduce((C,D)=>C.add(D.key),q());let y,I;return l.persistence.runTransaction("Locally write mutations","readwrite",C=>{let D=Fe(),x=q();return l.cs.getEntries(C,f).next(O=>{D=O,D.forEach((L,Y)=>{Y.isValidDocument()||(x=x.add(L))})}).next(()=>l.localDocuments.getOverlayedDocuments(C,D)).next(O=>{y=O;const L=[];for(const Y of c){const K=$h(Y,y.get(Y.key).overlayedDocument);K!=null&&L.push(new ht(Y.key,K,ka(K.value.mapValue),Oe.exists(!0)))}return l.mutationQueue.addMutationBatch(C,h,L,c)}).next(O=>{I=O;const L=O.applyToLocalDocumentSet(y,x);return l.documentOverlayCache.saveOverlays(C,O.batchId,L)})}).then(()=>({batchId:I.batchId,changes:Ba(y)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new ne(z)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(n,r.batchId,t),await In(n,r.changes),await Ii(n.remoteStore)}catch(r){const o=Wr(r,"Failed to persist write");t.reject(o)}}async function wc(i,e){const t=U(i);try{const n=await Od(t.localStore,e);e.targetChanges.forEach((r,o)=>{const c=t.Na.get(o);c&&(H(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?c.va=!0:r.modifiedDocuments.size>0?H(c.va):r.removedDocuments.size>0&&(H(c.va),c.va=!1))}),await In(t,n,e)}catch(n){await wn(n)}}function Xo(i,e,t){const n=U(i);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Fa.forEach((o,c)=>{const l=c.view.Z_(e);l.snapshot&&r.push(l.snapshot)}),function(o,c){const l=U(o);l.onlineState=c;let h=!1;l.queries.forEach((f,y)=>{for(const I of y.j_)I.Z_(c)&&(h=!0)}),h&&Qr(l)}(n.eventManager,e),r.length&&n.Ca.d_(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function Cf(i,e,t){const n=U(i);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Na.get(e),o=r&&r.key;if(o){let c=new ne(P.comparator);c=c.insert(o,ve.newNoDocument(o,F.min()));const l=q().add(o),h=new Si(F.min(),new Map,new ne(z),c,l);await wc(n,h),n.Oa=n.Oa.remove(o),n.Na.delete(e),Yr(n)}else await Er(n.localStore,e,!1).then(()=>Ir(n,e,t)).catch(wn)}async function _f(i,e){const t=U(i),n=e.batch.batchId;try{const r=await Ld(t.localStore,e);Sc(t,n,null),bc(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await In(t,r)}catch(r){await wn(r)}}async function Af(i,e,t){const n=U(i);try{const r=await function(o,c){const l=U(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(y=>(H(y!==null),f=y.keys(),l.mutationQueue.removeMutationBatch(h,y))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);Sc(n,e,t),bc(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await In(n,r)}catch(r){await wn(r)}}function bc(i,e){(i.ka.get(e)||[]).forEach(t=>{t.resolve()}),i.ka.delete(e)}function Sc(i,e,t){const n=U(i);let r=n.Ba[n.currentUser.toKey()];if(r){const o=r.get(e);o&&(t?o.reject(t):o.resolve(),r=r.remove(e)),n.Ba[n.currentUser.toKey()]=r}}function Ir(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const n of i.Ma.get(e))i.Fa.delete(n),t&&i.Ca.$a(n,t);i.Ma.delete(e),i.isPrimaryClient&&i.La.gr(e).forEach(n=>{i.La.containsKey(n)||Ec(i,n)})}function Ec(i,e){i.xa.delete(e.path.canonicalString());const t=i.Oa.get(e);t!==null&&(jr(i.remoteStore,t),i.Oa=i.Oa.remove(e),i.Na.delete(t),Yr(i))}function Jo(i,e,t){for(const n of t)n instanceof pc?(i.La.addReference(n.key,e),kf(i,n)):n instanceof yc?(M("SyncEngine","Document no longer in limbo: "+n.key),i.La.removeReference(n.key,e),i.La.containsKey(n.key)||Ec(i,n.key)):V()}function kf(i,e){const t=e.key,n=t.path.canonicalString();i.Oa.get(t)||i.xa.has(n)||(M("SyncEngine","New document in limbo: "+t),i.xa.add(n),Yr(i))}function Yr(i){for(;i.xa.size>0&&i.Oa.size<i.maxConcurrentLimboResolutions;){const e=i.xa.values().next().value;i.xa.delete(e);const t=new P(Z.fromString(e)),n=i.qa.next();i.Na.set(n,new yf(t)),i.Oa=i.Oa.insert(t,n),lc(i.remoteStore,new Ge(De(Oa(t.path)),n,"TargetPurposeLimboResolution",Nr.oe))}}async function In(i,e,t){const n=U(i),r=[],o=[],c=[];n.Fa.isEmpty()||(n.Fa.forEach((l,h)=>{c.push(n.Ka(h,e,t).then(f=>{var y;if((f||t)&&n.isPrimaryClient){const I=f?!f.fromCache:(y=t?.targetChanges.get(h.targetId))===null||y===void 0?void 0:y.current;n.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(f){r.push(f);const I=$r.Wi(h.targetId,f);o.push(I)}}))}),await Promise.all(c),n.Ca.d_(r),await async function(l,h){const f=U(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>A.forEach(h,I=>A.forEach(I.$i,C=>f.persistence.referenceDelegate.addReference(y,I.targetId,C)).next(()=>A.forEach(I.Ui,C=>f.persistence.referenceDelegate.removeReference(y,I.targetId,C)))))}catch(y){if(!bn(y))throw y;M("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const I=y.targetId;if(!y.fromCache){const C=f.os.get(I),D=C.snapshotVersion,x=C.withLastLimboFreeSnapshotVersion(D);f.os=f.os.insert(I,x)}}}(n.localStore,o))}async function Df(i,e){const t=U(i);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const n=await oc(t.localStore,e);t.currentUser=e,function(r,o){r.ka.forEach(c=>{c.forEach(l=>{l.reject(new R(_.CANCELLED,o))})}),r.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await In(t,n.hs)}}function Nf(i,e){const t=U(i),n=t.Na.get(e);if(n&&n.va)return q().add(n.key);{let r=q();const o=t.Ma.get(e);if(!o)return r;for(const c of o){const l=t.Fa.get(c);r=r.unionWith(l.view.Va)}return r}}function Tc(i){const e=U(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=wc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nf.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Cf.bind(null,e),e.Ca.d_=df.bind(null,e.eventManager),e.Ca.$a=ff.bind(null,e.eventManager),e}function xf(i){const e=U(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_f.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Af.bind(null,e),e}class fi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ei(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return Md(this.persistence,new xd,e.initialUser,this.serializer)}Ga(e){return new kd(qr.Zr,this.serializer)}Wa(e){return new Bd}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fi.provider={build:()=>new fi};class Cr{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Xo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Df.bind(null,this.syncEngine),await af(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new uf}()}createDatastore(e){const t=Ei(e.databaseInfo.databaseId),n=function(r){return new zd(r)}(e.databaseInfo);return function(r,o,c,l){return new Kd(r,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(t,n,r,o,c){return new Qd(t,n,r,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Xo(this.syncEngine,t,0),function(){return Ho.D()?new Ho:new qd}())}createSyncEngine(e,t){return function(n,r,o,c,l,h,f){const y=new vf(n,r,o,c,l,h);return f&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(n){const r=U(n);M("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await Tn(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Cr.provider={build:()=>new Cr};/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*//**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Rf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ve("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Mf{constructor(e,t,n,r,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=ye.UNAUTHENTICATED,this.clientId=Ca.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,async c=>{M("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(n,c=>(M("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new We;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Wr(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function rr(i,e){i.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let n=t.initialUser;i.setCredentialChangeListener(async r=>{n.isEqual(r)||(await oc(e.localStore,r),n=r)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function Zo(i,e){i.asyncQueue.verifyOperationInProgress();const t=await Lf(i);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(n=>Ko(e.remoteStore,n)),i.setAppCheckTokenChangeListener((n,r)=>Ko(e.remoteStore,r)),i._onlineComponents=e}async function Lf(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await rr(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(n){return n.name==="FirebaseError"?n.code===_.FAILED_PRECONDITION||n.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}(t))throw t;It("Error using user provided cache. Falling back to memory cache: "+t),await rr(i,new fi)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await rr(i,new fi);return i._offlineComponents}async function Ic(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Zo(i,i._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Zo(i,new Cr))),i._onlineComponents}function Of(i){return Ic(i).then(e=>e.syncEngine)}async function Pf(i){const e=await Ic(i),t=e.eventManager;return t.onListen=wf.bind(null,e.syncEngine),t.onUnlisten=Ef.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bf.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Tf.bind(null,e.syncEngine),t}function Vf(i,e,t={}){const n=new We;return i.asyncQueue.enqueueAndForget(async()=>function(r,o,c,l,h){const f=new Rf({next:I=>{f.Za(),o.enqueueAndForget(()=>hf(r,y)),I.fromCache&&l.source==="server"?h.reject(new R(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(I)},error:I=>h.reject(I)}),y=new gf(c,f,{includeMetadataChanges:!0,_a:!0});return lf(r,y)}(await Pf(i),i.asyncQueue,e,t,n)),n.promise}/**
* @license
* Copyright 2023 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Cc(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ea=new Map;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function _c(i,e,t){if(!t)throw new R(_.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function Ff(i,e,t,n){if(e===!0&&n===!0)throw new R(_.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function ta(i){if(!P.isDocumentKey(i))throw new R(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function na(i){if(P.isDocumentKey(i))throw new R(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ci(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":V()}function gi(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new R(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ci(i);throw new R(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}function Uf(i,e){if(e<=0)throw new R(_.INVALID_ARGUMENT,`Function ${i}() requires a positive number, but it was: ${e}.`)}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ia{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new R(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ff("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cc((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new R(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new R(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new R(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(t,n){return t.timeoutSeconds===n.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _i{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ia({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new R(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new R(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ia(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Xl;switch(t.type){case"firstParty":return new th(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new R(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=ea.get(e);t&&(M("ComponentProvider","Removing Datastore"),ea.delete(e),t.terminate())}(this),Promise.resolve()}}function Bf(i,e,t,n={}){var r;const o=(i=gi(i,_i))._getSettings(),c=`${e}:${t}`;if(o.host!=="firestore.googleapis.com"&&o.host!==c&&It("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},o),{host:c,ssl:!1})),n.mockUserToken){let l,h;if(typeof n.mockUserToken=="string")l=n.mockUserToken,h=ye.MOCK_USER;else{l=Nu(n.mockUserToken,(r=i._app)===null||r===void 0?void 0:r.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new R(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new ye(f)}i._authCredentials=new Jl(new Ia(l,h))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Ze{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ze(this.firestore,e,this._query)}}class Ie{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}}class Qe extends Ze{constructor(e,t,n){super(e,t,Oa(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new P(e))}withConverter(e){return new Qe(this.firestore,e,this._path)}}function ra(i,e,...t){if(i=Tt(i),_c("collection","path",e),i instanceof _i){const n=Z.fromString(e,...t);return na(n),new Qe(i,null,n)}{if(!(i instanceof Ie||i instanceof Qe))throw new R(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Z.fromString(e,...t));return na(n),new Qe(i.firestore,null,n)}}function qf(i,e,...t){if(i=Tt(i),arguments.length===1&&(e=Ca.newId()),_c("doc","path",e),i instanceof _i){const n=Z.fromString(e,...t);return ta(n),new Ie(i,null,new P(n))}{if(!(i instanceof Ie||i instanceof Qe))throw new R(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Z.fromString(e,...t));return ta(n),new Ie(i.firestore,i instanceof Qe?i.converter:null,new P(n))}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class sa{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new cc(this,"async_queue_retry"),this.Vu=()=>{const n=ir();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=ir();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ir();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new We;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!bn(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const r=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(n);throw Ve("INTERNAL UNHANDLED ERROR: ",r),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=Kr.createAndSchedule(this,e,t,n,o=>this.yu(o));return this.Tu.push(r),r}fu(){this.Eu&&V()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Xr extends _i{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sa,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sa(e),this._firestoreClient=void 0,await e}}}function $f(i,e){const t=typeof i=="object"?i:Ul(),n=typeof i=="string"?i:"(default)",r=Ol(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const o=ku("firestore");o&&Bf(r,...o)}return r}function Ac(i){if(i._terminated)throw new R(_.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||jf(i),i._firestoreClient}function jf(i){var e,t,n;const r=i._freezeSettings(),o=function(c,l,h,f){return new gh(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Cc(f.experimentalLongPollingOptions),f.useFetchStreams)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,r);i._componentsProvider||!((t=r.localCache)===null||t===void 0)&&t._offlineComponentProvider&&!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider&&(i._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),i._firestoreClient=new Mf(i._authCredentials,i._appCheckCredentials,i._queue,o,i._componentsProvider&&function(c){const l=c?._online.build();return{_offline:c?._offline.build(l),_online:l}}(i._componentsProvider))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(he.fromBase64String(e))}catch(t){throw new R(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nt(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new R(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kc{constructor(e){this._methodName=e}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new R(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new R(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}}/**
* @license
* Copyright 2024 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class es{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(t,n){if(t.length!==n.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==n[r])return!1;return!0}(this._values,e._values)}}/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const zf=/^__.*__$/;class Gf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new ht(e,this.data,this.fieldMask,t,this.fieldTransforms):new Sn(e,this.data,t,this.fieldTransforms)}}function Dc(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class ts{constructor(e,t,n,r,o,c){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ts(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.Ou(e),r}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return mi(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Dc(this.Cu)&&zf.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Hf{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ei(e)}Qu(e,t,n,r=!1){return new ts({Cu:e,methodName:t,qu:n,path:ue.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nc(i){const e=i._freezeSettings(),t=Ei(i._databaseId);return new Hf(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Kf(i,e,t,n,r,o={}){const c=i.Qu(o.merge||o.mergeFields?2:0,e,t,r);Mc("Data must be an object, but it was:",c,n);const l=xc(n,c);let h,f;if(o.merge)h=new _e(c.fieldMask),f=c.fieldTransforms;else if(o.mergeFields){const y=[];for(const I of o.mergeFields){const C=Qf(e,I,t);if(!c.contains(C))throw new R(_.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Xf(y,C)||y.push(C)}h=new _e(y),f=c.fieldTransforms.filter(I=>h.covers(I.field))}else h=null,f=c.fieldTransforms;return new Gf(new Te(l),h,f)}function Wf(i,e,t,n=!1){return ns(t,i.Qu(n?4:3,e))}function ns(i,e){if(Rc(i=Tt(i)))return Mc("Unsupported field value:",e,i),xc(i,e);if(i instanceof kc)return function(t,n){if(!Dc(n.Cu))throw n.Bu(`${t._methodName}() can only be used with update() and set()`);if(!n.path)throw n.Bu(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(n);r&&n.fieldTransforms.push(r)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(t,n){const r=[];let o=0;for(const c of t){let l=ns(c,n.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(i,e)}return function(t,n){if((t=Tt(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Ph(n.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=re.fromDate(t);return{timestampValue:hi(n.serializer,r)}}if(t instanceof re){const r=new re(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:hi(n.serializer,r)}}if(t instanceof Zr)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Nt)return{bytesValue:Za(n.serializer,t._byteString)};if(t instanceof Ie){const r=n.databaseId,o=t.firestore._databaseId;if(!o.isEqual(r))throw n.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ur(t.firestore._databaseId||n.databaseId,t._key.path)}}if(t instanceof es)return function(r,o){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:r.toArray().map(c=>{if(typeof c!="number")throw o.Bu("VectorValues must only contain numeric values.");return Pr(o.serializer,c)})}}}}}}(t,n);throw n.Bu(`Unsupported field value: ${Ci(t)}`)}(i,e)}function xc(i,e){const t={};return _a(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mt(i,(n,r)=>{const o=ns(r,e.Mu(n));o!=null&&(t[n]=o)}),{mapValue:{fields:t}}}function Rc(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof re||i instanceof Zr||i instanceof Nt||i instanceof Ie||i instanceof kc||i instanceof es)}function Mc(i,e,t){if(!Rc(t)||!function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}(t)){const n=Ci(t);throw n==="an object"?e.Bu(i+" a custom object"):e.Bu(i+" "+n)}}function Qf(i,e,t){if((e=Tt(e))instanceof Jr)return e._internalPath;if(typeof e=="string")return Lc(i,e);throw mi("Field path arguments must be of type string or ",i,!1,void 0,t)}const Yf=new RegExp("[~\\*/\\[\\]]");function Lc(i,e,t){if(e.search(Yf)>=0)throw mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Jr(...e.split("."))._internalPath}catch{throw mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function mi(i,e,t,n,r){const o=n&&!n.isEmpty(),c=r!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||c)&&(h+=" (found",o&&(h+=` in field ${n}`),c&&(h+=` in document ${r}`),h+=")"),new R(_.INVALID_ARGUMENT,l+i+h)}function Xf(i,e){return i.some(t=>t.isEqual(e))}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Oc{constructor(e,t,n,r,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Jf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(is("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Jf extends Oc{data(){return super.data()}}function is(i,e){return typeof e=="string"?Lc(i,e):e instanceof Jr?e._internalPath:e._delegate._internalPath}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Zf(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new R(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rs{}class ss extends rs{}function eg(i,e,...t){let n=[];e instanceof rs&&n.push(e),n=n.concat(t),function(r){const o=r.filter(l=>l instanceof as).length,c=r.filter(l=>l instanceof os).length;if(o>1||o>0&&c>0)throw new R(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const r of n)i=r._apply(i);return i}class os extends ss{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new os(e,t,n)}_apply(e){const t=this._parse(e);return Pc(e._query,t),new Ze(e.firestore,e.converter,yr(e._query,t))}_parse(e){const t=Nc(e.firestore);return function(n,r,o,c,l,h,f){let y;if(l.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new R(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){aa(f,h);const I=[];for(const C of f)I.push(oa(c,n,C));y={arrayValue:{values:I}}}else y=oa(c,n,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||aa(f,h),y=Wf(o,r,f,h==="in"||h==="not-in");return te.create(l,h,y)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class as extends rs{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new as(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Ae.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(n,r){let o=n;const c=r.getFlattenedFilters();for(const l of c)Pc(o,l),o=yr(o,l)}(e._query,t),new Ze(e.firestore,e.converter,yr(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cs extends ss{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new cs(e,t)}_apply(e){const t=function(n,r,o){if(n.startAt!==null)throw new R(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(n.endAt!==null)throw new R(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pn(r,o)}(e._query,this._field,this._direction);return new Ze(e.firestore,e.converter,function(n,r){const o=n.explicitOrderBy.concat([r]);return new Lt(n.path,n.collectionGroup,o,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}(e._query,t))}}function tg(i,e="asc"){const t=e,n=is("orderBy",i);return cs._create(n,t)}class us extends ss{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new us(e,t,n)}_apply(e){return new Ze(e.firestore,e.converter,ci(e._query,this._limit,this._limitType))}}function ng(i){return Uf("limit",i),us._create("limit",i,"F")}function oa(i,e,t){if(typeof(t=Tt(t))=="string"){if(t==="")throw new R(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pa(e)&&t.indexOf("/")!==-1)throw new R(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Z.fromString(t));if(!P.isDocumentKey(n))throw new R(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Ao(i,new P(n))}if(t instanceof Ie)return Ao(i,t._key);throw new R(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ci(t)}.`)}function aa(i,e){if(!Array.isArray(i)||i.length===0)throw new R(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Pc(i,e){const t=function(n,r){for(const o of n)for(const c of o.getFlattenedFilters())if(r.indexOf(c.op)>=0)return c.op;return null}(i.filters,function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new R(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new R(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class ig{convertValue(e,t="none"){switch(lt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return J(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ut(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw V()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Mt(e,(r,o)=>{n[r]=this.convertValue(o,t)}),n}convertVectorValue(e){var t,n,r;const o=(r=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||r===void 0?void 0:r.map(c=>J(c.doubleValue));return new es(o)}convertGeoPoint(e){return new Zr(J(e.latitude),J(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Rr(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(fn(e));default:return null}}convertTimestamp(e){const t=Xe(e);return new re(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Z.fromString(e);H(sc(n));const r=new gn(n.get(1),n.get(3)),o=new P(n.popFirst(5));return r.isEqual(t)||Ve(`Document ${o} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function rg(i,e,t){let n;return n=i?i.toFirestore(e):e,n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Wn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sg extends Oc{constructor(e,t,n,r,o,c){super(e,t,n,r,c),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ni(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(is("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ni extends sg{data(e={}){return super.data(e)}}class og{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Wn(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new ni(this._firestore,this._userDataWriter,n.key,n,new Wn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new R(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(n,r){if(n._snapshot.oldDocs.isEmpty()){let o=0;return n._snapshot.docChanges.map(c=>{const l=new ni(n._firestore,n._userDataWriter,c.doc.key,c.doc,new Wn(n._snapshot.mutatedKeys.has(c.doc.key),n._snapshot.fromCache),n.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(c=>r||c.type!==3).map(c=>{const l=new ni(n._firestore,n._userDataWriter,c.doc.key,c.doc,new Wn(n._snapshot.mutatedKeys.has(c.doc.key),n._snapshot.fromCache),n.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:ag(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ag(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}class cg extends ig{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,t)}}function ug(i){i=gi(i,Ze);const e=gi(i.firestore,Xr),t=Ac(e),n=new cg(e);return Zf(i._query),Vf(t,i._query).then(r=>new og(e,n,i,r))}function lg(i,e){const t=gi(i.firestore,Xr),n=qf(i),r=rg(i.converter,e);return hg(t,[Kf(Nc(i.firestore),"addDoc",n._key,r,i.converter!==null,{}).toMutation(n._key,Oe.exists(!1))]).then(()=>n)}function hg(i,e){return function(t,n){const r=new We;return t.asyncQueue.enqueueAndForget(async()=>If(await Of(t),n,r)),r.promise}(Ac(i),e)}(function(i,e=!0){(function(t){Rt=t})(Fl),si(new ln("firestore",(t,{instanceIdentifier:n,options:r})=>{const o=t.getProvider("app").getImmediate(),c=new Xr(new Zl(t.getProvider("auth-internal")),new ih(t.getProvider("app-check-internal")),function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new R(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gn(l.options.projectId,h)}(o,n),o);return r=Object.assign({useFetchStreams:e},r),c._setSettings(r),c},"PUBLIC").setMultipleInstances(!0)),St(Eo,"4.7.3",i),St(Eo,"4.7.3","esm2017")})();var dg=Object.defineProperty,fg=(i,e,t)=>e in i?dg(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,N=(i,e,t)=>fg(i,typeof e!="symbol"?e+"":e,t);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const ze={initialHealth:5,visitorSpawnInterval:7e3,visitorLifetime:5e3,darkModeInterval:4e4,darkModeDuration:2e4},_r={elf:"/images/elf.png",human:"/images/human.png",org:"/images/org.png",goblin:"/images/goblin.png",gandalf:"/images/gandalf.png",sauron:"/images/sauron.png",ring:"/images/ring.png",gollum:"/images/gollum.png",heart:"/images/heart.png"},gg={hotel1:"/images/hotel1.png",hotel2:"/images/hotel2.png",hotel3:"/images/hotel3.png",hotel4:"/images/hotel4.png"},mg={background:"/sounds/lotr.mp3",bad:"/sounds/bad-sound.mp3",good:"/sounds/good-sound.mp3",gollum:"/sounds/gollum-sound.mp3",gandalf:"/sounds/gandalf-sound.mp3",sauron:"/sounds/sauron-sound.mp3",ring:"/sounds/ring-sound.mp3"},je={goodVisitor:10,badVisitor:-10,specialCharacter:100,specialCharacterPenalty:-20},Qn={badVisitor:-1,specialCharacter:-2},yt={PAUSE:" ",ESCAPE:"Escape",RESTART:"r",MUTE:"m"};class pg{constructor(){N(this,"state","menu"),N(this,"score",0),N(this,"health",ze.initialHealth),N(this,"userName",""),N(this,"hasRing",!1),N(this,"currentSide","good"),N(this,"isDarkMode",!1),N(this,"visitorCounts",{elf:0,human:0,org:0,goblin:0}),N(this,"goodWins",[]),N(this,"darkWins",[])}getState(){return this.state}setState(e){this.state=e}getScore(){return this.score}addScore(e){this.score+=e}getHealth(){return this.health}setHealth(e){this.health=Math.max(0,e)}addHealth(e){this.health=Math.max(0,this.health+e)}getUserName(){return this.userName}setUserName(e){this.userName=e.trim().toUpperCase()}hasTheRing(){return this.hasRing}setRing(e){this.hasRing=e}getCurrentSide(){return this.currentSide}setCurrentSide(e){this.currentSide=e}isDarkModeActive(){return this.isDarkMode}setDarkMode(e){this.isDarkMode=e,this.currentSide=e?"evil":"good"}getVisitorCounts(){return{...this.visitorCounts}}incrementVisitorCount(e){this.visitorCounts[e]++}getGoodWins(){return[...this.goodWins]}addGoodWin(e){this.goodWins.push(e)}removeGoodWin(e){const t=this.goodWins.indexOf(e);t>-1&&this.goodWins.splice(t,1)}getDarkWins(){return[...this.darkWins]}addDarkWin(e){this.darkWins.push(e)}removeDarkWin(e){const t=this.darkWins.indexOf(e);t>-1&&this.darkWins.splice(t,1)}reset(){this.state="menu",this.score=0,this.health=ze.initialHealth,this.userName="",this.hasRing=!1,this.currentSide="good",this.isDarkMode=!1,this.visitorCounts={elf:0,human:0,org:0,goblin:0},this.goodWins=[],this.darkWins=[]}}class yg{constructor(){N(this,"events",new Map)}on(e,t){this.events.has(e)||this.events.set(e,[]),this.events.get(e).push(t)}off(e,t){const n=this.events.get(e);if(n){const r=n.indexOf(t);r>-1&&n.splice(r,1)}}emit(e,...t){const n=this.events.get(e);n&&n.forEach(r=>r(...t))}clear(){this.events.clear()}}class vg{constructor(){N(this,"audioElements",new Map),N(this,"config",{backgroundVolume:.3,effectsVolume:1,muted:!1}),this.initializeAudio()}initializeAudio(){Object.entries(mg).forEach(([e,t])=>{const n=new Audio(t);e==="background"?(n.loop=!0,n.volume=this.config.backgroundVolume):n.volume=this.config.effectsVolume,this.audioElements.set(e,n)})}async play(e){if(this.config.muted||e!=="background"&&this.config.effectsVolume===0)return;const t=this.audioElements.get(e);if(t)try{t.currentTime=0,await t.play()}catch(n){console.warn(`Audio playback failed for ${e}. User interaction may be required.`,n),e==="background"&&document.addEventListener("click",()=>{t.play().catch(()=>{})},{once:!0})}}stop(e){const t=this.audioElements.get(e);t&&(t.pause(),t.currentTime=0)}setVolume(e,t){const n=this.audioElements.get(e);n&&(n.volume=Math.max(0,Math.min(1,t)))}setBackgroundVolume(e){this.config.backgroundVolume=Math.max(0,Math.min(1,e));const t=this.audioElements.get("background");t&&(t.volume=this.config.backgroundVolume)}setEffectsVolume(e){this.config.effectsVolume=Math.max(0,Math.min(1,e)),this.audioElements.forEach((t,n)=>{n!=="background"&&(t.volume=this.config.effectsVolume)})}mute(){this.config.muted=!0,this.audioElements.forEach(e=>e.pause())}unmute(){this.config.muted=!1}toggleMute(){return this.config.muted=!this.config.muted,this.config.muted&&this.audioElements.forEach(e=>e.pause()),this.config.muted}isMuted(){return this.config.muted}setEffectsEnabled(e){e||this.audioElements.forEach((t,n)=>{n!=="background"&&(t.pause(),t.currentTime=0)}),this.config.effectsVolume=e?1:0}getConfig(){return{...this.config}}updateConfig(e){this.config={...this.config,...e},e.backgroundVolume!==void 0&&this.setBackgroundVolume(e.backgroundVolume),e.effectsVolume!==void 0&&this.setEffectsVolume(e.effectsVolume)}cleanup(){this.audioElements.forEach(e=>{e.pause(),e.src=""}),this.audioElements.clear()}}class wg{constructor(){N(this,"app",null),N(this,"db",null),N(this,"initialized",!1),this.initialize()}initialize(){try{const e={apiKey:"AIzaSyBJ9aJ0Uw7CtfszGxi9zr5n79k650gpYo4",authDomain:"hotel-middle-earth.firebaseapp.com",projectId:"hotel-middle-earth",storageBucket:"hotel-middle-earth.appspot.com",messagingSenderId:"285009011754",appId:"1:285009011754:web:9567a429298ed847d14f53"};if(!e.apiKey||!e.projectId){console.warn("Firebase configuration is missing. Leaderboard features will be disabled.");return}this.app=ma(e),this.db=$f(this.app),this.initialized=!0}catch(e){console.error("Failed to initialize Firebase:",e)}}async saveScore(e){if(!this.initialized||!this.db)return console.warn("Firebase not initialized. Score not saved."),!1;if(!e.userName||e.userName.trim()==="")return console.error("Invalid username. Score not saved."),!1;try{const t={userName:e.userName,score:e.score,timestamp:Date.now()};return await lg(ra(this.db,"users"),t),!0}catch(t){return console.error("Error saving score:",t),!1}}async getTopScores(e=10){if(!this.initialized||!this.db)return console.warn("Firebase not initialized. Cannot fetch scores."),[];try{const t=eg(ra(this.db,"users"),tg("score","desc"),ng(e)),n=await ug(t),r=[];return n.forEach(o=>{const c=o.data();r.push({userName:c.userName,score:c.score,timestamp:c.timestamp})}),r}catch(t){return console.error("Error fetching top scores:",t),[]}}isInitialized(){return this.initialized}}const rt={SETTINGS:"hme_settings",HIGH_SCORE:"hme_high_score",TUTORIAL_SHOWN:"hme_tutorial_shown"};class bg{constructor(){N(this,"isAvailable"),this.isAvailable=this.checkStorageAvailability()}checkStorageAvailability(){try{const e="__storage_test__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return!1}}saveSettings(e){if(this.isAvailable)try{localStorage.setItem(rt.SETTINGS,JSON.stringify(e))}catch(t){console.error("Failed to save settings:",t)}}loadSettings(){if(!this.isAvailable)return null;try{const e=localStorage.getItem(rt.SETTINGS);return e?JSON.parse(e):null}catch(e){return console.error("Failed to load settings:",e),null}}saveHighScore(e){if(this.isAvailable)try{const t=this.loadHighScore();e>t&&localStorage.setItem(rt.HIGH_SCORE,e.toString())}catch(t){console.error("Failed to save high score:",t)}}loadHighScore(){if(!this.isAvailable)return 0;try{const e=localStorage.getItem(rt.HIGH_SCORE);return e?parseInt(e,10):0}catch(e){return console.error("Failed to load high score:",e),0}}setTutorialShown(e){if(this.isAvailable)try{localStorage.setItem(rt.TUTORIAL_SHOWN,e.toString())}catch(t){console.error("Failed to save tutorial status:",t)}}isTutorialShown(){if(!this.isAvailable)return!1;try{return localStorage.getItem(rt.TUTORIAL_SHOWN)==="true"}catch(e){return console.error("Failed to load tutorial status:",e),!1}}clear(){if(this.isAvailable)try{Object.values(rt).forEach(e=>{localStorage.removeItem(e)})}catch(e){console.error("Failed to clear storage:",e)}}}function Yn(i,e){return Math.floor(Math.random()*(e-i+1))+i}function B(i,e){const t=document.createElement(i);return e?.id&&(t.id=e.id),e?.className&&(t.className=e.className),e?.textContent&&(t.textContent=e.textContent),e?.innerHTML&&(t.innerHTML=e.innerHTML),e?.attributes&&Object.entries(e.attributes).forEach(([n,r])=>{t.setAttribute(n,r)}),e?.styles&&Object.assign(t.style,e.styles),t}function Sg(i){return i.requestFullscreen?i.requestFullscreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen():i.mozRequestFullScreen?i.mozRequestFullScreen():i.msRequestFullscreen?i.msRequestFullscreen():Promise.reject(new Error("Fullscreen not supported"))}class Eg{constructor(e=!1){N(this,"type"),N(this,"position"),N(this,"domElement"),N(this,"targetPosition",{x:0,y:0}),N(this,"animationFrameId",null),N(this,"hasRing"),this.hasRing=e,this.position={x:Yn(10,80),y:Yn(25,75)},this.type=this.determineType(),this.domElement=this.createDomElement()}determineType(){const e=Yn(1,100);if(e<=3&&!this.hasRing)return"ring";if(e>=4&&e<=6)return"sauron";if(e>=7&&e<=9)return"gandalf";if(e>=10&&e<=29)return"gollum";const t=Yn(1,4);return["elf","human","org","goblin"][t-1]}createDomElement(){const e=document.createElement("img");return e.id="visitor",e.className=this.type,e.src=_r[this.type],e.style.position="absolute",e.style.left=`${this.position.x}vw`,e.style.bottom=`${this.position.y}vh`,e.style.transition="all 0.3s ease-out",e.style.cursor="pointer",e.setAttribute("role","button"),e.setAttribute("aria-label",`${this.type} visitor`),e.setAttribute("tabindex","0"),e}setTargetPosition(e){const t={human:{good:{x:55,y:0},evil:{x:0,y:0}},elf:{good:{x:88,y:0},evil:{x:22,y:0}},goblin:{good:{x:55,y:0},evil:{x:0,y:0}},org:{good:{x:88,y:0},evil:{x:25,y:0}},sauron:{good:{x:25,y:0},evil:{x:25,y:0}},gandalf:{good:{x:55,y:0},evil:{x:55,y:0}},ring:{good:{x:58,y:5},evil:{x:28,y:5}},gollum:{good:{x:55,y:0},evil:{x:25,y:0}}};this.targetPosition=e?t[this.type].evil:t[this.type].good}startMoving(e){this.setTargetPosition(e);const t=()=>{const n=this.targetPosition.x-this.position.x,r=this.targetPosition.y-this.position.y;(Math.abs(n)>.1||Math.abs(r)>.1)&&(this.position.x+=n*.5*.02,this.position.y+=r*.5*.02,this.domElement.style.left=`${this.position.x}vw`,this.domElement.style.bottom=`${this.position.y}vh`,this.animationFrameId=requestAnimationFrame(t))};this.animationFrameId=requestAnimationFrame(t)}stopMoving(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}destroy(){this.stopMoving(),this.domElement.parentElement&&this.domElement.remove()}}class Tg{constructor(e){N(this,"containerElement"),this.containerElement=this.createContainer(),e.appendChild(this.containerElement),this.createHotels()}createContainer(){const e=document.createElement("div");return e.id="hotel-container",e.style.position="absolute",e.style.width="100vw",e.style.height="20vh",e.style.bottom="0",e}createHotels(){[{id:"hotel1",left:"0"},{id:"hotel2",left:"25vw"},{id:"hotel3",left:"50vw"},{id:"hotel4",right:"0vw"}].forEach(({id:e,left:t,right:n})=>{const r=document.createElement("img");r.id=e,r.src=gg[e],r.style.position="absolute",r.style.height="20vh",r.style.width="auto",r.setAttribute("alt",`${e} building`),t?r.style.left=t:n&&(r.style.right=n),this.containerElement.appendChild(r)})}destroy(){this.containerElement.parentElement&&this.containerElement.remove()}}class Ig{constructor(e){N(this,"scoreDisplay"),N(this,"healthDisplay"),N(this,"ringDisplay"),N(this,"parentElement"),this.parentElement=e,this.scoreDisplay=this.createScoreDisplay(),this.healthDisplay=this.createHealthDisplay(),this.ringDisplay=this.createRingDisplay()}createScoreDisplay(){const e=B("span",{id:"scoreDisplay",textContent:"Score: 0",styles:{color:"#fff",position:"absolute",right:"1vw",fontSize:"1.5vw",textAlign:"center",top:"1vh"}});return this.parentElement.appendChild(e),e}createHealthDisplay(){const e=B("span",{id:"healthDisplay",styles:{marginLeft:"1vw",color:"#fff",textAlign:"center",fontSize:"2vw",position:"absolute",top:"1vh",left:"0"}});return this.parentElement.appendChild(e),e}createRingDisplay(){const e=B("span",{id:"ringDisplay",styles:{position:"absolute",top:"1vh",left:"50vw",transform:"translateX(-50%)"}});return this.parentElement.appendChild(e),e}updateScore(e){this.scoreDisplay.textContent=`Score: ${e}`}updateHealth(e){const t=B("img",{id:"heart-image",attributes:{src:_r.heart,alt:"health indicator"},styles:{width:"auto",height:"3vh",marginTop:"1vh"}});this.healthDisplay.innerHTML="",this.healthDisplay.appendChild(t),this.healthDisplay.appendChild(document.createTextNode(` ${e}`))}updateRing(e,t,n){if(this.ringDisplay.innerHTML="",e){const r=B("img",{id:"ring-image",attributes:{src:_r.ring,alt:"the one ring",role:"button",tabindex:"0"},styles:{width:"2vw",height:"auto",cursor:"pointer",paddingTop:"1vh"}});n&&(r.addEventListener("click",n),r.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),n())})),this.ringDisplay.appendChild(r)}}showInfo(e,t=2e3){const n=B("p",{id:"info-text",innerHTML:e});this.parentElement.appendChild(n),setTimeout(()=>{n.parentElement&&n.remove()},t)}destroy(){this.scoreDisplay.remove(),this.healthDisplay.remove(),this.ringDisplay.remove()}}class Cg{constructor(e,t){N(this,"parentElement"),N(this,"onStart"),N(this,"onInstructions"),N(this,"onShowLeaderboard"),this.parentElement=e,this.onStart=t.onStart,this.onInstructions=t.onInstructions,this.onShowLeaderboard=t.onShowLeaderboard}show(){const e=B("form",{id:"nameForm",innerHTML:`
        <label for="nameInput" id="title">Hotel Middle Earth</label>
        <div class="menu-input-section">
          <input type="text" id="nameInput" placeholder="Please enter your name" required>
          <input id="submit-btn" type="submit" class="submit-btn" value="Start Game">
        </div>
        <div class="menu-buttons">
          <button type="button" id="instructions-button">Instructions</button>
          <button type="button" id="top-scores-button">Top Scores</button>
        </div>
        <div class="menu-social-links">
          <a href="https://utkucikmaz.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <img src="/images/logo/logo.png" alt="Website" class="social-icon">
            <span>Website</span>
          </a>
          <a href="https://github.com/utkucikmaz/Hotel-Middle-Earth" target="_blank" rel="noopener noreferrer" class="social-link">
            <img src="/images/logo/github-icon.svg" alt="GitHub" class="social-icon">
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/utkucikmaz" target="_blank" rel="noopener noreferrer" class="social-link">
            <img src="/images/logo/linkedin-icon.svg" alt="LinkedIn" class="social-icon">
            <span>LinkedIn</span>
          </a>
        </div>
      `});this.parentElement.innerHTML="",this.parentElement.appendChild(e);const t=document.getElementById("instructions-button");t&&t.addEventListener("click",r=>{r.preventDefault(),this.onInstructions&&this.onInstructions()});const n=document.getElementById("top-scores-button");n&&n.addEventListener("click",r=>{r.preventDefault(),this.onShowLeaderboard&&this.onShowLeaderboard()}),e.addEventListener("submit",async r=>{r.preventDefault();const o=document.getElementById("nameInput").value.trim();if(o===""){alert("Please enter a valid name.");return}try{await Sg(this.parentElement)}catch(c){console.warn("Fullscreen not available:",c)}this.onStart&&this.onStart(o)})}hide(){const e=document.getElementById("nameForm");e&&(e.style.display="none")}}class _g{constructor(e,t){N(this,"parentElement"),N(this,"onBack"),this.parentElement=e,this.onBack=t.onBack}show(){const e=B("div",{id:"instructionsContainer",innerHTML:`
        <h1 id="instruction-title">Welcome to the Hotel Middle Earth!</h1>
        <div id="backbutton-container">
          <button id="backButton">Back</button>
        </div>
        <br/>
        <ul id="instruction-list">
          <div id="inst-good">
            <li>In this background collect <img src="./images/elf.png" class="inst-char"> and <img src="./images/human.png" class="inst-char"> to score points.</li>
            <li>Avoid <img src="./images/org.png" class="inst-char"> and <img src="./images/goblin.png" class="inst-char"> to maintain your health.</li>
            <li>Be careful about the <img src="./images/gollum.png" class="inst-char" id="gollum-inst"> if you have the <img src="./images/ring.png" class="inst-char" id="ring-inst">, he is a filthy thief.</li>
            <li>If you serve <img src="./images/sauron.png" class="inst-char"> you lose double health and score.</li>
            <li>If you lose all your health before you destroy the ring, the game is over.</li>
            <li>If you find both <img src="./images/ring.png" class="inst-char" id="ring-inst"> and <img src="./images/gandalf.png" class="inst-char">, <img src="./images/hotel3.png" class="inst-char"> wins!</li>
          </div>
          <div id="inst-bad">
            <li>Eye mode will activate periodically, be cautious!</li>
            <li>Now you must obey <img src="./images/sauron.png" class="inst-char"> and collect <img src="./images/org.png" class="inst-char"> and <img src="./images/goblin.png" class="inst-char">.</li>
            <li>Even though you serve <img src="./images/sauron.png" class="inst-char">, <img src="./images/gollum.png" class="inst-char" id="gollum-inst"> is still a thief.</li>
            <li>If you serve <img src="./images/gandalf.png" class="inst-char"> you lose double health and score.</li>
            <li>If you lose all your health before you destroy the ring, the game is over.</li>
            <li>If you find both <img src="./images/ring.png" class="inst-char" id="ring-inst"> and <img src="./images/sauron.png" class="inst-char">, <img src="./images/hotel2.png" class="inst-char"> wins!</li>
          </div>
        </ul>
      `});this.parentElement.innerHTML="",this.parentElement.appendChild(e);const t=e.querySelector("#backButton");t&&this.onBack&&t.addEventListener("click",this.onBack)}hide(){const e=document.getElementById("instructionsContainer");e&&e.remove()}}class Ag{constructor(e,t){N(this,"parentElement"),N(this,"onRestart"),N(this,"onShowLeaderboard"),this.parentElement=e,this.onRestart=t.onRestart,this.onShowLeaderboard=t.onShowLeaderboard}show(e,t,n){this.parentElement.innerHTML="";let r;e==="defeat"?r=this.createDefeatScreen(t,n):e==="gandalf"?r=this.createGandalfWinScreen(t,n):r=this.createSauronWinScreen(t,n),this.parentElement.appendChild(r),this.setupEventListeners(r)}createDefeatScreen(e,t){const n=B("img",{className:"over-gif",attributes:{src:"./images/over.gif",alt:"ring couldn't be destroyed"}}),r=B("p",{className:"game-over",id:"game-over-id",innerHTML:`
        <p class="over-title">${e} couldn't destroy the ring.</p>
        <p>I don't say it was ${e}'s fault, but only ${t}?</p>
        <p>Middle Earth needs better fighters</p>
      `});return r.insertBefore(n,r.firstChild),this.addButtons(r),r}createGandalfWinScreen(e,t){const n=B("img",{id:"gandalf-won",attributes:{src:"./images/gandalf-won.gif",alt:"a beautiful image of gandalf"}}),r=B("p",{className:"gandalf-class",id:"game-over-id",innerHTML:`
        <p class="over-title">Now Middle Earth is Free!!</p>
        <div id="gandalf-info-container">
          <p>Gandalf has really come on time as he promised to Aragorn</p>
          <p><i>"Look to my coming on the first light of the fifth day, at dawn look to the east..."</i></p>
          <p>${e} helped Gandalf and all his friends during the wars.</p>
          <p>${e} found ${t} soldiers and ran to the heart of the enemy.</p>
        </div>
      `});return r.insertBefore(n,r.firstChild),this.addButtons(r),r}createSauronWinScreen(e,t){const n=B("img",{id:"sauron-won",attributes:{src:"./images/sauron-won.gif",alt:"a powerful image of sauron"}}),r=B("p",{className:"sauron-class",id:"game-over-id",innerHTML:`
        <p class="over-title">Sauron took the Middle Earth over.</p>
        <div class="sauron-info-container">
          <p>Now everyone must obey the dark lord.</p>
          <p>${e} served Sauron loyally...</p>
          <p>Sauron gave ${e} ${t} soldiers to invade more!</p>
          <br/>
        </div>
      `});return r.insertBefore(n,r.firstChild),this.addButtons(r),r}addButtons(e){const t=B("button",{id:"players-button",textContent:"Top Players"}),n=B("p",{className:"restart",textContent:"Press space to restart"});e.appendChild(t),e.appendChild(n)}setupEventListeners(e){const t=e.querySelector("#players-button");t&&this.onShowLeaderboard&&t.addEventListener("click",this.onShowLeaderboard);const n=r=>{r.key===" "&&this.onRestart&&(r.preventDefault(),document.removeEventListener("keydown",n),this.onRestart())};document.addEventListener("keydown",n)}hide(){const e=document.getElementById("game-over-id");e&&e.remove()}}class kg{constructor(e,t){N(this,"parentElement"),N(this,"onBack"),this.parentElement=e,this.onBack=t.onBack}show(e,t){const n=B("div",{id:"topPlayersContainer"}),r=B("p",{textContent:"Top Players",className:"top-players-title"});n.appendChild(r);const o=B("ol",{className:"player-list"});if(e.length===0){const h=B("li",{textContent:"No scores yet. Be the first!",styles:{listStyle:"none"}});o.appendChild(h)}else e.forEach(h=>{const f=B("li",{textContent:`${h.userName}: ${h.score}`});o.appendChild(f)});n.appendChild(o);const c=B("button",{textContent:"Back",className:"back-button"}),l=t??this.onBack;l&&c.addEventListener("click",l),n.appendChild(c),this.parentElement.innerHTML="",this.parentElement.appendChild(n)}hide(){const e=document.getElementById("topPlayersContainer");e&&e.remove()}}class Dg{constructor(e,t){N(this,"parentElement"),N(this,"container",null),N(this,"onResume"),N(this,"onRestart"),N(this,"onSettings"),this.parentElement=e,this.onResume=t.onResume,this.onRestart=t.onRestart,this.onSettings=t.onSettings}show(){if(this.container)return;this.container=B("div",{id:"pauseMenu",styles:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(0, 0, 0, 0.9)",padding:"3rem",borderRadius:"1rem",zIndex:"1000",textAlign:"center",minWidth:"300px"}});const e=B("h2",{textContent:"Game Paused",styles:{color:"#fff",marginBottom:"2rem",fontSize:"2rem"}});this.container.appendChild(e);const t={display:"block",width:"100%",padding:"1rem",margin:"0.5rem 0",fontSize:"1rem",backgroundColor:"transparent",color:"#fff",border:"2px solid #fff",borderRadius:"5px",cursor:"pointer"},n=B("button",{textContent:"Resume (Space)",styles:t});n.addEventListener("click",()=>this.onResume?.()),this.container.appendChild(n);const r=B("button",{textContent:"Restart (R)",styles:t});r.addEventListener("click",()=>this.onRestart?.()),this.container.appendChild(r);const o=B("button",{textContent:"Settings",styles:t});o.addEventListener("click",()=>this.onSettings?.()),this.container.appendChild(o),this.parentElement.appendChild(this.container)}hide(){this.container&&(this.container.remove(),this.container=null)}isVisible(){return this.container!==null}}class Ng{constructor(e,t,n,r){N(this,"parentElement"),N(this,"container",null),N(this,"audioService"),N(this,"onClose"),N(this,"onApply"),N(this,"config"),this.parentElement=e,this.audioService=t,this.config={...n},this.onClose=r.onClose,this.onApply=r.onApply}show(){if(this.container)return;this.container=B("div",{id:"settingsMenu",styles:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(0, 0, 0, 0.95)",padding:"3rem",borderRadius:"1rem",zIndex:"2000",minWidth:"400px",maxWidth:"500px",border:"2px solid rgba(255, 255, 255, 0.3)",boxShadow:"0 8px 32px rgba(0, 0, 0, 0.8)"}});const e=B("h2",{textContent:"Settings",styles:{color:"#fff",marginBottom:"2rem",fontSize:"2rem",textAlign:"center",borderBottom:"2px solid rgba(255, 255, 255, 0.2)",paddingBottom:"1rem"}});this.container.appendChild(e);const t=this.createSection("Audio Settings");this.container.appendChild(t);const n=this.createToggle("Background Music",this.config.musicEnabled,C=>{this.config.musicEnabled=C,C?this.audioService.unmute():this.audioService.mute()});t.appendChild(n);const r=this.createToggle("Sound Effects",this.config.soundEffectsEnabled,C=>{this.config.soundEffectsEnabled=C,this.audioService.setEffectsEnabled(C)});t.appendChild(r);const o=this.createSlider("Music Volume",Math.round(this.config.musicVolume*100),0,100,5,C=>{this.config.musicVolume=C/100,this.audioService.setBackgroundVolume(this.config.musicVolume)});t.appendChild(o);const c=this.createSlider("Effects Volume",Math.round(this.config.effectsVolume*100),0,100,5,C=>{this.config.effectsVolume=C/100,this.audioService.setEffectsVolume(this.config.effectsVolume)});t.appendChild(c);const l=this.createSection("Game Settings");this.container.appendChild(l);const h=this.createSlider("Characters Per Wave",this.config.spawnCount,4,12,1,C=>{this.config.spawnCount=C});l.appendChild(h);const f=B("div",{styles:{display:"flex",gap:"1rem",marginTop:"2rem"}}),y=B("button",{textContent:"Apply",styles:{flex:"1",padding:"1rem",fontSize:"1rem",backgroundColor:"#27ae60",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold"}});y.addEventListener("click",()=>{this.hide(),this.onApply?.(this.config)}),y.addEventListener("mouseenter",()=>{y.style.backgroundColor="#2ecc71"}),y.addEventListener("mouseleave",()=>{y.style.backgroundColor="#27ae60"});const I=B("button",{textContent:"Close",styles:{flex:"1",padding:"1rem",fontSize:"1rem",backgroundColor:"transparent",color:"#fff",border:"2px solid #fff",borderRadius:"5px",cursor:"pointer"}});I.addEventListener("click",()=>{this.hide(),this.onClose?.()}),I.addEventListener("mouseenter",()=>{I.style.backgroundColor="rgba(255, 255, 255, 0.1)"}),I.addEventListener("mouseleave",()=>{I.style.backgroundColor="transparent"}),f.appendChild(y),f.appendChild(I),this.container.appendChild(f),this.parentElement.appendChild(this.container)}createSection(e){const t=B("div",{styles:{marginBottom:"1.5rem"}}),n=B("h3",{textContent:e,styles:{color:"#fff",fontSize:"1.2rem",marginBottom:"1rem",opacity:"0.8"}});return t.appendChild(n),t}createToggle(e,t,n){const r=B("div",{styles:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",padding:"0.5rem"}}),o=B("label",{textContent:e,styles:{color:"#fff",fontSize:"1rem"}}),c=B("button",{textContent:t?"ON":"OFF",styles:{padding:"0.5rem 1.5rem",fontSize:"0.9rem",backgroundColor:t?"#27ae60":"#e74c3c",color:"#fff",border:"none",borderRadius:"5px",cursor:"pointer",minWidth:"70px",fontWeight:"bold"}});return c.addEventListener("click",()=>{const l=c.textContent==="OFF";c.textContent=l?"ON":"OFF",c.style.backgroundColor=l?"#27ae60":"#e74c3c",n(l)}),r.appendChild(o),r.appendChild(c),r}createSlider(e,t,n,r,o,c){const l=B("div",{styles:{marginBottom:"1rem",padding:"0.5rem"}}),h=B("div",{styles:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"}}),f=B("label",{textContent:e,styles:{color:"#fff",fontSize:"1rem"}}),y=B("span",{textContent:String(t),styles:{color:"#27ae60",fontSize:"1rem",fontWeight:"bold",minWidth:"30px",textAlign:"right"}});h.appendChild(f),h.appendChild(y);const I=document.createElement("input");return I.type="range",I.min=String(n),I.max=String(r),I.step=String(o),I.value=String(t),I.style.width="100%",I.style.cursor="pointer",I.addEventListener("input",()=>{const C=parseInt(I.value);y.textContent=String(C),c(C)}),l.appendChild(h),l.appendChild(I),l}hide(){this.container&&(this.container.remove(),this.container=null)}isVisible(){return this.container!==null}updateConfig(e){this.config={...e}}}class xg{constructor(e){N(this,"particles",[]),N(this,"container"),this.container=e}createClickEffect(e,t,n){const r={good:["#27ae60","#2ecc71","#3498db"],bad:["#e74c3c","#c0392b","#e67e22"],special:["#f39c12","#f1c40f","#e67e22","#ffd700"]},o=n==="special"?20:12,c=r[n];for(let l=0;l<o;l++){const h=document.createElement("div");h.className="particle";const f=Math.PI*2*l/o,y=50+Math.random()*50,I=n==="special"?8+Math.random()*4:4+Math.random()*4,C=c[Math.floor(Math.random()*c.length)];h.style.cssText=`
        position: absolute;
        left: ${e}px;
        top: ${t}px;
        width: ${I}px;
        height: ${I}px;
        background: ${C};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        box-shadow: 0 0 10px ${C};
      `,this.container.appendChild(h),this.particles.push(h);const D=Math.cos(f)*y,x=Math.sin(f)*y;this.animateParticle(h,e,t,D,x)}}animateParticle(e,t,n,r,o){let c=0;const l=60,h=()=>{c++;const f=c/l,y=t+r*f,I=n+o*f+f*f*100,C=1-f,D=1-f*.5;if(e.style.left=`${y}px`,e.style.top=`${I}px`,e.style.opacity=`${C}`,e.style.transform=`scale(${D})`,c<l)requestAnimationFrame(h);else{e.remove();const x=this.particles.indexOf(e);x>-1&&this.particles.splice(x,1)}};requestAnimationFrame(h)}createScorePopup(e,t,n,r){const o=document.createElement("div");o.className="score-popup",o.textContent=`${r?"+":""}${n}`,o.style.cssText=`
      position: absolute;
      left: ${e}px;
      top: ${t}px;
      font-size: 2rem;
      font-weight: bold;
      color: ${r?"#27ae60":"#e74c3c"};
      text-shadow: 0 0 10px ${r?"#27ae60":"#e74c3c"};
      pointer-events: none;
      z-index: 1000;
      animation: scoreFloat 1s ease-out forwards;
    `,this.container.appendChild(o),setTimeout(()=>{o.remove()},1e3)}cleanup(){this.particles.forEach(e=>e.remove()),this.particles=[]}}const Vc=document.createElement("style");Vc.textContent=`
  @keyframes scoreFloat {
    0% {
      opacity: 1;
      transform: translateY(0) scale(0.5);
    }
    50% {
      opacity: 1;
      transform: translateY(-30px) scale(1.2);
    }
    100% {
      opacity: 0;
      transform: translateY(-60px) scale(0.8);
    }
  }

  .particle {
    transition: opacity 0.3s ease;
  }
`;document.head.appendChild(Vc);class Rg{constructor(e){N(this,"gameState"),N(this,"eventManager"),N(this,"audioService"),N(this,"firebaseService"),N(this,"storageService"),N(this,"parentElement"),N(this,"visitors",[]),N(this,"hotel",null),N(this,"hud",null),N(this,"particleEffect"),N(this,"menu"),N(this,"instructions"),N(this,"gameOver"),N(this,"leaderboard"),N(this,"pauseMenu"),N(this,"settings"),N(this,"settingsConfig",{musicEnabled:!0,soundEffectsEnabled:!0,spawnCount:8,musicVolume:.3,effectsVolume:1}),N(this,"visitorSpawnInterval",null),N(this,"visitorCleanupTimeout",null),N(this,"darkModeInterval",null),N(this,"darkModeTimeout",null),N(this,"cycleInterval",null),this.parentElement=e,this.gameState=new pg,this.eventManager=new yg,this.audioService=new vg,this.firebaseService=new wg,this.storageService=new bg,this.particleEffect=new xg(e),this.menu=new Cg(e,{onStart:t=>this.startGame(t),onInstructions:()=>this.showInstructions(),onShowLeaderboard:()=>this.showLeaderboardFromMenu()}),this.instructions=new _g(e,{onBack:()=>this.showMenu()}),this.gameOver=new Ag(e,{onRestart:()=>this.restart(),onShowLeaderboard:()=>this.showLeaderboard()}),this.leaderboard=new kg(e,{onBack:()=>this.restart()}),this.pauseMenu=new Dg(e,{onResume:()=>this.resumeGame(),onRestart:()=>this.restart(),onSettings:()=>this.showSettings()}),this.settings=new Ng(e,this.audioService,this.settingsConfig,{onClose:()=>this.resumeGame(),onApply:t=>this.applySettings(t)}),this.setupKeyboardControls(),this.showMenu()}setupKeyboardControls(){document.addEventListener("keydown",e=>{this.gameState.getState()==="playing"?e.key===yt.PAUSE||e.key===yt.ESCAPE?(e.preventDefault(),this.pauseGame()):e.key===yt.MUTE&&(e.preventDefault(),this.audioService.toggleMute()):this.gameState.getState()==="paused"&&(e.key===yt.PAUSE||e.key===yt.ESCAPE?(e.preventDefault(),this.resumeGame()):e.key===yt.RESTART&&(e.preventDefault(),this.restart()))})}showMenu(){this.cleanup(),this.gameState.setState("menu"),this.menu.show()}showInstructions(){this.instructions.show()}async startGame(e){this.gameState.setUserName(e),this.gameState.setState("playing"),this.menu.hide(),this.parentElement.style.backgroundImage="url('/images/bcg.jpg')",this.hotel=new Tg(this.parentElement),this.hud=new Ig(this.parentElement),this.updateHUD(),this.audioService.play("background"),this.startVisitorCycle()}startVisitorCycle(){const e=()=>{this.spawnVisitors(),this.visitorCleanupTimeout=window.setTimeout(()=>{this.cleanupVisitors()},ze.visitorLifetime)};e(),this.visitorSpawnInterval=window.setInterval(e,ze.visitorSpawnInterval),this.darkModeTimeout=window.setTimeout(()=>{this.toggleDarkMode()},ze.darkModeDuration),this.cycleInterval=window.setInterval(()=>{e(),this.darkModeTimeout=window.setTimeout(()=>{this.toggleDarkMode()},ze.darkModeDuration)},ze.darkModeInterval)}spawnVisitors(){const e=this.settingsConfig.spawnCount;for(let t=0;t<e;t++){const n=new Eg(this.gameState.hasTheRing());this.visitors.push(n),this.parentElement.appendChild(n.domElement),n.domElement.addEventListener("pointerdown",r=>{r.preventDefault(),this.handleVisitorClick(n)}),n.domElement.addEventListener("keydown",r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this.handleVisitorClick(n))})}}cleanupVisitors(){this.visitors.forEach(e=>e.destroy()),this.visitors=[]}toggleDarkMode(){const e=!this.gameState.isDarkModeActive();this.gameState.setDarkMode(e),this.parentElement.style.backgroundImage=e?"url('/images/dark-bcg.jpg')":"url('/images/bcg.jpg')",e&&(this.darkModeTimeout=window.setTimeout(()=>{this.toggleDarkMode()},ze.darkModeDuration))}handleVisitorClick(e){if(this.gameState.getState()!=="playing")return;const t=this.gameState.isDarkModeActive(),n=e.domElement.getBoundingClientRect(),r=n.left+n.width/2,o=n.top+n.height/2;t?this.handleVisitorClickEvil(e):this.handleVisitorClickGood(e);const c=e.type;c==="gandalf"||c==="sauron"||c==="ring"?this.particleEffect.createClickEffect(r,o,"special"):(c==="human"||c==="elf")&&!t||(c==="org"||c==="goblin")&&t?this.particleEffect.createClickEffect(r,o,"good"):this.particleEffect.createClickEffect(r,o,"bad"),e.startMoving(t),this.updateHUD(),this.checkGameEnd()}handleVisitorClickGood(e){const t=e.type;t==="human"||t==="elf"?(this.gameState.addScore(je.goodVisitor),this.audioService.play("good")):t==="org"||t==="goblin"?(this.gameState.addScore(je.badVisitor),this.gameState.addHealth(Qn.badVisitor),this.audioService.play("bad")):t==="gandalf"&&this.gameState.getGoodWins().includes("ring")?(this.audioService.play("gandalf"),this.gameState.addScore(je.specialCharacter),this.gameState.addGoodWin("gandalf"),this.endGame("gandalf")):t==="ring"&&this.gameState.getGoodWins().length===0?(this.audioService.play("ring"),this.gameState.setCurrentSide("good"),this.gameState.addGoodWin("ring"),this.gameState.setRing(!0),this.hud?.showInfo("You captured the Ring. Find Gandalf to destroy it.")):t==="gollum"&&this.gameState.getGoodWins().includes("ring")?(this.gameState.removeGoodWin("ring"),this.gameState.setRing(!1),this.audioService.play("gollum"),this.hud?.showInfo("Gollum stole your Ring!")):t==="gollum"&&this.gameState.getDarkWins().includes("ring")?(this.gameState.removeDarkWin("ring"),this.gameState.setRing(!1),this.audioService.play("gollum"),this.hud?.showInfo("Gollum stole your Ring!")):t==="sauron"?(this.audioService.play("sauron"),this.gameState.addScore(je.specialCharacterPenalty),this.gameState.addHealth(Qn.specialCharacter),this.hud?.showInfo("The power of Sauron is limited on this side.")):t==="gandalf"&&!this.gameState.getGoodWins().includes("ring")?(this.audioService.play("gandalf"),this.hud?.showInfo("You should find the Ring before Gandalf!")):t==="gollum"&&this.hud?.showInfo("You don't have the Ring, Gollum run away.")}handleVisitorClickEvil(e){const t=e.type;t==="org"||t==="goblin"?(this.gameState.addScore(je.goodVisitor),this.audioService.play("bad")):t==="human"||t==="elf"?(this.gameState.addScore(je.badVisitor),this.gameState.addHealth(Qn.badVisitor),this.audioService.play("good")):t==="sauron"&&this.gameState.getDarkWins().includes("ring")?(this.audioService.play("sauron"),this.gameState.addScore(je.specialCharacter),this.gameState.addDarkWin("sauron"),this.endGame("sauron")):t==="ring"&&this.gameState.getDarkWins().length===0?(this.audioService.play("ring"),this.gameState.setCurrentSide("evil"),this.gameState.addDarkWin("ring"),this.gameState.setRing(!0),this.hud?.showInfo("You captured the Ring. Find Sauron to rule the Middle Earth!")):t==="gollum"&&this.gameState.getDarkWins().includes("ring")?(this.gameState.removeDarkWin("ring"),this.gameState.setRing(!1),this.audioService.play("gollum"),this.hud?.showInfo("Gollum stole your Ring!")):t==="gollum"&&this.gameState.getGoodWins().includes("ring")?(this.gameState.removeGoodWin("ring"),this.gameState.setRing(!1),this.audioService.play("gollum"),this.hud?.showInfo("Gollum stole your Ring!")):t==="gandalf"?(this.audioService.play("gandalf"),this.gameState.addScore(je.specialCharacterPenalty),this.gameState.addHealth(Qn.specialCharacter),this.hud?.showInfo("The power of Gandalf is limited on this side.")):t==="sauron"&&!this.gameState.getDarkWins().includes("ring")?(this.audioService.play("sauron"),this.hud?.showInfo("You should find the Ring before Sauron!")):t==="gollum"&&this.hud?.showInfo("You don't have the Ring, Gollum run away.")}updateHUD(){this.hud&&(this.hud.updateScore(this.gameState.getScore()),this.hud.updateHealth(this.gameState.getHealth()),this.hud.updateRing(this.gameState.hasTheRing(),this.gameState.isDarkModeActive(),()=>{const e=this.gameState.getCurrentSide()==="good"?"The ring is captured by Minas Tirith, find Gandalf":"The ring is captured by Mordor, find Sauron";this.hud?.showInfo(e)}))}checkGameEnd(){this.gameState.getHealth()<=0&&this.endGame("defeat")}async endGame(e){this.gameState.setState("gameOver"),this.stopAllIntervals(),this.cleanupVisitors(),this.audioService.stop("background"),await this.firebaseService.saveScore({userName:this.gameState.getUserName(),score:this.gameState.getScore()}),this.storageService.saveHighScore(this.gameState.getScore()),this.gameOver.show(e,this.gameState.getUserName(),this.gameState.getScore())}pauseGame(){this.gameState.getState()==="playing"&&(this.gameState.setState("paused"),this.stopAllIntervals(),this.audioService.stop("background"),this.pauseMenu.show())}resumeGame(){this.gameState.getState()==="paused"&&(this.gameState.setState("playing"),this.audioService.play("background"),this.pauseMenu.hide(),this.startVisitorCycle(),document.fullscreenElement===null&&this.parentElement.requestFullscreen().catch(e=>{console.warn("Could not enter fullscreen:",e)}))}showSettings(){this.settings.show()}applySettings(e){this.settingsConfig={...e},e.musicEnabled?this.audioService.unmute():this.audioService.mute(),this.audioService.setEffectsEnabled(e.soundEffectsEnabled),this.audioService.setBackgroundVolume(e.musicVolume),this.audioService.setEffectsVolume(e.effectsVolume),this.hud?.showInfo(`Settings applied! Spawning ${e.spawnCount} characters per wave.`,2e3),this.resumeGame()}async showLeaderboard(){const e=await this.firebaseService.getTopScores(10);this.leaderboard.show(e)}async showLeaderboardFromMenu(){const e=await this.firebaseService.getTopScores(10);this.leaderboard.show(e,()=>this.showMenu())}restart(){this.cleanup(),this.gameState.reset(),window.location.reload()}stopAllIntervals(){this.visitorSpawnInterval&&(clearInterval(this.visitorSpawnInterval),this.visitorSpawnInterval=null),this.visitorCleanupTimeout&&(clearTimeout(this.visitorCleanupTimeout),this.visitorCleanupTimeout=null),this.darkModeInterval&&(clearInterval(this.darkModeInterval),this.darkModeInterval=null),this.darkModeTimeout&&(clearTimeout(this.darkModeTimeout),this.darkModeTimeout=null),this.cycleInterval&&(clearInterval(this.cycleInterval),this.cycleInterval=null)}cleanup(){this.stopAllIntervals(),this.cleanupVisitors(),this.hotel?.destroy(),this.hud?.destroy(),this.pauseMenu.hide(),this.particleEffect.cleanup(),this.hotel=null,this.hud=null}destroy(){this.cleanup(),this.audioService.cleanup(),this.eventManager.clear()}}document.addEventListener("DOMContentLoaded",()=>{const i=()=>{const t=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${t}px`)};i(),window.addEventListener("resize",i),window.addEventListener("orientationchange",i);const e=document.getElementById("board");if(!e){console.error("Board element not found!");return}new Rg(e)});
//# sourceMappingURL=index-6cnZggs-.js.map
