(function(_ds){var window=this;'use strict';var sO=function(){return _ds.T.apply(this,arguments)||this},tO=function(a){_ds.Mg(a);switch(a.getAttribute("type")){case "indeterminate":var b=a.getAttribute("color"),c=document.createElement("div");c.classList.add("devsite-progress--indeterminate");for(var d=1;4>=d;d++){var e=document.createElement("div");e.classList.add("devsite-progress--indeterminate-"+d);!b||1!=d&&3!=d||(e.style.backgroundColor=b);c.appendChild(e)}a.appendChild(c)}};_ds.u(sO,_ds.T);
sO.prototype.connectedCallback=function(){tO(this)};sO.prototype.attributeChangedCallback=function(a,b,c){b!==c&&tO(this)};_ds.l.Object.defineProperties(sO,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return["color","type"]}}});sO.prototype.attributeChangedCallback=sO.prototype.attributeChangedCallback;sO.prototype.connectedCallback=sO.prototype.connectedCallback;try{window.customElements.define("devsite-progress",sO)}catch(a){console.warn("devsite.app.customElement.DevsiteProgress",a)};})(_ds_www);
