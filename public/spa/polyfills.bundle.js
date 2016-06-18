/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// Polyfills
	__webpack_require__(567);
	// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)
	__webpack_require__(566);
	if (false) {
	    // In production Reflect with es7-reflect-metadata/reflect-metadata is added
	    // Zone.js
	    require('zone.js/dist/zone-microtask.min');
	    // RxJS
	    // In production manually include the operators you use
	    require('rxjs/add/operator/map');
	}
	else {
	    // Reflect Polyfill
	    __webpack_require__(577);
	    // In production Reflect with es7-reflect-metadata/reflect-metadata is added
	    // by webpack.prod.config ProvidePlugin
	    Error['stackTraceLimit'] = Infinity;
	    __webpack_require__(576);
	    __webpack_require__(575);
	    // RxJS
	    // In development we are including every operator
	    // Observable Operators
	    __webpack_require__(161);
	    __webpack_require__(162);
	    __webpack_require__(163);
	    __webpack_require__(299);
	    __webpack_require__(300);
	    __webpack_require__(301);
	    __webpack_require__(302);
	    __webpack_require__(303);
	    __webpack_require__(304);
	    __webpack_require__(305);
	    __webpack_require__(306);
	    __webpack_require__(307);
	    __webpack_require__(308);
	    __webpack_require__(309);
	    __webpack_require__(310);
	    __webpack_require__(311);
	    __webpack_require__(312);
	    __webpack_require__(164);
	    // Operators
	    __webpack_require__(313);
	    __webpack_require__(314);
	    __webpack_require__(315);
	    __webpack_require__(316);
	    __webpack_require__(317);
	    __webpack_require__(318);
	    __webpack_require__(319);
	    __webpack_require__(161);
	    __webpack_require__(162);
	    __webpack_require__(320);
	    __webpack_require__(321);
	    __webpack_require__(322);
	    __webpack_require__(323);
	    __webpack_require__(328);
	    __webpack_require__(324);
	    __webpack_require__(325);
	    __webpack_require__(326);
	    __webpack_require__(327);
	    __webpack_require__(329);
	    __webpack_require__(330);
	    __webpack_require__(331);
	    __webpack_require__(332);
	    __webpack_require__(334);
	    __webpack_require__(335);
	    __webpack_require__(336);
	    __webpack_require__(337);
	    __webpack_require__(339);
	    __webpack_require__(340);
	    __webpack_require__(338);
	    __webpack_require__(341);
	    __webpack_require__(342);
	    __webpack_require__(343);
	    __webpack_require__(344);
	    __webpack_require__(345);
	    __webpack_require__(346);
	    __webpack_require__(333);
	    __webpack_require__(347);
	    __webpack_require__(348);
	    __webpack_require__(349);
	    __webpack_require__(350);
	    __webpack_require__(351);
	    __webpack_require__(163);
	    __webpack_require__(352);
	    __webpack_require__(353);
	    __webpack_require__(354);
	    __webpack_require__(355);
	    __webpack_require__(356);
	    __webpack_require__(357);
	    __webpack_require__(358);
	    __webpack_require__(359);
	    __webpack_require__(360);
	    __webpack_require__(361);
	    __webpack_require__(363);
	    __webpack_require__(362);
	    __webpack_require__(364);
	    __webpack_require__(365);
	    __webpack_require__(366);
	    __webpack_require__(367);
	    __webpack_require__(368);
	    __webpack_require__(369);
	    __webpack_require__(370);
	    __webpack_require__(371);
	    __webpack_require__(372);
	    __webpack_require__(373);
	    __webpack_require__(374);
	    __webpack_require__(375);
	    __webpack_require__(376);
	    __webpack_require__(377);
	    __webpack_require__(378);
	    __webpack_require__(379);
	    __webpack_require__(380);
	    __webpack_require__(381);
	    __webpack_require__(382);
	    __webpack_require__(383);
	    __webpack_require__(384);
	    __webpack_require__(385);
	    __webpack_require__(386);
	    __webpack_require__(387);
	    __webpack_require__(388);
	    __webpack_require__(389);
	    __webpack_require__(390);
	    __webpack_require__(391);
	    __webpack_require__(392);
	    __webpack_require__(393);
	    __webpack_require__(394);
	    __webpack_require__(395);
	    __webpack_require__(396);
	    __webpack_require__(164);
	    __webpack_require__(397);
	}
	// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
	// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(21);
	var SymbolShim_1 = __webpack_require__(41);
	var toSubscriber_1 = __webpack_require__(501);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is
	     * called when the Observable is initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or `complete` can be called to notify
	     * of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @returns {Observable} a new observable with the Operator applied
	     * @description creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    /**
	     * @method subscribe
	     * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
	     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
	     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
	     *  the error will be thrown as unhandled
	     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
	     * @returns {Subscription} a subscription reference to the registered handlers
	     * @description registers handlers for handling emitted values, error and completions from the observable, and
	     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
	     */
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var subscriber = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        if (operator) {
	            subscriber.add(this._subscribe(operator.call(subscriber)));
	        }
	        else {
	            subscriber.add(this._subscribe(subscriber));
	        }
	        if (subscriber.syncErrorThrowable) {
	            subscriber.syncErrorThrowable = false;
	            if (subscriber.syncErrorThrown) {
	                throw subscriber.syncErrorValue;
	            }
	        }
	        return subscriber;
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {any} [thisArg] a `this` context for the `next` handler function
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @returns {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, thisArg, PromiseCtor) {
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        var source = this;
	        return new PromiseCtor(function (resolve, reject) {
	            source.subscribe(function (value) {
	                var result = tryCatch_1.tryCatch(next).call(thisArg, value);
	                if (result === errorObject_1.errorObject) {
	                    reject(errorObject_1.errorObject.e);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * @method Symbol.observable
	     * @returns {Observable} this instance of the observable
	     * @description an interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     */
	    Observable.prototype[SymbolShim_1.SymbolShim.observable] = function () {
	        return this;
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * @static
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @returns {Observable} a new cold observable
	     * @description creates a new cold Observable by calling the Observable constructor
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(71);
	var Subscription_1 = __webpack_require__(19);
	var rxSubscriber_1 = __webpack_require__(103);
	var Observer_1 = __webpack_require__(297);
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.destination = destinationOrNext;
	                    }
	                    else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
	        return this;
	    };
	    return Subscriber;
	}(Subscription_1.Subscription));
	exports.Subscriber = Subscriber;
	var SafeSubscriber = (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parent = _parent;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parent = this._parent;
	            if (!_parent.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parent, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._error) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parent.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            }
	            else {
	                _parent.syncErrorValue = err;
	                _parent.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._complete) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._complete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._complete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parent = this._parent;
	        this._context = null;
	        this._parent = null;
	        _parent.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));
	//# sourceMappingURL=Subscriber.js.map

/***/ },
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var OuterSubscriber = (function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        _super.apply(this, arguments);
	    }
	    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
	        this.destination.error(error);
	    };
	    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.destination.complete();
	    };
	    return OuterSubscriber;
	}(Subscriber_1.Subscriber));
	exports.OuterSubscriber = OuterSubscriber;
	//# sourceMappingURL=OuterSubscriber.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(21);
	var isArray_1 = __webpack_require__(33);
	var isPromise_1 = __webpack_require__(106);
	var Observable_1 = __webpack_require__(2);
	var SymbolShim_1 = __webpack_require__(41);
	var InnerSubscriber_1 = __webpack_require__(296);
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
	    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    if (destination.isUnsubscribed) {
	        return;
	    }
	    if (result instanceof Observable_1.Observable) {
	        if (result._isScalar) {
	            destination.next(result.value);
	            destination.complete();
	            return;
	        }
	        else {
	            return result.subscribe(destination);
	        }
	    }
	    if (isArray_1.isArray(result)) {
	        for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
	            destination.next(result[i]);
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (isPromise_1.isPromise(result)) {
	        result.then(function (value) {
	            if (!destination.isUnsubscribed) {
	                destination.next(value);
	                destination.complete();
	            }
	        }, function (err) { return destination.error(err); })
	            .then(null, function (err) {
	            // Escaping the Promise trap: globally throw unhandled errors
	            root_1.root.setTimeout(function () { throw err; });
	        });
	        return destination;
	    }
	    else if (typeof result[SymbolShim_1.SymbolShim.iterator] === 'function') {
	        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
	            var item = result_1[_i];
	            destination.next(item);
	            if (destination.isUnsubscribed) {
	                break;
	            }
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (typeof result[SymbolShim_1.SymbolShim.observable] === 'function') {
	        var obs = result[SymbolShim_1.SymbolShim.observable]();
	        if (typeof obs.subscribe !== 'function') {
	            destination.error('invalid observable');
	        }
	        else {
	            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
	        }
	    }
	    else {
	        destination.error(new TypeError('unknown type returned'));
	    }
	}
	exports.subscribeToResult = subscribeToResult;
	//# sourceMappingURL=subscribeToResult.js.map

/***/ },
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(12);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var Subscriber_1 = __webpack_require__(6);
	var Subscription_1 = __webpack_require__(19);
	var SubjectSubscription_1 = __webpack_require__(495);
	var rxSubscriber_1 = __webpack_require__(103);
	var throwError_1 = __webpack_require__(179);
	var ObjectUnsubscribedError_1 = __webpack_require__(177);
	var Subject = (function (_super) {
	    __extends(Subject, _super);
	    function Subject(destination, source) {
	        _super.call(this);
	        this.destination = destination;
	        this.source = source;
	        this.observers = [];
	        this.isUnsubscribed = false;
	        this.isStopped = false;
	        this.hasErrored = false;
	        this.dispatching = false;
	        this.hasCompleted = false;
	    }
	    Subject.prototype.lift = function (operator) {
	        var subject = new Subject(this.destination || this, this);
	        subject.operator = operator;
	        return subject;
	    };
	    Subject.prototype.add = function (subscription) {
	        Subscription_1.Subscription.prototype.add.call(this, subscription);
	    };
	    Subject.prototype.remove = function (subscription) {
	        Subscription_1.Subscription.prototype.remove.call(this, subscription);
	    };
	    Subject.prototype.unsubscribe = function () {
	        Subscription_1.Subscription.prototype.unsubscribe.call(this);
	    };
	    Subject.prototype._subscribe = function (subscriber) {
	        if (this.source) {
	            return this.source.subscribe(subscriber);
	        }
	        else {
	            if (subscriber.isUnsubscribed) {
	                return;
	            }
	            else if (this.hasErrored) {
	                return subscriber.error(this.errorValue);
	            }
	            else if (this.hasCompleted) {
	                return subscriber.complete();
	            }
	            this.throwIfUnsubscribed();
	            var subscription = new SubjectSubscription_1.SubjectSubscription(this, subscriber);
	            this.observers.push(subscriber);
	            return subscription;
	        }
	    };
	    Subject.prototype._unsubscribe = function () {
	        this.source = null;
	        this.isStopped = true;
	        this.observers = null;
	        this.destination = null;
	    };
	    Subject.prototype.next = function (value) {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.dispatching = true;
	        this._next(value);
	        this.dispatching = false;
	        if (this.hasErrored) {
	            this._error(this.errorValue);
	        }
	        else if (this.hasCompleted) {
	            this._complete();
	        }
	    };
	    Subject.prototype.error = function (err) {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.isStopped = true;
	        this.hasErrored = true;
	        this.errorValue = err;
	        if (this.dispatching) {
	            return;
	        }
	        this._error(err);
	    };
	    Subject.prototype.complete = function () {
	        this.throwIfUnsubscribed();
	        if (this.isStopped) {
	            return;
	        }
	        this.isStopped = true;
	        this.hasCompleted = true;
	        if (this.dispatching) {
	            return;
	        }
	        this._complete();
	    };
	    Subject.prototype.asObservable = function () {
	        var observable = new SubjectObservable(this);
	        return observable;
	    };
	    Subject.prototype._next = function (value) {
	        if (this.destination) {
	            this.destination.next(value);
	        }
	        else {
	            this._finalNext(value);
	        }
	    };
	    Subject.prototype._finalNext = function (value) {
	        var index = -1;
	        var observers = this.observers.slice(0);
	        var len = observers.length;
	        while (++index < len) {
	            observers[index].next(value);
	        }
	    };
	    Subject.prototype._error = function (err) {
	        if (this.destination) {
	            this.destination.error(err);
	        }
	        else {
	            this._finalError(err);
	        }
	    };
	    Subject.prototype._finalError = function (err) {
	        var index = -1;
	        var observers = this.observers;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.observers = null;
	        this.isUnsubscribed = true;
	        if (observers) {
	            var len = observers.length;
	            while (++index < len) {
	                observers[index].error(err);
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    Subject.prototype._complete = function () {
	        if (this.destination) {
	            this.destination.complete();
	        }
	        else {
	            this._finalComplete();
	        }
	    };
	    Subject.prototype._finalComplete = function () {
	        var index = -1;
	        var observers = this.observers;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.observers = null;
	        this.isUnsubscribed = true;
	        if (observers) {
	            var len = observers.length;
	            while (++index < len) {
	                observers[index].complete();
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    Subject.prototype.throwIfUnsubscribed = function () {
	        if (this.isUnsubscribed) {
	            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
	        }
	    };
	    Subject.prototype[rxSubscriber_1.rxSubscriber] = function () {
	        return new Subscriber_1.Subscriber(this);
	    };
	    Subject.create = function (destination, source) {
	        return new Subject(destination, source);
	    };
	    return Subject;
	}(Observable_1.Observable));
	exports.Subject = Subject;
	var SubjectObservable = (function (_super) {
	    __extends(SubjectObservable, _super);
	    function SubjectObservable(source) {
	        _super.call(this);
	        this.source = source;
	    }
	    return SubjectObservable;
	}(Observable_1.Observable));
	//# sourceMappingURL=Subject.js.map

/***/ },
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsapScheduler_1 = __webpack_require__(490);
	exports.asap = new AsapScheduler_1.AsapScheduler();
	//# sourceMappingURL=asap.js.map

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(33);
	var isObject_1 = __webpack_require__(178);
	var isFunction_1 = __webpack_require__(71);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	var Subscription = (function () {
	    function Subscription(_unsubscribe) {
	        this.isUnsubscribed = false;
	        if (_unsubscribe) {
	            this._unsubscribe = _unsubscribe;
	        }
	    }
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this._subscriptions = null;
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                (errors = errors || []).push(errorObject_1.errorObject.e);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError) {
	                            errors = errors.concat(err.errors);
	                        }
	                        else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError(errors);
	        }
	    };
	    Subscription.prototype.add = function (subscription) {
	        // return early if:
	        //  1. the subscription is null
	        //  2. we're attempting to add our this
	        //  3. we're attempting to add the static `empty` Subscription
	        if (!subscription || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var sub = subscription;
	        switch (typeof subscription) {
	            case 'function':
	                sub = new Subscription(subscription);
	            case 'object':
	                if (sub.isUnsubscribed || typeof sub.unsubscribe !== 'function') {
	                    break;
	                }
	                else if (this.isUnsubscribed) {
	                    sub.unsubscribe();
	                }
	                else {
	                    (this._subscriptions || (this._subscriptions = [])).push(sub);
	                }
	                break;
	            default:
	                throw new Error('Unrecognized subscription ' + subscription + ' added to Subscription.');
	        }
	    };
	    Subscription.prototype.remove = function (subscription) {
	        // return early if:
	        //  1. the subscription is null
	        //  2. we're attempting to remove ourthis
	        //  3. we're attempting to remove the static `empty` Subscription
	        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.isUnsubscribed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	exports.Subscription = Subscription;
	var UnsubscriptionError = (function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this, 'unsubscriptoin error(s)');
	        this.errors = errors;
	        this.name = 'UnsubscriptionError';
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=Subscription.js.map

/***/ },
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {"use strict";
	var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	};
	exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
	/* tslint:disable:no-unused-variable */
	var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	var freeGlobal = objectTypes[typeof global] && global;
	if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    exports.root = freeGlobal;
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(160)(module), (function() { return this; }())))

/***/ },
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var ScalarObservable_1 = __webpack_require__(99);
	var EmptyObservable_1 = __webpack_require__(32);
	var isScheduler_1 = __webpack_require__(34);
	var ArrayObservable = (function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        }
	        else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        }
	        else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        }
	        else {
	            return new EmptyObservable_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	}(Observable_1.Observable));
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var EmptyObservable = (function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (_a) {
	        var subscriber = _a.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	        }
	        else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	}(Observable_1.Observable));
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ConnectableObservable_1 = __webpack_require__(400);
	/**
	 * Returns an Observable that emits the results of invoking a specified selector on items
	 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
	 *
	 * <img src="./img/multicast.png" width="100%">
	 *
	 * @param {Function} selector - a function that can use the multicasted source stream
	 * as many times as needed, without causing multiple subscriptions to the source stream.
	 * Subscribers to the given source will receive all notifications of the source from the
	 * time of the subscription forward.
	 * @returns {Observable} an Observable that emits the results of invoking the selector
	 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
	 * the underlying stream.
	 */
	function multicast(subjectOrSubjectFactory) {
	    var subjectFactory;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    }
	    else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(21);
	function polyfillSymbol(root) {
	    var Symbol = ensureSymbol(root);
	    ensureIterator(Symbol, root);
	    ensureObservable(Symbol);
	    ensureFor(Symbol);
	    return Symbol;
	}
	exports.polyfillSymbol = polyfillSymbol;
	function ensureFor(Symbol) {
	    if (!Symbol.for) {
	        Symbol.for = symbolForPolyfill;
	    }
	}
	exports.ensureFor = ensureFor;
	var id = 0;
	function ensureSymbol(root) {
	    if (!root.Symbol) {
	        root.Symbol = function symbolFuncPolyfill(description) {
	            return "@@Symbol(" + description + "):" + id++;
	        };
	    }
	    return root.Symbol;
	}
	exports.ensureSymbol = ensureSymbol;
	function symbolForPolyfill(key) {
	    return '@@' + key;
	}
	exports.symbolForPolyfill = symbolForPolyfill;
	function ensureIterator(Symbol, root) {
	    if (!Symbol.iterator) {
	        if (typeof Symbol.for === 'function') {
	            Symbol.iterator = Symbol.for('iterator');
	        }
	        else if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
	            // Bug for mozilla version
	            Symbol.iterator = '@@iterator';
	        }
	        else if (root.Map) {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(root.Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' && root.Map.prototype[key] === root.Map.prototype['entries']) {
	                    Symbol.iterator = key;
	                    break;
	                }
	            }
	        }
	        else {
	            Symbol.iterator = '@@iterator';
	        }
	    }
	}
	exports.ensureIterator = ensureIterator;
	function ensureObservable(Symbol) {
	    if (!Symbol.observable) {
	        if (typeof Symbol.for === 'function') {
	            Symbol.observable = Symbol.for('observable');
	        }
	        else {
	            Symbol.observable = '@@observable';
	        }
	    }
	}
	exports.ensureObservable = ensureObservable;
	exports.SymbolShim = polyfillSymbol(root_1.root);
	//# sourceMappingURL=SymbolShim.js.map

/***/ },
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(21);
	var Observable_1 = __webpack_require__(2);
	var PromiseObservable = (function (_super) {
	    __extends(PromiseObservable, _super);
	    function PromiseObservable(promise, scheduler) {
	        if (scheduler === void 0) { scheduler = null; }
	        _super.call(this);
	        this.promise = promise;
	        this.scheduler = scheduler;
	    }
	    PromiseObservable.create = function (promise, scheduler) {
	        if (scheduler === void 0) { scheduler = null; }
	        return new PromiseObservable(promise, scheduler);
	    };
	    PromiseObservable.prototype._subscribe = function (subscriber) {
	        var _this = this;
	        var promise = this.promise;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            if (this._isScalar) {
	                if (!subscriber.isUnsubscribed) {
	                    subscriber.next(this.value);
	                    subscriber.complete();
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.next(value);
	                        subscriber.complete();
	                    }
	                }, function (err) {
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.error(err);
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	        else {
	            if (this._isScalar) {
	                if (!subscriber.isUnsubscribed) {
	                    return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
	                    }
	                }, function (err) {
	                    if (!subscriber.isUnsubscribed) {
	                        subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	    };
	    return PromiseObservable;
	}(Observable_1.Observable));
	exports.PromiseObservable = PromiseObservable;
	function dispatchNext(_a) {
	    var value = _a.value, subscriber = _a.subscriber;
	    if (!subscriber.isUnsubscribed) {
	        subscriber.next(value);
	        subscriber.complete();
	    }
	}
	function dispatchError(_a) {
	    var err = _a.err, subscriber = _a.subscriber;
	    if (!subscriber.isUnsubscribed) {
	        subscriber.error(err);
	    }
	}
	//# sourceMappingURL=PromiseObservable.js.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	function mergeAll(concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeAllOperator(concurrent));
	}
	exports.mergeAll = mergeAll;
	var MergeAllOperator = (function () {
	    function MergeAllOperator(concurrent) {
	        this.concurrent = concurrent;
	    }
	    MergeAllOperator.prototype.call = function (observer) {
	        return new MergeAllSubscriber(observer, this.concurrent);
	    };
	    return MergeAllOperator;
	}());
	exports.MergeAllOperator = MergeAllOperator;
	var MergeAllSubscriber = (function (_super) {
	    __extends(MergeAllSubscriber, _super);
	    function MergeAllSubscriber(destination, concurrent) {
	        _super.call(this, destination);
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	    }
	    MergeAllSubscriber.prototype._next = function (observable) {
	        if (this.active < this.concurrent) {
	            this.active++;
	            this.add(subscribeToResult_1.subscribeToResult(this, observable));
	        }
	        else {
	            this.buffer.push(observable);
	        }
	    };
	    MergeAllSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeAllSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeAllSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeAllSubscriber = MergeAllSubscriber;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";
	function isDate(value) {
	    return value instanceof Date && !isNaN(+value);
	}
	exports.isDate = isDate;
	//# sourceMappingURL=isDate.js.map

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var Notification = (function () {
	    function Notification(kind, value, exception) {
	        this.kind = kind;
	        this.value = value;
	        this.exception = exception;
	        this.hasValue = kind === 'N';
	    }
	    Notification.prototype.observe = function (observer) {
	        switch (this.kind) {
	            case 'N':
	                return observer.next && observer.next(this.value);
	            case 'E':
	                return observer.error && observer.error(this.exception);
	            case 'C':
	                return observer.complete && observer.complete();
	        }
	    };
	    Notification.prototype.do = function (next, error, complete) {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return next && next(this.value);
	            case 'E':
	                return error && error(this.exception);
	            case 'C':
	                return complete && complete();
	        }
	    };
	    Notification.prototype.accept = function (nextOrObserver, error, complete) {
	        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	            return this.observe(nextOrObserver);
	        }
	        else {
	            return this.do(nextOrObserver, error, complete);
	        }
	    };
	    Notification.prototype.toObservable = function () {
	        var kind = this.kind;
	        switch (kind) {
	            case 'N':
	                return Observable_1.Observable.of(this.value);
	            case 'E':
	                return Observable_1.Observable.throw(this.exception);
	            case 'C':
	                return Observable_1.Observable.empty();
	        }
	    };
	    Notification.createNext = function (value) {
	        if (typeof value !== 'undefined') {
	            return new Notification('N', value);
	        }
	        return this.undefinedValueNotification;
	    };
	    Notification.createError = function (err) {
	        return new Notification('E', undefined, err);
	    };
	    Notification.createComplete = function () {
	        return this.completeNotification;
	    };
	    Notification.completeNotification = new Notification('C');
	    Notification.undefinedValueNotification = new Notification('N', undefined);
	    return Notification;
	}());
	exports.Notification = Notification;
	//# sourceMappingURL=Notification.js.map

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var ScalarObservable = (function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done, value = state.value, subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.next(value);
	            if (!subscriber.isUnsubscribed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	}(Observable_1.Observable));
	exports.ScalarObservable = ScalarObservable;
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var Notification_1 = __webpack_require__(98);
	function observeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return this.lift(new ObserveOnOperator(scheduler, delay));
	}
	exports.observeOn = observeOn;
	var ObserveOnOperator = (function () {
	    function ObserveOnOperator(scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnOperator.prototype.call = function (subscriber) {
	        return new ObserveOnSubscriber(subscriber, this.scheduler, this.delay);
	    };
	    return ObserveOnOperator;
	}());
	exports.ObserveOnOperator = ObserveOnOperator;
	var ObserveOnSubscriber = (function (_super) {
	    __extends(ObserveOnSubscriber, _super);
	    function ObserveOnSubscriber(destination, scheduler, delay) {
	        if (delay === void 0) { delay = 0; }
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.delay = delay;
	    }
	    ObserveOnSubscriber.dispatch = function (_a) {
	        var notification = _a.notification, destination = _a.destination;
	        notification.observe(destination);
	    };
	    ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
	        this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	    };
	    ObserveOnSubscriber.prototype._next = function (value) {
	        this.scheduleMessage(Notification_1.Notification.createNext(value));
	    };
	    ObserveOnSubscriber.prototype._error = function (err) {
	        this.scheduleMessage(Notification_1.Notification.createError(err));
	    };
	    ObserveOnSubscriber.prototype._complete = function () {
	        this.scheduleMessage(Notification_1.Notification.createComplete());
	    };
	    return ObserveOnSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ObserveOnSubscriber = ObserveOnSubscriber;
	var ObserveOnMessage = (function () {
	    function ObserveOnMessage(notification, destination) {
	        this.notification = notification;
	        this.destination = destination;
	    }
	    return ObserveOnMessage;
	}());
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that applies a specified accumulator function to the first item emitted by a source Observable,
	 * then feeds the result of that function along with the second item emitted by the source Observable into the same
	 * function, and so on until all items have been emitted by the source Observable, and emits the final result from
	 * the final call to your function as its sole item.
	 * This technique, which is called "reduce" here, is sometimes called "aggregate," "fold," "accumulate," "compress," or
	 * "inject" in other programming contexts.
	 *
	 * <img src="./img/reduce.png" width="100%">
	 *
	 * @param {initialValue} the initial (seed) accumulator value
	 * @param {accumulator} an accumulator function to be invoked on each item emitted by the source Observable, the
	 * result of which will be used in the next accumulator call.
	 * @returns {Observable} an Observable that emits a single item that is the result of accumulating the output from the
	 * items emitted by the source Observable.
	 */
	function reduce(project, seed) {
	    return this.lift(new ReduceOperator(project, seed));
	}
	exports.reduce = reduce;
	var ReduceOperator = (function () {
	    function ReduceOperator(project, seed) {
	        this.project = project;
	        this.seed = seed;
	    }
	    ReduceOperator.prototype.call = function (subscriber) {
	        return new ReduceSubscriber(subscriber, this.project, this.seed);
	    };
	    return ReduceOperator;
	}());
	exports.ReduceOperator = ReduceOperator;
	var ReduceSubscriber = (function (_super) {
	    __extends(ReduceSubscriber, _super);
	    function ReduceSubscriber(destination, project, seed) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.acc = seed;
	        this.project = project;
	        this.hasSeed = typeof seed !== 'undefined';
	    }
	    ReduceSubscriber.prototype._next = function (value) {
	        if (this.hasValue || (this.hasValue = this.hasSeed)) {
	            this._tryReduce(value);
	        }
	        else {
	            this.acc = value;
	            this.hasValue = true;
	        }
	    };
	    ReduceSubscriber.prototype._tryReduce = function (value) {
	        var result;
	        try {
	            result = this.project(this.acc, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.acc = result;
	    };
	    ReduceSubscriber.prototype._complete = function () {
	        if (this.hasValue || this.hasSeed) {
	            this.destination.next(this.acc);
	        }
	        this.destination.complete();
	    };
	    return ReduceSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ReduceSubscriber = ReduceSubscriber;
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(21);
	var Subscription_1 = __webpack_require__(19);
	var FutureAction = (function (_super) {
	    __extends(FutureAction, _super);
	    function FutureAction(scheduler, work) {
	        _super.call(this);
	        this.scheduler = scheduler;
	        this.work = work;
	    }
	    FutureAction.prototype.execute = function () {
	        if (this.isUnsubscribed) {
	            throw new Error('How did did we execute a canceled Action?');
	        }
	        this.work(this.state);
	    };
	    FutureAction.prototype.schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (this.isUnsubscribed) {
	            return this;
	        }
	        return this._schedule(state, delay);
	    };
	    FutureAction.prototype._schedule = function (state, delay) {
	        var _this = this;
	        if (delay === void 0) { delay = 0; }
	        this.delay = delay;
	        this.state = state;
	        var id = this.id;
	        if (id != null) {
	            this.id = undefined;
	            root_1.root.clearTimeout(id);
	        }
	        this.id = root_1.root.setTimeout(function () {
	            _this.id = null;
	            var scheduler = _this.scheduler;
	            scheduler.actions.push(_this);
	            scheduler.flush();
	        }, delay);
	        return this;
	    };
	    FutureAction.prototype._unsubscribe = function () {
	        var _a = this, id = _a.id, scheduler = _a.scheduler;
	        var actions = scheduler.actions;
	        var index = actions.indexOf(this);
	        if (id != null) {
	            this.id = null;
	            root_1.root.clearTimeout(id);
	        }
	        if (index !== -1) {
	            actions.splice(index, 1);
	        }
	        this.work = null;
	        this.state = null;
	        this.scheduler = null;
	    };
	    return FutureAction;
	}(Subscription_1.Subscription));
	exports.FutureAction = FutureAction;
	//# sourceMappingURL=FutureAction.js.map

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var SymbolShim_1 = __webpack_require__(41);
	/**
	 * rxSubscriber symbol is a symbol for retreiving an "Rx safe" Observer from an object
	 * "Rx safety" can be defined as an object that has all of the traits of an Rx Subscriber,
	 * including the ability to add and remove subscriptions to the subscription chain and
	 * guarantees involving event triggering (can't "next" after unsubscription, etc).
	 */
	exports.rxSubscriber = SymbolShim_1.SymbolShim.for('rxSubscriber');
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var EmptyError = (function (_super) {
	    __extends(EmptyError, _super);
	    function EmptyError() {
	        _super.call(this, 'no elements in sequence');
	        this.name = 'EmptyError';
	    }
	    return EmptyError;
	}(Error));
	exports.EmptyError = EmptyError;
	//# sourceMappingURL=EmptyError.js.map

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(33);
	function isNumeric(val) {
	    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	    // subtraction forces infinities to NaN
	    // adding 1 corrects loss of precision from parseFloat (#15100)
	    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
	}
	exports.isNumeric = isNumeric;
	;
	//# sourceMappingURL=isNumeric.js.map

/***/ },
/* 106 */
/***/ function(module, exports) {

	"use strict";
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ },
/* 107 */
/***/ function(module, exports) {

	"use strict";
	/* tslint:disable:no-empty */
	function noop() { }
	exports.noop = noop;
	//# sourceMappingURL=noop.js.map

/***/ },
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 160 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var combineLatest_1 = __webpack_require__(165);
	Observable_1.Observable.prototype.combineLatest = combineLatest_1.combineLatest;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var concat_1 = __webpack_require__(166);
	Observable_1.Observable.prototype.concat = concat_1.concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var merge_1 = __webpack_require__(449);
	Observable_1.Observable.prototype.merge = merge_1.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var zip_1 = __webpack_require__(173);
	Observable_1.Observable.prototype.zip = zip_1.zipProto;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ArrayObservable_1 = __webpack_require__(31);
	var isArray_1 = __webpack_require__(33);
	var isScheduler_1 = __webpack_require__(34);
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	/**
	 * Combines the values from this observable with values from observables passed as arguments. This is done by subscribing
	 * to each observable, in order, and collecting an array of each of the most recent values any time any of the observables
	 * emits, then either taking that array and passing it as arguments to an option `project` function and emitting the return
	 * value of that, or just emitting the array of recent values directly if there is no `project` function.
	 * @param {...Observable} observables the observables to combine the source with
	 * @param {function} [project] an optional function to project the values from the combined recent values into a new value for emission.
	 * @returns {Observable} an observable of other projected values from the most recent values from each observable, or an array of each of
	 * the most recent values from each observable.
	 */
	function combineLatest() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    observables.unshift(this);
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new CombineLatestOperator(project));
	}
	exports.combineLatest = combineLatest;
	/* tslint:enable:max-line-length */
	function combineLatestStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = null;
	    var scheduler = null;
	    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
	        scheduler = observables.pop();
	    }
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
	        observables = observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new CombineLatestOperator(project));
	}
	exports.combineLatestStatic = combineLatestStatic;
	var CombineLatestOperator = (function () {
	    function CombineLatestOperator(project) {
	        this.project = project;
	    }
	    CombineLatestOperator.prototype.call = function (subscriber) {
	        return new CombineLatestSubscriber(subscriber, this.project);
	    };
	    return CombineLatestOperator;
	}());
	exports.CombineLatestOperator = CombineLatestOperator;
	var CombineLatestSubscriber = (function (_super) {
	    __extends(CombineLatestSubscriber, _super);
	    function CombineLatestSubscriber(destination, project) {
	        _super.call(this, destination);
	        this.project = project;
	        this.active = 0;
	        this.values = [];
	        this.observables = [];
	        this.toRespond = [];
	    }
	    CombineLatestSubscriber.prototype._next = function (observable) {
	        var toRespond = this.toRespond;
	        toRespond.push(toRespond.length);
	        this.observables.push(observable);
	    };
	    CombineLatestSubscriber.prototype._complete = function () {
	        var observables = this.observables;
	        var len = observables.length;
	        if (len === 0) {
	            this.destination.complete();
	        }
	        else {
	            this.active = len;
	            for (var i = 0; i < len; i++) {
	                var observable = observables[i];
	                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
	        if ((this.active -= 1) === 0) {
	            this.destination.complete();
	        }
	    };
	    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var values = this.values;
	        values[outerIndex] = innerValue;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(outerIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	        if (toRespond.length === 0) {
	            if (this.project) {
	                this._tryProject(values);
	            }
	            else {
	                this.destination.next(values);
	            }
	        }
	    };
	    CombineLatestSubscriber.prototype._tryProject = function (values) {
	        var result;
	        try {
	            result = this.project.apply(this, values);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return CombineLatestSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.CombineLatestSubscriber = CombineLatestSubscriber;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isScheduler_1 = __webpack_require__(34);
	var ArrayObservable_1 = __webpack_require__(31);
	var mergeAll_1 = __webpack_require__(69);
	/**
	 * Joins this observable with multiple other observables by subscribing to them one at a time, starting with the source,
	 * and merging their results into the returned observable. Will wait for each observable to complete before moving
	 * on to the next.
	 * @params {...Observable} the observables to concatenate
	 * @params {Scheduler} [scheduler] an optional scheduler to schedule each observable subscription on.
	 * @returns {Observable} All values of each passed observable merged into a single observable, in order, in serial fashion.
	 */
	function concat() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    return concatStatic.apply(void 0, [this].concat(observables));
	}
	exports.concat = concat;
	/**
	 * Joins multiple observables together by subscribing to them one at a time and merging their results
	 * into the returned observable. Will wait for each observable to complete before moving on to the next.
	 * @params {...Observable} the observables to concatenate
	 * @params {Scheduler} [scheduler] an optional scheduler to schedule each observable subscription on.
	 * @returns {Observable} All values of each passed observable merged into a single observable, in order, in serial fashion.
	 */
	function concatStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var scheduler = null;
	    var args = observables;
	    if (isScheduler_1.isScheduler(args[observables.length - 1])) {
	        scheduler = args.pop();
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatStatic = concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	function distinctUntilChanged(compare, keySelector) {
	    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
	}
	exports.distinctUntilChanged = distinctUntilChanged;
	var DistinctUntilChangedOperator = (function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        this.compare = compare;
	        this.keySelector = keySelector;
	    }
	    DistinctUntilChangedOperator.prototype.call = function (subscriber) {
	        return new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector);
	    };
	    return DistinctUntilChangedOperator;
	}());
	var DistinctUntilChangedSubscriber = (function (_super) {
	    __extends(DistinctUntilChangedSubscriber, _super);
	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        _super.call(this, destination);
	        this.keySelector = keySelector;
	        this.hasKey = false;
	        if (typeof compare === 'function') {
	            this.compare = compare;
	        }
	    }
	    DistinctUntilChangedSubscriber.prototype.compare = function (x, y) {
	        return x === y;
	    };
	    DistinctUntilChangedSubscriber.prototype._next = function (value) {
	        var keySelector = this.keySelector;
	        var key = value;
	        if (keySelector) {
	            key = tryCatch_1.tryCatch(this.keySelector)(value);
	            if (key === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        var result = false;
	        if (this.hasKey) {
	            result = tryCatch_1.tryCatch(this.compare)(this.key, key);
	            if (result === errorObject_1.errorObject) {
	                return this.destination.error(errorObject_1.errorObject.e);
	            }
	        }
	        else {
	            this.hasKey = true;
	        }
	        if (Boolean(result) === false) {
	            this.key = key;
	            this.destination.next(value);
	        }
	    };
	    return DistinctUntilChangedSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Similar to the well-known `Array.prototype.filter` method, this operator filters values down to a set
	 * allowed by a `select` function
	 *
	 * @param {Function} select a function that is used to select the resulting values
	 *  if it returns `true`, the value is emitted, if `false` the value is not passed to the resulting observable
	 * @param {any} [thisArg] an optional argument to determine the value of `this` in the `select` function
	 * @returns {Observable} an observable of values allowed by the select function
	 */
	function filter(select, thisArg) {
	    return this.lift(new FilterOperator(select, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(select, thisArg) {
	        this.select = select;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber) {
	        return new FilterSubscriber(subscriber, this.select, this.thisArg);
	    };
	    return FilterOperator;
	}());
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, select, thisArg) {
	        _super.call(this, destination);
	        this.select = select;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.select = select;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.select.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that searches for the first item in the source Observable that
	 * matches the specified condition, and returns the first occurence in the source.
	 * @param {function} predicate function called with each item to test for condition matching.
	 * @returns {Observable} an Observable of the first item that matches the condition.
	 */
	function find(predicate, thisArg) {
	    if (typeof predicate !== 'function') {
	        throw new TypeError('predicate is not a function');
	    }
	    return this.lift(new FindValueOperator(predicate, this, false, thisArg));
	}
	exports.find = find;
	var FindValueOperator = (function () {
	    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
	        this.predicate = predicate;
	        this.source = source;
	        this.yieldIndex = yieldIndex;
	        this.thisArg = thisArg;
	    }
	    FindValueOperator.prototype.call = function (observer) {
	        return new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg);
	    };
	    return FindValueOperator;
	}());
	exports.FindValueOperator = FindValueOperator;
	var FindValueSubscriber = (function (_super) {
	    __extends(FindValueSubscriber, _super);
	    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.yieldIndex = yieldIndex;
	        this.thisArg = thisArg;
	        this.index = 0;
	    }
	    FindValueSubscriber.prototype.notifyComplete = function (value) {
	        var destination = this.destination;
	        destination.next(value);
	        destination.complete();
	    };
	    FindValueSubscriber.prototype._next = function (value) {
	        var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
	        var index = this.index++;
	        try {
	            var result = predicate.call(thisArg || this, value, index, this.source);
	            if (result) {
	                this.notifyComplete(this.yieldIndex ? index : value);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    FindValueSubscriber.prototype._complete = function () {
	        this.notifyComplete(this.yieldIndex ? -1 : undefined);
	    };
	    return FindValueSubscriber;
	}(Subscriber_1.Subscriber));
	exports.FindValueSubscriber = FindValueSubscriber;
	//# sourceMappingURL=find.js.map

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var subscribeToResult_1 = __webpack_require__(10);
	var OuterSubscriber_1 = __webpack_require__(9);
	/**
	 * Returns an Observable that emits items based on applying a function that you supply to each item emitted by the
	 * source Observable, where that function returns an Observable, and then merging those resulting Observables and
	 * emitting the results of this merger.
	 *
	 * <img src="./img/mergeMap.png" width="100%">
	 *
	 * @param {Function} a function that, when applied to an item emitted by the source Observable, returns an Observable.
	 * @returns {Observable} an Observable that emits the result of applying the transformation function to each item
	 * emitted by the source Observable and merging the results of the Observables obtained from this transformation
	 */
	function mergeMap(project, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
	}
	exports.mergeMap = mergeMap;
	var MergeMapOperator = (function () {
	    function MergeMapOperator(project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapOperator.prototype.call = function (observer) {
	        return new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent);
	    };
	    return MergeMapOperator;
	}());
	exports.MergeMapOperator = MergeMapOperator;
	var MergeMapSubscriber = (function (_super) {
	    __extends(MergeMapSubscriber, _super);
	    function MergeMapSubscriber(destination, project, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            this._tryNext(value);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapSubscriber.prototype._tryNext = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.active++;
	        this._innerSub(result, value, index);
	    };
	    MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    MergeMapSubscriber.prototype._notifyResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeMapSubscriber = MergeMapSubscriber;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	function mergeMapTo(observable, resultSelector, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeMapToOperator(observable, resultSelector, concurrent));
	}
	exports.mergeMapTo = mergeMapTo;
	// TODO: Figure out correct signature here: an Operator<Observable<T>, R2>
	//       needs to implement call(observer: Subscriber<R2>): Subscriber<Observable<T>>
	var MergeMapToOperator = (function () {
	    function MergeMapToOperator(ish, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        this.ish = ish;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }
	    MergeMapToOperator.prototype.call = function (observer) {
	        return new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent);
	    };
	    return MergeMapToOperator;
	}());
	exports.MergeMapToOperator = MergeMapToOperator;
	var MergeMapToSubscriber = (function (_super) {
	    __extends(MergeMapToSubscriber, _super);
	    function MergeMapToSubscriber(destination, ish, resultSelector, concurrent) {
	        if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	        _super.call(this, destination);
	        this.ish = ish;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeMapToSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            var resultSelector = this.resultSelector;
	            var index = this.index++;
	            var ish = this.ish;
	            var destination = this.destination;
	            this.active++;
	            this._innerSub(ish, destination, resultSelector, value, index);
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeMapToSubscriber.prototype._innerSub = function (ish, destination, resultSelector, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeMapToSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            this.destination.complete();
	        }
	    };
	    MergeMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    MergeMapToSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        var result;
	        try {
	            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        destination.next(result);
	    };
	    MergeMapToSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    MergeMapToSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return MergeMapToSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeMapToSubscriber = MergeMapToSubscriber;
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(21);
	function toPromise(PromiseCtor) {
	    var _this = this;
	    if (!PromiseCtor) {
	        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	            PromiseCtor = root_1.root.Rx.config.Promise;
	        }
	        else if (root_1.root.Promise) {
	            PromiseCtor = root_1.root.Promise;
	        }
	    }
	    if (!PromiseCtor) {
	        throw new Error('no Promise impl found');
	    }
	    return new PromiseCtor(function (resolve, reject) {
	        var value;
	        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
	    });
	}
	exports.toPromise = toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ArrayObservable_1 = __webpack_require__(31);
	var isArray_1 = __webpack_require__(33);
	var Subscriber_1 = __webpack_require__(6);
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	var SymbolShim_1 = __webpack_require__(41);
	function zipProto() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return zipStatic.apply(this, observables);
	}
	exports.zipProto = zipProto;
	/* tslint:enable:max-line-length */
	function zipStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var project = observables[observables.length - 1];
	    if (typeof project === 'function') {
	        observables.pop();
	    }
	    return new ArrayObservable_1.ArrayObservable(observables).lift(new ZipOperator(project));
	}
	exports.zipStatic = zipStatic;
	var ZipOperator = (function () {
	    function ZipOperator(project) {
	        this.project = project;
	    }
	    ZipOperator.prototype.call = function (subscriber) {
	        return new ZipSubscriber(subscriber, this.project);
	    };
	    return ZipOperator;
	}());
	exports.ZipOperator = ZipOperator;
	var ZipSubscriber = (function (_super) {
	    __extends(ZipSubscriber, _super);
	    function ZipSubscriber(destination, project, values) {
	        if (values === void 0) { values = Object.create(null); }
	        _super.call(this, destination);
	        this.index = 0;
	        this.iterators = [];
	        this.active = 0;
	        this.project = (typeof project === 'function') ? project : null;
	        this.values = values;
	    }
	    ZipSubscriber.prototype._next = function (value) {
	        var iterators = this.iterators;
	        var index = this.index++;
	        if (isArray_1.isArray(value)) {
	            iterators.push(new StaticArrayIterator(value));
	        }
	        else if (typeof value[SymbolShim_1.SymbolShim.iterator] === 'function') {
	            iterators.push(new StaticIterator(value[SymbolShim_1.SymbolShim.iterator]()));
	        }
	        else {
	            iterators.push(new ZipBufferIterator(this.destination, this, value, index));
	        }
	    };
	    ZipSubscriber.prototype._complete = function () {
	        var iterators = this.iterators;
	        var len = iterators.length;
	        this.active = len;
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            if (iterator.stillUnsubscribed) {
	                this.add(iterator.subscribe(iterator, i));
	            }
	            else {
	                this.active--; // not an observable
	            }
	        }
	    };
	    ZipSubscriber.prototype.notifyInactive = function () {
	        this.active--;
	        if (this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    ZipSubscriber.prototype.checkIterators = function () {
	        var iterators = this.iterators;
	        var len = iterators.length;
	        var destination = this.destination;
	        // abort if not all of them have values
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
	                return;
	            }
	        }
	        var shouldComplete = false;
	        var args = [];
	        for (var i = 0; i < len; i++) {
	            var iterator = iterators[i];
	            var result = iterator.next();
	            // check to see if it's completed now that you've gotten
	            // the next value.
	            if (iterator.hasCompleted()) {
	                shouldComplete = true;
	            }
	            if (result.done) {
	                destination.complete();
	                return;
	            }
	            args.push(result.value);
	        }
	        if (this.project) {
	            this._tryProject(args);
	        }
	        else {
	            destination.next(args);
	        }
	        if (shouldComplete) {
	            destination.complete();
	        }
	    };
	    ZipSubscriber.prototype._tryProject = function (args) {
	        var result;
	        try {
	            result = this.project.apply(this, args);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return ZipSubscriber;
	}(Subscriber_1.Subscriber));
	exports.ZipSubscriber = ZipSubscriber;
	var StaticIterator = (function () {
	    function StaticIterator(iterator) {
	        this.iterator = iterator;
	        this.nextResult = iterator.next();
	    }
	    StaticIterator.prototype.hasValue = function () {
	        return true;
	    };
	    StaticIterator.prototype.next = function () {
	        var result = this.nextResult;
	        this.nextResult = this.iterator.next();
	        return result;
	    };
	    StaticIterator.prototype.hasCompleted = function () {
	        var nextResult = this.nextResult;
	        return nextResult && nextResult.done;
	    };
	    return StaticIterator;
	}());
	var StaticArrayIterator = (function () {
	    function StaticArrayIterator(array) {
	        this.array = array;
	        this.index = 0;
	        this.length = 0;
	        this.length = array.length;
	    }
	    StaticArrayIterator.prototype[SymbolShim_1.SymbolShim.iterator] = function () {
	        return this;
	    };
	    StaticArrayIterator.prototype.next = function (value) {
	        var i = this.index++;
	        var array = this.array;
	        return i < this.length ? { value: array[i], done: false } : { done: true };
	    };
	    StaticArrayIterator.prototype.hasValue = function () {
	        return this.array.length > this.index;
	    };
	    StaticArrayIterator.prototype.hasCompleted = function () {
	        return this.array.length === this.index;
	    };
	    return StaticArrayIterator;
	}());
	var ZipBufferIterator = (function (_super) {
	    __extends(ZipBufferIterator, _super);
	    function ZipBufferIterator(destination, parent, observable, index) {
	        _super.call(this, destination);
	        this.parent = parent;
	        this.observable = observable;
	        this.index = index;
	        this.stillUnsubscribed = true;
	        this.buffer = [];
	        this.isComplete = false;
	    }
	    ZipBufferIterator.prototype[SymbolShim_1.SymbolShim.iterator] = function () {
	        return this;
	    };
	    // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
	    //    this is legit because `next()` will never be called by a subscription in this case.
	    ZipBufferIterator.prototype.next = function () {
	        var buffer = this.buffer;
	        if (buffer.length === 0 && this.isComplete) {
	            return { done: true };
	        }
	        else {
	            return { value: buffer.shift(), done: false };
	        }
	    };
	    ZipBufferIterator.prototype.hasValue = function () {
	        return this.buffer.length > 0;
	    };
	    ZipBufferIterator.prototype.hasCompleted = function () {
	        return this.buffer.length === 0 && this.isComplete;
	    };
	    ZipBufferIterator.prototype.notifyComplete = function () {
	        if (this.buffer.length > 0) {
	            this.isComplete = true;
	            this.parent.notifyInactive();
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.buffer.push(innerValue);
	        this.parent.checkIterators();
	    };
	    ZipBufferIterator.prototype.subscribe = function (value, index) {
	        return subscribeToResult_1.subscribeToResult(this, this.observable, this, index);
	    };
	    return ZipBufferIterator;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=zip.js.map

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueAction_1 = __webpack_require__(491);
	var FutureAction_1 = __webpack_require__(102);
	var QueueScheduler = (function () {
	    function QueueScheduler() {
	        this.active = false;
	        this.actions = [];
	        this.scheduledId = null;
	    }
	    QueueScheduler.prototype.now = function () {
	        return Date.now();
	    };
	    QueueScheduler.prototype.flush = function () {
	        if (this.active || this.scheduledId) {
	            return;
	        }
	        this.active = true;
	        var actions = this.actions;
	        for (var action = void 0; action = actions.shift();) {
	            action.execute();
	        }
	        this.active = false;
	    };
	    QueueScheduler.prototype.schedule = function (work, delay, state) {
	        if (delay === void 0) { delay = 0; }
	        return (delay <= 0) ?
	            this.scheduleNow(work, state) :
	            this.scheduleLater(work, delay, state);
	    };
	    QueueScheduler.prototype.scheduleNow = function (work, state) {
	        return new QueueAction_1.QueueAction(this, work).schedule(state);
	    };
	    QueueScheduler.prototype.scheduleLater = function (work, delay, state) {
	        return new FutureAction_1.FutureAction(this, work).schedule(state, delay);
	    };
	    return QueueScheduler;
	}());
	exports.QueueScheduler = QueueScheduler;
	//# sourceMappingURL=QueueScheduler.js.map

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(14);
	var AsyncSubject = (function (_super) {
	    __extends(AsyncSubject, _super);
	    function AsyncSubject() {
	        _super.apply(this, arguments);
	        this.value = null;
	        this.hasNext = false;
	    }
	    AsyncSubject.prototype._subscribe = function (subscriber) {
	        if (this.hasCompleted && this.hasNext) {
	            subscriber.next(this.value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    AsyncSubject.prototype._next = function (value) {
	        this.value = value;
	        this.hasNext = true;
	    };
	    AsyncSubject.prototype._complete = function () {
	        var index = -1;
	        var observers = this.observers;
	        var len = observers.length;
	        // optimization to block our SubjectSubscriptions from
	        // splicing themselves out of the observers list one by one.
	        this.isUnsubscribed = true;
	        if (this.hasNext) {
	            while (++index < len) {
	                var o = observers[index];
	                o.next(this.value);
	                o.complete();
	            }
	        }
	        else {
	            while (++index < len) {
	                observers[index].complete();
	            }
	        }
	        this.isUnsubscribed = false;
	        this.unsubscribe();
	    };
	    return AsyncSubject;
	}(Subject_1.Subject));
	exports.AsyncSubject = AsyncSubject;
	//# sourceMappingURL=AsyncSubject.js.map

/***/ },
/* 176 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ArgumentOutOfRangeError = (function (_super) {
	    __extends(ArgumentOutOfRangeError, _super);
	    function ArgumentOutOfRangeError() {
	        _super.call(this, 'argument out of range');
	        this.name = 'ArgumentOutOfRangeError';
	    }
	    return ArgumentOutOfRangeError;
	}(Error));
	exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
	//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ },
/* 177 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * an error thrown when an action is invalid because the object
	 * has been unsubscribed
	 */
	var ObjectUnsubscribedError = (function (_super) {
	    __extends(ObjectUnsubscribedError, _super);
	    function ObjectUnsubscribedError() {
	        _super.call(this, 'object unsubscribed');
	        this.name = 'ObjectUnsubscribedError';
	    }
	    return ObjectUnsubscribedError;
	}(Error));
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
	//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ },
/* 178 */
/***/ function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 179 */
/***/ function(module, exports) {

	"use strict";
	function throwError(e) { throw e; }
	exports.throwError = throwError;
	//# sourceMappingURL=throwError.js.map

/***/ },
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var metadata_1 = __webpack_require__(274);
	var map_1 = __webpack_require__(590);
	var _Map = typeof Map === "function" ? Map : map_1.createMapPolyfill();
	// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
	function getOrCreateMetadataMap(target, targetKey, create) {
	    var targetMetadata = metadata_1.__Metadata__.get(target);
	    if (!targetMetadata) {
	        if (!create) {
	            return undefined;
	        }
	        // TODO: fix the typescript types
	        // targetMetadata = new _Map<string | symbol, _Map<any, any>>();
	        targetMetadata = new _Map();
	        metadata_1.__Metadata__.set(target, targetMetadata);
	    }
	    var keyMetadata = targetMetadata.get(targetKey);
	    if (!keyMetadata) {
	        if (!create) {
	            return undefined;
	        }
	        // TODO: fix the typescript types
	        // keyMetadata = new _Map<any, any>();
	        keyMetadata = new _Map();
	        targetMetadata.set(targetKey, keyMetadata);
	    }
	    return keyMetadata;
	}
	exports.getOrCreateMetadataMap = getOrCreateMetadataMap;


/***/ },
/* 271 */
/***/ function(module, exports) {

	var functionPrototype = Function.prototype;
	function getProtoOfType(O) {
	    var proto = Object.getPrototypeOf(O);
	    if (typeof O !== "function" || O === functionPrototype) {
	        return proto;
	    }
	    // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
	    // Try to determine the superclass constructor. Compatible implementations
	    // must either set __proto__ on a subclass constructor to the superclass constructor,
	    // or ensure each class has a valid `constructor` property on its prototype that
	    // points back to the constructor.
	    // If this is not the same as Function.[[Prototype]], then this is definately inherited.
	    // This is the case when in ES6 or when using __proto__ in a compatible browser.
	    if (proto !== functionPrototype) {
	        return proto;
	    }
	    // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
	    var prototype = O.prototype;
	    var prototypeProto = prototype && Object.getPrototypeOf(prototype);
	    if (prototypeProto == null || prototypeProto === Object.prototype) {
	        return proto;
	    }
	    // if the constructor was not a function, then we cannot determine the heritage.
	    var constructor = prototypeProto.constructor;
	    if (typeof constructor !== "function") {
	        return proto;
	    }
	    // if we have some kind of self-reference, then we cannot determine the heritage.
	    if (constructor === O) {
	        return proto;
	    }
	    // we have a pretty good guess at the heritage.
	    return constructor;
	}
	exports.getProtoOfType = getProtoOfType;


/***/ },
/* 272 */
/***/ function(module, exports) {

	exports.hasOwn = Object.prototype.hasOwnProperty;


/***/ },
/* 273 */
/***/ function(module, exports) {

	exports.UUID_SIZE = 16;
	exports.WEAKMAP_PREFIX = "@@WeakMap@@";


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var weakmap_1 = __webpack_require__(592);
	var _WeakMap = typeof WeakMap === "function" ? WeakMap : weakmap_1.createWeakMapPolyfill();
	// TODO: fix the typescript types
	// export const __Metadata__ = new _WeakMap<Object, Map<string | symbol, Map<any, any>>>();
	exports.__Metadata__ = new _WeakMap();


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var get_or_create_metadata_map_1 = __webpack_require__(270);
	// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
	function ordinaryOwnMetadataKeys(target, targetKey) {
	    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(target, targetKey, /*create*/ false);
	    var keys = [];
	    if (metadataMap) {
	        metadataMap.forEach(function (_, key) { return keys.push(key); });
	    }
	    return keys;
	}
	exports.ordinaryOwnMetadataKeys = ordinaryOwnMetadataKeys;


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	var get_proto_of_type_1 = __webpack_require__(271);
	var to_property_key_1 = __webpack_require__(589);
	var is_constructor_1 = __webpack_require__(584);
	var is_undefined_1 = __webpack_require__(587);
	var is_array_1 = __webpack_require__(583);
	var is_object_1 = __webpack_require__(585);
	var metadata_1 = __webpack_require__(274);
	var ordinary_own_metadata_keys_1 = __webpack_require__(275);
	var get_or_create_metadata_map_1 = __webpack_require__(270);
	var ordinary_metadata_keys_1 = __webpack_require__(588);
	/**
	 * Applies a set of decorators to a property of a target object.
	 * @param decorators An array of decorators.
	 * @param target The target object.
	 * @param targetKey (Optional) The property key to decorate.
	 * @param targetDescriptor (Optional) The property descriptor for the target key
	 * @remarks Decorators are applied in reverse order.
	 * @example
	 *
	 *     class C {
	 *         // property declarations are not part of ES6, though they are valid in TypeScript:
	 *         // static staticProperty;
	 *         // property;
	 *
	 *         constructor(p) { }
	 *         static staticMethod(p) { }
	 *         method(p) { }
	 *     }
	 *
	 *     // constructor
	 *     C = Reflect.decorate(decoratorsArray, C);
	 *
	 *     // property (on constructor)
	 *     Reflect.decorate(decoratorsArray, C, "staticProperty");
	 *
	 *     // property (on prototype)
	 *     Reflect.decorate(decoratorsArray, C.prototype, "property");
	 *
	 *     // method (on constructor)
	 *     Object.defineProperty(C, "staticMethod",
	 *         Reflect.decorate(decoratorsArray, C, "staticMethod",
	 *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
	 *
	 *     // method (on prototype)
	 *     Object.defineProperty(C.prototype, "method",
	 *         Reflect.decorate(decoratorsArray, C.prototype, "method",
	 *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
	 *
	 */
	function decorate(decorators, target, targetKey, targetDescriptor) {
	    if (!is_undefined_1.isUndefined(targetDescriptor)) {
	        if (!is_array_1.isArray(decorators)) {
	            throw new TypeError('decorators ' + decorators + ' is not an array of decorators');
	        }
	        else if (!is_object_1.isObject(target)) {
	            throw new TypeError('target ' + target + ' is not an object');
	        }
	        else if (is_undefined_1.isUndefined(targetKey)) {
	            throw new TypeError('target key ' + targetKey + 'is undefined');
	        }
	        else if (!is_object_1.isObject(targetDescriptor)) {
	            throw new TypeError('targetDescriptor ' + targetDescriptor + ' is not an object');
	        }
	        targetKey = to_property_key_1.toPropertyKey(targetKey);
	        return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
	    }
	    else if (!is_undefined_1.isUndefined(targetKey)) {
	        if (!is_array_1.isArray(decorators)) {
	            throw new TypeError('decorators ' + decorators + ' is not an array of decorators');
	        }
	        else if (!is_object_1.isObject(target)) {
	            throw new TypeError('target ' + target + ' is not an object');
	        }
	        targetKey = to_property_key_1.toPropertyKey(targetKey);
	        return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
	    }
	    else {
	        if (!is_array_1.isArray(decorators)) {
	            throw new TypeError('decorators ' + decorators + ' is not an array of decorators');
	        }
	        else if (!is_constructor_1.isConstructor(target)) {
	            throw new TypeError('target ' + target + ' is not a constructor');
	        }
	        return DecorateConstructor(decorators, target);
	    }
	}
	exports.decorate = decorate;
	/**
	 * A default metadata decorator factory that can be used on a class, class member, or parameter.
	 * @param metadataKey The key for the metadata entry.
	 * @param metadataValue The value for the metadata entry.
	 * @returns A decorator function.
	 * @remarks
	 * If `metadataKey` is already defined for the target and target key, the
	 * metadataValue for that key will be overwritten.
	 * @example
	 *
	 *     // constructor
	 *     @Reflect.metadata(key, value)
	 *     class C {
	 *     }
	 *
	 *     // property (on constructor, TypeScript only)
	 *     class C {
	 *         @Reflect.metadata(key, value)
	 *         static staticProperty;
	 *     }
	 *
	 *     // property (on prototype, TypeScript only)
	 *     class C {
	 *         @Reflect.metadata(key, value)
	 *         property;
	 *     }
	 *
	 *     // method (on constructor)
	 *     class C {
	 *         @Reflect.metadata(key, value)
	 *         static staticMethod() { }
	 *     }
	 *
	 *     // method (on prototype)
	 *     class C {
	 *         @Reflect.metadata(key, value)
	 *         method() { }
	 *     }
	 *
	 */
	function metadata(metadataKey, metadataValue) {
	    function decorator(target, targetKey) {
	        if (!is_undefined_1.isUndefined(targetKey)) {
	            if (!is_object_1.isObject(target)) {
	                throw new TypeError('target ' + target + ' is not an object');
	            }
	            targetKey = to_property_key_1.toPropertyKey(targetKey);
	            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	        }
	        else {
	            if (!is_constructor_1.isConstructor(target)) {
	                throw new TypeError('target ' + target + ' is not a constructor');
	            }
	            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
	        }
	    }
	    return decorator;
	}
	exports.metadata = metadata;
	/**
	 * Define a unique metadata entry on the target.
	 * @param metadataKey A key used to store and retrieve metadata.
	 * @param metadataValue A value that contains attached metadata.
	 * @param target The target object on which to define metadata.
	 * @param targetKey (Optional) The property key for the target.
	 * @example
	 *
	 *     class C {
	 *         // property declarations are not part of ES6, though they are valid in TypeScript:
	 *         // static staticProperty;
	 *         // property;
	 *
	 *         constructor(p) { }
	 *         static staticMethod(p) { }
	 *         method(p) { }
	 *     }
	 *
	 *     // constructor
	 *     Reflect.defineMetadata("custom:annotation", options, C);
	 *
	 *     // property (on constructor)
	 *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
	 *
	 *     // property (on prototype)
	 *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
	 *
	 *     // method (on constructor)
	 *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
	 *
	 *     // method (on prototype)
	 *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
	 *
	 *     // decorator factory as metadata-producing annotation.
	 *     function MyAnnotation(options): Decorator {
	 *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
	 *     }
	 *
	 */
	function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	    if (!is_object_1.isObject(target)) {
	        throw new TypeError('target ' + target + ' is not an object');
	    }
	    else if (!is_undefined_1.isUndefined(targetKey)) {
	        targetKey = to_property_key_1.toPropertyKey(targetKey);
	    }
	    return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	}
	exports.defineMetadata = defineMetadata;
	/**
	 * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
	 * @param metadataKey A key used to store and retrieve metadata.
	 * @param target The target object on which the metadata is defined.
	 * @param targetKey (Optional) The property key for the target.
	 * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
	 * @example
	 *
	 *     class C {
	 *         // property declarations are not part of ES6, though they are valid in TypeScript:
	 *         // static staticProperty;
	 *         // property;
	 *
	 *         constructor(p) { }
	 *         static staticMethod(p) { }
	 *         method(p) { }
	 *     }
	 *
	 *     // constructor
	 *     result = Reflect.hasMetadata("custom:annotation", C);
	 *
	 *     // property (on constructor)
	 *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
	 *
	 *     // property (on prototype)
	 *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
	 *
	 *     // method (on constructor)
	 *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
	 *
	 *     // method (on prototype)
	 *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
	 *
	 */
	function hasMetadata(metadataKey, target, targetKey) {
	    if (!is_object_1.isObject(target)) {
	        throw new TypeError('target ' + target + ' is not an object');
	    }
	    else if (!is_undefined_1.isUndefined(targetKey)) {
	        targetKey = to_property_key_1.toPropertyKey(targetKey);
	    }
	    return OrdinaryHasMetadata(metadataKey, target, targetKey);
	}
	exports.hasMetadata = hasMetadata;
	/**
	 * Gets a value indicating whether the target object has the provided metadata key defined.
	 * @param metadataKey A key used to store and retrieve metadata.
	 * @param target The target object on which the metadata is defined.
	 * @param targetKey (Optional) The property key for the target.
	 * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
	 * @example
	 *
	 *     class C {
	 *         // property declarations are not part of ES6, though they are valid in TypeScript:
	 *         // static staticProperty;
	 *         // property;
	 *
	 *         constructor(p) { }
	 *         static staticMethod(p) { }
	 *         method(p) { }
	 *     }
	 *
	 *     // constructor
	 *     result = Reflect.hasOwnMetadata("custom:annotation", C);
	 *
	 *     // property (on constructor)
	 *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
	 *
	 *     // property (on prototype)
	 *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
	 *
	 *     // method (on constructor)
	 *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
	 *
	 *     // method (on prototype)
	 *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
	 *
	 */
	function hasOwnMetadata(metadataKey, target, targetKey) {
	    if (!is_object_1.isObject(target)) {
	        throw new TypeError('target ' + target + ' is not an object');
	    }
	    else if (!is_undefined_1.isUndefined(targetKey)) {
	        targetKey = to_property_key_1.toPropertyKey(targetKey);
	    }
	    return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
	}
	exports.hasOwnMetadata = hasOwnMetadata;
	/**
	 * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
	 * @param metadataKey A key used to store and retrieve metadata.
	 * @param target The target object on which the metadata is defined.
	 * @param targetKey (Optional) The property key for the target.
	 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	 * @example
	 *
	 *     class C {
	 *         // property declarations are not part of ES6, though they are valid in TypeScript:
	 *         // static staticProperty;
	 *         // property;
	 *
	 *         constructor(p) { }
	 *         static staticMethod(p) { }
	 *         method(p) { }
	 *     }
	 *
	 *     // constructor
	 *     result = Reflect.getMetadata("custom:annotation", C);
	 *
	 *     // property (on constructor)
	 *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
	 *
	 *     // property (on prototype)
	 *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
	 *
	 *     // method (on constructor)
	 *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
	 *
	 *     // method (on prototype)
	 *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
	 *
	 */
	function getMetadata(metadataKey, target, targetKey) {
	    if (!is_object_1.isObject(target)) {
	        throw new TypeError('target ' + target + ' is not an object');
	    }
	    else if (!is_undefined_1.isUndefined(targetKey)) {
	        targetKey = to_property_key_1.toPropertyKey(targetKey);
	    }
	    return OrdinaryGetMetadata(metadataKey, target, targetKey);
	}
	exports.getMetadata = getMetadata;
	/**
	 * Gets the metadata value for the provided metadata key on the target object.
	 * @param metadataKey A key used to store and retrieve metadata.
	 * @param target The target object on which the metadata is defined.
	 * @param targetKey (Optional) The property key for the target.
	 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	 * @example
	 *
	 *     class C {
	 *         // property declarations are not part of ES6, though they are valid in TypeScript:
	 *         // static staticProperty;
	 *         // property;
	 *
	 *         constructor(p) { }
	 *         static staticMethod(p) { }
	 *         method(p) { }
	 *     }
	 *
	 *     // constructor
	 *     result = Reflect.getOwnMetadata("custom:annotation", C);
	 *
	 *     // property (on constructor)
	 *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
	 *
	 *     // property (on prototype)
	 *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
	 *
	 *     // method (on constructor)
	 *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
	 *
	 *     // method (on prototype)
	 *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
	 *
	 */
	function getOwnMetadata(metadataKey, target, targetKey) {
	    if (!is_object_1.isObject(target)) {
	        throw new TypeError('target ' + target + ' is not an object');
	    }
	    else if (!is_undefined_1.isUndefined(targetKey)) {
	        targetKey = to_property_key_1.toPropertyKey(targetKey);
	    }
	    return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
	}
	exports.getOwnMetadata = getOwnMetadata;
	/**
	 * Gets the metadata keys defined on the target object or its prototype chain.
	 * @param target The target object on which the metadata is defined.
	 * @param targetKey (Optional) The property key for the target.
	 * @returns An array of unique metadata keys.
	 * @example
	 *
	 *     class C {
	 *         // property declarations are not part of ES6, though they are valid in TypeScript:
	 *         // static staticProperty;
	 *         // property;
	 *
	 *         constructor(p) { }
	 *         static staticMethod(p) { }
	 *         method(p) { }
	 *     }
	 *
	 *     // constructor
	 *     result = Reflect.getMetadataKeys(C);
	 *
	 *     // property (on constructor)
	 *     result = Reflect.getMetadataKeys(C, "staticProperty");
	 *
	 *     // property (on prototype)
	 *     result = Reflect.getMetadataKeys(C.prototype, "property");
	 *
	 *     // method (on constructor)
	 *     result = Reflect.getMetadataKeys(C, "staticMethod");
	 *
	 *     // method (on prototype)
	 *     result = Reflect.getMetadataKeys(C.prototype, "method");
	 *
	 */
	function getMetadataKeys(target, targetKey) {
	    if (!is_object_1.isObject(target)) {
	        throw new TypeError('target ' + target + ' is not an object');
	    }
	    else if (!is_undefined_1.isUndefined(targetKey)) {
	        targetKey = to_property_key_1.toPropertyKey(targetKey);
	    }
	    return ordinary_metadata_keys_1.ordinaryMetadataKeys(target, targetKey);
	}
	exports.getMetadataKeys = getMetadataKeys;
	/**
	 * Gets the unique metadata keys defined on the target object.
	 * @param target The target object on which the metadata is defined.
	 * @param targetKey (Optional) The property key for the target.
	 * @returns An array of unique metadata keys.
	 * @example
	 *
	 *     class C {
	 *         // property declarations are not part of ES6, though they are valid in TypeScript:
	 *         // static staticProperty;
	 *         // property;
	 *
	 *         constructor(p) { }
	 *         static staticMethod(p) { }
	 *         method(p) { }
	 *     }
	 *
	 *     // constructor
	 *     result = Reflect.getOwnMetadataKeys(C);
	 *
	 *     // property (on constructor)
	 *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
	 *
	 *     // property (on prototype)
	 *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
	 *
	 *     // method (on constructor)
	 *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
	 *
	 *     // method (on prototype)
	 *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
	 *
	 */
	function getOwnMetadataKeys(target, targetKey) {
	    if (!is_object_1.isObject(target)) {
	        throw new TypeError('target ' + target + ' is not an object');
	    }
	    else if (!is_undefined_1.isUndefined(targetKey)) {
	        targetKey = to_property_key_1.toPropertyKey(targetKey);
	    }
	    return ordinary_own_metadata_keys_1.ordinaryOwnMetadataKeys(target, targetKey);
	}
	exports.getOwnMetadataKeys = getOwnMetadataKeys;
	/**
	 * Deletes the metadata entry from the target object with the provided key.
	 * @param metadataKey A key used to store and retrieve metadata.
	 * @param target The target object on which the metadata is defined.
	 * @param targetKey (Optional) The property key for the target.
	 * @returns `true` if the metadata entry was found and deleted; otherwise, false.
	 * @example
	 *
	 *     class C {
	 *         // property declarations are not part of ES6, though they are valid in TypeScript:
	 *         // static staticProperty;
	 *         // property;
	 *
	 *         constructor(p) { }
	 *         static staticMethod(p) { }
	 *         method(p) { }
	 *     }
	 *
	 *     // constructor
	 *     result = Reflect.deleteMetadata("custom:annotation", C);
	 *
	 *     // property (on constructor)
	 *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
	 *
	 *     // property (on prototype)
	 *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
	 *
	 *     // method (on constructor)
	 *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
	 *
	 *     // method (on prototype)
	 *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
	 *
	 */
	function deleteMetadata(metadataKey, target, targetKey) {
	    if (!is_object_1.isObject(target)) {
	        throw new TypeError('target ' + target + ' is not an object');
	    }
	    else if (!is_undefined_1.isUndefined(targetKey)) {
	        targetKey = to_property_key_1.toPropertyKey(targetKey);
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
	    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(target, targetKey, /*create*/ false);
	    if (is_undefined_1.isUndefined(metadataMap)) {
	        return false;
	    }
	    if (!metadataMap.delete(metadataKey)) {
	        return false;
	    }
	    if (metadataMap.size > 0) {
	        return true;
	    }
	    var targetMetadata = metadata_1.__Metadata__.get(target);
	    targetMetadata.delete(targetKey);
	    if (targetMetadata.size > 0) {
	        return true;
	    }
	    metadata_1.__Metadata__.delete(target);
	    return true;
	}
	exports.deleteMetadata = deleteMetadata;
	function DecorateConstructor(decorators, target) {
	    for (var i = decorators.length - 1; i >= 0; --i) {
	        var decorator = decorators[i];
	        var decorated = decorator(target);
	        if (!is_undefined_1.isUndefined(decorated)) {
	            if (!is_constructor_1.isConstructor(decorated)) {
	                throw new TypeError('target ' + target + ' is not a constructor');
	            }
	            target = decorated;
	        }
	    }
	    return target;
	}
	function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
	    for (var i = decorators.length - 1; i >= 0; --i) {
	        var decorator = decorators[i];
	        var decorated = decorator(target, propertyKey, descriptor);
	        if (!is_undefined_1.isUndefined(decorated)) {
	            if (!is_object_1.isObject(decorated)) {
	                throw new TypeError('decorated ' + decorated + ' is not an object');
	            }
	            descriptor = decorated;
	        }
	    }
	    return descriptor;
	}
	function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
	    for (var i = decorators.length - 1; i >= 0; --i) {
	        var decorator = decorators[i];
	        decorator(target, propertyKey);
	    }
	}
	// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
	function OrdinaryHasMetadata(MetadataKey, O, P) {
	    var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	    if (hasOwn) {
	        return true;
	    }
	    var parent = get_proto_of_type_1.getProtoOfType(O);
	    if (parent !== null) {
	        return OrdinaryHasMetadata(MetadataKey, parent, P);
	    }
	    return false;
	}
	// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
	function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
	    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(O, P, /*create*/ false);
	    if (metadataMap === undefined) {
	        return false;
	    }
	    return Boolean(metadataMap.has(MetadataKey));
	}
	// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
	function OrdinaryGetMetadata(MetadataKey, O, P) {
	    var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	    if (hasOwn) {
	        return OrdinaryGetOwnMetadata(MetadataKey, O, P);
	    }
	    var parent = get_proto_of_type_1.getProtoOfType(O);
	    if (parent !== null) {
	        return OrdinaryGetMetadata(MetadataKey, parent, P);
	    }
	    return undefined;
	}
	// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
	function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
	    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(O, P, /*create*/ false);
	    if (metadataMap === undefined) {
	        return undefined;
	    }
	    return metadataMap.get(MetadataKey);
	}
	// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
	function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	    var metadataMap = get_or_create_metadata_map_1.getOrCreateMetadataMap(O, P, /*create*/ true);
	    metadataMap.set(MetadataKey, MetadataValue);
	}


/***/ },
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var InnerSubscriber = (function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        _super.call(this);
	        this.parent = parent;
	        this.outerValue = outerValue;
	        this.outerIndex = outerIndex;
	        this.index = 0;
	    }
	    InnerSubscriber.prototype._next = function (value) {
	        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
	    };
	    InnerSubscriber.prototype._error = function (error) {
	        this.parent.notifyError(error, this);
	        this.unsubscribe();
	    };
	    InnerSubscriber.prototype._complete = function () {
	        this.parent.notifyComplete(this);
	        this.unsubscribe();
	    };
	    return InnerSubscriber;
	}(Subscriber_1.Subscriber));
	exports.InnerSubscriber = InnerSubscriber;
	//# sourceMappingURL=InnerSubscriber.js.map

/***/ },
/* 297 */
/***/ function(module, exports) {

	"use strict";
	exports.empty = {
	    isUnsubscribed: true,
	    next: function (value) { },
	    error: function (err) { throw err; },
	    complete: function () { }
	};
	//# sourceMappingURL=Observer.js.map

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(6);
	var Operator = (function () {
	    function Operator() {
	    }
	    Operator.prototype.call = function (subscriber) {
	        return new Subscriber_1.Subscriber(subscriber);
	    };
	    return Operator;
	}());
	exports.Operator = Operator;
	//# sourceMappingURL=Operator.js.map

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var BoundCallbackObservable_1 = __webpack_require__(399);
	Observable_1.Observable.bindCallback = BoundCallbackObservable_1.BoundCallbackObservable.create;
	//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var DeferObservable_1 = __webpack_require__(401);
	Observable_1.Observable.defer = DeferObservable_1.DeferObservable.create;
	//# sourceMappingURL=defer.js.map

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var EmptyObservable_1 = __webpack_require__(32);
	Observable_1.Observable.empty = EmptyObservable_1.EmptyObservable.create;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var ForkJoinObservable_1 = __webpack_require__(403);
	Observable_1.Observable.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var FromObservable_1 = __webpack_require__(406);
	Observable_1.Observable.from = FromObservable_1.FromObservable.create;
	//# sourceMappingURL=from.js.map

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var ArrayObservable_1 = __webpack_require__(31);
	Observable_1.Observable.fromArray = ArrayObservable_1.ArrayObservable.create;
	Observable_1.Observable.of = ArrayObservable_1.ArrayObservable.of;
	//# sourceMappingURL=fromArray.js.map

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var FromEventObservable_1 = __webpack_require__(404);
	Observable_1.Observable.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var FromEventPatternObservable_1 = __webpack_require__(405);
	Observable_1.Observable.fromEventPattern = FromEventPatternObservable_1.FromEventPatternObservable.create;
	//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var PromiseObservable_1 = __webpack_require__(68);
	Observable_1.Observable.fromPromise = PromiseObservable_1.PromiseObservable.create;
	//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var IntervalObservable_1 = __webpack_require__(407);
	Observable_1.Observable.interval = IntervalObservable_1.IntervalObservable.create;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var NeverObservable_1 = __webpack_require__(409);
	Observable_1.Observable.never = NeverObservable_1.NeverObservable.create;
	//# sourceMappingURL=never.js.map

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var RangeObservable_1 = __webpack_require__(410);
	Observable_1.Observable.range = RangeObservable_1.RangeObservable.create;
	//# sourceMappingURL=range.js.map

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var ErrorObservable_1 = __webpack_require__(402);
	Observable_1.Observable.throw = ErrorObservable_1.ErrorObservable.create;
	//# sourceMappingURL=throw.js.map

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var TimerObservable_1 = __webpack_require__(412);
	Observable_1.Observable.timer = TimerObservable_1.TimerObservable.create;
	//# sourceMappingURL=timer.js.map

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var buffer_1 = __webpack_require__(413);
	Observable_1.Observable.prototype.buffer = buffer_1.buffer;
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var bufferCount_1 = __webpack_require__(414);
	Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var bufferTime_1 = __webpack_require__(415);
	Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var bufferToggle_1 = __webpack_require__(416);
	Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var bufferWhen_1 = __webpack_require__(417);
	Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var catch_1 = __webpack_require__(418);
	Observable_1.Observable.prototype.catch = catch_1._catch;
	//# sourceMappingURL=catch.js.map

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var combineAll_1 = __webpack_require__(419);
	Observable_1.Observable.prototype.combineAll = combineAll_1.combineAll;
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var concatAll_1 = __webpack_require__(420);
	Observable_1.Observable.prototype.concatAll = concatAll_1.concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var concatMap_1 = __webpack_require__(421);
	Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var concatMapTo_1 = __webpack_require__(422);
	Observable_1.Observable.prototype.concatMapTo = concatMapTo_1.concatMapTo;
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var count_1 = __webpack_require__(423);
	Observable_1.Observable.prototype.count = count_1.count;
	//# sourceMappingURL=count.js.map

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var debounce_1 = __webpack_require__(424);
	Observable_1.Observable.prototype.debounce = debounce_1.debounce;
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var debounceTime_1 = __webpack_require__(425);
	Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var defaultIfEmpty_1 = __webpack_require__(426);
	Observable_1.Observable.prototype.defaultIfEmpty = defaultIfEmpty_1.defaultIfEmpty;
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var delay_1 = __webpack_require__(427);
	Observable_1.Observable.prototype.delay = delay_1.delay;
	//# sourceMappingURL=delay.js.map

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var dematerialize_1 = __webpack_require__(428);
	Observable_1.Observable.prototype.dematerialize = dematerialize_1.dematerialize;
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var distinctUntilChanged_1 = __webpack_require__(167);
	Observable_1.Observable.prototype.distinctUntilChanged = distinctUntilChanged_1.distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var distinctUntilKeyChanged_1 = __webpack_require__(429);
	var observableProto = Observable_1.Observable.prototype;
	observableProto.distinctUntilKeyChanged = distinctUntilKeyChanged_1.distinctUntilKeyChanged;
	//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var do_1 = __webpack_require__(430);
	Observable_1.Observable.prototype.do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var elementAt_1 = __webpack_require__(431);
	var observableProto = Observable_1.Observable.prototype;
	observableProto.elementAt = elementAt_1.elementAt;
	//# sourceMappingURL=elementAt.js.map

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var every_1 = __webpack_require__(432);
	Observable_1.Observable.prototype.every = every_1.every;
	//# sourceMappingURL=every.js.map

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var exhaust_1 = __webpack_require__(433);
	var observableProto = Observable_1.Observable.prototype;
	observableProto.exhaust = exhaust_1.exhaust;
	//# sourceMappingURL=exhaust.js.map

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var exhaustMap_1 = __webpack_require__(434);
	var observableProto = Observable_1.Observable.prototype;
	observableProto.exhaustMap = exhaustMap_1.exhaustMap;
	//# sourceMappingURL=exhaustMap.js.map

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var expand_1 = __webpack_require__(435);
	Observable_1.Observable.prototype.expand = expand_1.expand;
	//# sourceMappingURL=expand.js.map

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var filter_1 = __webpack_require__(168);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var finally_1 = __webpack_require__(436);
	Observable_1.Observable.prototype.finally = finally_1._finally;
	//# sourceMappingURL=finally.js.map

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var find_1 = __webpack_require__(169);
	var observableProto = Observable_1.Observable.prototype;
	observableProto.find = find_1.find;
	//# sourceMappingURL=find.js.map

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var findIndex_1 = __webpack_require__(437);
	var observableProto = Observable_1.Observable.prototype;
	observableProto.findIndex = findIndex_1.findIndex;
	//# sourceMappingURL=findIndex.js.map

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var first_1 = __webpack_require__(438);
	Observable_1.Observable.prototype.first = first_1.first;
	//# sourceMappingURL=first.js.map

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var groupBy_1 = __webpack_require__(439);
	Observable_1.Observable.prototype.groupBy = groupBy_1.groupBy;
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var ignoreElements_1 = __webpack_require__(440);
	Observable_1.Observable.prototype.ignoreElements = ignoreElements_1.ignoreElements;
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Everything in this file is generated by the 'tools/generate-operator-patches.ts' script.
	 * Any manual edits to this file will be lost next time the script is run.
	 **/
	var Observable_1 = __webpack_require__(2);
	var inspect_1 = __webpack_require__(441);
	Observable_1.Observable.prototype.inspect = inspect_1.inspect;
	//# sourceMappingURL=inspect.js.map

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/**
	 * Everything in this file is generated by the 'tools/generate-operator-patches.ts' script.
	 * Any manual edits to this file will be lost next time the script is run.
	 **/
	var Observable_1 = __webpack_require__(2);
	var inspectTime_1 = __webpack_require__(442);
	Observable_1.Observable.prototype.inspectTime = inspectTime_1.inspectTime;
	//# sourceMappingURL=inspectTime.js.map

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var isEmpty_1 = __webpack_require__(443);
	var observableProto = Observable_1.Observable.prototype;
	observableProto.isEmpty = isEmpty_1.isEmpty;
	//# sourceMappingURL=isEmpty.js.map

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var last_1 = __webpack_require__(444);
	Observable_1.Observable.prototype.last = last_1.last;
	//# sourceMappingURL=last.js.map

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var map_1 = __webpack_require__(445);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var mapTo_1 = __webpack_require__(446);
	Observable_1.Observable.prototype.mapTo = mapTo_1.mapTo;
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var materialize_1 = __webpack_require__(447);
	Observable_1.Observable.prototype.materialize = materialize_1.materialize;
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var max_1 = __webpack_require__(448);
	var observableProto = Observable_1.Observable.prototype;
	observableProto.max = max_1.max;
	//# sourceMappingURL=max.js.map

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var mergeAll_1 = __webpack_require__(69);
	Observable_1.Observable.prototype.mergeAll = mergeAll_1.mergeAll;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var mergeMap_1 = __webpack_require__(170);
	Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
	Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var mergeMapTo_1 = __webpack_require__(171);
	Observable_1.Observable.prototype.mergeMapTo = mergeMapTo_1.mergeMapTo;
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var mergeScan_1 = __webpack_require__(450);
	var observableProto = Observable_1.Observable.prototype;
	observableProto.mergeScan = mergeScan_1.mergeScan;
	//# sourceMappingURL=mergeScan.js.map

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var min_1 = __webpack_require__(451);
	var observableProto = Observable_1.Observable.prototype;
	observableProto.min = min_1.min;
	//# sourceMappingURL=min.js.map

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var multicast_1 = __webpack_require__(40);
	Observable_1.Observable.prototype.multicast = multicast_1.multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var observeOn_1 = __webpack_require__(100);
	Observable_1.Observable.prototype.observeOn = observeOn_1.observeOn;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var partition_1 = __webpack_require__(452);
	Observable_1.Observable.prototype.partition = partition_1.partition;
	//# sourceMappingURL=partition.js.map

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var publish_1 = __webpack_require__(453);
	Observable_1.Observable.prototype.publish = publish_1.publish;
	//# sourceMappingURL=publish.js.map

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var publishBehavior_1 = __webpack_require__(454);
	Observable_1.Observable.prototype.publishBehavior = publishBehavior_1.publishBehavior;
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var publishLast_1 = __webpack_require__(455);
	Observable_1.Observable.prototype.publishLast = publishLast_1.publishLast;
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var publishReplay_1 = __webpack_require__(456);
	Observable_1.Observable.prototype.publishReplay = publishReplay_1.publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var reduce_1 = __webpack_require__(101);
	Observable_1.Observable.prototype.reduce = reduce_1.reduce;
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var repeat_1 = __webpack_require__(457);
	Observable_1.Observable.prototype.repeat = repeat_1.repeat;
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var retry_1 = __webpack_require__(458);
	Observable_1.Observable.prototype.retry = retry_1.retry;
	//# sourceMappingURL=retry.js.map

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var retryWhen_1 = __webpack_require__(459);
	Observable_1.Observable.prototype.retryWhen = retryWhen_1.retryWhen;
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var sample_1 = __webpack_require__(460);
	Observable_1.Observable.prototype.sample = sample_1.sample;
	//# sourceMappingURL=sample.js.map

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var sampleTime_1 = __webpack_require__(461);
	Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var scan_1 = __webpack_require__(462);
	Observable_1.Observable.prototype.scan = scan_1.scan;
	//# sourceMappingURL=scan.js.map

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var share_1 = __webpack_require__(463);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var single_1 = __webpack_require__(464);
	Observable_1.Observable.prototype.single = single_1.single;
	//# sourceMappingURL=single.js.map

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var skip_1 = __webpack_require__(465);
	Observable_1.Observable.prototype.skip = skip_1.skip;
	//# sourceMappingURL=skip.js.map

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var skipUntil_1 = __webpack_require__(466);
	Observable_1.Observable.prototype.skipUntil = skipUntil_1.skipUntil;
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var skipWhile_1 = __webpack_require__(467);
	Observable_1.Observable.prototype.skipWhile = skipWhile_1.skipWhile;
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var startWith_1 = __webpack_require__(468);
	Observable_1.Observable.prototype.startWith = startWith_1.startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var subscribeOn_1 = __webpack_require__(469);
	Observable_1.Observable.prototype.subscribeOn = subscribeOn_1.subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var switch_1 = __webpack_require__(470);
	Observable_1.Observable.prototype.switch = switch_1._switch;
	//# sourceMappingURL=switch.js.map

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var switchMap_1 = __webpack_require__(471);
	Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var switchMapTo_1 = __webpack_require__(472);
	Observable_1.Observable.prototype.switchMapTo = switchMapTo_1.switchMapTo;
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var take_1 = __webpack_require__(473);
	Observable_1.Observable.prototype.take = take_1.take;
	//# sourceMappingURL=take.js.map

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var takeUntil_1 = __webpack_require__(474);
	Observable_1.Observable.prototype.takeUntil = takeUntil_1.takeUntil;
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var takeWhile_1 = __webpack_require__(475);
	Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var throttle_1 = __webpack_require__(476);
	Observable_1.Observable.prototype.throttle = throttle_1.throttle;
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var throttleTime_1 = __webpack_require__(477);
	Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var timeInterval_1 = __webpack_require__(478);
	var observableProto = Observable_1.Observable.prototype;
	observableProto.timeInterval = timeInterval_1.timeInterval;
	//# sourceMappingURL=timeInterval.js.map

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var timeout_1 = __webpack_require__(479);
	Observable_1.Observable.prototype.timeout = timeout_1.timeout;
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var timeoutWith_1 = __webpack_require__(480);
	Observable_1.Observable.prototype.timeoutWith = timeoutWith_1.timeoutWith;
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var toArray_1 = __webpack_require__(481);
	Observable_1.Observable.prototype.toArray = toArray_1.toArray;
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var toPromise_1 = __webpack_require__(172);
	Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var window_1 = __webpack_require__(482);
	Observable_1.Observable.prototype.window = window_1.window;
	//# sourceMappingURL=window.js.map

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var windowCount_1 = __webpack_require__(483);
	Observable_1.Observable.prototype.windowCount = windowCount_1.windowCount;
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var windowTime_1 = __webpack_require__(484);
	Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var windowToggle_1 = __webpack_require__(485);
	Observable_1.Observable.prototype.windowToggle = windowToggle_1.windowToggle;
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var windowWhen_1 = __webpack_require__(486);
	Observable_1.Observable.prototype.windowWhen = windowWhen_1.windowWhen;
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var withLatestFrom_1 = __webpack_require__(487);
	Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(2);
	var zipAll_1 = __webpack_require__(488);
	Observable_1.Observable.prototype.zipAll = zipAll_1.zipAll;
	//# sourceMappingURL=zipAll.js.map

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var ScalarObservable_1 = __webpack_require__(99);
	var EmptyObservable_1 = __webpack_require__(32);
	var ArrayLikeObservable = (function (_super) {
	    __extends(ArrayLikeObservable, _super);
	    function ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler) {
	        _super.call(this);
	        this.arrayLike = arrayLike;
	        this.scheduler = scheduler;
	        if (!mapFn && !scheduler && arrayLike.length === 1) {
	            this._isScalar = true;
	            this.value = arrayLike[0];
	        }
	        if (mapFn) {
	            this.mapFn = mapFn.bind(thisArg);
	        }
	    }
	    ArrayLikeObservable.create = function (arrayLike, mapFn, thisArg, scheduler) {
	        var length = arrayLike.length;
	        if (length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        else if (length === 1 && !mapFn) {
	            return new ScalarObservable_1.ScalarObservable(arrayLike[0], scheduler);
	        }
	        else {
	            return new ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler);
	        }
	    };
	    ArrayLikeObservable.dispatch = function (state) {
	        var arrayLike = state.arrayLike, index = state.index, length = state.length, mapFn = state.mapFn, subscriber = state.subscriber;
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        if (index >= length) {
	            subscriber.complete();
	            return;
	        }
	        var result = mapFn ? mapFn(arrayLike[index], index) : arrayLike[index];
	        subscriber.next(result);
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayLikeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, arrayLike = _a.arrayLike, mapFn = _a.mapFn, scheduler = _a.scheduler;
	        var length = arrayLike.length;
	        if (scheduler) {
	            return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
	                arrayLike: arrayLike, index: index, length: length, mapFn: mapFn, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < length && !subscriber.isUnsubscribed; i++) {
	                var result = mapFn ? mapFn(arrayLike[i], i) : arrayLike[i];
	                subscriber.next(result);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayLikeObservable;
	}(Observable_1.Observable));
	exports.ArrayLikeObservable = ArrayLikeObservable;
	//# sourceMappingURL=ArrayLikeObservable.js.map

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	var AsyncSubject_1 = __webpack_require__(175);
	var BoundCallbackObservable = (function (_super) {
	    __extends(BoundCallbackObservable, _super);
	    function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
	        _super.call(this);
	        this.callbackFunc = callbackFunc;
	        this.selector = selector;
	        this.args = args;
	        this.scheduler = scheduler;
	    }
	    /* tslint:enable:max-line-length */
	    BoundCallbackObservable.create = function (callbackFunc, selector, scheduler) {
	        if (selector === void 0) { selector = undefined; }
	        return function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            return new BoundCallbackObservable(callbackFunc, selector, args, scheduler);
	        };
	    };
	    BoundCallbackObservable.prototype._subscribe = function (subscriber) {
	        var callbackFunc = this.callbackFunc;
	        var args = this.args;
	        var scheduler = this.scheduler;
	        var subject = this.subject;
	        if (!scheduler) {
	            if (!subject) {
	                subject = this.subject = new AsyncSubject_1.AsyncSubject();
	                var handler = function handlerFn() {
	                    var innerArgs = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        innerArgs[_i - 0] = arguments[_i];
	                    }
	                    var source = handlerFn.source;
	                    var selector = source.selector, subject = source.subject;
	                    if (selector) {
	                        var result_1 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                        if (result_1 === errorObject_1.errorObject) {
	                            subject.error(errorObject_1.errorObject.e);
	                        }
	                        else {
	                            subject.next(result_1);
	                            subject.complete();
	                        }
	                    }
	                    else {
	                        subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
	                        subject.complete();
	                    }
	                };
	                // use named function instance to avoid closure.
	                handler.source = this;
	                var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	                if (result === errorObject_1.errorObject) {
	                    subject.error(errorObject_1.errorObject.e);
	                }
	            }
	            return subject.subscribe(subscriber);
	        }
	        else {
	            return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
	        }
	    };
	    return BoundCallbackObservable;
	}(Observable_1.Observable));
	exports.BoundCallbackObservable = BoundCallbackObservable;
	function dispatch(state) {
	    var self = this;
	    var source = state.source, subscriber = state.subscriber;
	    var callbackFunc = source.callbackFunc, args = source.args, scheduler = source.scheduler;
	    var subject = source.subject;
	    if (!subject) {
	        subject = source.subject = new AsyncSubject_1.AsyncSubject();
	        var handler = function handlerFn() {
	            var innerArgs = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                innerArgs[_i - 0] = arguments[_i];
	            }
	            var source = handlerFn.source;
	            var selector = source.selector, subject = source.subject;
	            if (selector) {
	                var result_2 = tryCatch_1.tryCatch(selector).apply(this, innerArgs);
	                if (result_2 === errorObject_1.errorObject) {
	                    self.add(scheduler.schedule(dispatchError, 0, { err: errorObject_1.errorObject.e, subject: subject }));
	                }
	                else {
	                    self.add(scheduler.schedule(dispatchNext, 0, { value: result_2, subject: subject }));
	                }
	            }
	            else {
	                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
	                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
	            }
	        };
	        // use named function to pass values in without closure
	        handler.source = source;
	        var result = tryCatch_1.tryCatch(callbackFunc).apply(this, args.concat(handler));
	        if (result === errorObject_1.errorObject) {
	            subject.error(errorObject_1.errorObject.e);
	        }
	    }
	    self.add(subject.subscribe(subscriber));
	}
	function dispatchNext(_a) {
	    var value = _a.value, subject = _a.subject;
	    subject.next(value);
	    subject.complete();
	}
	function dispatchError(_a) {
	    var err = _a.err, subject = _a.subject;
	    subject.error(err);
	}
	//# sourceMappingURL=BoundCallbackObservable.js.map

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var Subscriber_1 = __webpack_require__(6);
	var Subscription_1 = __webpack_require__(19);
	var ConnectableObservable = (function (_super) {
	    __extends(ConnectableObservable, _super);
	    function ConnectableObservable(source, subjectFactory) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	    }
	    ConnectableObservable.prototype._subscribe = function (subscriber) {
	        return this.getSubject().subscribe(subscriber);
	    };
	    ConnectableObservable.prototype.getSubject = function () {
	        var subject = this.subject;
	        if (subject && !subject.isUnsubscribed) {
	            return subject;
	        }
	        return (this.subject = this.subjectFactory());
	    };
	    ConnectableObservable.prototype.connect = function () {
	        var source = this.source;
	        var subscription = this.subscription;
	        if (subscription && !subscription.isUnsubscribed) {
	            return subscription;
	        }
	        subscription = source.subscribe(this.getSubject());
	        subscription.add(new ConnectableSubscription(this));
	        return (this.subscription = subscription);
	    };
	    ConnectableObservable.prototype.refCount = function () {
	        return new RefCountObservable(this);
	    };
	    /**
	     * This method is opened for `ConnectableSubscription`.
	     * Not to call from others.
	     */
	    ConnectableObservable.prototype._closeSubscription = function () {
	        this.subject = null;
	        this.subscription = null;
	    };
	    return ConnectableObservable;
	}(Observable_1.Observable));
	exports.ConnectableObservable = ConnectableObservable;
	var ConnectableSubscription = (function (_super) {
	    __extends(ConnectableSubscription, _super);
	    function ConnectableSubscription(connectable) {
	        _super.call(this);
	        this.connectable = connectable;
	    }
	    ConnectableSubscription.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        connectable._closeSubscription();
	        this.connectable = null;
	    };
	    return ConnectableSubscription;
	}(Subscription_1.Subscription));
	var RefCountObservable = (function (_super) {
	    __extends(RefCountObservable, _super);
	    function RefCountObservable(connectable, refCount) {
	        if (refCount === void 0) { refCount = 0; }
	        _super.call(this);
	        this.connectable = connectable;
	        this.refCount = refCount;
	    }
	    RefCountObservable.prototype._subscribe = function (subscriber) {
	        var connectable = this.connectable;
	        var refCountSubscriber = new RefCountSubscriber(subscriber, this);
	        var subscription = connectable.subscribe(refCountSubscriber);
	        if (!subscription.isUnsubscribed && ++this.refCount === 1) {
	            refCountSubscriber.connection = this.connection = connectable.connect();
	        }
	        return subscription;
	    };
	    return RefCountObservable;
	}(Observable_1.Observable));
	var RefCountSubscriber = (function (_super) {
	    __extends(RefCountSubscriber, _super);
	    function RefCountSubscriber(destination, refCountObservable) {
	        _super.call(this, null);
	        this.destination = destination;
	        this.refCountObservable = refCountObservable;
	        this.connection = refCountObservable.connection;
	        destination.add(this);
	    }
	    RefCountSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    RefCountSubscriber.prototype._error = function (err) {
	        this._resetConnectable();
	        this.destination.error(err);
	    };
	    RefCountSubscriber.prototype._complete = function () {
	        this._resetConnectable();
	        this.destination.complete();
	    };
	    RefCountSubscriber.prototype._resetConnectable = function () {
	        var observable = this.refCountObservable;
	        var obsConnection = observable.connection;
	        var subConnection = this.connection;
	        if (subConnection && subConnection === obsConnection) {
	            observable.refCount = 0;
	            obsConnection.unsubscribe();
	            observable.connection = null;
	            this.unsubscribe();
	        }
	    };
	    RefCountSubscriber.prototype._unsubscribe = function () {
	        var observable = this.refCountObservable;
	        if (observable.refCount === 0) {
	            return;
	        }
	        if (--observable.refCount === 0) {
	            var obsConnection = observable.connection;
	            var subConnection = this.connection;
	            if (subConnection && subConnection === obsConnection) {
	                obsConnection.unsubscribe();
	                observable.connection = null;
	            }
	        }
	    };
	    return RefCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	var DeferObservable = (function (_super) {
	    __extends(DeferObservable, _super);
	    function DeferObservable(observableFactory) {
	        _super.call(this);
	        this.observableFactory = observableFactory;
	    }
	    DeferObservable.create = function (observableFactory) {
	        return new DeferObservable(observableFactory);
	    };
	    DeferObservable.prototype._subscribe = function (subscriber) {
	        var result = tryCatch_1.tryCatch(this.observableFactory)();
	        if (result === errorObject_1.errorObject) {
	            subscriber.error(errorObject_1.errorObject.e);
	        }
	        else {
	            result.subscribe(subscriber);
	        }
	    };
	    return DeferObservable;
	}(Observable_1.Observable));
	exports.DeferObservable = DeferObservable;
	//# sourceMappingURL=DeferObservable.js.map

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var ErrorObservable = (function (_super) {
	    __extends(ErrorObservable, _super);
	    function ErrorObservable(error, scheduler) {
	        _super.call(this);
	        this.error = error;
	        this.scheduler = scheduler;
	    }
	    ErrorObservable.create = function (error, scheduler) {
	        return new ErrorObservable(error, scheduler);
	    };
	    ErrorObservable.dispatch = function (_a) {
	        var error = _a.error, subscriber = _a.subscriber;
	        subscriber.error(error);
	    };
	    ErrorObservable.prototype._subscribe = function (subscriber) {
	        var error = this.error;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ErrorObservable.dispatch, 0, {
	                error: error, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.error(error);
	        }
	    };
	    return ErrorObservable;
	}(Observable_1.Observable));
	exports.ErrorObservable = ErrorObservable;
	//# sourceMappingURL=ErrorObservable.js.map

/***/ },
/* 403 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var Subscriber_1 = __webpack_require__(6);
	var PromiseObservable_1 = __webpack_require__(68);
	var EmptyObservable_1 = __webpack_require__(32);
	var isPromise_1 = __webpack_require__(106);
	var isArray_1 = __webpack_require__(33);
	var ForkJoinObservable = (function (_super) {
	    __extends(ForkJoinObservable, _super);
	    function ForkJoinObservable(sources, resultSelector) {
	        _super.call(this);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	    }
	    ForkJoinObservable.create = function () {
	        var sources = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sources[_i - 0] = arguments[_i];
	        }
	        if (sources === null || arguments.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        var resultSelector = null;
	        if (typeof sources[sources.length - 1] === 'function') {
	            resultSelector = sources.pop();
	        }
	        // if the first and only other argument besides the resultSelector is an array
	        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
	        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
	            sources = sources[0];
	        }
	        if (sources.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        return new ForkJoinObservable(sources, resultSelector);
	    };
	    ForkJoinObservable.prototype._subscribe = function (subscriber) {
	        var sources = this.sources;
	        var len = sources.length;
	        var context = { completed: 0, total: len, values: emptyArray(len), selector: this.resultSelector };
	        for (var i = 0; i < len; i++) {
	            var source = sources[i];
	            if (isPromise_1.isPromise(source)) {
	                source = new PromiseObservable_1.PromiseObservable(source);
	            }
	            source.subscribe(new AllSubscriber(subscriber, i, context));
	        }
	    };
	    return ForkJoinObservable;
	}(Observable_1.Observable));
	exports.ForkJoinObservable = ForkJoinObservable;
	var AllSubscriber = (function (_super) {
	    __extends(AllSubscriber, _super);
	    function AllSubscriber(destination, index, context) {
	        _super.call(this, destination);
	        this.index = index;
	        this.context = context;
	        this._value = null;
	    }
	    AllSubscriber.prototype._next = function (value) {
	        this._value = value;
	    };
	    AllSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this._value == null) {
	            destination.complete();
	        }
	        var context = this.context;
	        context.completed++;
	        context.values[this.index] = this._value;
	        var values = context.values;
	        if (context.completed !== values.length) {
	            return;
	        }
	        if (values.every(hasValue)) {
	            var value = context.selector ? context.selector.apply(this, values) :
	                values;
	            destination.next(value);
	        }
	        destination.complete();
	    };
	    return AllSubscriber;
	}(Subscriber_1.Subscriber));
	function hasValue(x) {
	    return x !== null;
	}
	function emptyArray(len) {
	    var arr = [];
	    for (var i = 0; i < len; i++) {
	        arr.push(null);
	    }
	    return arr;
	}
	//# sourceMappingURL=ForkJoinObservable.js.map

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	var Subscription_1 = __webpack_require__(19);
	function isNodeStyleEventEmmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
	}
	function isJQueryStyleEventEmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
	}
	function isNodeList(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object NodeList]';
	}
	function isHTMLCollection(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
	}
	function isEventTarget(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
	}
	var FromEventObservable = (function (_super) {
	    __extends(FromEventObservable, _super);
	    function FromEventObservable(sourceObj, eventName, selector) {
	        _super.call(this);
	        this.sourceObj = sourceObj;
	        this.eventName = eventName;
	        this.selector = selector;
	    }
	    FromEventObservable.create = function (sourceObj, eventName, selector) {
	        return new FromEventObservable(sourceObj, eventName, selector);
	    };
	    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber) {
	        var unsubscribe;
	        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
	            for (var i = 0, len = sourceObj.length; i < len; i++) {
	                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
	            }
	        }
	        else if (isEventTarget(sourceObj)) {
	            sourceObj.addEventListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeEventListener(eventName, handler); };
	        }
	        else if (isJQueryStyleEventEmitter(sourceObj)) {
	            sourceObj.on(eventName, handler);
	            unsubscribe = function () { return sourceObj.off(eventName, handler); };
	        }
	        else if (isNodeStyleEventEmmitter(sourceObj)) {
	            sourceObj.addListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeListener(eventName, handler); };
	        }
	        subscriber.add(new Subscription_1.Subscription(unsubscribe));
	    };
	    FromEventObservable.prototype._subscribe = function (subscriber) {
	        var sourceObj = this.sourceObj;
	        var eventName = this.eventName;
	        var selector = this.selector;
	        var handler = selector ? function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(errorObject_1.errorObject.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { return subscriber.next(e); };
	        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
	    };
	    return FromEventObservable;
	}(Observable_1.Observable));
	exports.FromEventObservable = FromEventObservable;
	//# sourceMappingURL=FromEventObservable.js.map

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var Subscription_1 = __webpack_require__(19);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	var FromEventPatternObservable = (function (_super) {
	    __extends(FromEventPatternObservable, _super);
	    function FromEventPatternObservable(addHandler, removeHandler, selector) {
	        _super.call(this);
	        this.addHandler = addHandler;
	        this.removeHandler = removeHandler;
	        this.selector = selector;
	    }
	    FromEventPatternObservable.create = function (addHandler, removeHandler, selector) {
	        return new FromEventPatternObservable(addHandler, removeHandler, selector);
	    };
	    FromEventPatternObservable.prototype._subscribe = function (subscriber) {
	        var addHandler = this.addHandler;
	        var removeHandler = this.removeHandler;
	        var selector = this.selector;
	        var handler = selector ? function (e) {
	            var result = tryCatch_1.tryCatch(selector).apply(null, arguments);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(result.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { subscriber.next(e); };
	        var result = tryCatch_1.tryCatch(addHandler)(handler);
	        if (result === errorObject_1.errorObject) {
	            subscriber.error(result.e);
	        }
	        subscriber.add(new Subscription_1.Subscription(function () {
	            //TODO: determine whether or not to forward to error handler
	            removeHandler(handler);
	        }));
	    };
	    return FromEventPatternObservable;
	}(Observable_1.Observable));
	exports.FromEventPatternObservable = FromEventPatternObservable;
	//# sourceMappingURL=FromEventPatternObservable.js.map

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isArray_1 = __webpack_require__(33);
	var isFunction_1 = __webpack_require__(71);
	var isPromise_1 = __webpack_require__(106);
	var isScheduler_1 = __webpack_require__(34);
	var PromiseObservable_1 = __webpack_require__(68);
	var IteratorObservable_1 = __webpack_require__(408);
	var ArrayObservable_1 = __webpack_require__(31);
	var ArrayLikeObservable_1 = __webpack_require__(398);
	var SymbolShim_1 = __webpack_require__(41);
	var Observable_1 = __webpack_require__(2);
	var observeOn_1 = __webpack_require__(100);
	var isArrayLike = (function (x) { return x && typeof x.length === 'number'; });
	var FromObservable = (function (_super) {
	    __extends(FromObservable, _super);
	    function FromObservable(ish, scheduler) {
	        _super.call(this, null);
	        this.ish = ish;
	        this.scheduler = scheduler;
	    }
	    FromObservable.create = function (ish, mapFnOrScheduler, thisArg, lastScheduler) {
	        var scheduler = null;
	        var mapFn = null;
	        if (isFunction_1.isFunction(mapFnOrScheduler)) {
	            scheduler = lastScheduler || null;
	            mapFn = mapFnOrScheduler;
	        }
	        else if (isScheduler_1.isScheduler(scheduler)) {
	            scheduler = mapFnOrScheduler;
	        }
	        if (ish != null) {
	            if (typeof ish[SymbolShim_1.SymbolShim.observable] === 'function') {
	                if (ish instanceof Observable_1.Observable && !scheduler) {
	                    return ish;
	                }
	                return new FromObservable(ish, scheduler);
	            }
	            else if (isArray_1.isArray(ish)) {
	                return new ArrayObservable_1.ArrayObservable(ish, scheduler);
	            }
	            else if (isPromise_1.isPromise(ish)) {
	                return new PromiseObservable_1.PromiseObservable(ish, scheduler);
	            }
	            else if (typeof ish[SymbolShim_1.SymbolShim.iterator] === 'function' || typeof ish === 'string') {
	                return new IteratorObservable_1.IteratorObservable(ish, null, null, scheduler);
	            }
	            else if (isArrayLike(ish)) {
	                return new ArrayLikeObservable_1.ArrayLikeObservable(ish, mapFn, thisArg, scheduler);
	            }
	        }
	        throw new TypeError((ish !== null && typeof ish || ish) + ' is not observable');
	    };
	    FromObservable.prototype._subscribe = function (subscriber) {
	        var ish = this.ish;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            return ish[SymbolShim_1.SymbolShim.observable]().subscribe(subscriber);
	        }
	        else {
	            return ish[SymbolShim_1.SymbolShim.observable]().subscribe(new observeOn_1.ObserveOnSubscriber(subscriber, scheduler, 0));
	        }
	    };
	    return FromObservable;
	}(Observable_1.Observable));
	exports.FromObservable = FromObservable;
	//# sourceMappingURL=FromObservable.js.map

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(105);
	var Observable_1 = __webpack_require__(2);
	var asap_1 = __webpack_require__(17);
	var IntervalObservable = (function (_super) {
	    __extends(IntervalObservable, _super);
	    function IntervalObservable(period, scheduler) {
	        if (period === void 0) { period = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        _super.call(this);
	        this.period = period;
	        this.scheduler = scheduler;
	        if (!isNumeric_1.isNumeric(period) || period < 0) {
	            this.period = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            this.scheduler = asap_1.asap;
	        }
	    }
	    IntervalObservable.create = function (period, scheduler) {
	        if (period === void 0) { period = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        return new IntervalObservable(period, scheduler);
	    };
	    IntervalObservable.dispatch = function (state) {
	        var index = state.index, subscriber = state.subscriber, period = state.period;
	        subscriber.next(index);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index += 1;
	        this.schedule(state, period);
	    };
	    IntervalObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var period = this.period;
	        var scheduler = this.scheduler;
	        subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
	            index: index, subscriber: subscriber, period: period
	        }));
	    };
	    return IntervalObservable;
	}(Observable_1.Observable));
	exports.IntervalObservable = IntervalObservable;
	//# sourceMappingURL=IntervalObservable.js.map

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(21);
	var isObject_1 = __webpack_require__(178);
	var tryCatch_1 = __webpack_require__(13);
	var Observable_1 = __webpack_require__(2);
	var isFunction_1 = __webpack_require__(71);
	var SymbolShim_1 = __webpack_require__(41);
	var errorObject_1 = __webpack_require__(12);
	var IteratorObservable = (function (_super) {
	    __extends(IteratorObservable, _super);
	    function IteratorObservable(iterator, project, thisArg, scheduler) {
	        _super.call(this);
	        if (iterator == null) {
	            throw new Error('iterator cannot be null.');
	        }
	        if (isObject_1.isObject(project)) {
	            this.thisArg = project;
	            this.scheduler = thisArg;
	        }
	        else if (isFunction_1.isFunction(project)) {
	            this.project = project;
	            this.thisArg = thisArg;
	            this.scheduler = scheduler;
	        }
	        else if (project != null) {
	            throw new Error('When provided, `project` must be a function.');
	        }
	        this.iterator = getIterator(iterator);
	    }
	    IteratorObservable.create = function (iterator, project, thisArg, scheduler) {
	        return new IteratorObservable(iterator, project, thisArg, scheduler);
	    };
	    IteratorObservable.dispatch = function (state) {
	        var index = state.index, hasError = state.hasError, thisArg = state.thisArg, project = state.project, iterator = state.iterator, subscriber = state.subscriber;
	        if (hasError) {
	            subscriber.error(state.error);
	            return;
	        }
	        var result = iterator.next();
	        if (result.done) {
	            subscriber.complete();
	            return;
	        }
	        if (project) {
	            result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index);
	            if (result === errorObject_1.errorObject) {
	                state.error = errorObject_1.errorObject.e;
	                state.hasError = true;
	            }
	            else {
	                subscriber.next(result);
	                state.index = index + 1;
	            }
	        }
	        else {
	            subscriber.next(result.value);
	            state.index = index + 1;
	        }
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        this.schedule(state);
	    };
	    IteratorObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, iterator = _a.iterator, project = _a.project, thisArg = _a.thisArg, scheduler = _a.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(IteratorObservable.dispatch, 0, {
	                index: index, thisArg: thisArg, project: project, iterator: iterator, subscriber: subscriber
	            });
	        }
	        else {
	            do {
	                var result = iterator.next();
	                if (result.done) {
	                    subscriber.complete();
	                    break;
	                }
	                else if (project) {
	                    result = tryCatch_1.tryCatch(project).call(thisArg, result.value, index++);
	                    if (result === errorObject_1.errorObject) {
	                        subscriber.error(errorObject_1.errorObject.e);
	                        break;
	                    }
	                    subscriber.next(result);
	                }
	                else {
	                    subscriber.next(result.value);
	                }
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return IteratorObservable;
	}(Observable_1.Observable));
	exports.IteratorObservable = IteratorObservable;
	var StringIterator = (function () {
	    function StringIterator(str, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = str.length; }
	        this.str = str;
	        this.idx = idx;
	        this.len = len;
	    }
	    StringIterator.prototype[SymbolShim_1.SymbolShim.iterator] = function () { return (this); };
	    StringIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.str.charAt(this.idx++)
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return StringIterator;
	}());
	var ArrayIterator = (function () {
	    function ArrayIterator(arr, idx, len) {
	        if (idx === void 0) { idx = 0; }
	        if (len === void 0) { len = toLength(arr); }
	        this.arr = arr;
	        this.idx = idx;
	        this.len = len;
	    }
	    ArrayIterator.prototype[SymbolShim_1.SymbolShim.iterator] = function () { return this; };
	    ArrayIterator.prototype.next = function () {
	        return this.idx < this.len ? {
	            done: false,
	            value: this.arr[this.idx++]
	        } : {
	            done: true,
	            value: undefined
	        };
	    };
	    return ArrayIterator;
	}());
	function getIterator(obj) {
	    var i = obj[SymbolShim_1.SymbolShim.iterator];
	    if (!i && typeof obj === 'string') {
	        return new StringIterator(obj);
	    }
	    if (!i && obj.length !== undefined) {
	        return new ArrayIterator(obj);
	    }
	    if (!i) {
	        throw new TypeError('Object is not iterable');
	    }
	    return obj[SymbolShim_1.SymbolShim.iterator]();
	}
	var maxSafeInteger = Math.pow(2, 53) - 1;
	function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) {
	        return 0;
	    }
	    if (len === 0 || !numberIsFinite(len)) {
	        return len;
	    }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) {
	        return 0;
	    }
	    if (len > maxSafeInteger) {
	        return maxSafeInteger;
	    }
	    return len;
	}
	function numberIsFinite(value) {
	    return typeof value === 'number' && root_1.root.isFinite(value);
	}
	function sign(value) {
	    var valueAsNumber = +value;
	    if (valueAsNumber === 0) {
	        return valueAsNumber;
	    }
	    if (isNaN(valueAsNumber)) {
	        return valueAsNumber;
	    }
	    return valueAsNumber < 0 ? -1 : 1;
	}
	//# sourceMappingURL=IteratorObservable.js.map

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var noop_1 = __webpack_require__(107);
	var NeverObservable = (function (_super) {
	    __extends(NeverObservable, _super);
	    function NeverObservable() {
	        _super.call(this);
	    }
	    NeverObservable.create = function () {
	        return new NeverObservable();
	    };
	    NeverObservable.prototype._subscribe = function (subscriber) {
	        noop_1.noop();
	    };
	    return NeverObservable;
	}(Observable_1.Observable));
	exports.NeverObservable = NeverObservable;
	//# sourceMappingURL=NeverObservable.js.map

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var RangeObservable = (function (_super) {
	    __extends(RangeObservable, _super);
	    function RangeObservable(start, end, scheduler) {
	        _super.call(this);
	        this.start = start;
	        this.end = end;
	        this.scheduler = scheduler;
	    }
	    RangeObservable.create = function (start, end, scheduler) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = 0; }
	        return new RangeObservable(start, end, scheduler);
	    };
	    RangeObservable.dispatch = function (state) {
	        var start = state.start, index = state.index, end = state.end, subscriber = state.subscriber;
	        if (index >= end) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(start);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        state.start = start + 1;
	        this.schedule(state);
	    };
	    RangeObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var start = this.start;
	        var end = this.end;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(RangeObservable.dispatch, 0, {
	                index: index, end: end, start: start, subscriber: subscriber
	            });
	        }
	        else {
	            do {
	                if (index++ >= end) {
	                    subscriber.complete();
	                    break;
	                }
	                subscriber.next(start++);
	                if (subscriber.isUnsubscribed) {
	                    break;
	                }
	            } while (true);
	        }
	    };
	    return RangeObservable;
	}(Observable_1.Observable));
	exports.RangeObservable = RangeObservable;
	//# sourceMappingURL=RangeObservable.js.map

/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(2);
	var asap_1 = __webpack_require__(17);
	var isNumeric_1 = __webpack_require__(105);
	var SubscribeOnObservable = (function (_super) {
	    __extends(SubscribeOnObservable, _super);
	    function SubscribeOnObservable(source, delayTime, scheduler) {
	        if (delayTime === void 0) { delayTime = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        _super.call(this);
	        this.source = source;
	        this.delayTime = delayTime;
	        this.scheduler = scheduler;
	        if (!isNumeric_1.isNumeric(delayTime) || delayTime < 0) {
	            this.delayTime = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            this.scheduler = asap_1.asap;
	        }
	    }
	    SubscribeOnObservable.create = function (source, delay, scheduler) {
	        if (delay === void 0) { delay = 0; }
	        if (scheduler === void 0) { scheduler = asap_1.asap; }
	        return new SubscribeOnObservable(source, delay, scheduler);
	    };
	    SubscribeOnObservable.dispatch = function (_a) {
	        var source = _a.source, subscriber = _a.subscriber;
	        return source.subscribe(subscriber);
	    };
	    SubscribeOnObservable.prototype._subscribe = function (subscriber) {
	        var delay = this.delayTime;
	        var source = this.source;
	        var scheduler = this.scheduler;
	        return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
	            source: source, subscriber: subscriber
	        });
	    };
	    return SubscribeOnObservable;
	}(Observable_1.Observable));
	exports.SubscribeOnObservable = SubscribeOnObservable;
	//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isNumeric_1 = __webpack_require__(105);
	var Observable_1 = __webpack_require__(2);
	var asap_1 = __webpack_require__(17);
	var isScheduler_1 = __webpack_require__(34);
	var isDate_1 = __webpack_require__(70);
	var TimerObservable = (function (_super) {
	    __extends(TimerObservable, _super);
	    function TimerObservable(dueTime, period, scheduler) {
	        if (dueTime === void 0) { dueTime = 0; }
	        _super.call(this);
	        this.period = -1;
	        this.dueTime = 0;
	        if (isNumeric_1.isNumeric(period)) {
	            this.period = Number(period) < 1 && 1 || Number(period);
	        }
	        else if (isScheduler_1.isScheduler(period)) {
	            scheduler = period;
	        }
	        if (!isScheduler_1.isScheduler(scheduler)) {
	            scheduler = asap_1.asap;
	        }
	        this.scheduler = scheduler;
	        this.dueTime = isDate_1.isDate(dueTime) ?
	            (+dueTime - this.scheduler.now()) :
	            dueTime;
	    }
	    TimerObservable.create = function (dueTime, period, scheduler) {
	        if (dueTime === void 0) { dueTime = 0; }
	        return new TimerObservable(dueTime, period, scheduler);
	    };
	    TimerObservable.dispatch = function (state) {
	        var index = state.index, period = state.period, subscriber = state.subscriber;
	        var action = this;
	        subscriber.next(index);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        else if (period === -1) {
	            return subscriber.complete();
	        }
	        state.index = index + 1;
	        action.schedule(state, period);
	    };
	    TimerObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var _a = this, period = _a.period, dueTime = _a.dueTime, scheduler = _a.scheduler;
	        return scheduler.schedule(TimerObservable.dispatch, dueTime, {
	            index: index, period: period, subscriber: subscriber
	        });
	    };
	    return TimerObservable;
	}(Observable_1.Observable));
	exports.TimerObservable = TimerObservable;
	//# sourceMappingURL=TimerObservable.js.map

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	/**
	 * Buffers the incoming observable values until the passed `closingNotifier`
	 * emits a value, at which point it emits the buffer on the returned observable
	 * and starts a new buffer internally, awaiting the next time `closingNotifier`
	 * emits.
	 *
	 * <img src="./img/buffer.png" width="100%">
	 *
	 * @param {Observable<any>} closingNotifier an Observable that signals the
	 * buffer to be emitted} from the returned observable.
	 * @returns {Observable<T[]>} an Observable of buffers, which are arrays of
	 * values.
	 */
	function buffer(closingNotifier) {
	    return this.lift(new BufferOperator(closingNotifier));
	}
	exports.buffer = buffer;
	var BufferOperator = (function () {
	    function BufferOperator(closingNotifier) {
	        this.closingNotifier = closingNotifier;
	    }
	    BufferOperator.prototype.call = function (subscriber) {
	        return new BufferSubscriber(subscriber, this.closingNotifier);
	    };
	    return BufferOperator;
	}());
	var BufferSubscriber = (function (_super) {
	    __extends(BufferSubscriber, _super);
	    function BufferSubscriber(destination, closingNotifier) {
	        _super.call(this, destination);
	        this.buffer = [];
	        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
	    }
	    BufferSubscriber.prototype._next = function (value) {
	        this.buffer.push(value);
	    };
	    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var buffer = this.buffer;
	        this.buffer = [];
	        this.destination.next(buffer);
	    };
	    return BufferSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Buffers a number of values from the source observable by `bufferSize` then
	 * emits the buffer and clears it, and starts a new buffer each
	 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
	 * `null`, then new buffers are started immediately at the start of the source
	 * and when each buffer closes and is emitted.
	 *
	 * <img src="./img/bufferCount.png" width="100%">
	 *
	 * @param {number} bufferSize the maximum size of the buffer emitted.
	 * @param {number} [startBufferEvery] optional interval at which to start a new
	 * buffer. (e.g. if `startBufferEvery` is `2`, then a new buffer will be started
	 * on every other value from the source.) A new buffer is started at the
	 * beginning of the source by default.
	 * @returns {Observable<T[]>} an Observable of arrays of buffered values.
	 */
	function bufferCount(bufferSize, startBufferEvery) {
	    if (startBufferEvery === void 0) { startBufferEvery = null; }
	    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
	}
	exports.bufferCount = bufferCount;
	var BufferCountOperator = (function () {
	    function BufferCountOperator(bufferSize, startBufferEvery) {
	        this.bufferSize = bufferSize;
	        this.startBufferEvery = startBufferEvery;
	    }
	    BufferCountOperator.prototype.call = function (subscriber) {
	        return new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery);
	    };
	    return BufferCountOperator;
	}());
	var BufferCountSubscriber = (function (_super) {
	    __extends(BufferCountSubscriber, _super);
	    function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
	        _super.call(this, destination);
	        this.bufferSize = bufferSize;
	        this.startBufferEvery = startBufferEvery;
	        this.buffers = [[]];
	        this.count = 0;
	    }
	    BufferCountSubscriber.prototype._next = function (value) {
	        var count = (this.count += 1);
	        var destination = this.destination;
	        var bufferSize = this.bufferSize;
	        var startBufferEvery = (this.startBufferEvery == null) ? bufferSize : this.startBufferEvery;
	        var buffers = this.buffers;
	        var len = buffers.length;
	        var remove = -1;
	        if (count % startBufferEvery === 0) {
	            buffers.push([]);
	        }
	        for (var i = 0; i < len; i++) {
	            var buffer = buffers[i];
	            buffer.push(value);
	            if (buffer.length === bufferSize) {
	                remove = i;
	                destination.next(buffer);
	            }
	        }
	        if (remove !== -1) {
	            buffers.splice(remove, 1);
	        }
	    };
	    BufferCountSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        var buffers = this.buffers;
	        while (buffers.length > 0) {
	            var buffer = buffers.shift();
	            if (buffer.length > 0) {
	                destination.next(buffer);
	            }
	        }
	        _super.prototype._complete.call(this);
	    };
	    return BufferCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var asap_1 = __webpack_require__(17);
	/**
	 * Buffers values from the source for a specific time period. Optionally allows
	 * new buffers to be set up at an interval.
	 *
	 * <img src="./img/bufferTime.png" width="100%">
	 *
	 * @param {number} bufferTimeSpan the amount of time to fill each buffer for
	 * before emitting them and clearing them.
	 * @param {number} [bufferCreationInterval] the interval at which to start new
	 * buffers.
	 * @param {Scheduler} [scheduler] (optional, defaults to `asap` scheduler) The
	 * scheduler on which to schedule the intervals that determine buffer
	 * boundaries.
	 * @returns {Observable<T[]>} an observable of arrays of buffered values.
	 */
	function bufferTime(bufferTimeSpan, bufferCreationInterval, scheduler) {
	    if (bufferCreationInterval === void 0) { bufferCreationInterval = null; }
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler));
	}
	exports.bufferTime = bufferTime;
	var BufferTimeOperator = (function () {
	    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, scheduler) {
	        this.bufferTimeSpan = bufferTimeSpan;
	        this.bufferCreationInterval = bufferCreationInterval;
	        this.scheduler = scheduler;
	    }
	    BufferTimeOperator.prototype.call = function (subscriber) {
	        return new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.scheduler);
	    };
	    return BufferTimeOperator;
	}());
	var BufferTimeSubscriber = (function (_super) {
	    __extends(BufferTimeSubscriber, _super);
	    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, scheduler) {
	        _super.call(this, destination);
	        this.bufferTimeSpan = bufferTimeSpan;
	        this.bufferCreationInterval = bufferCreationInterval;
	        this.scheduler = scheduler;
	        this.buffers = [];
	        var buffer = this.openBuffer();
	        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
	            var closeState = { subscriber: this, buffer: buffer };
	            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
	            this.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
	            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
	        }
	        else {
	            var timeSpanOnlyState = { subscriber: this, buffer: buffer, bufferTimeSpan: bufferTimeSpan };
	            this.add(scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
	        }
	    }
	    BufferTimeSubscriber.prototype._next = function (value) {
	        var buffers = this.buffers;
	        var len = buffers.length;
	        for (var i = 0; i < len; i++) {
	            buffers[i].push(value);
	        }
	    };
	    BufferTimeSubscriber.prototype._error = function (err) {
	        this.buffers.length = 0;
	        _super.prototype._error.call(this, err);
	    };
	    BufferTimeSubscriber.prototype._complete = function () {
	        var _a = this, buffers = _a.buffers, destination = _a.destination;
	        while (buffers.length > 0) {
	            destination.next(buffers.shift());
	        }
	        _super.prototype._complete.call(this);
	    };
	    BufferTimeSubscriber.prototype._unsubscribe = function () {
	        this.buffers = null;
	    };
	    BufferTimeSubscriber.prototype.openBuffer = function () {
	        var buffer = [];
	        this.buffers.push(buffer);
	        return buffer;
	    };
	    BufferTimeSubscriber.prototype.closeBuffer = function (buffer) {
	        this.destination.next(buffer);
	        var buffers = this.buffers;
	        buffers.splice(buffers.indexOf(buffer), 1);
	    };
	    return BufferTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchBufferTimeSpanOnly(state) {
	    var subscriber = state.subscriber;
	    var prevBuffer = state.buffer;
	    if (prevBuffer) {
	        subscriber.closeBuffer(prevBuffer);
	    }
	    state.buffer = subscriber.openBuffer();
	    if (!subscriber.isUnsubscribed) {
	        this.schedule(state, state.bufferTimeSpan);
	    }
	}
	function dispatchBufferCreation(state) {
	    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
	    var buffer = subscriber.openBuffer();
	    var action = this;
	    if (!subscriber.isUnsubscribed) {
	        action.add(scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, buffer: buffer }));
	        action.schedule(state, bufferCreationInterval);
	    }
	}
	function dispatchBufferClose(_a) {
	    var subscriber = _a.subscriber, buffer = _a.buffer;
	    subscriber.closeBuffer(buffer);
	}
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var Subscription_1 = __webpack_require__(19);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	/**
	 * Buffers values from the source by opening the buffer via signals from an
	 * Observable provided to `openings`, and closing and sending the buffers when
	 * an Observable returned by the `closingSelector` emits.
	 *
	 * <img src="./img/bufferToggle.png" width="100%">
	 *
	 * @param {Observable<O>} openings An observable of notifications to start new
	 * buffers.
	 * @param {Function} closingSelector a function that takes the value emitted by
	 * the `openings` observable and returns an Observable, which, when it emits,
	 * signals that the associated buffer should be emitted and cleared.
	 * @returns {Observable<T[]>} an observable of arrays of buffered values.
	 */
	function bufferToggle(openings, closingSelector) {
	    return this.lift(new BufferToggleOperator(openings, closingSelector));
	}
	exports.bufferToggle = bufferToggle;
	var BufferToggleOperator = (function () {
	    function BufferToggleOperator(openings, closingSelector) {
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }
	    BufferToggleOperator.prototype.call = function (subscriber) {
	        return new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector);
	    };
	    return BufferToggleOperator;
	}());
	var BufferToggleSubscriber = (function (_super) {
	    __extends(BufferToggleSubscriber, _super);
	    function BufferToggleSubscriber(destination, openings, closingSelector) {
	        _super.call(this, destination);
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	        this.contexts = [];
	        this.add(this.openings.subscribe(new BufferToggleOpeningsSubscriber(this)));
	    }
	    BufferToggleSubscriber.prototype._next = function (value) {
	        var contexts = this.contexts;
	        var len = contexts.length;
	        for (var i = 0; i < len; i++) {
	            contexts[i].buffer.push(value);
	        }
	    };
	    BufferToggleSubscriber.prototype._error = function (err) {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            context.subscription.unsubscribe();
	            context.buffer = null;
	            context.subscription = null;
	        }
	        this.contexts = null;
	        _super.prototype._error.call(this, err);
	    };
	    BufferToggleSubscriber.prototype._complete = function () {
	        var contexts = this.contexts;
	        while (contexts.length > 0) {
	            var context = contexts.shift();
	            this.destination.next(context.buffer);
	            context.subscription.unsubscribe();
	            context.buffer = null;
	            context.subscription = null;
	        }
	        this.contexts = null;
	        _super.prototype._complete.call(this);
	    };
	    BufferToggleSubscriber.prototype.openBuffer = function (value) {
	        var closingSelector = this.closingSelector;
	        var contexts = this.contexts;
	        var closingNotifier = tryCatch_1.tryCatch(closingSelector)(value);
	        if (closingNotifier === errorObject_1.errorObject) {
	            this._error(errorObject_1.errorObject.e);
	        }
	        else {
	            var context = {
	                buffer: [],
	                subscription: new Subscription_1.Subscription()
	            };
	            contexts.push(context);
	            var subscriber = new BufferToggleClosingsSubscriber(this, context);
	            var subscription = closingNotifier.subscribe(subscriber);
	            context.subscription.add(subscription);
	            this.add(subscription);
	        }
	    };
	    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
	        var contexts = this.contexts;
	        if (contexts === null) {
	            return;
	        }
	        var buffer = context.buffer, subscription = context.subscription;
	        this.destination.next(buffer);
	        contexts.splice(contexts.indexOf(context), 1);
	        this.remove(subscription);
	        subscription.unsubscribe();
	    };
	    return BufferToggleSubscriber;
	}(Subscriber_1.Subscriber));
	var BufferToggleOpeningsSubscriber = (function (_super) {
	    __extends(BufferToggleOpeningsSubscriber, _super);
	    function BufferToggleOpeningsSubscriber(parent) {
	        _super.call(this, null);
	        this.parent = parent;
	    }
	    BufferToggleOpeningsSubscriber.prototype._next = function (value) {
	        this.parent.openBuffer(value);
	    };
	    BufferToggleOpeningsSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    BufferToggleOpeningsSubscriber.prototype._complete = function () {
	        // noop
	    };
	    return BufferToggleOpeningsSubscriber;
	}(Subscriber_1.Subscriber));
	var BufferToggleClosingsSubscriber = (function (_super) {
	    __extends(BufferToggleClosingsSubscriber, _super);
	    function BufferToggleClosingsSubscriber(parent, context) {
	        _super.call(this, null);
	        this.parent = parent;
	        this.context = context;
	    }
	    BufferToggleClosingsSubscriber.prototype._next = function () {
	        this.parent.closeBuffer(this.context);
	    };
	    BufferToggleClosingsSubscriber.prototype._error = function (err) {
	        this.parent.error(err);
	    };
	    BufferToggleClosingsSubscriber.prototype._complete = function () {
	        this.parent.closeBuffer(this.context);
	    };
	    return BufferToggleClosingsSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(19);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	/**
	 * Opens a buffer immediately, then closes the buffer when the observable
	 * returned by calling `closingSelector` emits a value. It that immediately
	 * opens a new buffer and repeats the process.
	 *
	 * <img src="./img/bufferWhen.png" width="100%">
	 *
	 * @param {function} closingSelector a function that takes no arguments and
	 * returns an Observable that signals buffer closure.
	 * @returns {Observable<T[]>} an observable of arrays of buffered values.
	 */
	function bufferWhen(closingSelector) {
	    return this.lift(new BufferWhenOperator(closingSelector));
	}
	exports.bufferWhen = bufferWhen;
	var BufferWhenOperator = (function () {
	    function BufferWhenOperator(closingSelector) {
	        this.closingSelector = closingSelector;
	    }
	    BufferWhenOperator.prototype.call = function (subscriber) {
	        return new BufferWhenSubscriber(subscriber, this.closingSelector);
	    };
	    return BufferWhenOperator;
	}());
	var BufferWhenSubscriber = (function (_super) {
	    __extends(BufferWhenSubscriber, _super);
	    function BufferWhenSubscriber(destination, closingSelector) {
	        _super.call(this, destination);
	        this.closingSelector = closingSelector;
	        this.subscribing = false;
	        this.openBuffer();
	    }
	    BufferWhenSubscriber.prototype._next = function (value) {
	        this.buffer.push(value);
	    };
	    BufferWhenSubscriber.prototype._complete = function () {
	        var buffer = this.buffer;
	        if (buffer) {
	            this.destination.next(buffer);
	        }
	        _super.prototype._complete.call(this);
	    };
	    BufferWhenSubscriber.prototype._unsubscribe = function () {
	        this.buffer = null;
	        this.subscribing = false;
	    };
	    BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openBuffer();
	    };
	    BufferWhenSubscriber.prototype.notifyComplete = function () {
	        if (this.subscribing) {
	            this.complete();
	        }
	        else {
	            this.openBuffer();
	        }
	    };
	    BufferWhenSubscriber.prototype.openBuffer = function () {
	        var closingSubscription = this.closingSubscription;
	        if (closingSubscription) {
	            this.remove(closingSubscription);
	            closingSubscription.unsubscribe();
	        }
	        var buffer = this.buffer;
	        if (this.buffer) {
	            this.destination.next(buffer);
	        }
	        this.buffer = [];
	        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
	        if (closingNotifier === errorObject_1.errorObject) {
	            this.error(errorObject_1.errorObject.e);
	        }
	        else {
	            closingSubscription = new Subscription_1.Subscription();
	            this.closingSubscription = closingSubscription;
	            this.add(closingSubscription);
	            this.subscribing = true;
	            closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
	            this.subscribing = false;
	        }
	    };
	    return BufferWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
	 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
	 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
	 *  is returned by the `selector` will be used to continue the observable chain.
	 * @return {Observable} an observable that originates from either the source or the observable returned by the
	 *  catch `selector` function.
	 */
	function _catch(selector) {
	    var operator = new CatchOperator(selector);
	    var caught = this.lift(operator);
	    return (operator.caught = caught);
	}
	exports._catch = _catch;
	var CatchOperator = (function () {
	    function CatchOperator(selector) {
	        this.selector = selector;
	    }
	    CatchOperator.prototype.call = function (subscriber) {
	        return new CatchSubscriber(subscriber, this.selector, this.caught);
	    };
	    return CatchOperator;
	}());
	var CatchSubscriber = (function (_super) {
	    __extends(CatchSubscriber, _super);
	    function CatchSubscriber(destination, selector, caught) {
	        _super.call(this, destination);
	        this.selector = selector;
	        this.caught = caught;
	    }
	    // NOTE: overriding `error` instead of `_error` because we don't want
	    // to have this flag this subscriber as `isStopped`.
	    CatchSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var result = void 0;
	            try {
	                result = this.selector(err, this.caught);
	            }
	            catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this._innerSub(result);
	        }
	    };
	    CatchSubscriber.prototype._innerSub = function (result) {
	        this.unsubscribe();
	        this.destination.remove(this);
	        result.subscribe(this.destination);
	    };
	    return CatchSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=catch.js.map

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var combineLatest_1 = __webpack_require__(165);
	/**
	 * Takes an Observable of Observables, and collects all observables from it. Once the outer observable
	 * completes, it subscribes to all collected observables and "combines" their values, such that:
	 *  - every time an observable emits, the returned observable emits
	 *  - when the returned observable emits, it emits all of the most recent values by:
	 *    - if a `project` function is provided, it is called with each recent value from each observable in whatever order they arrived,
	 *      and the result of the `project` function is what is emitted by the returned observable
	 *    - if there is no `project` function, an array of all of the most recent values is emitted by the returned observable.
	 * @param {function} [project] an optional function to map the most recent values from each observable into a new result. Takes each of the
	 *   most recent values from each collected observable as arguments, in order.
	 * @returns {Observable} an observable of projected results or arrays of recent values.
	 */
	function combineAll(project) {
	    return this.lift(new combineLatest_1.CombineLatestOperator(project));
	}
	exports.combineAll = combineAll;
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeAll_1 = __webpack_require__(69);
	/**
	 * Joins every Observable emitted by the source (an Observable of Observables), in a serial
	 * fashion. Subscribing to each one only when the previous one has completed, and merging
	 * all of their values into the returned observable.
	 *
	 * __Warning:__ If the source Observable emits Observables quickly and endlessly, and the
	 * Observables it emits generally complete slower than the source emits, you can run into
	 * memory issues as the incoming observables collect in an unbounded buffer.
	 *
	 * @returns {Observable} an observable of values merged from the incoming observables.
	 */
	function concatAll() {
	    return this.lift(new mergeAll_1.MergeAllOperator(1));
	}
	exports.concatAll = concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeMap_1 = __webpack_require__(170);
	/**
	 * Maps values from the source observable into new Observables, then merges them in a serialized fashion,
	 * waiting for each one to complete before merging the next.
	 *
	 * __Warning:__ if incoming values arrive endlessly and faster than the observables they're being mapped
	 * to can complete, it will result in memory issues as created observables amass in an unbounded buffer
	 * waiting for their turn to be subscribed to.
	 *
	 * @param {function} project a function to map incoming values into Observables to be concatenated. accepts
	 * the `value` and the `index` as arguments.
	 * @param {function} [resultSelector] an optional result selector that is applied to values before they're
	 * merged into the returned observable. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @returns {Observable} an observable of values merged from the projected Observables as they were subscribed to,
	 * one at a time. Optionally, these values may have been projected from a passed `projectResult` argument.
	 */
	function concatMap(project, resultSelector) {
	    return this.lift(new mergeMap_1.MergeMapOperator(project, resultSelector, 1));
	}
	exports.concatMap = concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var mergeMapTo_1 = __webpack_require__(171);
	/**
	 * Maps values from the source to a specific observable, and merges them together in a serialized fashion.
	 *
	 * @param {Observable} observable the observable to map each source value to
	 * @param {function} [resultSelector] an optional result selector that is applied to values before they're
	 * merged into the returned observable. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @returns {Observable} an observable of values merged together by joining the passed observable
	 * with itself, one after the other, for each value emitted from the source.
	 */
	function concatMapTo(observable, resultSelector) {
	    return this.lift(new mergeMapTo_1.MergeMapToOperator(observable, resultSelector, 1));
	}
	exports.concatMapTo = concatMapTo;
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an observable of a single number that represents the number of items that either:
	 * Match a provided predicate function, _or_ if a predicate is not provided, the number
	 * represents the total count of all items in the source observable. The count is emitted
	 * by the returned observable when the source observable completes.
	 * @param {function} [predicate] a boolean function to select what values are to be counted.
	 * it is provided with arguments of:
	 *   - `value`: the value from the source observable
	 *   - `index`: the "index" of the value from the source observable
	 *   - `source`: the source observable instance itself.
	 * @returns {Observable} an observable of one number that represents the count as described
	 * above
	 */
	function count(predicate) {
	    return this.lift(new CountOperator(predicate, this));
	}
	exports.count = count;
	var CountOperator = (function () {
	    function CountOperator(predicate, source) {
	        this.predicate = predicate;
	        this.source = source;
	    }
	    CountOperator.prototype.call = function (subscriber) {
	        return new CountSubscriber(subscriber, this.predicate, this.source);
	    };
	    return CountOperator;
	}());
	var CountSubscriber = (function (_super) {
	    __extends(CountSubscriber, _super);
	    function CountSubscriber(destination, predicate, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.count = 0;
	        this.index = 0;
	    }
	    CountSubscriber.prototype._next = function (value) {
	        if (this.predicate) {
	            this._tryPredicate(value);
	        }
	        else {
	            this.count++;
	        }
	    };
	    CountSubscriber.prototype._tryPredicate = function (value) {
	        var result;
	        try {
	            result = this.predicate(value, this.index++, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.count++;
	        }
	    };
	    CountSubscriber.prototype._complete = function () {
	        this.destination.next(this.count);
	        this.destination.complete();
	    };
	    return CountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=count.js.map

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	/**
	 * Returns the source Observable delayed by the computed debounce duration,
	 * with the duration lengthened if a new source item arrives before the delay
	 * duration ends.
	 * In practice, for each item emitted on the source, this operator holds the
	 * latest item, waits for a silence as long as the `durationSelector` specifies,
	 * and only then emits the latest source item on the result Observable.
	 * @param {function} durationSelector function for computing the timeout duration for each item.
	 * @returns {Observable} an Observable the same as source Observable, but drops items.
	 */
	function debounce(durationSelector) {
	    return this.lift(new DebounceOperator(durationSelector));
	}
	exports.debounce = debounce;
	var DebounceOperator = (function () {
	    function DebounceOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    DebounceOperator.prototype.call = function (subscriber) {
	        return new DebounceSubscriber(subscriber, this.durationSelector);
	    };
	    return DebounceOperator;
	}());
	var DebounceSubscriber = (function (_super) {
	    __extends(DebounceSubscriber, _super);
	    function DebounceSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.durationSelector = durationSelector;
	        this.hasValue = false;
	        this.durationSubscription = null;
	    }
	    DebounceSubscriber.prototype._next = function (value) {
	        try {
	            var result = this.durationSelector.call(this, value);
	            if (result) {
	                this._tryNext(value, result);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    DebounceSubscriber.prototype._complete = function () {
	        this.emitValue();
	        this.destination.complete();
	    };
	    DebounceSubscriber.prototype._tryNext = function (value, duration) {
	        var subscription = this.durationSubscription;
	        this.value = value;
	        this.hasValue = true;
	        if (subscription) {
	            subscription.unsubscribe();
	            this.remove(subscription);
	        }
	        subscription = subscribeToResult_1.subscribeToResult(this, duration);
	        if (!subscription.isUnsubscribed) {
	            this.add(this.durationSubscription = subscription);
	        }
	    };
	    DebounceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.emitValue();
	    };
	    DebounceSubscriber.prototype.notifyComplete = function () {
	        this.emitValue();
	    };
	    DebounceSubscriber.prototype.emitValue = function () {
	        if (this.hasValue) {
	            var value = this.value;
	            var subscription = this.durationSubscription;
	            if (subscription) {
	                this.durationSubscription = null;
	                subscription.unsubscribe();
	                this.remove(subscription);
	            }
	            this.value = null;
	            this.hasValue = false;
	            _super.prototype._next.call(this, value);
	        }
	    };
	    return DebounceSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var asap_1 = __webpack_require__(17);
	/**
	 * Returns the source Observable delayed by the computed debounce duration,
	 * with the duration lengthened if a new source item arrives before the delay
	 * duration ends.
	 * In practice, for each item emitted on the source, this operator holds the
	 * latest item, waits for a silence for the `dueTime` length, and only then
	 * emits the latest source item on the result Observable.
	 * Optionally takes a scheduler for manging timers.
	 * @param {number} dueTime the timeout value for the window of time required to not drop the item.
	 * @param {Scheduler} [scheduler] the Scheduler to use for managing the timers that handle the timeout for each item.
	 * @returns {Observable} an Observable the same as source Observable, but drops items.
	 */
	function debounceTime(dueTime, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
	}
	exports.debounceTime = debounceTime;
	var DebounceTimeOperator = (function () {
	    function DebounceTimeOperator(dueTime, scheduler) {
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	    }
	    DebounceTimeOperator.prototype.call = function (subscriber) {
	        return new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler);
	    };
	    return DebounceTimeOperator;
	}());
	var DebounceTimeSubscriber = (function (_super) {
	    __extends(DebounceTimeSubscriber, _super);
	    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
	        _super.call(this, destination);
	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	        this.debouncedSubscription = null;
	        this.lastValue = null;
	        this.hasValue = false;
	    }
	    DebounceTimeSubscriber.prototype._next = function (value) {
	        this.clearDebounce();
	        this.lastValue = value;
	        this.hasValue = true;
	        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
	    };
	    DebounceTimeSubscriber.prototype._complete = function () {
	        this.debouncedNext();
	        this.destination.complete();
	    };
	    DebounceTimeSubscriber.prototype.debouncedNext = function () {
	        this.clearDebounce();
	        if (this.hasValue) {
	            this.destination.next(this.lastValue);
	            this.lastValue = null;
	            this.hasValue = false;
	        }
	    };
	    DebounceTimeSubscriber.prototype.clearDebounce = function () {
	        var debouncedSubscription = this.debouncedSubscription;
	        if (debouncedSubscription !== null) {
	            this.remove(debouncedSubscription);
	            debouncedSubscription.unsubscribe();
	            this.debouncedSubscription = null;
	        }
	    };
	    return DebounceTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.debouncedNext();
	}
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that emits the elements of the source or a specified default value if empty.
	 * @param {any} defaultValue the default value used if source is empty; defaults to null.
	 * @returns {Observable} an Observable of the items emitted by the where empty values are replaced by the specified default value or null.
	 */
	function defaultIfEmpty(defaultValue) {
	    if (defaultValue === void 0) { defaultValue = null; }
	    return this.lift(new DefaultIfEmptyOperator(defaultValue));
	}
	exports.defaultIfEmpty = defaultIfEmpty;
	var DefaultIfEmptyOperator = (function () {
	    function DefaultIfEmptyOperator(defaultValue) {
	        this.defaultValue = defaultValue;
	    }
	    DefaultIfEmptyOperator.prototype.call = function (subscriber) {
	        return new DefaultIfEmptySubscriber(subscriber, this.defaultValue);
	    };
	    return DefaultIfEmptyOperator;
	}());
	var DefaultIfEmptySubscriber = (function (_super) {
	    __extends(DefaultIfEmptySubscriber, _super);
	    function DefaultIfEmptySubscriber(destination, defaultValue) {
	        _super.call(this, destination);
	        this.defaultValue = defaultValue;
	        this.isEmpty = true;
	    }
	    DefaultIfEmptySubscriber.prototype._next = function (value) {
	        this.isEmpty = false;
	        this.destination.next(value);
	    };
	    DefaultIfEmptySubscriber.prototype._complete = function () {
	        if (this.isEmpty) {
	            this.destination.next(this.defaultValue);
	        }
	        this.destination.complete();
	    };
	    return DefaultIfEmptySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var asap_1 = __webpack_require__(17);
	var isDate_1 = __webpack_require__(70);
	var Subscriber_1 = __webpack_require__(6);
	var Notification_1 = __webpack_require__(98);
	/**
	 * Returns an Observable that delays the emission of items from the source Observable
	 * by a given timeout or until a given Date.
	 * @param {number|Date} delay the timeout value or date until which the emission of the source items is delayed.
	 * @param {Scheduler} [scheduler] the Scheduler to use for managing the timers that handle the timeout for each item.
	 * @returns {Observable} an Observable that delays the emissions of the source Observable by the specified timeout or Date.
	 */
	function delay(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    var absoluteDelay = isDate_1.isDate(delay);
	    var delayFor = absoluteDelay ? (+delay - scheduler.now()) : Math.abs(delay);
	    return this.lift(new DelayOperator(delayFor, scheduler));
	}
	exports.delay = delay;
	var DelayOperator = (function () {
	    function DelayOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    DelayOperator.prototype.call = function (subscriber) {
	        return new DelaySubscriber(subscriber, this.delay, this.scheduler);
	    };
	    return DelayOperator;
	}());
	var DelaySubscriber = (function (_super) {
	    __extends(DelaySubscriber, _super);
	    function DelaySubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.queue = [];
	        this.active = false;
	        this.errored = false;
	    }
	    DelaySubscriber.dispatch = function (state) {
	        var source = state.source;
	        var queue = source.queue;
	        var scheduler = state.scheduler;
	        var destination = state.destination;
	        while (queue.length > 0 && (queue[0].time - scheduler.now()) <= 0) {
	            queue.shift().notification.observe(destination);
	        }
	        if (queue.length > 0) {
	            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
	            this.schedule(state, delay_1);
	        }
	        else {
	            source.active = false;
	        }
	    };
	    DelaySubscriber.prototype._schedule = function (scheduler) {
	        this.active = true;
	        this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
	            source: this, destination: this.destination, scheduler: scheduler
	        }));
	    };
	    DelaySubscriber.prototype.scheduleNotification = function (notification) {
	        if (this.errored === true) {
	            return;
	        }
	        var scheduler = this.scheduler;
	        var message = new DelayMessage(scheduler.now() + this.delay, notification);
	        this.queue.push(message);
	        if (this.active === false) {
	            this._schedule(scheduler);
	        }
	    };
	    DelaySubscriber.prototype._next = function (value) {
	        this.scheduleNotification(Notification_1.Notification.createNext(value));
	    };
	    DelaySubscriber.prototype._error = function (err) {
	        this.errored = true;
	        this.queue = [];
	        this.destination.error(err);
	    };
	    DelaySubscriber.prototype._complete = function () {
	        this.scheduleNotification(Notification_1.Notification.createComplete());
	    };
	    return DelaySubscriber;
	}(Subscriber_1.Subscriber));
	var DelayMessage = (function () {
	    function DelayMessage(time, notification) {
	        this.time = time;
	        this.notification = notification;
	    }
	    return DelayMessage;
	}());
	//# sourceMappingURL=delay.js.map

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that transforms Notification objects into the items or notifications they represent.
	 * @returns {Observable} an Observable that emits items and notifications embedded in Notification objects emitted by the source Observable.
	 */
	function dematerialize() {
	    return this.lift(new DeMaterializeOperator());
	}
	exports.dematerialize = dematerialize;
	var DeMaterializeOperator = (function () {
	    function DeMaterializeOperator() {
	    }
	    DeMaterializeOperator.prototype.call = function (subscriber) {
	        return new DeMaterializeSubscriber(subscriber);
	    };
	    return DeMaterializeOperator;
	}());
	var DeMaterializeSubscriber = (function (_super) {
	    __extends(DeMaterializeSubscriber, _super);
	    function DeMaterializeSubscriber(destination) {
	        _super.call(this, destination);
	    }
	    DeMaterializeSubscriber.prototype._next = function (value) {
	        value.observe(this.destination);
	    };
	    return DeMaterializeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var distinctUntilChanged_1 = __webpack_require__(167);
	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
	 * using a property accessed by using the key provided to check if the two items are distinct.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * @param {string} key string key for object property lookup on each item.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @returns {Observable} an Observable that emits items from the source Observable with distinct values based on the key specified.
	 */
	function distinctUntilKeyChanged(key, compare) {
	    return distinctUntilChanged_1.distinctUntilChanged.call(this, function (x, y) {
	        if (compare) {
	            return compare(x[key], y[key]);
	        }
	        return x[key] === y[key];
	    });
	}
	exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
	//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var noop_1 = __webpack_require__(107);
	/**
	 * Returns a mirrored Observable of the source Observable, but modified so that the provided Observer is called
	 * for every item emitted by the source.
	 * This operator is useful for debugging your observables for the correct values or performing other side effects.
	 * @param {Observer|function} [nextOrObserver] a normal observer callback or callback for onNext.
	 * @param {function} [error] callback for errors in the source.
	 * @param {function} [complete] callback for the completion of the source.
	 * @reurns {Observable} a mirrored Observable with the specified Observer or callback attached for each item.
	 */
	function _do(nextOrObserver, error, complete) {
	    var next;
	    if (nextOrObserver && typeof nextOrObserver === 'object') {
	        next = nextOrObserver.next;
	        error = nextOrObserver.error;
	        complete = nextOrObserver.complete;
	    }
	    else {
	        next = nextOrObserver;
	    }
	    return this.lift(new DoOperator(next || noop_1.noop, error || noop_1.noop, complete || noop_1.noop));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(next, error, complete) {
	        this.next = next;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber) {
	        return new DoSubscriber(subscriber, this.next, this.error, this.complete);
	    };
	    return DoOperator;
	}());
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, next, error, complete) {
	        _super.call(this, destination);
	        this.__next = next;
	        this.__error = error;
	        this.__complete = complete;
	    }
	    // NOTE: important, all try catch blocks below are there for performance
	    // reasons. tryCatcher approach does not benefit this operator.
	    DoSubscriber.prototype._next = function (value) {
	        try {
	            this.__next(value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(value);
	    };
	    DoSubscriber.prototype._error = function (err) {
	        try {
	            this.__error(err);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.error(err);
	    };
	    DoSubscriber.prototype._complete = function () {
	        try {
	            this.__complete();
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.complete();
	    };
	    return DoSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=do.js.map

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var ArgumentOutOfRangeError_1 = __webpack_require__(176);
	/**
	 * Returns an Observable that emits the item at the specified index in the source Observable.
	 * If default is given, missing indices will output this value on next; otherwise, outputs error.
	 * @param {number} index the index of the value to be retrieved.
	 * @param {any} [defaultValue] the default value returned for missing indices.
	 * @returns {Observable} an Observable that emits a single item, if it is found. Otherwise, will emit the default value if given.
	 */
	function elementAt(index, defaultValue) {
	    return this.lift(new ElementAtOperator(index, defaultValue));
	}
	exports.elementAt = elementAt;
	var ElementAtOperator = (function () {
	    function ElementAtOperator(index, defaultValue) {
	        this.index = index;
	        this.defaultValue = defaultValue;
	        if (index < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    ElementAtOperator.prototype.call = function (subscriber) {
	        return new ElementAtSubscriber(subscriber, this.index, this.defaultValue);
	    };
	    return ElementAtOperator;
	}());
	var ElementAtSubscriber = (function (_super) {
	    __extends(ElementAtSubscriber, _super);
	    function ElementAtSubscriber(destination, index, defaultValue) {
	        _super.call(this, destination);
	        this.index = index;
	        this.defaultValue = defaultValue;
	    }
	    ElementAtSubscriber.prototype._next = function (x) {
	        if (this.index-- === 0) {
	            this.destination.next(x);
	            this.destination.complete();
	        }
	    };
	    ElementAtSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.index >= 0) {
	            if (typeof this.defaultValue !== 'undefined') {
	                destination.next(this.defaultValue);
	            }
	            else {
	                destination.error(new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError);
	            }
	        }
	        destination.complete();
	    };
	    return ElementAtSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=elementAt.js.map

/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
	 * @param {function} predicate a function for determining if an item meets a specified condition.
	 * @param {any} [thisArg] optional object to use for `this` in the callback
	 * @returns {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
	 */
	function every(predicate, thisArg) {
	    var source = this;
	    return source.lift(new EveryOperator(predicate, thisArg, source));
	}
	exports.every = every;
	var EveryOperator = (function () {
	    function EveryOperator(predicate, thisArg, source) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	    }
	    EveryOperator.prototype.call = function (observer) {
	        return new EverySubscriber(observer, this.predicate, this.thisArg, this.source);
	    };
	    return EveryOperator;
	}());
	var EverySubscriber = (function (_super) {
	    __extends(EverySubscriber, _super);
	    function EverySubscriber(destination, predicate, thisArg, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	        this.index = 0;
	        this.thisArg = thisArg || this;
	    }
	    EverySubscriber.prototype.notifyComplete = function (everyValueMatch) {
	        this.destination.next(everyValueMatch);
	        this.destination.complete();
	    };
	    EverySubscriber.prototype._next = function (value) {
	        var result = false;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (!result) {
	            this.notifyComplete(false);
	        }
	    };
	    EverySubscriber.prototype._complete = function () {
	        this.notifyComplete(true);
	    };
	    return EverySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=every.js.map

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	/**
	 * Returns an Observable that takes a source of observables and propagates the first observable exclusively
	 * until it completes before subscribing to the next.
	 * Items that come in before the first has exhausted will be dropped.
	 * Similar to `concatAll`, but will not hold on to items that come in before the first is exhausted.
	 * @returns {Observable} an Observable which contains all of the items of the first Observable and following Observables in the source.
	 */
	function exhaust() {
	    return this.lift(new SwitchFirstOperator());
	}
	exports.exhaust = exhaust;
	var SwitchFirstOperator = (function () {
	    function SwitchFirstOperator() {
	    }
	    SwitchFirstOperator.prototype.call = function (subscriber) {
	        return new SwitchFirstSubscriber(subscriber);
	    };
	    return SwitchFirstOperator;
	}());
	var SwitchFirstSubscriber = (function (_super) {
	    __extends(SwitchFirstSubscriber, _super);
	    function SwitchFirstSubscriber(destination) {
	        _super.call(this, destination);
	        this.hasCompleted = false;
	        this.hasSubscription = false;
	    }
	    SwitchFirstSubscriber.prototype._next = function (value) {
	        if (!this.hasSubscription) {
	            this.hasSubscription = true;
	            this.add(subscribeToResult_1.subscribeToResult(this, value));
	        }
	    };
	    SwitchFirstSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (!this.hasSubscription) {
	            this.destination.complete();
	        }
	    };
	    SwitchFirstSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.hasSubscription = false;
	        if (this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return SwitchFirstSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=exhaust.js.map

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	/**
	 * Returns an Observable that applies the given function to each item of the source Observable
	 * to create a new Observable, which are then concatenated together to produce a new Observable.
	 * @param {function} project function called for each item of the source to produce a new Observable.
	 * @param {function} [resultSelector] optional function for then selecting on each inner Observable.
	 * @returns {Observable} an Observable containing all the projected Observables of each item of the source concatenated together.
	 */
	function exhaustMap(project, resultSelector) {
	    return this.lift(new SwitchFirstMapOperator(project, resultSelector));
	}
	exports.exhaustMap = exhaustMap;
	var SwitchFirstMapOperator = (function () {
	    function SwitchFirstMapOperator(project, resultSelector) {
	        this.project = project;
	        this.resultSelector = resultSelector;
	    }
	    SwitchFirstMapOperator.prototype.call = function (subscriber) {
	        return new SwitchFirstMapSubscriber(subscriber, this.project, this.resultSelector);
	    };
	    return SwitchFirstMapOperator;
	}());
	var SwitchFirstMapSubscriber = (function (_super) {
	    __extends(SwitchFirstMapSubscriber, _super);
	    function SwitchFirstMapSubscriber(destination, project, resultSelector) {
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.hasSubscription = false;
	        this.hasCompleted = false;
	        this.index = 0;
	    }
	    SwitchFirstMapSubscriber.prototype._next = function (value) {
	        if (!this.hasSubscription) {
	            this.tryNext(value);
	        }
	    };
	    SwitchFirstMapSubscriber.prototype.tryNext = function (value) {
	        var index = this.index++;
	        var destination = this.destination;
	        try {
	            var result = this.project(value, index);
	            this.hasSubscription = true;
	            this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
	        }
	        catch (err) {
	            destination.error(err);
	        }
	    };
	    SwitchFirstMapSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (!this.hasSubscription) {
	            this.destination.complete();
	        }
	    };
	    SwitchFirstMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    SwitchFirstMapSubscriber.prototype.trySelectResult = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        try {
	            var result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	            destination.next(result);
	        }
	        catch (err) {
	            destination.error(err);
	        }
	    };
	    SwitchFirstMapSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    SwitchFirstMapSubscriber.prototype.notifyComplete = function () {
	        this.hasSubscription = false;
	        if (this.hasCompleted) {
	            this.destination.complete();
	        }
	    };
	    return SwitchFirstMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=exhaustMap.js.map

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	/**
	 * Returns an Observable where for each item in the source Observable, the supplied function is applied to each item,
	 * resulting in a new value to then be applied again with the function.
	 * @param {function} project the function for projecting the next emitted item of the Observable.
	 * @param {number} [concurrent] the max number of observables that can be created concurrently. defaults to infinity.
	 * @param {Scheduler} [scheduler] The Scheduler to use for managing the expansions.
	 * @returns {Observable} an Observable containing the expansions of the source Observable.
	 */
	function expand(project, concurrent, scheduler) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    if (scheduler === void 0) { scheduler = undefined; }
	    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
	    return this.lift(new ExpandOperator(project, concurrent, scheduler));
	}
	exports.expand = expand;
	var ExpandOperator = (function () {
	    function ExpandOperator(project, concurrent, scheduler) {
	        this.project = project;
	        this.concurrent = concurrent;
	        this.scheduler = scheduler;
	    }
	    ExpandOperator.prototype.call = function (subscriber) {
	        return new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler);
	    };
	    return ExpandOperator;
	}());
	exports.ExpandOperator = ExpandOperator;
	var ExpandSubscriber = (function (_super) {
	    __extends(ExpandSubscriber, _super);
	    function ExpandSubscriber(destination, project, concurrent, scheduler) {
	        _super.call(this, destination);
	        this.project = project;
	        this.concurrent = concurrent;
	        this.scheduler = scheduler;
	        this.index = 0;
	        this.active = 0;
	        this.hasCompleted = false;
	        if (concurrent < Number.POSITIVE_INFINITY) {
	            this.buffer = [];
	        }
	    }
	    ExpandSubscriber.dispatch = function (_a) {
	        var subscriber = _a.subscriber, result = _a.result, value = _a.value, index = _a.index;
	        subscriber.subscribeToProjection(result, value, index);
	    };
	    ExpandSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (destination.isUnsubscribed) {
	            this._complete();
	            return;
	        }
	        var index = this.index++;
	        if (this.active < this.concurrent) {
	            destination.next(value);
	            var result = tryCatch_1.tryCatch(this.project)(value, index);
	            if (result === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	            }
	            else if (!this.scheduler) {
	                this.subscribeToProjection(result, value, index);
	            }
	            else {
	                var state = { subscriber: this, result: result, value: value, index: index };
	                this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
	            }
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    ExpandSubscriber.prototype.subscribeToProjection = function (result, value, index) {
	        this.active++;
	        this.add(subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    ExpandSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    ExpandSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this._next(innerValue);
	    };
	    ExpandSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer && buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    return ExpandSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.ExpandSubscriber = ExpandSubscriber;
	//# sourceMappingURL=expand.js.map

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var Subscription_1 = __webpack_require__(19);
	/**
	 * Returns an Observable that mirrors the source Observable, but will call a specified function when
	 * the source terminates on complete or error.
	 * @param {function} finallySelector function to be called when source terminates.
	 * @returns {Observable} an Observable that mirrors the source, but will call the specified function on termination.
	 */
	function _finally(finallySelector) {
	    return this.lift(new FinallyOperator(finallySelector));
	}
	exports._finally = _finally;
	var FinallyOperator = (function () {
	    function FinallyOperator(finallySelector) {
	        this.finallySelector = finallySelector;
	    }
	    FinallyOperator.prototype.call = function (subscriber) {
	        return new FinallySubscriber(subscriber, this.finallySelector);
	    };
	    return FinallyOperator;
	}());
	var FinallySubscriber = (function (_super) {
	    __extends(FinallySubscriber, _super);
	    function FinallySubscriber(destination, finallySelector) {
	        _super.call(this, destination);
	        this.add(new Subscription_1.Subscription(finallySelector));
	    }
	    return FinallySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=finally.js.map

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var find_1 = __webpack_require__(169);
	/**
	 * Returns an Observable that searches for the first item in the source Observable that
	 * matches the specified condition, and returns the the index of the item in the source.
	 * @param {function} predicate function called with each item to test for condition matching.
	 * @returns {Observable} an Observable of the index of the first item that matches the condition.
	 */
	function findIndex(predicate, thisArg) {
	    return this.lift(new find_1.FindValueOperator(predicate, this, true, thisArg));
	}
	exports.findIndex = findIndex;
	//# sourceMappingURL=findIndex.js.map

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var EmptyError_1 = __webpack_require__(104);
	/**
	 * Returns an Observable that emits the first item of the source Observable that matches the specified condition.
	 * Throws an error if matching element is not found.
	 * @param {function} predicate function called with each item to test for condition matching.
	 * @returns {Observable} an Observable of the first item that matches the condition.
	 */
	function first(predicate, resultSelector, defaultValue) {
	    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.first = first;
	var FirstOperator = (function () {
	    function FirstOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    FirstOperator.prototype.call = function (observer) {
	        return new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source);
	    };
	    return FirstOperator;
	}());
	var FirstSubscriber = (function (_super) {
	    __extends(FirstSubscriber, _super);
	    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.index = 0;
	        this.hasCompleted = false;
	    }
	    FirstSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this._emit(value, index);
	        }
	    };
	    FirstSubscriber.prototype._emit = function (value, index) {
	        if (this.resultSelector) {
	            this._tryResultSelector(value, index);
	            return;
	        }
	        this._emitFinal(value);
	    };
	    FirstSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this._emitFinal(result);
	    };
	    FirstSubscriber.prototype._emitFinal = function (value) {
	        var destination = this.destination;
	        destination.next(value);
	        destination.complete();
	        this.hasCompleted = true;
	    };
	    FirstSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
	            destination.next(this.defaultValue);
	            destination.complete();
	        }
	        else if (!this.hasCompleted) {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return FirstSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=first.js.map

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var Subscription_1 = __webpack_require__(19);
	var Observable_1 = __webpack_require__(2);
	var Operator_1 = __webpack_require__(298);
	var Subject_1 = __webpack_require__(14);
	var Map_1 = __webpack_require__(498);
	var FastMap_1 = __webpack_require__(496);
	/**
	 * Groups the items emitted by an Observable according to a specified criterion,
	 * and emits these grouped items as `GroupedObservables`, one `GroupedObservable` per group.
	 *
	 * <img src="./img/groupBy.png" width="100%">
	 *
	 * @param {Function} keySelector - a function that extracts the key for each item
	 * @param {Function} elementSelector - a function that extracts the return element for each item
	 * @returns {Observable} an Observable that emits GroupedObservables, each of which corresponds
	 * to a unique key value and each of which emits those items from the source Observable that share
	 * that key value.
	 */
	function groupBy(keySelector, elementSelector, durationSelector) {
	    return this.lift(new GroupByOperator(this, keySelector, elementSelector, durationSelector));
	}
	exports.groupBy = groupBy;
	var GroupByOperator = (function (_super) {
	    __extends(GroupByOperator, _super);
	    function GroupByOperator(source, keySelector, elementSelector, durationSelector) {
	        _super.call(this);
	        this.source = source;
	        this.keySelector = keySelector;
	        this.elementSelector = elementSelector;
	        this.durationSelector = durationSelector;
	    }
	    GroupByOperator.prototype.call = function (subscriber) {
	        return new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector);
	    };
	    return GroupByOperator;
	}(Operator_1.Operator));
	var GroupBySubscriber = (function (_super) {
	    __extends(GroupBySubscriber, _super);
	    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector) {
	        _super.call(this);
	        this.keySelector = keySelector;
	        this.elementSelector = elementSelector;
	        this.durationSelector = durationSelector;
	        this.groups = null;
	        this.attemptedToUnsubscribe = false;
	        this.count = 0;
	        this.destination = destination;
	        this.add(destination);
	    }
	    GroupBySubscriber.prototype._next = function (value) {
	        var key;
	        try {
	            key = this.keySelector(value);
	        }
	        catch (err) {
	            this.error(err);
	            return;
	        }
	        this._group(value, key);
	    };
	    GroupBySubscriber.prototype._group = function (value, key) {
	        var groups = this.groups;
	        if (!groups) {
	            groups = this.groups = typeof key === 'string' ? new FastMap_1.FastMap() : new Map_1.Map();
	        }
	        var group = groups.get(key);
	        if (!group) {
	            groups.set(key, group = new Subject_1.Subject());
	            var groupedObservable = new GroupedObservable(key, group, this);
	            if (this.durationSelector) {
	                this._selectDuration(key, group);
	            }
	            this.destination.next(groupedObservable);
	        }
	        if (this.elementSelector) {
	            this._selectElement(value, group);
	        }
	        else {
	            this.tryGroupNext(value, group);
	        }
	    };
	    GroupBySubscriber.prototype._selectElement = function (value, group) {
	        var result;
	        try {
	            result = this.elementSelector(value);
	        }
	        catch (err) {
	            this.error(err);
	            return;
	        }
	        this.tryGroupNext(result, group);
	    };
	    GroupBySubscriber.prototype._selectDuration = function (key, group) {
	        var duration;
	        try {
	            duration = this.durationSelector(new GroupedObservable(key, group));
	        }
	        catch (err) {
	            this.error(err);
	            return;
	        }
	        this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
	    };
	    GroupBySubscriber.prototype.tryGroupNext = function (value, group) {
	        if (!group.isUnsubscribed) {
	            group.next(value);
	        }
	    };
	    GroupBySubscriber.prototype._error = function (err) {
	        var groups = this.groups;
	        if (groups) {
	            groups.forEach(function (group, key) {
	                group.error(err);
	            });
	            groups.clear();
	        }
	        this.destination.error(err);
	    };
	    GroupBySubscriber.prototype._complete = function () {
	        var groups = this.groups;
	        if (groups) {
	            groups.forEach(function (group, key) {
	                group.complete();
	            });
	            groups.clear();
	        }
	        this.destination.complete();
	    };
	    GroupBySubscriber.prototype.removeGroup = function (key) {
	        this.groups.delete(key);
	    };
	    GroupBySubscriber.prototype.unsubscribe = function () {
	        if (!this.isUnsubscribed && !this.attemptedToUnsubscribe) {
	            this.attemptedToUnsubscribe = true;
	            if (this.count === 0) {
	                _super.prototype.unsubscribe.call(this);
	            }
	        }
	    };
	    return GroupBySubscriber;
	}(Subscriber_1.Subscriber));
	var GroupDurationSubscriber = (function (_super) {
	    __extends(GroupDurationSubscriber, _super);
	    function GroupDurationSubscriber(key, group, parent) {
	        _super.call(this);
	        this.key = key;
	        this.group = group;
	        this.parent = parent;
	    }
	    GroupDurationSubscriber.prototype._next = function (value) {
	        this.tryComplete();
	    };
	    GroupDurationSubscriber.prototype._error = function (err) {
	        this.tryError(err);
	    };
	    GroupDurationSubscriber.prototype._complete = function () {
	        this.tryComplete();
	    };
	    GroupDurationSubscriber.prototype.tryError = function (err) {
	        var group = this.group;
	        if (!group.isUnsubscribed) {
	            group.error(err);
	        }
	        this.parent.removeGroup(this.key);
	    };
	    GroupDurationSubscriber.prototype.tryComplete = function () {
	        var group = this.group;
	        if (!group.isUnsubscribed) {
	            group.complete();
	        }
	        this.parent.removeGroup(this.key);
	    };
	    return GroupDurationSubscriber;
	}(Subscriber_1.Subscriber));
	var GroupedObservable = (function (_super) {
	    __extends(GroupedObservable, _super);
	    function GroupedObservable(key, groupSubject, refCountSubscription) {
	        _super.call(this);
	        this.key = key;
	        this.groupSubject = groupSubject;
	        this.refCountSubscription = refCountSubscription;
	    }
	    GroupedObservable.prototype._subscribe = function (subscriber) {
	        var subscription = new Subscription_1.Subscription();
	        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
	        if (refCountSubscription && !refCountSubscription.isUnsubscribed) {
	            subscription.add(new InnerRefCountSubscription(refCountSubscription));
	        }
	        subscription.add(groupSubject.subscribe(subscriber));
	        return subscription;
	    };
	    return GroupedObservable;
	}(Observable_1.Observable));
	exports.GroupedObservable = GroupedObservable;
	var InnerRefCountSubscription = (function (_super) {
	    __extends(InnerRefCountSubscription, _super);
	    function InnerRefCountSubscription(parent) {
	        _super.call(this);
	        this.parent = parent;
	        parent.count++;
	    }
	    InnerRefCountSubscription.prototype.unsubscribe = function () {
	        var parent = this.parent;
	        if (!parent.isUnsubscribed && !this.isUnsubscribed) {
	            _super.prototype.unsubscribe.call(this);
	            parent.count -= 1;
	            if (parent.count === 0 && parent.attemptedToUnsubscribe) {
	                parent.unsubscribe();
	            }
	        }
	    };
	    return InnerRefCountSubscription;
	}(Subscription_1.Subscription));
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var noop_1 = __webpack_require__(107);
	/**
	 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
	 *
	 * <img src="./img/ignoreElements.png" width="100%">
	 *
	 * @returns {Observable} an empty Observable that only calls `complete`
	 * or `error`, based on which one is called by the source Observable.
	 */
	function ignoreElements() {
	    return this.lift(new IgnoreElementsOperator());
	}
	exports.ignoreElements = ignoreElements;
	;
	var IgnoreElementsOperator = (function () {
	    function IgnoreElementsOperator() {
	    }
	    IgnoreElementsOperator.prototype.call = function (subscriber) {
	        return new IgnoreElementsSubscriber(subscriber);
	    };
	    return IgnoreElementsOperator;
	}());
	var IgnoreElementsSubscriber = (function (_super) {
	    __extends(IgnoreElementsSubscriber, _super);
	    function IgnoreElementsSubscriber() {
	        _super.apply(this, arguments);
	    }
	    IgnoreElementsSubscriber.prototype._next = function (unused) {
	        noop_1.noop();
	    };
	    return IgnoreElementsSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	function inspect(durationSelector) {
	    return this.lift(new InspectOperator(durationSelector));
	}
	exports.inspect = inspect;
	var InspectOperator = (function () {
	    function InspectOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    InspectOperator.prototype.call = function (subscriber) {
	        return new InspectSubscriber(subscriber, this.durationSelector);
	    };
	    return InspectOperator;
	}());
	var InspectSubscriber = (function (_super) {
	    __extends(InspectSubscriber, _super);
	    function InspectSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.durationSelector = durationSelector;
	        this.hasValue = false;
	    }
	    InspectSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	        if (!this.throttled) {
	            var duration = tryCatch_1.tryCatch(this.durationSelector)(value);
	            if (duration === errorObject_1.errorObject) {
	                this.destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
	            }
	        }
	    };
	    InspectSubscriber.prototype.clearThrottle = function () {
	        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	        if (hasValue) {
	            this.value = null;
	            this.hasValue = false;
	            this.destination.next(value);
	        }
	    };
	    InspectSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        this.clearThrottle();
	    };
	    InspectSubscriber.prototype.notifyComplete = function () {
	        this.clearThrottle();
	    };
	    return InspectSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=inspect.js.map

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var asap_1 = __webpack_require__(17);
	var Subscriber_1 = __webpack_require__(6);
	function inspectTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new InspectTimeOperator(delay, scheduler));
	}
	exports.inspectTime = inspectTime;
	var InspectTimeOperator = (function () {
	    function InspectTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    InspectTimeOperator.prototype.call = function (subscriber) {
	        return new InspectTimeSubscriber(subscriber, this.delay, this.scheduler);
	    };
	    return InspectTimeOperator;
	}());
	var InspectTimeSubscriber = (function (_super) {
	    __extends(InspectTimeSubscriber, _super);
	    function InspectTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.hasValue = false;
	    }
	    InspectTimeSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	        if (!this.throttled) {
	            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, this));
	        }
	    };
	    InspectTimeSubscriber.prototype.clearThrottle = function () {
	        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	        if (hasValue) {
	            this.value = null;
	            this.hasValue = false;
	            this.destination.next(value);
	        }
	    };
	    return InspectTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(subscriber) {
	    subscriber.clearThrottle();
	}
	//# sourceMappingURL=inspectTime.js.map

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
	 *
	 * <img src="./img/isEmpty.png" width="100%">
	 *
	 * @returns {Observable} an Observable that emits a Boolean.
	 */
	function isEmpty() {
	    return this.lift(new IsEmptyOperator());
	}
	exports.isEmpty = isEmpty;
	var IsEmptyOperator = (function () {
	    function IsEmptyOperator() {
	    }
	    IsEmptyOperator.prototype.call = function (observer) {
	        return new IsEmptySubscriber(observer);
	    };
	    return IsEmptyOperator;
	}());
	var IsEmptySubscriber = (function (_super) {
	    __extends(IsEmptySubscriber, _super);
	    function IsEmptySubscriber(destination) {
	        _super.call(this, destination);
	    }
	    IsEmptySubscriber.prototype.notifyComplete = function (isEmpty) {
	        var destination = this.destination;
	        destination.next(isEmpty);
	        destination.complete();
	    };
	    IsEmptySubscriber.prototype._next = function (value) {
	        this.notifyComplete(false);
	    };
	    IsEmptySubscriber.prototype._complete = function () {
	        this.notifyComplete(true);
	    };
	    return IsEmptySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=isEmpty.js.map

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var EmptyError_1 = __webpack_require__(104);
	/**
	 * Returns an Observable that emits only the last item emitted by the source Observable.
	 * It optionally takes a predicate function as a parameter, in which case, rather than emitting
	 * the last item from the source Observable, the resulting Observable will emit the last item
	 * from the source Observable that satisfies the predicate.
	 *
	 * <img src="./img/last.png" width="100%">
	 *
	 * @param {function} predicate - the condition any source emitted item has to satisfy.
	 * @returns {Observable} an Observable that emits only the last item satisfying the given condition
	 * from the source, or an NoSuchElementException if no such items are emitted.
	 * @throws - Throws if no items that match the predicate are emitted by the source Observable.
	 */
	function last(predicate, resultSelector, defaultValue) {
	    return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
	}
	exports.last = last;
	var LastOperator = (function () {
	    function LastOperator(predicate, resultSelector, defaultValue, source) {
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }
	    LastOperator.prototype.call = function (observer) {
	        return new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source);
	    };
	    return LastOperator;
	}());
	var LastSubscriber = (function (_super) {
	    __extends(LastSubscriber, _super);
	    function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	        this.hasValue = false;
	        this.index = 0;
	        if (typeof defaultValue !== 'undefined') {
	            this.lastValue = defaultValue;
	            this.hasValue = true;
	        }
	    }
	    LastSubscriber.prototype._next = function (value) {
	        var index = this.index++;
	        if (this.predicate) {
	            this._tryPredicate(value, index);
	        }
	        else {
	            if (this.resultSelector) {
	                this._tryResultSelector(value, index);
	                return;
	            }
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    };
	    LastSubscriber.prototype._tryPredicate = function (value, index) {
	        var result;
	        try {
	            result = this.predicate(value, index, this.source);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            if (this.resultSelector) {
	                this._tryResultSelector(value, index);
	                return;
	            }
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    };
	    LastSubscriber.prototype._tryResultSelector = function (value, index) {
	        var result;
	        try {
	            result = this.resultSelector(value, index);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.lastValue = result;
	        this.hasValue = true;
	    };
	    LastSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.hasValue) {
	            destination.next(this.lastValue);
	            destination.complete();
	        }
	        else {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return LastSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=last.js.map

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the returned observable
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * @param {Function} project the function to create projection
	 * @param {any} [thisArg] an optional argument to define what `this` is in the project function
	 * @returns {Observable} a observable of projected values
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber) {
	        return new MapSubscriber(subscriber, this.project, this.thisArg);
	    };
	    return MapOperator;
	}());
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Maps every value to the same value every time.
	 *
	 * <img src="./img/mapTo.png" width="100%">
	 *
	 * @param {any} value the value to map each incoming value to
	 * @returns {Observable} an observable of the passed value that emits everytime the source does
	 */
	function mapTo(value) {
	    return this.lift(new MapToOperator(value));
	}
	exports.mapTo = mapTo;
	var MapToOperator = (function () {
	    function MapToOperator(value) {
	        this.value = value;
	    }
	    MapToOperator.prototype.call = function (subscriber) {
	        return new MapToSubscriber(subscriber, this.value);
	    };
	    return MapToOperator;
	}());
	var MapToSubscriber = (function (_super) {
	    __extends(MapToSubscriber, _super);
	    function MapToSubscriber(destination, value) {
	        _super.call(this, destination);
	        this.value = value;
	    }
	    MapToSubscriber.prototype._next = function (x) {
	        this.destination.next(this.value);
	    };
	    return MapToSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var Notification_1 = __webpack_require__(98);
	/**
	 * Returns an Observable that represents all of the emissions and notifications
	 * from the source Observable into emissions marked with their original types
	 * within a `Notification` objects.
	 *
	 * <img src="./img/materialize.png" width="100%">
	 *
	 * @scheduler materialize does not operate by default on a particular Scheduler.
	 * @returns {Observable} an Observable that emits items that are the result of
	 * materializing the items and notifications of the source Observable.
	 */
	function materialize() {
	    return this.lift(new MaterializeOperator());
	}
	exports.materialize = materialize;
	var MaterializeOperator = (function () {
	    function MaterializeOperator() {
	    }
	    MaterializeOperator.prototype.call = function (subscriber) {
	        return new MaterializeSubscriber(subscriber);
	    };
	    return MaterializeOperator;
	}());
	var MaterializeSubscriber = (function (_super) {
	    __extends(MaterializeSubscriber, _super);
	    function MaterializeSubscriber(destination) {
	        _super.call(this, destination);
	    }
	    MaterializeSubscriber.prototype._next = function (value) {
	        this.destination.next(Notification_1.Notification.createNext(value));
	    };
	    MaterializeSubscriber.prototype._error = function (err) {
	        var destination = this.destination;
	        destination.next(Notification_1.Notification.createError(err));
	        destination.complete();
	    };
	    MaterializeSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        destination.next(Notification_1.Notification.createComplete());
	        destination.complete();
	    };
	    return MaterializeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var reduce_1 = __webpack_require__(101);
	/**
	 * The Max operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
	 * and when source Observable completes it emits a single item: the item with the largest number.
	 *
	 * <img src="./img/max.png" width="100%">
	 *
	 * @param {Function} optional comparer function that it will use instead of its default to compare the value of two
	 * items.
	 * @returns {Observable} an Observable that emits item with the largest number.
	 */
	function max(comparer) {
	    var max = (typeof comparer === 'function')
	        ? comparer
	        : function (x, y) { return x > y ? x : y; };
	    return this.lift(new reduce_1.ReduceOperator(max));
	}
	exports.max = max;
	//# sourceMappingURL=max.js.map

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(31);
	var mergeAll_1 = __webpack_require__(69);
	var isScheduler_1 = __webpack_require__(34);
	/**
	 * Creates a result Observable which emits values from every given input Observable.
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * @param {Observable} input Observables
	 * @returns {Observable} an Observable that emits items that are the result of every input Observable.
	 */
	function merge() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    observables.unshift(this);
	    return mergeStatic.apply(this, observables);
	}
	exports.merge = merge;
	function mergeStatic() {
	    var observables = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        observables[_i - 0] = arguments[_i];
	    }
	    var concurrent = Number.POSITIVE_INFINITY;
	    var scheduler = null;
	    var last = observables[observables.length - 1];
	    if (isScheduler_1.isScheduler(last)) {
	        scheduler = observables.pop();
	        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
	            concurrent = observables.pop();
	        }
	    }
	    else if (typeof last === 'number') {
	        concurrent = observables.pop();
	    }
	    if (observables.length === 1) {
	        return observables[0];
	    }
	    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new mergeAll_1.MergeAllOperator(concurrent));
	}
	exports.mergeStatic = mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	var subscribeToResult_1 = __webpack_require__(10);
	var OuterSubscriber_1 = __webpack_require__(9);
	function mergeScan(project, seed, concurrent) {
	    if (concurrent === void 0) { concurrent = Number.POSITIVE_INFINITY; }
	    return this.lift(new MergeScanOperator(project, seed, concurrent));
	}
	exports.mergeScan = mergeScan;
	var MergeScanOperator = (function () {
	    function MergeScanOperator(project, seed, concurrent) {
	        this.project = project;
	        this.seed = seed;
	        this.concurrent = concurrent;
	    }
	    MergeScanOperator.prototype.call = function (subscriber) {
	        return new MergeScanSubscriber(subscriber, this.project, this.seed, this.concurrent);
	    };
	    return MergeScanOperator;
	}());
	exports.MergeScanOperator = MergeScanOperator;
	var MergeScanSubscriber = (function (_super) {
	    __extends(MergeScanSubscriber, _super);
	    function MergeScanSubscriber(destination, project, acc, concurrent) {
	        _super.call(this, destination);
	        this.project = project;
	        this.acc = acc;
	        this.concurrent = concurrent;
	        this.hasValue = false;
	        this.hasCompleted = false;
	        this.buffer = [];
	        this.active = 0;
	        this.index = 0;
	    }
	    MergeScanSubscriber.prototype._next = function (value) {
	        if (this.active < this.concurrent) {
	            var index = this.index++;
	            var ish = tryCatch_1.tryCatch(this.project)(this.acc, value);
	            var destination = this.destination;
	            if (ish === errorObject_1.errorObject) {
	                destination.error(errorObject_1.errorObject.e);
	            }
	            else {
	                this.active++;
	                this._innerSub(ish, value, index);
	            }
	        }
	        else {
	            this.buffer.push(value);
	        }
	    };
	    MergeScanSubscriber.prototype._innerSub = function (ish, value, index) {
	        this.add(subscribeToResult_1.subscribeToResult(this, ish, value, index));
	    };
	    MergeScanSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0 && this.buffer.length === 0) {
	            if (this.hasValue === false) {
	                this.destination.next(this.acc);
	            }
	            this.destination.complete();
	        }
	    };
	    MergeScanSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var destination = this.destination;
	        this.acc = innerValue;
	        this.hasValue = true;
	        destination.next(innerValue);
	    };
	    MergeScanSubscriber.prototype.notifyComplete = function (innerSub) {
	        var buffer = this.buffer;
	        this.remove(innerSub);
	        this.active--;
	        if (buffer.length > 0) {
	            this._next(buffer.shift());
	        }
	        else if (this.active === 0 && this.hasCompleted) {
	            if (this.hasValue === false) {
	                this.destination.next(this.acc);
	            }
	            this.destination.complete();
	        }
	    };
	    return MergeScanSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	exports.MergeScanSubscriber = MergeScanSubscriber;
	//# sourceMappingURL=mergeScan.js.map

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var reduce_1 = __webpack_require__(101);
	/**
	 * The Min operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
	 * and when source Observable completes it emits a single item: the item with the smallest number.
	 *
	 * <img src="./img/min.png" width="100%">
	 *
	 * @param {Function} optional comparer function that it will use instead of its default to compare the value of two items.
	 * @returns {Observable<R>} an Observable that emits item with the smallest number.
	 */
	function min(comparer) {
	    var min = (typeof comparer === 'function')
	        ? comparer
	        : function (x, y) { return x < y ? x : y; };
	    return this.lift(new reduce_1.ReduceOperator(min));
	}
	exports.min = min;
	//# sourceMappingURL=min.js.map

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var not_1 = __webpack_require__(500);
	var filter_1 = __webpack_require__(168);
	function partition(predicate, thisArg) {
	    return [
	        filter_1.filter.call(this, predicate),
	        filter_1.filter.call(this, not_1.not(predicate, thisArg))
	    ];
	}
	exports.partition = partition;
	//# sourceMappingURL=partition.js.map

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subject_1 = __webpack_require__(14);
	var multicast_1 = __webpack_require__(40);
	/**
	 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
	 * before it begins emitting items to those Observers that have subscribed to it.
	 *
	 * <img src="./img/publish.png" width="100%">
	 *
	 * @returns a ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
	 */
	function publish() {
	    return multicast_1.multicast.call(this, new Subject_1.Subject());
	}
	exports.publish = publish;
	//# sourceMappingURL=publish.js.map

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var BehaviorSubject_1 = __webpack_require__(493);
	var multicast_1 = __webpack_require__(40);
	function publishBehavior(value) {
	    return multicast_1.multicast.call(this, new BehaviorSubject_1.BehaviorSubject(value));
	}
	exports.publishBehavior = publishBehavior;
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var AsyncSubject_1 = __webpack_require__(175);
	var multicast_1 = __webpack_require__(40);
	function publishLast() {
	    return multicast_1.multicast.call(this, new AsyncSubject_1.AsyncSubject());
	}
	exports.publishLast = publishLast;
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ReplaySubject_1 = __webpack_require__(494);
	var multicast_1 = __webpack_require__(40);
	function publishReplay(bufferSize, windowTime, scheduler) {
	    if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	    if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	    return multicast_1.multicast.call(this, new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler));
	}
	exports.publishReplay = publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var EmptyObservable_1 = __webpack_require__(32);
	/**
	 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times,
	 * on a particular Scheduler.
	 *
	 * <img src="./img/repeat.png" width="100%">
	 *
	 * @param {Scheduler} [scheduler] the Scheduler to emit the items on.
	 * @param {number} [count] the number of times the source Observable items are repeated, a count of 0 will yield
	 * an empty Observable.
	 * @returns {Observable} an Observable that repeats the stream of items emitted by the source Observable at most
	 * count times.
	 */
	function repeat(count) {
	    if (count === void 0) { count = -1; }
	    if (count === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else if (count < 0) {
	        return this.lift(new RepeatOperator(-1, this));
	    }
	    else {
	        return this.lift(new RepeatOperator(count - 1, this));
	    }
	}
	exports.repeat = repeat;
	var RepeatOperator = (function () {
	    function RepeatOperator(count, source) {
	        this.count = count;
	        this.source = source;
	    }
	    RepeatOperator.prototype.call = function (subscriber) {
	        return new RepeatSubscriber(subscriber, this.count, this.source);
	    };
	    return RepeatOperator;
	}());
	var RepeatSubscriber = (function (_super) {
	    __extends(RepeatSubscriber, _super);
	    function RepeatSubscriber(destination, count, source) {
	        _super.call(this, destination);
	        this.count = count;
	        this.source = source;
	    }
	    RepeatSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _a = this, source = _a.source, count = _a.count;
	            if (count === 0) {
	                return _super.prototype.complete.call(this);
	            }
	            else if (count > -1) {
	                this.count = count - 1;
	            }
	            this.unsubscribe();
	            this.isStopped = false;
	            this.isUnsubscribed = false;
	            source.subscribe(this);
	        }
	    };
	    return RepeatSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that mirrors the source Observable, resubscribing to it if it calls `error` and the
	 * predicate returns true for that specific exception and retry count.
	 * If the source Observable calls `error`, this method will resubscribe to the source Observable for a maximum of
	 * count resubscriptions (given as a number parameter) rather than propagating the `error` call.
	 *
	 * <img src="./img/retry.png" width="100%">
	 *
	 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
	 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
	 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
	 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
	 * @param {number} number of retry attempts before failing.
	 * @returns {Observable} the source Observable modified with the retry logic.
	 */
	function retry(count) {
	    if (count === void 0) { count = -1; }
	    return this.lift(new RetryOperator(count, this));
	}
	exports.retry = retry;
	var RetryOperator = (function () {
	    function RetryOperator(count, source) {
	        this.count = count;
	        this.source = source;
	    }
	    RetryOperator.prototype.call = function (subscriber) {
	        return new RetrySubscriber(subscriber, this.count, this.source);
	    };
	    return RetryOperator;
	}());
	var RetrySubscriber = (function (_super) {
	    __extends(RetrySubscriber, _super);
	    function RetrySubscriber(destination, count, source) {
	        _super.call(this, destination);
	        this.count = count;
	        this.source = source;
	    }
	    RetrySubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _a = this, source = _a.source, count = _a.count;
	            if (count === 0) {
	                return _super.prototype.error.call(this, err);
	            }
	            else if (count > -1) {
	                this.count = count - 1;
	            }
	            this.unsubscribe();
	            this.isStopped = false;
	            this.isUnsubscribed = false;
	            source.subscribe(this);
	        }
	    };
	    return RetrySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=retry.js.map

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(14);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	/**
	 * Returns an Observable that emits the same values as the source observable with the exception of an `error`.
	 * An `error` will cause the emission of the Throwable that cause the error to the Observable returned from
	 * notificationHandler. If that Observable calls onComplete or `error` then retry will call `complete` or `error`
	 * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
	 * Scheduler.
	 *
	 * <img src="./img/retryWhen.png" width="100%">
	 *
	 * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
	 * aborting the retry.
	 * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
	 * @returns {Observable} the source Observable modified with retry logic.
	 */
	function retryWhen(notifier) {
	    return this.lift(new RetryWhenOperator(notifier, this));
	}
	exports.retryWhen = retryWhen;
	var RetryWhenOperator = (function () {
	    function RetryWhenOperator(notifier, source) {
	        this.notifier = notifier;
	        this.source = source;
	    }
	    RetryWhenOperator.prototype.call = function (subscriber) {
	        return new RetryWhenSubscriber(subscriber, this.notifier, this.source);
	    };
	    return RetryWhenOperator;
	}());
	var RetryWhenSubscriber = (function (_super) {
	    __extends(RetryWhenSubscriber, _super);
	    function RetryWhenSubscriber(destination, notifier, source) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.source = source;
	    }
	    RetryWhenSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var errors = this.errors;
	            var retries = this.retries;
	            var retriesSubscription = this.retriesSubscription;
	            if (!retries) {
	                errors = new Subject_1.Subject();
	                retries = tryCatch_1.tryCatch(this.notifier)(errors);
	                if (retries === errorObject_1.errorObject) {
	                    return _super.prototype.error.call(this, errorObject_1.errorObject.e);
	                }
	                retriesSubscription = subscribeToResult_1.subscribeToResult(this, retries);
	            }
	            else {
	                this.errors = null;
	                this.retriesSubscription = null;
	            }
	            this.unsubscribe();
	            this.isUnsubscribed = false;
	            this.errors = errors;
	            this.retries = retries;
	            this.retriesSubscription = retriesSubscription;
	            errors.next(err);
	        }
	    };
	    RetryWhenSubscriber.prototype._unsubscribe = function () {
	        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
	        if (errors) {
	            errors.unsubscribe();
	            this.errors = null;
	        }
	        if (retriesSubscription) {
	            retriesSubscription.unsubscribe();
	            this.retriesSubscription = null;
	        }
	        this.retries = null;
	    };
	    RetryWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, errors = _a.errors, retries = _a.retries, retriesSubscription = _a.retriesSubscription;
	        this.errors = null;
	        this.retries = null;
	        this.retriesSubscription = null;
	        this.unsubscribe();
	        this.isStopped = false;
	        this.isUnsubscribed = false;
	        this.errors = errors;
	        this.retries = retries;
	        this.retriesSubscription = retriesSubscription;
	        this.source.subscribe(this);
	    };
	    return RetryWhenSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	/**
	 * Returns an Observable that, when the specified sampler Observable emits an item or completes, it then emits the most
	 * recently emitted item (if any) emitted by the source Observable since the previous emission from the sampler
	 * Observable.
	 *
	 * <img src="./img/sample.png" width="100%">
	 *
	 * @param {Observable} sampler - the Observable to use for sampling the source Observable.
	 * @returns {Observable<T>} an Observable that emits the results of sampling the items emitted by this Observable
	 * whenever the sampler Observable emits an item or completes.
	 */
	function sample(notifier) {
	    return this.lift(new SampleOperator(notifier));
	}
	exports.sample = sample;
	var SampleOperator = (function () {
	    function SampleOperator(notifier) {
	        this.notifier = notifier;
	    }
	    SampleOperator.prototype.call = function (subscriber) {
	        return new SampleSubscriber(subscriber, this.notifier);
	    };
	    return SampleOperator;
	}());
	var SampleSubscriber = (function (_super) {
	    __extends(SampleSubscriber, _super);
	    function SampleSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    SampleSubscriber.prototype._next = function (value) {
	        this.value = value;
	        this.hasValue = true;
	    };
	    SampleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.emitValue();
	    };
	    SampleSubscriber.prototype.notifyComplete = function () {
	        this.emitValue();
	    };
	    SampleSubscriber.prototype.emitValue = function () {
	        if (this.hasValue) {
	            this.hasValue = false;
	            this.destination.next(this.value);
	        }
	    };
	    return SampleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=sample.js.map

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var asap_1 = __webpack_require__(17);
	function sampleTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new SampleTimeOperator(delay, scheduler));
	}
	exports.sampleTime = sampleTime;
	var SampleTimeOperator = (function () {
	    function SampleTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    SampleTimeOperator.prototype.call = function (subscriber) {
	        return new SampleTimeSubscriber(subscriber, this.delay, this.scheduler);
	    };
	    return SampleTimeOperator;
	}());
	var SampleTimeSubscriber = (function (_super) {
	    __extends(SampleTimeSubscriber, _super);
	    function SampleTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	        this.hasValue = false;
	        this.add(scheduler.schedule(dispatchNotification, delay, { subscriber: this, delay: delay }));
	    }
	    SampleTimeSubscriber.prototype._next = function (value) {
	        this.lastValue = value;
	        this.hasValue = true;
	    };
	    SampleTimeSubscriber.prototype.notifyNext = function () {
	        if (this.hasValue) {
	            this.hasValue = false;
	            this.destination.next(this.lastValue);
	        }
	    };
	    return SampleTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNotification(state) {
	    var subscriber = state.subscriber, delay = state.delay;
	    subscriber.notifyNext();
	    this.schedule(state, delay);
	}
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that applies a specified accumulator function to each item emitted by the source Observable.
	 * If a seed value is specified, then that value will be used as the initial value for the accumulator.
	 * If no seed value is specified, the first item of the source is used as the seed.
	 * @param {function} accumulator The accumulator function called on each item.
	 *
	 * <img src="./img/scan.png" width="100%">
	 *
	 * @param {any} [seed] The initial accumulator value.
	 * @returns {Obervable} An observable of the accumulated values.
	 */
	function scan(accumulator, seed) {
	    return this.lift(new ScanOperator(accumulator, seed));
	}
	exports.scan = scan;
	var ScanOperator = (function () {
	    function ScanOperator(accumulator, seed) {
	        this.accumulator = accumulator;
	        this.seed = seed;
	    }
	    ScanOperator.prototype.call = function (subscriber) {
	        return new ScanSubscriber(subscriber, this.accumulator, this.seed);
	    };
	    return ScanOperator;
	}());
	var ScanSubscriber = (function (_super) {
	    __extends(ScanSubscriber, _super);
	    function ScanSubscriber(destination, accumulator, seed) {
	        _super.call(this, destination);
	        this.accumulator = accumulator;
	        this.accumulatorSet = false;
	        this.seed = seed;
	        this.accumulator = accumulator;
	        this.accumulatorSet = typeof seed !== 'undefined';
	    }
	    Object.defineProperty(ScanSubscriber.prototype, "seed", {
	        get: function () {
	            return this._seed;
	        },
	        set: function (value) {
	            this.accumulatorSet = true;
	            this._seed = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScanSubscriber.prototype._next = function (value) {
	        if (!this.accumulatorSet) {
	            this.seed = value;
	            this.destination.next(value);
	        }
	        else {
	            return this._tryNext(value);
	        }
	    };
	    ScanSubscriber.prototype._tryNext = function (value) {
	        var result;
	        try {
	            result = this.accumulator(this.seed, value);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	        this.seed = result;
	        this.destination.next(result);
	    };
	    return ScanSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=scan.js.map

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(40);
	var Subject_1 = __webpack_require__(14);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @returns {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 */
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var EmptyError_1 = __webpack_require__(104);
	/**
	 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
	 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
	 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
	 *
	 * <img src="./img/single.png" width="100%">
	 *
	 * @param {Function} a predicate function to evaluate items emitted by the source Observable.
	 * @returns {Observable<T>} an Observable that emits the single item emitted by the source Observable that matches
	 * the predicate.
	 .
	 */
	function single(predicate) {
	    return this.lift(new SingleOperator(predicate, this));
	}
	exports.single = single;
	var SingleOperator = (function () {
	    function SingleOperator(predicate, source) {
	        this.predicate = predicate;
	        this.source = source;
	    }
	    SingleOperator.prototype.call = function (subscriber) {
	        return new SingleSubscriber(subscriber, this.predicate, this.source);
	    };
	    return SingleOperator;
	}());
	var SingleSubscriber = (function (_super) {
	    __extends(SingleSubscriber, _super);
	    function SingleSubscriber(destination, predicate, source) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.source = source;
	        this.seenValue = false;
	        this.index = 0;
	    }
	    SingleSubscriber.prototype.applySingleValue = function (value) {
	        if (this.seenValue) {
	            this.destination.error('Sequence contains more than one element');
	        }
	        else {
	            this.seenValue = true;
	            this.singleValue = value;
	        }
	    };
	    SingleSubscriber.prototype._next = function (value) {
	        var predicate = this.predicate;
	        this.index++;
	        if (predicate) {
	            this.tryNext(value);
	        }
	        else {
	            this.applySingleValue(value);
	        }
	    };
	    SingleSubscriber.prototype.tryNext = function (value) {
	        try {
	            var result = this.predicate(value, this.index, this.source);
	            if (result) {
	                this.applySingleValue(value);
	            }
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    SingleSubscriber.prototype._complete = function () {
	        var destination = this.destination;
	        if (this.index > 0) {
	            destination.next(this.seenValue ? this.singleValue : undefined);
	            destination.complete();
	        }
	        else {
	            destination.error(new EmptyError_1.EmptyError);
	        }
	    };
	    return SingleSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=single.js.map

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that skips `n` items emitted by an Observable.
	 *
	 * <img src="./img/skip.png" width="100%">
	 *
	 * @param {Number} the `n` of times, items emitted by source Observable should be skipped.
	 * @returns {Observable} an Observable that skips values emitted by the source Observable.
	 *
	 */
	function skip(total) {
	    return this.lift(new SkipOperator(total));
	}
	exports.skip = skip;
	var SkipOperator = (function () {
	    function SkipOperator(total) {
	        this.total = total;
	    }
	    SkipOperator.prototype.call = function (subscriber) {
	        return new SkipSubscriber(subscriber, this.total);
	    };
	    return SkipOperator;
	}());
	var SkipSubscriber = (function (_super) {
	    __extends(SkipSubscriber, _super);
	    function SkipSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    SkipSubscriber.prototype._next = function (x) {
	        if (++this.count > this.total) {
	            this.destination.next(x);
	        }
	    };
	    return SkipSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=skip.js.map

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	/**
	* Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
	*
	* <img src="./img/skipUntil.png" width="100%">
	*
	* @param {Observable} the second Observable that has to emit an item before the source Observable's elements begin to
	* be mirrored by the resulting Observable.
	* @returns {Observable<T>} an Observable that skips items from the source Observable until the second Observable emits
	* an item, then emits the remaining items.
	*/
	function skipUntil(notifier) {
	    return this.lift(new SkipUntilOperator(notifier));
	}
	exports.skipUntil = skipUntil;
	var SkipUntilOperator = (function () {
	    function SkipUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    SkipUntilOperator.prototype.call = function (subscriber) {
	        return new SkipUntilSubscriber(subscriber, this.notifier);
	    };
	    return SkipUntilOperator;
	}());
	var SkipUntilSubscriber = (function (_super) {
	    __extends(SkipUntilSubscriber, _super);
	    function SkipUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.hasValue = false;
	        this.isInnerStopped = false;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    SkipUntilSubscriber.prototype._next = function (value) {
	        if (this.hasValue) {
	            _super.prototype._next.call(this, value);
	        }
	    };
	    SkipUntilSubscriber.prototype._complete = function () {
	        if (this.isInnerStopped) {
	            _super.prototype._complete.call(this);
	        }
	        else {
	            this.unsubscribe();
	        }
	    };
	    SkipUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.hasValue = true;
	    };
	    SkipUntilSubscriber.prototype.notifyComplete = function () {
	        this.isInnerStopped = true;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    return SkipUntilSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	/**
	 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
	 * true, but emits all further source items as soon as the condition becomes false.
	 *
	 * <img src="./img/skipWhile.png" width="100%">
	 *
	 * @param {Function} predicate - a function to test each item emitted from the source Observable.
	 * @returns {Observable<T>} an Observable that begins emitting items emitted by the source Observable when the
	 * specified predicate becomes false.
	 */
	function skipWhile(predicate) {
	    return this.lift(new SkipWhileOperator(predicate));
	}
	exports.skipWhile = skipWhile;
	var SkipWhileOperator = (function () {
	    function SkipWhileOperator(predicate) {
	        this.predicate = predicate;
	    }
	    SkipWhileOperator.prototype.call = function (subscriber) {
	        return new SkipWhileSubscriber(subscriber, this.predicate);
	    };
	    return SkipWhileOperator;
	}());
	var SkipWhileSubscriber = (function (_super) {
	    __extends(SkipWhileSubscriber, _super);
	    function SkipWhileSubscriber(destination, predicate) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.skipping = true;
	        this.index = 0;
	    }
	    SkipWhileSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        if (this.skipping) {
	            this.tryCallPredicate(value);
	        }
	        if (!this.skipping) {
	            destination.next(value);
	        }
	    };
	    SkipWhileSubscriber.prototype.tryCallPredicate = function (value) {
	        try {
	            var result = this.predicate(value, this.index++);
	            this.skipping = Boolean(result);
	        }
	        catch (err) {
	            this.destination.error(err);
	        }
	    };
	    return SkipWhileSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(31);
	var ScalarObservable_1 = __webpack_require__(99);
	var EmptyObservable_1 = __webpack_require__(32);
	var concat_1 = __webpack_require__(166);
	var isScheduler_1 = __webpack_require__(34);
	/**
	 * Returns an Observable that emits the items in a specified Iterable before it begins to emit items emitted by the
	 * source Observable.
	 *
	 * <img src="./img/startWith.png" width="100%">
	 *
	 * @param {Values} an Iterable that contains the items you want the modified Observable to emit first.
	 * @returns {Observable} an Observable that emits the items in the specified Iterable and then emits the items
	 * emitted by the source Observable.
	 */
	function startWith() {
	    var array = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        array[_i - 0] = arguments[_i];
	    }
	    var scheduler = array[array.length - 1];
	    if (isScheduler_1.isScheduler(scheduler)) {
	        array.pop();
	    }
	    else {
	        scheduler = null;
	    }
	    var len = array.length;
	    if (len === 1) {
	        return concat_1.concatStatic(new ScalarObservable_1.ScalarObservable(array[0], scheduler), this);
	    }
	    else if (len > 1) {
	        return concat_1.concatStatic(new ArrayObservable_1.ArrayObservable(array, scheduler), this);
	    }
	    else {
	        return concat_1.concatStatic(new EmptyObservable_1.EmptyObservable(scheduler), this);
	    }
	}
	exports.startWith = startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var SubscribeOnObservable_1 = __webpack_require__(411);
	/**
	 * Asynchronously subscribes Observers to this Observable on the specified Scheduler.
	 *
	 * <img src="./img/subscribeOn.png" width="100%">
	 *
	 * @param {Scheduler} the Scheduler to perform subscription actions on.
	 * @returns {Observable<T>} the source Observable modified so that its subscriptions happen on the specified Scheduler
	 .
	 */
	function subscribeOn(scheduler, delay) {
	    if (delay === void 0) { delay = 0; }
	    return new SubscribeOnObservable_1.SubscribeOnObservable(this, delay, scheduler);
	}
	exports.subscribeOn = subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	/**
	 * Converts an Observable that emits Observables into an Observable that emits the items emitted by the most recently
	 * emitted of those Observables.
	 *
	 * <img src="./img/switch.png" width="100%">
	 *
	 * Switch subscribes to an Observable that emits Observables. Each time it observes one of these emitted Observables,
	 * the Observable returned by switchOnNext begins emitting the items emitted by that Observable. When a new Observable
	 * is emitted, switchOnNext stops emitting items from the earlier-emitted Observable and begins emitting items from the
	 * new one.
	 *
	 * @param {Function} a predicate function to evaluate items emitted by the source Observable.
	 * @returns {Observable<T>} an Observable that emits the items emitted by the Observable most recently emitted by the
	 * source Observable.
	 */
	function _switch() {
	    return this.lift(new SwitchOperator());
	}
	exports._switch = _switch;
	var SwitchOperator = (function () {
	    function SwitchOperator() {
	    }
	    SwitchOperator.prototype.call = function (subscriber) {
	        return new SwitchSubscriber(subscriber);
	    };
	    return SwitchOperator;
	}());
	var SwitchSubscriber = (function (_super) {
	    __extends(SwitchSubscriber, _super);
	    function SwitchSubscriber(destination) {
	        _super.call(this, destination);
	        this.active = 0;
	        this.hasCompleted = false;
	    }
	    SwitchSubscriber.prototype._next = function (value) {
	        this.unsubscribeInner();
	        this.active++;
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, value));
	    };
	    SwitchSubscriber.prototype._complete = function () {
	        this.hasCompleted = true;
	        if (this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    SwitchSubscriber.prototype.unsubscribeInner = function () {
	        this.active = this.active > 0 ? this.active - 1 : 0;
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	            this.remove(innerSubscription);
	        }
	    };
	    SwitchSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    SwitchSubscriber.prototype.notifyError = function (err) {
	        this.destination.error(err);
	    };
	    SwitchSubscriber.prototype.notifyComplete = function () {
	        this.unsubscribeInner();
	        if (this.hasCompleted && this.active === 0) {
	            this.destination.complete();
	        }
	    };
	    return SwitchSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switch.js.map

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	/**
	 * Returns a new Observable by applying a function that you supply to each item emitted by the source Observable that
	 * returns an Observable, and then emitting the items emitted by the most recently emitted of these Observables.
	 *
	 * <img src="./img/switchMap.png" width="100%">
	 *
	 * @param {Observable} a function that, when applied to an item emitted by the source Observable, returns an Observable.
	 * @returns {Observable} an Observable that emits the items emitted by the Observable returned from applying func to
	 * the most recently emitted item emitted by the source Observable.
	 */
	function switchMap(project, resultSelector) {
	    return this.lift(new SwitchMapOperator(project, resultSelector));
	}
	exports.switchMap = switchMap;
	var SwitchMapOperator = (function () {
	    function SwitchMapOperator(project, resultSelector) {
	        this.project = project;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapOperator.prototype.call = function (subscriber) {
	        return new SwitchMapSubscriber(subscriber, this.project, this.resultSelector);
	    };
	    return SwitchMapOperator;
	}());
	var SwitchMapSubscriber = (function (_super) {
	    __extends(SwitchMapSubscriber, _super);
	    function SwitchMapSubscriber(destination, project, resultSelector) {
	        _super.call(this, destination);
	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapSubscriber.prototype._next = function (value) {
	        var result;
	        var index = this.index++;
	        try {
	            result = this.project(value, index);
	        }
	        catch (error) {
	            this.destination.error(error);
	            return;
	        }
	        this._innerSub(result, value, index);
	    };
	    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
	    };
	    SwitchMapSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (this.resultSelector) {
	            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            this.destination.next(innerValue);
	        }
	    };
	    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var result;
	        try {
	            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return SwitchMapSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	function switchMapTo(observable, resultSelector) {
	    return this.lift(new SwitchMapToOperator(observable, resultSelector));
	}
	exports.switchMapTo = switchMapTo;
	var SwitchMapToOperator = (function () {
	    function SwitchMapToOperator(observable, resultSelector) {
	        this.observable = observable;
	        this.resultSelector = resultSelector;
	    }
	    SwitchMapToOperator.prototype.call = function (subscriber) {
	        return new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector);
	    };
	    return SwitchMapToOperator;
	}());
	var SwitchMapToSubscriber = (function (_super) {
	    __extends(SwitchMapToSubscriber, _super);
	    function SwitchMapToSubscriber(destination, inner, resultSelector) {
	        _super.call(this, destination);
	        this.inner = inner;
	        this.resultSelector = resultSelector;
	        this.index = 0;
	    }
	    SwitchMapToSubscriber.prototype._next = function (value) {
	        var innerSubscription = this.innerSubscription;
	        if (innerSubscription) {
	            innerSubscription.unsubscribe();
	        }
	        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, this.inner, value, this.index++));
	    };
	    SwitchMapToSubscriber.prototype._complete = function () {
	        var innerSubscription = this.innerSubscription;
	        if (!innerSubscription || innerSubscription.isUnsubscribed) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype._unsubscribe = function () {
	        this.innerSubscription = null;
	    };
	    SwitchMapToSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.remove(innerSub);
	        this.innerSubscription = null;
	        if (this.isStopped) {
	            _super.prototype._complete.call(this);
	        }
	    };
	    SwitchMapToSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        if (resultSelector) {
	            this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        else {
	            destination.next(innerValue);
	        }
	    };
	    SwitchMapToSubscriber.prototype.tryResultSelector = function (outerValue, innerValue, outerIndex, innerIndex) {
	        var _a = this, resultSelector = _a.resultSelector, destination = _a.destination;
	        var result;
	        try {
	            result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        destination.next(result);
	    };
	    return SwitchMapToSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 473 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var ArgumentOutOfRangeError_1 = __webpack_require__(176);
	var EmptyObservable_1 = __webpack_require__(32);
	function take(total) {
	    if (total === 0) {
	        return new EmptyObservable_1.EmptyObservable();
	    }
	    else {
	        return this.lift(new TakeOperator(total));
	    }
	}
	exports.take = take;
	var TakeOperator = (function () {
	    function TakeOperator(total) {
	        this.total = total;
	        if (this.total < 0) {
	            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
	        }
	    }
	    TakeOperator.prototype.call = function (subscriber) {
	        return new TakeSubscriber(subscriber, this.total);
	    };
	    return TakeOperator;
	}());
	var TakeSubscriber = (function (_super) {
	    __extends(TakeSubscriber, _super);
	    function TakeSubscriber(destination, total) {
	        _super.call(this, destination);
	        this.total = total;
	        this.count = 0;
	    }
	    TakeSubscriber.prototype._next = function (value) {
	        var total = this.total;
	        if (++this.count <= total) {
	            this.destination.next(value);
	            if (this.count === total) {
	                this.destination.complete();
	            }
	        }
	    };
	    return TakeSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=take.js.map

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	function takeUntil(notifier) {
	    return this.lift(new TakeUntilOperator(notifier));
	}
	exports.takeUntil = takeUntil;
	var TakeUntilOperator = (function () {
	    function TakeUntilOperator(notifier) {
	        this.notifier = notifier;
	    }
	    TakeUntilOperator.prototype.call = function (subscriber) {
	        return new TakeUntilSubscriber(subscriber, this.notifier);
	    };
	    return TakeUntilOperator;
	}());
	var TakeUntilSubscriber = (function (_super) {
	    __extends(TakeUntilSubscriber, _super);
	    function TakeUntilSubscriber(destination, notifier) {
	        _super.call(this, destination);
	        this.notifier = notifier;
	        this.add(subscribeToResult_1.subscribeToResult(this, notifier));
	    }
	    TakeUntilSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.complete();
	    };
	    TakeUntilSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    return TakeUntilSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	function takeWhile(predicate) {
	    return this.lift(new TakeWhileOperator(predicate));
	}
	exports.takeWhile = takeWhile;
	var TakeWhileOperator = (function () {
	    function TakeWhileOperator(predicate) {
	        this.predicate = predicate;
	    }
	    TakeWhileOperator.prototype.call = function (subscriber) {
	        return new TakeWhileSubscriber(subscriber, this.predicate);
	    };
	    return TakeWhileOperator;
	}());
	var TakeWhileSubscriber = (function (_super) {
	    __extends(TakeWhileSubscriber, _super);
	    function TakeWhileSubscriber(destination, predicate) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.index = 0;
	    }
	    TakeWhileSubscriber.prototype._next = function (value) {
	        var destination = this.destination;
	        var result;
	        try {
	            result = this.predicate(value, this.index++);
	        }
	        catch (err) {
	            destination.error(err);
	            return;
	        }
	        this.nextOrComplete(value, result);
	    };
	    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
	        var destination = this.destination;
	        if (Boolean(predicateResult)) {
	            destination.next(value);
	        }
	        else {
	            destination.complete();
	        }
	    };
	    return TakeWhileSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	function throttle(durationSelector) {
	    return this.lift(new ThrottleOperator(durationSelector));
	}
	exports.throttle = throttle;
	var ThrottleOperator = (function () {
	    function ThrottleOperator(durationSelector) {
	        this.durationSelector = durationSelector;
	    }
	    ThrottleOperator.prototype.call = function (subscriber) {
	        return new ThrottleSubscriber(subscriber, this.durationSelector);
	    };
	    return ThrottleOperator;
	}());
	var ThrottleSubscriber = (function (_super) {
	    __extends(ThrottleSubscriber, _super);
	    function ThrottleSubscriber(destination, durationSelector) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.durationSelector = durationSelector;
	    }
	    ThrottleSubscriber.prototype._next = function (value) {
	        if (!this.throttled) {
	            this.tryDurationSelector(value);
	        }
	    };
	    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
	        var duration = null;
	        try {
	            duration = this.durationSelector(value);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.emitAndThrottle(value, duration);
	    };
	    ThrottleSubscriber.prototype.emitAndThrottle = function (value, duration) {
	        this.add(this.throttled = subscribeToResult_1.subscribeToResult(this, duration));
	        this.destination.next(value);
	    };
	    ThrottleSubscriber.prototype._unsubscribe = function () {
	        var throttled = this.throttled;
	        if (throttled) {
	            this.remove(throttled);
	            this.throttled = null;
	            throttled.unsubscribe();
	        }
	    };
	    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this._unsubscribe();
	    };
	    ThrottleSubscriber.prototype.notifyComplete = function () {
	        this._unsubscribe();
	    };
	    return ThrottleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var asap_1 = __webpack_require__(17);
	function throttleTime(delay, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new ThrottleTimeOperator(delay, scheduler));
	}
	exports.throttleTime = throttleTime;
	var ThrottleTimeOperator = (function () {
	    function ThrottleTimeOperator(delay, scheduler) {
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    ThrottleTimeOperator.prototype.call = function (subscriber) {
	        return new ThrottleTimeSubscriber(subscriber, this.delay, this.scheduler);
	    };
	    return ThrottleTimeOperator;
	}());
	var ThrottleTimeSubscriber = (function (_super) {
	    __extends(ThrottleTimeSubscriber, _super);
	    function ThrottleTimeSubscriber(destination, delay, scheduler) {
	        _super.call(this, destination);
	        this.delay = delay;
	        this.scheduler = scheduler;
	    }
	    ThrottleTimeSubscriber.prototype._next = function (value) {
	        if (!this.throttled) {
	            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.delay, { subscriber: this }));
	            this.destination.next(value);
	        }
	    };
	    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
	        var throttled = this.throttled;
	        if (throttled) {
	            throttled.unsubscribe();
	            this.remove(throttled);
	            this.throttled = null;
	        }
	    };
	    return ThrottleTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchNext(_a) {
	    var subscriber = _a.subscriber;
	    subscriber.clearThrottle();
	}
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var asap_1 = __webpack_require__(17);
	function timeInterval(scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new TimeIntervalOperator(scheduler));
	}
	exports.timeInterval = timeInterval;
	var TimeInterval = (function () {
	    function TimeInterval(value, interval) {
	        this.value = value;
	        this.interval = interval;
	    }
	    return TimeInterval;
	}());
	exports.TimeInterval = TimeInterval;
	;
	var TimeIntervalOperator = (function () {
	    function TimeIntervalOperator(scheduler) {
	        this.scheduler = scheduler;
	    }
	    TimeIntervalOperator.prototype.call = function (observer) {
	        return new TimeIntervalSubscriber(observer, this.scheduler);
	    };
	    return TimeIntervalOperator;
	}());
	var TimeIntervalSubscriber = (function (_super) {
	    __extends(TimeIntervalSubscriber, _super);
	    function TimeIntervalSubscriber(destination, scheduler) {
	        _super.call(this, destination);
	        this.scheduler = scheduler;
	        this.lastTime = 0;
	        this.lastTime = scheduler.now();
	    }
	    TimeIntervalSubscriber.prototype._next = function (value) {
	        var now = this.scheduler.now();
	        var span = now - this.lastTime;
	        this.lastTime = now;
	        this.destination.next(new TimeInterval(value, span));
	    };
	    return TimeIntervalSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=timeInterval.js.map

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var asap_1 = __webpack_require__(17);
	var isDate_1 = __webpack_require__(70);
	var Subscriber_1 = __webpack_require__(6);
	function timeout(due, errorToSend, scheduler) {
	    if (errorToSend === void 0) { errorToSend = null; }
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    var absoluteTimeout = isDate_1.isDate(due);
	    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
	    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
	}
	exports.timeout = timeout;
	var TimeoutOperator = (function () {
	    function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.errorToSend = errorToSend;
	        this.scheduler = scheduler;
	    }
	    TimeoutOperator.prototype.call = function (subscriber) {
	        return new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler);
	    };
	    return TimeoutOperator;
	}());
	var TimeoutSubscriber = (function (_super) {
	    __extends(TimeoutSubscriber, _super);
	    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
	        _super.call(this, destination);
	        this.absoluteTimeout = absoluteTimeout;
	        this.waitFor = waitFor;
	        this.errorToSend = errorToSend;
	        this.scheduler = scheduler;
	        this.index = 0;
	        this._previousIndex = 0;
	        this._hasCompleted = false;
	        this.scheduleTimeout();
	    }
	    Object.defineProperty(TimeoutSubscriber.prototype, "previousIndex", {
	        get: function () {
	            return this._previousIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimeoutSubscriber.prototype, "hasCompleted", {
	        get: function () {
	            return this._hasCompleted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimeoutSubscriber.dispatchTimeout = function (state) {
	        var source = state.subscriber;
	        var currentIndex = state.index;
	        if (!source.hasCompleted && source.previousIndex === currentIndex) {
	            source.notifyTimeout();
	        }
	    };
	    TimeoutSubscriber.prototype.scheduleTimeout = function () {
	        var currentIndex = this.index;
	        this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, { subscriber: this, index: currentIndex });
	        this.index++;
	        this._previousIndex = currentIndex;
	    };
	    TimeoutSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	        if (!this.absoluteTimeout) {
	            this.scheduleTimeout();
	        }
	    };
	    TimeoutSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this._hasCompleted = true;
	    };
	    TimeoutSubscriber.prototype._complete = function () {
	        this.destination.complete();
	        this._hasCompleted = true;
	    };
	    TimeoutSubscriber.prototype.notifyTimeout = function () {
	        this.error(this.errorToSend || new Error('timeout'));
	    };
	    return TimeoutSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var asap_1 = __webpack_require__(17);
	var isDate_1 = __webpack_require__(70);
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	function timeoutWith(due, withObservable, scheduler) {
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    var absoluteTimeout = isDate_1.isDate(due);
	    var waitFor = absoluteTimeout ? (+due - scheduler.now()) : Math.abs(due);
	    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
	}
	exports.timeoutWith = timeoutWith;
	var TimeoutWithOperator = (function () {
	    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.withObservable = withObservable;
	        this.scheduler = scheduler;
	    }
	    TimeoutWithOperator.prototype.call = function (subscriber) {
	        return new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler);
	    };
	    return TimeoutWithOperator;
	}());
	var TimeoutWithSubscriber = (function (_super) {
	    __extends(TimeoutWithSubscriber, _super);
	    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
	        _super.call(this);
	        this.destination = destination;
	        this.absoluteTimeout = absoluteTimeout;
	        this.waitFor = waitFor;
	        this.withObservable = withObservable;
	        this.scheduler = scheduler;
	        this.timeoutSubscription = undefined;
	        this.index = 0;
	        this._previousIndex = 0;
	        this._hasCompleted = false;
	        destination.add(this);
	        this.scheduleTimeout();
	    }
	    Object.defineProperty(TimeoutWithSubscriber.prototype, "previousIndex", {
	        get: function () {
	            return this._previousIndex;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(TimeoutWithSubscriber.prototype, "hasCompleted", {
	        get: function () {
	            return this._hasCompleted;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TimeoutWithSubscriber.dispatchTimeout = function (state) {
	        var source = state.subscriber;
	        var currentIndex = state.index;
	        if (!source.hasCompleted && source.previousIndex === currentIndex) {
	            source.handleTimeout();
	        }
	    };
	    TimeoutWithSubscriber.prototype.scheduleTimeout = function () {
	        var currentIndex = this.index;
	        var timeoutState = { subscriber: this, index: currentIndex };
	        this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
	        this.index++;
	        this._previousIndex = currentIndex;
	    };
	    TimeoutWithSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	        if (!this.absoluteTimeout) {
	            this.scheduleTimeout();
	        }
	    };
	    TimeoutWithSubscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this._hasCompleted = true;
	    };
	    TimeoutWithSubscriber.prototype._complete = function () {
	        this.destination.complete();
	        this._hasCompleted = true;
	    };
	    TimeoutWithSubscriber.prototype.handleTimeout = function () {
	        if (!this.isUnsubscribed) {
	            var withObservable = this.withObservable;
	            this.unsubscribe();
	            this.destination.add(this.timeoutSubscription = subscribeToResult_1.subscribeToResult(this, withObservable));
	        }
	    };
	    return TimeoutWithSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	function toArray() {
	    return this.lift(new ToArrayOperator());
	}
	exports.toArray = toArray;
	var ToArrayOperator = (function () {
	    function ToArrayOperator() {
	    }
	    ToArrayOperator.prototype.call = function (subscriber) {
	        return new ToArraySubscriber(subscriber);
	    };
	    return ToArrayOperator;
	}());
	var ToArraySubscriber = (function (_super) {
	    __extends(ToArraySubscriber, _super);
	    function ToArraySubscriber(destination) {
	        _super.call(this, destination);
	        this.array = [];
	    }
	    ToArraySubscriber.prototype._next = function (x) {
	        this.array.push(x);
	    };
	    ToArraySubscriber.prototype._complete = function () {
	        this.destination.next(this.array);
	        this.destination.complete();
	    };
	    return ToArraySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(14);
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	function window(closingNotifier) {
	    return this.lift(new WindowOperator(closingNotifier));
	}
	exports.window = window;
	var WindowOperator = (function () {
	    function WindowOperator(closingNotifier) {
	        this.closingNotifier = closingNotifier;
	    }
	    WindowOperator.prototype.call = function (subscriber) {
	        return new WindowSubscriber(subscriber, this.closingNotifier);
	    };
	    return WindowOperator;
	}());
	var WindowSubscriber = (function (_super) {
	    __extends(WindowSubscriber, _super);
	    function WindowSubscriber(destination, closingNotifier) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.closingNotifier = closingNotifier;
	        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
	        this.openWindow();
	    }
	    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openWindow();
	    };
	    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
	        this._complete();
	    };
	    WindowSubscriber.prototype._next = function (value) {
	        this.window.next(value);
	    };
	    WindowSubscriber.prototype._error = function (err) {
	        this.window.error(err);
	        this.destination.error(err);
	    };
	    WindowSubscriber.prototype._complete = function () {
	        this.window.complete();
	        this.destination.complete();
	    };
	    WindowSubscriber.prototype.openWindow = function () {
	        var prevWindow = this.window;
	        if (prevWindow) {
	            prevWindow.complete();
	        }
	        var destination = this.destination;
	        var newWindow = this.window = new Subject_1.Subject();
	        destination.add(newWindow);
	        destination.next(newWindow);
	    };
	    return WindowSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=window.js.map

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var Subject_1 = __webpack_require__(14);
	function windowCount(windowSize, startWindowEvery) {
	    if (startWindowEvery === void 0) { startWindowEvery = 0; }
	    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
	}
	exports.windowCount = windowCount;
	var WindowCountOperator = (function () {
	    function WindowCountOperator(windowSize, startWindowEvery) {
	        this.windowSize = windowSize;
	        this.startWindowEvery = startWindowEvery;
	    }
	    WindowCountOperator.prototype.call = function (subscriber) {
	        return new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery);
	    };
	    return WindowCountOperator;
	}());
	var WindowCountSubscriber = (function (_super) {
	    __extends(WindowCountSubscriber, _super);
	    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowSize = windowSize;
	        this.startWindowEvery = startWindowEvery;
	        this.windows = [new Subject_1.Subject()];
	        this.count = 0;
	        var firstWindow = this.windows[0];
	        destination.add(firstWindow);
	        destination.next(firstWindow);
	    }
	    WindowCountSubscriber.prototype._next = function (value) {
	        var startWindowEvery = (this.startWindowEvery > 0) ? this.startWindowEvery : this.windowSize;
	        var destination = this.destination;
	        var windowSize = this.windowSize;
	        var windows = this.windows;
	        var len = windows.length;
	        for (var i = 0; i < len; i++) {
	            windows[i].next(value);
	        }
	        var c = this.count - windowSize + 1;
	        if (c >= 0 && c % startWindowEvery === 0) {
	            windows.shift().complete();
	        }
	        if (++this.count % startWindowEvery === 0) {
	            var window_1 = new Subject_1.Subject();
	            windows.push(window_1);
	            destination.add(window_1);
	            destination.next(window_1);
	        }
	    };
	    WindowCountSubscriber.prototype._error = function (err) {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().error(err);
	        }
	        this.destination.error(err);
	    };
	    WindowCountSubscriber.prototype._complete = function () {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().complete();
	        }
	        this.destination.complete();
	    };
	    return WindowCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(6);
	var Subject_1 = __webpack_require__(14);
	var asap_1 = __webpack_require__(17);
	function windowTime(windowTimeSpan, windowCreationInterval, scheduler) {
	    if (windowCreationInterval === void 0) { windowCreationInterval = null; }
	    if (scheduler === void 0) { scheduler = asap_1.asap; }
	    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
	}
	exports.windowTime = windowTime;
	var WindowTimeOperator = (function () {
	    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
	        this.windowTimeSpan = windowTimeSpan;
	        this.windowCreationInterval = windowCreationInterval;
	        this.scheduler = scheduler;
	    }
	    WindowTimeOperator.prototype.call = function (subscriber) {
	        return new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler);
	    };
	    return WindowTimeOperator;
	}());
	var WindowTimeSubscriber = (function (_super) {
	    __extends(WindowTimeSubscriber, _super);
	    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.windowTimeSpan = windowTimeSpan;
	        this.windowCreationInterval = windowCreationInterval;
	        this.scheduler = scheduler;
	        this.windows = [];
	        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
	            var window_1 = this.openWindow();
	            var closeState = { subscriber: this, window: window_1, context: null };
	            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: this, scheduler: scheduler };
	            this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
	            this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
	        }
	        else {
	            var window_2 = this.openWindow();
	            var timeSpanOnlyState = { subscriber: this, window: window_2, windowTimeSpan: windowTimeSpan };
	            this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
	        }
	    }
	    WindowTimeSubscriber.prototype._next = function (value) {
	        var windows = this.windows;
	        var len = windows.length;
	        for (var i = 0; i < len; i++) {
	            var window_3 = windows[i];
	            if (!window_3.isUnsubscribed) {
	                window_3.next(value);
	            }
	        }
	    };
	    WindowTimeSubscriber.prototype._error = function (err) {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            windows.shift().error(err);
	        }
	        this.destination.error(err);
	    };
	    WindowTimeSubscriber.prototype._complete = function () {
	        var windows = this.windows;
	        while (windows.length > 0) {
	            var window_4 = windows.shift();
	            if (!window_4.isUnsubscribed) {
	                window_4.complete();
	            }
	        }
	        this.destination.complete();
	    };
	    WindowTimeSubscriber.prototype.openWindow = function () {
	        var window = new Subject_1.Subject();
	        this.windows.push(window);
	        var destination = this.destination;
	        destination.add(window);
	        destination.next(window);
	        return window;
	    };
	    WindowTimeSubscriber.prototype.closeWindow = function (window) {
	        window.complete();
	        var windows = this.windows;
	        windows.splice(windows.indexOf(window), 1);
	    };
	    return WindowTimeSubscriber;
	}(Subscriber_1.Subscriber));
	function dispatchWindowTimeSpanOnly(state) {
	    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
	    if (window) {
	        window.complete();
	    }
	    state.window = subscriber.openWindow();
	    this.schedule(state, windowTimeSpan);
	}
	function dispatchWindowCreation(state) {
	    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
	    var window = subscriber.openWindow();
	    var action = this;
	    var context = { action: action, subscription: null };
	    var timeSpanState = { subscriber: subscriber, window: window, context: context };
	    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
	    action.add(context.subscription);
	    action.schedule(state, windowCreationInterval);
	}
	function dispatchWindowClose(_a) {
	    var subscriber = _a.subscriber, window = _a.window, context = _a.context;
	    if (context && context.action && context.subscription) {
	        context.action.remove(context.subscription);
	    }
	    subscriber.closeWindow(window);
	}
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(14);
	var Subscription_1 = __webpack_require__(19);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	function windowToggle(openings, closingSelector) {
	    return this.lift(new WindowToggleOperator(openings, closingSelector));
	}
	exports.windowToggle = windowToggle;
	var WindowToggleOperator = (function () {
	    function WindowToggleOperator(openings, closingSelector) {
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }
	    WindowToggleOperator.prototype.call = function (subscriber) {
	        return new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector);
	    };
	    return WindowToggleOperator;
	}());
	var WindowToggleSubscriber = (function (_super) {
	    __extends(WindowToggleSubscriber, _super);
	    function WindowToggleSubscriber(destination, openings, closingSelector) {
	        _super.call(this, destination);
	        this.openings = openings;
	        this.closingSelector = closingSelector;
	        this.contexts = [];
	        this.add(this.openSubscription = subscribeToResult_1.subscribeToResult(this, openings, openings));
	    }
	    WindowToggleSubscriber.prototype._next = function (value) {
	        var contexts = this.contexts;
	        if (contexts) {
	            var len = contexts.length;
	            for (var i = 0; i < len; i++) {
	                contexts[i].window.next(value);
	            }
	        }
	    };
	    WindowToggleSubscriber.prototype._error = function (err) {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.error(err);
	                context.subscription.unsubscribe();
	            }
	        }
	        _super.prototype._error.call(this, err);
	    };
	    WindowToggleSubscriber.prototype._complete = function () {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.complete();
	                context.subscription.unsubscribe();
	            }
	        }
	        _super.prototype._complete.call(this);
	    };
	    WindowToggleSubscriber.prototype._unsubscribe = function () {
	        var contexts = this.contexts;
	        this.contexts = null;
	        if (contexts) {
	            var len = contexts.length;
	            var index = -1;
	            while (++index < len) {
	                var context = contexts[index];
	                context.window.unsubscribe();
	                context.subscription.unsubscribe();
	            }
	        }
	    };
	    WindowToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        if (outerValue === this.openings) {
	            var closingSelector = this.closingSelector;
	            var closingNotifier = tryCatch_1.tryCatch(closingSelector)(innerValue);
	            if (closingNotifier === errorObject_1.errorObject) {
	                return this.error(errorObject_1.errorObject.e);
	            }
	            else {
	                var window_1 = new Subject_1.Subject();
	                var subscription = new Subscription_1.Subscription();
	                var context = { window: window_1, subscription: subscription };
	                this.contexts.push(context);
	                var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
	                innerSubscription.context = context;
	                subscription.add(innerSubscription);
	                this.destination.next(window_1);
	            }
	        }
	        else {
	            this.closeWindow(this.contexts.indexOf(outerValue));
	        }
	    };
	    WindowToggleSubscriber.prototype.notifyError = function (err) {
	        this.error(err);
	    };
	    WindowToggleSubscriber.prototype.notifyComplete = function (inner) {
	        if (inner !== this.openSubscription) {
	            this.closeWindow(this.contexts.indexOf(inner.context));
	        }
	    };
	    WindowToggleSubscriber.prototype.closeWindow = function (index) {
	        var contexts = this.contexts;
	        var context = contexts[index];
	        var window = context.window, subscription = context.subscription;
	        contexts.splice(index, 1);
	        window.complete();
	        subscription.unsubscribe();
	    };
	    return WindowToggleSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(14);
	var tryCatch_1 = __webpack_require__(13);
	var errorObject_1 = __webpack_require__(12);
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	function windowWhen(closingSelector) {
	    return this.lift(new WindowOperator(closingSelector));
	}
	exports.windowWhen = windowWhen;
	var WindowOperator = (function () {
	    function WindowOperator(closingSelector) {
	        this.closingSelector = closingSelector;
	    }
	    WindowOperator.prototype.call = function (subscriber) {
	        return new WindowSubscriber(subscriber, this.closingSelector);
	    };
	    return WindowOperator;
	}());
	var WindowSubscriber = (function (_super) {
	    __extends(WindowSubscriber, _super);
	    function WindowSubscriber(destination, closingSelector) {
	        _super.call(this, destination);
	        this.destination = destination;
	        this.closingSelector = closingSelector;
	        this.openWindow();
	    }
	    WindowSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.openWindow(innerSub);
	    };
	    WindowSubscriber.prototype.notifyError = function (error, innerSub) {
	        this._error(error);
	    };
	    WindowSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.openWindow(innerSub);
	    };
	    WindowSubscriber.prototype._next = function (value) {
	        this.window.next(value);
	    };
	    WindowSubscriber.prototype._error = function (err) {
	        this.window.error(err);
	        this.destination.error(err);
	        this.unsubscribeClosingNotification();
	    };
	    WindowSubscriber.prototype._complete = function () {
	        this.window.complete();
	        this.destination.complete();
	        this.unsubscribeClosingNotification();
	    };
	    WindowSubscriber.prototype.unsubscribeClosingNotification = function () {
	        if (this.closingNotification) {
	            this.closingNotification.unsubscribe();
	        }
	    };
	    WindowSubscriber.prototype.openWindow = function (innerSub) {
	        if (innerSub === void 0) { innerSub = null; }
	        if (innerSub) {
	            this.remove(innerSub);
	            innerSub.unsubscribe();
	        }
	        var prevWindow = this.window;
	        if (prevWindow) {
	            prevWindow.complete();
	        }
	        var window = this.window = new Subject_1.Subject();
	        this.destination.next(window);
	        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
	        if (closingNotifier === errorObject_1.errorObject) {
	            var err = errorObject_1.errorObject.e;
	            this.destination.error(err);
	            this.window.error(err);
	        }
	        else {
	            this.add(this.closingNotification = subscribeToResult_1.subscribeToResult(this, closingNotifier));
	            this.add(window);
	        }
	    };
	    return WindowSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var OuterSubscriber_1 = __webpack_require__(9);
	var subscribeToResult_1 = __webpack_require__(10);
	/**
	 * @param {Observable} observables the observables to get the latest values from.
	 * @param {Function} [project] optional projection function for merging values together. Receives all values in order
	 *  of observables passed. (e.g. `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not passed, arrays
	 *  will be returned.
	 * @description merges each value from an observable with the latest values from the other passed observables.
	 * All observables must emit at least one value before the resulting observable will emit
	 *
	 * #### example
	 * ```
	 * A.withLatestFrom(B, C)
	 *
	 *  A:     ----a-----------------b---------------c-----------|
	 *  B:     ---d----------------e--------------f---------|
	 *  C:     --x----------------y-------------z-------------|
	 * result: ---([a,d,x])---------([b,e,y])--------([c,f,z])---|
	 * ```
	 */
	function withLatestFrom() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    var project;
	    if (typeof args[args.length - 1] === 'function') {
	        project = args.pop();
	    }
	    var observables = args;
	    return this.lift(new WithLatestFromOperator(observables, project));
	}
	exports.withLatestFrom = withLatestFrom;
	/* tslint:enable:max-line-length */
	var WithLatestFromOperator = (function () {
	    function WithLatestFromOperator(observables, project) {
	        this.observables = observables;
	        this.project = project;
	    }
	    WithLatestFromOperator.prototype.call = function (subscriber) {
	        return new WithLatestFromSubscriber(subscriber, this.observables, this.project);
	    };
	    return WithLatestFromOperator;
	}());
	var WithLatestFromSubscriber = (function (_super) {
	    __extends(WithLatestFromSubscriber, _super);
	    function WithLatestFromSubscriber(destination, observables, project) {
	        _super.call(this, destination);
	        this.observables = observables;
	        this.project = project;
	        this.toRespond = [];
	        var len = observables.length;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            this.toRespond.push(i);
	        }
	        for (var i = 0; i < len; i++) {
	            var observable = observables[i];
	            this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
	        }
	    }
	    WithLatestFromSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        var toRespond = this.toRespond;
	        if (toRespond.length > 0) {
	            var found = toRespond.indexOf(outerIndex);
	            if (found !== -1) {
	                toRespond.splice(found, 1);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype.notifyComplete = function () {
	        // noop
	    };
	    WithLatestFromSubscriber.prototype._next = function (value) {
	        if (this.toRespond.length === 0) {
	            var args = [value].concat(this.values);
	            if (this.project) {
	                this._tryProject(args);
	            }
	            else {
	                this.destination.next(args);
	            }
	        }
	    };
	    WithLatestFromSubscriber.prototype._tryProject = function (args) {
	        var result;
	        try {
	            result = this.project.apply(this, args);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return WithLatestFromSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var zip_1 = __webpack_require__(173);
	function zipAll(project) {
	    return this.lift(new zip_1.ZipOperator(project));
	}
	exports.zipAll = zipAll;
	//# sourceMappingURL=zipAll.js.map

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Immediate_1 = __webpack_require__(497);
	var FutureAction_1 = __webpack_require__(102);
	var AsapAction = (function (_super) {
	    __extends(AsapAction, _super);
	    function AsapAction() {
	        _super.apply(this, arguments);
	    }
	    AsapAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        if (!scheduler.scheduledId) {
	            scheduler.scheduledId = Immediate_1.Immediate.setImmediate(function () {
	                scheduler.scheduledId = null;
	                scheduler.flush();
	            });
	        }
	        return this;
	    };
	    AsapAction.prototype._unsubscribe = function () {
	        var scheduler = this.scheduler;
	        var scheduledId = scheduler.scheduledId, actions = scheduler.actions;
	        _super.prototype._unsubscribe.call(this);
	        if (actions.length === 0) {
	            scheduler.active = false;
	            if (scheduledId != null) {
	                scheduler.scheduledId = null;
	                Immediate_1.Immediate.clearImmediate(scheduledId);
	            }
	        }
	    };
	    return AsapAction;
	}(FutureAction_1.FutureAction));
	exports.AsapAction = AsapAction;
	//# sourceMappingURL=AsapAction.js.map

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var AsapAction_1 = __webpack_require__(489);
	var QueueScheduler_1 = __webpack_require__(174);
	var AsapScheduler = (function (_super) {
	    __extends(AsapScheduler, _super);
	    function AsapScheduler() {
	        _super.apply(this, arguments);
	    }
	    AsapScheduler.prototype.scheduleNow = function (work, state) {
	        return new AsapAction_1.AsapAction(this, work).schedule(state);
	    };
	    return AsapScheduler;
	}(QueueScheduler_1.QueueScheduler));
	exports.AsapScheduler = AsapScheduler;
	//# sourceMappingURL=AsapScheduler.js.map

/***/ },
/* 491 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var FutureAction_1 = __webpack_require__(102);
	var QueueAction = (function (_super) {
	    __extends(QueueAction, _super);
	    function QueueAction() {
	        _super.apply(this, arguments);
	    }
	    QueueAction.prototype._schedule = function (state, delay) {
	        if (delay === void 0) { delay = 0; }
	        if (delay > 0) {
	            return _super.prototype._schedule.call(this, state, delay);
	        }
	        this.delay = delay;
	        this.state = state;
	        var scheduler = this.scheduler;
	        scheduler.actions.push(this);
	        scheduler.flush();
	        return this;
	    };
	    return QueueAction;
	}(FutureAction_1.FutureAction));
	exports.QueueAction = QueueAction;
	//# sourceMappingURL=QueueAction.js.map

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var QueueScheduler_1 = __webpack_require__(174);
	exports.queue = new QueueScheduler_1.QueueScheduler();
	//# sourceMappingURL=queue.js.map

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(14);
	var throwError_1 = __webpack_require__(179);
	var ObjectUnsubscribedError_1 = __webpack_require__(177);
	var BehaviorSubject = (function (_super) {
	    __extends(BehaviorSubject, _super);
	    function BehaviorSubject(_value) {
	        _super.call(this);
	        this._value = _value;
	    }
	    BehaviorSubject.prototype.getValue = function () {
	        if (this.hasErrored) {
	            throwError_1.throwError(this.errorValue);
	        }
	        else if (this.isUnsubscribed) {
	            throwError_1.throwError(new ObjectUnsubscribedError_1.ObjectUnsubscribedError());
	        }
	        else {
	            return this._value;
	        }
	    };
	    Object.defineProperty(BehaviorSubject.prototype, "value", {
	        get: function () {
	            return this.getValue();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BehaviorSubject.prototype._subscribe = function (subscriber) {
	        var subscription = _super.prototype._subscribe.call(this, subscriber);
	        if (subscription && !subscription.isUnsubscribed) {
	            subscriber.next(this._value);
	        }
	        return subscription;
	    };
	    BehaviorSubject.prototype._next = function (value) {
	        _super.prototype._next.call(this, this._value = value);
	    };
	    BehaviorSubject.prototype._error = function (err) {
	        this.hasErrored = true;
	        _super.prototype._error.call(this, this.errorValue = err);
	    };
	    return BehaviorSubject;
	}(Subject_1.Subject));
	exports.BehaviorSubject = BehaviorSubject;
	//# sourceMappingURL=BehaviorSubject.js.map

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(14);
	var queue_1 = __webpack_require__(492);
	var observeOn_1 = __webpack_require__(100);
	var ReplaySubject = (function (_super) {
	    __extends(ReplaySubject, _super);
	    function ReplaySubject(bufferSize, windowTime, scheduler) {
	        if (bufferSize === void 0) { bufferSize = Number.POSITIVE_INFINITY; }
	        if (windowTime === void 0) { windowTime = Number.POSITIVE_INFINITY; }
	        _super.call(this);
	        this.events = [];
	        this.scheduler = scheduler;
	        this.bufferSize = bufferSize < 1 ? 1 : bufferSize;
	        this._windowTime = windowTime < 1 ? 1 : windowTime;
	    }
	    ReplaySubject.prototype._next = function (value) {
	        var now = this._getNow();
	        this.events.push(new ReplayEvent(now, value));
	        this._trimBufferThenGetEvents(now);
	        _super.prototype._next.call(this, value);
	    };
	    ReplaySubject.prototype._subscribe = function (subscriber) {
	        var events = this._trimBufferThenGetEvents(this._getNow());
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            subscriber.add(subscriber = new observeOn_1.ObserveOnSubscriber(subscriber, scheduler));
	        }
	        var index = -1;
	        var len = events.length;
	        while (++index < len && !subscriber.isUnsubscribed) {
	            subscriber.next(events[index].value);
	        }
	        return _super.prototype._subscribe.call(this, subscriber);
	    };
	    ReplaySubject.prototype._getNow = function () {
	        return (this.scheduler || queue_1.queue).now();
	    };
	    ReplaySubject.prototype._trimBufferThenGetEvents = function (now) {
	        var bufferSize = this.bufferSize;
	        var _windowTime = this._windowTime;
	        var events = this.events;
	        var eventsCount = events.length;
	        var spliceCount = 0;
	        // Trim events that fall out of the time window.
	        // Start at the front of the list. Break early once
	        // we encounter an event that falls within the window.
	        while (spliceCount < eventsCount) {
	            if ((now - events[spliceCount].time) < _windowTime) {
	                break;
	            }
	            spliceCount += 1;
	        }
	        if (eventsCount > bufferSize) {
	            spliceCount = Math.max(spliceCount, eventsCount - bufferSize);
	        }
	        if (spliceCount > 0) {
	            events.splice(0, spliceCount);
	        }
	        return events;
	    };
	    return ReplaySubject;
	}(Subject_1.Subject));
	exports.ReplaySubject = ReplaySubject;
	var ReplayEvent = (function () {
	    function ReplayEvent(time, value) {
	        this.time = time;
	        this.value = value;
	    }
	    return ReplayEvent;
	}());
	//# sourceMappingURL=ReplaySubject.js.map

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(19);
	var SubjectSubscription = (function (_super) {
	    __extends(SubjectSubscription, _super);
	    function SubjectSubscription(subject, observer) {
	        _super.call(this);
	        this.subject = subject;
	        this.observer = observer;
	        this.isUnsubscribed = false;
	    }
	    SubjectSubscription.prototype.unsubscribe = function () {
	        if (this.isUnsubscribed) {
	            return;
	        }
	        this.isUnsubscribed = true;
	        var subject = this.subject;
	        var observers = subject.observers;
	        this.subject = null;
	        if (!observers || observers.length === 0 || subject.isUnsubscribed) {
	            return;
	        }
	        var subscriberIndex = observers.indexOf(this.observer);
	        if (subscriberIndex !== -1) {
	            observers.splice(subscriberIndex, 1);
	        }
	    };
	    return SubjectSubscription;
	}(Subscription_1.Subscription));
	exports.SubjectSubscription = SubjectSubscription;
	//# sourceMappingURL=SubjectSubscription.js.map

/***/ },
/* 496 */
/***/ function(module, exports) {

	"use strict";
	var FastMap = (function () {
	    function FastMap() {
	        this.values = {};
	    }
	    FastMap.prototype.delete = function (key) {
	        this.values[key] = null;
	        return true;
	    };
	    FastMap.prototype.set = function (key, value) {
	        this.values[key] = value;
	        return this;
	    };
	    FastMap.prototype.get = function (key) {
	        return this.values[key];
	    };
	    FastMap.prototype.forEach = function (cb, thisArg) {
	        var values = this.values;
	        for (var key in values) {
	            if (values.hasOwnProperty(key) && values[key] !== null) {
	                cb.call(thisArg, values[key], key);
	            }
	        }
	    };
	    FastMap.prototype.clear = function () {
	        this.values = {};
	    };
	    return FastMap;
	}());
	exports.FastMap = FastMap;
	//# sourceMappingURL=FastMap.js.map

/***/ },
/* 497 */
/***/ function(module, exports, __webpack_require__) {

	/**
	Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
	*/
	"use strict";
	var root_1 = __webpack_require__(21);
	var ImmediateDefinition = (function () {
	    function ImmediateDefinition(root) {
	        this.root = root;
	        if (root.setImmediate && typeof root.setImmediate === 'function') {
	            this.setImmediate = root.setImmediate.bind(root);
	            this.clearImmediate = root.clearImmediate.bind(root);
	        }
	        else {
	            this.nextHandle = 1;
	            this.tasksByHandle = {};
	            this.currentlyRunningATask = false;
	            // Don't get fooled by e.g. browserify environments.
	            if (this.canUseProcessNextTick()) {
	                // For Node.js before 0.9
	                this.setImmediate = this.createProcessNextTickSetImmediate();
	            }
	            else if (this.canUsePostMessage()) {
	                // For non-IE10 modern browsers
	                this.setImmediate = this.createPostMessageSetImmediate();
	            }
	            else if (this.canUseMessageChannel()) {
	                // For web workers, where supported
	                this.setImmediate = this.createMessageChannelSetImmediate();
	            }
	            else if (this.canUseReadyStateChange()) {
	                // For IE 6–8
	                this.setImmediate = this.createReadyStateChangeSetImmediate();
	            }
	            else {
	                // For older browsers
	                this.setImmediate = this.createSetTimeoutSetImmediate();
	            }
	            var ci = function clearImmediate(handle) {
	                delete clearImmediate.instance.tasksByHandle[handle];
	            };
	            ci.instance = this;
	            this.clearImmediate = ci;
	        }
	    }
	    ImmediateDefinition.prototype.identify = function (o) {
	        return this.root.Object.prototype.toString.call(o);
	    };
	    ImmediateDefinition.prototype.canUseProcessNextTick = function () {
	        return this.identify(this.root.process) === '[object process]';
	    };
	    ImmediateDefinition.prototype.canUseMessageChannel = function () {
	        return Boolean(this.root.MessageChannel);
	    };
	    ImmediateDefinition.prototype.canUseReadyStateChange = function () {
	        var document = this.root.document;
	        return Boolean(document && 'onreadystatechange' in document.createElement('script'));
	    };
	    ImmediateDefinition.prototype.canUsePostMessage = function () {
	        var root = this.root;
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `root.postMessage` means something completely different and can't be used for this purpose.
	        if (root.postMessage && !root.importScripts) {
	            var postMessageIsAsynchronous_1 = true;
	            var oldOnMessage = root.onmessage;
	            root.onmessage = function () {
	                postMessageIsAsynchronous_1 = false;
	            };
	            root.postMessage('', '*');
	            root.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous_1;
	        }
	        return false;
	    };
	    // This function accepts the same arguments as setImmediate, but
	    // returns a function that requires no arguments.
	    ImmediateDefinition.prototype.partiallyApplied = function (handler) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var fn = function result() {
	            var _a = result, handler = _a.handler, args = _a.args;
	            if (typeof handler === 'function') {
	                handler.apply(undefined, args);
	            }
	            else {
	                (new Function('' + handler))();
	            }
	        };
	        fn.handler = handler;
	        fn.args = args;
	        return fn;
	    };
	    ImmediateDefinition.prototype.addFromSetImmediateArguments = function (args) {
	        this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
	        return this.nextHandle++;
	    };
	    ImmediateDefinition.prototype.createProcessNextTickSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createPostMessageSetImmediate = function () {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	        var root = this.root;
	        var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
	        var onGlobalMessage = function globalMessageHandler(event) {
	            var instance = globalMessageHandler.instance;
	            if (event.source === root &&
	                typeof event.data === 'string' &&
	                event.data.indexOf(messagePrefix) === 0) {
	                instance.runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	        onGlobalMessage.instance = this;
	        root.addEventListener('message', onGlobalMessage, false);
	        var fn = function setImmediate() {
	            var _a = setImmediate, messagePrefix = _a.messagePrefix, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.postMessage(messagePrefix + handle, '*');
	            return handle;
	        };
	        fn.instance = this;
	        fn.messagePrefix = messagePrefix;
	        return fn;
	    };
	    ImmediateDefinition.prototype.runIfPresent = function (handle) {
	        // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (this.currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // 'too much recursion' error.
	            this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
	        }
	        else {
	            var task = this.tasksByHandle[handle];
	            if (task) {
	                this.currentlyRunningATask = true;
	                try {
	                    task();
	                }
	                finally {
	                    this.clearImmediate(handle);
	                    this.currentlyRunningATask = false;
	                }
	            }
	        }
	    };
	    ImmediateDefinition.prototype.createMessageChannelSetImmediate = function () {
	        var _this = this;
	        var channel = new this.root.MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            _this.runIfPresent(handle);
	        };
	        var fn = function setImmediate() {
	            var _a = setImmediate, channel = _a.channel, instance = _a.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            channel.port2.postMessage(handle);
	            return handle;
	        };
	        fn.channel = channel;
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createReadyStateChangeSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var root = instance.root;
	            var doc = root.document;
	            var html = doc.documentElement;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement('script');
	            script.onreadystatechange = function () {
	                instance.runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    ImmediateDefinition.prototype.createSetTimeoutSetImmediate = function () {
	        var fn = function setImmediate() {
	            var instance = setImmediate.instance;
	            var handle = instance.addFromSetImmediateArguments(arguments);
	            instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
	            return handle;
	        };
	        fn.instance = this;
	        return fn;
	    };
	    return ImmediateDefinition;
	}());
	exports.ImmediateDefinition = ImmediateDefinition;
	exports.Immediate = new ImmediateDefinition(root_1.root);
	//# sourceMappingURL=Immediate.js.map

/***/ },
/* 498 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(21);
	var MapPolyfill_1 = __webpack_require__(499);
	exports.Map = root_1.root.Map || (function () { return MapPolyfill_1.MapPolyfill; })();
	//# sourceMappingURL=Map.js.map

/***/ },
/* 499 */
/***/ function(module, exports) {

	"use strict";
	var MapPolyfill = (function () {
	    function MapPolyfill() {
	        this.size = 0;
	        this._values = [];
	        this._keys = [];
	    }
	    MapPolyfill.prototype.get = function (key) {
	        var i = this._keys.indexOf(key);
	        return i === -1 ? undefined : this._values[i];
	    };
	    MapPolyfill.prototype.set = function (key, value) {
	        var i = this._keys.indexOf(key);
	        if (i === -1) {
	            this._keys.push(key);
	            this._values.push(value);
	            this.size++;
	        }
	        else {
	            this._values[i] = value;
	        }
	        return this;
	    };
	    MapPolyfill.prototype.delete = function (key) {
	        var i = this._keys.indexOf(key);
	        if (i === -1) {
	            return false;
	        }
	        this._values.splice(i, 1);
	        this._keys.splice(i, 1);
	        this.size--;
	        return true;
	    };
	    MapPolyfill.prototype.clear = function () {
	        this._keys.length = 0;
	        this._values.length = 0;
	        this.size = 0;
	    };
	    MapPolyfill.prototype.forEach = function (cb, thisArg) {
	        for (var i = 0; i < this.size; i++) {
	            cb.call(thisArg, this._values[i], this._keys[i]);
	        }
	    };
	    return MapPolyfill;
	}());
	exports.MapPolyfill = MapPolyfill;
	//# sourceMappingURL=MapPolyfill.js.map

/***/ },
/* 500 */
/***/ function(module, exports) {

	"use strict";
	function not(pred, thisArg) {
	    function notPred() {
	        return !(notPred.pred.apply(notPred.thisArg, arguments));
	    }
	    notPred.pred = pred;
	    notPred.thisArg = thisArg;
	    return notPred;
	}
	exports.not = not;
	//# sourceMappingURL=not.js.map

/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(6);
	var rxSubscriber_1 = __webpack_require__(103);
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver && typeof nextOrObserver === 'object') {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        else if (typeof nextOrObserver[rxSubscriber_1.rxSubscriber] === 'function') {
	            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
	        }
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map

/***/ },
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, module) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.1.2
	 */
	
	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }
	
	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }
	
	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }
	
	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }
	
	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;
	
	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }
	
	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }
	
	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }
	
	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';
	
	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';
	
	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function() {
	        process.nextTick(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }
	
	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });
	
	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }
	
	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }
	
	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }
	
	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];
	
	        callback(arg);
	
	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }
	
	      lib$es6$promise$asap$$len = 0;
	    }
	
	    function lib$es6$promise$asap$$attemptVertx() {
	      try {
	        var r = require;
	        var vertx = __webpack_require__(605);
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }
	
	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }
	    function lib$es6$promise$then$$then(onFulfillment, onRejection) {
	      var parent = this;
	      var state = parent._state;
	
	      if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
	        return this;
	      }
	
	      var child = new this.constructor(lib$es6$promise$$internal$$noop);
	      var result = parent._result;
	
	      if (state) {
	        var callback = arguments[state - 1];
	        lib$es6$promise$asap$$asap(function(){
	          lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
	        });
	      } else {
	        lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	      }
	
	      return child;
	    }
	    var lib$es6$promise$then$$default = lib$es6$promise$then$$then;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	
	    function lib$es6$promise$$internal$$noop() {}
	
	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;
	
	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }
	
	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }
	
	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;
	
	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }
	
	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }
	
	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable, then) {
	      if (maybeThenable.constructor === promise.constructor &&
	          then === lib$es6$promise$then$$default &&
	          constructor.resolve === lib$es6$promise$promise$resolve$$default) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }
	
	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value, lib$es6$promise$$internal$$getThen(value));
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }
	
	      lib$es6$promise$$internal$$publish(promise);
	    }
	
	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	
	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;
	
	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }
	
	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;
	
	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }
	
	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;
	
	      parent._onerror = null;
	
	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;
	
	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }
	
	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;
	
	      if (subscribers.length === 0) { return; }
	
	      var child, callback, detail = promise._result;
	
	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];
	
	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }
	
	      promise._subscribers.length = 0;
	    }
	
	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }
	
	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();
	
	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }
	
	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;
	
	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);
	
	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }
	
	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }
	
	      } else {
	        value = detail;
	        succeeded = true;
	      }
	
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }
	
	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }
	
	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;
	
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
	        return promise;
	      }
	
	      var length = entries.length;
	
	      function onFulfillment(value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }
	
	      function onRejection(reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      }
	
	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
	      }
	
	      return promise;
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;
	
	    var lib$es6$promise$promise$$counter = 0;
	
	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }
	
	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }
	
	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.
	
	      Terminology
	      -----------
	
	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.
	
	      A promise can be in one of three states: pending, fulfilled, or rejected.
	
	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.
	
	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.
	
	
	      Basic Usage:
	      ------------
	
	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);
	
	        // on failure
	        reject(reason);
	      });
	
	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Advanced Usage:
	      ---------------
	
	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.
	
	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();
	
	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();
	
	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }
	
	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```
	
	      Unlike callbacks, promises are great composable primitives.
	
	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON
	
	        return values;
	      });
	      ```
	
	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this._id = lib$es6$promise$promise$$counter++;
	      this._state = undefined;
	      this._result = undefined;
	      this._subscribers = [];
	
	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        typeof resolver !== 'function' && lib$es6$promise$promise$$needsResolver();
	        this instanceof lib$es6$promise$promise$$Promise ? lib$es6$promise$$internal$$initializePromise(this, resolver) : lib$es6$promise$promise$$needsNew();
	      }
	    }
	
	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;
	
	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,
	
	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.
	
	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```
	
	      Chaining
	      --------
	
	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.
	
	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });
	
	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	
	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```
	
	      Assimilation
	      ------------
	
	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```
	
	      If the assimliated promise rejects, then the downstream promise will also reject.
	
	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```
	
	      Simple Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var result;
	
	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```
	
	      Advanced Example
	      --------------
	
	      Synchronous Example
	
	      ```javascript
	      var author, books;
	
	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```
	
	      Errback Example
	
	      ```js
	
	      function foundBooks(books) {
	
	      }
	
	      function failure(reason) {
	
	      }
	
	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```
	
	      Promise Example;
	
	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: lib$es6$promise$then$$default,
	
	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.
	
	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }
	
	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }
	
	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```
	
	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;
	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      this._instanceConstructor = Constructor;
	      this.promise = new Constructor(lib$es6$promise$$internal$$noop);
	
	      if (Array.isArray(input)) {
	        this._input     = input;
	        this.length     = input.length;
	        this._remaining = input.length;
	
	        this._result = new Array(this.length);
	
	        if (this.length === 0) {
	          lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	        } else {
	          this.length = this.length || 0;
	          this._enumerate();
	          if (this._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(this.promise, this._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(this.promise, this._validationError());
	      }
	    }
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
	      return new Error('Array Methods must be provided an Array');
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var length  = this.length;
	      var input   = this._input;
	
	      for (var i = 0; this._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        this._eachEntry(input[i], i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var c = this._instanceConstructor;
	      var resolve = c.resolve;
	
	      if (resolve === lib$es6$promise$promise$resolve$$default) {
	        var then = lib$es6$promise$$internal$$getThen(entry);
	
	        if (then === lib$es6$promise$then$$default &&
	            entry._state !== lib$es6$promise$$internal$$PENDING) {
	          this._settledAt(entry._state, i, entry._result);
	        } else if (typeof then !== 'function') {
	          this._remaining--;
	          this._result[i] = entry;
	        } else if (c === lib$es6$promise$promise$$default) {
	          var promise = new c(lib$es6$promise$$internal$$noop);
	          lib$es6$promise$$internal$$handleMaybeThenable(promise, entry, then);
	          this._willSettleAt(promise, i);
	        } else {
	          this._willSettleAt(new c(function(resolve) { resolve(entry); }), i);
	        }
	      } else {
	        this._willSettleAt(resolve(entry), i);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var promise = this.promise;
	
	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        this._remaining--;
	
	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          this._result[i] = value;
	        }
	      }
	
	      if (this._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, this._result);
	      }
	    };
	
	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;
	
	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;
	
	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }
	
	      var P = local.Promise;
	
	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }
	
	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;
	
	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };
	
	    /* global define:true module:true window: true */
	    if ("function" === 'function' && __webpack_require__(604)['amd']) {
	      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }
	
	    lib$es6$promise$polyfill$$default();
	}).call(this);
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(159), (function() { return this; }()), __webpack_require__(160)(module)))

/***/ },
/* 567 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, process) { /*!
	  * https://github.com/paulmillr/es6-shim
	  * @license es6-shim Copyright 2013-2015 by Paul Miller (http://paulmillr.com)
	  *   and contributors,  MIT License
	  * es6-shim: v0.33.13
	  * see https://github.com/paulmillr/es6-shim/blob/0.33.13/LICENSE
	  * Details and documentation:
	  * https://github.com/paulmillr/es6-shim/
	  */
	
	// UMD (Universal Module Definition)
	// see https://github.com/umdjs/umd/blob/master/returnExports.js
	(function (root, factory) {
	  /*global define, module, exports */
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.returnExports = factory();
	  }
	}(this, function () {
	  'use strict';
	
	  var _apply = Function.call.bind(Function.apply);
	  var _call = Function.call.bind(Function.call);
	  var isArray = Array.isArray;
	
	  var not = function notThunker(func) {
	    return function notThunk() { return !_apply(func, this, arguments); };
	  };
	  var throwsError = function (func) {
	    try {
	      func();
	      return false;
	    } catch (e) {
	      return true;
	    }
	  };
	  var valueOrFalseIfThrows = function valueOrFalseIfThrows(func) {
	    try {
	      return func();
	    } catch (e) {
	      return false;
	    }
	  };
	
	  var isCallableWithoutNew = not(throwsError);
	  var arePropertyDescriptorsSupported = function () {
	    // if Object.defineProperty exists but throws, it's IE 8
	    return !throwsError(function () { Object.defineProperty({}, 'x', { get: function () {} }); });
	  };
	  var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();
	  var functionsHaveNames = (function foo() {}).name === 'foo';
	
	  var _forEach = Function.call.bind(Array.prototype.forEach);
	  var _reduce = Function.call.bind(Array.prototype.reduce);
	  var _filter = Function.call.bind(Array.prototype.filter);
	  var _some = Function.call.bind(Array.prototype.some);
	
	  var defineProperty = function (object, name, value, force) {
	    if (!force && name in object) { return; }
	    if (supportsDescriptors) {
	      Object.defineProperty(object, name, {
	        configurable: true,
	        enumerable: false,
	        writable: true,
	        value: value
	      });
	    } else {
	      object[name] = value;
	    }
	  };
	
	  // Define configurable, writable and non-enumerable props
	  // if they don’t exist.
	  var defineProperties = function (object, map) {
	    _forEach(Object.keys(map), function (name) {
	      var method = map[name];
	      defineProperty(object, name, method, false);
	    });
	  };
	
	  // Simple shim for Object.create on ES3 browsers
	  // (unlike real shim, no attempt to support `prototype === null`)
	  var create = Object.create || function (prototype, properties) {
	    var Prototype = function Prototype() {};
	    Prototype.prototype = prototype;
	    var object = new Prototype();
	    if (typeof properties !== 'undefined') {
	      Object.keys(properties).forEach(function (key) {
	        Value.defineByDescriptor(object, key, properties[key]);
	      });
	    }
	    return object;
	  };
	
	  var supportsSubclassing = function (C, f) {
	    if (!Object.setPrototypeOf) { return false; /* skip test on IE < 11 */ }
	    return valueOrFalseIfThrows(function () {
	      var Sub = function Subclass(arg) {
	        var o = new C(arg);
	        Object.setPrototypeOf(o, Subclass.prototype);
	        return o;
	      };
	      Object.setPrototypeOf(Sub, C);
	      Sub.prototype = create(C.prototype, {
	        constructor: { value: Sub }
	      });
	      return f(Sub);
	    });
	  };
	
	  var getGlobal = function () {
	    /* global self, window, global */
	    // the only reliable means to get the global object is
	    // `Function('return this')()`
	    // However, this causes CSP violations in Chrome apps.
	    if (typeof self !== 'undefined') { return self; }
	    if (typeof window !== 'undefined') { return window; }
	    if (typeof global !== 'undefined') { return global; }
	    throw new Error('unable to locate global object');
	  };
	
	  var globals = getGlobal();
	  var globalIsFinite = globals.isFinite;
	  var _indexOf = Function.call.bind(String.prototype.indexOf);
	  var _toString = Function.call.bind(Object.prototype.toString);
	  var _concat = Function.call.bind(Array.prototype.concat);
	  var _strSlice = Function.call.bind(String.prototype.slice);
	  var _push = Function.call.bind(Array.prototype.push);
	  var _pushApply = Function.apply.bind(Array.prototype.push);
	  var _shift = Function.call.bind(Array.prototype.shift);
	  var _max = Math.max;
	  var _min = Math.min;
	  var _floor = Math.floor;
	  var _abs = Math.abs;
	  var _log = Math.log;
	  var _sqrt = Math.sqrt;
	  var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
	  var ArrayIterator; // make our implementation private
	  var noop = function () {};
	
	  var Symbol = globals.Symbol || {};
	  var symbolSpecies = Symbol.species || '@@species';
	
	  var numberIsNaN = Number.isNaN || function isNaN(value) {
	    // NaN !== NaN, but they are identical.
	    // NaNs are the only non-reflexive value, i.e., if x !== x,
	    // then x is NaN.
	    // isNaN is broken: it converts its argument to number, so
	    // isNaN('foo') => true
	    return value !== value;
	  };
	  var numberIsFinite = Number.isFinite || function isFinite(value) {
	    return typeof value === 'number' && globalIsFinite(value);
	  };
	
	  // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
	  // can be replaced with require('is-arguments') if we ever use a build process instead
	  var isStandardArguments = function isArguments(value) {
	    return _toString(value) === '[object Arguments]';
	  };
	  var isLegacyArguments = function isArguments(value) {
	    return value !== null &&
	      typeof value === 'object' &&
	      typeof value.length === 'number' &&
	      value.length >= 0 &&
	      _toString(value) !== '[object Array]' &&
	      _toString(value.callee) === '[object Function]';
	  };
	  var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;
	
	  var Type = {
	    primitive: function (x) { return x === null || (typeof x !== 'function' && typeof x !== 'object'); },
	    object: function (x) { return x !== null && typeof x === 'object'; },
	    string: function (x) { return _toString(x) === '[object String]'; },
	    regex: function (x) { return _toString(x) === '[object RegExp]'; },
	    symbol: function (x) {
	      return typeof globals.Symbol === 'function' && typeof x === 'symbol';
	    }
	  };
	
	  // This is a private name in the es6 spec, equal to '[Symbol.iterator]'
	  // we're going to use an arbitrary _-prefixed name to make our shims
	  // work properly with each other, even though we don't have full Iterator
	  // support.  That is, `Array.from(map.keys())` will work, but we don't
	  // pretend to export a "real" Iterator interface.
	  var $iterator$ = Type.symbol(Symbol.iterator) ? Symbol.iterator : '_es6-shim iterator_';
	  // Firefox ships a partial implementation using the name @@iterator.
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
	  // So use that name if we detect it.
	  if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') {
	    $iterator$ = '@@iterator';
	  }
	
	  // Reflect
	  if (!globals.Reflect) {
	    defineProperty(globals, 'Reflect', {});
	  }
	  var Reflect = globals.Reflect;
	
	  var ES = {
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
	    Call: function Call(F, V) {
	      var args = arguments.length > 2 ? arguments[2] : [];
	      if (!ES.IsCallable(F)) {
	        throw new TypeError(F + ' is not a function');
	      }
	      return _apply(F, V, args);
	    },
	
	    RequireObjectCoercible: function (x, optMessage) {
	      /* jshint eqnull:true */
	      if (x == null) {
	        throw new TypeError(optMessage || 'Cannot call method on ' + x);
	      }
	    },
	
	    TypeIsObject: function (x) {
	      /* jshint eqnull:true */
	      // this is expensive when it returns false; use this function
	      // when you expect it to return true in the common case.
	      return x != null && Object(x) === x;
	    },
	
	    ToObject: function (o, optMessage) {
	      ES.RequireObjectCoercible(o, optMessage);
	      return Object(o);
	    },
	
	    IsCallable: function (x) {
	      // some versions of IE say that typeof /abc/ === 'function'
	      return typeof x === 'function' && _toString(x) === '[object Function]';
	    },
	
	    IsConstructor: function (x) {
	      // We can't tell callables from constructors in ES5
	      return ES.IsCallable(x);
	    },
	
	    ToInt32: function (x) {
	      return ES.ToNumber(x) >> 0;
	    },
	
	    ToUint32: function (x) {
	      return ES.ToNumber(x) >>> 0;
	    },
	
	    ToNumber: function (value) {
	      if (_toString(value) === '[object Symbol]') {
	        throw new TypeError('Cannot convert a Symbol value to a number');
	      }
	      return +value;
	    },
	
	    ToInteger: function (value) {
	      var number = ES.ToNumber(value);
	      if (numberIsNaN(number)) { return 0; }
	      if (number === 0 || !numberIsFinite(number)) { return number; }
	      return (number > 0 ? 1 : -1) * _floor(_abs(number));
	    },
	
	    ToLength: function (value) {
	      var len = ES.ToInteger(value);
	      if (len <= 0) { return 0; } // includes converting -0 to +0
	      if (len > Number.MAX_SAFE_INTEGER) { return Number.MAX_SAFE_INTEGER; }
	      return len;
	    },
	
	    SameValue: function (a, b) {
	      if (a === b) {
	        // 0 === -0, but they are not identical.
	        if (a === 0) { return 1 / a === 1 / b; }
	        return true;
	      }
	      return numberIsNaN(a) && numberIsNaN(b);
	    },
	
	    SameValueZero: function (a, b) {
	      // same as SameValue except for SameValueZero(+0, -0) == true
	      return (a === b) || (numberIsNaN(a) && numberIsNaN(b));
	    },
	
	    IsIterable: function (o) {
	      return ES.TypeIsObject(o) && (typeof o[$iterator$] !== 'undefined' || isArguments(o));
	    },
	
	    GetIterator: function (o) {
	      if (isArguments(o)) {
	        // special case support for `arguments`
	        return new ArrayIterator(o, 'value');
	      }
	      var itFn = ES.GetMethod(o, $iterator$);
	      if (!ES.IsCallable(itFn)) {
	        // Better diagnostics if itFn is null or undefined
	        throw new TypeError('value is not an iterable');
	      }
	      var it = _call(itFn, o);
	      if (!ES.TypeIsObject(it)) {
	        throw new TypeError('bad iterator');
	      }
	      return it;
	    },
	
	    GetMethod: function (o, p) {
	      var func = ES.ToObject(o)[p];
	      if (func === void 0 || func === null) {
	        return void 0;
	      }
	      if (!ES.IsCallable(func)) {
	        throw new TypeError('Method not callable: ' + p);
	      }
	      return func;
	    },
	
	    IteratorComplete: function (iterResult) {
	      return !!(iterResult.done);
	    },
	
	    IteratorClose: function (iterator, completionIsThrow) {
	      var returnMethod = ES.GetMethod(iterator, 'return');
	      if (returnMethod === void 0) {
	        return;
	      }
	      var innerResult, innerException;
	      try {
	        innerResult = _call(returnMethod, iterator);
	      } catch (e) {
	        innerException = e;
	      }
	      if (completionIsThrow) {
	        return;
	      }
	      if (innerException) {
	        throw innerException;
	      }
	      if (!ES.TypeIsObject(innerResult)) {
	        throw new TypeError("Iterator's return method returned a non-object.");
	      }
	    },
	
	    IteratorNext: function (it) {
	      var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();
	      if (!ES.TypeIsObject(result)) {
	        throw new TypeError('bad iterator');
	      }
	      return result;
	    },
	
	    IteratorStep: function (it) {
	      var result = ES.IteratorNext(it);
	      var done = ES.IteratorComplete(result);
	      return done ? false : result;
	    },
	
	    Construct: function (C, args, newTarget, isES6internal) {
	      var target = typeof newTarget === 'undefined' ? C : newTarget;
	
	      if (!isES6internal) {
	        // Try to use Reflect.construct if available
	        return Reflect.construct(C, args, target);
	      }
	      // OK, we have to fake it.  This will only work if the
	      // C.[[ConstructorKind]] == "base" -- but that's the only
	      // kind we can make in ES5 code anyway.
	
	      // OrdinaryCreateFromConstructor(target, "%ObjectPrototype%")
	      var proto = target.prototype;
	      if (!ES.TypeIsObject(proto)) {
	        proto = Object.prototype;
	      }
	      var obj = create(proto);
	      // Call the constructor.
	      var result = ES.Call(C, obj, args);
	      return ES.TypeIsObject(result) ? result : obj;
	    },
	
	    SpeciesConstructor: function (O, defaultConstructor) {
	      var C = O.constructor;
	      if (C === void 0) {
	        return defaultConstructor;
	      }
	      if (!ES.TypeIsObject(C)) {
	        throw new TypeError('Bad constructor');
	      }
	      var S = C[symbolSpecies];
	      if (S === void 0 || S === null) {
	        return defaultConstructor;
	      }
	      if (!ES.IsConstructor(S)) {
	        throw new TypeError('Bad @@species');
	      }
	      return S;
	    },
	
	    CreateHTML: function (string, tag, attribute, value) {
	      var S = String(string);
	      var p1 = '<' + tag;
	      if (attribute !== '') {
	        var V = String(value);
	        var escapedV = V.replace(/"/g, '&quot;');
	        p1 += ' ' + attribute + '="' + escapedV + '"';
	      }
	      var p2 = p1 + '>';
	      var p3 = p2 + S;
	      return p3 + '</' + tag + '>';
	    }
	  };
	
	  var Value = {
	    getter: function (object, name, getter) {
	      if (!supportsDescriptors) {
	        throw new TypeError('getters require true ES5 support');
	      }
	      Object.defineProperty(object, name, {
	        configurable: true,
	        enumerable: false,
	        get: getter
	      });
	    },
	    proxy: function (originalObject, key, targetObject) {
	      if (!supportsDescriptors) {
	        throw new TypeError('getters require true ES5 support');
	      }
	      var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);
	      Object.defineProperty(targetObject, key, {
	        configurable: originalDescriptor.configurable,
	        enumerable: originalDescriptor.enumerable,
	        get: function getKey() { return originalObject[key]; },
	        set: function setKey(value) { originalObject[key] = value; }
	      });
	    },
	    redefine: function (object, property, newValue) {
	      if (supportsDescriptors) {
	        var descriptor = Object.getOwnPropertyDescriptor(object, property);
	        descriptor.value = newValue;
	        Object.defineProperty(object, property, descriptor);
	      } else {
	        object[property] = newValue;
	      }
	    },
	    defineByDescriptor: function (object, property, descriptor) {
	      if (supportsDescriptors) {
	        Object.defineProperty(object, property, descriptor);
	      } else if ('value' in descriptor) {
	        object[property] = descriptor.value;
	      }
	    },
	    preserveToString: function (target, source) {
	      if (source && ES.IsCallable(source.toString)) {
	        defineProperty(target, 'toString', source.toString.bind(source), true);
	      }
	    }
	  };
	
	  var wrapConstructor = function wrapConstructor(original, replacement, keysToSkip) {
	    Value.preserveToString(replacement, original);
	    if (Object.setPrototypeOf) {
	      // sets up proper prototype chain where possible
	      Object.setPrototypeOf(original, replacement);
	    }
	    if (supportsDescriptors) {
	      _forEach(Object.getOwnPropertyNames(original), function (key) {
	        if (key in noop || keysToSkip[key]) { return; }
	        Value.proxy(original, key, replacement);
	      });
	    } else {
	      _forEach(Object.keys(original), function (key) {
	        if (key in noop || keysToSkip[key]) { return; }
	        replacement[key] = original[key];
	      });
	    }
	    replacement.prototype = original.prototype;
	    Value.redefine(original.prototype, 'constructor', replacement);
	  };
	
	  var defaultSpeciesGetter = function () { return this; };
	  var addDefaultSpecies = function (C) {
	    if (supportsDescriptors && !_hasOwnProperty(C, symbolSpecies)) {
	      Value.getter(C, symbolSpecies, defaultSpeciesGetter);
	    }
	  };
	
	  var overrideNative = function overrideNative(object, property, replacement) {
	    var original = object[property];
	    defineProperty(object, property, replacement, true);
	    Value.preserveToString(object[property], original);
	  };
	
	  var addIterator = function (prototype, impl) {
	    var implementation = impl || function iterator() { return this; };
	    defineProperty(prototype, $iterator$, implementation);
	    if (!prototype[$iterator$] && Type.symbol($iterator$)) {
	      // implementations are buggy when $iterator$ is a Symbol
	      prototype[$iterator$] = implementation;
	    }
	  };
	
	  var createDataProperty = function createDataProperty(object, name, value) {
	    if (supportsDescriptors) {
	      Object.defineProperty(object, name, {
	        configurable: true,
	        enumerable: true,
	        writable: true,
	        value: value
	      });
	    } else {
	      object[name] = value;
	    }
	  };
	  var createDataPropertyOrThrow = function createDataPropertyOrThrow(object, name, value) {
	    createDataProperty(object, name, value);
	    if (!ES.SameValue(object[name], value)) {
	      throw new TypeError('property is nonconfigurable');
	    }
	  };
	
	  var emulateES6construct = function (o, defaultNewTarget, defaultProto, slots) {
	    // This is an es5 approximation to es6 construct semantics.  in es6,
	    // 'new Foo' invokes Foo.[[Construct]] which (for almost all objects)
	    // just sets the internal variable NewTarget (in es6 syntax `new.target`)
	    // to Foo and then returns Foo().
	
	    // Many ES6 object then have constructors of the form:
	    // 1. If NewTarget is undefined, throw a TypeError exception
	    // 2. Let xxx by OrdinaryCreateFromConstructor(NewTarget, yyy, zzz)
	
	    // So we're going to emulate those first two steps.
	    if (!ES.TypeIsObject(o)) {
	      throw new TypeError('Constructor requires `new`: ' + defaultNewTarget.name);
	    }
	    var proto = defaultNewTarget.prototype;
	    if (!ES.TypeIsObject(proto)) {
	      proto = defaultProto;
	    }
	    var obj = create(proto);
	    for (var name in slots) {
	      if (_hasOwnProperty(slots, name)) {
	        var value = slots[name];
	        defineProperty(obj, name, value, true);
	      }
	    }
	    return obj;
	  };
	
	  // Firefox 31 reports this function's length as 0
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=1062484
	  if (String.fromCodePoint && String.fromCodePoint.length !== 1) {
	    var originalFromCodePoint = String.fromCodePoint;
	    overrideNative(String, 'fromCodePoint', function fromCodePoint(codePoints) { return _apply(originalFromCodePoint, this, arguments); });
	  }
	
	  var StringShims = {
	    fromCodePoint: function fromCodePoint(codePoints) {
	      var result = [];
	      var next;
	      for (var i = 0, length = arguments.length; i < length; i++) {
	        next = Number(arguments[i]);
	        if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) {
	          throw new RangeError('Invalid code point ' + next);
	        }
	
	        if (next < 0x10000) {
	          _push(result, String.fromCharCode(next));
	        } else {
	          next -= 0x10000;
	          _push(result, String.fromCharCode((next >> 10) + 0xD800));
	          _push(result, String.fromCharCode((next % 0x400) + 0xDC00));
	        }
	      }
	      return result.join('');
	    },
	
	    raw: function raw(callSite) {
	      var cooked = ES.ToObject(callSite, 'bad callSite');
	      var rawString = ES.ToObject(cooked.raw, 'bad raw value');
	      var len = rawString.length;
	      var literalsegments = ES.ToLength(len);
	      if (literalsegments <= 0) {
	        return '';
	      }
	
	      var stringElements = [];
	      var nextIndex = 0;
	      var nextKey, next, nextSeg, nextSub;
	      while (nextIndex < literalsegments) {
	        nextKey = String(nextIndex);
	        nextSeg = String(rawString[nextKey]);
	        _push(stringElements, nextSeg);
	        if (nextIndex + 1 >= literalsegments) {
	          break;
	        }
	        next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';
	        nextSub = String(next);
	        _push(stringElements, nextSub);
	        nextIndex += 1;
	      }
	      return stringElements.join('');
	    }
	  };
	  if (String.raw && String.raw({ raw: { 0: 'x', 1: 'y', length: 2 } }) !== 'xy') {
	    // IE 11 TP has a broken String.raw implementation
	    overrideNative(String, 'raw', StringShims.raw);
	  }
	  defineProperties(String, StringShims);
	
	  // Fast repeat, uses the `Exponentiation by squaring` algorithm.
	  // Perf: http://jsperf.com/string-repeat2/2
	  var stringRepeat = function repeat(s, times) {
	    if (times < 1) { return ''; }
	    if (times % 2) { return repeat(s, times - 1) + s; }
	    var half = repeat(s, times / 2);
	    return half + half;
	  };
	  var stringMaxLength = Infinity;
	
	  var StringPrototypeShims = {
	    repeat: function repeat(times) {
	      ES.RequireObjectCoercible(this);
	      var thisStr = String(this);
	      var numTimes = ES.ToInteger(times);
	      if (numTimes < 0 || numTimes >= stringMaxLength) {
	        throw new RangeError('repeat count must be less than infinity and not overflow maximum string size');
	      }
	      return stringRepeat(thisStr, numTimes);
	    },
	
	    startsWith: function startsWith(searchString) {
	      ES.RequireObjectCoercible(this);
	      var thisStr = String(this);
	      if (Type.regex(searchString)) {
	        throw new TypeError('Cannot call method "startsWith" with a regex');
	      }
	      var searchStr = String(searchString);
	      var startArg = arguments.length > 1 ? arguments[1] : void 0;
	      var start = _max(ES.ToInteger(startArg), 0);
	      return _strSlice(thisStr, start, start + searchStr.length) === searchStr;
	    },
	
	    endsWith: function endsWith(searchString) {
	      ES.RequireObjectCoercible(this);
	      var thisStr = String(this);
	      if (Type.regex(searchString)) {
	        throw new TypeError('Cannot call method "endsWith" with a regex');
	      }
	      var searchStr = String(searchString);
	      var thisLen = thisStr.length;
	      var posArg = arguments.length > 1 ? arguments[1] : void 0;
	      var pos = typeof posArg === 'undefined' ? thisLen : ES.ToInteger(posArg);
	      var end = _min(_max(pos, 0), thisLen);
	      return _strSlice(thisStr, end - searchStr.length, end) === searchStr;
	    },
	
	    includes: function includes(searchString) {
	      if (Type.regex(searchString)) {
	        throw new TypeError('"includes" does not accept a RegExp');
	      }
	      var position;
	      if (arguments.length > 1) {
	        position = arguments[1];
	      }
	      // Somehow this trick makes method 100% compat with the spec.
	      return _indexOf(this, searchString, position) !== -1;
	    },
	
	    codePointAt: function codePointAt(pos) {
	      ES.RequireObjectCoercible(this);
	      var thisStr = String(this);
	      var position = ES.ToInteger(pos);
	      var length = thisStr.length;
	      if (position >= 0 && position < length) {
	        var first = thisStr.charCodeAt(position);
	        var isEnd = (position + 1 === length);
	        if (first < 0xD800 || first > 0xDBFF || isEnd) { return first; }
	        var second = thisStr.charCodeAt(position + 1);
	        if (second < 0xDC00 || second > 0xDFFF) { return first; }
	        return ((first - 0xD800) * 1024) + (second - 0xDC00) + 0x10000;
	      }
	    }
	  };
	  if (String.prototype.includes && 'a'.includes('a', Infinity) !== false) {
	    overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
	  }
	
	  if (String.prototype.startsWith && String.prototype.endsWith) {
	    var startsWithRejectsRegex = throwsError(function () {
	      /* throws if spec-compliant */
	      '/a/'.startsWith(/a/);
	    });
	    var startsWithHandlesInfinity = 'abc'.startsWith('a', Infinity) === false;
	    if (!startsWithRejectsRegex || !startsWithHandlesInfinity) {
	      // Firefox (< 37?) and IE 11 TP have a noncompliant startsWith implementation
	      overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
	      overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
	    }
	  }
	
	  defineProperties(String.prototype, StringPrototypeShims);
	
	  // whitespace from: http://es5.github.io/#x15.5.4.20
	  // implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
	  var ws = [
	    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
	    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
	    '\u2029\uFEFF'
	  ].join('');
	  var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
	  var trimShim = function trim() {
	    if (typeof this === 'undefined' || this === null) {
	      throw new TypeError("can't convert " + this + ' to object');
	    }
	    return String(this).replace(trimRegexp, '');
	  };
	  var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
	  var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
	  var isBadHexRegex = /^[\-+]0x[0-9a-f]+$/i;
	  var hasStringTrimBug = nonWS.trim().length !== nonWS.length;
	  defineProperty(String.prototype, 'trim', trimShim, hasStringTrimBug);
	
	  // see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype-@@iterator
	  var StringIterator = function (s) {
	    ES.RequireObjectCoercible(s);
	    this._s = String(s);
	    this._i = 0;
	  };
	  StringIterator.prototype.next = function () {
	    var s = this._s, i = this._i;
	    if (typeof s === 'undefined' || i >= s.length) {
	      this._s = void 0;
	      return { value: void 0, done: true };
	    }
	    var first = s.charCodeAt(i), second, len;
	    if (first < 0xD800 || first > 0xDBFF || (i + 1) === s.length) {
	      len = 1;
	    } else {
	      second = s.charCodeAt(i + 1);
	      len = (second < 0xDC00 || second > 0xDFFF) ? 1 : 2;
	    }
	    this._i = i + len;
	    return { value: s.substr(i, len), done: false };
	  };
	  addIterator(StringIterator.prototype);
	  addIterator(String.prototype, function () {
	    return new StringIterator(this);
	  });
	
	  var ArrayShims = {
	    from: function from(items) {
	      var C = this;
	      var mapFn = arguments.length > 1 ? arguments[1] : void 0;
	      var mapping, T;
	      if (mapFn === void 0) {
	        mapping = false;
	      } else {
	        if (!ES.IsCallable(mapFn)) {
	          throw new TypeError('Array.from: when provided, the second argument must be a function');
	        }
	        T = arguments.length > 2 ? arguments[2] : void 0;
	        mapping = true;
	      }
	
	      // Note that that Arrays will use ArrayIterator:
	      // https://bugs.ecmascript.org/show_bug.cgi?id=2416
	      var usingIterator = typeof (isArguments(items) || ES.GetMethod(items, $iterator$)) !== 'undefined';
	
	      var length, result, i;
	      if (usingIterator) {
	        result = ES.IsConstructor(C) ? Object(new C()) : [];
	        var iterator = ES.GetIterator(items);
	        var next, nextValue;
	
	        i = 0;
	        while (true) {
	          next = ES.IteratorStep(iterator);
	          if (next === false) {
	            break;
	          }
	          nextValue = next.value;
	          try {
	            if (mapping) {
	              nextValue = T === undefined ? mapFn(nextValue, i) : _call(mapFn, T, nextValue, i);
	            }
	            result[i] = nextValue;
	          } catch (e) {
	            ES.IteratorClose(iterator, true);
	            throw e;
	          }
	          i += 1;
	        }
	        length = i;
	      } else {
	        var arrayLike = ES.ToObject(items);
	        length = ES.ToLength(arrayLike.length);
	        result = ES.IsConstructor(C) ? Object(new C(length)) : new Array(length);
	        var value;
	        for (i = 0; i < length; ++i) {
	          value = arrayLike[i];
	          if (mapping) {
	            value = T !== undefined ? _call(mapFn, T, value, i) : mapFn(value, i);
	          }
	          result[i] = value;
	        }
	      }
	
	      result.length = length;
	      return result;
	    },
	
	    of: function of() {
	      var len = arguments.length;
	      var C = this;
	      var A = isArray(C) || !ES.IsCallable(C) ? new Array(len) : ES.Construct(C, [len]);
	      for (var k = 0; k < len; ++k) {
	        createDataPropertyOrThrow(A, k, arguments[k]);
	      }
	      A.length = len;
	      return A;
	    }
	  };
	  defineProperties(Array, ArrayShims);
	  addDefaultSpecies(Array);
	
	  // Given an argument x, it will return an IteratorResult object,
	  // with value set to x and done to false.
	  // Given no arguments, it will return an iterator completion object.
	  var iteratorResult = function (x) {
	    return { value: x, done: arguments.length === 0 };
	  };
	
	  // Our ArrayIterator is private; see
	  // https://github.com/paulmillr/es6-shim/issues/252
	  ArrayIterator = function (array, kind) {
	      this.i = 0;
	      this.array = array;
	      this.kind = kind;
	  };
	
	  defineProperties(ArrayIterator.prototype, {
	    next: function () {
	      var i = this.i, array = this.array;
	      if (!(this instanceof ArrayIterator)) {
	        throw new TypeError('Not an ArrayIterator');
	      }
	      if (typeof array !== 'undefined') {
	        var len = ES.ToLength(array.length);
	        for (; i < len; i++) {
	          var kind = this.kind;
	          var retval;
	          if (kind === 'key') {
	            retval = i;
	          } else if (kind === 'value') {
	            retval = array[i];
	          } else if (kind === 'entry') {
	            retval = [i, array[i]];
	          }
	          this.i = i + 1;
	          return { value: retval, done: false };
	        }
	      }
	      this.array = void 0;
	      return { value: void 0, done: true };
	    }
	  });
	  addIterator(ArrayIterator.prototype);
	
	  var getAllKeys = function getAllKeys(object) {
	    var keys = [];
	
	    for (var key in object) {
	      _push(keys, key);
	    }
	
	    return keys;
	  };
	
	  var ObjectIterator = function (object, kind) {
	    defineProperties(this, {
	      object: object,
	      array: getAllKeys(object),
	      kind: kind
	    });
	  };
	
	  defineProperties(ObjectIterator.prototype, {
	    next: function next() {
	      var key;
	      var array = this.array;
	
	      if (!(this instanceof ObjectIterator)) {
	        throw new TypeError('Not an ObjectIterator');
	      }
	
	      // Find next key in the object
	      while (array.length > 0) {
	        key = _shift(array);
	
	        // The candidate key isn't defined on object.
	        // Must have been deleted, or object[[Prototype]]
	        // has been modified.
	        if (!(key in this.object)) {
	          continue;
	        }
	
	        if (this.kind === 'key') {
	          return iteratorResult(key);
	        } else if (this.kind === 'value') {
	          return iteratorResult(this.object[key]);
	        } else {
	          return iteratorResult([key, this.object[key]]);
	        }
	      }
	
	      return iteratorResult();
	    }
	  });
	  addIterator(ObjectIterator.prototype);
	
	  // note: this is positioned here because it depends on ArrayIterator
	  var arrayOfSupportsSubclassing = Array.of === ArrayShims.of || (function () {
	    // Detects a bug in Webkit nightly r181886
	    var Foo = function Foo(len) { this.length = len; };
	    Foo.prototype = [];
	    var fooArr = Array.of.apply(Foo, [1, 2]);
	    return fooArr instanceof Foo && fooArr.length === 2;
	  }());
	  if (!arrayOfSupportsSubclassing) {
	    overrideNative(Array, 'of', ArrayShims.of);
	  }
	
	  var ArrayPrototypeShims = {
	    copyWithin: function copyWithin(target, start) {
	      var end = arguments[2]; // copyWithin.length must be 2
	      var o = ES.ToObject(this);
	      var len = ES.ToLength(o.length);
	      var relativeTarget = ES.ToInteger(target);
	      var relativeStart = ES.ToInteger(start);
	      var to = relativeTarget < 0 ? _max(len + relativeTarget, 0) : _min(relativeTarget, len);
	      var from = relativeStart < 0 ? _max(len + relativeStart, 0) : _min(relativeStart, len);
	      end = typeof end === 'undefined' ? len : ES.ToInteger(end);
	      var fin = end < 0 ? _max(len + end, 0) : _min(end, len);
	      var count = _min(fin - from, len - to);
	      var direction = 1;
	      if (from < to && to < (from + count)) {
	        direction = -1;
	        from += count - 1;
	        to += count - 1;
	      }
	      while (count > 0) {
	        if (_hasOwnProperty(o, from)) {
	          o[to] = o[from];
	        } else {
	          delete o[from];
	        }
	        from += direction;
	        to += direction;
	        count -= 1;
	      }
	      return o;
	    },
	
	    fill: function fill(value) {
	      var start = arguments.length > 1 ? arguments[1] : void 0;
	      var end = arguments.length > 2 ? arguments[2] : void 0;
	      var O = ES.ToObject(this);
	      var len = ES.ToLength(O.length);
	      start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);
	      end = ES.ToInteger(typeof end === 'undefined' ? len : end);
	
	      var relativeStart = start < 0 ? _max(len + start, 0) : _min(start, len);
	      var relativeEnd = end < 0 ? len + end : end;
	
	      for (var i = relativeStart; i < len && i < relativeEnd; ++i) {
	        O[i] = value;
	      }
	      return O;
	    },
	
	    find: function find(predicate) {
	      var list = ES.ToObject(this);
	      var length = ES.ToLength(list.length);
	      if (!ES.IsCallable(predicate)) {
	        throw new TypeError('Array#find: predicate must be a function');
	      }
	      var thisArg = arguments.length > 1 ? arguments[1] : null;
	      for (var i = 0, value; i < length; i++) {
	        value = list[i];
	        if (thisArg) {
	          if (_call(predicate, thisArg, value, i, list)) { return value; }
	        } else if (predicate(value, i, list)) {
	          return value;
	        }
	      }
	    },
	
	    findIndex: function findIndex(predicate) {
	      var list = ES.ToObject(this);
	      var length = ES.ToLength(list.length);
	      if (!ES.IsCallable(predicate)) {
	        throw new TypeError('Array#findIndex: predicate must be a function');
	      }
	      var thisArg = arguments.length > 1 ? arguments[1] : null;
	      for (var i = 0; i < length; i++) {
	        if (thisArg) {
	          if (_call(predicate, thisArg, list[i], i, list)) { return i; }
	        } else if (predicate(list[i], i, list)) {
	          return i;
	        }
	      }
	      return -1;
	    },
	
	    keys: function keys() {
	      return new ArrayIterator(this, 'key');
	    },
	
	    values: function values() {
	      return new ArrayIterator(this, 'value');
	    },
	
	    entries: function entries() {
	      return new ArrayIterator(this, 'entry');
	    }
	  };
	  // Safari 7.1 defines Array#keys and Array#entries natively,
	  // but the resulting ArrayIterator objects don't have a "next" method.
	  if (Array.prototype.keys && !ES.IsCallable([1].keys().next)) {
	    delete Array.prototype.keys;
	  }
	  if (Array.prototype.entries && !ES.IsCallable([1].entries().next)) {
	    delete Array.prototype.entries;
	  }
	
	  // Chrome 38 defines Array#keys and Array#entries, and Array#@@iterator, but not Array#values
	  if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {
	    defineProperties(Array.prototype, {
	      values: Array.prototype[$iterator$]
	    });
	    if (Type.symbol(Symbol.unscopables)) {
	      Array.prototype[Symbol.unscopables].values = true;
	    }
	  }
	  // Chrome 40 defines Array#values with the incorrect name, although Array#{keys,entries} have the correct name
	  if (functionsHaveNames && Array.prototype.values && Array.prototype.values.name !== 'values') {
	    var originalArrayPrototypeValues = Array.prototype.values;
	    overrideNative(Array.prototype, 'values', function values() { return _call(originalArrayPrototypeValues, this); });
	    defineProperty(Array.prototype, $iterator$, Array.prototype.values, true);
	  }
	  defineProperties(Array.prototype, ArrayPrototypeShims);
	
	  addIterator(Array.prototype, function () { return this.values(); });
	  // Chrome defines keys/values/entries on Array, but doesn't give us
	  // any way to identify its iterator.  So add our own shimmed field.
	  if (Object.getPrototypeOf) {
	    addIterator(Object.getPrototypeOf([].values()));
	  }
	
	  // note: this is positioned here because it relies on Array#entries
	  var arrayFromSwallowsNegativeLengths = (function () {
	    // Detects a Firefox bug in v32
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=1063993
	    return valueOrFalseIfThrows(function () { return Array.from({ length: -1 }).length === 0; });
	  }());
	  var arrayFromHandlesIterables = (function () {
	    // Detects a bug in Webkit nightly r181886
	    var arr = Array.from([0].entries());
	    return arr.length === 1 && isArray(arr[0]) && arr[0][0] === 0 && arr[0][1] === 0;
	  }());
	  if (!arrayFromSwallowsNegativeLengths || !arrayFromHandlesIterables) {
	    overrideNative(Array, 'from', ArrayShims.from);
	  }
	  var arrayFromHandlesUndefinedMapFunction = (function () {
	    // Microsoft Edge v0.11 throws if the mapFn argument is *provided* but undefined,
	    // but the spec doesn't care if it's provided or not - undefined doesn't throw.
	    return valueOrFalseIfThrows(function () { return Array.from([0], undefined); });
	  }());
	  if (!arrayFromHandlesUndefinedMapFunction) {
	    var origArrayFrom = Array.from;
	    overrideNative(Array, 'from', function from(items) {
	      if (arguments.length > 0 && typeof arguments[1] !== 'undefined') {
	        return _apply(origArrayFrom, this, arguments);
	      } else {
	        return _call(origArrayFrom, this, items);
	      }
	    });
	  }
	
	  var toLengthsCorrectly = function (method, reversed) {
	    var obj = { length: -1 };
	    obj[reversed ? ((-1 >>> 0) - 1) : 0] = true;
	    return valueOrFalseIfThrows(function () {
	      _call(method, obj, function () {
	        // note: in nonconforming browsers, this will be called
	        // -1 >>> 0 times, which is 4294967295, so the throw matters.
	        throw new RangeError('should not reach here');
	      }, []);
	    });
	  };
	  if (!toLengthsCorrectly(Array.prototype.forEach)) {
	    var originalForEach = Array.prototype.forEach;
	    overrideNative(Array.prototype, 'forEach', function forEach(callbackFn) {
	      return _apply(originalForEach, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.map)) {
	    var originalMap = Array.prototype.map;
	    overrideNative(Array.prototype, 'map', function map(callbackFn) {
	      return _apply(originalMap, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.filter)) {
	    var originalFilter = Array.prototype.filter;
	    overrideNative(Array.prototype, 'filter', function filter(callbackFn) {
	      return _apply(originalFilter, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.some)) {
	    var originalSome = Array.prototype.some;
	    overrideNative(Array.prototype, 'some', function some(callbackFn) {
	      return _apply(originalSome, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.every)) {
	    var originalEvery = Array.prototype.every;
	    overrideNative(Array.prototype, 'every', function every(callbackFn) {
	      return _apply(originalEvery, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.reduce)) {
	    var originalReduce = Array.prototype.reduce;
	    overrideNative(Array.prototype, 'reduce', function reduce(callbackFn) {
	      return _apply(originalReduce, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	  if (!toLengthsCorrectly(Array.prototype.reduceRight, true)) {
	    var originalReduceRight = Array.prototype.reduceRight;
	    overrideNative(Array.prototype, 'reduceRight', function reduceRight(callbackFn) {
	      return _apply(originalReduceRight, this.length >= 0 ? this : [], arguments);
	    }, true);
	  }
	
	  var lacksOctalSupport = Number('0o10') !== 8;
	  var lacksBinarySupport = Number('0b10') !== 2;
	  var trimsNonWhitespace = _some(nonWS, function (c) {
	    return Number(c + 0 + c) === 0;
	  });
	  if (lacksOctalSupport || lacksBinarySupport || trimsNonWhitespace) {
	    var OrigNumber = Number;
	    var binaryRegex = /^0b[01]+$/i;
	    var octalRegex = /^0o[0-7]+$/i;
	    // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is an own property of regexes. wtf.
	    var isBinary = binaryRegex.test.bind(binaryRegex);
	    var isOctal = octalRegex.test.bind(octalRegex);
	    var toPrimitive = function (O) { // need to replace this with `es-to-primitive/es6`
	      var result;
	      if (typeof O.valueOf === 'function') {
	        result = O.valueOf();
	        if (Type.primitive(result)) {
	          return result;
	        }
	      }
	      if (typeof O.toString === 'function') {
	        result = O.toString();
	        if (Type.primitive(result)) {
	          return result;
	        }
	      }
	      throw new TypeError('No default value');
	    };
	    var hasNonWS = nonWSregex.test.bind(nonWSregex);
	    var isBadHex = isBadHexRegex.test.bind(isBadHexRegex);
	    var NumberShim = (function () {
	      // this is wrapped in an IIFE because of IE 6-8's wacky scoping issues with named function expressions.
	      var NumberShim = function Number(value) {
	        var primValue;
	        if (arguments.length > 0) {
	          primValue = Type.primitive(value) ? value : toPrimitive(value, 'number');
	        } else {
	          primValue = 0;
	        }
	        if (typeof primValue === 'string') {
	          primValue = _call(trimShim, primValue);
	          if (isBinary(primValue)) {
	            primValue = parseInt(_strSlice(primValue, 2), 2);
	          } else if (isOctal(primValue)) {
	            primValue = parseInt(_strSlice(primValue, 2), 8);
	          } else if (hasNonWS(primValue) || isBadHex(primValue)) {
	            primValue = NaN;
	          }
	        }
	        var receiver = this;
	        var valueOfSucceeds = valueOrFalseIfThrows(function () {
	          OrigNumber.prototype.valueOf.call(receiver);
	          return true;
	        });
	        if (receiver instanceof NumberShim && !valueOfSucceeds) {
	          return new OrigNumber(primValue);
	        }
	        /* jshint newcap: false */
	        return OrigNumber(primValue);
	        /* jshint newcap: true */
	      };
	      return NumberShim;
	    }());
	    wrapConstructor(OrigNumber, NumberShim, {});
	    /*globals Number: true */
	    /* eslint-disable no-undef */
	    Number = NumberShim;
	    Value.redefine(globals, 'Number', NumberShim);
	    /* eslint-enable no-undef */
	    /*globals Number: false */
	  }
	
	  var maxSafeInteger = Math.pow(2, 53) - 1;
	  defineProperties(Number, {
	    MAX_SAFE_INTEGER: maxSafeInteger,
	    MIN_SAFE_INTEGER: -maxSafeInteger,
	    EPSILON: 2.220446049250313e-16,
	
	    parseInt: globals.parseInt,
	    parseFloat: globals.parseFloat,
	
	    isFinite: numberIsFinite,
	
	    isInteger: function isInteger(value) {
	      return numberIsFinite(value) && ES.ToInteger(value) === value;
	    },
	
	    isSafeInteger: function isSafeInteger(value) {
	      return Number.isInteger(value) && _abs(value) <= Number.MAX_SAFE_INTEGER;
	    },
	
	    isNaN: numberIsNaN
	  });
	  // Firefox 37 has a conforming Number.parseInt, but it's not === to the global parseInt (fixed in v40)
	  defineProperty(Number, 'parseInt', globals.parseInt, Number.parseInt !== globals.parseInt);
	
	  // Work around bugs in Array#find and Array#findIndex -- early
	  // implementations skipped holes in sparse arrays. (Note that the
	  // implementations of find/findIndex indirectly use shimmed
	  // methods of Number, so this test has to happen down here.)
	  /*jshint elision: true */
	  /* eslint-disable no-sparse-arrays */
	  if (![, 1].find(function (item, idx) { return idx === 0; })) {
	    overrideNative(Array.prototype, 'find', ArrayPrototypeShims.find);
	  }
	  if ([, 1].findIndex(function (item, idx) { return idx === 0; }) !== 0) {
	    overrideNative(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex);
	  }
	  /* eslint-enable no-sparse-arrays */
	  /*jshint elision: false */
	
	  var isEnumerableOn = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);
	  var sliceArgs = function sliceArgs() {
	    // per https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
	    // and https://gist.github.com/WebReflection/4327762cb87a8c634a29
	    var initial = Number(this);
	    var len = arguments.length;
	    var desiredArgCount = len - initial;
	    var args = new Array(desiredArgCount < 0 ? 0 : desiredArgCount);
	    for (var i = initial; i < len; ++i) {
	      args[i - initial] = arguments[i];
	    }
	    return args;
	  };
	  var assignTo = function assignTo(source) {
	    return function assignToSource(target, key) {
	      target[key] = source[key];
	      return target;
	    };
	  };
	  var assignReducer = function (target, source) {
	    var keys = Object.keys(Object(source));
	    var symbols;
	    if (ES.IsCallable(Object.getOwnPropertySymbols)) {
	      symbols = _filter(Object.getOwnPropertySymbols(Object(source)), isEnumerableOn(source));
	    }
	    return _reduce(_concat(keys, symbols || []), assignTo(source), target);
	  };
	
	  var ObjectShims = {
	    // 19.1.3.1
	    assign: function (target, source) {
	      var to = ES.ToObject(target, 'Cannot convert undefined or null to object');
	      return _reduce(_apply(sliceArgs, 1, arguments), assignReducer, to);
	    },
	
	    // Added in WebKit in https://bugs.webkit.org/show_bug.cgi?id=143865
	    is: function is(a, b) {
	      return ES.SameValue(a, b);
	    }
	  };
	  var assignHasPendingExceptions = Object.assign && Object.preventExtensions && (function () {
	    // Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	    // which is 72% slower than our shim, and Firefox 40's native implementation.
	    var thrower = Object.preventExtensions({ 1: 2 });
	    try {
	      Object.assign(thrower, 'xy');
	    } catch (e) {
	      return thrower[1] === 'y';
	    }
	  }());
	  if (assignHasPendingExceptions) {
	    overrideNative(Object, 'assign', ObjectShims.assign);
	  }
	  defineProperties(Object, ObjectShims);
	
	  if (supportsDescriptors) {
	    var ES5ObjectShims = {
	      // 19.1.3.9
	      // shim from https://gist.github.com/WebReflection/5593554
	      setPrototypeOf: (function (Object, magic) {
	        var set;
	
	        var checkArgs = function (O, proto) {
	          if (!ES.TypeIsObject(O)) {
	            throw new TypeError('cannot set prototype on a non-object');
	          }
	          if (!(proto === null || ES.TypeIsObject(proto))) {
	            throw new TypeError('can only set prototype to an object or null' + proto);
	          }
	        };
	
	        var setPrototypeOf = function (O, proto) {
	          checkArgs(O, proto);
	          _call(set, O, proto);
	          return O;
	        };
	
	        try {
	          // this works already in Firefox and Safari
	          set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
	          _call(set, {}, null);
	        } catch (e) {
	          if (Object.prototype !== {}[magic]) {
	            // IE < 11 cannot be shimmed
	            return;
	          }
	          // probably Chrome or some old Mobile stock browser
	          set = function (proto) {
	            this[magic] = proto;
	          };
	          // please note that this will **not** work
	          // in those browsers that do not inherit
	          // __proto__ by mistake from Object.prototype
	          // in these cases we should probably throw an error
	          // or at least be informed about the issue
	          setPrototypeOf.polyfill = setPrototypeOf(
	            setPrototypeOf({}, null),
	            Object.prototype
	          ) instanceof Object;
	          // setPrototypeOf.polyfill === true means it works as meant
	          // setPrototypeOf.polyfill === false means it's not 100% reliable
	          // setPrototypeOf.polyfill === undefined
	          // or
	          // setPrototypeOf.polyfill ==  null means it's not a polyfill
	          // which means it works as expected
	          // we can even delete Object.prototype.__proto__;
	        }
	        return setPrototypeOf;
	      }(Object, '__proto__'))
	    };
	
	    defineProperties(Object, ES5ObjectShims);
	  }
	
	  // Workaround bug in Opera 12 where setPrototypeOf(x, null) doesn't work,
	  // but Object.create(null) does.
	  if (Object.setPrototypeOf && Object.getPrototypeOf &&
	      Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null &&
	      Object.getPrototypeOf(Object.create(null)) === null) {
	    (function () {
	      var FAKENULL = Object.create(null);
	      var gpo = Object.getPrototypeOf, spo = Object.setPrototypeOf;
	      Object.getPrototypeOf = function (o) {
	        var result = gpo(o);
	        return result === FAKENULL ? null : result;
	      };
	      Object.setPrototypeOf = function (o, p) {
	        var proto = p === null ? FAKENULL : p;
	        return spo(o, proto);
	      };
	      Object.setPrototypeOf.polyfill = false;
	    }());
	  }
	
	  var objectKeysAcceptsPrimitives = !throwsError(function () { Object.keys('foo'); });
	  if (!objectKeysAcceptsPrimitives) {
	    var originalObjectKeys = Object.keys;
	    overrideNative(Object, 'keys', function keys(value) {
	      return originalObjectKeys(ES.ToObject(value));
	    });
	  }
	
	  if (Object.getOwnPropertyNames) {
	    var objectGOPNAcceptsPrimitives = !throwsError(function () { Object.getOwnPropertyNames('foo'); });
	    if (!objectGOPNAcceptsPrimitives) {
	      var cachedWindowNames = typeof window === 'object' ? Object.getOwnPropertyNames(window) : [];
	      var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
	      overrideNative(Object, 'getOwnPropertyNames', function getOwnPropertyNames(value) {
	        var val = ES.ToObject(value);
	        if (_toString(val) === '[object Window]') {
	          try {
	            return originalObjectGetOwnPropertyNames(val);
	          } catch (e) {
	            // IE bug where layout engine calls userland gOPN for cross-domain `window` objects
	            return _concat([], cachedWindowNames);
	          }
	        }
	        return originalObjectGetOwnPropertyNames(val);
	      });
	    }
	  }
	  if (Object.getOwnPropertyDescriptor) {
	    var objectGOPDAcceptsPrimitives = !throwsError(function () { Object.getOwnPropertyDescriptor('foo', 'bar'); });
	    if (!objectGOPDAcceptsPrimitives) {
	      var originalObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	      overrideNative(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(value, property) {
	        return originalObjectGetOwnPropertyDescriptor(ES.ToObject(value), property);
	      });
	    }
	  }
	  if (Object.seal) {
	    var objectSealAcceptsPrimitives = !throwsError(function () { Object.seal('foo'); });
	    if (!objectSealAcceptsPrimitives) {
	      var originalObjectSeal = Object.seal;
	      overrideNative(Object, 'seal', function seal(value) {
	        if (!Type.object(value)) { return value; }
	        return originalObjectSeal(value);
	      });
	    }
	  }
	  if (Object.isSealed) {
	    var objectIsSealedAcceptsPrimitives = !throwsError(function () { Object.isSealed('foo'); });
	    if (!objectIsSealedAcceptsPrimitives) {
	      var originalObjectIsSealed = Object.isSealed;
	      overrideNative(Object, 'isSealed', function isSealed(value) {
	        if (!Type.object(value)) { return true; }
	        return originalObjectIsSealed(value);
	      });
	    }
	  }
	  if (Object.freeze) {
	    var objectFreezeAcceptsPrimitives = !throwsError(function () { Object.freeze('foo'); });
	    if (!objectFreezeAcceptsPrimitives) {
	      var originalObjectFreeze = Object.freeze;
	      overrideNative(Object, 'freeze', function freeze(value) {
	        if (!Type.object(value)) { return value; }
	        return originalObjectFreeze(value);
	      });
	    }
	  }
	  if (Object.isFrozen) {
	    var objectIsFrozenAcceptsPrimitives = !throwsError(function () { Object.isFrozen('foo'); });
	    if (!objectIsFrozenAcceptsPrimitives) {
	      var originalObjectIsFrozen = Object.isFrozen;
	      overrideNative(Object, 'isFrozen', function isFrozen(value) {
	        if (!Type.object(value)) { return true; }
	        return originalObjectIsFrozen(value);
	      });
	    }
	  }
	  if (Object.preventExtensions) {
	    var objectPreventExtensionsAcceptsPrimitives = !throwsError(function () { Object.preventExtensions('foo'); });
	    if (!objectPreventExtensionsAcceptsPrimitives) {
	      var originalObjectPreventExtensions = Object.preventExtensions;
	      overrideNative(Object, 'preventExtensions', function preventExtensions(value) {
	        if (!Type.object(value)) { return value; }
	        return originalObjectPreventExtensions(value);
	      });
	    }
	  }
	  if (Object.isExtensible) {
	    var objectIsExtensibleAcceptsPrimitives = !throwsError(function () { Object.isExtensible('foo'); });
	    if (!objectIsExtensibleAcceptsPrimitives) {
	      var originalObjectIsExtensible = Object.isExtensible;
	      overrideNative(Object, 'isExtensible', function isExtensible(value) {
	        if (!Type.object(value)) { return false; }
	        return originalObjectIsExtensible(value);
	      });
	    }
	  }
	  if (Object.getPrototypeOf) {
	    var objectGetProtoAcceptsPrimitives = !throwsError(function () { Object.getPrototypeOf('foo'); });
	    if (!objectGetProtoAcceptsPrimitives) {
	      var originalGetProto = Object.getPrototypeOf;
	      overrideNative(Object, 'getPrototypeOf', function getPrototypeOf(value) {
	        return originalGetProto(ES.ToObject(value));
	      });
	    }
	  }
	
	  var hasFlags = supportsDescriptors && (function () {
	    var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');
	    return desc && ES.IsCallable(desc.get);
	  }());
	  if (supportsDescriptors && !hasFlags) {
	    var regExpFlagsGetter = function flags() {
	      if (!ES.TypeIsObject(this)) {
	        throw new TypeError('Method called on incompatible type: must be an object.');
	      }
	      var result = '';
	      if (this.global) {
	        result += 'g';
	      }
	      if (this.ignoreCase) {
	        result += 'i';
	      }
	      if (this.multiline) {
	        result += 'm';
	      }
	      if (this.unicode) {
	        result += 'u';
	      }
	      if (this.sticky) {
	        result += 'y';
	      }
	      return result;
	    };
	
	    Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);
	  }
	
	  var regExpSupportsFlagsWithRegex = valueOrFalseIfThrows(function () {
	    return String(new RegExp(/a/g, 'i')) === '/a/i';
	  });
	
	  if (!regExpSupportsFlagsWithRegex && supportsDescriptors) {
	    var OrigRegExp = RegExp;
	    var RegExpShim = (function () {
	      return function RegExp(pattern, flags) {
	        var calledWithNew = this instanceof RegExp;
	        if (!calledWithNew && (Type.regex(pattern) || (pattern && pattern.constructor === RegExp))) {
	          return pattern;
	        }
	        if (Type.regex(pattern) && Type.string(flags)) {
	          return new RegExp(pattern.source, flags);
	        }
	        return new OrigRegExp(pattern, flags);
	      };
	    }());
	    wrapConstructor(OrigRegExp, RegExpShim, {
	      $input: true // Chrome < v39 & Opera < 26 have a nonstandard "$input" property
	    });
	    /*globals RegExp: true */
	    /* eslint-disable no-undef */
	    RegExp = RegExpShim;
	    Value.redefine(globals, 'RegExp', RegExpShim);
	    /* eslint-enable no-undef */
	    /*globals RegExp: false */
	  }
	
	  if (supportsDescriptors) {
	    var regexGlobals = {
	      input: '$_',
	      lastMatch: '$&',
	      lastParen: '$+',
	      leftContext: '$`',
	      rightContext: '$\''
	    };
	    _forEach(Object.keys(regexGlobals), function (prop) {
	      if (prop in RegExp && !(regexGlobals[prop] in RegExp)) {
	        Value.getter(RegExp, regexGlobals[prop], function get() {
	          return RegExp[prop];
	        });
	      }
	    });
	  }
	  addDefaultSpecies(RegExp);
	
	  var inverseEpsilon = 1 / Number.EPSILON;
	  var roundTiesToEven = function roundTiesToEven(n) {
	    // Even though this reduces down to `return n`, it takes advantage of built-in rounding.
	    return (n + inverseEpsilon) - inverseEpsilon;
	  };
	  var BINARY_32_EPSILON = Math.pow(2, -23);
	  var BINARY_32_MAX_VALUE = Math.pow(2, 127) * (2 - BINARY_32_EPSILON);
	  var BINARY_32_MIN_VALUE = Math.pow(2, -126);
	  var numberCLZ = Number.prototype.clz;
	  delete Number.prototype.clz; // Safari 8 has Number#clz
	
	  var MathShims = {
	    acosh: function acosh(value) {
	      var x = Number(value);
	      if (Number.isNaN(x) || value < 1) { return NaN; }
	      if (x === 1) { return 0; }
	      if (x === Infinity) { return x; }
	      return _log(x / Math.E + _sqrt(x + 1) * _sqrt(x - 1) / Math.E) + 1;
	    },
	
	    asinh: function asinh(value) {
	      var x = Number(value);
	      if (x === 0 || !globalIsFinite(x)) {
	        return x;
	      }
	      return x < 0 ? -Math.asinh(-x) : _log(x + _sqrt(x * x + 1));
	    },
	
	    atanh: function atanh(value) {
	      var x = Number(value);
	      if (Number.isNaN(x) || x < -1 || x > 1) {
	        return NaN;
	      }
	      if (x === -1) { return -Infinity; }
	      if (x === 1) { return Infinity; }
	      if (x === 0) { return x; }
	      return 0.5 * _log((1 + x) / (1 - x));
	    },
	
	    cbrt: function cbrt(value) {
	      var x = Number(value);
	      if (x === 0) { return x; }
	      var negate = x < 0, result;
	      if (negate) { x = -x; }
	      if (x === Infinity) {
	        result = Infinity;
	      } else {
	        result = Math.exp(_log(x) / 3);
	        // from http://en.wikipedia.org/wiki/Cube_root#Numerical_methods
	        result = (x / (result * result) + (2 * result)) / 3;
	      }
	      return negate ? -result : result;
	    },
	
	    clz32: function clz32(value) {
	      // See https://bugs.ecmascript.org/show_bug.cgi?id=2465
	      var x = Number(value);
	      var number = ES.ToUint32(x);
	      if (number === 0) {
	        return 32;
	      }
	      return numberCLZ ? _call(numberCLZ, number) : 31 - _floor(_log(number + 0.5) * Math.LOG2E);
	    },
	
	    cosh: function cosh(value) {
	      var x = Number(value);
	      if (x === 0) { return 1; } // +0 or -0
	      if (Number.isNaN(x)) { return NaN; }
	      if (!globalIsFinite(x)) { return Infinity; }
	      if (x < 0) { x = -x; }
	      if (x > 21) { return Math.exp(x) / 2; }
	      return (Math.exp(x) + Math.exp(-x)) / 2;
	    },
	
	    expm1: function expm1(value) {
	      var x = Number(value);
	      if (x === -Infinity) { return -1; }
	      if (!globalIsFinite(x) || x === 0) { return x; }
	      if (_abs(x) > 0.5) {
	        return Math.exp(x) - 1;
	      }
	      // A more precise approximation using Taylor series expansion
	      // from https://github.com/paulmillr/es6-shim/issues/314#issuecomment-70293986
	      var t = x;
	      var sum = 0;
	      var n = 1;
	      while (sum + t !== sum) {
	        sum += t;
	        n += 1;
	        t *= x / n;
	      }
	      return sum;
	    },
	
	    hypot: function hypot(x, y) {
	      var result = 0;
	      var largest = 0;
	      for (var i = 0; i < arguments.length; ++i) {
	        var value = _abs(Number(arguments[i]));
	        if (largest < value) {
	          result *= (largest / value) * (largest / value);
	          result += 1;
	          largest = value;
	        } else {
	          result += (value > 0 ? (value / largest) * (value / largest) : value);
	        }
	      }
	      return largest === Infinity ? Infinity : largest * _sqrt(result);
	    },
	
	    log2: function log2(value) {
	      return _log(value) * Math.LOG2E;
	    },
	
	    log10: function log10(value) {
	      return _log(value) * Math.LOG10E;
	    },
	
	    log1p: function log1p(value) {
	      var x = Number(value);
	      if (x < -1 || Number.isNaN(x)) { return NaN; }
	      if (x === 0 || x === Infinity) { return x; }
	      if (x === -1) { return -Infinity; }
	
	      return (1 + x) - 1 === 0 ? x : x * (_log(1 + x) / ((1 + x) - 1));
	    },
	
	    sign: function sign(value) {
	      var number = Number(value);
	      if (number === 0) { return number; }
	      if (Number.isNaN(number)) { return number; }
	      return number < 0 ? -1 : 1;
	    },
	
	    sinh: function sinh(value) {
	      var x = Number(value);
	      if (!globalIsFinite(x) || x === 0) { return x; }
	
	      if (_abs(x) < 1) {
	        return (Math.expm1(x) - Math.expm1(-x)) / 2;
	      }
	      return (Math.exp(x - 1) - Math.exp(-x - 1)) * Math.E / 2;
	    },
	
	    tanh: function tanh(value) {
	      var x = Number(value);
	      if (Number.isNaN(x) || x === 0) { return x; }
	      if (x === Infinity) { return 1; }
	      if (x === -Infinity) { return -1; }
	      var a = Math.expm1(x);
	      var b = Math.expm1(-x);
	      if (a === Infinity) { return 1; }
	      if (b === Infinity) { return -1; }
	      return (a - b) / (Math.exp(x) + Math.exp(-x));
	    },
	
	    trunc: function trunc(value) {
	      var x = Number(value);
	      return x < 0 ? -_floor(-x) : _floor(x);
	    },
	
	    imul: function imul(x, y) {
	      // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
	      var a = ES.ToUint32(x);
	      var b = ES.ToUint32(y);
	      var ah = (a >>> 16) & 0xffff;
	      var al = a & 0xffff;
	      var bh = (b >>> 16) & 0xffff;
	      var bl = b & 0xffff;
	      // the shift by 0 fixes the sign on the high part
	      // the final |0 converts the unsigned value into a signed value
	      return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
	    },
	
	    fround: function fround(x) {
	      var v = Number(x);
	      if (v === 0 || v === Infinity || v === -Infinity || numberIsNaN(v)) {
	        return v;
	      }
	      var sign = Math.sign(v);
	      var abs = _abs(v);
	      if (abs < BINARY_32_MIN_VALUE) {
	        return sign * roundTiesToEven(abs / BINARY_32_MIN_VALUE / BINARY_32_EPSILON) * BINARY_32_MIN_VALUE * BINARY_32_EPSILON;
	      }
	      // Veltkamp's splitting (?)
	      var a = (1 + BINARY_32_EPSILON / Number.EPSILON) * abs;
	      var result = a - (a - abs);
	      if (result > BINARY_32_MAX_VALUE || numberIsNaN(result)) {
	        return sign * Infinity;
	      }
	      return sign * result;
	    }
	  };
	  defineProperties(Math, MathShims);
	  // IE 11 TP has an imprecise log1p: reports Math.log1p(-1e-17) as 0
	  defineProperty(Math, 'log1p', MathShims.log1p, Math.log1p(-1e-17) !== -1e-17);
	  // IE 11 TP has an imprecise asinh: reports Math.asinh(-1e7) as not exactly equal to -Math.asinh(1e7)
	  defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7));
	  // Chrome 40 has an imprecise Math.tanh with very small numbers
	  defineProperty(Math, 'tanh', MathShims.tanh, Math.tanh(-2e-17) !== -2e-17);
	  // Chrome 40 loses Math.acosh precision with high numbers
	  defineProperty(Math, 'acosh', MathShims.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
	  // Firefox 38 on Windows
	  defineProperty(Math, 'cbrt', MathShims.cbrt, Math.abs(1 - Math.cbrt(1e-300) / 1e-100) / Number.EPSILON > 8);
	  // node 0.11 has an imprecise Math.sinh with very small numbers
	  defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(-2e-17) !== -2e-17);
	  // FF 35 on Linux reports 22025.465794806725 for Math.expm1(10)
	  var expm1OfTen = Math.expm1(10);
	  defineProperty(Math, 'expm1', MathShims.expm1, expm1OfTen > 22025.465794806719 || expm1OfTen < 22025.4657948067165168);
	
	  var origMathRound = Math.round;
	  // breaks in e.g. Safari 8, Internet Explorer 11, Opera 12
	  var roundHandlesBoundaryConditions = Math.round(0.5 - Number.EPSILON / 4) === 0 && Math.round(-0.5 + Number.EPSILON / 3.99) === 1;
	
	  // When engines use Math.floor(x + 0.5) internally, Math.round can be buggy for large integers.
	  // This behavior should be governed by "round to nearest, ties to even mode"
	  // see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-number-type
	  // These are the boundary cases where it breaks.
	  var smallestPositiveNumberWhereRoundBreaks = inverseEpsilon + 1;
	  var largestPositiveNumberWhereRoundBreaks = 2 * inverseEpsilon - 1;
	  var roundDoesNotIncreaseIntegers = [smallestPositiveNumberWhereRoundBreaks, largestPositiveNumberWhereRoundBreaks].every(function (num) {
	    return Math.round(num) === num;
	  });
	  defineProperty(Math, 'round', function round(x) {
	    var floor = _floor(x);
	    var ceil = floor === -1 ? -0 : floor + 1;
	    return x - floor < 0.5 ? floor : ceil;
	  }, !roundHandlesBoundaryConditions || !roundDoesNotIncreaseIntegers);
	  Value.preserveToString(Math.round, origMathRound);
	
	  var origImul = Math.imul;
	  if (Math.imul(0xffffffff, 5) !== -5) {
	    // Safari 6.1, at least, reports "0" for this value
	    Math.imul = MathShims.imul;
	    Value.preserveToString(Math.imul, origImul);
	  }
	  if (Math.imul.length !== 2) {
	    // Safari 8.0.4 has a length of 1
	    // fixed in https://bugs.webkit.org/show_bug.cgi?id=143658
	    overrideNative(Math, 'imul', function imul(x, y) {
	      return _apply(origImul, Math, arguments);
	    });
	  }
	
	  // Promises
	  // Simplest possible implementation; use a 3rd-party library if you
	  // want the best possible speed and/or long stack traces.
	  var PromiseShim = (function () {
	    var setTimeout = globals.setTimeout;
	    // some environments don't have setTimeout - no way to shim here.
	    if (typeof setTimeout !== 'function' && typeof setTimeout !== 'object') { return; }
	
	    ES.IsPromise = function (promise) {
	      if (!ES.TypeIsObject(promise)) {
	        return false;
	      }
	      if (typeof promise._promise === 'undefined') {
	        return false; // uninitialized, or missing our hidden field.
	      }
	      return true;
	    };
	
	    // "PromiseCapability" in the spec is what most promise implementations
	    // call a "deferred".
	    var PromiseCapability = function (C) {
	      if (!ES.IsConstructor(C)) {
	        throw new TypeError('Bad promise constructor');
	      }
	      var capability = this;
	      var resolver = function (resolve, reject) {
	        if (capability.resolve !== void 0 || capability.reject !== void 0) {
	          throw new TypeError('Bad Promise implementation!');
	        }
	        capability.resolve = resolve;
	        capability.reject = reject;
	      };
	      capability.promise = new C(resolver);
	      if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) {
	        throw new TypeError('Bad promise constructor');
	      }
	    };
	
	    // find an appropriate setImmediate-alike
	    var makeZeroTimeout;
	    /*global window */
	    if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) {
	      makeZeroTimeout = function () {
	        // from http://dbaron.org/log/20100309-faster-timeouts
	        var timeouts = [];
	        var messageName = 'zero-timeout-message';
	        var setZeroTimeout = function (fn) {
	          _push(timeouts, fn);
	          window.postMessage(messageName, '*');
	        };
	        var handleMessage = function (event) {
	          if (event.source === window && event.data === messageName) {
	            event.stopPropagation();
	            if (timeouts.length === 0) { return; }
	            var fn = _shift(timeouts);
	            fn();
	          }
	        };
	        window.addEventListener('message', handleMessage, true);
	        return setZeroTimeout;
	      };
	    }
	    var makePromiseAsap = function () {
	      // An efficient task-scheduler based on a pre-existing Promise
	      // implementation, which we can use even if we override the
	      // global Promise below (in order to workaround bugs)
	      // https://github.com/Raynos/observ-hash/issues/2#issuecomment-35857671
	      var P = globals.Promise;
	      return P && P.resolve && function (task) {
	        return P.resolve().then(task);
	      };
	    };
	    /*global process */
	    /* jscs:disable disallowMultiLineTernary */
	    var enqueue = ES.IsCallable(globals.setImmediate) ?
	      globals.setImmediate.bind(globals) :
	      typeof process === 'object' && process.nextTick ? process.nextTick :
	      makePromiseAsap() ||
	      (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() :
	      function (task) { setTimeout(task, 0); }); // fallback
	    /* jscs:enable disallowMultiLineTernary */
	
	    // Constants for Promise implementation
	    var PROMISE_IDENTITY = 1;
	    var PROMISE_THROWER = 2;
	    var PROMISE_PENDING = 3;
	    var PROMISE_FULFILLED = 4;
	    var PROMISE_REJECTED = 5;
	
	    var promiseReactionJob = function (reaction, argument) {
	      var promiseCapability = reaction.capabilities;
	      var handler = reaction.handler;
	      var handlerResult, handlerException = false, f;
	      if (handler === PROMISE_IDENTITY) {
	        handlerResult = argument;
	      } else if (handler === PROMISE_THROWER) {
	        handlerResult = argument;
	        handlerException = true;
	      } else {
	        try {
	          handlerResult = handler(argument);
	        } catch (e) {
	          handlerResult = e;
	          handlerException = true;
	        }
	      }
	      f = handlerException ? promiseCapability.reject : promiseCapability.resolve;
	      f(handlerResult);
	    };
	
	    var triggerPromiseReactions = function (reactions, argument) {
	      _forEach(reactions, function (reaction) {
	        enqueue(function () {
	          promiseReactionJob(reaction, argument);
	        });
	      });
	    };
	
	    var fulfillPromise = function (promise, value) {
	      var _promise = promise._promise;
	      var reactions = _promise.fulfillReactions;
	      _promise.result = value;
	      _promise.fulfillReactions = void 0;
	      _promise.rejectReactions = void 0;
	      _promise.state = PROMISE_FULFILLED;
	      triggerPromiseReactions(reactions, value);
	    };
	
	    var rejectPromise = function (promise, reason) {
	      var _promise = promise._promise;
	      var reactions = _promise.rejectReactions;
	      _promise.result = reason;
	      _promise.fulfillReactions = void 0;
	      _promise.rejectReactions = void 0;
	      _promise.state = PROMISE_REJECTED;
	      triggerPromiseReactions(reactions, reason);
	    };
	
	    var createResolvingFunctions = function (promise) {
	      var alreadyResolved = false;
	      var resolve = function (resolution) {
	        var then;
	        if (alreadyResolved) { return; }
	        alreadyResolved = true;
	        if (resolution === promise) {
	          return rejectPromise(promise, new TypeError('Self resolution'));
	        }
	        if (!ES.TypeIsObject(resolution)) {
	          return fulfillPromise(promise, resolution);
	        }
	        try {
	          then = resolution.then;
	        } catch (e) {
	          return rejectPromise(promise, e);
	        }
	        if (!ES.IsCallable(then)) {
	          return fulfillPromise(promise, resolution);
	        }
	        enqueue(function () {
	          promiseResolveThenableJob(promise, resolution, then);
	        });
	      };
	      var reject = function (reason) {
	        if (alreadyResolved) { return; }
	        alreadyResolved = true;
	        return rejectPromise(promise, reason);
	      };
	      return { resolve: resolve, reject: reject };
	    };
	
	    var promiseResolveThenableJob = function (promise, thenable, then) {
	      var resolvingFunctions = createResolvingFunctions(promise);
	      var resolve = resolvingFunctions.resolve;
	      var reject = resolvingFunctions.reject;
	      try {
	        _call(then, thenable, resolve, reject);
	      } catch (e) {
	        reject(e);
	      }
	    };
	
	    // This is a common step in many Promise methods
	    var getPromiseSpecies = function (C) {
	      if (!ES.TypeIsObject(C)) {
	        throw new TypeError('Promise is not object');
	      }
	      var S = C[symbolSpecies];
	      if (S !== void 0 && S !== null) {
	        return S;
	      }
	      return C;
	    };
	
	    var Promise$prototype;
	    var Promise = (function () {
	      var PromiseShim = function Promise(resolver) {
	        if (!(this instanceof PromiseShim)) {
	          throw new TypeError('Constructor Promise requires "new"');
	        }
	        if (this && this._promise) {
	          throw new TypeError('Bad construction');
	        }
	        // see https://bugs.ecmascript.org/show_bug.cgi?id=2482
	        if (!ES.IsCallable(resolver)) {
	          throw new TypeError('not a valid resolver');
	        }
	        var promise = emulateES6construct(this, PromiseShim, Promise$prototype, {
	          _promise: {
	            result: void 0,
	            state: PROMISE_PENDING,
	            fulfillReactions: [],
	            rejectReactions: []
	          }
	        });
	        var resolvingFunctions = createResolvingFunctions(promise);
	        var reject = resolvingFunctions.reject;
	        try {
	          resolver(resolvingFunctions.resolve, reject);
	        } catch (e) {
	          reject(e);
	        }
	        return promise;
	      };
	      return PromiseShim;
	    }());
	    Promise$prototype = Promise.prototype;
	
	    var _promiseAllResolver = function (index, values, capability, remaining) {
	      var alreadyCalled = false;
	      return function (x) {
	        if (alreadyCalled) { return; }
	        alreadyCalled = true;
	        values[index] = x;
	        if ((--remaining.count) === 0) {
	          var resolve = capability.resolve;
	          resolve(values); // call w/ this===undefined
	        }
	      };
	    };
	
	    var performPromiseAll = function (iteratorRecord, C, resultCapability) {
	      var it = iteratorRecord.iterator;
	      var values = [], remaining = { count: 1 }, next, nextValue;
	      var index = 0;
	      while (true) {
	        try {
	          next = ES.IteratorStep(it);
	          if (next === false) {
	            iteratorRecord.done = true;
	            break;
	          }
	          nextValue = next.value;
	        } catch (e) {
	          iteratorRecord.done = true;
	          throw e;
	        }
	        values[index] = void 0;
	        var nextPromise = C.resolve(nextValue);
	        var resolveElement = _promiseAllResolver(
	          index, values, resultCapability, remaining
	        );
	        remaining.count += 1;
	        nextPromise.then(resolveElement, resultCapability.reject);
	        index += 1;
	      }
	      if ((--remaining.count) === 0) {
	        var resolve = resultCapability.resolve;
	        resolve(values); // call w/ this===undefined
	      }
	      return resultCapability.promise;
	    };
	
	    var performPromiseRace = function (iteratorRecord, C, resultCapability) {
	      var it = iteratorRecord.iterator, next, nextValue, nextPromise;
	      while (true) {
	        try {
	          next = ES.IteratorStep(it);
	          if (next === false) {
	            // NOTE: If iterable has no items, resulting promise will never
	            // resolve; see:
	            // https://github.com/domenic/promises-unwrapping/issues/75
	            // https://bugs.ecmascript.org/show_bug.cgi?id=2515
	            iteratorRecord.done = true;
	            break;
	          }
	          nextValue = next.value;
	        } catch (e) {
	          iteratorRecord.done = true;
	          throw e;
	        }
	        nextPromise = C.resolve(nextValue);
	        nextPromise.then(resultCapability.resolve, resultCapability.reject);
	      }
	      return resultCapability.promise;
	    };
	
	    defineProperties(Promise, {
	      all: function all(iterable) {
	        var C = getPromiseSpecies(this);
	        var capability = new PromiseCapability(C);
	        var iterator, iteratorRecord;
	        try {
	          iterator = ES.GetIterator(iterable);
	          iteratorRecord = { iterator: iterator, done: false };
	          return performPromiseAll(iteratorRecord, C, capability);
	        } catch (e) {
	          var exception = e;
	          if (iteratorRecord && !iteratorRecord.done) {
	            try {
	              ES.IteratorClose(iterator, true);
	            } catch (ee) {
	              exception = ee;
	            }
	          }
	          var reject = capability.reject;
	          reject(exception);
	          return capability.promise;
	        }
	      },
	
	      race: function race(iterable) {
	        var C = getPromiseSpecies(this);
	        var capability = new PromiseCapability(C);
	        var iterator, iteratorRecord;
	        try {
	          iterator = ES.GetIterator(iterable);
	          iteratorRecord = { iterator: iterator, done: false };
	          return performPromiseRace(iteratorRecord, C, capability);
	        } catch (e) {
	          var exception = e;
	          if (iteratorRecord && !iteratorRecord.done) {
	            try {
	              ES.IteratorClose(iterator, true);
	            } catch (ee) {
	              exception = ee;
	            }
	          }
	          var reject = capability.reject;
	          reject(exception);
	          return capability.promise;
	        }
	      },
	
	      reject: function reject(reason) {
	        var C = this;
	        var capability = new PromiseCapability(C);
	        var rejectFunc = capability.reject;
	        rejectFunc(reason); // call with this===undefined
	        return capability.promise;
	      },
	
	      resolve: function resolve(v) {
	        // See https://esdiscuss.org/topic/fixing-promise-resolve for spec
	        var C = this;
	        if (ES.IsPromise(v)) {
	          var constructor = v.constructor;
	          if (constructor === C) { return v; }
	        }
	        var capability = new PromiseCapability(C);
	        var resolveFunc = capability.resolve;
	        resolveFunc(v); // call with this===undefined
	        return capability.promise;
	      }
	    });
	
	    defineProperties(Promise$prototype, {
	      'catch': function (onRejected) {
	        return this.then(void 0, onRejected);
	      },
	
	      then: function then(onFulfilled, onRejected) {
	        var promise = this;
	        if (!ES.IsPromise(promise)) { throw new TypeError('not a promise'); }
	        var C = ES.SpeciesConstructor(promise, Promise);
	        var resultCapability = new PromiseCapability(C);
	        // PerformPromiseThen(promise, onFulfilled, onRejected, resultCapability)
	        var fulfillReaction = {
	          capabilities: resultCapability,
	          handler: ES.IsCallable(onFulfilled) ? onFulfilled : PROMISE_IDENTITY
	        };
	        var rejectReaction = {
	          capabilities: resultCapability,
	          handler: ES.IsCallable(onRejected) ? onRejected : PROMISE_THROWER
	        };
	        var _promise = promise._promise;
	        var value;
	        if (_promise.state === PROMISE_PENDING) {
	          _push(_promise.fulfillReactions, fulfillReaction);
	          _push(_promise.rejectReactions, rejectReaction);
	        } else if (_promise.state === PROMISE_FULFILLED) {
	          value = _promise.result;
	          enqueue(function () {
	            promiseReactionJob(fulfillReaction, value);
	          });
	        } else if (_promise.state === PROMISE_REJECTED) {
	          value = _promise.result;
	          enqueue(function () {
	            promiseReactionJob(rejectReaction, value);
	          });
	        } else {
	          throw new TypeError('unexpected Promise state');
	        }
	        return resultCapability.promise;
	      }
	    });
	
	    return Promise;
	  }());
	
	  // Chrome's native Promise has extra methods that it shouldn't have. Let's remove them.
	  if (globals.Promise) {
	    delete globals.Promise.accept;
	    delete globals.Promise.defer;
	    delete globals.Promise.prototype.chain;
	  }
	
	  if (typeof PromiseShim === 'function') {
	    // export the Promise constructor.
	    defineProperties(globals, { Promise: PromiseShim });
	    // In Chrome 33 (and thereabouts) Promise is defined, but the
	    // implementation is buggy in a number of ways.  Let's check subclassing
	    // support to see if we have a buggy implementation.
	    var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function (S) {
	      return S.resolve(42).then(function () {}) instanceof S;
	    });
	    var promiseIgnoresNonFunctionThenCallbacks = !throwsError(function () { globals.Promise.reject(42).then(null, 5).then(null, noop); });
	    var promiseRequiresObjectContext = throwsError(function () { globals.Promise.call(3, noop); });
	    // Promise.resolve() was errata'ed late in the ES6 process.
	    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1170742
	    //      https://code.google.com/p/v8/issues/detail?id=4161
	    // It serves as a proxy for a number of other bugs in early Promise
	    // implementations.
	    var promiseResolveBroken = (function (Promise) {
	      var p = Promise.resolve(5);
	      p.constructor = {};
	      var p2 = Promise.resolve(p);
	      return (p === p2); // This *should* be false!
	    }(globals.Promise));
	    if (!promiseSupportsSubclassing || !promiseIgnoresNonFunctionThenCallbacks ||
	        !promiseRequiresObjectContext || promiseResolveBroken) {
	      /*globals Promise: true */
	      /* eslint-disable no-undef */
	      Promise = PromiseShim;
	      /* eslint-enable no-undef */
	      /*globals Promise: false */
	      overrideNative(globals, 'Promise', PromiseShim);
	    }
	    addDefaultSpecies(Promise);
	  }
	
	  // Map and Set require a true ES5 environment
	  // Their fast path also requires that the environment preserve
	  // property insertion order, which is not guaranteed by the spec.
	  var testOrder = function (a) {
	    var b = Object.keys(_reduce(a, function (o, k) {
	      o[k] = true;
	      return o;
	    }, {}));
	    return a.join(':') === b.join(':');
	  };
	  var preservesInsertionOrder = testOrder(['z', 'a', 'bb']);
	  // some engines (eg, Chrome) only preserve insertion order for string keys
	  var preservesNumericInsertionOrder = testOrder(['z', 1, 'a', '3', 2]);
	
	  if (supportsDescriptors) {
	
	    var fastkey = function fastkey(key) {
	      if (!preservesInsertionOrder) {
	        return null;
	      }
	      var type = typeof key;
	      if (type === 'undefined' || key === null) {
	        return '^' + String(key);
	      } else if (type === 'string') {
	        return '$' + key;
	      } else if (type === 'number') {
	        // note that -0 will get coerced to "0" when used as a property key
	        if (!preservesNumericInsertionOrder) {
	          return 'n' + key;
	        }
	        return key;
	      } else if (type === 'boolean') {
	        return 'b' + key;
	      }
	      return null;
	    };
	
	    var emptyObject = function emptyObject() {
	      // accomodate some older not-quite-ES5 browsers
	      return Object.create ? Object.create(null) : {};
	    };
	
	    var addIterableToMap = function addIterableToMap(MapConstructor, map, iterable) {
	      if (isArray(iterable) || Type.string(iterable)) {
	        _forEach(iterable, function (entry) {
	          map.set(entry[0], entry[1]);
	        });
	      } else if (iterable instanceof MapConstructor) {
	        _call(MapConstructor.prototype.forEach, iterable, function (value, key) {
	          map.set(key, value);
	        });
	      } else {
	        var iter, adder;
	        if (iterable !== null && typeof iterable !== 'undefined') {
	          adder = map.set;
	          if (!ES.IsCallable(adder)) { throw new TypeError('bad map'); }
	          iter = ES.GetIterator(iterable);
	        }
	        if (typeof iter !== 'undefined') {
	          while (true) {
	            var next = ES.IteratorStep(iter);
	            if (next === false) { break; }
	            var nextItem = next.value;
	            try {
	              if (!ES.TypeIsObject(nextItem)) {
	                throw new TypeError('expected iterable of pairs');
	              }
	              _call(adder, map, nextItem[0], nextItem[1]);
	            } catch (e) {
	              ES.IteratorClose(iter, true);
	              throw e;
	            }
	          }
	        }
	      }
	    };
	    var addIterableToSet = function addIterableToSet(SetConstructor, set, iterable) {
	      if (isArray(iterable) || Type.string(iterable)) {
	        _forEach(iterable, function (value) {
	          set.add(value);
	        });
	      } else if (iterable instanceof SetConstructor) {
	        _call(SetConstructor.prototype.forEach, iterable, function (value) {
	          set.add(value);
	        });
	      } else {
	        var iter, adder;
	        if (iterable !== null && typeof iterable !== 'undefined') {
	          adder = set.add;
	          if (!ES.IsCallable(adder)) { throw new TypeError('bad set'); }
	          iter = ES.GetIterator(iterable);
	        }
	        if (typeof iter !== 'undefined') {
	          while (true) {
	            var next = ES.IteratorStep(iter);
	            if (next === false) { break; }
	            var nextValue = next.value;
	            try {
	              _call(adder, set, nextValue);
	            } catch (e) {
	              ES.IteratorClose(iter, true);
	              throw e;
	            }
	          }
	        }
	      }
	    };
	
	    var collectionShims = {
	      Map: (function () {
	
	        var empty = {};
	
	        var MapEntry = function MapEntry(key, value) {
	          this.key = key;
	          this.value = value;
	          this.next = null;
	          this.prev = null;
	        };
	
	        MapEntry.prototype.isRemoved = function isRemoved() {
	          return this.key === empty;
	        };
	
	        var isMap = function isMap(map) {
	          return !!map._es6map;
	        };
	
	        var requireMapSlot = function requireMapSlot(map, method) {
	          if (!ES.TypeIsObject(map) || !isMap(map)) {
	            throw new TypeError('Method Map.prototype.' + method + ' called on incompatible receiver ' + String(map));
	          }
	        };
	
	        var MapIterator = function MapIterator(map, kind) {
	          requireMapSlot(map, '[[MapIterator]]');
	          this.head = map._head;
	          this.i = this.head;
	          this.kind = kind;
	        };
	
	        MapIterator.prototype = {
	          next: function next() {
	            var i = this.i, kind = this.kind, head = this.head, result;
	            if (typeof this.i === 'undefined') {
	              return { value: void 0, done: true };
	            }
	            while (i.isRemoved() && i !== head) {
	              // back up off of removed entries
	              i = i.prev;
	            }
	            // advance to next unreturned element.
	            while (i.next !== head) {
	              i = i.next;
	              if (!i.isRemoved()) {
	                if (kind === 'key') {
	                  result = i.key;
	                } else if (kind === 'value') {
	                  result = i.value;
	                } else {
	                  result = [i.key, i.value];
	                }
	                this.i = i;
	                return { value: result, done: false };
	              }
	            }
	            // once the iterator is done, it is done forever.
	            this.i = void 0;
	            return { value: void 0, done: true };
	          }
	        };
	        addIterator(MapIterator.prototype);
	
	        var Map$prototype;
	        var MapShim = function Map() {
	          if (!(this instanceof Map)) {
	            throw new TypeError('Constructor Map requires "new"');
	          }
	          if (this && this._es6map) {
	            throw new TypeError('Bad construction');
	          }
	          var map = emulateES6construct(this, Map, Map$prototype, {
	            _es6map: true,
	            _head: null,
	            _storage: emptyObject(),
	            _size: 0
	          });
	
	          var head = new MapEntry(null, null);
	          // circular doubly-linked list.
	          head.next = head.prev = head;
	          map._head = head;
	
	          // Optionally initialize map from iterable
	          if (arguments.length > 0) {
	            addIterableToMap(Map, map, arguments[0]);
	          }
	          return map;
	        };
	        Map$prototype = MapShim.prototype;
	
	        Value.getter(Map$prototype, 'size', function () {
	          if (typeof this._size === 'undefined') {
	            throw new TypeError('size method called on incompatible Map');
	          }
	          return this._size;
	        });
	
	        defineProperties(Map$prototype, {
	          get: function get(key) {
	            requireMapSlot(this, 'get');
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              var entry = this._storage[fkey];
	              if (entry) {
	                return entry.value;
	              } else {
	                return;
	              }
	            }
	            var head = this._head, i = head;
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                return i.value;
	              }
	            }
	          },
	
	          has: function has(key) {
	            requireMapSlot(this, 'has');
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              return typeof this._storage[fkey] !== 'undefined';
	            }
	            var head = this._head, i = head;
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                return true;
	              }
	            }
	            return false;
	          },
	
	          set: function set(key, value) {
	            requireMapSlot(this, 'set');
	            var head = this._head, i = head, entry;
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              if (typeof this._storage[fkey] !== 'undefined') {
	                this._storage[fkey].value = value;
	                return this;
	              } else {
	                entry = this._storage[fkey] = new MapEntry(key, value);
	                i = head.prev;
	                // fall through
	              }
	            }
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                i.value = value;
	                return this;
	              }
	            }
	            entry = entry || new MapEntry(key, value);
	            if (ES.SameValue(-0, key)) {
	              entry.key = +0; // coerce -0 to +0 in entry
	            }
	            entry.next = this._head;
	            entry.prev = this._head.prev;
	            entry.prev.next = entry;
	            entry.next.prev = entry;
	            this._size += 1;
	            return this;
	          },
	
	          'delete': function (key) {
	            requireMapSlot(this, 'delete');
	            var head = this._head, i = head;
	            var fkey = fastkey(key);
	            if (fkey !== null) {
	              // fast O(1) path
	              if (typeof this._storage[fkey] === 'undefined') {
	                return false;
	              }
	              i = this._storage[fkey].prev;
	              delete this._storage[fkey];
	              // fall through
	            }
	            while ((i = i.next) !== head) {
	              if (ES.SameValueZero(i.key, key)) {
	                i.key = i.value = empty;
	                i.prev.next = i.next;
	                i.next.prev = i.prev;
	                this._size -= 1;
	                return true;
	              }
	            }
	            return false;
	          },
	
	          clear: function clear() {
	            requireMapSlot(this, 'clear');
	            this._size = 0;
	            this._storage = emptyObject();
	            var head = this._head, i = head, p = i.next;
	            while ((i = p) !== head) {
	              i.key = i.value = empty;
	              p = i.next;
	              i.next = i.prev = head;
	            }
	            head.next = head.prev = head;
	          },
	
	          keys: function keys() {
	            requireMapSlot(this, 'keys');
	            return new MapIterator(this, 'key');
	          },
	
	          values: function values() {
	            requireMapSlot(this, 'values');
	            return new MapIterator(this, 'value');
	          },
	
	          entries: function entries() {
	            requireMapSlot(this, 'entries');
	            return new MapIterator(this, 'key+value');
	          },
	
	          forEach: function forEach(callback) {
	            requireMapSlot(this, 'forEach');
	            var context = arguments.length > 1 ? arguments[1] : null;
	            var it = this.entries();
	            for (var entry = it.next(); !entry.done; entry = it.next()) {
	              if (context) {
	                _call(callback, context, entry.value[1], entry.value[0], this);
	              } else {
	                callback(entry.value[1], entry.value[0], this);
	              }
	            }
	          }
	        });
	        addIterator(Map$prototype, Map$prototype.entries);
	
	        return MapShim;
	      }()),
	
	      Set: (function () {
	        var isSet = function isSet(set) {
	          return set._es6set && typeof set._storage !== 'undefined';
	        };
	        var requireSetSlot = function requireSetSlot(set, method) {
	          if (!ES.TypeIsObject(set) || !isSet(set)) {
	            // https://github.com/paulmillr/es6-shim/issues/176
	            throw new TypeError('Set.prototype.' + method + ' called on incompatible receiver ' + String(set));
	          }
	        };
	
	        // Creating a Map is expensive.  To speed up the common case of
	        // Sets containing only string or numeric keys, we use an object
	        // as backing storage and lazily create a full Map only when
	        // required.
	        var Set$prototype;
	        var SetShim = function Set() {
	          if (!(this instanceof Set)) {
	            throw new TypeError('Constructor Set requires "new"');
	          }
	          if (this && this._es6set) {
	            throw new TypeError('Bad construction');
	          }
	          var set = emulateES6construct(this, Set, Set$prototype, {
	            _es6set: true,
	            '[[SetData]]': null,
	            _storage: emptyObject()
	          });
	          if (!set._es6set) {
	            throw new TypeError('bad set');
	          }
	
	          // Optionally initialize Set from iterable
	          if (arguments.length > 0) {
	            addIterableToSet(Set, set, arguments[0]);
	          }
	          return set;
	        };
	        Set$prototype = SetShim.prototype;
	
	        // Switch from the object backing storage to a full Map.
	        var ensureMap = function ensureMap(set) {
	          if (!set['[[SetData]]']) {
	            var m = set['[[SetData]]'] = new collectionShims.Map();
	            _forEach(Object.keys(set._storage), function (key) {
	              var k = key;
	              if (k === '^null') {
	                k = null;
	              } else if (k === '^undefined') {
	                k = void 0;
	              } else {
	                var first = k.charAt(0);
	                if (first === '$') {
	                  k = _strSlice(k, 1);
	                } else if (first === 'n') {
	                  k = +_strSlice(k, 1);
	                } else if (first === 'b') {
	                  k = k === 'btrue';
	                } else {
	                  k = +k;
	                }
	              }
	              m.set(k, k);
	            });
	            set._storage = null; // free old backing storage
	          }
	        };
	
	        Value.getter(SetShim.prototype, 'size', function () {
	          requireSetSlot(this, 'size');
	          ensureMap(this);
	          return this['[[SetData]]'].size;
	        });
	
	        defineProperties(SetShim.prototype, {
	          has: function has(key) {
	            requireSetSlot(this, 'has');
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              return !!this._storage[fkey];
	            }
	            ensureMap(this);
	            return this['[[SetData]]'].has(key);
	          },
	
	          add: function add(key) {
	            requireSetSlot(this, 'add');
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              this._storage[fkey] = true;
	              return this;
	            }
	            ensureMap(this);
	            this['[[SetData]]'].set(key, key);
	            return this;
	          },
	
	          'delete': function (key) {
	            requireSetSlot(this, 'delete');
	            var fkey;
	            if (this._storage && (fkey = fastkey(key)) !== null) {
	              var hasFKey = _hasOwnProperty(this._storage, fkey);
	              return (delete this._storage[fkey]) && hasFKey;
	            }
	            ensureMap(this);
	            return this['[[SetData]]']['delete'](key);
	          },
	
	          clear: function clear() {
	            requireSetSlot(this, 'clear');
	            if (this._storage) {
	              this._storage = emptyObject();
	            } else {
	              this['[[SetData]]'].clear();
	            }
	          },
	
	          values: function values() {
	            requireSetSlot(this, 'values');
	            ensureMap(this);
	            return this['[[SetData]]'].values();
	          },
	
	          entries: function entries() {
	            requireSetSlot(this, 'entries');
	            ensureMap(this);
	            return this['[[SetData]]'].entries();
	          },
	
	          forEach: function forEach(callback) {
	            requireSetSlot(this, 'forEach');
	            var context = arguments.length > 1 ? arguments[1] : null;
	            var entireSet = this;
	            ensureMap(entireSet);
	            this['[[SetData]]'].forEach(function (value, key) {
	              if (context) {
	                _call(callback, context, key, key, entireSet);
	              } else {
	                callback(key, key, entireSet);
	              }
	            });
	          }
	        });
	        defineProperty(SetShim.prototype, 'keys', SetShim.prototype.values, true);
	        addIterator(SetShim.prototype, SetShim.prototype.values);
	
	        return SetShim;
	      }())
	    };
	
	    if (globals.Map || globals.Set) {
	      // Safari 8, for example, doesn't accept an iterable.
	      var mapAcceptsArguments = valueOrFalseIfThrows(function () { return new Map([[1, 2]]).get(1) === 2; });
	      if (!mapAcceptsArguments) {
	        var OrigMapNoArgs = globals.Map;
	        globals.Map = function Map() {
	          if (!(this instanceof Map)) {
	            throw new TypeError('Constructor Map requires "new"');
	          }
	          var m = new OrigMapNoArgs();
	          if (arguments.length > 0) {
	            addIterableToMap(Map, m, arguments[0]);
	          }
	          Object.setPrototypeOf(m, globals.Map.prototype);
	          defineProperty(m, 'constructor', Map, true);
	          return m;
	        };
	        globals.Map.prototype = create(OrigMapNoArgs.prototype);
	        Value.preserveToString(globals.Map, OrigMapNoArgs);
	      }
	      var testMap = new Map();
	      var mapUsesSameValueZero = (function (m) {
	        m['delete'](0);
	        m['delete'](-0);
	        m.set(0, 3);
	        m.get(-0, 4);
	        return m.get(0) === 3 && m.get(-0) === 4;
	      }(testMap));
	      var mapSupportsChaining = testMap.set(1, 2) === testMap;
	      if (!mapUsesSameValueZero || !mapSupportsChaining) {
	        var origMapSet = Map.prototype.set;
	        overrideNative(Map.prototype, 'set', function set(k, v) {
	          _call(origMapSet, this, k === 0 ? 0 : k, v);
	          return this;
	        });
	      }
	      if (!mapUsesSameValueZero) {
	        var origMapGet = Map.prototype.get;
	        var origMapHas = Map.prototype.has;
	        defineProperties(Map.prototype, {
	          get: function get(k) {
	            return _call(origMapGet, this, k === 0 ? 0 : k);
	          },
	          has: function has(k) {
	            return _call(origMapHas, this, k === 0 ? 0 : k);
	          }
	        }, true);
	        Value.preserveToString(Map.prototype.get, origMapGet);
	        Value.preserveToString(Map.prototype.has, origMapHas);
	      }
	      var testSet = new Set();
	      var setUsesSameValueZero = (function (s) {
	        s['delete'](0);
	        s.add(-0);
	        return !s.has(0);
	      }(testSet));
	      var setSupportsChaining = testSet.add(1) === testSet;
	      if (!setUsesSameValueZero || !setSupportsChaining) {
	        var origSetAdd = Set.prototype.add;
	        Set.prototype.add = function add(v) {
	          _call(origSetAdd, this, v === 0 ? 0 : v);
	          return this;
	        };
	        Value.preserveToString(Set.prototype.add, origSetAdd);
	      }
	      if (!setUsesSameValueZero) {
	        var origSetHas = Set.prototype.has;
	        Set.prototype.has = function has(v) {
	          return _call(origSetHas, this, v === 0 ? 0 : v);
	        };
	        Value.preserveToString(Set.prototype.has, origSetHas);
	        var origSetDel = Set.prototype['delete'];
	        Set.prototype['delete'] = function SetDelete(v) {
	          return _call(origSetDel, this, v === 0 ? 0 : v);
	        };
	        Value.preserveToString(Set.prototype['delete'], origSetDel);
	      }
	      var mapSupportsSubclassing = supportsSubclassing(globals.Map, function (M) {
	        var m = new M([]);
	        // Firefox 32 is ok with the instantiating the subclass but will
	        // throw when the map is used.
	        m.set(42, 42);
	        return m instanceof M;
	      });
	      var mapFailsToSupportSubclassing = Object.setPrototypeOf && !mapSupportsSubclassing; // without Object.setPrototypeOf, subclassing is not possible
	      var mapRequiresNew = (function () {
	        try {
	          return !(globals.Map() instanceof globals.Map);
	        } catch (e) {
	          return e instanceof TypeError;
	        }
	      }());
	      if (globals.Map.length !== 0 || mapFailsToSupportSubclassing || !mapRequiresNew) {
	        var OrigMap = globals.Map;
	        globals.Map = function Map() {
	          if (!(this instanceof Map)) {
	            throw new TypeError('Constructor Map requires "new"');
	          }
	          var m = new OrigMap();
	          if (arguments.length > 0) {
	            addIterableToMap(Map, m, arguments[0]);
	          }
	          Object.setPrototypeOf(m, Map.prototype);
	          defineProperty(m, 'constructor', Map, true);
	          return m;
	        };
	        globals.Map.prototype = OrigMap.prototype;
	        Value.preserveToString(globals.Map, OrigMap);
	      }
	      var setSupportsSubclassing = supportsSubclassing(globals.Set, function (S) {
	        var s = new S([]);
	        s.add(42, 42);
	        return s instanceof S;
	      });
	      var setFailsToSupportSubclassing = Object.setPrototypeOf && !setSupportsSubclassing; // without Object.setPrototypeOf, subclassing is not possible
	      var setRequiresNew = (function () {
	        try {
	          return !(globals.Set() instanceof globals.Set);
	        } catch (e) {
	          return e instanceof TypeError;
	        }
	      }());
	      if (globals.Set.length !== 0 || setFailsToSupportSubclassing || !setRequiresNew) {
	        var OrigSet = globals.Set;
	        globals.Set = function Set() {
	          if (!(this instanceof Set)) {
	            throw new TypeError('Constructor Set requires "new"');
	          }
	          var s = new OrigSet();
	          if (arguments.length > 0) {
	            addIterableToSet(Set, s, arguments[0]);
	          }
	          Object.setPrototypeOf(s, Set.prototype);
	          defineProperty(s, 'constructor', Set, true);
	          return s;
	        };
	        globals.Set.prototype = OrigSet.prototype;
	        Value.preserveToString(globals.Set, OrigSet);
	      }
	      var mapIterationThrowsStopIterator = !valueOrFalseIfThrows(function () {
	        return (new Map()).keys().next().done;
	      });
	      /*
	        - In Firefox < 23, Map#size is a function.
	        - In all current Firefox, Set#entries/keys/values & Map#clear do not exist
	        - https://bugzilla.mozilla.org/show_bug.cgi?id=869996
	        - In Firefox 24, Map and Set do not implement forEach
	        - In Firefox 25 at least, Map and Set are callable without "new"
	      */
	      if (
	        typeof globals.Map.prototype.clear !== 'function' ||
	        new globals.Set().size !== 0 ||
	        new globals.Map().size !== 0 ||
	        typeof globals.Map.prototype.keys !== 'function' ||
	        typeof globals.Set.prototype.keys !== 'function' ||
	        typeof globals.Map.prototype.forEach !== 'function' ||
	        typeof globals.Set.prototype.forEach !== 'function' ||
	        isCallableWithoutNew(globals.Map) ||
	        isCallableWithoutNew(globals.Set) ||
	        typeof (new globals.Map().keys().next) !== 'function' || // Safari 8
	        mapIterationThrowsStopIterator || // Firefox 25
	        !mapSupportsSubclassing
	      ) {
	        delete globals.Map; // necessary to overwrite in Safari 8
	        delete globals.Set; // necessary to overwrite in Safari 8
	        defineProperties(globals, {
	          Map: collectionShims.Map,
	          Set: collectionShims.Set
	        }, true);
	      }
	
	      if (globals.Set.prototype.keys !== globals.Set.prototype.values) {
	        // Fixed in WebKit with https://bugs.webkit.org/show_bug.cgi?id=144190
	        defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);
	      }
	
	      // Shim incomplete iterator implementations.
	      addIterator(Object.getPrototypeOf((new globals.Map()).keys()));
	      addIterator(Object.getPrototypeOf((new globals.Set()).keys()));
	
	      if (functionsHaveNames && globals.Set.prototype.has.name !== 'has') {
	        // Microsoft Edge v0.11.10074.0 is missing a name on Set#has
	        var anonymousSetHas = globals.Set.prototype.has;
	        overrideNative(globals.Set.prototype, 'has', function has(key) {
	          return _call(anonymousSetHas, this, key);
	        });
	      }
	    }
	    defineProperties(globals, collectionShims);
	    addDefaultSpecies(globals.Map);
	    addDefaultSpecies(globals.Set);
	  }
	
	  var throwUnlessTargetIsObject = function throwUnlessTargetIsObject(target) {
	    if (!ES.TypeIsObject(target)) {
	      throw new TypeError('target must be an object');
	    }
	  };
	
	  // Some Reflect methods are basically the same as
	  // those on the Object global, except that a TypeError is thrown if
	  // target isn't an object. As well as returning a boolean indicating
	  // the success of the operation.
	  var ReflectShims = {
	    // Apply method in a functional form.
	    apply: function apply() {
	      return _apply(ES.Call, null, arguments);
	    },
	
	    // New operator in a functional form.
	    construct: function construct(constructor, args) {
	      if (!ES.IsConstructor(constructor)) {
	        throw new TypeError('First argument must be a constructor.');
	      }
	      var newTarget = arguments.length < 3 ? constructor : arguments[2];
	      if (!ES.IsConstructor(newTarget)) {
	        throw new TypeError('new.target must be a constructor.');
	      }
	      return ES.Construct(constructor, args, newTarget, 'internal');
	    },
	
	    // When deleting a non-existent or configurable property,
	    // true is returned.
	    // When attempting to delete a non-configurable property,
	    // it will return false.
	    deleteProperty: function deleteProperty(target, key) {
	      throwUnlessTargetIsObject(target);
	      if (supportsDescriptors) {
	        var desc = Object.getOwnPropertyDescriptor(target, key);
	
	        if (desc && !desc.configurable) {
	          return false;
	        }
	      }
	
	      // Will return true.
	      return delete target[key];
	    },
	
	    enumerate: function enumerate(target) {
	      throwUnlessTargetIsObject(target);
	      return new ObjectIterator(target, 'key');
	    },
	
	    has: function has(target, key) {
	      throwUnlessTargetIsObject(target);
	      return key in target;
	    }
	  };
	
	  if (Object.getOwnPropertyNames) {
	    Object.assign(ReflectShims, {
	      // Basically the result of calling the internal [[OwnPropertyKeys]].
	      // Concatenating propertyNames and propertySymbols should do the trick.
	      // This should continue to work together with a Symbol shim
	      // which overrides Object.getOwnPropertyNames and implements
	      // Object.getOwnPropertySymbols.
	      ownKeys: function ownKeys(target) {
	        throwUnlessTargetIsObject(target);
	        var keys = Object.getOwnPropertyNames(target);
	
	        if (ES.IsCallable(Object.getOwnPropertySymbols)) {
	          _pushApply(keys, Object.getOwnPropertySymbols(target));
	        }
	
	        return keys;
	      }
	    });
	  }
	
	  var callAndCatchException = function ConvertExceptionToBoolean(func) {
	    return !throwsError(func);
	  };
	
	  if (Object.preventExtensions) {
	    Object.assign(ReflectShims, {
	      isExtensible: function isExtensible(target) {
	        throwUnlessTargetIsObject(target);
	        return Object.isExtensible(target);
	      },
	      preventExtensions: function preventExtensions(target) {
	        throwUnlessTargetIsObject(target);
	        return callAndCatchException(function () {
	          Object.preventExtensions(target);
	        });
	      }
	    });
	  }
	
	  if (supportsDescriptors) {
	    var internalGet = function get(target, key, receiver) {
	      var desc = Object.getOwnPropertyDescriptor(target, key);
	
	      if (!desc) {
	        var parent = Object.getPrototypeOf(target);
	
	        if (parent === null) {
	          return undefined;
	        }
	
	        return internalGet(parent, key, receiver);
	      }
	
	      if ('value' in desc) {
	        return desc.value;
	      }
	
	      if (desc.get) {
	        return _call(desc.get, receiver);
	      }
	
	      return undefined;
	    };
	
	    var internalSet = function set(target, key, value, receiver) {
	      var desc = Object.getOwnPropertyDescriptor(target, key);
	
	      if (!desc) {
	        var parent = Object.getPrototypeOf(target);
	
	        if (parent !== null) {
	          return internalSet(parent, key, value, receiver);
	        }
	
	        desc = {
	          value: void 0,
	          writable: true,
	          enumerable: true,
	          configurable: true
	        };
	      }
	
	      if ('value' in desc) {
	        if (!desc.writable) {
	          return false;
	        }
	
	        if (!ES.TypeIsObject(receiver)) {
	          return false;
	        }
	
	        var existingDesc = Object.getOwnPropertyDescriptor(receiver, key);
	
	        if (existingDesc) {
	          return Reflect.defineProperty(receiver, key, {
	            value: value
	          });
	        } else {
	          return Reflect.defineProperty(receiver, key, {
	            value: value,
	            writable: true,
	            enumerable: true,
	            configurable: true
	          });
	        }
	      }
	
	      if (desc.set) {
	        _call(desc.set, receiver, value);
	        return true;
	      }
	
	      return false;
	    };
	
	    Object.assign(ReflectShims, {
	      defineProperty: function defineProperty(target, propertyKey, attributes) {
	        throwUnlessTargetIsObject(target);
	        return callAndCatchException(function () {
	          Object.defineProperty(target, propertyKey, attributes);
	        });
	      },
	
	      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	        throwUnlessTargetIsObject(target);
	        return Object.getOwnPropertyDescriptor(target, propertyKey);
	      },
	
	      // Syntax in a functional form.
	      get: function get(target, key) {
	        throwUnlessTargetIsObject(target);
	        var receiver = arguments.length > 2 ? arguments[2] : target;
	
	        return internalGet(target, key, receiver);
	      },
	
	      set: function set(target, key, value) {
	        throwUnlessTargetIsObject(target);
	        var receiver = arguments.length > 3 ? arguments[3] : target;
	
	        return internalSet(target, key, value, receiver);
	      }
	    });
	  }
	
	  if (Object.getPrototypeOf) {
	    var objectDotGetPrototypeOf = Object.getPrototypeOf;
	    ReflectShims.getPrototypeOf = function getPrototypeOf(target) {
	      throwUnlessTargetIsObject(target);
	      return objectDotGetPrototypeOf(target);
	    };
	  }
	
	  if (Object.setPrototypeOf && ReflectShims.getPrototypeOf) {
	    var willCreateCircularPrototype = function (object, lastProto) {
	      var proto = lastProto;
	      while (proto) {
	        if (object === proto) {
	          return true;
	        }
	        proto = ReflectShims.getPrototypeOf(proto);
	      }
	      return false;
	    };
	
	    Object.assign(ReflectShims, {
	      // Sets the prototype of the given object.
	      // Returns true on success, otherwise false.
	      setPrototypeOf: function setPrototypeOf(object, proto) {
	        throwUnlessTargetIsObject(object);
	        if (proto !== null && !ES.TypeIsObject(proto)) {
	          throw new TypeError('proto must be an object or null');
	        }
	
	        // If they already are the same, we're done.
	        if (proto === Reflect.getPrototypeOf(object)) {
	          return true;
	        }
	
	        // Cannot alter prototype if object not extensible.
	        if (Reflect.isExtensible && !Reflect.isExtensible(object)) {
	          return false;
	        }
	
	        // Ensure that we do not create a circular prototype chain.
	        if (willCreateCircularPrototype(object, proto)) {
	          return false;
	        }
	
	        Object.setPrototypeOf(object, proto);
	
	        return true;
	      }
	    });
	  }
	  var defineOrOverrideReflectProperty = function (key, shim) {
	    if (!ES.IsCallable(globals.Reflect[key])) {
	      defineProperty(globals.Reflect, key, shim);
	    } else {
	      var acceptsPrimitives = valueOrFalseIfThrows(function () {
	        globals.Reflect[key](1);
	        globals.Reflect[key](NaN);
	        globals.Reflect[key](true);
	        return true;
	      });
	      if (acceptsPrimitives) {
	        overrideNative(globals.Reflect, key, shim);
	      }
	    }
	  };
	  Object.keys(ReflectShims).forEach(function (key) {
	    defineOrOverrideReflectProperty(key, ReflectShims[key]);
	  });
	  if (functionsHaveNames && globals.Reflect.getPrototypeOf.name !== 'getPrototypeOf') {
	    var originalReflectGetProto = globals.Reflect.getPrototypeOf;
	    overrideNative(globals.Reflect, 'getPrototypeOf', function getPrototypeOf(target) {
	      return _call(originalReflectGetProto, globals.Reflect, target);
	    });
	  }
	  if (globals.Reflect.setPrototypeOf) {
	    if (valueOrFalseIfThrows(function () {
	      globals.Reflect.setPrototypeOf(1, {});
	      return true;
	    })) {
	      overrideNative(globals.Reflect, 'setPrototypeOf', ReflectShims.setPrototypeOf);
	    }
	  }
	  if (globals.Reflect.defineProperty) {
	    if (!valueOrFalseIfThrows(function () {
	      var basic = !globals.Reflect.defineProperty(1, 'test', { value: 1 });
	      // "extensible" fails on Edge 0.12
	      var extensible = typeof Object.preventExtensions !== 'function' || !globals.Reflect.defineProperty(Object.preventExtensions({}), 'test', {});
	      return basic && extensible;
	    })) {
	      overrideNative(globals.Reflect, 'defineProperty', ReflectShims.defineProperty);
	    }
	  }
	  if (globals.Reflect.construct) {
	    if (!valueOrFalseIfThrows(function () {
	      var F = function F() {};
	      return globals.Reflect.construct(function () {}, [], F) instanceof F;
	    })) {
	      overrideNative(globals.Reflect, 'construct', ReflectShims.construct);
	    }
	  }
	
	  if (String(new Date(NaN)) !== 'Invalid Date') {
	    var dateToString = Date.prototype.toString;
	    var shimmedDateToString = function toString() {
	      var valueOf = +this;
	      if (valueOf !== valueOf) {
	        return 'Invalid Date';
	      }
	      return _call(dateToString, this);
	    };
	    overrideNative(Date.prototype, 'toString', shimmedDateToString);
	  }
	
	  // Annex B HTML methods
	  // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-additional-properties-of-the-string.prototype-object
	  var stringHTMLshims = {
	    anchor: function anchor(name) { return ES.CreateHTML(this, 'a', 'name', name); },
	    big: function big() { return ES.CreateHTML(this, 'big', '', ''); },
	    blink: function blink() { return ES.CreateHTML(this, 'blink', '', ''); },
	    bold: function bold() { return ES.CreateHTML(this, 'b', '', ''); },
	    fixed: function fixed() { return ES.CreateHTML(this, 'tt', '', ''); },
	    fontcolor: function fontcolor(color) { return ES.CreateHTML(this, 'font', 'color', color); },
	    fontsize: function fontsize(size) { return ES.CreateHTML(this, 'font', 'size', size); },
	    italics: function italics() { return ES.CreateHTML(this, 'i', '', ''); },
	    link: function link(url) { return ES.CreateHTML(this, 'a', 'href', url); },
	    small: function small() { return ES.CreateHTML(this, 'small', '', ''); },
	    strike: function strike() { return ES.CreateHTML(this, 'strike', '', ''); },
	    sub: function sub() { return ES.CreateHTML(this, 'sub', '', ''); },
	    sup: function sub() { return ES.CreateHTML(this, 'sup', '', ''); }
	  };
	  _forEach(Object.keys(stringHTMLshims), function (key) {
	    var method = String.prototype[key];
	    var shouldOverwrite = false;
	    if (ES.IsCallable(method)) {
	      var output = _call(method, '', ' " ');
	      var quotesCount = _concat([], output.match(/"/g)).length;
	      shouldOverwrite = output !== output.toLowerCase() || quotesCount > 2;
	    } else {
	      shouldOverwrite = true;
	    }
	    if (shouldOverwrite) {
	      overrideNative(String.prototype, key, stringHTMLshims[key]);
	    }
	  });
	
	  var JSONstringifiesSymbols = (function () {
	    // Microsoft Edge v0.12 stringifies Symbols incorrectly
	    if (!Type.symbol(Symbol.iterator)) { return false; } // Symbols are not supported
	    var stringify = typeof JSON === 'object' && typeof JSON.stringify === 'function' ? JSON.stringify : null;
	    if (!stringify) { return false; } // JSON.stringify is not supported
	    if (typeof stringify(Symbol()) !== 'undefined') { return true; } // Symbols should become `undefined`
	    if (stringify([Symbol()]) !== '[null]') { return true; } // Symbols in arrays should become `null`
	    var obj = { a: Symbol() };
	    obj[Symbol()] = true;
	    if (stringify(obj) !== '{}') { return true; } // Symbol-valued keys *and* Symbol-valued properties should be omitted
	    return false;
	  }());
	  var JSONstringifyAcceptsObjectSymbol = valueOrFalseIfThrows(function () {
	    // Chrome 45 throws on stringifying object symbols
	    if (!Type.symbol(Symbol.iterator)) { return true; } // Symbols are not supported
	    return JSON.stringify(Object(Symbol())) === '{}' && JSON.stringify([Object(Symbol())]) === '[{}]';
	  });
	  if (JSONstringifiesSymbols || !JSONstringifyAcceptsObjectSymbol) {
	    var origStringify = JSON.stringify;
	    overrideNative(JSON, 'stringify', function stringify(value) {
	      if (typeof value === 'symbol') { return; }
	      var replacer;
	      if (arguments.length > 1) {
	        replacer = arguments[1];
	      }
	      var args = [value];
	      if (!isArray(replacer)) {
	        var replaceFn = ES.IsCallable(replacer) ? replacer : null;
	        var wrappedReplacer = function (key, val) {
	          var parsedValue = replacer ? _call(replacer, this, key, val) : val;
	          if (typeof parsedValue !== 'symbol') {
	            if (Type.symbol(parsedValue)) {
	              return assignTo({})(parsedValue);
	            } else {
	              return parsedValue;
	            }
	          }
	        };
	        args.push(wrappedReplacer);
	      } else {
	        // create wrapped replacer that handles an array replacer?
	        args.push(replacer);
	      }
	      if (arguments.length > 2) {
	        args.push(arguments[2]);
	      }
	      return origStringify.apply(this, args);
	    });
	  }
	
	  return globals;
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(159)))

/***/ },
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */
/***/ function(module, exports) {

	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var long_stack_trace_1 = __webpack_require__(1);
		if (!global.Zone) {
		    throw new Error('zone.js should be installed before loading the long stack trace zone');
		}
		global.Zone.longStackTraceZone = long_stack_trace_1.longStackTraceZone;
			/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {/*
		 * Wrapped stacktrace
		 *
		 * We need this because in some implementations, constructing a trace is slow
		 * and so we want to defer accessing the trace for as long as possible
		 */
		'use strict';
		function _Stacktrace(e) {
		    this._e = e;
		}
		_Stacktrace.prototype.get = function () {
		    if (global.zone.stackFramesFilter && this._e.stack) {
		        return this._e.stack
		            .split('\n')
		            .filter(global.zone.stackFramesFilter)
		            .join('\n');
		    }
		    return this._e.stack;
		};
		function _getStacktraceWithUncaughtError() {
		    return new _Stacktrace(new Error());
		}
		function _getStacktraceWithCaughtError() {
		    try {
		        throw new Error();
		    }
		    catch (e) {
		        return new _Stacktrace(e);
		    }
		}
		// Some implementations of exception handling don't create a stack trace if the exception
		// isn't thrown, however it's faster not to actually throw the exception.
		var stack = _getStacktraceWithUncaughtError();
		var _getStacktrace = stack && stack._e.stack
		    ? _getStacktraceWithUncaughtError
		    : _getStacktraceWithCaughtError;
		exports.longStackTraceZone = {
		    getLongStacktrace: function (exception) {
		        var traces = [];
		        var currentZone = this;
		        if (exception) {
		            if (currentZone.stackFramesFilter && exception.stack) {
		                traces.push(exception.stack.split('\n')
		                    .filter(currentZone.stackFramesFilter)
		                    .join('\n'));
		            }
		            else {
		                traces.push(exception.stack);
		            }
		        }
		        var now = Date.now();
		        while (currentZone && currentZone.constructedAtException) {
		            traces.push('--- ' + (new Date(currentZone.constructedAtTime)).toString() +
		                ' - ' + (now - currentZone.constructedAtTime) + 'ms ago', currentZone.constructedAtException.get());
		            currentZone = currentZone.parent;
		        }
		        return traces.join('\n');
		    },
		    stackFramesFilter: function (line) {
		        return !/zone(-microtask)?(\.min)?\.js/.test(line);
		    },
		    onError: function (exception) {
		        var reporter = this.reporter || console.log.bind(console);
		        reporter(exception.toString());
		        reporter(this.getLongStacktrace(exception));
		    },
		    '$fork': function (parentFork) {
		        return function () {
		            var newZone = parentFork.apply(this, arguments);
		            newZone.constructedAtException = _getStacktrace();
		            newZone.constructedAtTime = Date.now();
		            return newZone;
		        };
		    }
		};
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZy1zdGFjay10cmFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi96b25lcy9sb25nLXN0YWNrLXRyYWNlLnRzIl0sIm5hbWVzIjpbIl9TdGFja3RyYWNlIiwiX2dldFN0YWNrdHJhY2VXaXRoVW5jYXVnaHRFcnJvciIsIl9nZXRTdGFja3RyYWNlV2l0aENhdWdodEVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRztBQUVILFlBQVksQ0FBQztBQUViLHFCQUFxQixDQUFDO0lBQ3BCQSxJQUFJQSxDQUFDQSxFQUFFQSxHQUFHQSxDQUFDQSxDQUFDQTtBQUNkQSxDQUFDQTtBQUVELFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHO0lBQzFCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7YUFDakIsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNYLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQztBQUVGO0lBQ0VDLE1BQU1BLENBQUNBLElBQUlBLFdBQVdBLENBQUNBLElBQUlBLEtBQUtBLEVBQUVBLENBQUNBLENBQUNBO0FBQ3RDQSxDQUFDQTtBQUVEO0lBQ0VDLElBQUlBLENBQUNBO1FBQ0hBLE1BQU1BLElBQUlBLEtBQUtBLEVBQUVBLENBQUNBO0lBQ3BCQSxDQUFFQTtJQUFBQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNYQSxNQUFNQSxDQUFDQSxJQUFJQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUM1QkEsQ0FBQ0E7QUFDSEEsQ0FBQ0E7QUFFRCx5RkFBeUY7QUFDekYseUVBQXlFO0FBQ3pFLElBQUksS0FBSyxHQUFHLCtCQUErQixFQUFFLENBQUM7QUFFOUMsSUFBSSxjQUFjLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSztNQUN4QywrQkFBK0I7TUFDL0IsNkJBQTZCLENBQUM7QUFFckIsMEJBQWtCLEdBQUc7SUFDaEMsaUJBQWlCLEVBQUUsVUFBVSxTQUFTO1FBQ3BDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDdkIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNkLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7cUJBQ2hDLE1BQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUM7cUJBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVyQixPQUFPLFdBQVcsSUFBSSxXQUFXLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUN6RCxNQUFNLENBQUMsSUFBSSxDQUNQLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUM3RCxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsUUFBUSxFQUN4RCxXQUFXLENBQUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUM5QyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUNuQyxDQUFDO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQixFQUFFLFVBQVUsSUFBSTtRQUMvQixNQUFNLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELE9BQU8sRUFBRSxVQUFVLFNBQVM7UUFDMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRCxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxPQUFPLEVBQUUsVUFBVSxVQUFVO1FBQzNCLE1BQU0sQ0FBQztZQUNMLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxzQkFBc0IsR0FBRyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxPQUFPLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogV3JhcHBlZCBzdGFja3RyYWNlXG4gKlxuICogV2UgbmVlZCB0aGlzIGJlY2F1c2UgaW4gc29tZSBpbXBsZW1lbnRhdGlvbnMsIGNvbnN0cnVjdGluZyBhIHRyYWNlIGlzIHNsb3dcbiAqIGFuZCBzbyB3ZSB3YW50IHRvIGRlZmVyIGFjY2Vzc2luZyB0aGUgdHJhY2UgZm9yIGFzIGxvbmcgYXMgcG9zc2libGVcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9TdGFja3RyYWNlKGUpIHtcbiAgdGhpcy5fZSA9IGU7XG59XG5cbl9TdGFja3RyYWNlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChnbG9iYWwuem9uZS5zdGFja0ZyYW1lc0ZpbHRlciAmJiB0aGlzLl9lLnN0YWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Uuc3RhY2tcbiAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgIC5maWx0ZXIoZ2xvYmFsLnpvbmUuc3RhY2tGcmFtZXNGaWx0ZXIpXG4gICAgICAuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5fZS5zdGFjaztcbn07XG5cbmZ1bmN0aW9uIF9nZXRTdGFja3RyYWNlV2l0aFVuY2F1Z2h0RXJyb3IgKCkge1xuICByZXR1cm4gbmV3IF9TdGFja3RyYWNlKG5ldyBFcnJvcigpKTtcbn1cblxuZnVuY3Rpb24gX2dldFN0YWNrdHJhY2VXaXRoQ2F1Z2h0RXJyb3IgKCkge1xuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG5ldyBfU3RhY2t0cmFjZShlKTtcbiAgfVxufVxuXG4vLyBTb21lIGltcGxlbWVudGF0aW9ucyBvZiBleGNlcHRpb24gaGFuZGxpbmcgZG9uJ3QgY3JlYXRlIGEgc3RhY2sgdHJhY2UgaWYgdGhlIGV4Y2VwdGlvblxuLy8gaXNuJ3QgdGhyb3duLCBob3dldmVyIGl0J3MgZmFzdGVyIG5vdCB0byBhY3R1YWxseSB0aHJvdyB0aGUgZXhjZXB0aW9uLlxudmFyIHN0YWNrID0gX2dldFN0YWNrdHJhY2VXaXRoVW5jYXVnaHRFcnJvcigpO1xuXG52YXIgX2dldFN0YWNrdHJhY2UgPSBzdGFjayAmJiBzdGFjay5fZS5zdGFja1xuICA/IF9nZXRTdGFja3RyYWNlV2l0aFVuY2F1Z2h0RXJyb3JcbiAgOiBfZ2V0U3RhY2t0cmFjZVdpdGhDYXVnaHRFcnJvcjtcblxuZXhwb3J0IGNvbnN0IGxvbmdTdGFja1RyYWNlWm9uZSA9IHtcbiAgZ2V0TG9uZ1N0YWNrdHJhY2U6IGZ1bmN0aW9uIChleGNlcHRpb24pIHtcbiAgICB2YXIgdHJhY2VzID0gW107XG4gICAgdmFyIGN1cnJlbnRab25lID0gdGhpcztcbiAgICBpZiAoZXhjZXB0aW9uKSB7XG4gICAgICBpZiAoY3VycmVudFpvbmUuc3RhY2tGcmFtZXNGaWx0ZXIgJiYgZXhjZXB0aW9uLnN0YWNrKSB7XG4gICAgICAgIHRyYWNlcy5wdXNoKGV4Y2VwdGlvbi5zdGFjay5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgICAgLmZpbHRlcihjdXJyZW50Wm9uZS5zdGFja0ZyYW1lc0ZpbHRlcilcbiAgICAgICAgICAgICAgLmpvaW4oJ1xcbicpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyYWNlcy5wdXNoKGV4Y2VwdGlvbi5zdGFjayk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuXG4gICAgd2hpbGUgKGN1cnJlbnRab25lICYmIGN1cnJlbnRab25lLmNvbnN0cnVjdGVkQXRFeGNlcHRpb24pIHtcbiAgICAgIHRyYWNlcy5wdXNoKFxuICAgICAgICAgICctLS0gJyArIChuZXcgRGF0ZShjdXJyZW50Wm9uZS5jb25zdHJ1Y3RlZEF0VGltZSkpLnRvU3RyaW5nKCkgK1xuICAgICAgICAgICcgLSAnICsgKG5vdyAtIGN1cnJlbnRab25lLmNvbnN0cnVjdGVkQXRUaW1lKSArICdtcyBhZ28nLFxuICAgICAgICAgIGN1cnJlbnRab25lLmNvbnN0cnVjdGVkQXRFeGNlcHRpb24uZ2V0KCkpO1xuICAgICAgY3VycmVudFpvbmUgPSBjdXJyZW50Wm9uZS5wYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYWNlcy5qb2luKCdcXG4nKTtcbiAgfSxcblxuICBzdGFja0ZyYW1lc0ZpbHRlcjogZnVuY3Rpb24gKGxpbmUpIHtcbiAgICByZXR1cm4gIS96b25lKC1taWNyb3Rhc2spPyhcXC5taW4pP1xcLmpzLy50ZXN0KGxpbmUpO1xuICB9LFxuXG4gIG9uRXJyb3I6IGZ1bmN0aW9uIChleGNlcHRpb24pIHtcbiAgICB2YXIgcmVwb3J0ZXIgPSB0aGlzLnJlcG9ydGVyIHx8IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG4gICAgcmVwb3J0ZXIoZXhjZXB0aW9uLnRvU3RyaW5nKCkpO1xuICAgIHJlcG9ydGVyKHRoaXMuZ2V0TG9uZ1N0YWNrdHJhY2UoZXhjZXB0aW9uKSk7XG4gIH0sXG5cbiAgJyRmb3JrJzogZnVuY3Rpb24gKHBhcmVudEZvcmspIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbmV3Wm9uZSA9IHBhcmVudEZvcmsuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIG5ld1pvbmUuY29uc3RydWN0ZWRBdEV4Y2VwdGlvbiA9IF9nZXRTdGFja3RyYWNlKCk7XG4gICAgICBuZXdab25lLmNvbnN0cnVjdGVkQXRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgIHJldHVybiBuZXdab25lO1xuICAgIH1cbiAgfVxufTtcblxuIl19
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ }
	/******/ ]);

/***/ },
/* 576 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {'use strict';
		var microtask = __webpack_require__(1);
		var es6Promise = __webpack_require__(2);
		var core = __webpack_require__(6);
		var browserPatch = __webpack_require__(10);
		if (core.Zone.prototype['scheduleMicrotask']) {
		    console.warn('Zone-microtasks already exported on window the object!');
		}
		else {
		    microtask.addMicrotaskSupport(core.Zone);
		    global.Zone = core.Zone;
		    global.zone = new global.Zone();
		    // Monkey patch the Promise implementation to add support for microtasks
		    global.Promise = es6Promise.Promise;
		    browserPatch.apply();
		}
			/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {// TODO(vicb): Create a benchmark for the different methods & the usage of the queue
		// see https://github.com/angular/zone.js/issues/97
		// It is required to initialize hasNativePromise before requiring es6-promise otherwise es6-promise would
		// overwrite the native Promise implementation on v8 and the check would always return false.
		// see https://github.com/jakearchibald/es6-promise/issues/140
		var hasNativePromise = typeof Promise !== "undefined" &&
		    Promise.toString().indexOf("[native code]") !== -1;
		var isFirefox = global.navigator &&
		    global.navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
		var resolvedPromise;
		// TODO(vicb): remove '!isFirefox' when the bug gets fixed:
		// https://bugzilla.mozilla.org/show_bug.cgi?id=1162013
		if (hasNativePromise && !isFirefox) {
		    // When available use a native Promise to schedule microtasks.
		    // When not available, es6-promise fallback will be used
		    resolvedPromise = Promise.resolve();
		}
		var es6Promise = __webpack_require__(2).Promise;
		if (resolvedPromise) {
		    es6Promise._setScheduler(function (fn) {
		        resolvedPromise.then(fn);
		    });
		}
		// es6-promise asap should schedule microtasks via zone.scheduleMicrotask so that any
		// user defined hooks are triggered
		es6Promise._setAsap(function (fn, arg) {
		    global.zone.scheduleMicrotask(function () {
		        fn(arg);
		    });
		});
		// The default implementation of scheduleMicrotask use the original es6-promise implementation
		// to schedule a microtask
		function scheduleMicrotask(fn) {
		    es6Promise._asap(this.bind(fn));
		}
		function addMicrotaskSupport(zoneClass) {
		    zoneClass.prototype.scheduleMicrotask = scheduleMicrotask;
		    return zoneClass;
		}
		exports.addMicrotaskSupport = addMicrotaskSupport;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWljcm90YXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL21pY3JvdGFzay50cyJdLCJuYW1lcyI6WyJzY2hlZHVsZU1pY3JvdGFzayIsImFkZE1pY3JvdGFza1N1cHBvcnQiXSwibWFwcGluZ3MiOiJBQUFBLG9GQUFvRjtBQUNwRixtREFBbUQ7QUFFbkQseUdBQXlHO0FBQ3pHLDZGQUE2RjtBQUM3Riw4REFBOEQ7QUFDOUQsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLE9BQU8sS0FBSyxXQUFXO0lBQ2pELE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFFdkQsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVM7SUFDNUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRXJFLElBQUksZUFBZSxDQUFDO0FBRXBCLDJEQUEyRDtBQUMzRCx1REFBdUQ7QUFDdkQsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25DLDhEQUE4RDtJQUM5RCx3REFBd0Q7SUFDeEQsZUFBZSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN0QyxDQUFDO0FBRUQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUVoRCxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLFVBQVUsQ0FBQyxhQUFhLENBQUMsVUFBUyxFQUFFO1FBQ2xDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQscUZBQXFGO0FBQ3JGLG1DQUFtQztBQUNuQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVMsRUFBRSxFQUFFLEdBQUc7SUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUM1QixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsOEZBQThGO0FBQzlGLDBCQUEwQjtBQUMxQiwyQkFBMkIsRUFBRTtJQUMzQkEsVUFBVUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7QUFDbENBLENBQUNBO0FBRUQsNkJBQW9DLFNBQVM7SUFDM0NDLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLGlCQUFpQkEsR0FBR0EsaUJBQWlCQSxDQUFDQTtJQUMxREEsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7QUFDbkJBLENBQUNBO0FBSGUsMkJBQW1CLHNCQUdsQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETyh2aWNiKTogQ3JlYXRlIGEgYmVuY2htYXJrIGZvciB0aGUgZGlmZmVyZW50IG1ldGhvZHMgJiB0aGUgdXNhZ2Ugb2YgdGhlIHF1ZXVlXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvOTdcblxuLy8gSXQgaXMgcmVxdWlyZWQgdG8gaW5pdGlhbGl6ZSBoYXNOYXRpdmVQcm9taXNlIGJlZm9yZSByZXF1aXJpbmcgZXM2LXByb21pc2Ugb3RoZXJ3aXNlIGVzNi1wcm9taXNlIHdvdWxkXG4vLyBvdmVyd3JpdGUgdGhlIG5hdGl2ZSBQcm9taXNlIGltcGxlbWVudGF0aW9uIG9uIHY4IGFuZCB0aGUgY2hlY2sgd291bGQgYWx3YXlzIHJldHVybiBmYWxzZS5cbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vamFrZWFyY2hpYmFsZC9lczYtcHJvbWlzZS9pc3N1ZXMvMTQwXG52YXIgaGFzTmF0aXZlUHJvbWlzZSA9IHR5cGVvZiBQcm9taXNlICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgUHJvbWlzZS50b1N0cmluZygpLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcblxudmFyIGlzRmlyZWZveCA9IGdsb2JhbC5uYXZpZ2F0b3IgJiZcbiAgICBnbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xO1xuXG52YXIgcmVzb2x2ZWRQcm9taXNlO1xuXG4vLyBUT0RPKHZpY2IpOiByZW1vdmUgJyFpc0ZpcmVmb3gnIHdoZW4gdGhlIGJ1ZyBnZXRzIGZpeGVkOlxuLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTE2MjAxM1xuaWYgKGhhc05hdGl2ZVByb21pc2UgJiYgIWlzRmlyZWZveCkge1xuICAvLyBXaGVuIGF2YWlsYWJsZSB1c2UgYSBuYXRpdmUgUHJvbWlzZSB0byBzY2hlZHVsZSBtaWNyb3Rhc2tzLlxuICAvLyBXaGVuIG5vdCBhdmFpbGFibGUsIGVzNi1wcm9taXNlIGZhbGxiYWNrIHdpbGwgYmUgdXNlZFxuICByZXNvbHZlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbn1cblxudmFyIGVzNlByb21pc2UgPSByZXF1aXJlKCdlczYtcHJvbWlzZScpLlByb21pc2U7XG5cbmlmIChyZXNvbHZlZFByb21pc2UpIHtcbiAgZXM2UHJvbWlzZS5fc2V0U2NoZWR1bGVyKGZ1bmN0aW9uKGZuKSB7XG4gICAgcmVzb2x2ZWRQcm9taXNlLnRoZW4oZm4pO1xuICB9KTtcbn1cblxuLy8gZXM2LXByb21pc2UgYXNhcCBzaG91bGQgc2NoZWR1bGUgbWljcm90YXNrcyB2aWEgem9uZS5zY2hlZHVsZU1pY3JvdGFzayBzbyB0aGF0IGFueVxuLy8gdXNlciBkZWZpbmVkIGhvb2tzIGFyZSB0cmlnZ2VyZWRcbmVzNlByb21pc2UuX3NldEFzYXAoZnVuY3Rpb24oZm4sIGFyZykge1xuICBnbG9iYWwuem9uZS5zY2hlZHVsZU1pY3JvdGFzayhmdW5jdGlvbigpIHtcbiAgICBmbihhcmcpO1xuICB9KTtcbn0pO1xuXG4vLyBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiBzY2hlZHVsZU1pY3JvdGFzayB1c2UgdGhlIG9yaWdpbmFsIGVzNi1wcm9taXNlIGltcGxlbWVudGF0aW9uXG4vLyB0byBzY2hlZHVsZSBhIG1pY3JvdGFza1xuZnVuY3Rpb24gc2NoZWR1bGVNaWNyb3Rhc2soZm4pIHtcbiAgZXM2UHJvbWlzZS5fYXNhcCh0aGlzLmJpbmQoZm4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE1pY3JvdGFza1N1cHBvcnQoem9uZUNsYXNzKSB7XG4gIHpvbmVDbGFzcy5wcm90b3R5cGUuc2NoZWR1bGVNaWNyb3Rhc2sgPSBzY2hlZHVsZU1pY3JvdGFzaztcbiAgcmV0dXJuIHpvbmVDbGFzcztcbn1cbiJdfQ==
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
		 * @version   3.0.2
		 */

		(function() {
		    "use strict";
		    function lib$es6$promise$utils$$objectOrFunction(x) {
		      return typeof x === 'function' || (typeof x === 'object' && x !== null);
		    }

		    function lib$es6$promise$utils$$isFunction(x) {
		      return typeof x === 'function';
		    }

		    function lib$es6$promise$utils$$isMaybeThenable(x) {
		      return typeof x === 'object' && x !== null;
		    }

		    var lib$es6$promise$utils$$_isArray;
		    if (!Array.isArray) {
		      lib$es6$promise$utils$$_isArray = function (x) {
		        return Object.prototype.toString.call(x) === '[object Array]';
		      };
		    } else {
		      lib$es6$promise$utils$$_isArray = Array.isArray;
		    }

		    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
		    var lib$es6$promise$asap$$len = 0;
		    var lib$es6$promise$asap$$toString = {}.toString;
		    var lib$es6$promise$asap$$vertxNext;
		    var lib$es6$promise$asap$$customSchedulerFn;

		    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
		      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
		      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
		      lib$es6$promise$asap$$len += 2;
		      if (lib$es6$promise$asap$$len === 2) {
		        // If len is 2, that means that we need to schedule an async flush.
		        // If additional callbacks are queued before the queue is flushed, they
		        // will be processed by this flush that we are scheduling.
		        if (lib$es6$promise$asap$$customSchedulerFn) {
		          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
		        } else {
		          lib$es6$promise$asap$$scheduleFlush();
		        }
		      }
		    }

		    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
		      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
		    }

		    function lib$es6$promise$asap$$setAsap(asapFn) {
		      lib$es6$promise$asap$$asap = asapFn;
		    }

		    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
		    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
		    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
		    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

		    // test for web worker but not in IE10
		    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
		      typeof importScripts !== 'undefined' &&
		      typeof MessageChannel !== 'undefined';

		    // node
		    function lib$es6$promise$asap$$useNextTick() {
		      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
		      // see https://github.com/cujojs/when/issues/410 for details
		      return function() {
		        process.nextTick(lib$es6$promise$asap$$flush);
		      };
		    }

		    // vertx
		    function lib$es6$promise$asap$$useVertxTimer() {
		      return function() {
		        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
		      };
		    }

		    function lib$es6$promise$asap$$useMutationObserver() {
		      var iterations = 0;
		      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
		      var node = document.createTextNode('');
		      observer.observe(node, { characterData: true });

		      return function() {
		        node.data = (iterations = ++iterations % 2);
		      };
		    }

		    // web worker
		    function lib$es6$promise$asap$$useMessageChannel() {
		      var channel = new MessageChannel();
		      channel.port1.onmessage = lib$es6$promise$asap$$flush;
		      return function () {
		        channel.port2.postMessage(0);
		      };
		    }

		    function lib$es6$promise$asap$$useSetTimeout() {
		      return function() {
		        setTimeout(lib$es6$promise$asap$$flush, 1);
		      };
		    }

		    var lib$es6$promise$asap$$queue = new Array(1000);
		    function lib$es6$promise$asap$$flush() {
		      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
		        var callback = lib$es6$promise$asap$$queue[i];
		        var arg = lib$es6$promise$asap$$queue[i+1];

		        callback(arg);

		        lib$es6$promise$asap$$queue[i] = undefined;
		        lib$es6$promise$asap$$queue[i+1] = undefined;
		      }

		      lib$es6$promise$asap$$len = 0;
		    }

		    function lib$es6$promise$asap$$attemptVertx() {
		      try {
		        var r = require;
		        var vertx = __webpack_require__(4);
		        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
		        return lib$es6$promise$asap$$useVertxTimer();
		      } catch(e) {
		        return lib$es6$promise$asap$$useSetTimeout();
		      }
		    }

		    var lib$es6$promise$asap$$scheduleFlush;
		    // Decide what async method to use to triggering processing of queued callbacks:
		    if (lib$es6$promise$asap$$isNode) {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
		    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
		    } else if (lib$es6$promise$asap$$isWorker) {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
		    } else if (lib$es6$promise$asap$$browserWindow === undefined && "function" === 'function') {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
		    } else {
		      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
		    }

		    function lib$es6$promise$$internal$$noop() {}

		    var lib$es6$promise$$internal$$PENDING   = void 0;
		    var lib$es6$promise$$internal$$FULFILLED = 1;
		    var lib$es6$promise$$internal$$REJECTED  = 2;

		    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

		    function lib$es6$promise$$internal$$selfFulfillment() {
		      return new TypeError("You cannot resolve a promise with itself");
		    }

		    function lib$es6$promise$$internal$$cannotReturnOwn() {
		      return new TypeError('A promises callback cannot return that same promise.');
		    }

		    function lib$es6$promise$$internal$$getThen(promise) {
		      try {
		        return promise.then;
		      } catch(error) {
		        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
		        return lib$es6$promise$$internal$$GET_THEN_ERROR;
		      }
		    }

		    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
		      try {
		        then.call(value, fulfillmentHandler, rejectionHandler);
		      } catch(e) {
		        return e;
		      }
		    }

		    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
		       lib$es6$promise$asap$$asap(function(promise) {
		        var sealed = false;
		        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
		          if (sealed) { return; }
		          sealed = true;
		          if (thenable !== value) {
		            lib$es6$promise$$internal$$resolve(promise, value);
		          } else {
		            lib$es6$promise$$internal$$fulfill(promise, value);
		          }
		        }, function(reason) {
		          if (sealed) { return; }
		          sealed = true;

		          lib$es6$promise$$internal$$reject(promise, reason);
		        }, 'Settle: ' + (promise._label || ' unknown promise'));

		        if (!sealed && error) {
		          sealed = true;
		          lib$es6$promise$$internal$$reject(promise, error);
		        }
		      }, promise);
		    }

		    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
		      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
		        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
		      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
		        lib$es6$promise$$internal$$reject(promise, thenable._result);
		      } else {
		        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
		          lib$es6$promise$$internal$$resolve(promise, value);
		        }, function(reason) {
		          lib$es6$promise$$internal$$reject(promise, reason);
		        });
		      }
		    }

		    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
		      if (maybeThenable.constructor === promise.constructor) {
		        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
		      } else {
		        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

		        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
		          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
		        } else if (then === undefined) {
		          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
		        } else if (lib$es6$promise$utils$$isFunction(then)) {
		          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
		        } else {
		          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
		        }
		      }
		    }

		    function lib$es6$promise$$internal$$resolve(promise, value) {
		      if (promise === value) {
		        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
		      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
		        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
		      } else {
		        lib$es6$promise$$internal$$fulfill(promise, value);
		      }
		    }

		    function lib$es6$promise$$internal$$publishRejection(promise) {
		      if (promise._onerror) {
		        promise._onerror(promise._result);
		      }

		      lib$es6$promise$$internal$$publish(promise);
		    }

		    function lib$es6$promise$$internal$$fulfill(promise, value) {
		      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

		      promise._result = value;
		      promise._state = lib$es6$promise$$internal$$FULFILLED;

		      if (promise._subscribers.length !== 0) {
		        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
		      }
		    }

		    function lib$es6$promise$$internal$$reject(promise, reason) {
		      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
		      promise._state = lib$es6$promise$$internal$$REJECTED;
		      promise._result = reason;

		      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
		    }

		    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
		      var subscribers = parent._subscribers;
		      var length = subscribers.length;

		      parent._onerror = null;

		      subscribers[length] = child;
		      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
		      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

		      if (length === 0 && parent._state) {
		        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
		      }
		    }

		    function lib$es6$promise$$internal$$publish(promise) {
		      var subscribers = promise._subscribers;
		      var settled = promise._state;

		      if (subscribers.length === 0) { return; }

		      var child, callback, detail = promise._result;

		      for (var i = 0; i < subscribers.length; i += 3) {
		        child = subscribers[i];
		        callback = subscribers[i + settled];

		        if (child) {
		          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
		        } else {
		          callback(detail);
		        }
		      }

		      promise._subscribers.length = 0;
		    }

		    function lib$es6$promise$$internal$$ErrorObject() {
		      this.error = null;
		    }

		    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

		    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
		      try {
		        return callback(detail);
		      } catch(e) {
		        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
		        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
		      }
		    }

		    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
		      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
		          value, error, succeeded, failed;

		      if (hasCallback) {
		        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

		        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
		          failed = true;
		          error = value.error;
		          value = null;
		        } else {
		          succeeded = true;
		        }

		        if (promise === value) {
		          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
		          return;
		        }

		      } else {
		        value = detail;
		        succeeded = true;
		      }

		      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
		        // noop
		      } else if (hasCallback && succeeded) {
		        lib$es6$promise$$internal$$resolve(promise, value);
		      } else if (failed) {
		        lib$es6$promise$$internal$$reject(promise, error);
		      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
		        lib$es6$promise$$internal$$fulfill(promise, value);
		      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
		        lib$es6$promise$$internal$$reject(promise, value);
		      }
		    }

		    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
		      try {
		        resolver(function resolvePromise(value){
		          lib$es6$promise$$internal$$resolve(promise, value);
		        }, function rejectPromise(reason) {
		          lib$es6$promise$$internal$$reject(promise, reason);
		        });
		      } catch(e) {
		        lib$es6$promise$$internal$$reject(promise, e);
		      }
		    }

		    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
		      var enumerator = this;

		      enumerator._instanceConstructor = Constructor;
		      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

		      if (enumerator._validateInput(input)) {
		        enumerator._input     = input;
		        enumerator.length     = input.length;
		        enumerator._remaining = input.length;

		        enumerator._init();

		        if (enumerator.length === 0) {
		          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
		        } else {
		          enumerator.length = enumerator.length || 0;
		          enumerator._enumerate();
		          if (enumerator._remaining === 0) {
		            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
		          }
		        }
		      } else {
		        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
		      }
		    }

		    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
		      return lib$es6$promise$utils$$isArray(input);
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
		      return new Error('Array Methods must be provided an Array');
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
		      this._result = new Array(this.length);
		    };

		    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

		    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
		      var enumerator = this;

		      var length  = enumerator.length;
		      var promise = enumerator.promise;
		      var input   = enumerator._input;

		      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
		        enumerator._eachEntry(input[i], i);
		      }
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
		      var enumerator = this;
		      var c = enumerator._instanceConstructor;

		      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
		        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
		          entry._onerror = null;
		          enumerator._settledAt(entry._state, i, entry._result);
		        } else {
		          enumerator._willSettleAt(c.resolve(entry), i);
		        }
		      } else {
		        enumerator._remaining--;
		        enumerator._result[i] = entry;
		      }
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
		      var enumerator = this;
		      var promise = enumerator.promise;

		      if (promise._state === lib$es6$promise$$internal$$PENDING) {
		        enumerator._remaining--;

		        if (state === lib$es6$promise$$internal$$REJECTED) {
		          lib$es6$promise$$internal$$reject(promise, value);
		        } else {
		          enumerator._result[i] = value;
		        }
		      }

		      if (enumerator._remaining === 0) {
		        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
		      }
		    };

		    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
		      var enumerator = this;

		      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
		        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
		      }, function(reason) {
		        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
		      });
		    };
		    function lib$es6$promise$promise$all$$all(entries) {
		      return new lib$es6$promise$enumerator$$default(this, entries).promise;
		    }
		    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
		    function lib$es6$promise$promise$race$$race(entries) {
		      /*jshint validthis:true */
		      var Constructor = this;

		      var promise = new Constructor(lib$es6$promise$$internal$$noop);

		      if (!lib$es6$promise$utils$$isArray(entries)) {
		        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
		        return promise;
		      }

		      var length = entries.length;

		      function onFulfillment(value) {
		        lib$es6$promise$$internal$$resolve(promise, value);
		      }

		      function onRejection(reason) {
		        lib$es6$promise$$internal$$reject(promise, reason);
		      }

		      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
		        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
		      }

		      return promise;
		    }
		    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
		    function lib$es6$promise$promise$resolve$$resolve(object) {
		      /*jshint validthis:true */
		      var Constructor = this;

		      if (object && typeof object === 'object' && object.constructor === Constructor) {
		        return object;
		      }

		      var promise = new Constructor(lib$es6$promise$$internal$$noop);
		      lib$es6$promise$$internal$$resolve(promise, object);
		      return promise;
		    }
		    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
		    function lib$es6$promise$promise$reject$$reject(reason) {
		      /*jshint validthis:true */
		      var Constructor = this;
		      var promise = new Constructor(lib$es6$promise$$internal$$noop);
		      lib$es6$promise$$internal$$reject(promise, reason);
		      return promise;
		    }
		    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

		    var lib$es6$promise$promise$$counter = 0;

		    function lib$es6$promise$promise$$needsResolver() {
		      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
		    }

		    function lib$es6$promise$promise$$needsNew() {
		      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
		    }

		    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
		    /**
		      Promise objects represent the eventual result of an asynchronous operation. The
		      primary way of interacting with a promise is through its `then` method, which
		      registers callbacks to receive either a promise's eventual value or the reason
		      why the promise cannot be fulfilled.

		      Terminology
		      -----------

		      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
		      - `thenable` is an object or function that defines a `then` method.
		      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
		      - `exception` is a value that is thrown using the throw statement.
		      - `reason` is a value that indicates why a promise was rejected.
		      - `settled` the final resting state of a promise, fulfilled or rejected.

		      A promise can be in one of three states: pending, fulfilled, or rejected.

		      Promises that are fulfilled have a fulfillment value and are in the fulfilled
		      state.  Promises that are rejected have a rejection reason and are in the
		      rejected state.  A fulfillment value is never a thenable.

		      Promises can also be said to *resolve* a value.  If this value is also a
		      promise, then the original promise's settled state will match the value's
		      settled state.  So a promise that *resolves* a promise that rejects will
		      itself reject, and a promise that *resolves* a promise that fulfills will
		      itself fulfill.


		      Basic Usage:
		      ------------

		      ```js
		      var promise = new Promise(function(resolve, reject) {
		        // on success
		        resolve(value);

		        // on failure
		        reject(reason);
		      });

		      promise.then(function(value) {
		        // on fulfillment
		      }, function(reason) {
		        // on rejection
		      });
		      ```

		      Advanced Usage:
		      ---------------

		      Promises shine when abstracting away asynchronous interactions such as
		      `XMLHttpRequest`s.

		      ```js
		      function getJSON(url) {
		        return new Promise(function(resolve, reject){
		          var xhr = new XMLHttpRequest();

		          xhr.open('GET', url);
		          xhr.onreadystatechange = handler;
		          xhr.responseType = 'json';
		          xhr.setRequestHeader('Accept', 'application/json');
		          xhr.send();

		          function handler() {
		            if (this.readyState === this.DONE) {
		              if (this.status === 200) {
		                resolve(this.response);
		              } else {
		                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
		              }
		            }
		          };
		        });
		      }

		      getJSON('/posts.json').then(function(json) {
		        // on fulfillment
		      }, function(reason) {
		        // on rejection
		      });
		      ```

		      Unlike callbacks, promises are great composable primitives.

		      ```js
		      Promise.all([
		        getJSON('/posts'),
		        getJSON('/comments')
		      ]).then(function(values){
		        values[0] // => postsJSON
		        values[1] // => commentsJSON

		        return values;
		      });
		      ```

		      @class Promise
		      @param {function} resolver
		      Useful for tooling.
		      @constructor
		    */
		    function lib$es6$promise$promise$$Promise(resolver) {
		      this._id = lib$es6$promise$promise$$counter++;
		      this._state = undefined;
		      this._result = undefined;
		      this._subscribers = [];

		      if (lib$es6$promise$$internal$$noop !== resolver) {
		        if (!lib$es6$promise$utils$$isFunction(resolver)) {
		          lib$es6$promise$promise$$needsResolver();
		        }

		        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
		          lib$es6$promise$promise$$needsNew();
		        }

		        lib$es6$promise$$internal$$initializePromise(this, resolver);
		      }
		    }

		    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
		    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
		    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
		    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
		    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
		    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
		    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

		    lib$es6$promise$promise$$Promise.prototype = {
		      constructor: lib$es6$promise$promise$$Promise,

		    /**
		      The primary way of interacting with a promise is through its `then` method,
		      which registers callbacks to receive either a promise's eventual value or the
		      reason why the promise cannot be fulfilled.

		      ```js
		      findUser().then(function(user){
		        // user is available
		      }, function(reason){
		        // user is unavailable, and you are given the reason why
		      });
		      ```

		      Chaining
		      --------

		      The return value of `then` is itself a promise.  This second, 'downstream'
		      promise is resolved with the return value of the first promise's fulfillment
		      or rejection handler, or rejected if the handler throws an exception.

		      ```js
		      findUser().then(function (user) {
		        return user.name;
		      }, function (reason) {
		        return 'default name';
		      }).then(function (userName) {
		        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
		        // will be `'default name'`
		      });

		      findUser().then(function (user) {
		        throw new Error('Found user, but still unhappy');
		      }, function (reason) {
		        throw new Error('`findUser` rejected and we're unhappy');
		      }).then(function (value) {
		        // never reached
		      }, function (reason) {
		        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
		        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
		      });
		      ```
		      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

		      ```js
		      findUser().then(function (user) {
		        throw new PedagogicalException('Upstream error');
		      }).then(function (value) {
		        // never reached
		      }).then(function (value) {
		        // never reached
		      }, function (reason) {
		        // The `PedgagocialException` is propagated all the way down to here
		      });
		      ```

		      Assimilation
		      ------------

		      Sometimes the value you want to propagate to a downstream promise can only be
		      retrieved asynchronously. This can be achieved by returning a promise in the
		      fulfillment or rejection handler. The downstream promise will then be pending
		      until the returned promise is settled. This is called *assimilation*.

		      ```js
		      findUser().then(function (user) {
		        return findCommentsByAuthor(user);
		      }).then(function (comments) {
		        // The user's comments are now available
		      });
		      ```

		      If the assimliated promise rejects, then the downstream promise will also reject.

		      ```js
		      findUser().then(function (user) {
		        return findCommentsByAuthor(user);
		      }).then(function (comments) {
		        // If `findCommentsByAuthor` fulfills, we'll have the value here
		      }, function (reason) {
		        // If `findCommentsByAuthor` rejects, we'll have the reason here
		      });
		      ```

		      Simple Example
		      --------------

		      Synchronous Example

		      ```javascript
		      var result;

		      try {
		        result = findResult();
		        // success
		      } catch(reason) {
		        // failure
		      }
		      ```

		      Errback Example

		      ```js
		      findResult(function(result, err){
		        if (err) {
		          // failure
		        } else {
		          // success
		        }
		      });
		      ```

		      Promise Example;

		      ```javascript
		      findResult().then(function(result){
		        // success
		      }, function(reason){
		        // failure
		      });
		      ```

		      Advanced Example
		      --------------

		      Synchronous Example

		      ```javascript
		      var author, books;

		      try {
		        author = findAuthor();
		        books  = findBooksByAuthor(author);
		        // success
		      } catch(reason) {
		        // failure
		      }
		      ```

		      Errback Example

		      ```js

		      function foundBooks(books) {

		      }

		      function failure(reason) {

		      }

		      findAuthor(function(author, err){
		        if (err) {
		          failure(err);
		          // failure
		        } else {
		          try {
		            findBoooksByAuthor(author, function(books, err) {
		              if (err) {
		                failure(err);
		              } else {
		                try {
		                  foundBooks(books);
		                } catch(reason) {
		                  failure(reason);
		                }
		              }
		            });
		          } catch(error) {
		            failure(err);
		          }
		          // success
		        }
		      });
		      ```

		      Promise Example;

		      ```javascript
		      findAuthor().
		        then(findBooksByAuthor).
		        then(function(books){
		          // found books
		      }).catch(function(reason){
		        // something went wrong
		      });
		      ```

		      @method then
		      @param {Function} onFulfilled
		      @param {Function} onRejected
		      Useful for tooling.
		      @return {Promise}
		    */
		      then: function(onFulfillment, onRejection) {
		        var parent = this;
		        var state = parent._state;

		        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
		          return this;
		        }

		        var child = new this.constructor(lib$es6$promise$$internal$$noop);
		        var result = parent._result;

		        if (state) {
		          var callback = arguments[state - 1];
		          lib$es6$promise$asap$$asap(function(){
		            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
		          });
		        } else {
		          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
		        }

		        return child;
		      },

		    /**
		      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
		      as the catch block of a try/catch statement.

		      ```js
		      function findAuthor(){
		        throw new Error('couldn't find that author');
		      }

		      // synchronous
		      try {
		        findAuthor();
		      } catch(reason) {
		        // something went wrong
		      }

		      // async with promises
		      findAuthor().catch(function(reason){
		        // something went wrong
		      });
		      ```

		      @method catch
		      @param {Function} onRejection
		      Useful for tooling.
		      @return {Promise}
		    */
		      'catch': function(onRejection) {
		        return this.then(null, onRejection);
		      }
		    };
		    function lib$es6$promise$polyfill$$polyfill() {
		      var local;

		      if (typeof global !== 'undefined') {
		          local = global;
		      } else if (typeof self !== 'undefined') {
		          local = self;
		      } else {
		          try {
		              local = Function('return this')();
		          } catch (e) {
		              throw new Error('polyfill failed because global object is unavailable in this environment');
		          }
		      }

		      var P = local.Promise;

		      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
		        return;
		      }

		      local.Promise = lib$es6$promise$promise$$default;
		    }
		    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

		    var lib$es6$promise$umd$$ES6Promise = {
		      'Promise': lib$es6$promise$promise$$default,
		      'polyfill': lib$es6$promise$polyfill$$default
		    };

		    /* global define:true module:true window: true */
		    if ("function" === 'function' && __webpack_require__(5)['amd']) {
		      !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return lib$es6$promise$umd$$ES6Promise; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		    } else if (typeof module !== 'undefined' && module['exports']) {
		      module['exports'] = lib$es6$promise$umd$$ES6Promise;
		    } else if (typeof this !== 'undefined') {
		      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
		    }

		    lib$es6$promise$polyfill$$default();
		}).call(this);


		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)(module)))

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		module.exports = function(module) {
			if(!module.webpackPolyfill) {
				module.deprecate = function() {};
				module.paths = [];
				// module.parent = undefined by default
				module.children = [];
				module.webpackPolyfill = 1;
			}
			return module;
		}


	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		/* (ignored) */

	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		module.exports = function() { throw new Error("define cannot be used indirect"); };


	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var keys = __webpack_require__(7);
		var promise = __webpack_require__(8);
		var deprecated = {};
		function deprecatedWarning(key, text) {
		    if (!deprecated.hasOwnProperty(key)) {
		        deprecated[key] = true;
		        console.warn("DEPRECATION WARNING: '" + key +
		            "' is no longer supported and will be removed in next major release. " + text);
		    }
		}
		var Zone = (function () {
		    function Zone(parentZone, data) {
		        this.parent = null;
		        // onError is used to override error handling.
		        // When a custom error handler is provided, it should most probably rethrow the exception
		        // not to break the expected control flow:
		        //
		        // `promise.then(fnThatThrows).catch(fn);`
		        //
		        // When this code is executed in a zone with a custom onError handler that doesn't rethrow, the
		        // `.catch()` branch will not be taken as the `fnThatThrows` exception will be swallowed by the
		        // handler.
		        this.onError = null;
		        var zone = (arguments.length) ? Object.create(parentZone) : this;
		        zone.parent = parentZone || null;
		        Object.keys(data || {}).forEach(function (property) {
		            var _property = property.substr(1);
		            // augment the new zone with a hook decorates the parent's hook
		            if (property[0] === '$') {
		                zone[_property] = data[property](parentZone[_property] || function () { });
		            }
		            else if (property[0] === '+') {
		                if (parentZone[_property]) {
		                    zone[_property] = function () {
		                        var result = parentZone[_property].apply(this, arguments);
		                        data[property].apply(this, arguments);
		                        return result;
		                    };
		                }
		                else {
		                    zone[_property] = data[property];
		                }
		            }
		            else if (property[0] === '-') {
		                if (parentZone[_property]) {
		                    zone[_property] = function () {
		                        data[property].apply(this, arguments);
		                        return parentZone[_property].apply(this, arguments);
		                    };
		                }
		                else {
		                    zone[_property] = data[property];
		                }
		            }
		            else {
		                zone[property] = (typeof data[property] === 'object') ?
		                    JSON.parse(JSON.stringify(data[property])) :
		                    data[property];
		            }
		        });
		        zone.$id = Zone.nextId++;
		        return zone;
		    }
		    Zone.prototype.fork = function (locals) {
		        this.onZoneCreated();
		        return new Zone(this, locals);
		    };
		    Zone.prototype.bind = function (fn, skipEnqueue) {
		        if (typeof fn !== 'function') {
		            throw new Error('Expecting function got: ' + fn);
		        }
		        skipEnqueue || this.enqueueTask(fn);
		        var zone = this.isRootZone() ? this : this.fork();
		        return function zoneBoundFn() {
		            return zone.run(fn, this, arguments);
		        };
		    };
		    /// @deprecated
		    Zone.prototype.bindOnce = function (fn) {
		        deprecatedWarning('bindOnce', 'There is no replacement.');
		        var boundZone = this;
		        return this.bind(function () {
		            var result = fn.apply(this, arguments);
		            boundZone.dequeueTask(fn);
		            return result;
		        });
		    };
		    Zone.prototype.isRootZone = function () {
		        return this.parent === null;
		    };
		    Zone.prototype.run = function (fn, applyTo, applyWith) {
		        applyWith = applyWith || [];
		        var oldZone = global.zone;
		        // MAKE THIS ZONE THE CURRENT ZONE
		        global.zone = this;
		        try {
		            this.beforeTask();
		            return fn.apply(applyTo, applyWith);
		        }
		        catch (e) {
		            if (this.onError) {
		                this.onError(e);
		            }
		            else {
		                throw e;
		            }
		        }
		        finally {
		            this.afterTask();
		            // REVERT THE CURRENT ZONE BACK TO THE ORIGINAL ZONE
		            global.zone = oldZone;
		        }
		    };
		    Zone.prototype.beforeTask = function () { };
		    Zone.prototype.onZoneCreated = function () { };
		    Zone.prototype.afterTask = function () { };
		    Zone.prototype.enqueueTask = function (fn) {
		        deprecatedWarning('enqueueTask', 'Use addTask/addRepeatingTask/addMicroTask');
		    };
		    Zone.prototype.dequeueTask = function (fn) {
		        deprecatedWarning('dequeueTask', 'Use removeTask/removeRepeatingTask/removeMicroTask');
		    };
		    Zone.prototype.addTask = function (taskFn) { this.enqueueTask(taskFn); };
		    Zone.prototype.removeTask = function (taskFn) { this.dequeueTask(taskFn); };
		    Zone.prototype.addRepeatingTask = function (taskFn) { this.enqueueTask(taskFn); };
		    Zone.prototype.removeRepeatingTask = function (taskFn) { this.dequeueTask(taskFn); };
		    Zone.prototype.addMicrotask = function (taskFn) { this.enqueueTask(taskFn); };
		    Zone.prototype.removeMicrotask = function (taskFn) { this.dequeueTask(taskFn); };
		    Zone.prototype.addEventListener = function () {
		        return this[keys.common.addEventListener].apply(this, arguments);
		    };
		    Zone.prototype.removeEventListener = function () {
		        return this[keys.common.removeEventListener].apply(this, arguments);
		    };
		    // Root zone ID === 1
		    Zone.nextId = 1;
		    Zone.bindPromiseFn = promise.bindPromiseFn;
		    return Zone;
		})();
		exports.Zone = Zone;
		;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb3JlLnRzIl0sIm5hbWVzIjpbImRlcHJlY2F0ZWRXYXJuaW5nIiwiWm9uZSIsIlpvbmUuY29uc3RydWN0b3IiLCJab25lLmZvcmsiLCJab25lLmJpbmQiLCJab25lLmJpbmQuem9uZUJvdW5kRm4iLCJab25lLmJpbmRPbmNlIiwiWm9uZS5pc1Jvb3Rab25lIiwiWm9uZS5ydW4iLCJab25lLmJlZm9yZVRhc2siLCJab25lLm9uWm9uZUNyZWF0ZWQiLCJab25lLmFmdGVyVGFzayIsIlpvbmUuZW5xdWV1ZVRhc2siLCJab25lLmRlcXVldWVUYXNrIiwiWm9uZS5hZGRUYXNrIiwiWm9uZS5yZW1vdmVUYXNrIiwiWm9uZS5hZGRSZXBlYXRpbmdUYXNrIiwiWm9uZS5yZW1vdmVSZXBlYXRpbmdUYXNrIiwiWm9uZS5hZGRNaWNyb3Rhc2siLCJab25lLnJlbW92ZU1pY3JvdGFzayIsIlpvbmUuYWRkRXZlbnRMaXN0ZW5lciIsIlpvbmUucmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBWSxJQUFJLFdBQU0sUUFBUSxDQUFDLENBQUE7QUFDL0IsSUFBWSxPQUFPLFdBQU0saUJBQWlCLENBQUMsQ0FBQTtBQUUzQyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFFcEIsMkJBQTJCLEdBQUcsRUFBRSxJQUFJO0lBQ2xDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxjQUFjQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNwQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDdkJBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLHdCQUF3QkEsR0FBR0EsR0FBR0E7WUFDdkNBLHNFQUFzRUEsR0FBR0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDckZBLENBQUNBO0FBQ0hBLENBQUNBO0FBRUQ7SUFRRUMsY0FBWUEsVUFBV0EsRUFBRUEsSUFBS0E7UUFGOUJDLFdBQU1BLEdBQVNBLElBQUlBLENBQUNBO1FBMEdwQkEsOENBQThDQTtRQUM5Q0EseUZBQXlGQTtRQUN6RkEsMENBQTBDQTtRQUMxQ0EsRUFBRUE7UUFDRkEsMENBQTBDQTtRQUMxQ0EsRUFBRUE7UUFDRkEsK0ZBQStGQTtRQUMvRkEsK0ZBQStGQTtRQUMvRkEsV0FBV0E7UUFDWEEsWUFBT0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFoSGJBLElBQUlBLElBQUlBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO1FBRWpFQSxJQUFJQSxDQUFDQSxNQUFNQSxHQUFHQSxVQUFVQSxJQUFJQSxJQUFJQSxDQUFDQTtRQUVqQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBU0EsUUFBUUE7WUFFL0MsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuQywrREFBK0Q7WUFDL0QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLGNBQWEsQ0FBQyxDQUFDLENBQUM7WUFHNUUsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHO3dCQUNoQixJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQzt3QkFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7d0JBQ3RDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2hCLENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7WUFHSCxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUc7d0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUN0QyxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3RELENBQUMsQ0FBQztnQkFDSixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7WUFHSCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssUUFBUSxDQUFDO29CQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDQSxDQUFDQTtRQUVIQSxJQUFJQSxDQUFDQSxHQUFHQSxHQUFTQSxJQUFLQSxDQUFDQSxNQUFNQSxFQUFFQSxDQUFDQTtRQUVoQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7SUFDZEEsQ0FBQ0E7SUFFREQsbUJBQUlBLEdBQUpBLFVBQUtBLE1BQU9BO1FBQ1ZFLElBQUlBLENBQUNBLGFBQWFBLEVBQUVBLENBQUNBO1FBQ3JCQSxNQUFNQSxDQUFDQSxJQUFJQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFFQSxNQUFNQSxDQUFDQSxDQUFDQTtJQUNoQ0EsQ0FBQ0E7SUFFREYsbUJBQUlBLEdBQUpBLFVBQUtBLEVBQUVBLEVBQUVBLFdBQVlBO1FBQ25CRyxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxFQUFFQSxLQUFLQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3QkEsTUFBTUEsSUFBSUEsS0FBS0EsQ0FBQ0EsMEJBQTBCQSxHQUFHQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUNuREEsQ0FBQ0E7UUFDREEsV0FBV0EsSUFBSUEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDcENBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLEdBQUdBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1FBQ2xEQSxNQUFNQSxDQUFDQTtZQUNMQyxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxFQUFFQSxFQUFFQSxJQUFJQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUN2Q0EsQ0FBQ0EsQ0FBQ0Q7SUFDSkEsQ0FBQ0E7SUFFREgsZUFBZUE7SUFDZkEsdUJBQVFBLEdBQVJBLFVBQVNBLEVBQUVBO1FBQ1RLLGlCQUFpQkEsQ0FBQ0EsVUFBVUEsRUFBRUEsMEJBQTBCQSxDQUFDQSxDQUFDQTtRQUMxREEsSUFBSUEsU0FBU0EsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDckJBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBO1lBQ2YsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdkMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFDTEEsQ0FBQ0E7SUFFREwseUJBQVVBLEdBQVZBO1FBQ0VNLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLEtBQUtBLElBQUlBLENBQUNBO0lBQzlCQSxDQUFDQTtJQUVETixrQkFBR0EsR0FBSEEsVUFBSUEsRUFBRUEsRUFBRUEsT0FBUUEsRUFBRUEsU0FBVUE7UUFDMUJPLFNBQVNBLEdBQUdBLFNBQVNBLElBQUlBLEVBQUVBLENBQUNBO1FBRTVCQSxJQUFJQSxPQUFPQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtRQUUxQkEsa0NBQWtDQTtRQUNsQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFFbkJBLElBQUlBLENBQUNBO1lBQ0hBLElBQUlBLENBQUNBLFVBQVVBLEVBQUVBLENBQUNBO1lBQ2xCQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQSxPQUFPQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUN0Q0EsQ0FBRUE7UUFBQUEsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDWEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2pCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNsQkEsQ0FBQ0E7WUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ05BLE1BQU1BLENBQUNBLENBQUNBO1lBQ1ZBLENBQUNBO1FBQ0hBLENBQUNBO2dCQUFTQSxDQUFDQTtZQUNUQSxJQUFJQSxDQUFDQSxTQUFTQSxFQUFFQSxDQUFDQTtZQUNqQkEsb0RBQW9EQTtZQUNwREEsTUFBTUEsQ0FBQ0EsSUFBSUEsR0FBR0EsT0FBT0EsQ0FBQ0E7UUFDeEJBLENBQUNBO0lBQ0hBLENBQUNBO0lBWURQLHlCQUFVQSxHQUFWQSxjQUFjUSxDQUFDQTtJQUNmUiw0QkFBYUEsR0FBYkEsY0FBaUJTLENBQUNBO0lBQ2xCVCx3QkFBU0EsR0FBVEEsY0FBYVUsQ0FBQ0E7SUFFZFYsMEJBQVdBLEdBQVhBLFVBQVlBLEVBQVlBO1FBQ3RCVyxpQkFBaUJBLENBQUNBLGFBQWFBLEVBQUVBLDJDQUEyQ0EsQ0FBQ0EsQ0FBQ0E7SUFDaEZBLENBQUNBO0lBQ0RYLDBCQUFXQSxHQUFYQSxVQUFZQSxFQUFZQTtRQUN0QlksaUJBQWlCQSxDQUFDQSxhQUFhQSxFQUFFQSxvREFBb0RBLENBQUNBLENBQUNBO0lBQ3pGQSxDQUFDQTtJQUVEWixzQkFBT0EsR0FBUEEsVUFBUUEsTUFBTUEsSUFBSWEsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDN0NiLHlCQUFVQSxHQUFWQSxVQUFXQSxNQUFNQSxJQUFJYyxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUVoRGQsK0JBQWdCQSxHQUFoQkEsVUFBaUJBLE1BQU1BLElBQUllLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQ3REZixrQ0FBbUJBLEdBQW5CQSxVQUFvQkEsTUFBTUEsSUFBSWdCLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRXpEaEIsMkJBQVlBLEdBQVpBLFVBQWFBLE1BQU1BLElBQUlpQixJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUNsRGpCLDhCQUFlQSxHQUFmQSxVQUFnQkEsTUFBTUEsSUFBSWtCLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBRXJEbEIsK0JBQWdCQSxHQUFoQkE7UUFDRW1CLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFDbkVBLENBQUNBO0lBRURuQixrQ0FBbUJBLEdBQW5CQTtRQUNFb0IsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtJQUN0RUEsQ0FBQ0E7SUFuSkRwQixxQkFBcUJBO0lBQ2RBLFdBQU1BLEdBQUdBLENBQUNBLENBQUNBO0lBQ1hBLGtCQUFhQSxHQUFHQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQTtJQWtKL0NBLFdBQUNBO0FBQURBLENBQUNBLEFBckpELElBcUpDO0FBckpZLFlBQUksT0FxSmhCLENBQUE7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMga2V5cyBmcm9tICcuL2tleXMnO1xuaW1wb3J0ICogYXMgcHJvbWlzZSBmcm9tICcuL3BhdGNoL3Byb21pc2UnO1xuXG52YXIgZGVwcmVjYXRlZCA9IHt9O1xuXG5mdW5jdGlvbiBkZXByZWNhdGVkV2FybmluZyhrZXksIHRleHQpIHtcbiAgaWYgKCFkZXByZWNhdGVkLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICBkZXByZWNhdGVkW2tleV0gPSB0cnVlO1xuICAgIGNvbnNvbGUud2FybihcIkRFUFJFQ0FUSU9OIFdBUk5JTkc6ICdcIiArIGtleSArXG4gICAgICAgIFwiJyBpcyBubyBsb25nZXIgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gbmV4dCBtYWpvciByZWxlYXNlLiBcIiArIHRleHQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBab25lIHtcbiAgLy8gUm9vdCB6b25lIElEID09PSAxXG4gIHN0YXRpYyBuZXh0SWQgPSAxO1xuICBzdGF0aWMgYmluZFByb21pc2VGbiA9IHByb21pc2UuYmluZFByb21pc2VGbjtcblxuXG4gIHBhcmVudDogWm9uZSA9IG51bGw7XG4gICRpZDogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihwYXJlbnRab25lPywgZGF0YT8pIHtcbiAgICB2YXIgem9uZSA9IChhcmd1bWVudHMubGVuZ3RoKSA/IE9iamVjdC5jcmVhdGUocGFyZW50Wm9uZSkgOiB0aGlzO1xuXG4gICAgem9uZS5wYXJlbnQgPSBwYXJlbnRab25lIHx8IG51bGw7XG5cbiAgICBPYmplY3Qua2V5cyhkYXRhIHx8IHt9KS5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5KSB7XG5cbiAgICAgIHZhciBfcHJvcGVydHkgPSBwcm9wZXJ0eS5zdWJzdHIoMSk7XG5cbiAgICAgIC8vIGF1Z21lbnQgdGhlIG5ldyB6b25lIHdpdGggYSBob29rIGRlY29yYXRlcyB0aGUgcGFyZW50J3MgaG9va1xuICAgICAgaWYgKHByb3BlcnR5WzBdID09PSAnJCcpIHtcbiAgICAgICAgem9uZVtfcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV0ocGFyZW50Wm9uZVtfcHJvcGVydHldIHx8IGZ1bmN0aW9uICgpIHt9KTtcblxuICAgICAgLy8gYXVnbWVudCB0aGUgbmV3IHpvbmUgd2l0aCBhIGhvb2sgdGhhdCBydW5zIGFmdGVyIHRoZSBwYXJlbnQncyBob29rXG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnR5WzBdID09PSAnKycpIHtcbiAgICAgICAgaWYgKHBhcmVudFpvbmVbX3Byb3BlcnR5XSkge1xuICAgICAgICAgIHpvbmVbX3Byb3BlcnR5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBwYXJlbnRab25lW19wcm9wZXJ0eV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGRhdGFbcHJvcGVydHldLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgem9uZVtfcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV07XG4gICAgICAgIH1cblxuICAgICAgLy8gYXVnbWVudCB0aGUgbmV3IHpvbmUgd2l0aCBhIGhvb2sgdGhhdCBydW5zIGJlZm9yZSB0aGUgcGFyZW50J3MgaG9va1xuICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eVswXSA9PT0gJy0nKSB7XG4gICAgICAgIGlmIChwYXJlbnRab25lW19wcm9wZXJ0eV0pIHtcbiAgICAgICAgICB6b25lW19wcm9wZXJ0eV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYXRhW3Byb3BlcnR5XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudFpvbmVbX3Byb3BlcnR5XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgem9uZVtfcHJvcGVydHldID0gZGF0YVtwcm9wZXJ0eV07XG4gICAgICAgIH1cblxuICAgICAgLy8gc2V0IHRoZSBuZXcgem9uZSdzIGhvb2sgKHJlcGxhY2luZyB0aGUgcGFyZW50IHpvbmUncylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHpvbmVbcHJvcGVydHldID0gKHR5cGVvZiBkYXRhW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhW3Byb3BlcnR5XSkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB6b25lLiRpZCA9ICg8YW55PlpvbmUpLm5leHRJZCsrO1xuXG4gICAgcmV0dXJuIHpvbmU7XG4gIH1cblxuICBmb3JrKGxvY2Fscz8pIHtcbiAgICB0aGlzLm9uWm9uZUNyZWF0ZWQoKTtcbiAgICByZXR1cm4gbmV3IFpvbmUodGhpcywgbG9jYWxzKTtcbiAgfVxuXG4gIGJpbmQoZm4sIHNraXBFbnF1ZXVlPykge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0aW5nIGZ1bmN0aW9uIGdvdDogJyArIGZuKTtcbiAgICB9XG4gICAgc2tpcEVucXVldWUgfHwgdGhpcy5lbnF1ZXVlVGFzayhmbik7XG4gICAgdmFyIHpvbmUgPSB0aGlzLmlzUm9vdFpvbmUoKSA/IHRoaXMgOiB0aGlzLmZvcmsoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gem9uZUJvdW5kRm4oKSB7XG4gICAgICByZXR1cm4gem9uZS5ydW4oZm4sIHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIC8vLyBAZGVwcmVjYXRlZFxuICBiaW5kT25jZShmbikge1xuICAgIGRlcHJlY2F0ZWRXYXJuaW5nKCdiaW5kT25jZScsICdUaGVyZSBpcyBubyByZXBsYWNlbWVudC4nKTtcbiAgICB2YXIgYm91bmRab25lID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy5iaW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByZXN1bHQgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgYm91bmRab25lLmRlcXVldWVUYXNrKGZuKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuICBpc1Jvb3Rab25lKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA9PT0gbnVsbDtcbiAgfVxuXG4gIHJ1bihmbiwgYXBwbHlUbz8sIGFwcGx5V2l0aD8pIHtcbiAgICBhcHBseVdpdGggPSBhcHBseVdpdGggfHwgW107XG5cbiAgICB2YXIgb2xkWm9uZSA9IGdsb2JhbC56b25lO1xuXG4gICAgLy8gTUFLRSBUSElTIFpPTkUgVEhFIENVUlJFTlQgWk9ORVxuICAgIGdsb2JhbC56b25lID0gdGhpcztcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmJlZm9yZVRhc2soKTtcbiAgICAgIHJldHVybiBmbi5hcHBseShhcHBseVRvLCBhcHBseVdpdGgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICh0aGlzLm9uRXJyb3IpIHtcbiAgICAgICAgdGhpcy5vbkVycm9yKGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5hZnRlclRhc2soKTtcbiAgICAgIC8vIFJFVkVSVCBUSEUgQ1VSUkVOVCBaT05FIEJBQ0sgVE8gVEhFIE9SSUdJTkFMIFpPTkVcbiAgICAgIGdsb2JhbC56b25lID0gb2xkWm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBvbkVycm9yIGlzIHVzZWQgdG8gb3ZlcnJpZGUgZXJyb3IgaGFuZGxpbmcuXG4gIC8vIFdoZW4gYSBjdXN0b20gZXJyb3IgaGFuZGxlciBpcyBwcm92aWRlZCwgaXQgc2hvdWxkIG1vc3QgcHJvYmFibHkgcmV0aHJvdyB0aGUgZXhjZXB0aW9uXG4gIC8vIG5vdCB0byBicmVhayB0aGUgZXhwZWN0ZWQgY29udHJvbCBmbG93OlxuICAvL1xuICAvLyBgcHJvbWlzZS50aGVuKGZuVGhhdFRocm93cykuY2F0Y2goZm4pO2BcbiAgLy9cbiAgLy8gV2hlbiB0aGlzIGNvZGUgaXMgZXhlY3V0ZWQgaW4gYSB6b25lIHdpdGggYSBjdXN0b20gb25FcnJvciBoYW5kbGVyIHRoYXQgZG9lc24ndCByZXRocm93LCB0aGVcbiAgLy8gYC5jYXRjaCgpYCBicmFuY2ggd2lsbCBub3QgYmUgdGFrZW4gYXMgdGhlIGBmblRoYXRUaHJvd3NgIGV4Y2VwdGlvbiB3aWxsIGJlIHN3YWxsb3dlZCBieSB0aGVcbiAgLy8gaGFuZGxlci5cbiAgb25FcnJvciA9IG51bGw7XG4gIGJlZm9yZVRhc2soKSB7fVxuICBvblpvbmVDcmVhdGVkKCkge31cbiAgYWZ0ZXJUYXNrKCkge31cbiAgXG4gIGVucXVldWVUYXNrKGZuOiBGdW5jdGlvbikge1xuICAgIGRlcHJlY2F0ZWRXYXJuaW5nKCdlbnF1ZXVlVGFzaycsICdVc2UgYWRkVGFzay9hZGRSZXBlYXRpbmdUYXNrL2FkZE1pY3JvVGFzaycpO1xuICB9XG4gIGRlcXVldWVUYXNrKGZuOiBGdW5jdGlvbikge1xuICAgIGRlcHJlY2F0ZWRXYXJuaW5nKCdkZXF1ZXVlVGFzaycsICdVc2UgcmVtb3ZlVGFzay9yZW1vdmVSZXBlYXRpbmdUYXNrL3JlbW92ZU1pY3JvVGFzaycpO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrRm4pIHsgdGhpcy5lbnF1ZXVlVGFzayh0YXNrRm4pOyB9XG4gIHJlbW92ZVRhc2sodGFza0ZuKSB7IHRoaXMuZGVxdWV1ZVRhc2sodGFza0ZuKTsgfVxuXG4gIGFkZFJlcGVhdGluZ1Rhc2sodGFza0ZuKSB7IHRoaXMuZW5xdWV1ZVRhc2sodGFza0ZuKTsgfVxuICByZW1vdmVSZXBlYXRpbmdUYXNrKHRhc2tGbikgeyB0aGlzLmRlcXVldWVUYXNrKHRhc2tGbik7IH1cblxuICBhZGRNaWNyb3Rhc2sodGFza0ZuKSB7IHRoaXMuZW5xdWV1ZVRhc2sodGFza0ZuKTsgfVxuICByZW1vdmVNaWNyb3Rhc2sodGFza0ZuKSB7IHRoaXMuZGVxdWV1ZVRhc2sodGFza0ZuKTsgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXNba2V5cy5jb21tb24uYWRkRXZlbnRMaXN0ZW5lcl0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7XG4gICAgcmV0dXJuIHRoaXNba2V5cy5jb21tb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcl0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxufTtcblxuIl19
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		/**
		 * Creates keys for `private` properties on exposed objects to minimize interactions with other codebases.
		 */
		function create(name) {
		    // `Symbol` implementation is broken in Chrome 39.0.2171, do not use them even if they are available
		    return '_zone$' + name;
		}
		exports.create = create;
		exports.common = {
		    addEventListener: create('addEventListener'),
		    removeEventListener: create('removeEventListener')
		};
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9rZXlzLnRzIl0sIm5hbWVzIjpbImNyZWF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxnQkFBdUIsSUFBSTtJQUN6QkEsb0dBQW9HQTtJQUNwR0EsTUFBTUEsQ0FBQ0EsUUFBUUEsR0FBR0EsSUFBSUEsQ0FBQ0E7QUFDekJBLENBQUNBO0FBSGUsY0FBTSxTQUdyQixDQUFBO0FBRVUsY0FBTSxHQUFHO0lBQ2xCLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztJQUM1QyxtQkFBbUIsRUFBRSxNQUFNLENBQUMscUJBQXFCLENBQUM7Q0FDbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlcyBrZXlzIGZvciBgcHJpdmF0ZWAgcHJvcGVydGllcyBvbiBleHBvc2VkIG9iamVjdHMgdG8gbWluaW1pemUgaW50ZXJhY3Rpb25zIHdpdGggb3RoZXIgY29kZWJhc2VzLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUobmFtZSkge1xuICAvLyBgU3ltYm9sYCBpbXBsZW1lbnRhdGlvbiBpcyBicm9rZW4gaW4gQ2hyb21lIDM5LjAuMjE3MSwgZG8gbm90IHVzZSB0aGVtIGV2ZW4gaWYgdGhleSBhcmUgYXZhaWxhYmxlXG4gIHJldHVybiAnX3pvbmUkJyArIG5hbWU7XG59XG5cbmV4cG9ydCB2YXIgY29tbW9uID0ge1xuICBhZGRFdmVudExpc3RlbmVyOiBjcmVhdGUoJ2FkZEV2ZW50TGlzdGVuZXInKSxcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogY3JlYXRlKCdyZW1vdmVFdmVudExpc3RlbmVyJylcbn07XG4iXX0=

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var utils = __webpack_require__(9);
		if (global.Promise) {
		    exports.bindPromiseFn = function (delegate) {
		        return function () {
		            var delegatePromise = delegate.apply(this, arguments);
		            // if the delegate returned an instance of Promise, forward it.
		            if (delegatePromise instanceof Promise) {
		                return delegatePromise;
		            }
		            // Otherwise wrap the Promise-like in a global Promise
		            return new Promise(function (resolve, reject) {
		                delegatePromise.then(resolve, reject);
		            });
		        };
		    };
		}
		else {
		    exports.bindPromiseFn = function (delegate) {
		        return function () {
		            return _patchThenable(delegate.apply(this, arguments));
		        };
		    };
		}
		function _patchPromiseFnsOnObject(objectPath, fnNames) {
		    var obj = global;
		    var exists = objectPath.every(function (segment) {
		        obj = obj[segment];
		        return obj;
		    });
		    if (!exists) {
		        return;
		    }
		    fnNames.forEach(function (name) {
		        var fn = obj[name];
		        if (fn) {
		            obj[name] = exports.bindPromiseFn(fn);
		        }
		    });
		}
		function _patchThenable(thenable) {
		    var then = thenable.then;
		    thenable.then = function () {
		        var args = utils.bindArguments(arguments);
		        var nextThenable = then.apply(thenable, args);
		        return _patchThenable(nextThenable);
		    };
		    var ocatch = thenable.catch;
		    thenable.catch = function () {
		        var args = utils.bindArguments(arguments);
		        var nextThenable = ocatch.apply(thenable, args);
		        return _patchThenable(nextThenable);
		    };
		    return thenable;
		}
		function apply() {
		    // Patch .then() and .catch() on native Promises to execute callbacks in the zone where
		    // those functions are called.
		    if (global.Promise) {
		        utils.patchPrototype(Promise.prototype, [
		            'then',
		            'catch'
		        ]);
		        // Patch browser APIs that return a Promise
		        var patchFns = [
		            // fetch
		            [[], ['fetch']],
		            [['Response', 'prototype'], ['arrayBuffer', 'blob', 'json', 'text']]
		        ];
		        patchFns.forEach(function (objPathAndFns) {
		            _patchPromiseFnsOnObject(objPathAndFns[0], objPathAndFns[1]);
		        });
		    }
		}
		exports.apply = apply;
		module.exports = {
		    apply: apply,
		    bindPromiseFn: exports.bindPromiseFn
		};
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWlzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9wYXRjaC9wcm9taXNlLnRzIl0sIm5hbWVzIjpbIl9wYXRjaFByb21pc2VGbnNPbk9iamVjdCIsIl9wYXRjaFRoZW5hYmxlIiwiYXBwbHkiXSwibWFwcGluZ3MiOiJBQUFBLElBQVksS0FBSyxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBdUJsQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuQixxQkFBYSxHQUFHLFVBQVUsUUFBUTtRQUNoQyxNQUFNLENBQUM7WUFDTCxJQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUV0RCwrREFBK0Q7WUFDL0QsRUFBRSxDQUFDLENBQUMsZUFBZSxZQUFZLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDekIsQ0FBQztZQUVELHNEQUFzRDtZQUN0RCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtnQkFDekMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBQUMsSUFBSSxDQUFDLENBQUM7SUFDTixxQkFBYSxHQUFHLFVBQVUsUUFBUTtRQUNoQyxNQUFNLENBQUM7WUFDTCxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUdELGtDQUFrQyxVQUFVLEVBQUUsT0FBTztJQUNuREEsSUFBSUEsR0FBR0EsR0FBR0EsTUFBTUEsQ0FBQ0E7SUFFakJBLElBQUlBLE1BQU1BLEdBQUdBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBLFVBQVVBLE9BQU9BO1FBQzdDLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFFSEEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDWkEsTUFBTUEsQ0FBQ0E7SUFDVEEsQ0FBQ0E7SUFFREEsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBVUEsSUFBSUE7UUFDNUIsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcscUJBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDQSxDQUFDQTtBQUNMQSxDQUFDQTtBQUVELHdCQUF3QixRQUFRO0lBQzlCQyxJQUFJQSxJQUFJQSxHQUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUN6QkEsUUFBUUEsQ0FBQ0EsSUFBSUEsR0FBR0E7UUFDZCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDQTtJQUVGQSxJQUFJQSxNQUFNQSxHQUFHQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQTtJQUM1QkEsUUFBUUEsQ0FBQ0EsS0FBS0EsR0FBR0E7UUFDZixJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDQTtJQUVGQSxNQUFNQSxDQUFDQSxRQUFRQSxDQUFDQTtBQUNsQkEsQ0FBQ0E7QUFHRDtJQUNFQyx1RkFBdUZBO0lBQ3ZGQSw4QkFBOEJBO0lBQzlCQSxFQUFFQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNuQkEsS0FBS0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsU0FBU0EsRUFBRUE7WUFDdENBLE1BQU1BO1lBQ05BLE9BQU9BO1NBQ1JBLENBQUNBLENBQUNBO1FBRUhBLDJDQUEyQ0E7UUFDM0NBLElBQUlBLFFBQVFBLEdBQUdBO1lBQ2JBLFFBQVFBO1lBQ1JBLENBQUNBLEVBQUVBLEVBQUVBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQ2ZBLENBQUNBLENBQUNBLFVBQVVBLEVBQUVBLFdBQVdBLENBQUNBLEVBQUVBLENBQUNBLGFBQWFBLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1NBQ3JFQSxDQUFDQTtRQUVGQSxRQUFRQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFTQSxhQUFhQTtZQUNyQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDQSxDQUFDQTtJQUNMQSxDQUFDQTtBQUNIQSxDQUFDQTtBQXBCZSxhQUFLLFFBb0JwQixDQUFBO0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNmLEtBQUssRUFBRSxLQUFLO0lBQ1osYUFBYSxFQUFFLHFCQUFhO0NBQzdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbi8qXG4gKiBQYXRjaGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZS1saWtlIGluc3RhbmNlLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gbXVzdCBiZSB1c2VkIHdoZW4gZWl0aGVyOlxuICogLSBOYXRpdmUgUHJvbWlzZXMgYXJlIG5vdCBhdmFpbGFibGUsXG4gKiAtIFRoZSBmdW5jdGlvbiByZXR1cm5zIGEgUHJvbWlzZS1saWtlIG9iamVjdC5cbiAqXG4gKiBUaGlzIGlzIHJlcXVpcmVkIGJlY2F1c2Ugem9uZXMgcmVseSBvbiBhIFByb21pc2UgbW9ua2V5IHBhdGNoIHRoYXQgY291bGQgbm90IGJlIGFwcGxpZWQgd2hlblxuICogUHJvbWlzZSBpcyBub3QgbmF0aXZlbHkgYXZhaWxhYmxlIG9yIHdoZW4gdGhlIHJldHVybmVkIG9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgUHJvbWlzZS5cbiAqXG4gKiBOb3RlIHRoYXQgY2FsbGluZyBgYmluZFByb21pc2VGbmAgb24gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBuYXRpdmUgUHJvbWlzZSB3aWxsIGFsc28gd29ya1xuICogd2l0aCBtaW5pbWFsIG92ZXJoZWFkLlxuICpcbiAqIGBgYFxuICogdmFyIGJvdW5kRnVuY3Rpb24gPSBiaW5kUHJvbWlzZUZuKEZ1bmN0aW9uUmV0dXJuaW5nQVByb21pc2UpO1xuICpcbiAqIGJvdW5kRnVuY3Rpb24udGhlbihzdWNjZXNzSGFuZGxlciwgZXJyb3JIYW5kbGVyKTtcbiAqIGBgYFxuICovXG5leHBvcnQgdmFyIGJpbmRQcm9taXNlRm47XG5cbmlmIChnbG9iYWwuUHJvbWlzZSkge1xuICBiaW5kUHJvbWlzZUZuID0gZnVuY3Rpb24gKGRlbGVnYXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGRlbGVnYXRlUHJvbWlzZSA9IGRlbGVnYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgIC8vIGlmIHRoZSBkZWxlZ2F0ZSByZXR1cm5lZCBhbiBpbnN0YW5jZSBvZiBQcm9taXNlLCBmb3J3YXJkIGl0LlxuICAgICAgaWYgKGRlbGVnYXRlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIGRlbGVnYXRlUHJvbWlzZTtcbiAgICAgIH1cblxuICAgICAgLy8gT3RoZXJ3aXNlIHdyYXAgdGhlIFByb21pc2UtbGlrZSBpbiBhIGdsb2JhbCBQcm9taXNlXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGRlbGVnYXRlUHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufSBlbHNlIHtcbiAgYmluZFByb21pc2VGbiA9IGZ1bmN0aW9uIChkZWxlZ2F0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3BhdGNoVGhlbmFibGUoZGVsZWdhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfTtcbn1cblxuXG5mdW5jdGlvbiBfcGF0Y2hQcm9taXNlRm5zT25PYmplY3Qob2JqZWN0UGF0aCwgZm5OYW1lcykge1xuICB2YXIgb2JqID0gZ2xvYmFsO1xuXG4gIHZhciBleGlzdHMgPSBvYmplY3RQYXRoLmV2ZXJ5KGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgb2JqID0gb2JqW3NlZ21lbnRdO1xuICAgIHJldHVybiBvYmo7XG4gIH0pO1xuXG4gIGlmICghZXhpc3RzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm5OYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGZuID0gb2JqW25hbWVdO1xuICAgIGlmIChmbikge1xuICAgICAgb2JqW25hbWVdID0gYmluZFByb21pc2VGbihmbik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gX3BhdGNoVGhlbmFibGUodGhlbmFibGUpIHtcbiAgdmFyIHRoZW4gPSB0aGVuYWJsZS50aGVuO1xuICB0aGVuYWJsZS50aGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gdXRpbHMuYmluZEFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgIHZhciBuZXh0VGhlbmFibGUgPSB0aGVuLmFwcGx5KHRoZW5hYmxlLCBhcmdzKTtcbiAgICByZXR1cm4gX3BhdGNoVGhlbmFibGUobmV4dFRoZW5hYmxlKTtcbiAgfTtcblxuICB2YXIgb2NhdGNoID0gdGhlbmFibGUuY2F0Y2g7XG4gIHRoZW5hYmxlLmNhdGNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gdXRpbHMuYmluZEFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgIHZhciBuZXh0VGhlbmFibGUgPSBvY2F0Y2guYXBwbHkodGhlbmFibGUsIGFyZ3MpO1xuICAgIHJldHVybiBfcGF0Y2hUaGVuYWJsZShuZXh0VGhlbmFibGUpO1xuICB9O1xuXG4gIHJldHVybiB0aGVuYWJsZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkoKSB7XG4gIC8vIFBhdGNoIC50aGVuKCkgYW5kIC5jYXRjaCgpIG9uIG5hdGl2ZSBQcm9taXNlcyB0byBleGVjdXRlIGNhbGxiYWNrcyBpbiB0aGUgem9uZSB3aGVyZVxuICAvLyB0aG9zZSBmdW5jdGlvbnMgYXJlIGNhbGxlZC5cbiAgaWYgKGdsb2JhbC5Qcm9taXNlKSB7XG4gICAgdXRpbHMucGF0Y2hQcm90b3R5cGUoUHJvbWlzZS5wcm90b3R5cGUsIFtcbiAgICAgICd0aGVuJyxcbiAgICAgICdjYXRjaCdcbiAgICBdKTtcblxuICAgIC8vIFBhdGNoIGJyb3dzZXIgQVBJcyB0aGF0IHJldHVybiBhIFByb21pc2VcbiAgICB2YXIgcGF0Y2hGbnMgPSBbXG4gICAgICAvLyBmZXRjaFxuICAgICAgW1tdLCBbJ2ZldGNoJ11dLFxuICAgICAgW1snUmVzcG9uc2UnLCAncHJvdG90eXBlJ10sIFsnYXJyYXlCdWZmZXInLCAnYmxvYicsICdqc29uJywgJ3RleHQnXV1cbiAgICBdO1xuXG4gICAgcGF0Y2hGbnMuZm9yRWFjaChmdW5jdGlvbihvYmpQYXRoQW5kRm5zKSB7XG4gICAgICBfcGF0Y2hQcm9taXNlRm5zT25PYmplY3Qob2JqUGF0aEFuZEZuc1swXSwgb2JqUGF0aEFuZEZuc1sxXSk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwcGx5OiBhcHBseSxcbiAgYmluZFByb21pc2VGbjogYmluZFByb21pc2VGblxufTtcbiJdfQ==
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var keys = __webpack_require__(7);
		function bindArguments(args) {
		    for (var i = args.length - 1; i >= 0; i--) {
		        if (typeof args[i] === 'function') {
		            args[i] = global.zone.bind(args[i]);
		        }
		    }
		    return args;
		}
		exports.bindArguments = bindArguments;
		;
		function patchPrototype(obj, fnNames) {
		    fnNames.forEach(function (name) {
		        var delegate = obj[name];
		        if (delegate) {
		            obj[name] = function () {
		                return delegate.apply(this, bindArguments(arguments));
		            };
		        }
		    });
		}
		exports.patchPrototype = patchPrototype;
		;
		function isWebWorker() {
		    return (typeof document === "undefined");
		}
		exports.isWebWorker = isWebWorker;
		function patchProperty(obj, prop) {
		    var desc = Object.getOwnPropertyDescriptor(obj, prop) || {
		        enumerable: true,
		        configurable: true
		    };
		    // A property descriptor cannot have getter/setter and be writable
		    // deleting the writable and value properties avoids this error:
		    //
		    // TypeError: property descriptors must not specify a value or be writable when a
		    // getter or setter has been specified
		    delete desc.writable;
		    delete desc.value;
		    // substr(2) cuz 'onclick' -> 'click', etc
		    var eventName = prop.substr(2);
		    var _prop = '_' + prop;
		    desc.set = function (fn) {
		        if (this[_prop]) {
		            this.removeEventListener(eventName, this[_prop]);
		        }
		        if (typeof fn === 'function') {
		            this[_prop] = fn;
		            this.addEventListener(eventName, fn, false);
		        }
		        else {
		            this[_prop] = null;
		        }
		    };
		    desc.get = function () {
		        return this[_prop];
		    };
		    Object.defineProperty(obj, prop, desc);
		}
		exports.patchProperty = patchProperty;
		;
		function patchProperties(obj, properties) {
		    (properties || (function () {
		        var props = [];
		        for (var prop in obj) {
		            props.push(prop);
		        }
		        return props;
		    }()).
		        filter(function (propertyName) {
		        return propertyName.substr(0, 2) === 'on';
		    })).
		        forEach(function (eventName) {
		        patchProperty(obj, eventName);
		    });
		}
		exports.patchProperties = patchProperties;
		;
		var originalFnKey = keys.create('originalFn');
		var boundFnsKey = keys.create('boundFns');
		function patchEventTargetMethods(obj) {
		    // This is required for the addEventListener hook on the root zone.
		    obj[keys.common.addEventListener] = obj.addEventListener;
		    obj.addEventListener = function (eventName, handler, useCapturing) {
		        //Ignore special listeners of IE11 & Edge dev tools, see https://github.com/angular/zone.js/issues/150
		        if (handler && handler.toString() !== "[object FunctionWrapper]") {
		            var eventType = eventName + (useCapturing ? '$capturing' : '$bubbling');
		            var fn;
		            if (handler.handleEvent) {
		                // Have to pass in 'handler' reference as an argument here, otherwise it gets clobbered in
		                // IE9 by the arguments[1] assignment at end of this function.
		                fn = (function (handler) {
		                    return function () {
		                        handler.handleEvent.apply(handler, arguments);
		                    };
		                })(handler);
		            }
		            else {
		                fn = handler;
		            }
		            handler[originalFnKey] = fn;
		            handler[boundFnsKey] = handler[boundFnsKey] || {};
		            handler[boundFnsKey][eventType] = handler[boundFnsKey][eventType] || global.zone.bind(fn);
		            arguments[1] = handler[boundFnsKey][eventType];
		        }
		        // - Inside a Web Worker, `this` is undefined, the context is `global` (= `self`)
		        // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
		        // see https://github.com/angular/zone.js/issues/190
		        var target = this || global;
		        return global.zone.addEventListener.apply(target, arguments);
		    };
		    // This is required for the removeEventListener hook on the root zone.
		    obj[keys.common.removeEventListener] = obj.removeEventListener;
		    obj.removeEventListener = function (eventName, handler, useCapturing) {
		        var eventType = eventName + (useCapturing ? '$capturing' : '$bubbling');
		        if (handler && handler[boundFnsKey] && handler[boundFnsKey][eventType]) {
		            var _bound = handler[boundFnsKey];
		            arguments[1] = _bound[eventType];
		            delete _bound[eventType];
		            global.zone.dequeueTask(handler[originalFnKey]);
		        }
		        // - Inside a Web Worker, `this` is undefined, the context is `global`
		        // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
		        // see https://github.com/angular/zone.js/issues/190
		        var target = this || global;
		        var result = global.zone.removeEventListener.apply(target, arguments);
		        return result;
		    };
		}
		exports.patchEventTargetMethods = patchEventTargetMethods;
		;
		var originalInstanceKey = keys.create('originalInstance');
		// wrap some native API on `window`
		function patchClass(className) {
		    var OriginalClass = global[className];
		    if (!OriginalClass)
		        return;
		    global[className] = function () {
		        var a = bindArguments(arguments);
		        switch (a.length) {
		            case 0:
		                this[originalInstanceKey] = new OriginalClass();
		                break;
		            case 1:
		                this[originalInstanceKey] = new OriginalClass(a[0]);
		                break;
		            case 2:
		                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
		                break;
		            case 3:
		                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
		                break;
		            case 4:
		                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
		                break;
		            default: throw new Error('what are you even doing?');
		        }
		    };
		    var instance = new OriginalClass();
		    var prop;
		    for (prop in instance) {
		        (function (prop) {
		            if (typeof instance[prop] === 'function') {
		                global[className].prototype[prop] = function () {
		                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
		                };
		            }
		            else {
		                Object.defineProperty(global[className].prototype, prop, {
		                    set: function (fn) {
		                        if (typeof fn === 'function') {
		                            this[originalInstanceKey][prop] = global.zone.bind(fn);
		                        }
		                        else {
		                            this[originalInstanceKey][prop] = fn;
		                        }
		                    },
		                    get: function () {
		                        return this[originalInstanceKey][prop];
		                    }
		                });
		            }
		        }(prop));
		    }
		    for (prop in OriginalClass) {
		        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
		            global[className][prop] = OriginalClass[prop];
		        }
		    }
		}
		exports.patchClass = patchClass;
		;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvdXRpbHMudHMiXSwibmFtZXMiOlsiYmluZEFyZ3VtZW50cyIsInBhdGNoUHJvdG90eXBlIiwiaXNXZWJXb3JrZXIiLCJwYXRjaFByb3BlcnR5IiwicGF0Y2hQcm9wZXJ0aWVzIiwicGF0Y2hFdmVudFRhcmdldE1ldGhvZHMiLCJwYXRjaENsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFZLElBQUksV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUUvQix1QkFBOEIsSUFBSTtJQUNoQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsTUFBTUEsR0FBR0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7UUFDMUNBLEVBQUVBLENBQUNBLENBQUNBLE9BQU9BLElBQUlBLENBQUNBLENBQUNBLENBQUNBLEtBQUtBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO1lBQ2xDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN0Q0EsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7QUFDZEEsQ0FBQ0E7QUFQZSxxQkFBYSxnQkFPNUIsQ0FBQTtBQUFBLENBQUM7QUFFRix3QkFBK0IsR0FBRyxFQUFFLE9BQU87SUFDekNDLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLElBQUlBO1FBQzVCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUNWLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQyxDQUFDQSxDQUFDQTtBQUNMQSxDQUFDQTtBQVRlLHNCQUFjLGlCQVM3QixDQUFBO0FBQUEsQ0FBQztBQUVGO0lBQ0VDLE1BQU1BLENBQUNBLENBQUNBLE9BQU9BLFFBQVFBLEtBQUtBLFdBQVdBLENBQUNBLENBQUNBO0FBQzNDQSxDQUFDQTtBQUZlLG1CQUFXLGNBRTFCLENBQUE7QUFFRCx1QkFBOEIsR0FBRyxFQUFFLElBQUk7SUFDckNDLElBQUlBLElBQUlBLEdBQUdBLE1BQU1BLENBQUNBLHdCQUF3QkEsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsQ0FBQ0EsSUFBSUE7UUFDdkRBLFVBQVVBLEVBQUVBLElBQUlBO1FBQ2hCQSxZQUFZQSxFQUFFQSxJQUFJQTtLQUNuQkEsQ0FBQ0E7SUFFRkEsa0VBQWtFQTtJQUNsRUEsZ0VBQWdFQTtJQUNoRUEsRUFBRUE7SUFDRkEsaUZBQWlGQTtJQUNqRkEsc0NBQXNDQTtJQUN0Q0EsT0FBT0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0E7SUFDckJBLE9BQU9BLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO0lBRWxCQSwwQ0FBMENBO0lBQzFDQSxJQUFJQSxTQUFTQSxHQUFHQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUMvQkEsSUFBSUEsS0FBS0EsR0FBR0EsR0FBR0EsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFFdkJBLElBQUlBLENBQUNBLEdBQUdBLEdBQUdBLFVBQVVBLEVBQUVBO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUMsQ0FBQ0E7SUFFRkEsSUFBSUEsQ0FBQ0EsR0FBR0EsR0FBR0E7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQ0E7SUFFRkEsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDekNBLENBQUNBO0FBcENlLHFCQUFhLGdCQW9DNUIsQ0FBQTtBQUFBLENBQUM7QUFFRix5QkFBZ0MsR0FBRyxFQUFFLFVBQVc7SUFDOUNDLENBQUNBLFVBQVVBLElBQUlBLENBQUNBO1FBQ1osSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDLEVBQUVBLENBQUNBO1FBQ0pBLE1BQU1BLENBQUNBLFVBQVVBLFlBQVlBO1FBQzNCLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDM0MsQ0FBQyxDQUFDQSxDQUFDQTtRQUNIQSxPQUFPQSxDQUFDQSxVQUFVQSxTQUFTQTtRQUN6QixhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsQ0FBQ0EsQ0FBQ0E7QUFDUEEsQ0FBQ0E7QUFkZSx1QkFBZSxrQkFjOUIsQ0FBQTtBQUFBLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzlDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFMUMsaUNBQXdDLEdBQUc7SUFDekNDLG1FQUFtRUE7SUFDbkVBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLGdCQUFnQkEsQ0FBQ0EsR0FBR0EsR0FBR0EsQ0FBQ0EsZ0JBQWdCQSxDQUFDQTtJQUN6REEsR0FBR0EsQ0FBQ0EsZ0JBQWdCQSxHQUFHQSxVQUFVQSxTQUFTQSxFQUFFQSxPQUFPQSxFQUFFQSxZQUFZQTtRQUMvRCxzR0FBc0c7UUFDdEcsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsS0FBSywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7WUFDakUsSUFBSSxTQUFTLEdBQUcsU0FBUyxHQUFHLENBQUMsWUFBWSxHQUFHLFlBQVksR0FBRyxXQUFXLENBQUMsQ0FBQztZQUN4RSxJQUFJLEVBQUUsQ0FBQztZQUNQLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUN4QiwwRkFBMEY7Z0JBQzFGLDhEQUE4RDtnQkFDOUQsRUFBRSxHQUFHLENBQUMsVUFBUyxPQUFPO29CQUNwQixNQUFNLENBQUM7d0JBQ0wsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNoRCxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDZCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sRUFBRSxHQUFHLE9BQU8sQ0FBQztZQUNmLENBQUM7WUFFRCxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUYsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBRUQsaUZBQWlGO1FBQ2pGLGdHQUFnRztRQUNoRyxvREFBb0Q7UUFDcEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQztRQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQ0E7SUFFRkEsc0VBQXNFQTtJQUN0RUEsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsbUJBQW1CQSxDQUFDQSxHQUFHQSxHQUFHQSxDQUFDQSxtQkFBbUJBLENBQUNBO0lBQy9EQSxHQUFHQSxDQUFDQSxtQkFBbUJBLEdBQUdBLFVBQVVBLFNBQVNBLEVBQUVBLE9BQU9BLEVBQUVBLFlBQVlBO1FBQ2xFLElBQUksU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLFlBQVksR0FBRyxZQUFZLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDeEUsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNsQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFRCxzRUFBc0U7UUFDdEUsZ0dBQWdHO1FBQ2hHLG9EQUFvRDtRQUNwRCxJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDO1FBQzVCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2hCLENBQUMsQ0FBQ0E7QUFDSkEsQ0FBQ0E7QUFuRGUsK0JBQXVCLDBCQW1EdEMsQ0FBQTtBQUFBLENBQUM7QUFFRixJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUUxRCxtQ0FBbUM7QUFDbkMsb0JBQTJCLFNBQVM7SUFDbENDLElBQUlBLGFBQWFBLEdBQUdBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO0lBQ3RDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxhQUFhQSxDQUFDQTtRQUFDQSxNQUFNQSxDQUFDQTtJQUUzQkEsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0E7UUFDbEIsSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO2dCQUFDLEtBQUssQ0FBQztZQUMvRCxLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBQ25FLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBQ3pFLEtBQUssQ0FBQztnQkFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUFDLEtBQUssQ0FBQztZQUMvRSxLQUFLLENBQUM7Z0JBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsS0FBSyxDQUFDO1lBQ3JGLFNBQVMsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7SUFDSCxDQUFDLENBQUNBO0lBRUZBLElBQUlBLFFBQVFBLEdBQUdBLElBQUlBLGFBQWFBLEVBQUVBLENBQUNBO0lBRW5DQSxJQUFJQSxJQUFJQSxDQUFDQTtJQUNUQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN0QkEsQ0FBQ0EsVUFBVUEsSUFBSUE7WUFDYixFQUFFLENBQUMsQ0FBQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHO29CQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRixDQUFDLENBQUM7WUFDSixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRTtvQkFDdkQsR0FBRyxFQUFFLFVBQVUsRUFBRTt3QkFDZixFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDOzRCQUM3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDekQsQ0FBQzt3QkFBQyxJQUFJLENBQUMsQ0FBQzs0QkFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ3ZDLENBQUM7b0JBQ0gsQ0FBQztvQkFDRCxHQUFHLEVBQUU7d0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QyxDQUFDO2lCQUNGLENBQUMsQ0FBQztZQUNMLENBQUM7UUFDSCxDQUFDLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO0lBQ1hBLENBQUNBO0lBRURBLEdBQUdBLENBQUNBLENBQUNBLElBQUlBLElBQUlBLGFBQWFBLENBQUNBLENBQUNBLENBQUNBO1FBQzNCQSxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxLQUFLQSxXQUFXQSxJQUFJQSxhQUFhQSxDQUFDQSxjQUFjQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMvREEsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsYUFBYUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDaERBLENBQUNBO0lBQ0hBLENBQUNBO0FBQ0hBLENBQUNBO0FBL0NlLGtCQUFVLGFBK0N6QixDQUFBO0FBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGtleXMgZnJvbSAnLi9rZXlzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmRBcmd1bWVudHMoYXJncykge1xuICBmb3IgKHZhciBpID0gYXJncy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmICh0eXBlb2YgYXJnc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYXJnc1tpXSA9IGdsb2JhbC56b25lLmJpbmQoYXJnc1tpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoUHJvdG90eXBlKG9iaiwgZm5OYW1lcykge1xuICBmbk5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGVsZWdhdGUgPSBvYmpbbmFtZV07XG4gICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICBvYmpbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZS5hcHBseSh0aGlzLCBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzV2ViV29ya2VyKCkge1xuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFByb3BlcnR5KG9iaiwgcHJvcCkge1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKSB8fCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfTtcblxuICAvLyBBIHByb3BlcnR5IGRlc2NyaXB0b3IgY2Fubm90IGhhdmUgZ2V0dGVyL3NldHRlciBhbmQgYmUgd3JpdGFibGVcbiAgLy8gZGVsZXRpbmcgdGhlIHdyaXRhYmxlIGFuZCB2YWx1ZSBwcm9wZXJ0aWVzIGF2b2lkcyB0aGlzIGVycm9yOlxuICAvL1xuICAvLyBUeXBlRXJyb3I6IHByb3BlcnR5IGRlc2NyaXB0b3JzIG11c3Qgbm90IHNwZWNpZnkgYSB2YWx1ZSBvciBiZSB3cml0YWJsZSB3aGVuIGFcbiAgLy8gZ2V0dGVyIG9yIHNldHRlciBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgZGVsZXRlIGRlc2Mud3JpdGFibGU7XG4gIGRlbGV0ZSBkZXNjLnZhbHVlO1xuXG4gIC8vIHN1YnN0cigyKSBjdXogJ29uY2xpY2snIC0+ICdjbGljaycsIGV0Y1xuICB2YXIgZXZlbnROYW1lID0gcHJvcC5zdWJzdHIoMik7XG4gIHZhciBfcHJvcCA9ICdfJyArIHByb3A7XG5cbiAgZGVzYy5zZXQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBpZiAodGhpc1tfcHJvcF0pIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXNbX3Byb3BdKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzW19wcm9wXSA9IGZuO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4sIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpc1tfcHJvcF0gPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBkZXNjLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpc1tfcHJvcF07XG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hQcm9wZXJ0aWVzKG9iaiwgcHJvcGVydGllcz8pIHtcbiAgKHByb3BlcnRpZXMgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcm9wcyA9IFtdO1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgcHJvcHMucHVzaChwcm9wKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9KCkpLlxuICAgIGZpbHRlcihmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICByZXR1cm4gcHJvcGVydHlOYW1lLnN1YnN0cigwLDIpID09PSAnb24nO1xuICAgIH0pKS5cbiAgICBmb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgIHBhdGNoUHJvcGVydHkob2JqLCBldmVudE5hbWUpO1xuICAgIH0pO1xufTtcblxudmFyIG9yaWdpbmFsRm5LZXkgPSBrZXlzLmNyZWF0ZSgnb3JpZ2luYWxGbicpO1xudmFyIGJvdW5kRm5zS2V5ID0ga2V5cy5jcmVhdGUoJ2JvdW5kRm5zJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEV2ZW50VGFyZ2V0TWV0aG9kcyhvYmopIHtcbiAgLy8gVGhpcyBpcyByZXF1aXJlZCBmb3IgdGhlIGFkZEV2ZW50TGlzdGVuZXIgaG9vayBvbiB0aGUgcm9vdCB6b25lLlxuICBvYmpba2V5cy5jb21tb24uYWRkRXZlbnRMaXN0ZW5lcl0gPSBvYmouYWRkRXZlbnRMaXN0ZW5lcjtcbiAgb2JqLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJpbmcpIHtcbiAgICAvL0lnbm9yZSBzcGVjaWFsIGxpc3RlbmVycyBvZiBJRTExICYgRWRnZSBkZXYgdG9vbHMsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy8xNTBcbiAgICBpZiAoaGFuZGxlciAmJiBoYW5kbGVyLnRvU3RyaW5nKCkgIT09IFwiW29iamVjdCBGdW5jdGlvbldyYXBwZXJdXCIpIHtcbiAgICAgIHZhciBldmVudFR5cGUgPSBldmVudE5hbWUgKyAodXNlQ2FwdHVyaW5nID8gJyRjYXB0dXJpbmcnIDogJyRidWJibGluZycpO1xuICAgICAgdmFyIGZuO1xuICAgICAgaWYgKGhhbmRsZXIuaGFuZGxlRXZlbnQpIHtcbiAgICAgICAgLy8gSGF2ZSB0byBwYXNzIGluICdoYW5kbGVyJyByZWZlcmVuY2UgYXMgYW4gYXJndW1lbnQgaGVyZSwgb3RoZXJ3aXNlIGl0IGdldHMgY2xvYmJlcmVkIGluXG4gICAgICAgIC8vIElFOSBieSB0aGUgYXJndW1lbnRzWzFdIGFzc2lnbm1lbnQgYXQgZW5kIG9mIHRoaXMgZnVuY3Rpb24uXG4gICAgICAgIGZuID0gKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBoYW5kbGVyLmhhbmRsZUV2ZW50LmFwcGx5KGhhbmRsZXIsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkoaGFuZGxlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbiA9IGhhbmRsZXI7XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZXJbb3JpZ2luYWxGbktleV0gPSBmbjtcbiAgICAgIGhhbmRsZXJbYm91bmRGbnNLZXldID0gaGFuZGxlcltib3VuZEZuc0tleV0gfHwge307XG4gICAgICBoYW5kbGVyW2JvdW5kRm5zS2V5XVtldmVudFR5cGVdID0gaGFuZGxlcltib3VuZEZuc0tleV1bZXZlbnRUeXBlXSB8fCBnbG9iYWwuem9uZS5iaW5kKGZuKTtcbiAgICAgIGFyZ3VtZW50c1sxXSA9IGhhbmRsZXJbYm91bmRGbnNLZXldW2V2ZW50VHlwZV07XG4gICAgfVxuXG4gICAgLy8gLSBJbnNpZGUgYSBXZWIgV29ya2VyLCBgdGhpc2AgaXMgdW5kZWZpbmVkLCB0aGUgY29udGV4dCBpcyBgZ2xvYmFsYCAoPSBgc2VsZmApXG4gICAgLy8gLSBXaGVuIGBhZGRFdmVudExpc3RlbmVyYCBpcyBjYWxsZWQgb24gdGhlIGdsb2JhbCBjb250ZXh0IGluIHN0cmljdCBtb2RlLCBgdGhpc2AgaXMgdW5kZWZpbmVkXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzE5MFxuICAgIHZhciB0YXJnZXQgPSB0aGlzIHx8IGdsb2JhbDtcbiAgICByZXR1cm4gZ2xvYmFsLnpvbmUuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgLy8gVGhpcyBpcyByZXF1aXJlZCBmb3IgdGhlIHJlbW92ZUV2ZW50TGlzdGVuZXIgaG9vayBvbiB0aGUgcm9vdCB6b25lLlxuICBvYmpba2V5cy5jb21tb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcl0gPSBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbiAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBoYW5kbGVyLCB1c2VDYXB0dXJpbmcpIHtcbiAgICB2YXIgZXZlbnRUeXBlID0gZXZlbnROYW1lICsgKHVzZUNhcHR1cmluZyA/ICckY2FwdHVyaW5nJyA6ICckYnViYmxpbmcnKTtcbiAgICBpZiAoaGFuZGxlciAmJiBoYW5kbGVyW2JvdW5kRm5zS2V5XSAmJiBoYW5kbGVyW2JvdW5kRm5zS2V5XVtldmVudFR5cGVdKSB7XG4gICAgICB2YXIgX2JvdW5kID0gaGFuZGxlcltib3VuZEZuc0tleV07XG4gICAgICBhcmd1bWVudHNbMV0gPSBfYm91bmRbZXZlbnRUeXBlXTtcbiAgICAgIGRlbGV0ZSBfYm91bmRbZXZlbnRUeXBlXTtcbiAgICAgIGdsb2JhbC56b25lLmRlcXVldWVUYXNrKGhhbmRsZXJbb3JpZ2luYWxGbktleV0pO1xuICAgIH1cblxuICAgIC8vIC0gSW5zaWRlIGEgV2ViIFdvcmtlciwgYHRoaXNgIGlzIHVuZGVmaW5lZCwgdGhlIGNvbnRleHQgaXMgYGdsb2JhbGBcbiAgICAvLyAtIFdoZW4gYGFkZEV2ZW50TGlzdGVuZXJgIGlzIGNhbGxlZCBvbiB0aGUgZ2xvYmFsIGNvbnRleHQgaW4gc3RyaWN0IG1vZGUsIGB0aGlzYCBpcyB1bmRlZmluZWRcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG4gICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgZ2xvYmFsO1xuICAgIHZhciByZXN1bHQgPSBnbG9iYWwuem9uZS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRhcmdldCwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxudmFyIG9yaWdpbmFsSW5zdGFuY2VLZXkgPSBrZXlzLmNyZWF0ZSgnb3JpZ2luYWxJbnN0YW5jZScpO1xuXG4vLyB3cmFwIHNvbWUgbmF0aXZlIEFQSSBvbiBgd2luZG93YFxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIHZhciBPcmlnaW5hbENsYXNzID0gZ2xvYmFsW2NsYXNzTmFtZV07XG4gIGlmICghT3JpZ2luYWxDbGFzcykgcmV0dXJuO1xuXG4gIGdsb2JhbFtjbGFzc05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhID0gYmluZEFyZ3VtZW50cyhhcmd1bWVudHMpO1xuICAgIHN3aXRjaCAoYS5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDogdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKCk7IGJyZWFrO1xuICAgICAgY2FzZSAxOiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSk7IGJyZWFrO1xuICAgICAgY2FzZSAyOiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSk7IGJyZWFrO1xuICAgICAgY2FzZSAzOiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSwgYVsyXSk7IGJyZWFrO1xuICAgICAgY2FzZSA0OiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSwgYVsyXSwgYVszXSk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCd3aGF0IGFyZSB5b3UgZXZlbiBkb2luZz8nKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGluc3RhbmNlID0gbmV3IE9yaWdpbmFsQ2xhc3MoKTtcblxuICB2YXIgcHJvcDtcbiAgZm9yIChwcm9wIGluIGluc3RhbmNlKSB7XG4gICAgKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIGluc3RhbmNlW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGdsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXS5hcHBseSh0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZSwgcHJvcCwge1xuICAgICAgICAgIHNldDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0gPSBnbG9iYWwuem9uZS5iaW5kKGZuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0gPSBmbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KHByb3ApKTtcbiAgfVxuXG4gIGZvciAocHJvcCBpbiBPcmlnaW5hbENsYXNzKSB7XG4gICAgaWYgKHByb3AgIT09ICdwcm90b3R5cGUnICYmIE9yaWdpbmFsQ2xhc3MuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIGdsb2JhbFtjbGFzc05hbWVdW3Byb3BdID0gT3JpZ2luYWxDbGFzc1twcm9wXTtcbiAgICB9XG4gIH1cbn07XG4iXX0=
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var fnPatch = __webpack_require__(11);
		var promisePatch = __webpack_require__(8);
		var mutationObserverPatch = __webpack_require__(13);
		var definePropertyPatch = __webpack_require__(14);
		var registerElementPatch = __webpack_require__(15);
		var eventTargetPatch = __webpack_require__(16);
		var propertyDescriptorPatch = __webpack_require__(17);
		var geolocationPatch = __webpack_require__(19);
		var fileReaderPatch = __webpack_require__(20);
		function apply() {
		    fnPatch.patchSetClearFunction(global, global.Zone, [
		        ['setTimeout', 'clearTimeout', false, false],
		        ['setInterval', 'clearInterval', true, false],
		        ['setImmediate', 'clearImmediate', false, false],
		        ['requestAnimationFrame', 'cancelAnimationFrame', false, true],
		        ['mozRequestAnimationFrame', 'mozCancelAnimationFrame', false, true],
		        ['webkitRequestAnimationFrame', 'webkitCancelAnimationFrame', false, true]
		    ]);
		    fnPatch.patchFunction(global, [
		        'alert',
		        'prompt'
		    ]);
		    eventTargetPatch.apply();
		    propertyDescriptorPatch.apply();
		    promisePatch.apply();
		    mutationObserverPatch.patchClass('MutationObserver');
		    mutationObserverPatch.patchClass('WebKitMutationObserver');
		    definePropertyPatch.apply();
		    registerElementPatch.apply();
		    geolocationPatch.apply();
		    fileReaderPatch.apply();
		}
		exports.apply = apply;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9wYXRjaC9icm93c2VyLnRzIl0sIm5hbWVzIjpbImFwcGx5Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFZLE9BQU8sV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUN2QyxJQUFZLFlBQVksV0FBTSxXQUFXLENBQUMsQ0FBQTtBQUMxQyxJQUFZLHFCQUFxQixXQUFNLHFCQUFxQixDQUFDLENBQUE7QUFDN0QsSUFBWSxtQkFBbUIsV0FBTSxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3pELElBQVksb0JBQW9CLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUUzRCxJQUFZLGdCQUFnQixXQUFNLGdCQUFnQixDQUFDLENBQUE7QUFDbkQsSUFBWSx1QkFBdUIsV0FBTSx1QkFBdUIsQ0FBQyxDQUFBO0FBQ2pFLElBQVksZ0JBQWdCLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFDbEQsSUFBWSxlQUFlLFdBQU0sZUFBZSxDQUFDLENBQUE7QUFFakQ7SUFDRUEsT0FBT0EsQ0FBQ0EscUJBQXFCQSxDQUFDQSxNQUFNQSxFQUFFQSxNQUFNQSxDQUFDQSxJQUFJQSxFQUFFQTtRQUNqREEsQ0FBQ0EsWUFBWUEsRUFBRUEsY0FBY0EsRUFBRUEsS0FBS0EsRUFBRUEsS0FBS0EsQ0FBQ0E7UUFDNUNBLENBQUNBLGFBQWFBLEVBQUVBLGVBQWVBLEVBQUVBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBO1FBQzdDQSxDQUFDQSxjQUFjQSxFQUFFQSxnQkFBZ0JBLEVBQUVBLEtBQUtBLEVBQUVBLEtBQUtBLENBQUNBO1FBQ2hEQSxDQUFDQSx1QkFBdUJBLEVBQUVBLHNCQUFzQkEsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUEsQ0FBQ0E7UUFDOURBLENBQUNBLDBCQUEwQkEsRUFBRUEseUJBQXlCQSxFQUFFQSxLQUFLQSxFQUFFQSxJQUFJQSxDQUFDQTtRQUNwRUEsQ0FBQ0EsNkJBQTZCQSxFQUFFQSw0QkFBNEJBLEVBQUVBLEtBQUtBLEVBQUVBLElBQUlBLENBQUNBO0tBQzNFQSxDQUFDQSxDQUFDQTtJQUVIQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxNQUFNQSxFQUFFQTtRQUM1QkEsT0FBT0E7UUFDUEEsUUFBUUE7S0FDVEEsQ0FBQ0EsQ0FBQ0E7SUFFSEEsZ0JBQWdCQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtJQUV6QkEsdUJBQXVCQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtJQUVoQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsRUFBRUEsQ0FBQ0E7SUFFckJBLHFCQUFxQkEsQ0FBQ0EsVUFBVUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQTtJQUNyREEscUJBQXFCQSxDQUFDQSxVQUFVQSxDQUFDQSx3QkFBd0JBLENBQUNBLENBQUNBO0lBRTNEQSxtQkFBbUJBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO0lBRTVCQSxvQkFBb0JBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO0lBRTdCQSxnQkFBZ0JBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO0lBRXpCQSxlQUFlQSxDQUFDQSxLQUFLQSxFQUFFQSxDQUFDQTtBQUMxQkEsQ0FBQ0E7QUEvQmUsYUFBSyxRQStCcEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZuUGF0Y2ggZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0ICogYXMgcHJvbWlzZVBhdGNoIGZyb20gJy4vcHJvbWlzZSc7XG5pbXBvcnQgKiBhcyBtdXRhdGlvbk9ic2VydmVyUGF0Y2ggZnJvbSAnLi9tdXRhdGlvbi1vYnNlcnZlcic7XG5pbXBvcnQgKiBhcyBkZWZpbmVQcm9wZXJ0eVBhdGNoIGZyb20gJy4vZGVmaW5lLXByb3BlcnR5JztcbmltcG9ydCAqIGFzIHJlZ2lzdGVyRWxlbWVudFBhdGNoIGZyb20gJy4vcmVnaXN0ZXItZWxlbWVudCc7XG5pbXBvcnQgKiBhcyB3ZWJTb2NrZXRQYXRjaCBmcm9tICcuL3dlYnNvY2tldCc7XG5pbXBvcnQgKiBhcyBldmVudFRhcmdldFBhdGNoIGZyb20gJy4vZXZlbnQtdGFyZ2V0JztcbmltcG9ydCAqIGFzIHByb3BlcnR5RGVzY3JpcHRvclBhdGNoIGZyb20gJy4vcHJvcGVydHktZGVzY3JpcHRvcic7XG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvblBhdGNoIGZyb20gJy4vZ2VvbG9jYXRpb24nO1xuaW1wb3J0ICogYXMgZmlsZVJlYWRlclBhdGNoIGZyb20gJy4vZmlsZS1yZWFkZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkoKSB7XG4gIGZuUGF0Y2gucGF0Y2hTZXRDbGVhckZ1bmN0aW9uKGdsb2JhbCwgZ2xvYmFsLlpvbmUsIFtcbiAgICBbJ3NldFRpbWVvdXQnLCAnY2xlYXJUaW1lb3V0JywgZmFsc2UsIGZhbHNlXSxcbiAgICBbJ3NldEludGVydmFsJywgJ2NsZWFySW50ZXJ2YWwnLCB0cnVlLCBmYWxzZV0sXG4gICAgWydzZXRJbW1lZGlhdGUnLCAnY2xlYXJJbW1lZGlhdGUnLCBmYWxzZSwgZmFsc2VdLFxuICAgIFsncmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgJ2NhbmNlbEFuaW1hdGlvbkZyYW1lJywgZmFsc2UsIHRydWVdLFxuICAgIFsnbW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgJ21vekNhbmNlbEFuaW1hdGlvbkZyYW1lJywgZmFsc2UsIHRydWVdLFxuICAgIFsnd2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lJywgJ3dlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lJywgZmFsc2UsIHRydWVdXG4gIF0pO1xuXG4gIGZuUGF0Y2gucGF0Y2hGdW5jdGlvbihnbG9iYWwsIFtcbiAgICAnYWxlcnQnLFxuICAgICdwcm9tcHQnXG4gIF0pO1xuXG4gIGV2ZW50VGFyZ2V0UGF0Y2guYXBwbHkoKTtcblxuICBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaC5hcHBseSgpO1xuXG4gIHByb21pc2VQYXRjaC5hcHBseSgpO1xuXG4gIG11dGF0aW9uT2JzZXJ2ZXJQYXRjaC5wYXRjaENsYXNzKCdNdXRhdGlvbk9ic2VydmVyJyk7XG4gIG11dGF0aW9uT2JzZXJ2ZXJQYXRjaC5wYXRjaENsYXNzKCdXZWJLaXRNdXRhdGlvbk9ic2VydmVyJyk7XG5cbiAgZGVmaW5lUHJvcGVydHlQYXRjaC5hcHBseSgpO1xuXG4gIHJlZ2lzdGVyRWxlbWVudFBhdGNoLmFwcGx5KCk7XG5cbiAgZ2VvbG9jYXRpb25QYXRjaC5hcHBseSgpO1xuXG4gIGZpbGVSZWFkZXJQYXRjaC5hcHBseSgpO1xufVxuXG4iXX0=
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var wtf = __webpack_require__(12);
		function patchSetClearFunction(window, Zone, fnNames) {
		    function patchMacroTaskMethod(setName, clearName, repeating, isRaf) {
		        var setNative = window[setName];
		        var clearNative = window[clearName];
		        var ids = {};
		        if (setNative) {
		            var wtfSetEventFn = wtf.createEvent('Zone#' + setName + '(uint32 zone, uint32 id, uint32 delay)');
		            var wtfClearEventFn = wtf.createEvent('Zone#' + clearName + '(uint32 zone, uint32 id)');
		            var wtfCallbackFn = wtf.createScope('Zone#cb:' + setName + '(uint32 zone, uint32 id, uint32 delay)');
		            // Forward all calls from the window through the zone.
		            window[setName] = function () {
		                return global.zone[setName].apply(global.zone, arguments);
		            };
		            window[clearName] = function () {
		                return global.zone[clearName].apply(global.zone, arguments);
		            };
		            // Set up zone processing for the set function.
		            Zone.prototype[setName] = function (fn, delay) {
		                // We need to save `fn` in var different then argument. This is because
		                // in IE9 `argument[0]` and `fn` have same identity, and assigning to
		                // `argument[0]` changes `fn`.
		                var callbackFn = fn;
		                if (typeof callbackFn !== 'function') {
		                    // force the error by calling the method with wrong args
		                    setNative.apply(window, arguments);
		                }
		                var zone = this;
		                var setId = null;
		                // wrap the callback function into the zone.
		                arguments[0] = function () {
		                    var callbackZone = zone.isRootZone() || isRaf ? zone : zone.fork();
		                    var callbackThis = this;
		                    var callbackArgs = arguments;
		                    return wtf.leaveScope(wtfCallbackFn(callbackZone.$id, setId, delay), callbackZone.run(function () {
		                        if (!repeating) {
		                            delete ids[setId];
		                            callbackZone.removeTask(callbackFn);
		                        }
		                        return callbackFn.apply(callbackThis, callbackArgs);
		                    }));
		                };
		                if (repeating) {
		                    zone.addRepeatingTask(callbackFn);
		                }
		                else {
		                    zone.addTask(callbackFn);
		                }
		                setId = setNative.apply(window, arguments);
		                ids[setId] = callbackFn;
		                wtfSetEventFn(zone.$id, setId, delay);
		                return setId;
		            };
		            Zone.prototype[setName + 'Unpatched'] = function () {
		                return setNative.apply(window, arguments);
		            };
		            // Set up zone processing for the clear function.
		            Zone.prototype[clearName] = function (id) {
		                wtfClearEventFn(this.$id, id);
		                if (ids.hasOwnProperty(id)) {
		                    var callbackFn = ids[id];
		                    delete ids[id];
		                    if (repeating) {
		                        this.removeRepeatingTask(callbackFn);
		                    }
		                    else {
		                        this.removeTask(callbackFn);
		                    }
		                }
		                return clearNative.apply(window, arguments);
		            };
		            Zone.prototype[clearName + 'Unpatched'] = function () {
		                return clearNative.apply(window, arguments);
		            };
		        }
		    }
		    fnNames.forEach(function (args) {
		        patchMacroTaskMethod.apply(null, args);
		    });
		}
		exports.patchSetClearFunction = patchSetClearFunction;
		;
		function patchFunction(obj, fnNames) {
		    fnNames.forEach(function (name) {
		        var delegate = obj[name];
		        global.zone[name] = function () {
		            return delegate.apply(obj, arguments);
		        };
		        obj[name] = function () {
		            return global.zone[name].apply(this, arguments);
		        };
		    });
		}
		exports.patchFunction = patchFunction;
		;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3BhdGNoL2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6WyJwYXRjaFNldENsZWFyRnVuY3Rpb24iLCJwYXRjaFNldENsZWFyRnVuY3Rpb24ucGF0Y2hNYWNyb1Rhc2tNZXRob2QiLCJwYXRjaEZ1bmN0aW9uIl0sIm1hcHBpbmdzIjoiQUFDQSxJQUFZLEdBQUcsV0FBTSxRQUFRLENBQUMsQ0FBQTtBQUU5QiwrQkFBc0MsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPO0lBQ3pEQSw4QkFBOEJBLE9BQU9BLEVBQUVBLFNBQVNBLEVBQUVBLFNBQVNBLEVBQUVBLEtBQUtBO1FBQ2hFQyxJQUFJQSxTQUFTQSxHQUFHQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxDQUFDQTtRQUNoQ0EsSUFBSUEsV0FBV0EsR0FBR0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDcENBLElBQUlBLEdBQUdBLEdBQUdBLEVBQUVBLENBQUNBO1FBRWJBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO1lBQ2RBLElBQUlBLGFBQWFBLEdBQUdBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLEdBQUdBLE9BQU9BLEdBQUdBLHdDQUF3Q0EsQ0FBQ0EsQ0FBQ0E7WUFDbEdBLElBQUlBLGVBQWVBLEdBQUdBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBLE9BQU9BLEdBQUdBLFNBQVNBLEdBQUdBLDBCQUEwQkEsQ0FBQ0EsQ0FBQ0E7WUFDeEZBLElBQUlBLGFBQWFBLEdBQUdBLEdBQUdBLENBQUNBLFdBQVdBLENBQUNBLFVBQVVBLEdBQUdBLE9BQU9BLEdBQUdBLHdDQUF3Q0EsQ0FBQ0EsQ0FBQ0E7WUFFckdBLHNEQUFzREE7WUFDdERBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBO2dCQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUNBO1lBQ0ZBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBO2dCQUNsQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM5RCxDQUFDLENBQUNBO1lBR0ZBLCtDQUErQ0E7WUFDL0NBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLENBQUNBLEdBQUdBLFVBQVVBLEVBQUVBLEVBQUVBLEtBQUtBO2dCQUMzQyx1RUFBdUU7Z0JBQ3ZFLHFFQUFxRTtnQkFDckUsOEJBQThCO2dCQUM5QixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sVUFBVSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3JDLHdEQUF3RDtvQkFDeEQsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNoQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLDRDQUE0QztnQkFDNUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHO29CQUNiLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDbkUsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUN4QixJQUFJLFlBQVksR0FBRyxTQUFTLENBQUM7b0JBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUNqQixhQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQzdDLFlBQVksQ0FBQyxHQUFHLENBQUM7d0JBQ2YsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUNmLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNsQixZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDO3dCQUNELE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztvQkFDdEQsQ0FBQyxDQUFDLENBQ0wsQ0FBQztnQkFDSixDQUFDLENBQUM7Z0JBQ0YsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztnQkFDRCxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzNDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQ3hCLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQ0E7WUFFRkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsR0FBR0EsV0FBV0EsQ0FBQ0EsR0FBR0E7Z0JBQ3RDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUNBO1lBRUZBLGlEQUFpREE7WUFDakRBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLFVBQVVBLEVBQUVBO2dCQUN0QyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDOUIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDekIsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2YsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3ZDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDOUIsQ0FBQztnQkFDSCxDQUFDO2dCQUNELE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUNBO1lBRUZBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLFNBQVNBLEdBQUdBLFdBQVdBLENBQUNBLEdBQUdBO2dCQUN4QyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDQTtRQUVKQSxDQUFDQTtJQUNIQSxDQUFDQTtJQUNERCxPQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFTQSxJQUFJQTtRQUMzQixvQkFBb0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQ0EsQ0FBQ0E7QUFDTEEsQ0FBQ0E7QUF2RmUsNkJBQXFCLHdCQXVGcEMsQ0FBQTtBQUFBLENBQUM7QUFFRix1QkFBOEIsR0FBRyxFQUFFLE9BQU87SUFDeENFLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLElBQUlBO1FBQzVCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUM7UUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDVixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQ0EsQ0FBQ0E7QUFDTEEsQ0FBQ0E7QUFYZSxxQkFBYSxnQkFXNUIsQ0FBQTtBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgKiBhcyB3dGYgZnJvbSAnLi4vd3RmJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoU2V0Q2xlYXJGdW5jdGlvbih3aW5kb3csIFpvbmUsIGZuTmFtZXMpIHtcbiAgZnVuY3Rpb24gcGF0Y2hNYWNyb1Rhc2tNZXRob2Qoc2V0TmFtZSwgY2xlYXJOYW1lLCByZXBlYXRpbmcsIGlzUmFmKSB7XG4gICAgdmFyIHNldE5hdGl2ZSA9IHdpbmRvd1tzZXROYW1lXTtcbiAgICB2YXIgY2xlYXJOYXRpdmUgPSB3aW5kb3dbY2xlYXJOYW1lXTtcbiAgICB2YXIgaWRzID0ge307XG5cbiAgICBpZiAoc2V0TmF0aXZlKSB7XG4gICAgICB2YXIgd3RmU2V0RXZlbnRGbiA9IHd0Zi5jcmVhdGVFdmVudCgnWm9uZSMnICsgc2V0TmFtZSArICcodWludDMyIHpvbmUsIHVpbnQzMiBpZCwgdWludDMyIGRlbGF5KScpO1xuICAgICAgdmFyIHd0ZkNsZWFyRXZlbnRGbiA9IHd0Zi5jcmVhdGVFdmVudCgnWm9uZSMnICsgY2xlYXJOYW1lICsgJyh1aW50MzIgem9uZSwgdWludDMyIGlkKScpO1xuICAgICAgdmFyIHd0ZkNhbGxiYWNrRm4gPSB3dGYuY3JlYXRlU2NvcGUoJ1pvbmUjY2I6JyArIHNldE5hbWUgKyAnKHVpbnQzMiB6b25lLCB1aW50MzIgaWQsIHVpbnQzMiBkZWxheSknKTtcblxuICAgICAgLy8gRm9yd2FyZCBhbGwgY2FsbHMgZnJvbSB0aGUgd2luZG93IHRocm91Z2ggdGhlIHpvbmUuXG4gICAgICB3aW5kb3dbc2V0TmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuem9uZVtzZXROYW1lXS5hcHBseShnbG9iYWwuem9uZSwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3dbY2xlYXJOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbC56b25lW2NsZWFyTmFtZV0uYXBwbHkoZ2xvYmFsLnpvbmUsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuXG5cbiAgICAgIC8vIFNldCB1cCB6b25lIHByb2Nlc3NpbmcgZm9yIHRoZSBzZXQgZnVuY3Rpb24uXG4gICAgICBab25lLnByb3RvdHlwZVtzZXROYW1lXSA9IGZ1bmN0aW9uIChmbiwgZGVsYXkpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBzYXZlIGBmbmAgaW4gdmFyIGRpZmZlcmVudCB0aGVuIGFyZ3VtZW50LiBUaGlzIGlzIGJlY2F1c2VcbiAgICAgICAgLy8gaW4gSUU5IGBhcmd1bWVudFswXWAgYW5kIGBmbmAgaGF2ZSBzYW1lIGlkZW50aXR5LCBhbmQgYXNzaWduaW5nIHRvXG4gICAgICAgIC8vIGBhcmd1bWVudFswXWAgY2hhbmdlcyBgZm5gLlxuICAgICAgICB2YXIgY2FsbGJhY2tGbiA9IGZuO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrRm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAvLyBmb3JjZSB0aGUgZXJyb3IgYnkgY2FsbGluZyB0aGUgbWV0aG9kIHdpdGggd3JvbmcgYXJnc1xuICAgICAgICAgIHNldE5hdGl2ZS5hcHBseSh3aW5kb3csIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHpvbmUgPSB0aGlzO1xuICAgICAgICB2YXIgc2V0SWQgPSBudWxsO1xuICAgICAgICAvLyB3cmFwIHRoZSBjYWxsYmFjayBmdW5jdGlvbiBpbnRvIHRoZSB6b25lLlxuICAgICAgICBhcmd1bWVudHNbMF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2tab25lID0gem9uZS5pc1Jvb3Rab25lKCkgfHwgaXNSYWYgPyB6b25lIDogem9uZS5mb3JrKCk7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrVGhpcyA9IHRoaXM7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrQXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgICByZXR1cm4gd3RmLmxlYXZlU2NvcGUoXG4gICAgICAgICAgICAgIHd0ZkNhbGxiYWNrRm4oY2FsbGJhY2tab25lLiRpZCwgc2V0SWQsIGRlbGF5KSxcbiAgICAgICAgICAgICAgY2FsbGJhY2tab25lLnJ1bihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdGluZykge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIGlkc1tzZXRJZF07XG4gICAgICAgICAgICAgICAgICBjYWxsYmFja1pvbmUucmVtb3ZlVGFzayhjYWxsYmFja0ZuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrRm4uYXBwbHkoY2FsbGJhY2tUaGlzLCBjYWxsYmFja0FyZ3MpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZXBlYXRpbmcpIHtcbiAgICAgICAgICB6b25lLmFkZFJlcGVhdGluZ1Rhc2soY2FsbGJhY2tGbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgem9uZS5hZGRUYXNrKGNhbGxiYWNrRm4pO1xuICAgICAgICB9XG4gICAgICAgIHNldElkID0gc2V0TmF0aXZlLmFwcGx5KHdpbmRvdywgYXJndW1lbnRzKTtcbiAgICAgICAgaWRzW3NldElkXSA9IGNhbGxiYWNrRm47XG4gICAgICAgIHd0ZlNldEV2ZW50Rm4oem9uZS4kaWQsIHNldElkLCBkZWxheSk7XG4gICAgICAgIHJldHVybiBzZXRJZDtcbiAgICAgIH07XG5cbiAgICAgIFpvbmUucHJvdG90eXBlW3NldE5hbWUgKyAnVW5wYXRjaGVkJ10gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHNldE5hdGl2ZS5hcHBseSh3aW5kb3csIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuXG4gICAgICAvLyBTZXQgdXAgem9uZSBwcm9jZXNzaW5nIGZvciB0aGUgY2xlYXIgZnVuY3Rpb24uXG4gICAgICBab25lLnByb3RvdHlwZVtjbGVhck5hbWVdID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHd0ZkNsZWFyRXZlbnRGbih0aGlzLiRpZCwgaWQpO1xuICAgICAgICBpZiAoaWRzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgIHZhciBjYWxsYmFja0ZuID0gaWRzW2lkXTtcbiAgICAgICAgICBkZWxldGUgaWRzW2lkXTtcbiAgICAgICAgICBpZiAocmVwZWF0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVJlcGVhdGluZ1Rhc2soY2FsbGJhY2tGbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlVGFzayhjYWxsYmFja0ZuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsZWFyTmF0aXZlLmFwcGx5KHdpbmRvdywgYXJndW1lbnRzKTtcbiAgICAgIH07XG5cbiAgICAgIFpvbmUucHJvdG90eXBlW2NsZWFyTmFtZSArICdVbnBhdGNoZWQnXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY2xlYXJOYXRpdmUuYXBwbHkod2luZG93LCBhcmd1bWVudHMpO1xuICAgICAgfTtcblxuICAgIH1cbiAgfVxuICBmbk5hbWVzLmZvckVhY2goZnVuY3Rpb24oYXJncykge1xuICAgIHBhdGNoTWFjcm9UYXNrTWV0aG9kLmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaEZ1bmN0aW9uKG9iaiwgZm5OYW1lcykge1xuICBmbk5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGVsZWdhdGUgPSBvYmpbbmFtZV07XG4gICAgZ2xvYmFsLnpvbmVbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkob2JqLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBvYmpbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsLnpvbmVbbmFtZV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9KTtcbn07XG4iXX0=
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		/* WEBPACK VAR INJECTION */(function(global) {// Detect and setup WTF.
		var wtfTrace = null;
		var wtfEvents = null;
		var wtfEnabled = (function () {
		    var wtf = global['wtf'];
		    if (wtf) {
		        wtfTrace = wtf['trace'];
		        if (wtfTrace) {
		            wtfEvents = wtfTrace['events'];
		            return true;
		        }
		    }
		    return false;
		})();
		function noop() {
		}
		exports.enabled = wtfEnabled;
		exports.createScope = wtfEnabled ? function (signature, flags) {
		    return wtfEvents.createScope(signature, flags);
		} : function (s, f) {
		    return noop;
		};
		exports.createEvent = wtfEnabled ? function (signature, flags) {
		    return wtfEvents.createInstance(signature, flags);
		} : function (s, f) {
		    return noop;
		};
		exports.leaveScope = wtfEnabled ? function (scope, returnValue) {
		    wtfTrace.leaveScope(scope, returnValue);
		    return returnValue;
		} : function (s, v) {
		    return v;
		};
		exports.beginTimeRange = wtfEnabled ? function (rangeType, action) {
		    return wtfTrace.beginTimeRange(rangeType, action);
		} : function (t, a) {
		    return null;
		};
		exports.endTimeRange = wtfEnabled ? function (range) {
		    wtfTrace.endTimeRange(range);
		} : function (r) {
		};
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3RmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3d0Zi50cyJdLCJuYW1lcyI6WyJub29wIl0sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7QUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztBQUNyQixJQUFJLFVBQVUsR0FBRyxDQUFDO0lBQ2hCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1IsUUFBUSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2IsU0FBUyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVMO0FBQ0FBLENBQUNBO0FBVVksZUFBTyxHQUFXLFVBQVUsQ0FBQztBQUM3QixtQkFBVyxHQUFnRCxVQUFVLEdBQUcsVUFBVSxTQUFTLEVBQUUsS0FBSztJQUM3RyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakQsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNXLG1CQUFXLEdBQXVELFVBQVUsR0FBRyxVQUFVLFNBQVMsRUFBRSxLQUFLO0lBQ3BILE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwRCxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBQ1csa0JBQVUsR0FBRyxVQUFVLEdBQUcsVUFBVSxLQUFnQixFQUFFLFdBQWU7SUFDaEYsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEMsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUNyQixDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUNoQixNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1gsQ0FBQyxDQUFDO0FBQ1csc0JBQWMsR0FBRyxVQUFVLEdBQUcsVUFBVSxTQUFTLEVBQUUsTUFBTTtJQUNwRSxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDcEQsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNXLG9CQUFZLEdBQUcsVUFBVSxHQUFHLFVBQVUsS0FBSztJQUN0RCxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLENBQUMsR0FBRyxVQUFVLENBQUM7QUFDZixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZXRlY3QgYW5kIHNldHVwIFdURi5cbnZhciB3dGZUcmFjZSA9IG51bGw7XG52YXIgd3RmRXZlbnRzID0gbnVsbDtcbnZhciB3dGZFbmFibGVkID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHd0ZiA9IGdsb2JhbFsnd3RmJ107XG4gIGlmICh3dGYpIHtcbiAgICB3dGZUcmFjZSA9IHd0ZlsndHJhY2UnXTtcbiAgICBpZiAod3RmVHJhY2UpIHtcbiAgICAgIHd0ZkV2ZW50cyA9IHd0ZlRyYWNlWydldmVudHMnXTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59KSgpO1xuXG5mdW5jdGlvbiBub29wKCkge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFd0ZlNjb3BlRm4ge1xuICAoLi4uYXJncyk6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXdGZFdmVudEZuIHtcbiAgKC4uLmFyZ3MpOiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBlbmFibGVkOmJvb2xlYW4gPSB3dGZFbmFibGVkO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVNjb3BlOihzaWduYXR1cmU6c3RyaW5nLCBmbGFncz86YW55KSA9PiBXdGZTY29wZUZuID0gd3RmRW5hYmxlZCA/IGZ1bmN0aW9uIChzaWduYXR1cmUsIGZsYWdzKSB7XG4gIHJldHVybiB3dGZFdmVudHMuY3JlYXRlU2NvcGUoc2lnbmF0dXJlLCBmbGFncyk7XG59IDogZnVuY3Rpb24gKHMsIGYpIHtcbiAgcmV0dXJuIG5vb3A7XG59O1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUV2ZW50OiAoc2lnbmF0dXJlOiBzdHJpbmcsIGFjdGlvbj86IHN0cmluZykgPT4gV3RmRXZlbnRGbiA9IHd0ZkVuYWJsZWQgPyBmdW5jdGlvbiAoc2lnbmF0dXJlLCBmbGFncykge1xuICByZXR1cm4gd3RmRXZlbnRzLmNyZWF0ZUluc3RhbmNlKHNpZ25hdHVyZSwgZmxhZ3MpO1xufSA6IGZ1bmN0aW9uIChzLCBmKSB7XG4gIHJldHVybiBub29wO1xufTtcbmV4cG9ydCBjb25zdCBsZWF2ZVNjb3BlID0gd3RmRW5hYmxlZCA/IGZ1bmN0aW9uIChzY29wZTpXdGZTY29wZUZuLCByZXR1cm5WYWx1ZTphbnkpOmFueSB7XG4gIHd0ZlRyYWNlLmxlYXZlU2NvcGUoc2NvcGUsIHJldHVyblZhbHVlKTtcbiAgcmV0dXJuIHJldHVyblZhbHVlO1xufSA6IGZ1bmN0aW9uIChzLCB2KSB7XG4gIHJldHVybiB2O1xufTtcbmV4cG9ydCBjb25zdCBiZWdpblRpbWVSYW5nZSA9IHd0ZkVuYWJsZWQgPyBmdW5jdGlvbiAocmFuZ2VUeXBlLCBhY3Rpb24pIHtcbiAgcmV0dXJuIHd0ZlRyYWNlLmJlZ2luVGltZVJhbmdlKHJhbmdlVHlwZSwgYWN0aW9uKTtcbn0gOiBmdW5jdGlvbiAodCwgYSkge1xuICByZXR1cm4gbnVsbDtcbn07XG5leHBvcnQgY29uc3QgZW5kVGltZVJhbmdlID0gd3RmRW5hYmxlZCA/IGZ1bmN0aW9uIChyYW5nZSkge1xuICB3dGZUcmFjZS5lbmRUaW1lUmFuZ2UocmFuZ2UpO1xufSA6IGZ1bmN0aW9uIChyKSB7XG59O1xuIl19
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var keys = __webpack_require__(7);
		var originalInstanceKey = keys.create('originalInstance');
		var creationZoneKey = keys.create('creationZone');
		var isActiveKey = keys.create('isActive');
		// wrap some native API on `window`
		function patchClass(className) {
		    var OriginalClass = global[className];
		    if (!OriginalClass)
		        return;
		    global[className] = function (fn) {
		        this[originalInstanceKey] = new OriginalClass(global.zone.bind(fn, true));
		        // Remember where the class was instantiate to execute the enqueueTask and dequeueTask hooks
		        this[creationZoneKey] = global.zone;
		    };
		    var instance = new OriginalClass(function () { });
		    global[className].prototype.disconnect = function () {
		        var result = this[originalInstanceKey].disconnect.apply(this[originalInstanceKey], arguments);
		        if (this[isActiveKey]) {
		            this[creationZoneKey].dequeueTask();
		            this[isActiveKey] = false;
		        }
		        return result;
		    };
		    global[className].prototype.observe = function () {
		        if (!this[isActiveKey]) {
		            this[creationZoneKey].enqueueTask();
		            this[isActiveKey] = true;
		        }
		        return this[originalInstanceKey].observe.apply(this[originalInstanceKey], arguments);
		    };
		    var prop;
		    for (prop in instance) {
		        (function (prop) {
		            if (typeof global[className].prototype !== 'undefined') {
		                return;
		            }
		            if (typeof instance[prop] === 'function') {
		                global[className].prototype[prop] = function () {
		                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
		                };
		            }
		            else {
		                Object.defineProperty(global[className].prototype, prop, {
		                    set: function (fn) {
		                        if (typeof fn === 'function') {
		                            this[originalInstanceKey][prop] = global.zone.bind(fn);
		                        }
		                        else {
		                            this[originalInstanceKey][prop] = fn;
		                        }
		                    },
		                    get: function () {
		                        return this[originalInstanceKey][prop];
		                    }
		                });
		            }
		        }(prop));
		    }
		}
		exports.patchClass = patchClass;
		;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXV0YXRpb24tb2JzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcGF0Y2gvbXV0YXRpb24tb2JzZXJ2ZXIudHMiXSwibmFtZXMiOlsicGF0Y2hDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFaEMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDMUQsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNsRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRTFDLG1DQUFtQztBQUNuQyxvQkFBMkIsU0FBUztJQUNsQ0EsSUFBSUEsYUFBYUEsR0FBR0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFDdENBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBLGFBQWFBLENBQUNBO1FBQUNBLE1BQU1BLENBQUNBO0lBRTNCQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxVQUFVQSxFQUFFQTtRQUM5QixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMxRSw0RkFBNEY7UUFDNUYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDdEMsQ0FBQyxDQUFDQTtJQUVGQSxJQUFJQSxRQUFRQSxHQUFHQSxJQUFJQSxhQUFhQSxDQUFDQSxjQUFhLENBQUMsQ0FBQ0EsQ0FBQ0E7SUFFakRBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLEdBQUdBO1FBQ3ZDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDOUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDLENBQUNBO0lBRUZBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLE9BQU9BLEdBQUdBO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdkYsQ0FBQyxDQUFDQTtJQUVGQSxJQUFJQSxJQUFJQSxDQUFDQTtJQUNUQSxHQUFHQSxDQUFDQSxDQUFDQSxJQUFJQSxJQUFJQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN0QkEsQ0FBQ0EsVUFBVUEsSUFBSUE7WUFDYixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsTUFBTSxDQUFDO1lBQ1QsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUc7b0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3JGLENBQUMsQ0FBQztZQUNKLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFO29CQUN2RCxHQUFHLEVBQUUsVUFBVSxFQUFFO3dCQUNmLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN6RCxDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDdkMsQ0FBQztvQkFDSCxDQUFDO29CQUNELEdBQUcsRUFBRTt3QkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pDLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztRQUNILENBQUMsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDWEEsQ0FBQ0E7QUFDSEEsQ0FBQ0E7QUF2RGUsa0JBQVUsYUF1RHpCLENBQUE7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMga2V5cyBmcm9tICcuLi9rZXlzJztcblxudmFyIG9yaWdpbmFsSW5zdGFuY2VLZXkgPSBrZXlzLmNyZWF0ZSgnb3JpZ2luYWxJbnN0YW5jZScpO1xudmFyIGNyZWF0aW9uWm9uZUtleSA9IGtleXMuY3JlYXRlKCdjcmVhdGlvblpvbmUnKTtcbnZhciBpc0FjdGl2ZUtleSA9IGtleXMuY3JlYXRlKCdpc0FjdGl2ZScpO1xuXG4vLyB3cmFwIHNvbWUgbmF0aXZlIEFQSSBvbiBgd2luZG93YFxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIHZhciBPcmlnaW5hbENsYXNzID0gZ2xvYmFsW2NsYXNzTmFtZV07XG4gIGlmICghT3JpZ2luYWxDbGFzcykgcmV0dXJuO1xuXG4gIGdsb2JhbFtjbGFzc05hbWVdID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGdsb2JhbC56b25lLmJpbmQoZm4sIHRydWUpKTtcbiAgICAvLyBSZW1lbWJlciB3aGVyZSB0aGUgY2xhc3Mgd2FzIGluc3RhbnRpYXRlIHRvIGV4ZWN1dGUgdGhlIGVucXVldWVUYXNrIGFuZCBkZXF1ZXVlVGFzayBob29rc1xuICAgIHRoaXNbY3JlYXRpb25ab25lS2V5XSA9IGdsb2JhbC56b25lO1xuICB9O1xuXG4gIHZhciBpbnN0YW5jZSA9IG5ldyBPcmlnaW5hbENsYXNzKGZ1bmN0aW9uICgpIHt9KTtcblxuICBnbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0ID0gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XS5kaXNjb25uZWN0LmFwcGx5KHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0sIGFyZ3VtZW50cyk7XG4gICAgaWYgKHRoaXNbaXNBY3RpdmVLZXldKSB7XG4gICAgICB0aGlzW2NyZWF0aW9uWm9uZUtleV0uZGVxdWV1ZVRhc2soKTtcbiAgICAgIHRoaXNbaXNBY3RpdmVLZXldID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgZ2xvYmFsW2NsYXNzTmFtZV0ucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzW2lzQWN0aXZlS2V5XSkge1xuICAgICAgdGhpc1tjcmVhdGlvblpvbmVLZXldLmVucXVldWVUYXNrKCk7XG4gICAgICB0aGlzW2lzQWN0aXZlS2V5XSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldLm9ic2VydmUuYXBwbHkodGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSwgYXJndW1lbnRzKTtcbiAgfTtcblxuICB2YXIgcHJvcDtcbiAgZm9yIChwcm9wIGluIGluc3RhbmNlKSB7XG4gICAgKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBpZiAodHlwZW9mIGdsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZVtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBnbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV1bcHJvcF0uYXBwbHkodGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWxbY2xhc3NOYW1lXS5wcm90b3R5cGUsIHByb3AsIHtcbiAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gZ2xvYmFsLnpvbmUuYmluZChmbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdID0gZm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfShwcm9wKSk7XG4gIH1cbn07XG4iXX0=
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		var keys = __webpack_require__(7);
		// might need similar for object.freeze
		// i regret nothing
		var _defineProperty = Object.defineProperty;
		var _getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
		var _create = Object.create;
		var unconfigurablesKey = keys.create('unconfigurables');
		function apply() {
		    Object.defineProperty = function (obj, prop, desc) {
		        if (isUnconfigurable(obj, prop)) {
		            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
		        }
		        if (prop !== 'prototype') {
		            desc = rewriteDescriptor(obj, prop, desc);
		        }
		        return _defineProperty(obj, prop, desc);
		    };
		    Object.defineProperties = function (obj, props) {
		        Object.keys(props).forEach(function (prop) {
		            Object.defineProperty(obj, prop, props[prop]);
		        });
		        return obj;
		    };
		    Object.create = function (obj, proto) {
		        if (typeof proto === 'object') {
		            Object.keys(proto).forEach(function (prop) {
		                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
		            });
		        }
		        return _create(obj, proto);
		    };
		    Object.getOwnPropertyDescriptor = function (obj, prop) {
		        var desc = _getOwnPropertyDescriptor(obj, prop);
		        if (isUnconfigurable(obj, prop)) {
		            desc.configurable = false;
		        }
		        return desc;
		    };
		}
		exports.apply = apply;
		;
		function _redefineProperty(obj, prop, desc) {
		    desc = rewriteDescriptor(obj, prop, desc);
		    return _defineProperty(obj, prop, desc);
		}
		exports._redefineProperty = _redefineProperty;
		;
		function isUnconfigurable(obj, prop) {
		    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
		}
		function rewriteDescriptor(obj, prop, desc) {
		    desc.configurable = true;
		    if (!desc.configurable) {
		        if (!obj[unconfigurablesKey]) {
		            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
		        }
		        obj[unconfigurablesKey][prop] = true;
		    }
		    return desc;
		}
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmaW5lLXByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3BhdGNoL2RlZmluZS1wcm9wZXJ0eS50cyJdLCJuYW1lcyI6WyJhcHBseSIsIl9yZWRlZmluZVByb3BlcnR5IiwiaXNVbmNvbmZpZ3VyYWJsZSIsInJld3JpdGVEZXNjcmlwdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFZLElBQUksV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUVoQyx1Q0FBdUM7QUFDdkMsbUJBQW1CO0FBRW5CLElBQUksZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7QUFDNUMsSUFBSSx5QkFBeUIsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUM7QUFDaEUsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUM1QixJQUFJLGtCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUV4RDtJQUNFQSxNQUFNQSxDQUFDQSxjQUFjQSxHQUFHQSxVQUFVQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQTtRQUMvQyxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sSUFBSSxTQUFTLENBQUMsd0NBQXdDLEdBQUcsSUFBSSxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN4RixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxHQUFHLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUNELE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUNBO0lBRUZBLE1BQU1BLENBQUNBLGdCQUFnQkEsR0FBR0EsVUFBVUEsR0FBR0EsRUFBRUEsS0FBS0E7UUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO1lBQ3ZDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDLENBQUNBO0lBRUZBLE1BQU1BLENBQUNBLE1BQU1BLEdBQUdBLFVBQVVBLEdBQUdBLEVBQUVBLEtBQUtBO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO2dCQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUNBO0lBRUZBLE1BQU1BLENBQUNBLHdCQUF3QkEsR0FBR0EsVUFBVUEsR0FBR0EsRUFBRUEsSUFBSUE7UUFDbkQsSUFBSSxJQUFJLEdBQUcseUJBQXlCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hELEVBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDLENBQUNBO0FBQ0pBLENBQUNBO0FBbENlLGFBQUssUUFrQ3BCLENBQUE7QUFBQSxDQUFDO0FBRUYsMkJBQWtDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSTtJQUMvQ0MsSUFBSUEsR0FBR0EsaUJBQWlCQSxDQUFDQSxHQUFHQSxFQUFFQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUMxQ0EsTUFBTUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsR0FBR0EsRUFBRUEsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDMUNBLENBQUNBO0FBSGUseUJBQWlCLG9CQUdoQyxDQUFBO0FBQUEsQ0FBQztBQUVGLDBCQUEyQixHQUFHLEVBQUUsSUFBSTtJQUNsQ0MsTUFBTUEsQ0FBQ0EsR0FBR0EsSUFBSUEsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxJQUFJQSxHQUFHQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0FBQ3pFQSxDQUFDQTtBQUVELDJCQUE0QixHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUk7SUFDekNDLElBQUlBLENBQUNBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBO0lBQ3pCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN2QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM3QkEsZUFBZUEsQ0FBQ0EsR0FBR0EsRUFBRUEsa0JBQWtCQSxFQUFFQSxFQUFFQSxRQUFRQSxFQUFFQSxJQUFJQSxFQUFFQSxLQUFLQSxFQUFFQSxFQUFFQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUMxRUEsQ0FBQ0E7UUFDREEsR0FBR0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQTtJQUN2Q0EsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7QUFDZEEsQ0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBrZXlzIGZyb20gJy4uL2tleXMnO1xuXG4vLyBtaWdodCBuZWVkIHNpbWlsYXIgZm9yIG9iamVjdC5mcmVlemVcbi8vIGkgcmVncmV0IG5vdGhpbmdcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBfY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciB1bmNvbmZpZ3VyYWJsZXNLZXkgPSBrZXlzLmNyZWF0ZSgndW5jb25maWd1cmFibGVzJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseSgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iaiwgcHJvcCwgZGVzYykge1xuICAgIGlmIChpc1VuY29uZmlndXJhYmxlKG9iaiwgcHJvcCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBhc3NpZ24gdG8gcmVhZCBvbmx5IHByb3BlcnR5IFxcJycgKyBwcm9wICsgJ1xcJyBvZiAnICsgb2JqKTtcbiAgICB9XG4gICAgaWYgKHByb3AgIT09ICdwcm90b3R5cGUnKSB7XG4gICAgICBkZXNjID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBkZXNjKTtcbiAgICB9XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpO1xuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gKG9iaiwgcHJvcHMpIHtcbiAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgcHJvcHNbcHJvcF0pO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH07XG5cbiAgT2JqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChvYmosIHByb3RvKSB7XG4gICAgaWYgKHR5cGVvZiBwcm90byA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHByb3RvKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHByb3RvW3Byb3BdID0gcmV3cml0ZURlc2NyaXB0b3Iob2JqLCBwcm9wLCBwcm90b1twcm9wXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIF9jcmVhdGUob2JqLCBwcm90byk7XG4gIH07XG5cbiAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChvYmosIHByb3ApIHtcbiAgICB2YXIgZGVzYyA9IF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICBpZiAoaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApKSB7XG4gICAgICBkZXNjLmNvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZGVzYztcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfcmVkZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIGRlc2MpIHtcbiAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG4gIHJldHVybiBfZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcbn07XG5cbmZ1bmN0aW9uIGlzVW5jb25maWd1cmFibGUgKG9iaiwgcHJvcCkge1xuICByZXR1cm4gb2JqICYmIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldICYmIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldW3Byb3BdO1xufVxuXG5mdW5jdGlvbiByZXdyaXRlRGVzY3JpcHRvciAob2JqLCBwcm9wLCBkZXNjKSB7XG4gIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgaWYgKCFkZXNjLmNvbmZpZ3VyYWJsZSkge1xuICAgIGlmICghb2JqW3VuY29uZmlndXJhYmxlc0tleV0pIHtcbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShvYmosIHVuY29uZmlndXJhYmxlc0tleSwgeyB3cml0YWJsZTogdHJ1ZSwgdmFsdWU6IHt9IH0pO1xuICAgIH1cbiAgICBvYmpbdW5jb25maWd1cmFibGVzS2V5XVtwcm9wXSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGRlc2M7XG59XG5cblxuIl19

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var define_property_1 = __webpack_require__(14);
		var utils = __webpack_require__(9);
		function apply() {
		    if (utils.isWebWorker() || !('registerElement' in global.document)) {
		        return;
		    }
		    var _registerElement = document.registerElement;
		    var callbacks = [
		        'createdCallback',
		        'attachedCallback',
		        'detachedCallback',
		        'attributeChangedCallback'
		    ];
		    document.registerElement = function (name, opts) {
		        if (opts && opts.prototype) {
		            callbacks.forEach(function (callback) {
		                if (opts.prototype.hasOwnProperty(callback)) {
		                    var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
		                    if (descriptor && descriptor.value) {
		                        descriptor.value = global.zone.bind(descriptor.value);
		                        define_property_1._redefineProperty(opts.prototype, callback, descriptor);
		                    }
		                    else {
		                        opts.prototype[callback] = global.zone.bind(opts.prototype[callback]);
		                    }
		                }
		                else if (opts.prototype[callback]) {
		                    opts.prototype[callback] = global.zone.bind(opts.prototype[callback]);
		                }
		            });
		        }
		        return _registerElement.apply(document, [name, opts]);
		    };
		}
		exports.apply = apply;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXItZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9wYXRjaC9yZWdpc3Rlci1lbGVtZW50LnRzIl0sIm5hbWVzIjpbImFwcGx5Il0sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0MsbUJBQW1CLENBQUMsQ0FBQTtBQUNwRCxJQUFZLEtBQUssV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUVsQztJQUNFQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxXQUFXQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQSxpQkFBaUJBLElBQVVBLE1BQU9BLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQzFFQSxNQUFNQSxDQUFDQTtJQUNUQSxDQUFDQTtJQUVEQSxJQUFJQSxnQkFBZ0JBLEdBQVNBLFFBQVNBLENBQUNBLGVBQWVBLENBQUNBO0lBQ3ZEQSxJQUFJQSxTQUFTQSxHQUFHQTtRQUNkQSxpQkFBaUJBO1FBQ2pCQSxrQkFBa0JBO1FBQ2xCQSxrQkFBa0JBO1FBQ2xCQSwwQkFBMEJBO0tBQzNCQSxDQUFDQTtJQUVJQSxRQUFTQSxDQUFDQSxlQUFlQSxHQUFHQSxVQUFVQSxJQUFJQSxFQUFFQSxJQUFJQTtRQUNwRCxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLFFBQVE7Z0JBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzNFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsVUFBVSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3RELG1DQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUMxRCxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUN4RSxDQUFDO2dCQUNILENBQUM7Z0JBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDeEUsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDQTtBQUNKQSxDQUFDQTtBQWhDZSxhQUFLLFFBZ0NwQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtfcmVkZWZpbmVQcm9wZXJ0eX0gZnJvbSAnLi9kZWZpbmUtcHJvcGVydHknO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkoKSB7XG4gIGlmICh1dGlscy5pc1dlYldvcmtlcigpIHx8ICEoJ3JlZ2lzdGVyRWxlbWVudCcgaW4gKDxhbnk+Z2xvYmFsKS5kb2N1bWVudCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX3JlZ2lzdGVyRWxlbWVudCA9ICg8YW55PmRvY3VtZW50KS5yZWdpc3RlckVsZW1lbnQ7XG4gIHZhciBjYWxsYmFja3MgPSBbXG4gICAgJ2NyZWF0ZWRDYWxsYmFjaycsXG4gICAgJ2F0dGFjaGVkQ2FsbGJhY2snLFxuICAgICdkZXRhY2hlZENhbGxiYWNrJyxcbiAgICAnYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJ1xuICBdO1xuXG4gICg8YW55PmRvY3VtZW50KS5yZWdpc3RlckVsZW1lbnQgPSBmdW5jdGlvbiAobmFtZSwgb3B0cykge1xuICAgIGlmIChvcHRzICYmIG9wdHMucHJvdG90eXBlKSB7XG4gICAgICBjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKG9wdHMucHJvdG90eXBlLmhhc093blByb3BlcnR5KGNhbGxiYWNrKSkge1xuICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvcHRzLnByb3RvdHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWUpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBnbG9iYWwuem9uZS5iaW5kKGRlc2NyaXB0b3IudmFsdWUpO1xuICAgICAgICAgICAgX3JlZGVmaW5lUHJvcGVydHkob3B0cy5wcm90b3R5cGUsIGNhbGxiYWNrLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0cy5wcm90b3R5cGVbY2FsbGJhY2tdID0gZ2xvYmFsLnpvbmUuYmluZChvcHRzLnByb3RvdHlwZVtjYWxsYmFja10pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvcHRzLnByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICBvcHRzLnByb3RvdHlwZVtjYWxsYmFja10gPSBnbG9iYWwuem9uZS5iaW5kKG9wdHMucHJvdG90eXBlW2NhbGxiYWNrXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVnaXN0ZXJFbGVtZW50LmFwcGx5KGRvY3VtZW50LCBbbmFtZSwgb3B0c10pO1xuICB9O1xufVxuIl19
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {'use strict';
		var utils = __webpack_require__(9);
		function apply() {
		    // patched properties depend on addEventListener, so this needs to come first
		    if (global.EventTarget) {
		        utils.patchEventTargetMethods(global.EventTarget.prototype);
		    }
		    else {
		        var apis = [
		            'ApplicationCache',
		            'EventSource',
		            'FileReader',
		            'InputMethodContext',
		            'MediaController',
		            'MessagePort',
		            'Node',
		            'Performance',
		            'SVGElementInstance',
		            'SharedWorker',
		            'TextTrack',
		            'TextTrackCue',
		            'TextTrackList',
		            'WebKitNamedFlow',
		            'Worker',
		            'WorkerGlobalScope',
		            'XMLHttpRequest',
		            'XMLHttpRequestEventTarget',
		            'XMLHttpRequestUpload'
		        ];
		        apis.forEach(function (api) {
		            var proto = global[api] && global[api].prototype;
		            // Some browsers e.g. Android 4.3's don't actually implement
		            // the EventTarget methods for all of these e.g. FileReader.
		            // In this case, there is nothing to patch.
		            if (proto && proto.addEventListener) {
		                utils.patchEventTargetMethods(proto);
		            }
		        });
		        // Patch the methods on `window` instead of `Window.prototype`
		        // `Window` is not accessible on Android 4.3
		        if (typeof (window) !== 'undefined') {
		            utils.patchEventTargetMethods(window);
		        }
		    }
		}
		exports.apply = apply;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtdGFyZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3BhdGNoL2V2ZW50LXRhcmdldC50cyJdLCJuYW1lcyI6WyJhcHBseSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIsSUFBWSxLQUFLLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFFbEM7SUFDRUEsNkVBQTZFQTtJQUM3RUEsRUFBRUEsQ0FBQ0EsQ0FBT0EsTUFBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDOUJBLEtBQUtBLENBQUNBLHVCQUF1QkEsQ0FBT0EsTUFBT0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7SUFJckVBLENBQUNBO0lBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ05BLElBQUlBLElBQUlBLEdBQUdBO1lBQ1RBLGtCQUFrQkE7WUFDbEJBLGFBQWFBO1lBQ2JBLFlBQVlBO1lBQ1pBLG9CQUFvQkE7WUFDcEJBLGlCQUFpQkE7WUFDakJBLGFBQWFBO1lBQ2JBLE1BQU1BO1lBQ05BLGFBQWFBO1lBQ2JBLG9CQUFvQkE7WUFDcEJBLGNBQWNBO1lBQ2RBLFdBQVdBO1lBQ1hBLGNBQWNBO1lBQ2RBLGVBQWVBO1lBQ2ZBLGlCQUFpQkE7WUFDakJBLFFBQVFBO1lBQ1JBLG1CQUFtQkE7WUFDbkJBLGdCQUFnQkE7WUFDaEJBLDJCQUEyQkE7WUFDM0JBLHNCQUFzQkE7U0FDdkJBLENBQUNBO1FBRUZBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFVBQVNBLEdBQUdBO1lBQ3ZCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBRWpELDREQUE0RDtZQUM1RCw0REFBNEQ7WUFDNUQsMkNBQTJDO1lBQzNDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsQ0FBQztRQUNILENBQUMsQ0FBQ0EsQ0FBQ0E7UUFFSEEsOERBQThEQTtRQUM5REEsNENBQTRDQTtRQUM1Q0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsV0FBV0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbkNBLEtBQUtBLENBQUNBLHVCQUF1QkEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsQ0FBQ0E7UUFDeENBLENBQUNBO0lBQ0hBLENBQUNBO0FBQ0hBLENBQUNBO0FBL0NlLGFBQUssUUErQ3BCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KCkge1xuICAvLyBwYXRjaGVkIHByb3BlcnRpZXMgZGVwZW5kIG9uIGFkZEV2ZW50TGlzdGVuZXIsIHNvIHRoaXMgbmVlZHMgdG8gY29tZSBmaXJzdFxuICBpZiAoKDxhbnk+Z2xvYmFsKS5FdmVudFRhcmdldCkge1xuICAgIHV0aWxzLnBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKCg8YW55Pmdsb2JhbCkuRXZlbnRUYXJnZXQucHJvdG90eXBlKTtcblxuICAvLyBOb3RlOiBFdmVudFRhcmdldCBpcyBub3QgYXZhaWxhYmxlIGluIGFsbCBicm93c2VycyxcbiAgLy8gaWYgaXQncyBub3QgYXZhaWxhYmxlLCB3ZSBpbnN0ZWFkIHBhdGNoIHRoZSBBUElzIGluIHRoZSBJREwgdGhhdCBpbmhlcml0IGZyb20gRXZlbnRUYXJnZXRcbiAgfSBlbHNlIHtcbiAgICB2YXIgYXBpcyA9IFtcbiAgICAgICdBcHBsaWNhdGlvbkNhY2hlJyxcbiAgICAgICdFdmVudFNvdXJjZScsXG4gICAgICAnRmlsZVJlYWRlcicsXG4gICAgICAnSW5wdXRNZXRob2RDb250ZXh0JyxcbiAgICAgICdNZWRpYUNvbnRyb2xsZXInLFxuICAgICAgJ01lc3NhZ2VQb3J0JyxcbiAgICAgICdOb2RlJyxcbiAgICAgICdQZXJmb3JtYW5jZScsXG4gICAgICAnU1ZHRWxlbWVudEluc3RhbmNlJyxcbiAgICAgICdTaGFyZWRXb3JrZXInLFxuICAgICAgJ1RleHRUcmFjaycsXG4gICAgICAnVGV4dFRyYWNrQ3VlJyxcbiAgICAgICdUZXh0VHJhY2tMaXN0JyxcbiAgICAgICdXZWJLaXROYW1lZEZsb3cnLFxuICAgICAgJ1dvcmtlcicsXG4gICAgICAnV29ya2VyR2xvYmFsU2NvcGUnLFxuICAgICAgJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgICdYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0JyxcbiAgICAgICdYTUxIdHRwUmVxdWVzdFVwbG9hZCdcbiAgICBdO1xuXG4gICAgYXBpcy5mb3JFYWNoKGZ1bmN0aW9uKGFwaSkge1xuICAgICAgdmFyIHByb3RvID0gZ2xvYmFsW2FwaV0gJiYgZ2xvYmFsW2FwaV0ucHJvdG90eXBlO1xuXG4gICAgICAvLyBTb21lIGJyb3dzZXJzIGUuZy4gQW5kcm9pZCA0LjMncyBkb24ndCBhY3R1YWxseSBpbXBsZW1lbnRcbiAgICAgIC8vIHRoZSBFdmVudFRhcmdldCBtZXRob2RzIGZvciBhbGwgb2YgdGhlc2UgZS5nLiBGaWxlUmVhZGVyLlxuICAgICAgLy8gSW4gdGhpcyBjYXNlLCB0aGVyZSBpcyBub3RoaW5nIHRvIHBhdGNoLlxuICAgICAgaWYgKHByb3RvICYmIHByb3RvLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgdXRpbHMucGF0Y2hFdmVudFRhcmdldE1ldGhvZHMocHJvdG8pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUGF0Y2ggdGhlIG1ldGhvZHMgb24gYHdpbmRvd2AgaW5zdGVhZCBvZiBgV2luZG93LnByb3RvdHlwZWBcbiAgICAvLyBgV2luZG93YCBpcyBub3QgYWNjZXNzaWJsZSBvbiBBbmRyb2lkIDQuM1xuICAgIGlmICh0eXBlb2Yod2luZG93KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHV0aWxzLnBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKHdpbmRvdyk7XG4gICAgfVxuICB9XG59XG4iXX0=
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var webSocketPatch = __webpack_require__(18);
		var utils = __webpack_require__(9);
		var keys = __webpack_require__(7);
		var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'.split(' ');
		function apply() {
		    if (utils.isWebWorker()) {
		        // on WebWorker so don't apply patch
		        return;
		    }
		    var supportsWebSocket = typeof WebSocket !== 'undefined';
		    if (canPatchViaPropertyDescriptor()) {
		        // for browsers that we can patch the descriptor:  Chrome & Firefox
		        var onEventNames = eventNames.map(function (property) {
		            return 'on' + property;
		        });
		        utils.patchProperties(HTMLElement.prototype, onEventNames);
		        utils.patchProperties(XMLHttpRequest.prototype);
		        if (supportsWebSocket) {
		            utils.patchProperties(WebSocket.prototype);
		        }
		    }
		    else {
		        // Safari, Android browsers (Jelly Bean)
		        patchViaCapturingAllTheEvents();
		        utils.patchClass('XMLHttpRequest');
		        if (supportsWebSocket) {
		            webSocketPatch.apply();
		        }
		    }
		}
		exports.apply = apply;
		function canPatchViaPropertyDescriptor() {
		    if (!Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') && typeof Element !== 'undefined') {
		        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
		        // IDL interface attributes are not configurable
		        var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
		        if (desc && !desc.configurable)
		            return false;
		    }
		    Object.defineProperty(HTMLElement.prototype, 'onclick', {
		        get: function () {
		            return true;
		        }
		    });
		    var elt = document.createElement('div');
		    var result = !!elt.onclick;
		    Object.defineProperty(HTMLElement.prototype, 'onclick', {});
		    return result;
		}
		;
		var unboundKey = keys.create('unbound');
		// Whenever any event fires, we check the event target and all parents
		// for `onwhatever` properties and replace them with zone-bound functions
		// - Chrome (for now)
		function patchViaCapturingAllTheEvents() {
		    eventNames.forEach(function (property) {
		        var onproperty = 'on' + property;
		        document.addEventListener(property, function (event) {
		            var elt = event.target, bound;
		            while (elt) {
		                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
		                    bound = global.zone.bind(elt[onproperty]);
		                    bound[unboundKey] = elt[onproperty];
		                    elt[onproperty] = bound;
		                }
		                elt = elt.parentElement;
		            }
		        }, true);
		    });
		}
		;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktZGVzY3JpcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9wYXRjaC9wcm9wZXJ0eS1kZXNjcmlwdG9yLnRzIl0sIm5hbWVzIjpbImFwcGx5IiwiY2FuUGF0Y2hWaWFQcm9wZXJ0eURlc2NyaXB0b3IiLCJwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBWSxjQUFjLFdBQU0sYUFBYSxDQUFDLENBQUE7QUFDOUMsSUFBWSxLQUFLLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDbEMsSUFBWSxJQUFJLFdBQU0sU0FBUyxDQUFDLENBQUE7QUFFaEMsSUFBSSxVQUFVLEdBQUcsdW1CQUF1bUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFcG9CO0lBQ0VBLEVBQUVBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLFdBQVdBLEVBQUVBLENBQUNBLENBQUFBLENBQUNBO1FBQ3ZCQSxvQ0FBb0NBO1FBQ3BDQSxNQUFNQSxDQUFDQTtJQUNUQSxDQUFDQTtJQUVEQSxJQUFJQSxpQkFBaUJBLEdBQUdBLE9BQU9BLFNBQVNBLEtBQUtBLFdBQVdBLENBQUNBO0lBQ3pEQSxFQUFFQSxDQUFDQSxDQUFDQSw2QkFBNkJBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO1FBQ3BDQSxtRUFBbUVBO1FBQ25FQSxJQUFJQSxZQUFZQSxHQUFHQSxVQUFVQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxRQUFRQTtZQUNsRCxNQUFNLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUN6QixDQUFDLENBQUNBLENBQUNBO1FBQ0hBLEtBQUtBLENBQUNBLGVBQWVBLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLEVBQUVBLFlBQVlBLENBQUNBLENBQUNBO1FBQzNEQSxLQUFLQSxDQUFDQSxlQUFlQSxDQUFDQSxjQUFjQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUNoREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0QkEsS0FBS0EsQ0FBQ0EsZUFBZUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFDN0NBLENBQUNBO0lBQ0hBLENBQUNBO0lBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ05BLHdDQUF3Q0E7UUFDeENBLDZCQUE2QkEsRUFBRUEsQ0FBQ0E7UUFDaENBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0E7UUFDbkNBLEVBQUVBLENBQUNBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDdEJBLGNBQWNBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO1FBQ3pCQSxDQUFDQTtJQUNIQSxDQUFDQTtBQUNIQSxDQUFDQTtBQXpCZSxhQUFLLFFBeUJwQixDQUFBO0FBRUQ7SUFDRUMsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0Esd0JBQXdCQSxDQUFDQSxXQUFXQSxDQUFDQSxTQUFTQSxFQUFFQSxTQUFTQSxDQUFDQSxJQUFJQSxPQUFPQSxPQUFPQSxLQUFLQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN6R0Esd0RBQXdEQTtRQUN4REEsZ0RBQWdEQTtRQUNoREEsSUFBSUEsSUFBSUEsR0FBR0EsTUFBTUEsQ0FBQ0Esd0JBQXdCQSxDQUFDQSxPQUFPQSxDQUFDQSxTQUFTQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUN6RUEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0E7WUFBQ0EsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7SUFDL0NBLENBQUNBO0lBRURBLE1BQU1BLENBQUNBLGNBQWNBLENBQUNBLFdBQVdBLENBQUNBLFNBQVNBLEVBQUVBLFNBQVNBLEVBQUVBO1FBQ3REQSxHQUFHQSxFQUFFQTtZQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQ0ZBLENBQUNBLENBQUNBO0lBQ0hBLElBQUlBLEdBQUdBLEdBQUdBLFFBQVFBLENBQUNBLGFBQWFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0lBQ3hDQSxJQUFJQSxNQUFNQSxHQUFHQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxPQUFPQSxDQUFDQTtJQUMzQkEsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsV0FBV0EsQ0FBQ0EsU0FBU0EsRUFBRUEsU0FBU0EsRUFBRUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDNURBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBO0FBQ2hCQSxDQUFDQTtBQUFBLENBQUM7QUFFRixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXhDLHNFQUFzRTtBQUN0RSx5RUFBeUU7QUFDekUscUJBQXFCO0FBQ3JCO0lBQ0VDLFVBQVVBLENBQUNBLE9BQU9BLENBQUNBLFVBQVVBLFFBQVFBO1FBQ25DLElBQUksVUFBVSxHQUFHLElBQUksR0FBRyxRQUFRLENBQUM7UUFDakMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFVLEtBQUs7WUFDakQsSUFBSSxHQUFHLEdBQVMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7WUFDcEMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwRCxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3BDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsR0FBRyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7WUFDMUIsQ0FBQztRQUNILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQ0EsQ0FBQ0E7QUFDTEEsQ0FBQ0E7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2ViU29ja2V0UGF0Y2ggZnJvbSAnLi93ZWJzb2NrZXQnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMga2V5cyBmcm9tICcuLi9rZXlzJztcblxudmFyIGV2ZW50TmFtZXMgPSAnY29weSBjdXQgcGFzdGUgYWJvcnQgYmx1ciBmb2N1cyBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIGNoYW5nZSBjbGljayBjb250ZXh0bWVudSBkYmxjbGljayBkcmFnIGRyYWdlbmQgZHJhZ2VudGVyIGRyYWdsZWF2ZSBkcmFnb3ZlciBkcmFnc3RhcnQgZHJvcCBkdXJhdGlvbmNoYW5nZSBlbXB0aWVkIGVuZGVkIGlucHV0IGludmFsaWQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBsb2FkIGxvYWRlZGRhdGEgbG9hZGVkbWV0YWRhdGEgbG9hZHN0YXJ0IG1lc3NhZ2UgbW91c2Vkb3duIG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAgcGF1c2UgcGxheSBwbGF5aW5nIHByb2dyZXNzIHJhdGVjaGFuZ2UgcmVzZXQgc2Nyb2xsIHNlZWtlZCBzZWVraW5nIHNlbGVjdCBzaG93IHN0YWxsZWQgc3VibWl0IHN1c3BlbmQgdGltZXVwZGF0ZSB2b2x1bWVjaGFuZ2Ugd2FpdGluZyBtb3pmdWxsc2NyZWVuY2hhbmdlIG1vemZ1bGxzY3JlZW5lcnJvciBtb3pwb2ludGVybG9ja2NoYW5nZSBtb3pwb2ludGVybG9ja2Vycm9yIGVycm9yIHdlYmdsY29udGV4dHJlc3RvcmVkIHdlYmdsY29udGV4dGxvc3Qgd2ViZ2xjb250ZXh0Y3JlYXRpb25lcnJvcicuc3BsaXQoJyAnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KCkge1xuICBpZiAodXRpbHMuaXNXZWJXb3JrZXIoKSl7XG4gICAgLy8gb24gV2ViV29ya2VyIHNvIGRvbid0IGFwcGx5IHBhdGNoXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN1cHBvcnRzV2ViU29ja2V0ID0gdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCc7XG4gIGlmIChjYW5QYXRjaFZpYVByb3BlcnR5RGVzY3JpcHRvcigpKSB7XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgd2UgY2FuIHBhdGNoIHRoZSBkZXNjcmlwdG9yOiAgQ2hyb21lICYgRmlyZWZveFxuICAgIHZhciBvbkV2ZW50TmFtZXMgPSBldmVudE5hbWVzLm1hcChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIHJldHVybiAnb24nICsgcHJvcGVydHk7XG4gICAgfSk7XG4gICAgdXRpbHMucGF0Y2hQcm9wZXJ0aWVzKEhUTUxFbGVtZW50LnByb3RvdHlwZSwgb25FdmVudE5hbWVzKTtcbiAgICB1dGlscy5wYXRjaFByb3BlcnRpZXMoWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKTtcbiAgICBpZiAoc3VwcG9ydHNXZWJTb2NrZXQpIHtcbiAgICAgIHV0aWxzLnBhdGNoUHJvcGVydGllcyhXZWJTb2NrZXQucHJvdG90eXBlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gU2FmYXJpLCBBbmRyb2lkIGJyb3dzZXJzIChKZWxseSBCZWFuKVxuICAgIHBhdGNoVmlhQ2FwdHVyaW5nQWxsVGhlRXZlbnRzKCk7XG4gICAgdXRpbHMucGF0Y2hDbGFzcygnWE1MSHR0cFJlcXVlc3QnKTtcbiAgICBpZiAoc3VwcG9ydHNXZWJTb2NrZXQpIHtcbiAgICAgIHdlYlNvY2tldFBhdGNoLmFwcGx5KCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhblBhdGNoVmlhUHJvcGVydHlEZXNjcmlwdG9yKCkge1xuICBpZiAoIU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycpICYmIHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFdlYktpdCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM0MzY0XG4gICAgLy8gSURMIGludGVyZmFjZSBhdHRyaWJ1dGVzIGFyZSBub3QgY29uZmlndXJhYmxlXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycpO1xuICAgIGlmIChkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSkgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICB2YXIgZWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhciByZXN1bHQgPSAhIWVsdC5vbmNsaWNrO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycsIHt9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbnZhciB1bmJvdW5kS2V5ID0ga2V5cy5jcmVhdGUoJ3VuYm91bmQnKTtcblxuLy8gV2hlbmV2ZXIgYW55IGV2ZW50IGZpcmVzLCB3ZSBjaGVjayB0aGUgZXZlbnQgdGFyZ2V0IGFuZCBhbGwgcGFyZW50c1xuLy8gZm9yIGBvbndoYXRldmVyYCBwcm9wZXJ0aWVzIGFuZCByZXBsYWNlIHRoZW0gd2l0aCB6b25lLWJvdW5kIGZ1bmN0aW9uc1xuLy8gLSBDaHJvbWUgKGZvciBub3cpXG5mdW5jdGlvbiBwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cygpIHtcbiAgZXZlbnROYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgIHZhciBvbnByb3BlcnR5ID0gJ29uJyArIHByb3BlcnR5O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIocHJvcGVydHksIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGVsdCA9IDxOb2RlPmV2ZW50LnRhcmdldCwgYm91bmQ7XG4gICAgICB3aGlsZSAoZWx0KSB7XG4gICAgICAgIGlmIChlbHRbb25wcm9wZXJ0eV0gJiYgIWVsdFtvbnByb3BlcnR5XVt1bmJvdW5kS2V5XSkge1xuICAgICAgICAgIGJvdW5kID0gZ2xvYmFsLnpvbmUuYmluZChlbHRbb25wcm9wZXJ0eV0pO1xuICAgICAgICAgIGJvdW5kW3VuYm91bmRLZXldID0gZWx0W29ucHJvcGVydHldO1xuICAgICAgICAgIGVsdFtvbnByb3BlcnR5XSA9IGJvdW5kO1xuICAgICAgICB9XG4gICAgICAgIGVsdCA9IGVsdC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH0sIHRydWUpO1xuICB9KTtcbn07XG4iXX0=
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var utils = __webpack_require__(9);
		// we have to patch the instance since the proto is non-configurable
		function apply() {
		    var WS = global.WebSocket;
		    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
		    // On older Chrome, no need since EventTarget was already patched
		    if (!global.EventTarget) {
		        utils.patchEventTargetMethods(WS.prototype);
		    }
		    global.WebSocket = function (a, b) {
		        var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
		        var proxySocket;
		        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
		        var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
		        if (onmessageDesc && onmessageDesc.configurable === false) {
		            proxySocket = Object.create(socket);
		            ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function (propName) {
		                proxySocket[propName] = function () {
		                    return socket[propName].apply(socket, arguments);
		                };
		            });
		        }
		        else {
		            // we can patch the real socket
		            proxySocket = socket;
		        }
		        utils.patchProperties(proxySocket, ['onclose', 'onerror', 'onmessage', 'onopen']);
		        return proxySocket;
		    };
		}
		exports.apply = apply;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3BhdGNoL3dlYnNvY2tldC50cyJdLCJuYW1lcyI6WyJhcHBseSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBWSxLQUFLLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFFbEMsb0VBQW9FO0FBQ3BFO0lBQ0VBLElBQUlBLEVBQUVBLEdBQVNBLE1BQU9BLENBQUNBLFNBQVNBLENBQUNBO0lBQ2pDQSx5RkFBeUZBO0lBQ3pGQSxpRUFBaUVBO0lBQ2pFQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFPQSxNQUFPQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUMvQkEsS0FBS0EsQ0FBQ0EsdUJBQXVCQSxDQUFDQSxFQUFFQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtJQUM5Q0EsQ0FBQ0E7SUFDS0EsTUFBT0EsQ0FBQ0EsU0FBU0EsR0FBR0EsVUFBU0EsQ0FBQ0EsRUFBRUEsQ0FBQ0E7UUFDckMsSUFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksV0FBVyxDQUFDO1FBRWhCLGdHQUFnRztRQUNoRyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3pFLEVBQUUsQ0FBQyxDQUFDLGFBQWEsSUFBSSxhQUFhLENBQUMsWUFBWSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDMUQsV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVMsUUFBUTtnQkFDcEYsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHO29CQUN0QixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ25ELENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sK0JBQStCO1lBQy9CLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQUVELEtBQUssQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUVsRixNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3JCLENBQUMsQ0FBQ0E7QUFDSkEsQ0FBQ0E7QUE3QmUsYUFBSyxRQTZCcEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuLy8gd2UgaGF2ZSB0byBwYXRjaCB0aGUgaW5zdGFuY2Ugc2luY2UgdGhlIHByb3RvIGlzIG5vbi1jb25maWd1cmFibGVcbmV4cG9ydCBmdW5jdGlvbiBhcHBseSgpIHtcbiAgdmFyIFdTID0gKDxhbnk+Z2xvYmFsKS5XZWJTb2NrZXQ7XG4gIC8vIE9uIFNhZmFyaSB3aW5kb3cuRXZlbnRUYXJnZXQgZG9lc24ndCBleGlzdCBzbyBuZWVkIHRvIHBhdGNoIFdTIGFkZC9yZW1vdmVFdmVudExpc3RlbmVyXG4gIC8vIE9uIG9sZGVyIENocm9tZSwgbm8gbmVlZCBzaW5jZSBFdmVudFRhcmdldCB3YXMgYWxyZWFkeSBwYXRjaGVkXG4gIGlmICghKDxhbnk+Z2xvYmFsKS5FdmVudFRhcmdldCkge1xuICAgIHV0aWxzLnBhdGNoRXZlbnRUYXJnZXRNZXRob2RzKFdTLnByb3RvdHlwZSk7XG4gIH1cbiAgKDxhbnk+Z2xvYmFsKS5XZWJTb2NrZXQgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHNvY2tldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gbmV3IFdTKGEsIGIpIDogbmV3IFdTKGEpO1xuICAgIHZhciBwcm94eVNvY2tldDtcblxuICAgIC8vIFNhZmFyaSA3LjAgaGFzIG5vbi1jb25maWd1cmFibGUgb3duICdvbm1lc3NhZ2UnIGFuZCBmcmllbmRzIHByb3BlcnRpZXMgb24gdGhlIHNvY2tldCBpbnN0YW5jZVxuICAgIHZhciBvbm1lc3NhZ2VEZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb2NrZXQsICdvbm1lc3NhZ2UnKTtcbiAgICBpZiAob25tZXNzYWdlRGVzYyAmJiBvbm1lc3NhZ2VEZXNjLmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgIHByb3h5U29ja2V0ID0gT2JqZWN0LmNyZWF0ZShzb2NrZXQpO1xuICAgICAgWydhZGRFdmVudExpc3RlbmVyJywgJ3JlbW92ZUV2ZW50TGlzdGVuZXInLCAnc2VuZCcsICdjbG9zZSddLmZvckVhY2goZnVuY3Rpb24ocHJvcE5hbWUpIHtcbiAgICAgICAgcHJveHlTb2NrZXRbcHJvcE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHNvY2tldFtwcm9wTmFtZV0uYXBwbHkoc29ja2V0LCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHdlIGNhbiBwYXRjaCB0aGUgcmVhbCBzb2NrZXRcbiAgICAgIHByb3h5U29ja2V0ID0gc29ja2V0O1xuICAgIH1cblxuICAgIHV0aWxzLnBhdGNoUHJvcGVydGllcyhwcm94eVNvY2tldCwgWydvbmNsb3NlJywgJ29uZXJyb3InLCAnb25tZXNzYWdlJywgJ29ub3BlbiddKTtcblxuICAgIHJldHVybiBwcm94eVNvY2tldDtcbiAgfTtcbn1cbiJdfQ==
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {var utils = __webpack_require__(9);
		function apply() {
		    if (global.navigator && global.navigator.geolocation) {
		        utils.patchPrototype(global.navigator.geolocation, [
		            'getCurrentPosition',
		            'watchPosition'
		        ]);
		    }
		}
		exports.apply = apply;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvbG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcGF0Y2gvZ2VvbG9jYXRpb24udHMiXSwibmFtZXMiOlsiYXBwbHkiXSwibWFwcGluZ3MiOiJBQUFBLElBQVksS0FBSyxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBRWxDO0lBQ0VBLEVBQUVBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLElBQUlBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLFdBQVdBLENBQUNBLENBQUNBLENBQUNBO1FBQ3JEQSxLQUFLQSxDQUFDQSxjQUFjQSxDQUFDQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxXQUFXQSxFQUFFQTtZQUNqREEsb0JBQW9CQTtZQUNwQkEsZUFBZUE7U0FDaEJBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0FBQ0hBLENBQUNBO0FBUGUsYUFBSyxRQU9wQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHkoKSB7XG4gIGlmIChnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICB1dGlscy5wYXRjaFByb3RvdHlwZShnbG9iYWwubmF2aWdhdG9yLmdlb2xvY2F0aW9uLCBbXG4gICAgICAnZ2V0Q3VycmVudFBvc2l0aW9uJyxcbiAgICAgICd3YXRjaFBvc2l0aW9uJ1xuICAgIF0pO1xuICB9XG59XG4iXX0=
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var utils = __webpack_require__(9);
		function apply() {
		    utils.patchClass('FileReader');
		}
		exports.apply = apply;
		//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1yZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcGF0Y2gvZmlsZS1yZWFkZXIudHMiXSwibmFtZXMiOlsiYXBwbHkiXSwibWFwcGluZ3MiOiJBQUFBLElBQVksS0FBSyxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBRWxDO0lBQ0VBLEtBQUtBLENBQUNBLFVBQVVBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO0FBQ2pDQSxDQUFDQTtBQUZlLGFBQUssUUFFcEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5KCkge1xuICB1dGlscy5wYXRjaENsYXNzKCdGaWxlUmVhZGVyJyk7XG59XG4iXX0=

	/***/ }
	/******/ ]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(159)))

/***/ },
/* 577 */
/***/ function(module, exports, __webpack_require__) {

	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var Reflect = __webpack_require__(276);
	__export(__webpack_require__(276));
	window.Reflect = Reflect;


/***/ },
/* 578 */
/***/ function(module, exports, __webpack_require__) {

	var helper_constants_1 = __webpack_require__(273);
	var has_own_1 = __webpack_require__(272);
	var create_uuid_1 = __webpack_require__(579);
	exports.keys = {};
	function createUniqueKey() {
	    var key;
	    do {
	        key = helper_constants_1.WEAKMAP_PREFIX + create_uuid_1.createUUID();
	    } while (has_own_1.hasOwn.call(exports.keys, key));
	    exports.keys[key] = true;
	    return key;
	}
	exports.createUniqueKey = createUniqueKey;


/***/ },
/* 579 */
/***/ function(module, exports, __webpack_require__) {

	var helper_constants_1 = __webpack_require__(273);
	var gen_randombytes_1 = __webpack_require__(581);
	function createUUID() {
	    var data = gen_randombytes_1.genRandomBytes(helper_constants_1.UUID_SIZE);
	    // mark as random - RFC 4122 § 4.4
	    data[6] = data[6] & 0x4f | 0x40;
	    data[8] = data[8] & 0xbf | 0x80;
	    var result = "";
	    for (var offset = 0; offset < helper_constants_1.UUID_SIZE; ++offset) {
	        var byte = data[offset];
	        if (offset === 4 || offset === 6 || offset === 8) {
	            result += "-";
	        }
	        if (byte < 16) {
	            result += "0";
	        }
	        result += byte.toString(16).toLowerCase();
	    }
	    return result;
	}
	exports.createUUID = createUUID;


/***/ },
/* 580 */
/***/ function(module, exports) {

	function fillRandomBytes(buffer, size) {
	    for (var i = 0; i < size; ++i) {
	        buffer[i] = Math.random() * 255 | 0;
	    }
	    return buffer;
	}
	exports.fillRandomBytes = fillRandomBytes;


/***/ },
/* 581 */
/***/ function(module, exports, __webpack_require__) {

	var fill_randombytes_1 = __webpack_require__(580);
	function genRandomBytes(size) {
	    var data;
	    if (typeof Uint8Array === "function") {
	        data = new Uint8Array(size);
	        if (typeof window.crypto !== "undefined") {
	            window.crypto.getRandomValues(data);
	        }
	        else if (typeof window.msCrypto !== "undefined") {
	            window.msCrypto.getRandomValues(data);
	        }
	        else {
	            fill_randombytes_1.fillRandomBytes(data, size);
	        }
	    }
	    else {
	        data = new Array(size);
	        fill_randombytes_1.fillRandomBytes(data, size);
	    }
	    return data;
	}
	exports.genRandomBytes = genRandomBytes;


/***/ },
/* 582 */
/***/ function(module, exports, __webpack_require__) {

	var has_own_1 = __webpack_require__(272);
	function getOrCreateWeakMapTable(rootKey, target, create) {
	    if (!has_own_1.hasOwn.call(target, rootKey)) {
	        if (!create) {
	            return undefined;
	        }
	        Object.defineProperty(target, rootKey, {
	            value: Object.create(null)
	        });
	    }
	    return target[rootKey];
	}
	exports.getOrCreateWeakMapTable = getOrCreateWeakMapTable;


/***/ },
/* 583 */
/***/ function(module, exports) {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	function isArray(x) {
	    return Array.isArray(x);
	}
	exports.isArray = isArray;


/***/ },
/* 584 */
/***/ function(module, exports) {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	function isConstructor(x) {
	    return typeof x === "function";
	}
	exports.isConstructor = isConstructor;


/***/ },
/* 585 */
/***/ function(module, exports) {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
	function isObject(x) {
	    return typeof x === "object" ? x !== null : typeof x === "function";
	}
	exports.isObject = isObject;


/***/ },
/* 586 */
/***/ function(module, exports) {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
	function isSymbol(x) {
	    return typeof x === "symbol";
	}
	exports.isSymbol = isSymbol;


/***/ },
/* 587 */
/***/ function(module, exports) {

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
	function isUndefined(x) {
	    return x === undefined;
	}
	exports.isUndefined = isUndefined;


/***/ },
/* 588 */
/***/ function(module, exports, __webpack_require__) {

	var ordinary_own_metadata_keys_1 = __webpack_require__(275);
	var get_proto_of_type_1 = __webpack_require__(271);
	var set_1 = __webpack_require__(591);
	var _Set = typeof Set === "function" ? Set : set_1.createSetPolyfill();
	// https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
	function ordinaryMetadataKeys(O, P) {
	    var ownKeys = ordinary_own_metadata_keys_1.ordinaryOwnMetadataKeys(O, P);
	    var parent = get_proto_of_type_1.getProtoOfType(O);
	    if (parent === null) {
	        return ownKeys;
	    }
	    var parentKeys = ordinaryMetadataKeys(parent, P);
	    if (parentKeys.length <= 0) {
	        return ownKeys;
	    }
	    if (ownKeys.length <= 0) {
	        return parentKeys;
	    }
	    var set = new _Set();
	    var keys = [];
	    for (var _i = 0; _i < ownKeys.length; _i++) {
	        var key = ownKeys[_i];
	        var hasKey = set.has(key);
	        if (!hasKey) {
	            set.add(key);
	            keys.push(key);
	        }
	    }
	    for (var _a = 0; _a < parentKeys.length; _a++) {
	        var key = parentKeys[_a];
	        var hasKey = set.has(key);
	        if (!hasKey) {
	            set.add(key);
	            keys.push(key);
	        }
	    }
	    return keys;
	}
	exports.ordinaryMetadataKeys = ordinaryMetadataKeys;


/***/ },
/* 589 */
/***/ function(module, exports, __webpack_require__) {

	var is_symbol_1 = __webpack_require__(586);
	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	function toPropertyKey(value) {
	    if (is_symbol_1.isSymbol(value)) {
	        return value;
	    }
	    return String(value);
	}
	exports.toPropertyKey = toPropertyKey;


/***/ },
/* 590 */
/***/ function(module, exports) {

	// naive Map shim
	exports.cacheSentinel = {};
	var Map = (function () {
	    function Map() {
	        this._keys = [];
	        this._values = [];
	        this._cache = exports.cacheSentinel;
	    }
	    Object.defineProperty(Map.prototype, "size", {
	        get: function () {
	            return this._keys.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Map.prototype.has = function (key) {
	        if (key === this._cache) {
	            return true;
	        }
	        if (this._find(key) >= 0) {
	            this._cache = key;
	            return true;
	        }
	        return false;
	    };
	    Map.prototype.get = function (key) {
	        var index = this._find(key);
	        if (index >= 0) {
	            this._cache = key;
	            return this._values[index];
	        }
	        return undefined;
	    };
	    Map.prototype.set = function (key, value) {
	        this.delete(key);
	        this._keys.push(key);
	        this._values.push(value);
	        this._cache = key;
	        return this;
	    };
	    Map.prototype.delete = function (key) {
	        var index = this._find(key);
	        if (index >= 0) {
	            this._keys.splice(index, 1);
	            this._values.splice(index, 1);
	            this._cache = exports.cacheSentinel;
	            return true;
	        }
	        return false;
	    };
	    Map.prototype.clear = function () {
	        this._keys.length = 0;
	        this._values.length = 0;
	        this._cache = exports.cacheSentinel;
	    };
	    Map.prototype.forEach = function (callback, thisArg) {
	        var size = this.size;
	        for (var i = 0; i < size; ++i) {
	            var key = this._keys[i];
	            var value = this._values[i];
	            this._cache = key;
	            callback.call(this, value, key, this);
	        }
	    };
	    Map.prototype._find = function (key) {
	        var keys = this._keys;
	        var size = keys.length;
	        for (var i = 0; i < size; ++i) {
	            if (keys[i] === key) {
	                return i;
	            }
	        }
	        return -1;
	    };
	    Map.length = 0;
	    return Map;
	})();
	exports.Map = Map;
	function createMapPolyfill() {
	    return Map;
	}
	exports.createMapPolyfill = createMapPolyfill;


/***/ },
/* 591 */
/***/ function(module, exports) {

	// var _Map: MapConstructor = (typeof Map !== "undefined") ? createMapPolyfill() : Map;
	exports.cacheSentinel = {};
	var Set = (function () {
	    function Set() {
	        this._map = new Map();
	    }
	    Object.defineProperty(Set.prototype, "size", {
	        get: function () {
	            return this._map.size;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Set.prototype.has = function (value) {
	        return this._map.has(value);
	    };
	    Set.prototype.add = function (value) {
	        this._map.set(value, value);
	        return this;
	    };
	    Set.prototype.delete = function (value) {
	        return this._map.delete(value);
	    };
	    Set.prototype.clear = function () {
	        this._map.clear();
	    };
	    Set.prototype.forEach = function (callback, thisArg) {
	        this._map.forEach(callback, thisArg);
	    };
	    Set.length = 0;
	    return Set;
	})();
	exports.Set = Set;
	function createSetPolyfill() {
	    return Set;
	}
	exports.createSetPolyfill = createSetPolyfill;


/***/ },
/* 592 */
/***/ function(module, exports, __webpack_require__) {

	var create_unique_key_1 = __webpack_require__(578);
	var get_or_create_weakmap_1 = __webpack_require__(582);
	exports.rootKey = create_unique_key_1.createUniqueKey();
	var WeakMap = (function () {
	    function WeakMap() {
	        this._key = create_unique_key_1.createUniqueKey();
	    }
	    WeakMap.prototype.has = function (target) {
	        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ false);
	        if (table) {
	            return this._key in table;
	        }
	        return false;
	    };
	    WeakMap.prototype.get = function (target) {
	        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ false);
	        if (table) {
	            return table[this._key];
	        }
	        return undefined;
	    };
	    WeakMap.prototype.set = function (target, value) {
	        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ true);
	        table[this._key] = value;
	        return this;
	    };
	    WeakMap.prototype.delete = function (target) {
	        var table = get_or_create_weakmap_1.getOrCreateWeakMapTable(exports.rootKey, target, /*create*/ false);
	        if (table && this._key in table) {
	            return delete table[this._key];
	        }
	        return false;
	    };
	    WeakMap.prototype.clear = function () {
	        // NOTE: not a real clear, just makes the previous data unreachable
	        this._key = create_unique_key_1.createUniqueKey();
	    };
	    return WeakMap;
	})();
	exports.WeakMap = WeakMap;
	function createWeakMapPolyfill() {
	    return WeakMap;
	}
	exports.createWeakMapPolyfill = createWeakMapPolyfill;


/***/ },
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 605 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ }
/******/ ]);
//# sourceMappingURL=polyfills.map