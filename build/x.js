var x;

x = function(s) {
  var _, selector;
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
    var __element__, __elements__, element, i, len;
    if (index === void 0) {
      __elements__ = _.elements();
      for (i = 0, len = __elements__.length; i < len; i++) {
        element = __elements__[i];
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
    var __element__, __elements__, element, i, len;
    if (index === void 0) {
      __elements__ = _.es();
      for (i = 0, len = __elements__.length; i < len; i++) {
        element = __elements__[i];
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
    var __element__, __elements__, __key__, __value__, element, i, j, len, len1, results;
    if (index === void 0) {
      if (typeof key === 'object') {
        if (value === void 0) {
          console.log("We have a object and no index");
          __elements__ = _.es();
          console.log("These are the elements");
          console.log(__elements__);
          for (i = 0, len = __elements__.length; i < len; i++) {
            element = __elements__[i];
            console.log("The current element is");
            console.log(element);
            for (__key__ in key) {
              __value__ = key[__key__];
              if (key.hasOwnProperty(__key__)) {
                console.log("css: " + __key__ + ": " + __value__);
                element.style[__key__] = __value__;
              }
            }
          }
        }
      }
      __elements__ = _.es();
      results = [];
      for (j = 0, len1 = __elements__.length; j < len1; j++) {
        element = __elements__[j];
        results.push(element.style[key] = value);
      }
      return results;
    } else {
      if (index >= _.elements().length || index < 0) {
        console.warn("You provided an index (" + index + ") that is out of range to a x.css. The selector was " + selector);
        return null;
      }
      __element__ = _.es()[index];
      return __element__.style[key] = value;
    }
  };
  _.each = function(customFunciton, index) {
    var __element__, __elements__, element, i, len;
    if (index === void 0) {
      __elements__ = _.es();
      for (i = 0, len = __elements__.length; i < len; i++) {
        element = __elements__[i];
        customFunciton(element);
      }
    } else {
      if (index >= _.elements().length || index < 0) {
        console.warn("You provided an index (" + index + ") that is out of range to a x.each. The selector was " + selector);
        return null;
      }
      __element__ = _.es()[index];
      customFunciton(__element__);
    }
    return customFunciton;
  };
  _.html = function(newHtml, index) {
    var __element__, __elements__, element, i, len;
    if (newHtml !== void 0 && typeof newHtml !== "number") {
      if (index === void 0) {
        __elements__ = _.es();
        for (i = 0, len = __elements__.length; i < len; i++) {
          element = __elements__[i];
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
    var __element__, __elements__, element, i, len;
    if (index === void 0) {
      __elements__ = _.elements();
      for (i = 0, len = __elements__.length; i < len; i++) {
        element = __elements__[i];
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
    var __element__, __elements__, element, i, len;
    if (index === void 0) {
      __elements__ = _.elements();
      for (i = 0, len = __elements__.length; i < len; i++) {
        element = __elements__[i];
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
