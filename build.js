var x;x=function(e){var n,s;return s={},n=e,s.element=function(){return document.querySelector(n)},s.elements=function(){return document.querySelectorAll(n)},s.e=s.element,s.es=s.elements,s.addClass=function(e,o){var t,l,r,a,i;if(void 0===o)for(r=s.elements(),a=0,i=r.length;i>a;a++)t=r[a],t.className===t.className.split(e).join("")&&(""===t.className?t.className=e:t.className+=" "+e);else{if(o>=s.elements().length||0>o)return console.warn("You provided an index ("+o+") that is out of range to a x.addClass. The selector was "+n),null;l=s.elements()[o],""===l.className?l.className=e:l.className+=" "+e}return e},s.append=function(e,o){var t,l,r,a,i;if(void 0===o)for(r=s.es(),a=0,i=r.length;i>a;a++)t=r[a],t.innerHTML+=e;else{if(o>=s.elements().length||0>o)return console.warn("You provided an index ("+o+") that is out of range to a x.append. The selector was "+n),null;l=s.es()[o],l.innerHTML+=e}return e},s.css=function(e,o,t){var l,r,a,i,u,c,m,d,f,h;if(void 0===t){if("object"==typeof e&&void 0===o)for(console.log("We have a object and no index"),a=s.es(),console.log("These are the elements"),console.log(a),c=0,d=a.length;d>c;c++){l=a[c],console.log("The current element is"),console.log(l);for(i in e)u=e[i],e.hasOwnProperty(i)&&(console.log("css: "+i+": "+u),l.style[i]=u)}for(a=s.es(),h=[],m=0,f=a.length;f>m;m++)l=a[m],h.push(l.style[e]=o);return h}return t>=s.elements().length||0>t?(console.warn("You provided an index ("+t+") that is out of range to a x.css. The selector was "+n),null):(r=s.es()[t],r.style[e]=o)},s.each=function(e,o){var t,l,r,a,i;if(void 0===o)for(r=s.es(),a=0,i=r.length;i>a;a++)t=r[a],e(t);else{if(o>=s.elements().length||0>o)return console.warn("You provided an index ("+o+") that is out of range to a x.each. The selector was "+n),null;l=s.es()[o],e(l)}return e},s.html=function(e,o){var t,l,r,a,i;if(void 0!==e&&"number"!=typeof e){if(void 0===o)for(r=s.es(),a=0,i=r.length;i>a;a++)t=r[a],t.innerHTML=e;else{if(o>=s.elements().length||0>o)return console.warn("You provided an index ("+o+") that is out of range to a x.html. The selector was "+n),null;l=s.es()[o],l.innerHTML=e}return e}return void 0===e?s.e().innerHTML:e>=s.elements().length||0>e?(console.warn("You provided an index ("+e+") that is out of range to a x.html. The selector was "+n),null):s.es()[e].innerHTML},s.removeAllClasses=function(e){var o,t,l,r,a;if(void 0===e)for(l=s.elements(),r=0,a=l.length;a>r;r++)o=l[r],o.className="";else{if(e>=s.elements().length||0>e)return console.warn("You provided an index ("+e+") that is out of range to a x.removeAllClasses. The selector was "+n),null;t=s.elements()[e],t.className=""}return""},s.removeClass=function(e,o){var t,l,r,a,i;if(void 0===o)for(r=s.elements(),a=0,i=r.length;i>a;a++)t=r[a],t.className=t.className.split(e).join("").split("  ").join(" ").trim();else{if(o>=s.elements().length||0>o)return console.warn("You provided an index ("+o+") that is out of range to a x.removeClass. The selector was "+n),null;l=s.elements()[o],l.className=l.className.split(e).join("").split("  ").join(" ").trim()}return e},s};