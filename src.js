// Generated by CoffeeScript 1.8.0
var x;

x = function(s) {
  var selector, _;
  _ = {};
  selector = s;
  _.element = function() {
    return document.querySelector(selector);
  };
  _.elements = function() {
    return document.querySelectorAll(selector);
  };
  _.e = _.element;
  _.es = _.elements;
  _.addClass = function(newClass, index) {
    var element, __element__, __elements__, _i, _len;
    if (index === void 0) {
      __elements__ = _.elements();
      for (_i = 0, _len = __elements__.length; _i < _len; _i++) {
        element = __elements__[_i];
        if (element.className === element.className.split(newClass).join('')) {
          if (element.className === "") {
            element.className = newClass;
          } else {
            element.className += " " + newClass;
          }
        }
      }
    } else {
      if (index >= _.elements().length || index < 0) {
        console.warn("You provided an index (" + index + ") that is out of range to a x.addClass. The selector was " + selector);
        return null;
      }
      __element__ = _.elements()[index];
      if (__element__.className === "") {
        __element__.className = newClass;
      } else {
        __element__.className += " " + newClass;
      }
    }
    return newClass;
  };
  _.append = function(newHtml, index) {
    var element, __element__, __elements__, _i, _len;
    if (index === void 0) {
      __elements__ = _.es();
      for (_i = 0, _len = __elements__.length; _i < _len; _i++) {
        element = __elements__[_i];
        element.innerHTML += newHtml;
      }
    } else {
      if (index >= _.elements().length || index < 0) {
        console.warn("You provided an index (" + index + ") that is out of range to a x.append. The selector was " + selector);
        return null;
      }
      __element__ = _.es()[index];
      __element__.innerHTML += newHtml;
    }
    return newHtml;
  };
  _.css = function(key, value, index) {
    var element, __element__, __elements__, _i, _len, _results;
    if (index === void 0) {
      __elements__ = _.es();
      _results = [];
      for (_i = 0, _len = __elements__.length; _i < _len; _i++) {
        element = __elements__[_i];
        _results.push(element.style[key] = value);
      }
      return _results;
    } else {
      if (index >= _.elements().length || index < 0) {
        console.warn("You provided an index (" + index + ") that is out of range to a x.css. The selector was " + selector);
        return null;
      }
      __element__ = _.es()[index];
      return __element__.style[key] = value;
    }
  };
  _.html = function(newHtml, index) {
    var element, __element__, __elements__, _i, _len;
    if (newHtml !== void 0 && typeof newHtml !== "number") {
      if (index === void 0) {
        __elements__ = _.es();
        for (_i = 0, _len = __elements__.length; _i < _len; _i++) {
          element = __elements__[_i];
          element.innerHTML = newHtml;
        }
      } else {
        if (index >= _.elements().length || index < 0) {
          console.warn("You provided an index (" + index + ") that is out of range to a x.html. The selector was " + selector);
          return null;
        }
        __element__ = _.es()[index];
        __element__.innerHTML = newHtml;
      }
      return newHtml;
    } else {
      if (newHtml === void 0) {
        return _.e().innerHTML;
      } else {
        if (newHtml >= _.elements().length || newHtml < 0) {
          console.warn("You provided an index (" + newHtml + ") that is out of range to a x.html. The selector was " + selector);
          return null;
        }
        return _.es()[newHtml].innerHTML;
      }
    }
  };
  _.removeAllClasses = function(index) {
    var element, __element__, __elements__, _i, _len;
    if (index === void 0) {
      __elements__ = _.elements();
      for (_i = 0, _len = __elements__.length; _i < _len; _i++) {
        element = __elements__[_i];
        element.className = "";
      }
    } else {
      if (index >= _.elements().length || index < 0) {
        console.warn("You provided an index (" + index + ") that is out of range to a x.removeAllClasses. The selector was " + selector);
        return null;
      }
      __element__ = _.elements()[index];
      __element__.className = "";
    }
    return "";
  };
  _.removeClass = function(oldClass, index) {
    var element, __element__, __elements__, _i, _len;
    if (index === void 0) {
      __elements__ = _.elements();
      for (_i = 0, _len = __elements__.length; _i < _len; _i++) {
        element = __elements__[_i];
        element.className = element.className.split(oldClass).join('').split('  ').join(' ').trim();
      }
    } else {
      if (index >= _.elements().length || index < 0) {
        console.warn("You provided an index (" + index + ") that is out of range to a x.removeClass. The selector was " + selector);
        return null;
      }
      __element__ = _.elements()[index];
      __element__.className = __element__.className.split(oldClass).join('').split('  ').join(' ').trim();
    }
    return oldClass;
  };
  return _;
};
