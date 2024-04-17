import{b as j,f as D}from"./entry.f68164cd.js";import{a as v,a1 as A,Y as z,b as F,u as k,g as U,e as H,r as M}from"./swiper-vue.2993ddf4.js";const R=()=>null;function T(...s){var l;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[r,t,e={}]=s;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??R,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const a=j(),o=()=>a.isHydrating?a.payload.data[r]:a.static.data[r],c=()=>o()!==void 0;a._asyncData[r]||(a._asyncData[r]={data:v(o()??((l=e.default)==null?void 0:l.call(e))??null),pending:v(!c()),error:v(a.payload._errors[r]?D(a.payload._errors[r]):null)});const i={...a._asyncData[r]};i.refresh=i.execute=(p={})=>{if(a._asyncDataPromises[r]){if(p.dedupe===!1)return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if(p._initial&&c())return o();i.pending.value=!0;const _=new Promise((u,y)=>{try{u(t(a))}catch(B){y(B)}}).then(u=>{if(_.cancelled)return a._asyncDataPromises[r];let y=u;e.transform&&(y=e.transform(u)),e.pick&&(y=E(y,e.pick)),i.data.value=y,i.error.value=null}).catch(u=>{var y;if(_.cancelled)return a._asyncDataPromises[r];i.error.value=u,i.data.value=k(((y=e.default)==null?void 0:y.call(e))??null)}).finally(()=>{_.cancelled||(i.pending.value=!1,a.payload.data[r]=i.data.value,i.error.value&&(a.payload._errors[r]=D(i.error.value)),delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=_,a._asyncDataPromises[r]};const f=()=>i.refresh({_initial:!0}),h=e.server!==!1&&a.payload.serverRendered;{const p=U();if(p&&!p._nuxtOnBeforeMountCbs){p._nuxtOnBeforeMountCbs=[];const u=p._nuxtOnBeforeMountCbs;p&&(A(()=>{u.forEach(y=>{y()}),u.splice(0,u.length)}),z(()=>u.splice(0,u.length)))}h&&a.isHydrating&&c()?i.pending.value=!1:p&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?p._nuxtOnBeforeMountCbs.push(f):e.immediate&&f(),e.watch&&F(e.watch,()=>i.refresh());const _=a.hook("app:data:refresh",u=>{if(!u||u.includes(r))return i.refresh()});p&&z(_)}const d=Promise.resolve(a._asyncDataPromises[r]).then(()=>i);return Object.assign(d,i),d}function E(s,n){const r={};for(const t of n)r[t]=s[t];return r}const L={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function N(s,n={}){n={...L,...n};const r=P(n);return r.dispatch(s),r.toString()}function P(s){const n=[];let r=[];const t=e=>{n.push(e)};return{toString(){return n.join("")},getContext(){return r},dispatch(e){return s.replacer&&(e=s.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){const a=/\[object (.*)]/i,o=Object.prototype.toString.call(e),c=a.exec(o),i=c?c[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let f=null;if((f=r.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+f+"]");if(r.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")if(this["_"+i])this["_"+i](e);else{if(s.ignoreUnknown)return t("["+i+"]");throw new Error('Unknown object type "'+i+'"')}else{let h=Object.keys(e);s.unorderedObjects&&(h=h.sort()),s.respectType!==!1&&!C(e)&&h.splice(0,0,"prototype","__proto__","letructor"),s.excludeKeys&&(h=h.filter(function(d){return!s.excludeKeys(d)})),t("object:"+h.length+":");for(const d of h)this.dispatch(d),t(":"),s.excludeValues||this.dispatch(e[d]),t(",")}},_array(e,a){if(a=typeof a<"u"?a:s.unorderedArrays!==!1,t("array:"+e.length+":"),!a||e.length<=1){for(const i of e)this.dispatch(i);return}const o=[],c=e.map(i=>{const f=P(s);return f.dispatch(i),o.push(f.getContext()),f.toString()});return r=[...r,...o],c.sort(),this._array(c,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),C(e)?this.dispatch("[native]"):this.dispatch(e.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),s.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const a=[...e];return this._array(a,s.unorderedSets!==!1)},_set(e){t("set:");const a=[...e];return this._array(a,s.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(s.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function C(s){return typeof s!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(s))!=null}class S{constructor(n,r){n=this.words=n||[],this.sigBytes=r!==void 0?r:n.length*4}toString(n){return(n||K).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const t=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=t<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new S([...this.words])}}const K={stringify(s){const n=[];for(let r=0;r<s.sigBytes;r++){const t=s.words[r>>>2]>>>24-r%4*8&255;n.push((t>>>4).toString(16),(t&15).toString(16))}return n.join("")}},W={stringify(s){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let t=0;t<s.sigBytes;t+=3){const e=s.words[t>>>2]>>>24-t%4*8&255,a=s.words[t+1>>>2]>>>24-(t+1)%4*8&255,o=s.words[t+2>>>2]>>>24-(t+2)%4*8&255,c=e<<16|a<<8|o;for(let i=0;i<4&&t*8+i*6<s.sigBytes*8;i++)r.push(n.charAt(c>>>6*(3-i)&63))}return r.join("")}},$={parse(s){const n=s.length,r=[];for(let t=0;t<n;t++)r[t>>>2]|=(s.charCodeAt(t)&255)<<24-t%4*8;return new S(r,n)}},I={parse(s){return $.parse(unescape(encodeURIComponent(s)))}};class J{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new S,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=I.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,t=this._data.sigBytes/(this.blockSize*4);n?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,a=Math.min(e*4,this._data.sigBytes);if(e){for(let o=0;o<e;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,e),this._data.sigBytes-=a}return new S(r,a)}}class V extends J{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const Y=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],q=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],b=[];class G extends V{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new S([...Y])}_doProcessBlock(n,r){const t=this._hash.words;let e=t[0],a=t[1],o=t[2],c=t[3],i=t[4],f=t[5],h=t[6],d=t[7];for(let l=0;l<64;l++){if(l<16)b[l]=n[r+l]|0;else{const x=b[l-15],w=(x<<25|x>>>7)^(x<<14|x>>>18)^x>>>3,m=b[l-2],O=(m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10;b[l]=w+b[l-7]+O+b[l-16]}const p=i&f^~i&h,_=e&a^e&o^a&o,u=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),y=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),B=d+y+p+q[l]+b[l],g=u+_;d=h,h=f,f=i,i=c+B|0,c=o,o=a,a=e,e=B+g|0}t[0]=t[0]+e|0,t[1]=t[1]+a|0,t[2]=t[2]+o|0,t[3]=t[3]+c|0,t[4]=t[4]+i|0,t[5]=t[5]+f|0,t[6]=t[6]+h|0,t[7]=t[7]+d|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(t+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Q(s){return new G().finalize(s).toString(W)}function X(s,n={}){const r=typeof s=="string"?s:N(s,n);return Q(r).slice(0,10)}function Z(s,n,r){const[t={},e]=typeof n=="string"?[{},n]:[n,r],a=t.key||X([e,k(t.baseURL),typeof s=="string"?s:"",k(t.params||t.query)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const o=a===e?"$f"+a:a,c=H(()=>{let w=s;return typeof w=="function"&&(w=w()),k(w)}),{server:i,lazy:f,default:h,transform:d,pick:l,watch:p,immediate:_,...u}=t,y=M({...u,cache:typeof t.cache=="boolean"?void 0:t.cache}),B={server:i,lazy:f,default:h,transform:d,pick:l,immediate:_,watch:[y,c,...p||[]]};let g;return T(o,()=>{var m;return(m=g==null?void 0:g.abort)==null||m.call(g),g=typeof AbortController<"u"?new AbortController:{},typeof c.value=="string"&&c.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(c.value,{signal:g.signal,...y})},B)}function rt(s,n,r){const[t,e]=typeof n=="string"?[{},n]:[n,r];return Z(s,{...t,lazy:!0},e)}export{rt as a,Z as u};
