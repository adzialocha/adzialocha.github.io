!function(){!function e(t,r,n){function i(u,l){if(!r[u]){if(!t[u]){var a="function"==typeof require&&require;if(!l&&a)return a(u,!0);if(o)return o(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var d=r[u]={exports:{}};t[u][0].call(d.exports,function(e){var r=t[u][1][e];return i(r?r:e)},d,d.exports,e,t,r,n)}return r[u].exports}for(var o="function"==typeof require&&require,u=0;u<n.length;u++)i(n[u]);return i}({1:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=e("./slider"),o=n(i),u=e("./gallery"),l=n(u),a=e("./image"),c=n(a);document.addEventListener("DOMContentLoaded",function(){(0,o.default)(),(0,l.default)(),(0,c.default)()})},{"./gallery":2,"./image":3,"./slider":4}],2:[function(e,t,r){"use strict";function n(){c++,c>a.length-1&&(c=0);for(var e=0;e<a.length;e++)a[e].classList.remove(l);a[c].classList.add(l)}function i(){a=document.querySelectorAll(u),c=-1,document.querySelector(o).addEventListener("click",function(e){e.preventDefault(),n()}),n()}Object.defineProperty(r,"__esModule",{value:!0}),r.default=i;var o=".gallery",u=".gallery__item",l="gallery__item--visible",a=void 0,c=void 0},{}],3:[function(e,t,r){"use strict";function n(e,t){var r=new Image;r.onload=t,r.src=e}function i(){for(var e=document.querySelectorAll(o),t=function(t){var r=e[t],i=r.dataset,o=i.src;i.title;r.classList.add(u),n(o,function(){r.style.backgroundImage="url("+o+")",r.classList.remove(u)})},r=0;r<e.length;r++)t(r)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=i;var o=".image",u="image--loading"},{}],4:[function(e,t,r){"use strict";function n(){var e=document.querySelector(i);document.querySelector(o).addEventListener("mouseenter",function(){e.classList.add(l)}),document.querySelector(u).addEventListener("mouseenter",function(){e.classList.remove(l)})}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var i=".slider",o=".slider__right",u=".slider__left",l="slider--switched"},{}]},{},[1])}();