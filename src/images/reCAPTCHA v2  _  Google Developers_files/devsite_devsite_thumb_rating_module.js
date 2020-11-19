(function(_ds){var window=this;'use strict';var LT=function(a){var b=a.ip;a=a.jp;b='<div class="devsite-thumb-rating" role="form" aria-labelledby="devsite-thumb-label" tabindex="0"><div class="devsite-thumb-label" id="devsite-thumb-label">Rate and review'+('</div><div class="devsite-thumbs">'+KT({label:a.label,mc:a.mc,type:a.type})+KT({label:b.label,mc:b.mc,type:b.type})+"</div></div>");return(0,_ds.W)(b)},KT=function(a){var b=a.label,c=a.mc;a=a.type;var d;_ds.ap(a,"thumb-down-filled")?d=(0,_ds.W)('<path d="M3,17h6.31l-0.95,4.57l-0.03,0.32c0,0.41,0.17,0.79,0.44,1.06L9.83,24c0,0,7.09-6.85,7.17-7V4H6C5.17,4,4.46,4.5,4.16,5.22 l-3.02,7.05C1.05,12.5,1,12.74,1,13v2C1,16.1,1.9,17,3,17z"></path><path d="M19,17h4V4h-4V17L19,17z"></path>'):
_ds.ap(a,"thumb-down-outline")?d=(0,_ds.W)('<path d="M3,17h6.31l-0.95,4.57l-0.03,0.32c0,0.41,0.17,0.79,0.44,1.06L9.83,24c0,0,7.09-6.85,7.17-7h5V4H6 C5.17,4,4.46,4.5,4.16,5.22l-3.02,7.05C1.05,12.5,1,12.74,1,13v2C1,16.1,1.9,17,3,17z M17,6h3v9h-3V6z M3,13l3-7h9v10l-4.34,4.34 L12,15H3V13z"></path>'):_ds.ap(a,"thumb-up-filled")?d=(0,_ds.W)('<path d="M21,7h-6.31l0.95-4.57l0.03-0.32c0-0.41-0.17-0.79-0.44-1.06L14.17,0c0,0-7.09,6.85-7.17,7v13h11c0.83,0,1.54-0.5,1.84-1.22 l3.02-7.05C22.95,11.5,23,11.26,23,11V9C23,7.9,22.1,7,21,7z"></path><path d="M5,7H1v13h4V7L5,7z"></path>'):
_ds.ap(a,"thumb-up-outline")?d=(0,_ds.W)('<path d="M21,7h-6.31l0.95-4.57l0.03-0.32c0-0.41-0.17-0.79-0.44-1.06L14.17,0c0,0-7.09,6.85-7.17,7H2v13h16 c0.83,0,1.54-0.5,1.84-1.22l3.02-7.05C22.95,11.5,23,11.26,23,11V9C23,7.9,22.1,7,21,7z M7,18H4V9h3V18z M21,11l-3,7H9V8l4.34-4.34 L12,9h9V11z"></path>'):d="";return(0,_ds.W)('<button class="devsite-thumb '+_ds.Z(c)+'" data-title="'+_ds.Z(b)+'" aria-label="'+_ds.Z(b)+'"><svg class="devsite-thumb-icon" viewBox="0 0 24 24" aria-hidden="true">'+d+"</svg></button>")},
MT=function(a){var b=a.kc;a='<devsite-dialog class="devsite-thumb-rating-dialog" id="'+_ds.Z(a.mf)+'"><div class="devsite-dialog-contents"><h3 class="no-link" tabindex="-1">';a+='What is the reason for your feedback?</h3><form class="devsite-thumb-rating-categories">';for(var c=b.length,d=0;d<c;d++){var e=b[d];a+='<div class="devsite-thumb-rating-category"><input type="radio" name="'+_ds.Z(e.type)+'" id="'+_ds.Z(e.id)+'"><label for="'+_ds.Z(e.id)+'">'+_ds.Y(e.label)+"</label></div>"}return(0,_ds.W)(a+
'</form></div><div class="devsite-dialog-buttons"><button type="submit" class="button button-primary devsite-thumb-rating-submit" disabled>Submit</button><button type="button" class="button devsite-dialog-close">Cancel</button></div></devsite-dialog>')},NT=function(){return(0,_ds.W)('<devsite-dialog class="devsite-thumb-rating-dialog" id="devsite-thumb-thank-you-dialog"><div class="devsite-dialog-contents"><h3 class="no-link">Thank you for your feedback.</h3></div><div class="devsite-dialog-buttons"><button type="button" class="button button-primary devsite-dialog-close">Dismiss</button></div></devsite-dialog>')},
OT=function(){return(0,_ds.W)('<svg class="material-icons devsite-feedback-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"></path></svg>')},PT=function(){var a=_ds.T.call(this,["devsite-snackbar","devsite-dialog"])||this;a.eventHandler=new _ds.Bj;a.ib=null;a.m=null;a.o=[];a.h=null;a.C=[];a.j=null;return a},UT=function(a){a.eventHandler.listen(a,"click",function(b){b=
b.target;if(null===b||void 0===b?0:b.classList.contains("devsite-thumb-up"))QT(a,"thumb-down-outline","thumb-up-filled"),a.j=RT(a,a.C,"devsite-thumb-up-dialog","thumb-up"),a.setAttribute("rating","up"),ST(a,"Page rated helpful."),a.j.setAttribute("open",""),TT(a,"thumb-up");else if(null===b||void 0===b?0:b.classList.contains("devsite-thumb-down"))QT(a,"thumb-down-filled","thumb-up-outline"),a.h=RT(a,a.o,"devsite-thumb-down-dialog","thumb-down"),a.setAttribute("rating","down"),ST(a,"Page rated not helpful."),
a.h.setAttribute("open",""),TT(a,"thumb-down")})},ST=function(a,b){a.dispatchEvent(new CustomEvent("devsite-show-custom-snackbar-msg",{detail:{msg:b,showClose:!1},bubbles:!0}))},QT=function(a,b,c){_ds.Lp(a,LT,{ip:{mc:"devsite-thumb-down",label:"Not helpful",type:b},jp:{mc:"devsite-thumb-up",label:"Helpful",type:c}})},RT=function(a,b,c,d){var e=document.body.querySelector("#"+c);e||(e=_ds.Op(MT,{mf:c,kc:b}),document.body.appendChild(e),a.eventHandler.listen(e,"change",function(){var g,k,m,n;"thumb-down"===
d?null===(k=null===(g=a.h)||void 0===g?void 0:g.querySelector(".devsite-thumb-rating-submit"))||void 0===k?void 0:k.removeAttribute("disabled"):"thumb-up"===d&&(null===(n=null===(m=a.j)||void 0===m?void 0:m.querySelector(".devsite-thumb-rating-submit"))||void 0===n?void 0:n.removeAttribute("disabled"))}),a.eventHandler.listen(e.querySelector(".devsite-thumb-rating-submit"),"click",function(){var g,k,m,n,q,r,t,v,y;if("thumb-down"===d){var A=(null===(k=null===(g=a.h)||void 0===g?void 0:g.querySelector("input[type=radio]:checked"))||
void 0===k?void 0:k.id)||"";VT(a,A,"thumb-down");null===(m=a.ib)||void 0===m?void 0:m.setAttribute("rating-type","thumbsDown");null===(n=a.ib)||void 0===n?void 0:n.setAttribute("rating-category",A);null===(q=a.h)||void 0===q?void 0:q.removeAttribute("open")}else"thumb-up"===d&&(g=(null===(r=null===(A=a.j)||void 0===A?void 0:A.querySelector("input[type=radio]:checked"))||void 0===r?void 0:r.id)||"",VT(a,g,"thumb-up"),null===(t=a.ib)||void 0===t?void 0:t.setAttribute("rating-type","thumbsUp"),null===
(v=a.ib)||void 0===v?void 0:v.setAttribute("rating-category",g),null===(y=a.j)||void 0===y?void 0:y.removeAttribute("open"));a.m=WT(a);a.m.setAttribute("open","")}));return e},WT=function(a){var b=document.body.querySelector("#devsite-thumb-thank-you-dialog");if(!b){b=_ds.Op(NT);document.body.appendChild(b);var c=b.querySelector(".devsite-dialog-buttons");a.ib&&(null===c||void 0===c?void 0:c.appendChild(a.ib),a.eventHandler.listen(a.ib.querySelector("button"),"click",function(){null===b||void 0===
b?void 0:b.removeAttribute("open")}))}return b},TT=function(a,b){var c=null;"thumb-down"===b?c={category:"Site-Wide Custom Events",action:"devsite-rating thumb",label:"Thumb Down Rating",value:-1}:"thumb-up"===b&&(c={category:"Site-Wide Custom Events",action:"devsite-rating thumb",label:"Thumb Up Rating",value:1});a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:c,bubbles:!0}))},VT=function(a,b,c){var d=null;"thumb-down"===c?d={category:"Site-Wide Custom Events",action:"devsite-rating category",
label:"Rating Category: "+b,value:-1}:"thumb-up"===c&&(d={category:"Site-Wide Custom Events",action:"devsite-rating category",label:"Rating Category: "+b,value:1});a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:d,bubbles:!0}))};_ds.u(PT,_ds.T);
PT.prototype.connectedCallback=function(){var a,b=this.querySelector(".thumb-rating-feedback");if(b&&(this.ib=null===(a=b.content.firstElementChild)||void 0===a?void 0:a.cloneNode(!0))&&(b=this.ib.querySelector("button"),null===b||void 0===b?void 0:b.classList.add("button-with-icon"),b&&b.firstChild)){var c=_ds.Op(OT);b.insertBefore(c,b.firstChild)}if((b=this.querySelector(".thumb-down-categories"))&&b.content)try{this.o=JSON.parse(b.content.textContent||"")}catch(d){this.o=[]}if((b=this.querySelector(".thumb-up-categories"))&&
b.content)try{this.C=JSON.parse(b.content.textContent||"")}catch(d){this.C=[]}QT(this,"thumb-down-outline","thumb-up-outline");UT(this)};PT.prototype.disconnectedCallback=function(){_ds.Hj(this.eventHandler);this.h&&this.h.parentElement&&document.body.removeChild(this.h);this.j&&this.j.parentElement&&document.body.removeChild(this.j);this.m&&this.m.parentElement&&document.body.removeChild(this.m)};try{window.customElements.define("devsite-thumb-rating",PT)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteThumbRating",a)};})(_ds_www);
