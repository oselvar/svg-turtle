!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):(t="undefined"!=typeof globalThis?globalThis:t||self,function(){var e=t.SVGTurtle,n=t.SVGTurtle={};r(n),n.noConflict=function(){return t.SVGTurtle=e,n}}())}(this,(function(t){"use strict";function r(t){throw function(t){var r=/^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(t);if(null==r)return new Error(t);var e=new Error(r[2]);return e.name=r[1],e}(t)}function e(t){return("number"==typeof t||t instanceof Number)&&isFinite(t.valueOf())}function n(t,r,n,i,a){if(void 0===i&&(i=!0),void 0===a&&(a=!0),!function(t){return"number"==typeof t||t instanceof Number}(t)||isNaN(t))return!1;if(e(r)){if(e(n)){if(t<r||!i&&t===r||t>n||!a&&t===n)return!1}else if(t<r||!i&&t===r)return!1}else if(e(n)&&(t>n||!a&&t===n))return!1;return!0}function i(t){return null!=t&&"object"==typeof t&&Object.getPrototypeOf(t)===Object.prototype}function a(t,r){return r.indexOf(t)>=0}function u(t){return function(t){return"string"==typeof t||t instanceof String}(t)&&(d.hasOwnProperty(t)||/^#[a-fA-F0-9]{6}$/.test(t)||/^#[a-fA-F0-9]{8}$/.test(t)||/^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(t)||/^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(t))}var o=!1,s=!0;function l(t,e,n){var i=function(i,a){return function(t,e,n,i,a){if(null==e){if(i)return e;r("MissingArgument: no "+b(t)+" given")}else if(n(e))switch(!0){case e instanceof Boolean:case e instanceof Number:case e instanceof String:return e.valueOf();default:return e}else r("InvalidArgument: the given "+b(t)+" is no valid "+b(a))}(i,a,t,e,n)},a=t.name;return null!=a&&/^ValueIs/.test(a)?function(t,e){null==t&&r("MissingArgument: no function given");"function"!=typeof t&&r("InvalidArgument: the given 1st Argument is not a JavaScript function");null==e&&r("MissingArgument: no desired name given");"string"==typeof e||e instanceof String||r("InvalidArgument: the given desired name is not a string");if(t.name===e)return t;try{if(Object.defineProperty(t,"name",{value:e}),t.name===e)return t}catch(t){}return new Function("originalFunction","return function "+e+" () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(t)}(i,a.replace(/^ValueIs/,e?"allow":"expect")):i}var h=l(e,s,"finite numeric value"),g=l(e,o,"finite numeric value");var c=function(t,e,n){if(null==e&&r("MissingArgument: no "+b(t)+" given"),a(e,n))return null==e||"function"!=typeof e.valueOf?e:e.valueOf();r("InvalidArgument: the given "+b(t)+" is not among the supported values")};function b(t){return t.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g,(function(t){return"\\"===t?"\\\\":t})).replace(/[\x00-\x1f\x7f-\x9f]/g,(function(t){switch(t){case"\0":return"\\0";case"\b":return"\\b";case"\f":return"\\f";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\v":return"\\v";default:var r=t.charCodeAt(0).toString(16);return"\\x"+"00".slice(r.length)+r}}))}var d={transparent:"rgba(0,0,0,0,0.0)",aliceblue:"rgba(240,248,255,1.0)",lightpink:"rgba(255,182,193,1.0)",antiquewhite:"rgba(250,235,215,1.0)",lightsalmon:"rgba(255,160,122,1.0)",aqua:"rgba(0,255,255,1.0)",lightseagreen:"rgba(32,178,170,1.0)",aquamarine:"rgba(127,255,212,1.0)",lightskyblue:"rgba(135,206,250,1.0)",azure:"rgba(240,255,255,1.0)",lightslategray:"rgba(119,136,153,1.0)",beige:"rgba(245,245,220,1.0)",lightslategrey:"rgba(119,136,153,1.0)",bisque:"rgba(255,228,196,1.0)",lightsteelblue:"rgba(176,196,222,1.0)",black:"rgba(0,0,0,1.0)",lightyellow:"rgba(255,255,224,1.0)",blanchedalmond:"rgba(255,235,205,1.0)",lime:"rgba(0,255,0,1.0)",blue:"rgba(0,0,255,1.0)",limegreen:"rgba(50,205,50,1.0)",blueviolet:"rgba(138,43,226,1.0)",linen:"rgba(250,240,230,1.0)",brown:"rgba(165,42,42,1.0)",magenta:"rgba(255,0,255,1.0)",burlywood:"rgba(222,184,135,1.0)",maroon:"rgba(128,0,0,1.0)",cadetblue:"rgba(95,158,160,1.0)",mediumaquamarine:"rgba(102,205,170,1.0)",chartreuse:"rgba(127,255,0,1.0)",mediumblue:"rgba(0,0,205,1.0)",chocolate:"rgba(210,105,30,1.0)",mediumorchid:"rgba(186,85,211,1.0)",coral:"rgba(255,127,80,1.0)",mediumpurple:"rgba(147,112,219,1.0)",cornflowerblue:"rgba(100,149,237,1.0)",mediumseagreen:"rgba(60,179,113,1.0)",cornsilk:"rgba(255,248,220,1.0)",mediumslateblue:"rgba(123,104,238,1.0)",crimson:"rgba(220,20,60,1.0)",mediumspringgreen:"rgba(0,250,154,1.0)",cyan:"rgba(0,255,255,1.0)",mediumturquoise:"rgba(72,209,204,1.0)",darkblue:"rgba(0,0,139,1.0)",mediumvioletred:"rgba(199,21,133,1.0)",darkcyan:"rgba(0,139,139,1.0)",midnightblue:"rgba(25,25,112,1.0)",darkgoldenrod:"rgba(184,134,11,1.0)",mintcream:"rgba(245,255,250,1.0)",darkgray:"rgba(169,169,169,1.0)",mistyrose:"rgba(255,228,225,1.0)",darkgreen:"rgba(0,100,0,1.0)",moccasin:"rgba(255,228,181,1.0)",darkgrey:"rgba(169,169,169,1.0)",navajowhite:"rgba(255,222,173,1.0)",darkkhaki:"rgba(189,183,107,1.0)",navy:"rgba(0,0,128,1.0)",darkmagenta:"rgba(139,0,139,1.0)",oldlace:"rgba(253,245,230,1.0)",darkolivegreen:"rgba(85,107,47,1.0)",olive:"rgba(128,128,0,1.0)",darkorange:"rgba(255,140,0,1.0)",olivedrab:"rgba(107,142,35,1.0)",darkorchid:"rgba(153,50,204,1.0)",orange:"rgba(255,165,0,1.0)",darkred:"rgba(139,0,0,1.0)",orangered:"rgba(255,69,0,1.0)",darksalmon:"rgba(233,150,122,1.0)",orchid:"rgba(218,112,214,1.0)",darkseagreen:"rgba(143,188,143,1.0)",palegoldenrod:"rgba(238,232,170,1.0)",darkslateblue:"rgba(72,61,139,1.0)",palegreen:"rgba(152,251,152,1.0)",darkslategray:"rgba(47,79,79,1.0)",paleturquoise:"rgba(175,238,238,1.0)",darkslategrey:"rgba(47,79,79,1.0)",palevioletred:"rgba(219,112,147,1.0)",darkturquoise:"rgba(0,206,209,1.0)",papayawhip:"rgba(255,239,213,1.0)",darkviolet:"rgba(148,0,211,1.0)",peachpuff:"rgba(255,218,185,1.0)",deeppink:"rgba(255,20,147,1.0)",peru:"rgba(205,133,63,1.0)",deepskyblue:"rgba(0,191,255,1.0)",pink:"rgba(255,192,203,1.0)",dimgray:"rgba(105,105,105,1.0)",plum:"rgba(221,160,221,1.0)",dimgrey:"rgba(105,105,105,1.0)",powderblue:"rgba(176,224,230,1.0)",dodgerblue:"rgba(30,144,255,1.0)",purple:"rgba(128,0,128,1.0)",firebrick:"rgba(178,34,34,1.0)",red:"rgba(255,0,0,1.0)",floralwhite:"rgba(255,250,240,1.0)",rosybrown:"rgba(188,143,143,1.0)",forestgreen:"rgba(34,139,34,1.0)",royalblue:"rgba(65,105,225,1.0)",fuchsia:"rgba(255,0,255,1.0)",saddlebrown:"rgba(139,69,19,1.0)",gainsboro:"rgba(220,220,220,1.0)",salmon:"rgba(250,128,114,1.0)",ghostwhite:"rgba(248,248,255,1.0)",sandybrown:"rgba(244,164,96,1.0)",gold:"rgba(255,215,0,1.0)",seagreen:"rgba(46,139,87,1.0)",goldenrod:"rgba(218,165,32,1.0)",seashell:"rgba(255,245,238,1.0)",gray:"rgba(128,128,128,1.0)",sienna:"rgba(160,82,45,1.0)",green:"rgba(0,128,0,1.0)",silver:"rgba(192,192,192,1.0)",greenyellow:"rgba(173,255,47,1.0)",skyblue:"rgba(135,206,235,1.0)",grey:"rgba(128,128,128,1.0)",slateblue:"rgba(106,90,205,1.0)",honeydew:"rgba(240,255,240,1.0)",slategray:"rgba(112,128,144,1.0)",hotpink:"rgba(255,105,180,1.0)",slategrey:"rgba(112,128,144,1.0)",indianred:"rgba(205,92,92,1.0)",snow:"rgba(255,250,250,1.0)",indigo:"rgba(75,0,130,1.0)",springgreen:"rgba(0,255,127,1.0)",ivory:"rgba(255,255,240,1.0)",steelblue:"rgba(70,130,180,1.0)",khaki:"rgba(240,230,140,1.0)",tan:"rgba(210,180,140,1.0)",lavender:"rgba(230,230,250,1.0)",teal:"rgba(0,128,128,1.0)",lavenderblush:"rgba(255,240,245,1.0)",thistle:"rgba(216,191,216,1.0)",lawngreen:"rgba(124,252,0,1.0)",tomato:"rgba(255,99,71,1.0)",lemonchiffon:"rgba(255,250,205,1.0)",turquoise:"rgba(64,224,208,1.0)",lightblue:"rgba(173,216,230,1.0)",violet:"rgba(238,130,238,1.0)",lightcoral:"rgba(240,128,128,1.0)",wheat:"rgba(245,222,179,1.0)",lightcyan:"rgba(224,255,255,1.0)",white:"rgba(255,255,255,1.0)",lightgoldenrodyellow:"rgba(250,250,210,1.0)",whitesmoke:"rgba(245,245,245,1.0)",lightgray:"rgba(211,211,211,1.0)",yellow:"rgba(255,255,0,1.0)",lightgreen:"rgba(144,238,144,1.0)",yellowgreen:"rgba(154,205,50,1.0)",lightgrey:"rgba(211,211,211,1.0)"},p=["solid","dotted","dashed"],m=["bevel","miter","round"],f=["butt","round","square"];function y(t){return i(t)&&e(t.x)&&e(t.y)}var v=l(y,s,"turtle position"),x=v,w=l(y,o,"turtle position"),P=w;function k(t){return i(t)&&e(t.x)&&e(t.y)&&e(t.Direction)}var X=l(k,s,"turtle alignment"),Y=X,A=l(k,o,"turtle alignment"),M=A;function C(t){return i(t)&&(null==t.x||e(t.x))&&(null==t.y||e(t.y))&&(null==t.Direction||e(t.Direction))&&(null==t.Width||n(t.Width,0))&&(null==t.Color||u(t.Color))&&(null==t.Lineature||a(t.Lineature,p))&&(null==t.Join||a(t.Join,m))&&(null==t.Cap||a(t.Cap,f))}var S=l(C,s,"turtle path option set"),D=S,T=l(C,o,"turtle path option set"),O=T,I=function(){function t(){this.SVGContent="",this.currentPath=void 0,this.currentX=0,this.currentY=0,this.currentDirection=0,this.currentWidth=1,this.currentColor="#000000",this.currentLineature="solid",this.currentJoin="round",this.currentCap="round"}return t.prototype.reset=function(){return this.currentX=0,this.currentY=0,this.currentDirection=0,this.currentWidth=1,this.currentColor="#000000",this.currentLineature="solid",this.currentJoin="round",this.currentCap="round",this},t.prototype.beginPath=function(t){switch(S("option set",t),null!=this.currentPath&&this.endPath(),null!=t&&("x"in t&&(this.currentX=t.x),"y"in t&&(this.currentY=t.y),"Direction"in t&&(this.currentDirection=t.Direction),"Width"in t&&(this.currentWidth=t.Width),"Color"in t&&(this.currentColor=t.Color),"Lineature"in t&&(this.currentLineature=t.Lineature),"Join"in t&&(this.currentJoin=t.Join),"Cap"in t&&(this.currentCap=t.Cap)),null==this.minX&&(this.minX=this.maxX=this.currentX,this.minY=this.maxY=this.currentY),this.currentPath='<path fill="none" stroke="'+this.currentColor+'" stroke-width="'+this.currentWidth+'" stroke-linejoin="'+this.currentJoin+'" stroke-linecap="'+this.currentCap+'" ',this.currentLineature){case"dotted":this.currentPath+='stroke-dasharray="1" ';break;case"dashed":this.currentPath+='stroke-dasharray="3 1" ';break;default:this.currentPath+='stroke-dasharray="none" '}return this.currentPath+='d="',0===this.currentX&&0===this.currentY||this.moveTo(this.currentX,this.currentY),this},t.prototype.turn=function(t){return g("direction change",t),this.currentDirection+=t,this},t.prototype.turnTo=function(t){return g("direction",t),this.currentDirection=t,this},t.prototype.turnLeft=function(t){return g("direction change",t),this.currentDirection-=t,this},t.prototype.turnRight=function(t){return g("direction change",t),this.currentDirection+=t,this},t.prototype.move=function(t){g("distance",t);var r=this.currentDirection*Math.PI/180;return this.moveTo((this.currentX||0)+t*Math.cos(r),(this.currentY||0)+t*Math.sin(r)),this},t.prototype.moveTo=function(t,r){return g("x coordinate",t),g("y coordinate",r),this.currentX=t,this.currentY=r,null!=this.currentPath&&(this.currentPath+="M "+V(t)+","+V(r)+" ",this.updateBoundingBox()),this},t.prototype.draw=function(t){g("distance",t);var r=this.currentDirection*Math.PI/180;return this.drawTo((this.currentX||0)+t*Math.cos(r),(this.currentY||0)+t*Math.sin(r)),this},t.prototype.drawTo=function(t,r){return g("x coordinate",t),g("y coordinate",r),null==this.currentPath&&(this.beginPath(),null==this.minX&&this.moveTo(this.currentX,this.currentY)),this.currentX=t,this.currentY=r,this.currentPath+="L "+V(t)+","+V(r)+" ",this.updateBoundingBox(),this},t.prototype.curveLeft=function(t,r,e){return this.curve(t,r,e,0)},t.prototype.curveRight=function(t,r,e){return this.curve(t,r,e,1)},t.prototype.curve=function(t,r,e,n){g("turn angle",t),g("x radius",r),h("y radius",e),null==e&&(e=r),null==this.currentPath&&(this.beginPath(),null==this.minX&&this.moveTo(this.currentX,this.currentY));var i=t*Math.PI/180;t%=360;var a=Math.abs(t)<180?0:1,u=this.currentX,o=this.currentY,s=this.currentDirection,l=s*Math.PI/180,c=u+e*Math.sin(l)*(1===n?-1:1),b=o+e*Math.cos(l)*(1===n?1:-1),d=c+r*Math.sin(l+i),p=b+e*Math.cos(l+i)*(1===n?-1:1);return this.currentPath+="A "+V(r)+" "+V(e)+" "+V(s)+" "+a+" "+(t>=0?n:0===n?1:0)+" "+V(d)+","+V(p)+" ",this.currentDirection+=(t>=0?t:180+t)*(1===n?1:-1),this.currentX=d,this.currentY=p,this.updateBoundingBox(),this},t.prototype.endPath=function(){return null!=this.currentPath&&(this.currentPath+='"/>',this.SVGContent+=this.currentPath,this.currentPath=void 0),this},t.prototype.closePath=function(){return null!=this.currentPath&&(this.currentPath+="Z",this.endPath()),this},t.prototype.currentPosition=function(){return{x:this.currentX,y:this.currentY}},t.prototype.positionAt=function(t){return v("turtle position",t),null==this.currentPath?(this.currentX=t.x,this.currentY=t.y):this.moveTo(t.x,t.y),this},t.prototype.currentAlignment=function(){return{x:this.currentX,y:this.currentY,Direction:this.currentDirection}},t.prototype.alignAt=function(t){return X("turtle alignment",t),this.currentDirection=t.Direction,null==this.currentPath?(this.currentX=t.x,this.currentY=t.y):this.moveTo(t.x,t.y),this},t.prototype.asSVG=function(t,e,n,i,a){var u,o,s;u="SVG unit",s=["px","mm","cm","in"],null==(o=t)||c(u,o,s),h("minimal x",e),h("maximal x",i),h("minimal y",n),h("maximal y",a),null==this.minX&&(this.minX=this.maxX=this.minY=this.maxY=0),null==t&&(t="px"),null==e&&(e=this.minX),null==i&&(i=this.maxX),null==n&&(n=this.minY),null==a&&(a=this.maxY);var l=i-e,g=a-n;return l<0&&r("InvalidArgument: invalid x range given"),g<0&&r("InvalidArgument: invalid y range given"),null!=this.currentPath&&this.endPath(),'<svg xmlns="http://www.w3.org/2000/svg" width="'+V(l)+t+'" height="'+V(g)+t+'" viewBox="'+B(e)+" "+B(n)+" "+L(l)+" "+L(g)+'" vector-effect="non-scaling-stroke">'+this.SVGContent+"</svg>"},t.prototype.asSVGwith72dpi=function(t,r,e,n,i){var a=this.asSVG(t,r,e,n,i),u=72/{px:25.4,mm:25.4,cm:2.54,in:1}[t||"mm"];return null==r&&(r=this.minX),null==n&&(n=this.maxX),null==e&&(e=this.minY),null==i&&(i=this.maxY),'<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+B(u*r)+" "+B(u*e)+" "+L(u*(n-r))+" "+L(u*(i-e))+'" vector-effect="non-scaling-stroke"><g transform="scale('+u+","+u+')">'+a+"</g></svg>"},t.prototype.updateBoundingBox=function(){this.minX=Math.min(this.minX,this.currentX),this.maxX=Math.max(this.maxX,this.currentX),this.minY=Math.min(this.minY,this.currentY),this.maxY=Math.max(this.maxY,this.currentY)},t}();function V(t){return Math.round(100*t)/100}function L(t){return Math.ceil(100*t)/100}function B(t){return Math.floor(100*t)/100}t.Graphic=I,t.TUR_Caps=f,t.TUR_Joins=m,t.TUR_Lineatures=p,t.ValueIsAlignment=k,t.ValueIsPathOptionSet=C,t.ValueIsPosition=y,t.allowAlignment=X,t.allowPathOptionSet=S,t.allowPosition=v,t.allowedAlignment=Y,t.allowedPathOptionSet=D,t.allowedPosition=x,t.expectAlignment=A,t.expectPathOptionSet=T,t.expectPosition=w,t.expectedAlignment=M,t.expectedPathOptionSet=O,t.expectedPosition=P,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=svg-turtle.js.map
