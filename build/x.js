var x;

x = function(s) {
  var _;
  _ = {};
  _.selector = s;
  _.element = function() {
    return document.querySelector(_.selector);
  };
  _.elements = function() {
    return document.querySelectorAll(_.selector);
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
        console.warn("You provided an index (" + index + ") that is out of range to a x.addClass. The selector was " + _.selector);
        return null;
      }
      __element__ = _.elements()[index];
      if (__element__.className === "") {
        __element__.className = newClass;
      } else {
        __element__.className += " " + newClass;
      }
    }
    return this;
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
        console.warn("You provided an index (" + index + ") that is out of range to a x.append. The selector was " + _.selector);
        return null;
      }
      __element__ = _.es()[index];
      __element__.innerHTML += newHtml;
    }
    return this;
  };
  _.css = function(key, value, index) {
    var __element__, __elements__, __key__, __value__, element, i, j, len, len1;
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
      for (j = 0, len1 = __elements__.length; j < len1; j++) {
        element = __elements__[j];
        element.style[key] = value;
      }
    } else {
      if (index >= _.elements().length || index < 0) {
        console.warn("You provided an index (" + index + ") that is out of range to a x.css. The selector was " + _.selector);
        return null;
      }
      __element__ = _.es()[index];
      __element__.style[key] = value;
    }
    return this;
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
        console.warn("You provided an index (" + index + ") that is out of range to a x.each. The selector was " + _.selector);
        return null;
      }
      __element__ = _.es()[index];
      customFunciton(__element__);
    }
    return this;
  };
  _.html = function(newHtml, index) {
    var __element__, __elements__, element, i, j, len, len1, returnArr;
    if (newHtml !== void 0 && typeof newHtml !== "number") {
      if (index === void 0) {
        __elements__ = _.es();
        for (i = 0, len = __elements__.length; i < len; i++) {
          element = __elements__[i];
          element.innerHTML = newHtml;
        }
      } else {
        if (index >= _.elements().length || index < 0) {
          console.warn("You provided an index (" + index + ") that is out of range to a x.html. The selector was " + _.selector);
          return null;
        }
        __element__ = _.es()[index];
        __element__.innerHTML = newHtml;
      }
      return this;
    } else {
      if (newHtml === void 0) {
        returnArr = [];
        __elements__ = _.es();
        for (j = 0, len1 = __elements__.length; j < len1; j++) {
          element = __elements__[j];
          returnArr.push(element.innerHTML);
        }
        return returnArr;
      } else {
        if (newHtml >= _.elements().length || newHtml < 0) {
          console.warn("You provided an index (" + newHtml + ") that is out of range to a x.html. The selector was " + _.selector);
          return null;
        }
        return _.es()[newHtml].innerHTML;
      }
    }
  };
  _.ready = function(fn) {
    if (document.readyState !== 'loading') {
      return fn();
    } else {
      return document.addEventListener('DOMContentLoaded', fn);
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
        console.warn("You provided an index (" + index + ") that is out of range to a x.removeAllClasses. The selector was " + _.selector);
        return null;
      }
      __element__ = _.elements()[index];
      __element__.className = "";
    }
    return this;
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
        console.warn("You provided an index (" + index + ") that is out of range to a x.removeClass. The selector was " + _.selector);
        return null;
      }
      __element__ = _.elements()[index];
      __element__.className = __element__.className.split(oldClass).join('').split('  ').join(' ').trim();
    }
    return this;
  };
  _.toggle = function(index) {
    var __elements__, element, i, len, toggle;
    toggle = function(e) {
      console.log(getComputedStyle(e).display);
      if (getComputedStyle(e).display === 'none') {
        return e.style.display = 'block';
      } else {
        return e.style.display = 'none';
      }
    };
    if (typeof index === 'number') {
      if (index >= _.elements().length || index < 0) {
        console.warn("You provided an index (" + index + ") that is out of range to a x.toggle. The selector was " + _.selector);
        return null;
      }
      toggle(_.es()[index]);
    } else {
      __elements__ = _.es();
      for (i = 0, len = __elements__.length; i < len; i++) {
        element = __elements__[i];
        toggle(element);
      }
    }
    return _;
  };
  _.val = function(newVal, index) {
    var __element__, __elements__, element, i, j, len, len1, returnArr;
    if (newVal !== void 0 && typeof newVal !== "number") {
      if (index === void 0) {
        __elements__ = _.es();
        for (i = 0, len = __elements__.length; i < len; i++) {
          element = __elements__[i];
          element.value = newVal;
        }
      } else {
        if (index >= _.elements().length || index < 0) {
          console.warn("You provided an index (" + index + ") that is out of range to a x.val. The selector was " + _.selector);
          return null;
        }
        __element__ = _.es()[index];
        __element__.vaule = newVal;
      }
      return this;
    } else {
      if (newVal === void 0) {
        returnArr = [];
        __elements__ = _.es();
        for (j = 0, len1 = __elements__.length; j < len1; j++) {
          element = __elements__[j];
          returnArr.push(element.value);
        }
        return returnArr;
      } else {
        if (newVal >= _.elements().length || newVal < 0) {
          console.warn("You provided an index (" + newVal + ") that is out of range to a x.val. The selector was " + _.selector);
          return null;
        }
        return _.es()[newVal].value;
      }
    }
  };
  return _;
};
