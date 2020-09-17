var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function l(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function c(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function s(){return f(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){t.value=null==n?"":n}let g;function m(t){g=t}const $=[],b=[],y=[],v=[],_=Promise.resolve();let k=!1;function x(t){y.push(t)}let w=!1;const E=new Set;function L(){if(!w){w=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];m(n),S(n.$$)}for(m(null),$.length=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];E.has(n)||(E.add(n),n())}y.length=0}while($.length);for(;v.length;)v.pop()();k=!1,w=!1,E.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const T=new Set;function A(t,n){-1===t.$$.dirty[0]&&($.push(t),k||(k=!0,_.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(r,a,c,i,f,s,d=[-1]){const h=g;m(r);const p=a.props||{},$=r.$$={fragment:null,ctx:null,props:s,update:t,not_equal:f,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let b=!1;if($.ctx=c?c(r,p,(t,n,...e)=>{const o=e.length?e[0]:n;return $.ctx&&f($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),b&&A(r,t)),n}):[],$.update(),b=!0,o($.before_update),$.fragment=!!i&&i($.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);$.fragment&&$.fragment.l(t),t.forEach(u)}else $.fragment&&$.fragment.c();a.intro&&((y=r.$$.fragment)&&y.i&&(T.delete(y),y.i(v))),function(t,e,r){const{fragment:a,on_mount:c,on_destroy:u,after_update:i}=t.$$;a&&a.m(e,r),x(()=>{const e=c.map(n).filter(l);u?u.push(...e):o(e),t.$$.on_mount=[]}),i.forEach(x)}(r,a.target,a.anchor),L()}var y,v;m(h)}function j(t,n,e){const o=t.slice();return o[7]=n[e],o[8]=n,o[9]=e,o}function N(t){let n,e,l,r,f,g,m,$,b,y,v,_;function k(){t[2].call(l,t[8],t[9])}function x(){t[3].call(g,t[8],t[9])}function w(){t[4].call(b,t[8],t[9])}return{c(){n=i("tr"),e=i("td"),l=i("input"),r=s(),f=i("td"),g=i("input"),m=s(),$=i("td"),b=i("input"),y=s(),h(l,"type","tel"),h(l,"class","form-control svelte-1vl1drf"),h(e,"class","svelte-1vl1drf"),h(g,"type","tel"),h(g,"class","form-control svelte-1vl1drf"),h(g,"placeholder","1"),h(f,"class","svelte-1vl1drf"),h(b,"type","tel"),h(b,"class","form-control svelte-1vl1drf"),b.readOnly=!0,h($,"class","svelte-1vl1drf")},m(o,u){c(o,n,u),a(n,e),a(e,l),p(l,t[7].harga),a(n,r),a(n,f),a(f,g),p(g,t[7].banyak),a(n,m),a(n,$),a($,b),p(b,t[7].total_formatted),a(n,y),v||(_=[d(l,"input",k),d(g,"input",x),d(b,"input",w)],v=!0)},p(n,e){t=n,1&e&&p(l,t[7].harga),1&e&&p(g,t[7].banyak),1&e&&p(b,t[7].total_formatted)},d(t){t&&u(n),v=!1,o(_)}}}function B(n){let e,o,l,r,d,p,g,m,$,b=n[1].toLocaleString("id")+"",y=n[0],v=[];for(let t=0;t<y.length;t+=1)v[t]=N(j(n,y,t));return{c(){e=i("table"),o=i("thead"),o.innerHTML="<tr><th>Harga</th> \n   <th>Banyak</th> \n   <th>Total</th></tr>",l=s(),r=i("tbody");for(let t=0;t<v.length;t+=1)v[t].c();d=s(),p=i("div"),g=i("div"),m=f("Total: "),$=f(b),h(r,"class","svelte-1vl1drf"),h(e,"class","table table-bordered svelte-1vl1drf"),h(g,"class","btn btn-light btn-lg"),h(p,"class","tombol svelte-1vl1drf")},m(t,n){c(t,e,n),a(e,o),a(e,l),a(e,r);for(let t=0;t<v.length;t+=1)v[t].m(r,null);c(t,d,n),c(t,p,n),a(p,g),a(g,m),a(g,$)},p(t,[n]){if(1&n){let e;for(y=t[0],e=0;e<y.length;e+=1){const o=j(t,y,e);v[e]?v[e].p(o,n):(v[e]=N(o),v[e].c(),v[e].m(r,null))}for(;e<v.length;e+=1)v[e].d(1);v.length=y.length}2&n&&b!==(b=t[1].toLocaleString("id")+"")&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}($,b)},i:t,o:t,d(t){t&&u(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(v,t),t&&u(d),t&&u(p)}}}function C(t,n,e){let o=[{harga:null,banyak:null,total:null,total_formatted:""}],l=0;return t.$$.update=()=>{1&t.$$.dirty&&null!=o[o.length-1].harga&&e(0,o=[...o,{harga:null,banyak:null,total:null,total_formatted:""}]),1&t.$$.dirty&&o.map(t=>{let n;n=null==t.banyak?1:t.banyak,t.total=t.harga*n}),1&t.$$.dirty&&o.map(t=>t.total_formatted=t.total.toLocaleString("id")),1&t.$$.dirty&&e(1,l=o.reduce((t,n)=>t+n.total,0))},[o,l,function(t,n){t[n].harga=this.value,e(0,o)},function(t,n){t[n].banyak=this.value,e(0,o)},function(t,n){t[n].total_formatted=this.value,e(0,o)}]}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,C,B,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
