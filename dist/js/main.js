/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Bubble.ts":
/*!**************************!*\
  !*** ./src/js/Bubble.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Bubble = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar math_1 = __webpack_require__(/*! ./helpers/math */ \"./src/js/helpers/math.ts\");\n\nvar Bubble = function () {\n  function Bubble(ctx, canvas, mouse) {\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.mouse = mouse;\n    this.genrate();\n  }\n\n  Bubble.prototype.genrate = function () {\n    this.opacity = Math.random();\n    this.speed = {\n      x: (0, math_1.random)(settings_1.settings.bubble.speed.x.min, settings_1.settings.bubble.speed.x.max),\n      y: (0, math_1.random)(settings_1.settings.bubble.speed.y.min, settings_1.settings.bubble.speed.y.max)\n    };\n    this.radius = (0, math_1.random)(settings_1.settings.bubble.radius.min, settings_1.settings.bubble.radius.max);\n    this.position = {\n      x: (0, math_1.random)(this.radius, this.canvas.width - this.radius),\n      y: (0, math_1.random)(-this.canvas.height * 1.5, this.canvas.height + this.radius * 2)\n    };\n    this.color = settings_1.settings.bubble.colors[(0, math_1.random)(0, settings_1.settings.bubble.colors.length, false)];\n  };\n\n  Bubble.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.globalAlpha = this.opacity;\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.globalAlpha = 1;\n  };\n\n  Bubble.prototype.update = function () {\n    if (this.position.y <= -this.radius) {\n      this.genrate();\n    }\n\n    this.hypothenuse = Math.sqrt(Math.pow(this.mouse.x - this.position.x, 2) + Math.pow(this.mouse.y - this.position.y, 2));\n\n    if (this.hypothenuse <= this.radius + settings_1.settings.mouse.radius) {\n      console.log(this.hypothenuse, this.radius + settings_1.settings.mouse.radius);\n      this.opacity = 0;\n    }\n\n    this.position.y -= this.speed.y;\n    this.position.x += this.speed.x;\n    this.draw();\n  };\n\n  return Bubble;\n}();\n\nexports.Bubble = Bubble;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxHQUFjTCxvQkFBU1IsS0FBVCxDQUFlYSxNQUFyRCxFQUE0RDtBQUN4RGdCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtKLFdBQWpCLEVBQThCLEtBQUtiLE1BQUwsR0FBWUwsb0JBQVNSLEtBQVQsQ0FBZWEsTUFBekQ7QUFDQSxXQUFLVixPQUFMLEdBQWUsQ0FBZjtBQUNIOztBQUNMLFNBQUtXLFFBQUwsQ0FBY0YsQ0FBZCxJQUFtQixLQUFLTixLQUFMLENBQVdNLENBQTlCO0FBQ0EsU0FBS0UsUUFBTCxDQUFjUCxDQUFkLElBQW1CLEtBQUtELEtBQUwsQ0FBV0MsQ0FBOUI7QUFDQSxTQUFLd0IsSUFBTDtBQUNILEdBWkQ7O0FBY0o7QUFBQyxDQWhERDs7QUFBYUMsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvQnViYmxlLnRzP2RhMDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtyYW5kb219IGZyb20gXCIuL2hlbHBlcnMvbWF0aFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1YmJsZSB7IC8vZXh0ZW5kcyBhcHLDqHMgQnViYmxlXHJcbiAgICBwcml2YXRlIHJhZGl1czpudW1iZXI7XHJcbiAgICBwcml2YXRlIGNvbG9yOnN0cmluZztcclxuICAgIHByaXZhdGUgcG9zaXRpb246e3g6bnVtYmVyLHk6bnVtYmVyfTtcclxuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG9wYWNpdHk6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzcGVlZDoge3g6bnVtYmVyLHk6bnVtYmVyfTtcclxuICAgIHByaXZhdGUgbW91c2U6IHt4Om51bWJlcix5Om51bWJlcn07XHJcbiAgICBwcml2YXRlIGh5cG90aGVudXNlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIG1vdXNlOnt4Om51bWJlciwgeTpudW1iZXJ9KSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5tb3VzZSA9IG1vdXNlO1xyXG4gICAgICAgIHRoaXMuZ2VucmF0ZSgpO1xyXG4gICAgfVxyXG4gICAgZ2VucmF0ZSgpe1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHtcclxuICAgICAgICAgICAgeDogcmFuZG9tKHNldHRpbmdzLmJ1YmJsZS5zcGVlZC54Lm1pbiwgc2V0dGluZ3MuYnViYmxlLnNwZWVkLngubWF4KSxcclxuICAgICAgICAgICAgeTpyYW5kb20oc2V0dGluZ3MuYnViYmxlLnNwZWVkLnkubWluLHNldHRpbmdzLmJ1YmJsZS5zcGVlZC55Lm1heCl9O1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFuZG9tKHNldHRpbmdzLmJ1YmJsZS5yYWRpdXMubWluLHNldHRpbmdzLmJ1YmJsZS5yYWRpdXMubWF4KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge3g6IHJhbmRvbSh0aGlzLnJhZGl1cywgdGhpcy5jYW52YXMud2lkdGgtdGhpcy5yYWRpdXMpLHk6cmFuZG9tKCAtdGhpcy5jYW52YXMuaGVpZ2h0KjEuNSwgdGhpcy5jYW52YXMuaGVpZ2h0KyB0aGlzLnJhZGl1cyoyKX07XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IHNldHRpbmdzLmJ1YmJsZS5jb2xvcnNbcmFuZG9tKDAsc2V0dGluZ3MuYnViYmxlLmNvbG9ycy5sZW5ndGgsZmFsc2UpXTtcclxuICAgIH1cclxuICAgIGRyYXcoKXtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHRoaXMub3BhY2l0eTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsdGhpcy5wb3NpdGlvbi55LHRoaXMucmFkaXVzLCAwLCAyKk1hdGguUEkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKXtcclxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi55PD0gLSB0aGlzLnJhZGl1cyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VucmF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICB0aGlzLmh5cG90aGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KCh0aGlzLm1vdXNlLnggLSB0aGlzLnBvc2l0aW9uLngpLDIpICsgTWF0aC5wb3coKHRoaXMubW91c2UueSAtIHRoaXMucG9zaXRpb24ueSksMikpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oeXBvdGhlbnVzZSA8PSB0aGlzLnJhZGl1cyArIHNldHRpbmdzLm1vdXNlLnJhZGl1cyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmh5cG90aGVudXNlLCB0aGlzLnJhZGl1cytzZXR0aW5ncy5tb3VzZS5yYWRpdXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnNwZWVkLnk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQueDtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiY3R4IiwiY2FudmFzIiwibW91c2UiLCJnZW5yYXRlIiwiQnViYmxlIiwib3BhY2l0eSIsIk1hdGgiLCJyYW5kb20iLCJzcGVlZCIsIngiLCJzZXR0aW5nc18xIiwiYnViYmxlIiwibWluIiwibWF4IiwieSIsInJhZGl1cyIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJjb2xvciIsImNvbG9ycyIsImxlbmd0aCIsImJlZ2luUGF0aCIsImdsb2JhbEFscGhhIiwiZmlsbFN0eWxlIiwiYXJjIiwiUEkiLCJmaWxsIiwiaHlwb3RoZW51c2UiLCJzcXJ0IiwicG93IiwiY29uc29sZSIsImxvZyIsImRyYXciLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Bubble.ts\n");

/***/ }),

/***/ "./src/js/animation.ts":
/*!*****************************!*\
  !*** ./src/js/animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.animation = void 0;\nexports.animation = {\n  init: function init(canvas, bubbles) {\n    this.bubbles = bubbles;\n    this.canvas = canvas;\n    this.animate();\n    return this;\n  },\n  animate: function animate() {\n    var _this = this;\n\n    this.canvas.draw();\n    this.bubbles.forEach(function (bubble) {\n      bubble.update();\n    });\n    requestAnimationFrame(function () {\n      _this.animate();\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFYUEsaUJBQUFBLEdBQVc7QUFFcEJDLE1BQUksZ0JBQUNDLE1BQUQsRUFBU0MsT0FBVCxFQUFnQjtBQUNoQixTQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLRSxPQUFMO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FQbUI7QUFRcEJBLFNBQU8sRUFBUDtBQUFBOztBQUVJLFNBQUtGLE1BQUwsQ0FBWUcsSUFBWjtBQUNBLFNBQUtGLE9BQUwsQ0FBYUcsT0FBYixDQUFxQixVQUFDQyxNQUFELEVBQWM7QUFDL0JBLFlBQU0sQ0FBQ0MsTUFBUDtBQUNILEtBRkQ7QUFHQUMseUJBQXFCLENBQUM7QUFDbEJDLFdBQUksQ0FBQ04sT0FBTDtBQUNILEtBRm9CLENBQXJCO0FBR0g7QUFqQm1CLENBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvYW5pbWF0aW9uLnRzP2M5MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjYW52YXN9IGZyb20gXCIuL2NhbnZhc1wiO1xyXG5pbXBvcnQge0J1YmJsZX0gZnJvbSBcIi4vQnViYmxlXCI7XHJcbmV4cG9ydCBjb25zdCBhbmltYXRpb24gPXtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBpbml0KGNhbnZhcywgYnViYmxlcyl7XHJcbiAgICAgICAgdGhpcy5idWJibGVzID0gYnViYmxlcztcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBhbmltYXRlKCl7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmJ1YmJsZXMuZm9yRWFjaCgoYnViYmxlOkJ1YmJsZSk9PntcclxuICAgICAgICAgICAgYnViYmxlLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJleHBvcnRzIiwiaW5pdCIsImNhbnZhcyIsImJ1YmJsZXMiLCJhbmltYXRlIiwiZHJhdyIsImZvckVhY2giLCJidWJibGUiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/animation.ts\n");

/***/ }),

/***/ "./src/js/canvas.ts":
/*!**************************!*\
  !*** ./src/js/canvas.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.canvas = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nexports.canvas = {\n  init: function init(mouse) {\n    this.canvas = document.getElementById('my-canvas');\n    this.ctx = this.canvas.getContext('2d');\n    this.mouse = mouse;\n    this.resizeCanvas();\n    this.addEventListeners();\n    this.generateGradient();\n    this.draw();\n    return this;\n  },\n  generateGradient: function generateGradient() {\n    this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);\n\n    for (var i = 0; i < settings_1.settings.gradient.length; i++) {}\n\n    this.gradient.addColorStop(0, settings_1.settings.gradient[0]);\n    this.gradient.addColorStop(1, settings_1.settings.gradient[1]);\n    return this;\n  },\n  resizeCanvas: function resizeCanvas() {\n    this.canvas.width = window.innerWidth * settings_1.settings.canvasRationWidth;\n    this.canvas.height = window.innerHeight * settings_1.settings.canvasRationHeight;\n    this.generateGradient();\n    return this;\n  },\n  draw: function draw() {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    this.ctx.closePath();\n    this.ctx.beginPath();\n    this.ctx.fillStyle = 'yellow';\n    this.ctx.arc(this.mouse.x, this.mouse.y, settings_1.settings.mouse.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.closePath();\n    return this;\n  },\n  addEventListeners: function addEventListeners() {\n    var _this = this;\n\n    window.addEventListener('resize', function (e) {\n      _this.resizeCanvas();\n    });\n    this.canvas.addEventListener('mousemove', function (event) {\n      _this.mouse.y = Math.max(event.y - (_this.canvas.getBoundingClientRect().y + parseInt(getComputedStyle(_this.canvas).borderWidth)), 0);\n      _this.mouse.x = Math.max(event.x - (_this.canvas.getBoundingClientRect().x + parseInt(getComputedStyle(_this.canvas).borderWidth)), 0);\n    });\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSSxDQUFDbkMsTUFBTCxDQUFZc0MscUJBQVosR0FBb0NWLENBQXBDLEdBQXdDVyxRQUFRLENBQUNDLGdCQUFnQixDQUFDTCxLQUFJLENBQUNuQyxNQUFOLENBQWhCLENBQStCeUMsV0FBaEMsQ0FBM0QsQ0FBVCxFQUFtSCxDQUFuSCxDQUFmO0FBQ0FOLFdBQUksQ0FBQ3BDLEtBQUwsQ0FBVzRCLENBQVgsR0FBZUcsSUFBSSxDQUFDTyxHQUFMLENBQVNELEtBQUssQ0FBQ1QsQ0FBTixJQUFXUSxLQUFJLENBQUNuQyxNQUFMLENBQVlzQyxxQkFBWixHQUFvQ1gsQ0FBcEMsR0FBd0NZLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUNMLEtBQUksQ0FBQ25DLE1BQU4sQ0FBaEIsQ0FBK0J5QyxXQUFoQyxDQUEzRCxDQUFULEVBQW1ILENBQW5ILENBQWY7QUFDSCxLQUhEO0FBSUg7QUE5Q2lCLENBQVQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvY2FudmFzLnRzPzZiZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjYW52YXMgPSB7XHJcbiAgICBpbml0KG1vdXNlOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdGhpcy5tb3VzZSA9IG1vdXNlO1xyXG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVHcmFkaWVudCgpO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGdlbmVyYXRlR3JhZGllbnQoKSB7XHJcbiAgICAgICAgdGhpcy5ncmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3MuZ3JhZGllbnQubGVuZ3RoOyBpKyspIHtcclxuLy8gVE9ET1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCBzZXR0aW5ncy5ncmFkaWVudFswXSk7XHJcbiAgICAgICAgdGhpcy5ncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgc2V0dGluZ3MuZ3JhZGllbnRbMV0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogc2V0dGluZ3MuY2FudmFzUmF0aW9uV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogc2V0dGluZ3MuY2FudmFzUmF0aW9uSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVHcmFkaWVudCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5ncmFkaWVudDtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAneWVsbG93JztcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5tb3VzZS54LCB0aGlzLm1vdXNlLnksIHNldHRpbmdzLm1vdXNlLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZS55ID0gTWF0aC5tYXgoZXZlbnQueSAtICh0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55ICsgcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmNhbnZhcywpLmJvcmRlcldpZHRoKSksIDApO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlLnggPSBNYXRoLm1heChldmVudC54IC0gKHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnggKyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FudmFzLCkuYm9yZGVyV2lkdGgpKSwgMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsiZXhwb3J0cyIsImluaXQiLCJtb3VzZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVzaXplQ2FudmFzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJnZW5lcmF0ZUdyYWRpZW50IiwiZHJhdyIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJ3aWR0aCIsImhlaWdodCIsImkiLCJzZXR0aW5nc18xIiwibGVuZ3RoIiwiYWRkQ29sb3JTdG9wIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNhbnZhc1JhdGlvbldpZHRoIiwiaW5uZXJIZWlnaHQiLCJjYW52YXNSYXRpb25IZWlnaHQiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNsb3NlUGF0aCIsImFyYyIsIngiLCJ5IiwicmFkaXVzIiwiTWF0aCIsIlBJIiwiZmlsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiX3RoaXMiLCJldmVudCIsIm1heCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcnNlSW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImJvcmRlcldpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/canvas.ts\n");

/***/ }),

/***/ "./src/js/helpers/math.ts":
/*!********************************!*\
  !*** ./src/js/helpers/math.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.random = void 0;\n\nfunction random(min, max, ceil) {\n  if (ceil === void 0) {\n    ceil = true;\n  }\n\n  if (ceil) {\n    return Math.ceil(min + Math.random() * (max - min));\n  }\n\n  return Math.floor(min + Math.random() * (max - min));\n}\n\nexports.random = random;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaGVscGVycy9tYXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsU0FBZ0JBLE1BQWhCLENBQXVCQyxHQUF2QixFQUFtQ0MsR0FBbkMsRUFBK0NDLElBQS9DLEVBQWtFO0FBQW5CO0FBQUFBO0FBQW1COztBQUM5RCxNQUFJQSxJQUFKLEVBQVM7QUFDTixXQUFPQyxJQUFJLENBQUNELElBQUwsQ0FBVUYsR0FBRyxHQUFHRyxJQUFJLENBQUNKLE1BQUwsTUFBZUUsR0FBRyxHQUFDRCxHQUFuQixDQUFoQixDQUFQO0FBQ0Y7O0FBQ0QsU0FBT0csSUFBSSxDQUFDQyxLQUFMLENBQVdKLEdBQUcsR0FBR0csSUFBSSxDQUFDSixNQUFMLE1BQWVFLEdBQUcsR0FBQ0QsR0FBbkIsQ0FBakIsQ0FBUDtBQUNIOztBQUxESyxjQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2J1YmJsZS1hcXVhcml1bS8uL3NyYy9qcy9oZWxwZXJzL21hdGgudHM/YzIyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbjpudW1iZXIsIG1heDpudW1iZXIsIGNlaWw6Ym9vbGVhbiA9IHRydWUpe1xyXG4gICAgaWYgKGNlaWwpe1xyXG4gICAgICAgcmV0dXJuIE1hdGguY2VpbChtaW4gKyBNYXRoLnJhbmRvbSgpKihtYXgtbWluKSlcclxuICAgIH1cclxuICAgIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkqKG1heC1taW4pKTtcclxufSJdLCJuYW1lcyI6WyJyYW5kb20iLCJtaW4iLCJtYXgiLCJjZWlsIiwiTWF0aCIsImZsb29yIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/helpers/math.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar canvas_1 = __webpack_require__(/*! ./canvas */ \"./src/js/canvas.ts\");\n\nvar animation_1 = __webpack_require__(/*! ./animation */ \"./src/js/animation.ts\");\n\nvar Bubble_1 = __webpack_require__(/*! ./Bubble */ \"./src/js/Bubble.ts\");\n\nvar app = {\n  init: function init() {\n    this.bubbles = [];\n    this.canvasElement = document.getElementById('my-canvas');\n    this.mouse = {\n      x: 0,\n      y: 0\n    };\n    this.ctx = this.canvasElement.getContext('2d');\n    this.canvas = canvas_1.canvas.init(this.mouse);\n    this.loadBubbles();\n    this.animation = animation_1.animation.init(this.canvas, this.bubbles);\n  },\n  loadBubbles: function loadBubbles() {\n    for (var i = 0; i < settings_1.settings.bubble.maxCount; i++) {\n      this.bubbles.push(new Bubble_1.Bubble(this.ctx, this.canvasElement, this.mouse));\n    }\n  }\n};\napp.init();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHO0FBQ1JDLE1BQUksRUFBSjtBQUNJLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQXJCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQUNDLE9BQUMsRUFBRSxDQUFKO0FBQU9DLE9BQUMsRUFBRTtBQUFWLEtBQWI7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS04sYUFBTCxDQUFtQk8sVUFBbkIsQ0FBOEIsSUFBOUIsQ0FBWDtBQUNBLFNBQUtDLE1BQUwsR0FBY0MsZ0JBQU9YLElBQVAsQ0FBWSxLQUFLSyxLQUFqQixDQUFkO0FBQ0EsU0FBS08sV0FBTDtBQUNBLFNBQUtDLFNBQUwsR0FBaUJDLHNCQUFVZCxJQUFWLENBQWUsS0FBS1UsTUFBcEIsRUFBNEIsS0FBS1QsT0FBakMsQ0FBakI7QUFDSCxHQVRPO0FBVVJXLGFBQVc7QUFDUCxTQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdDLG9CQUFTQyxNQUFULENBQWdCQyxRQUFwQyxFQUE4Q0gsQ0FBQyxFQUEvQyxFQUFtRDtBQUMvQyxXQUFLZCxPQUFMLENBQWFrQixJQUFiLENBQWtCLElBQUlDLGVBQUosQ0FBVyxLQUFLWixHQUFoQixFQUFxQixLQUFLTixhQUExQixFQUF5QyxLQUFLRyxLQUE5QyxDQUFsQjtBQUNIO0FBQ0o7QUFkTyxDQUFaO0FBZ0JBTixHQUFHLENBQUNDLElBQUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWJibGUtYXF1YXJpdW0vLi9zcmMvanMvbWFpbi50cz80YjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2V0dGluZ3N9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7Y2FudmFzfSBmcm9tIFwiLi9jYW52YXNcIjtcclxuaW1wb3J0IHthbmltYXRpb259IGZyb20gXCIuL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQge0J1YmJsZX0gZnJvbSBcIi4vQnViYmxlXCI7XHJcblxyXG5jb25zdCBhcHAgPSB7XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuYnViYmxlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteS1jYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB0aGlzLm1vdXNlID0ge3g6IDAsIHk6IDB9XHJcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcy5pbml0KHRoaXMubW91c2UpO1xyXG4gICAgICAgIHRoaXMubG9hZEJ1YmJsZXMoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbi5pbml0KHRoaXMuY2FudmFzLCB0aGlzLmJ1YmJsZXMpO1xyXG4gICAgfSxcclxuICAgIGxvYWRCdWJibGVzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0dGluZ3MuYnViYmxlLm1heENvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5idWJibGVzLnB1c2gobmV3IEJ1YmJsZSh0aGlzLmN0eCwgdGhpcy5jYW52YXNFbGVtZW50LCB0aGlzLm1vdXNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmFwcC5pbml0KCk7XHJcbiJdLCJuYW1lcyI6WyJhcHAiLCJpbml0IiwiYnViYmxlcyIsImNhbnZhc0VsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibW91c2UiLCJ4IiwieSIsImN0eCIsImdldENvbnRleHQiLCJjYW52YXMiLCJjYW52YXNfMSIsImxvYWRCdWJibGVzIiwiYW5pbWF0aW9uIiwiYW5pbWF0aW9uXzEiLCJpIiwic2V0dGluZ3NfMSIsImJ1YmJsZSIsIm1heENvdW50IiwicHVzaCIsIkJ1YmJsZV8xIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  canvasRationWidth: 0.8,\n  canvasRationHeight: 0.6,\n  gradient: ['hsl(165, 19%, 40%)', 'hsl(133, 18%, 59%)'],\n  mouse: {\n    radius: 15\n  },\n  bubble: {\n    radius: {\n      min: 10,\n      max: 30\n    },\n    speed: {\n      x: {\n        min: -2,\n        max: 2\n      },\n      y: {\n        min: 3,\n        max: 7\n      }\n    },\n    maxCount: 50,\n    colors: ['hsl(201, 20%, 23%)', 'hsl(186, 21%, 26%)', 'hsl(165, 19%, 40%)', 'hsl(133, 18%, 59%)', 'hsl(97, 13%, 80%)']\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsbUJBQWlCLEVBQUUsR0FEQztBQUVwQkMsb0JBQWtCLEVBQUUsR0FGQTtBQUdwQkMsVUFBUSxFQUFFLENBQUMsb0JBQUQsRUFBdUIsb0JBQXZCLENBSFU7QUFJcEJDLE9BQUssRUFBQztBQUFDQyxVQUFNLEVBQUM7QUFBUixHQUpjO0FBS3BCQyxRQUFNLEVBQUU7QUFDSkQsVUFBTSxFQUFDO0FBQUNFLFNBQUcsRUFBQyxFQUFMO0FBQVNDLFNBQUcsRUFBQztBQUFiLEtBREg7QUFFSkMsU0FBSyxFQUFDO0FBQUNDLE9BQUMsRUFBQztBQUFDSCxXQUFHLEVBQUMsQ0FBQyxDQUFOO0FBQVNDLFdBQUcsRUFBQztBQUFiLE9BQUg7QUFBb0JHLE9BQUMsRUFBQztBQUFDSixXQUFHLEVBQUMsQ0FBTDtBQUFRQyxXQUFHLEVBQUM7QUFBWjtBQUF0QixLQUZGO0FBR0pJLFlBQVEsRUFBQyxFQUhMO0FBSUpDLFVBQU0sRUFBQyxDQUFDLG9CQUFELEVBQXNCLG9CQUF0QixFQUEyQyxvQkFBM0MsRUFBZ0Usb0JBQWhFLEVBQXFGLG1CQUFyRjtBQUpIO0FBTFksQ0FBWCIsInNvdXJjZXMiOlsid2VicGFjazovL2J1YmJsZS1hcXVhcml1bS8uL3NyYy9qcy9zZXR0aW5ncy50cz9jNDIxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGNhbnZhc1JhdGlvbldpZHRoOiAwLjgsXHJcbiAgICBjYW52YXNSYXRpb25IZWlnaHQ6IDAuNixcclxuICAgIGdyYWRpZW50OiBbJ2hzbCgxNjUsIDE5JSwgNDAlKScsICdoc2woMTMzLCAxOCUsIDU5JSknXSxcclxuICAgIG1vdXNlOntyYWRpdXM6MTV9LFxyXG4gICAgYnViYmxlOiB7XHJcbiAgICAgICAgcmFkaXVzOnttaW46MTAsIG1heDozMH0sXHJcbiAgICAgICAgc3BlZWQ6e3g6e21pbjotMiwgbWF4OjJ9LCB5OnttaW46MywgbWF4Ojd9fSxcclxuICAgICAgICBtYXhDb3VudDo1MCxcclxuICAgICAgICBjb2xvcnM6Wydoc2woMjAxLCAyMCUsIDIzJSknLCdoc2woMTg2LCAyMSUsIDI2JSknLCdoc2woMTY1LCAxOSUsIDQwJSknLCdoc2woMTMzLCAxOCUsIDU5JSknLCdoc2woOTcsIDEzJSwgODAlKSddfSxcclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJjYW52YXNSYXRpb25XaWR0aCIsImNhbnZhc1JhdGlvbkhlaWdodCIsImdyYWRpZW50IiwibW91c2UiLCJyYWRpdXMiLCJidWJibGUiLCJtaW4iLCJtYXgiLCJzcGVlZCIsIngiLCJ5IiwibWF4Q291bnQiLCJjb2xvcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnViYmxlLWFxdWFyaXVtLy4vc3JjL3Njc3MvbWFpbi5zY3NzP2Y3ZTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbubble_aquarium"] = self["webpackChunkbubble_aquarium"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;