var de=Object.defineProperty;var he=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var F=(e,t,n)=>(he(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function M(){}function fe(e){return e()}function ne(){return Object.create(null)}function O(e){e.forEach(fe)}function ue(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ge(e){return Object.keys(e).length===0}function p(e,t){e.appendChild(t)}function z(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function D(e){return document.createTextNode(e)}function E(){return D(" ")}function me(){return D("")}function pe(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _e(e){return Array.from(e.childNodes)}function ae(e,t){t=""+t,e.data!==t&&(e.data=t)}let W;function C(e){W=e}const k=[],re=[];let L=[];const le=[],ye=Promise.resolve();let U=!1;function we(){U||(U=!0,ye.then(ce))}function G(e){L.push(e)}const K=new Set;let x=0;function ce(){if(x!==0)return;const e=W;do{try{for(;x<k.length;){const t=k[x];x++,C(t),$e(t.$$)}}catch(t){throw k.length=0,x=0,t}for(C(null),k.length=0,x=0;re.length;)re.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];K.has(n)||(K.add(n),n())}L.length=0}while(k.length);for(;le.length;)le.pop()();U=!1,K.clear(),C(e)}function $e(e){if(e.fragment!==null){e.update(),O(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}function be(e){const t=[],n=[];L.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),L=t}const I=new Set;let b;function ve(){b={r:0,c:[],p:b}}function xe(){b.r||O(b.c),b=b.p}function v(e,t){e&&e.i&&(I.delete(e),e.i(t))}function S(e,t,n,r){if(e&&e.o){if(I.has(e))return;I.add(e),b.c.push(()=>{I.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function se(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ke(e,t){S(e,1,1,()=>{t.delete(e.key)})}function Ee(e,t,n,r,s,l,i,d,c,a,m,f){let o=e.length,u=l.length,_=o;const R={};for(;_--;)R[e[_].key]=_;const B=[],q=new Map,H=new Map,Z=[];for(_=u;_--;){const h=f(s,l,_),w=n(h);let $=i.get(w);$?r&&Z.push(()=>$.p(h,t)):($=a(w,h),$.c()),q.set(w,B[_]=$),w in R&&H.set(w,Math.abs(_-R[w]))}const ee=new Set,te=new Set;function V(h){v(h,1),h.m(d,m),i.set(h.key,h),m=h.first,u--}for(;o&&u;){const h=B[u-1],w=e[o-1],$=h.key,T=w.key;h===w?(m=h.first,o--,u--):q.has(T)?!i.has($)||ee.has($)?V(h):te.has(T)?o--:H.get($)>H.get(T)?(te.add($),V(h)):(ee.add(T),o--):(c(w,i),o--)}for(;o--;){const h=e[o];q.has(h.key)||c(h,i)}for(;u;)V(B[u-1]);return O(Z),B}function j(e){e&&e.c()}function N(e,t,n){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),G(()=>{const l=e.$$.on_mount.map(fe).filter(ue);e.$$.on_destroy?e.$$.on_destroy.push(...l):O(l),e.$$.on_mount=[]}),s.forEach(G)}function A(e,t){const n=e.$$;n.fragment!==null&&(be(n.after_update),O(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Le(e,t){e.$$.dirty[0]===-1&&(k.push(e),we(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,r,s,l,i=null,d=[-1]){const c=W;C(e);const a=e.$$={fragment:null,ctx:[],props:l,update:M,not_equal:s,bound:ne(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:ne(),dirty:d,skip_bound:!1,root:t.target||c.$$.root};i&&i(a.root);let m=!1;if(a.ctx=n?n(e,t.props||{},(f,o,...u)=>{const _=u.length?u[0]:o;return a.ctx&&s(a.ctx[f],a.ctx[f]=_)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](_),m&&Le(e,f)),o}):[],a.update(),m=!0,O(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const f=_e(t.target);a.fragment&&a.fragment.l(f),f.forEach(P)}else a.fragment&&a.fragment.c();t.intro&&v(e.$$.fragment),N(e,t.target,t.anchor),ce()}C(c)}class Y{constructor(){F(this,"$$");F(this,"$$set")}$destroy(){A(this,1),this.$destroy=M}$on(t,n){if(!ue(n))return M;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!ge(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Se="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Se);function Me(e){let t,n,r,s,l,i,d,c,a,m,f;return{c(){t=y("li"),n=y("div"),r=y("input"),l=E(),i=y("label"),d=D(e[0]),g(r,"id",s="person-"+e[1]),g(r,"type","checkbox"),g(r,"class","w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"),g(i,"for",c="person-"+e[1]),g(i,"class",a="w-full py-3 ms-2 text-sm font-medium "+e[3]),g(n,"class","flex items-center ps-3"),g(t,"class","w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600")},m(o,u){z(o,t,u),p(t,n),p(n,r),r.checked=e[2],p(n,l),p(n,i),p(i,d),m||(f=pe(r,"change",e[4]),m=!0)},p(o,[u]){u&2&&s!==(s="person-"+o[1])&&g(r,"id",s),u&4&&(r.checked=o[2]),u&1&&ae(d,o[0]),u&2&&c!==(c="person-"+o[1])&&g(i,"for",c),u&8&&a!==(a="w-full py-3 ms-2 text-sm font-medium "+o[3])&&g(i,"class",a)},i:M,o:M,d(o){o&&P(t),m=!1,f()}}}function Oe(e,t,n){let r,{value:s}=t,{index:l}=t,i=!1;function d(){i=this.checked,n(2,i)}return e.$$set=c=>{"value"in c&&n(0,s=c.value),"index"in c&&n(1,l=c.index)},e.$$.update=()=>{e.$$.dirty&4&&n(3,r=i?"text-blue-600":"text-gray-900")},[s,l,i,r,d]}class Ce extends Y{constructor(t){super(),X(this,t,Oe,Me,J,{value:0,index:1})}}function ie(e,t,n){const r=e.slice();return r[2]=t[n],r[4]=n,r}function oe(e,t){let n,r,s;return r=new Ce({props:{value:t[2],index:t[4]}}),{key:e,first:null,c(){n=me(),j(r.$$.fragment),this.first=n},m(l,i){z(l,n,i),N(r,l,i),s=!0},p(l,i){t=l;const d={};i&2&&(d.value=t[2]),i&2&&(d.index=t[4]),r.$set(d)},i(l){s||(v(r.$$.fragment,l),s=!0)},o(l){S(r.$$.fragment,l),s=!1},d(l){l&&P(n),A(r,l)}}}function Ne(e){let t,n,r,s,l,i=[],d=new Map,c,a=se(e[1]);const m=f=>f[2];for(let f=0;f<a.length;f+=1){let o=ie(e,a,f),u=m(o);d.set(u,i[f]=oe(u,o))}return{c(){t=y("div"),n=y("h3"),r=D(e[0]),s=E(),l=y("ul");for(let f=0;f<i.length;f+=1)i[f].c();g(n,"class","font-semibold text-gray-900 dark:text-white"),g(l,"class","text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"),g(t,"class","flex flex-col m-4")},m(f,o){z(f,t,o),p(t,n),p(n,r),p(t,s),p(t,l);for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(l,null);c=!0},p(f,[o]){(!c||o&1)&&ae(r,f[0]),o&2&&(a=se(f[1]),ve(),i=Ee(i,o,m,1,f,a,d,l,ke,oe,null,ie),xe())},i(f){if(!c){for(let o=0;o<a.length;o+=1)v(i[o]);c=!0}},o(f){for(let o=0;o<i.length;o+=1)S(i[o]);c=!1},d(f){f&&P(t);for(let o=0;o<i.length;o+=1)i[o].d()}}}function Ae(e,t,n){let{title:r="Title"}=t,{values:s=[]}=t;return e.$$set=l=>{"title"in l&&n(0,r=l.title),"values"in l&&n(1,s=l.values)},[r,s]}class Q extends Y{constructor(t){super(),X(this,t,Ae,Ne,J,{title:0,values:1})}}function Pe(e){let t,n,r,s,l,i,d,c,a,m,f,o;return l=new Q({props:{values:e[0],title:"Quien?"}}),d=new Q({props:{values:e[1],title:"Con que?"}}),a=new Q({props:{values:e[2],title:"Donde?"}}),{c(){t=y("div"),n=y("header"),n.innerHTML='<img src="/images/clue.png" alt="title" class=""/>',r=E(),s=y("main"),j(l.$$.fragment),i=E(),j(d.$$.fragment),c=E(),j(a.$$.fragment),m=E(),f=y("footer"),f.innerHTML='<h3 class="italic">Creado por Roger Diaz B.</h3>',g(n,"class","flex flex-col"),g(s,"class","grow"),g(f,"class","flex content-center bg-blue-700 text-gray-300 p-2"),g(t,"class","flex flex-col min-h-screen")},m(u,_){z(u,t,_),p(t,n),p(t,r),p(t,s),N(l,s,null),p(s,i),N(d,s,null),p(s,c),N(a,s,null),p(t,m),p(t,f),o=!0},p:M,i(u){o||(v(l.$$.fragment,u),v(d.$$.fragment,u),v(a.$$.fragment,u),o=!0)},o(u){S(l.$$.fragment,u),S(d.$$.fragment,u),S(a.$$.fragment,u),o=!1},d(u){u&&P(t),A(l),A(d),A(a)}}}function Be(e){return[["Verduzco","Mostaza","Marlene","Moradillo","Escarlata","Blanca"],["Candelabro","Daga","Tubo de plomo","Revolver","Soga","Llave inglesa"],["Salon de baile","Sala de billar","Terraza","Comedor","Pasillo","Cocina","Biblioteca","Sala","Estudio"]]}class Te extends Y{constructor(t){super(),X(this,t,Be,Pe,J,{})}}new Te({target:document.getElementById("app")});
