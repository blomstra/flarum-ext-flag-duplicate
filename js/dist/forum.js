module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.ts");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/css-what/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/css-what/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = exports.parse = void 0;

__exportStar(__webpack_require__(/*! ./parse */ "./node_modules/css-what/lib/parse.js"), exports);

var parse_1 = __webpack_require__(/*! ./parse */ "./node_modules/css-what/lib/parse.js");

Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function get() {
    return __importDefault(parse_1)["default"];
  }
});

var stringify_1 = __webpack_require__(/*! ./stringify */ "./node_modules/css-what/lib/stringify.js");

Object.defineProperty(exports, "stringify", {
  enumerable: true,
  get: function get() {
    return __importDefault(stringify_1)["default"];
  }
});

/***/ }),

/***/ "./node_modules/css-what/lib/parse.js":
/*!********************************************!*\
  !*** ./node_modules/css-what/lib/parse.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTraversal = void 0;
var reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
var actionTypes = new Map([["~", "element"], ["^", "start"], ["$", "end"], ["*", "any"], ["!", "not"], ["|", "hyphen"]]);
var Traversals = {
  ">": "child",
  "<": "parent",
  "~": "sibling",
  "+": "adjacent"
};
var attribSelectors = {
  "#": ["id", "equals"],
  ".": ["class", "element"]
}; // Pseudos, whose data property is parsed as well.

var unpackPseudos = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
var traversalNames = new Set(__spreadArray(["descendant"], Object.keys(Traversals).map(function (k) {
  return Traversals[k];
}), true));
/**
 * Attributes that are case-insensitive in HTML.
 *
 * @private
 * @see https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors
 */

var caseInsensitiveAttributes = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
/**
 * Checks whether a specific selector is a traversal.
 * This is useful eg. in swapping the order of elements that
 * are not traversals.
 *
 * @param selector Selector to check.
 */

function isTraversal(selector) {
  return traversalNames.has(selector.type);
}

exports.isTraversal = isTraversal;
var stripQuotesFromPseudos = new Set(["contains", "icontains"]);
var quotes = new Set(['"', "'"]); // Unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152

function funescape(_, escaped, escapedWhitespace) {
  var high = parseInt(escaped, 16) - 0x10000; // NaN means non-codepoint

  return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
  String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
  String.fromCharCode(high >> 10 | 0xd800, high & 0x3ff | 0xdc00);
}

function unescapeCSS(str) {
  return str.replace(reEscape, funescape);
}

function isWhitespace(c) {
  return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}
/**
 * Parses `selector`, optionally with the passed `options`.
 *
 * @param selector Selector to parse.
 * @param options Options for parsing.
 * @returns Returns a two-dimensional array.
 * The first dimension represents selectors separated by commas (eg. `sub1, sub2`),
 * the second contains the relevant tokens for that selector.
 */


function parse(selector, options) {
  var subselects = [];
  var endIndex = parseSelector(subselects, "" + selector, options, 0);

  if (endIndex < selector.length) {
    throw new Error("Unmatched selector: " + selector.slice(endIndex));
  }

  return subselects;
}

exports["default"] = parse;

function parseSelector(subselects, selector, options, selectorIndex) {
  var _a, _b;

  if (options === void 0) {
    options = {};
  }

  var tokens = [];
  var sawWS = false;

  function getName(offset) {
    var match = selector.slice(selectorIndex + offset).match(reName);

    if (!match) {
      throw new Error("Expected name, found " + selector.slice(selectorIndex));
    }

    var name = match[0];
    selectorIndex += offset + name.length;
    return unescapeCSS(name);
  }

  function stripWhitespace(offset) {
    while (isWhitespace(selector.charAt(selectorIndex + offset))) {
      offset++;
    }

    selectorIndex += offset;
  }

  function isEscaped(pos) {
    var slashCount = 0;

    while (selector.charAt(--pos) === "\\") {
      slashCount++;
    }

    return (slashCount & 1) === 1;
  }

  function ensureNotTraversal() {
    if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
      throw new Error("Did not expect successive traversals.");
    }
  }

  stripWhitespace(0);

  while (selector !== "") {
    var firstChar = selector.charAt(selectorIndex);

    if (isWhitespace(firstChar)) {
      sawWS = true;
      stripWhitespace(1);
    } else if (firstChar in Traversals) {
      ensureNotTraversal();
      tokens.push({
        type: Traversals[firstChar]
      });
      sawWS = false;
      stripWhitespace(1);
    } else if (firstChar === ",") {
      if (tokens.length === 0) {
        throw new Error("Empty sub-selector");
      }

      subselects.push(tokens);
      tokens = [];
      sawWS = false;
      stripWhitespace(1);
    } else if (selector.startsWith("/*", selectorIndex)) {
      var endIndex = selector.indexOf("*/", selectorIndex + 2);

      if (endIndex < 0) {
        throw new Error("Comment was not terminated");
      }

      selectorIndex = endIndex + 2;
    } else {
      if (sawWS) {
        ensureNotTraversal();
        tokens.push({
          type: "descendant"
        });
        sawWS = false;
      }

      if (firstChar in attribSelectors) {
        var _c = attribSelectors[firstChar],
            name_1 = _c[0],
            action = _c[1];
        tokens.push({
          type: "attribute",
          name: name_1,
          action: action,
          value: getName(1),
          namespace: null,
          // TODO: Add quirksMode option, which makes `ignoreCase` `true` for HTML.
          ignoreCase: options.xmlMode ? null : false
        });
      } else if (firstChar === "[") {
        stripWhitespace(1); // Determine attribute name and namespace

        var namespace = null;

        if (selector.charAt(selectorIndex) === "|") {
          namespace = "";
          selectorIndex += 1;
        }

        if (selector.startsWith("*|", selectorIndex)) {
          namespace = "*";
          selectorIndex += 2;
        }

        var name_2 = getName(0);

        if (namespace === null && selector.charAt(selectorIndex) === "|" && selector.charAt(selectorIndex + 1) !== "=") {
          namespace = name_2;
          name_2 = getName(1);
        }

        if ((_a = options.lowerCaseAttributeNames) !== null && _a !== void 0 ? _a : !options.xmlMode) {
          name_2 = name_2.toLowerCase();
        }

        stripWhitespace(0); // Determine comparison operation

        var action = "exists";
        var possibleAction = actionTypes.get(selector.charAt(selectorIndex));

        if (possibleAction) {
          action = possibleAction;

          if (selector.charAt(selectorIndex + 1) !== "=") {
            throw new Error("Expected `=`");
          }

          stripWhitespace(2);
        } else if (selector.charAt(selectorIndex) === "=") {
          action = "equals";
          stripWhitespace(1);
        } // Determine value


        var value = "";
        var ignoreCase = null;

        if (action !== "exists") {
          if (quotes.has(selector.charAt(selectorIndex))) {
            var quote = selector.charAt(selectorIndex);
            var sectionEnd = selectorIndex + 1;

            while (sectionEnd < selector.length && (selector.charAt(sectionEnd) !== quote || isEscaped(sectionEnd))) {
              sectionEnd += 1;
            }

            if (selector.charAt(sectionEnd) !== quote) {
              throw new Error("Attribute value didn't end");
            }

            value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
            selectorIndex = sectionEnd + 1;
          } else {
            var valueStart = selectorIndex;

            while (selectorIndex < selector.length && (!isWhitespace(selector.charAt(selectorIndex)) && selector.charAt(selectorIndex) !== "]" || isEscaped(selectorIndex))) {
              selectorIndex += 1;
            }

            value = unescapeCSS(selector.slice(valueStart, selectorIndex));
          }

          stripWhitespace(0); // See if we have a force ignore flag

          var forceIgnore = selector.charAt(selectorIndex); // If the forceIgnore flag is set (either `i` or `s`), use that value

          if (forceIgnore === "s" || forceIgnore === "S") {
            ignoreCase = false;
            stripWhitespace(1);
          } else if (forceIgnore === "i" || forceIgnore === "I") {
            ignoreCase = true;
            stripWhitespace(1);
          }
        } // If `xmlMode` is set, there are no rules; otherwise, use the `caseInsensitiveAttributes` list.


        if (!options.xmlMode) {
          // TODO: Skip this for `exists`, as there is no value to compare to.
          ignoreCase !== null && ignoreCase !== void 0 ? ignoreCase : ignoreCase = caseInsensitiveAttributes.has(name_2);
        }

        if (selector.charAt(selectorIndex) !== "]") {
          throw new Error("Attribute selector didn't terminate");
        }

        selectorIndex += 1;
        var attributeSelector = {
          type: "attribute",
          name: name_2,
          action: action,
          value: value,
          namespace: namespace,
          ignoreCase: ignoreCase
        };
        tokens.push(attributeSelector);
      } else if (firstChar === ":") {
        if (selector.charAt(selectorIndex + 1) === ":") {
          tokens.push({
            type: "pseudo-element",
            name: getName(2).toLowerCase()
          });
          continue;
        }

        var name_3 = getName(1).toLowerCase();
        var data = null;

        if (selector.charAt(selectorIndex) === "(") {
          if (unpackPseudos.has(name_3)) {
            if (quotes.has(selector.charAt(selectorIndex + 1))) {
              throw new Error("Pseudo-selector " + name_3 + " cannot be quoted");
            }

            data = [];
            selectorIndex = parseSelector(data, selector, options, selectorIndex + 1);

            if (selector.charAt(selectorIndex) !== ")") {
              throw new Error("Missing closing parenthesis in :" + name_3 + " (" + selector + ")");
            }

            selectorIndex += 1;
          } else {
            selectorIndex += 1;
            var start = selectorIndex;
            var counter = 1;

            for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
              if (selector.charAt(selectorIndex) === "(" && !isEscaped(selectorIndex)) {
                counter++;
              } else if (selector.charAt(selectorIndex) === ")" && !isEscaped(selectorIndex)) {
                counter--;
              }
            }

            if (counter) {
              throw new Error("Parenthesis not matched");
            }

            data = selector.slice(start, selectorIndex - 1);

            if (stripQuotesFromPseudos.has(name_3)) {
              var quot = data.charAt(0);

              if (quot === data.slice(-1) && quotes.has(quot)) {
                data = data.slice(1, -1);
              }

              data = unescapeCSS(data);
            }
          }
        }

        tokens.push({
          type: "pseudo",
          name: name_3,
          data: data
        });
      } else {
        var namespace = null;
        var name_4 = void 0;

        if (firstChar === "*") {
          selectorIndex += 1;
          name_4 = "*";
        } else if (reName.test(selector.slice(selectorIndex))) {
          if (selector.charAt(selectorIndex) === "|") {
            namespace = "";
            selectorIndex += 1;
          }

          name_4 = getName(0);
        } else {
          /*
           * We have finished parsing the selector.
           * Remove descendant tokens at the end if they exist,
           * and return the last index, so that parsing can be
           * picked up from here.
           */
          if (tokens.length && tokens[tokens.length - 1].type === "descendant") {
            tokens.pop();
          }

          addToken(subselects, tokens);
          return selectorIndex;
        }

        if (selector.charAt(selectorIndex) === "|") {
          namespace = name_4;

          if (selector.charAt(selectorIndex + 1) === "*") {
            name_4 = "*";
            selectorIndex += 2;
          } else {
            name_4 = getName(1);
          }
        }

        if (name_4 === "*") {
          tokens.push({
            type: "universal",
            namespace: namespace
          });
        } else {
          if ((_b = options.lowerCaseTags) !== null && _b !== void 0 ? _b : !options.xmlMode) {
            name_4 = name_4.toLowerCase();
          }

          tokens.push({
            type: "tag",
            name: name_4,
            namespace: namespace
          });
        }
      }
    }
  }

  addToken(subselects, tokens);
  return selectorIndex;
}

function addToken(subselects, tokens) {
  if (subselects.length > 0 && tokens.length === 0) {
    throw new Error("Empty sub-selector");
  }

  subselects.push(tokens);
}

/***/ }),

/***/ "./node_modules/css-what/lib/stringify.js":
/*!************************************************!*\
  !*** ./node_modules/css-what/lib/stringify.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionTypes = {
  equals: "",
  element: "~",
  start: "^",
  end: "$",
  any: "*",
  not: "!",
  hyphen: "|"
};
var charsToEscape = new Set(__spreadArray(__spreadArray([], Object.keys(actionTypes).map(function (typeKey) {
  return actionTypes[typeKey];
}).filter(Boolean), true), [":", "[", "]", " ", "\\", "(", ")", "'"], false));
/**
 * Turns `selector` back into a string.
 *
 * @param selector Selector to stringify.
 */

function stringify(selector) {
  return selector.map(stringifySubselector).join(", ");
}

exports["default"] = stringify;

function stringifySubselector(token) {
  return token.map(stringifyToken).join("");
}

function stringifyToken(token) {
  switch (token.type) {
    // Simple types
    case "child":
      return " > ";

    case "parent":
      return " < ";

    case "sibling":
      return " ~ ";

    case "adjacent":
      return " + ";

    case "descendant":
      return " ";

    case "universal":
      return getNamespace(token.namespace) + "*";

    case "tag":
      return getNamespacedName(token);

    case "pseudo-element":
      return "::" + escapeName(token.name);

    case "pseudo":
      if (token.data === null) return ":" + escapeName(token.name);

      if (typeof token.data === "string") {
        return ":" + escapeName(token.name) + "(" + escapeName(token.data) + ")";
      }

      return ":" + escapeName(token.name) + "(" + stringify(token.data) + ")";

    case "attribute":
      {
        if (token.name === "id" && token.action === "equals" && !token.ignoreCase && !token.namespace) {
          return "#" + escapeName(token.value);
        }

        if (token.name === "class" && token.action === "element" && !token.ignoreCase && !token.namespace) {
          return "." + escapeName(token.value);
        }

        var name_1 = getNamespacedName(token);

        if (token.action === "exists") {
          return "[" + name_1 + "]";
        }

        return "[" + name_1 + actionTypes[token.action] + "='" + escapeName(token.value) + "'" + (token.ignoreCase ? "i" : token.ignoreCase === false ? "s" : "") + "]";
      }
  }
}

function getNamespacedName(token) {
  return "" + getNamespace(token.namespace) + escapeName(token.name);
}

function getNamespace(namespace) {
  return namespace !== null ? (namespace === "*" ? "*" : escapeName(namespace)) + "|" : "";
}

function escapeName(str) {
  return str.split("").map(function (c) {
    return charsToEscape.has(c) ? "\\" + c : c;
  }).join("");
}

/***/ }),

/***/ "./src/forum/extendFlagModal.tsx":
/*!***************************************!*\
  !*** ./src/forum/extendFlagModal.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extendFlagModal; });
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_flags_forum_components_FlagPostModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/flags/forum/components/FlagPostModal */ "flarum/flags/forum/components/FlagPostModal");
/* harmony import */ var flarum_flags_forum_components_FlagPostModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_flags_forum_components_FlagPostModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_findVdomChild__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/findVdomChild */ "./src/forum/utils/findVdomChild.ts");
/* harmony import */ var flarum_utils_withAttr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/withAttr */ "flarum/utils/withAttr");
/* harmony import */ var flarum_utils_withAttr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_withAttr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/Stream */ "flarum/utils/Stream");
/* harmony import */ var flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/components/Post */ "flarum/components/Post");
/* harmony import */ var flarum_components_Post__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Post__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/common/components/Link */ "flarum/common/components/Link");
/* harmony import */ var flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/common/helpers/icon */ "flarum/common/helpers/icon");
/* harmony import */ var flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fof_merge_discussions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fof-merge-discussions */ "@fof-merge-discussions");
/* harmony import */ var _fof_merge_discussions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fof_merge_discussions__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/forum/states/GlobalSearchState */ "flarum/forum/states/GlobalSearchState");
/* harmony import */ var flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_10__);











function extendFlagModal() {
  // https://github.com/flarum/flags/pull/39 is not available
  if (flarum_flags_forum_components_FlagPostModal__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.flagReasons === 'undefined') {
    Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_flags_forum_components_FlagPostModal__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'content', function (vnode) {
      var _this$attrs$post,
          _this = this;

      if (((_this$attrs$post = this.attrs.post) == null ? void 0 : _this$attrs$post.number()) === 1) {
        Object(_utils_findVdomChild__WEBPACK_IMPORTED_MODULE_3__["findFirstVdomChild"])(vnode, '.Form-group', function (vnode) {
          var discussion = _this.attrs.post.discussion();

          _this.search = new flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_10___default.a();
          vnode.children[0].children.splice(3, 0, m("label", {
            className: "checkbox"
          }, m("input", {
            type: "radio",
            name: "reason",
            checked: _this.reason() === 'duplicate',
            value: "duplicate",
            onclick: flarum_utils_withAttr__WEBPACK_IMPORTED_MODULE_4___default()('value', _this.reason)
          }), m("strong", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('blomstra-flag-duplicates.forum.flags.reason_duplicate_label')), flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('blomstra-flag-duplicates.forum.flags.reason_duplicate_text'), _this.reason() === 'duplicate' ? m(_fof_merge_discussions__WEBPACK_IMPORTED_MODULE_9__["components"].DiscussionSearch, {
            state: _this.search,
            onSelect: function (discussion) {
              _this.reasonDetail = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(discussion.id());
            }.bind(_this),
            ignore: discussion.id()
          }) : ''));
        });
      }
    });
  } // Requires https://github.com/flarum/flags/pull/39


  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_flags_forum_components_FlagPostModal__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'flagReasons', function (items) {
    var _this$attrs$post2,
        _this2 = this;

    if (((_this$attrs$post2 = this.attrs.post) == null ? void 0 : _this$attrs$post2.number()) === 1) {
      var discussion = this.attrs.post.discussion();
      this.search = new flarum_forum_states_GlobalSearchState__WEBPACK_IMPORTED_MODULE_10___default.a();
      items.add('duplicate', m("label", {
        className: "checkbox"
      }, m("input", {
        type: "radio",
        name: "reason",
        checked: this.reason() === 'duplicate',
        value: "duplicate",
        onclick: flarum_utils_withAttr__WEBPACK_IMPORTED_MODULE_4___default()('value', this.reason)
      }), m("strong", null, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('blomstra-flag-duplicates.forum.flags.reason_duplicate_label')), flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('blomstra-flag-duplicates.forum.flags.reason_duplicate_text'), this.reason() === 'duplicate' ? m(_fof_merge_discussions__WEBPACK_IMPORTED_MODULE_9__["components"].DiscussionSearch, {
        state: this.search,
        onSelect: function (discussion) {
          _this2.reasonDetail = flarum_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(discussion.id());
        }.bind(this),
        ignore: discussion.id()
      }) : ''), 100);
    }
  });
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["override"])(flarum_components_Post__WEBPACK_IMPORTED_MODULE_6___default.a.prototype, 'flagReason', function (original, flag) {
    var orig = original(flag);

    if ((flag == null ? void 0 : flag.reason == null ? void 0 : flag.reason()) === 'duplicate') {
      var detail = flag.reasonDetail();
      var url = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('baseUrl') + ("/d/" + detail);
      orig[1] = m("span", {
        className: "Post-flagged-detail"
      }, m(flarum_common_components_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: url,
        external: true,
        target: "_blank"
      }, flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('blomstra-flag-duplicates.forum.flags.duplicate_discussion'), " ", flarum_common_helpers_icon__WEBPACK_IMPORTED_MODULE_8___default()('fas fa-external-link-alt'), ' '));
      return orig;
    } else {
      return orig;
    }
  });
}

/***/ }),

/***/ "./src/forum/index.ts":
/*!****************************!*\
  !*** ./src/forum/index.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extendFlagModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extendFlagModal */ "./src/forum/extendFlagModal.tsx");


flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('blomstra/flag-duplicates', function () {
  Object(_extendFlagModal__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/forum/utils/findVdomChild.ts":
/*!******************************************!*\
  !*** ./src/forum/utils/findVdomChild.ts ***!
  \******************************************/
/*! exports provided: findAndRemoveFirstVdomChild, findFirstVdomChild */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAndRemoveFirstVdomChild", function() { return findAndRemoveFirstVdomChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFirstVdomChild", function() { return findFirstVdomChild; });
/* harmony import */ var css_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-what */ "./node_modules/css-what/lib/index.js");
/* harmony import */ var css_what__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_what__WEBPACK_IMPORTED_MODULE_0__);

function findAndRemoveFirstVdomChild(vdom, selector) {
  var node = findFirstVdomChild(vdom, selector);
  if (node === undefined) return false; // Set to empty fragment

  node.tag = '[';
  node.attrs = {
    removedViaVdomUtils: true
  };
  node.children = [];
  return true;
}
function findFirstVdomChild(vdom, selector, manipulationFunc) {
  var parsedSelector = Object(css_what__WEBPACK_IMPORTED_MODULE_0__["parse"])(selector);
  return searchChildren(vdom, parsedSelector, manipulationFunc);
}

function searchChildren(vdom, selectors, manipulationFunc) {
  var nodes;

  if (!Array.isArray(vdom)) {
    nodes = [vdom];
  } else {
    nodes = vdom;
  }

  var found = undefined;
  nodes.some(function (node) {
    if (typeof node === 'boolean' || typeof node === 'number' || typeof node === 'string' || node === null || node === undefined) return false;

    if (Array.isArray(node)) {
      var result = searchChildren(node, selectors, manipulationFunc);

      if (result) {
        found = result;
        return true;
      }

      return false;
    }

    if (doesChildMatchSelectors(node, selectors)) {
      found = node;
      return true;
    }

    if (Array.isArray(node.children)) {
      var _result = searchChildren(node.children, selectors);

      if (_result) {
        found = _result;
        return true;
      }

      return false;
    }

    return false;
  });
  if (manipulationFunc && found) manipulationFunc(found);
  return found;
}

function doesChildMatchSelectors(child, selectors) {
  return selectors.some(function (selector) {
    return selector.every(function (criterion) {
      var _attr, _attr2, _attr3, _attr3$split;

      switch (criterion.type) {
        case 'tag':
          return child.tag === criterion.name;

        case 'attribute':
          if (!child.attrs) return false;
          if (criterion.name === 'class') criterion.name = 'className';
          var attr = child.attrs[criterion.name];

          if (criterion.name === 'className' && typeof attr === 'string') {
            attr = attr.trim();
          }

          if (criterion.ignoreCase && typeof attr === 'string') {
            attr = attr.toLowerCase();
            criterion.value = criterion.value.toLowerCase();
          }

          switch (criterion.action) {
            case 'exists':
              return child.attrs.hasOwnProperty(criterion.name);

            case 'equals':
              return attr === criterion.value;

            case 'start':
              return ((_attr = attr) == null ? void 0 : _attr.startsWith == null ? void 0 : _attr.startsWith(criterion.value)) || false;

            case 'end':
              return ((_attr2 = attr) == null ? void 0 : _attr2.endsWith == null ? void 0 : _attr2.endsWith(criterion.value)) || false;

            case 'element':
              return ((_attr3 = attr) == null ? void 0 : _attr3.split == null ? void 0 : (_attr3$split = _attr3.split(' ')) == null ? void 0 : _attr3$split.includes == null ? void 0 : _attr3$split.includes(criterion.value)) || false;
          }

      }

      return false;
    });
  });
}

/***/ }),

/***/ "@fof-merge-discussions":
/*!*************************************************************!*\
  !*** external "flarum.extensions['fof-merge-discussions']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.extensions['fof-merge-discussions'];

/***/ }),

/***/ "flarum/common/components/Link":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['common/components/Link']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/components/Link'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/helpers/icon":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/helpers/icon']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/helpers/icon'];

/***/ }),

/***/ "flarum/components/Post":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Post']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Post'];

/***/ }),

/***/ "flarum/flags/forum/components/FlagPostModal":
/*!*****************************************************************************!*\
  !*** external "flarum.core.compat['flags/forum/components/FlagPostModal']" ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['flags/forum/components/FlagPostModal'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/states/GlobalSearchState":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['forum/states/GlobalSearchState']" ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/states/GlobalSearchState'];

/***/ }),

/***/ "flarum/utils/Stream":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/Stream']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/Stream'];

/***/ }),

/***/ "flarum/utils/withAttr":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/withAttr']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/withAttr'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map