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
})({"src/function.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backspaceEvent = exports.outputEvent = exports.inputEvent = exports.allClearButtonEvent = void 0; //Global Values

var operationDictionary = {
  addition: '+',
  subtraction: '-',
  modulus: '%',
  multiplication: '*',
  division: '/',
  point: '.'
};
var operationSymbols = Object.values(operationDictionary);
var equationOriginalFontSize = 60;
var ansOriginalFontSize = 45;
var maxDigitBeforeSizeChange = 8;
var percentageDecrease = 0.1;
var equationFontSizeChange = equationOriginalFontSize;
var ansFontSizeChange = ansOriginalFontSize; // All Clear Function

var allClearButtonEvent = function allClearButtonEvent(AC, inputScreen, outputScreen) {
  AC.addEventListener('click', function () {
    inputScreen.value = '';
    outputScreen.value = '';
  });
};

exports.allClearButtonEvent = allClearButtonEvent; // Input Screen Function

var inputEvent = function inputEvent(numberButtons, inputScreen, operationButtons, outputScreen) {
  var _loop_1 = function _loop_1(numberButton) {
    // Number Input
    numberButton.addEventListener('click', function () {
      inputScreen.value += numberButton.id; // Font Size Change

      equationFontSizeChange = checkDecreaseFontSize(inputScreen.value, equationOriginalFontSize);
      inputScreen.style.fontSize = "".concat(equationFontSizeChange, "px");
    });
  };

  for (var _i = 0, numberButtons_1 = numberButtons; _i < numberButtons_1.length; _i++) {
    var numberButton = numberButtons_1[_i];

    _loop_1(numberButton);
  }

  var _loop_2 = function _loop_2(operationButton) {
    operationButton.addEventListener('click', function () {
      if (operationButton.id !== 'equals') {
        var temp = inputScreen.value;
        inputScreen.value += operationDictionary["".concat(operationButton.id)];
        inputScreen.value = replaceOperatorCheck(inputScreen.value);
      }
    });
  }; // Operator Input


  for (var _a = 0, operationButtons_1 = operationButtons; _a < operationButtons_1.length; _a++) {
    var operationButton = operationButtons_1[_a];

    _loop_2(operationButton);
  }
};

exports.inputEvent = inputEvent; // Output Screen Function

var outputEvent = function outputEvent(inputScreen, operationButtons, outputScreen) {
  var _loop_3 = function _loop_3(operationButton) {
    operationButton.addEventListener('click', function () {
      if (operationButton.id === 'equals') {
        var expression = inputScreen.value; // Check if any operator is last Character

        if (operationSymbols.indexOf("".concat(expression[expression.length - 1])) !== -1) {
          return;
        } // Calculation of the equation


        var equation = inputScreen.value;
        outputScreen.value = eval(equation); // Font Size Change

        ansFontSizeChange = checkDecreaseFontSize(outputScreen.value, ansOriginalFontSize);
        outputScreen.style.fontSize = "".concat(ansFontSizeChange, "px");
      }
    });
  };

  for (var _i = 0, operationButtons_2 = operationButtons; _i < operationButtons_2.length; _i++) {
    var operationButton = operationButtons_2[_i];

    _loop_3(operationButton);
  }
};

exports.outputEvent = outputEvent; // Delete a Character

var backspaceEvent = function backspaceEvent(backButton, inputScreen) {
  backButton.addEventListener('click', function () {
    inputScreen.value = inputScreen.value.slice(0, inputScreen.value.length - 1);
  });
};

exports.backspaceEvent = backspaceEvent; // Replace the old Operator with new Operator

var replaceOperatorCheck = function replaceOperatorCheck(temp) {
  var len = temp.length;

  if (len > 1) {
    if (operationSymbols.indexOf("".concat(temp[len - 2])) !== -1 && operationSymbols.indexOf("".concat(temp[len - 1])) !== -1) {
      var replacedOperator = void 0;

      if (len == 2) {
        replacedOperator = temp["".concat(len - 1)];
      } else {
        replacedOperator = temp.slice(0, len - 2) + temp["".concat(len - 1)];
      }

      return replacedOperator;
    }
  }

  return temp;
}; // Font Size Check Function


var checkDecreaseFontSize = function checkDecreaseFontSize(displayString, fontSize) {
  if (displayString.length > maxDigitBeforeSizeChange) {
    return decreaseFontSize(displayString.length, fontSize);
  } else {
    return fontSize;
  }
};

var decreaseFontSize = function decreaseFontSize(stringLength, fontSize) {
  var residualLength = stringLength - maxDigitBeforeSizeChange;

  for (var character = 0; character < residualLength; ++character) {
    fontSize -= fontSize * percentageDecrease;
  }

  return fontSize;
};
},{}],"src/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var function_1 = require("./function");

var main = function main() {
  var elements = getElements();
  startCalculator(elements);
};

var getElements = function getElements() {
  return {
    inputScreen: document.querySelector('#inputScreen'),
    outputScreen: document.querySelector('#outputScreen'),
    AC: document.querySelector('#AC'),
    numberButtons: document.querySelectorAll('.number'),
    operationButtons: document.querySelectorAll('.operation'),
    backButton: document.querySelector('#delete')
  };
};

var startCalculator = function startCalculator(elements) {
  //Destructuring elements
  var inputScreen = elements.inputScreen,
      outputScreen = elements.outputScreen,
      AC = elements.AC,
      numberButtons = elements.numberButtons,
      operationButtons = elements.operationButtons,
      backButton = elements.backButton; //Events

  (0, function_1.allClearButtonEvent)(AC, inputScreen, outputScreen);
  (0, function_1.inputEvent)(numberButtons, inputScreen, operationButtons, outputScreen);
  (0, function_1.outputEvent)(inputScreen, operationButtons, outputScreen);
  (0, function_1.backspaceEvent)(backButton, inputScreen);
};

main();
},{"./function":"src/function.ts"}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49761" + '/');

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
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map