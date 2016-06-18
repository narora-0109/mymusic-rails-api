webpackJsonp([1],{

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	/*
	 * We're loading this component asynchronously
	 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
	 * see https://github.com/gdi2290/es6-promise-loader for more info
	 */
	console.log('`About` component loaded asynchronously');
	var About = (function () {
	    function About() {
	    }
	    About.prototype.ngOnInit = function () {
	        // console.log('hello `About` component');
	    };
	    About = __decorate([
	        core_1.Component({
	            selector: 'about',
	            template: __webpack_require__(608)()
	        }), 
	        __metadata('design:paramtypes', [])
	    ], About);
	    return About;
	})();
	exports.About = About;


/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(16);
	
	module.exports = function template(locals) {
	var jade_debug = [ new jade.DebugItem( 1, "/home/spiros/projects/mymusic/src/app/about.jade" ) ];
	try {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	
	jade_debug.unshift(new jade.DebugItem( 0, "/home/spiros/projects/mymusic/src/app/about.jade" ));
	jade_debug.unshift(new jade.DebugItem( 1, "/home/spiros/projects/mymusic/src/app/about.jade" ));
	buf.push("<h1>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 1, jade_debug[0].filename ));
	buf.push("MyMusic");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h1>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 2, "/home/spiros/projects/mymusic/src/app/about.jade" ));
	buf.push("<h5>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 2, jade_debug[0].filename ));
	buf.push("Single Page Application Built with angular2@2.0.0-beta.7");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h5>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 3, "/home/spiros/projects/mymusic/src/app/about.jade" ));
	buf.push("<h6>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 3, jade_debug[0].filename ));
	buf.push("Author: Spiros Kabasakalis");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</h6>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 4, "/home/spiros/projects/mymusic/src/app/about.jade" ));
	buf.push("<p>");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 5, "/home/spiros/projects/mymusic/src/app/about.jade" ));
	buf.push("Consumes");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 6, "/home/spiros/projects/mymusic/src/app/about.jade" ));
	buf.push(jade.escape(null == (jade_interp = " ") ? "" : jade_interp));
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 7, "/home/spiros/projects/mymusic/src/app/about.jade" ));
	buf.push("<a href=\"https://github.com/drumaddict/mymusic-rails-api\">");
	jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
	jade_debug.unshift(new jade.DebugItem( 7, jade_debug[0].filename ));
	buf.push("MyMusic Rails API");
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</a>");
	jade_debug.shift();
	jade_debug.unshift(new jade.DebugItem( 8, "/home/spiros/projects/mymusic/src/app/about.jade" ));
	buf.push(jade.escape(null == (jade_interp = " ") ? "" : jade_interp));
	jade_debug.shift();
	jade_debug.shift();
	buf.push("</p>");
	jade_debug.shift();
	jade_debug.shift();;return buf.join("");
	} catch (err) {
	  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "h1 MyMusic\nh5 Single Page Application Built with angular2@2.0.0-beta.7\nh6 Author: Spiros Kabasakalis\np\n  | Consumes\n  =\" \"\n  a(href='https://github.com/drumaddict/mymusic-rails-api') MyMusic Rails API\n  =\" \"\n");
	}
	}

/***/ }

});
//# sourceMappingURL=1.map