const t=33;var n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},n(t,e)};function e(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}var r=function(t){function n(n){var e=t.call(this,n)||this;return e.name="LAYER",e}return e(n,t),n.prototype.drawFunc=function(t){t.fillStyle="rgba(255,0,0,.4)",t.fillRect(0,0,1e3,1e3)},n}(IElemet),o=function(t){function n(n){var e=t.call(this,n)||this;return e.drawFunc=null,e.name="RECT",e}return e(n,t),n}(IElemet),c=function(t){function n(n){var e=t.call(this)||this,r=n.root,o=n.height,c=n.width,i=document.createElement("canvas");return e.canvas=i,e.ctx=i.getContext("2d"),i.width=c||700,i.height=o||400,i.style.background="blue",r.appendChild(i),e}return e(n,t),n.prototype.createElement=function(t){return null},n.prototype.append=function(t){return t.drawFunc?(t.drawFunc(this.ctx),this):(this.ctx.fillStyle=t.fillStyle,this.ctx.fillRect(t.x,t.y,t.width,t.height),this)},n}((function(){}));const i=(t,n)=>t+n;export{c as Editor,r as Layer,o as Rect,i as add,t as foo};