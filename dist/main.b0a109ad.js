// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/main.ts":[function(require,module,exports) {
//  querySelector
//  screen
var screentop = document.querySelector('#screen');
var screenUnder = document.querySelector('#screenunder'); // number {0-9}

var nmr1 = document.querySelector('#nmr1');
var nmr2 = document.querySelector('#nmr2');
var nmr3 = document.querySelector('#nmr3');
var nmr4 = document.querySelector('#nmr4');
var nmr5 = document.querySelector('#nmr5');
var nmr6 = document.querySelector('#nmr6');
var nmr7 = document.querySelector('#nmr7');
var nmr8 = document.querySelector('#nmr8');
var nmr9 = document.querySelector('#nmr9');
var nmr0 = document.querySelector('#nmr0'); //  operator {+, -, *, /, .}

var sum = document.querySelector('#sum');
var subt = document.querySelector('#subt');
var mult = document.querySelector('#mult');
var division = document.querySelector('#division');
var mod = document.querySelector('#mod');
var point = document.querySelector('#point'); //  Applications {=, Del, C}

var equal = document.querySelector('#equal');
var buttonC = document.querySelector('#C');
var buttonDel = document.querySelector('#del'); //  END querySelector
//  variables 

var number;
var valueOld;
var valueCurrent; //  fuction
//  uiScreen

function uiScreen(operatortype) {
  screentop.value = "";
  screenUnder.textContent = "".concat(number).concat(operatortype);
} //  uiScreen for result


function uiScreenResult() {
  screentop.value = "";
  screenUnder.textContent = "".concat(number);
} // what is the typeoperator?


function operatortype() {
  return screenUnder.textContent[screenUnder.textContent.length - 1];
} // 


function equaloperator() {
  if (operatortype() == '+') {
    number += Number(screentop.value);
    uiScreenResult();
  }

  if (operatortype() == '-') {
    number -= Number(screentop.value);
    uiScreenResult();
  }

  if (operatortype() == 'x') {
    number *= Number(screentop.value);
    uiScreenResult();
  }

  if (operatortype() == '/') {
    number /= Number(screentop.value);
    uiScreenResult();
  }

  if (operatortype() == '%') {
    number %= Number(screentop.value);
    uiScreenResult();
  }
} // number fuction {0-9}


var nmr1f = function nmr1f() {
  screentop.value = "".concat(screentop.value, "1");
};

var nmr2f = function nmr2f() {
  screentop.value = "".concat(screentop.value, "2");
};

var nmr3f = function nmr3f() {
  screentop.value = "".concat(screentop.value, "3");
};

var nmr4f = function nmr4f() {
  screentop.value = "".concat(screentop.value, "4");
};

var nmr5f = function nmr5f() {
  screentop.value = "".concat(screentop.value, "5");
};

var nmr6f = function nmr6f() {
  screentop.value = "".concat(screentop.value, "6");
};

var nmr7f = function nmr7f() {
  screentop.value = "".concat(screentop.value, "7");
};

var nmr8f = function nmr8f() {
  screentop.value = "".concat(screentop.value, "8");
};

var nmr9f = function nmr9f() {
  screentop.value = "".concat(screentop.value, "9");
};

var nmr0f = function nmr0f() {
  screentop.value = "".concat(screentop.value, "0");
}; //  operator fuction {+, -, *, /, .}


var sumf = function sumf() {
  if (!number) {
    console.log(screentop.value);
    number = Number(screentop.value);
    uiScreen('+');
  } else if (screentop.value == '') {
    screenUnder.textContent = "".concat(number, "+");
  } else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/" || operatortype() == "%") {
    equaloperator();
    screenUnder.textContent = "".concat(number, "+");
  } else {
    number += Number(screentop.value);
    uiScreen('+');
  }
};

var subtf = function subtf() {
  if (!number) {
    console.log(screentop.value);
    number = Number(screentop.value);
    uiScreen('-');
  } else if (screentop.value == '') {
    screenUnder.textContent = "".concat(number, "-");
  } else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/" || operatortype() == "%") {
    equaloperator();
    screenUnder.textContent = "".concat(number, "-");
  } else {
    number -= Number(screentop.value);
    uiScreen('-');
  }
};

var multf = function multf() {
  if (!number) {
    console.log(screentop.value);
    number = Number(screentop.value);
    uiScreen('x');
  } else if (screentop.value == '') {
    screenUnder.textContent = "".concat(number, "x");
  } else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/" || operatortype() == "%") {
    equaloperator();
    screenUnder.textContent = "".concat(number, "x");
  } else {
    number *= Number(screentop.value);
    uiScreen('x');
  }
};

var divisionf = function divisionf() {
  if (!number) {
    console.log(screentop.value);
    number = Number(screentop.value);
    uiScreen('/');
  } else if (screentop.value == '') {
    screenUnder.textContent = "".concat(number, "/");
  } else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/" || operatortype() == "%") {
    equaloperator();
    screenUnder.textContent = "".concat(number, "/");
  } else {
    number /= Number(screentop.value);
    uiScreen('/');
  }
};

var modf = function modf() {
  if (!number) {
    console.log(screentop.value);
    number = Number(screentop.value);
    uiScreen('%');
  } else if (screentop.value == '') {
    screenUnder.textContent = "".concat(number, "%");
  } else if (operatortype() == "+" || operatortype() == "-" || operatortype() == "x" || operatortype() == "/" || operatortype() == "%") {
    equaloperator();
    screenUnder.textContent = "".concat(number, "%");
  } else {
    number %= Number(screentop.value);
    uiScreen('%');
  }
};

var pointf = function pointf() {
  if (screentop.value == '') {
    screentop.value = "0.";
  } else {
    screentop.value = "".concat(screentop.value, ".");
  }
};

var result;

var equalf = function equalf() {
  equaloperator();
};

var zap = function zap() {
  screentop.value = '';
  screenUnder.textContent = '';
  number = 0;
};

var del = function del() {
  valueOld = String(screentop.value);
  valueOld = valueOld.substring(0, valueOld.length - 1);
  valueCurrent = Number(valueOld);

  if (valueOld.length === 0) {
    screentop.value = "";
  } else {
    screentop.value = "".concat(valueCurrent);
  }
}; //  END fuction
//  addEventlistener
// number {0-9}


nmr1.addEventListener('click', nmr1f);
nmr2.addEventListener('click', nmr2f);
nmr3.addEventListener('click', nmr3f);
nmr4.addEventListener('click', nmr4f);
nmr5.addEventListener('click', nmr5f);
nmr6.addEventListener('click', nmr6f);
nmr7.addEventListener('click', nmr7f);
nmr8.addEventListener('click', nmr8f);
nmr9.addEventListener('click', nmr9f);
nmr0.addEventListener('click', nmr0f); //  operator {+, -, *, /, .}

sum.addEventListener('click', sumf);
subt.addEventListener('click', subtf);
mult.addEventListener('click', multf);
division.addEventListener('click', divisionf);
mod.addEventListener('click', modf);
point.addEventListener('click', pointf);
equal.addEventListener('click', equalf);
buttonC.addEventListener('click', zap);
buttonDel.addEventListener('click', del);
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57546" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.ts"], null)
//# sourceMappingURL=/main.b0a109ad.js.map