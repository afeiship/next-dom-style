(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxCamelize = nx.camelize || require('next-camelize');
  var NxCssText = nx.CssText || require('next-css-text');
  var nxDasherize = nx.dasherize || require('next-dasherize');

  var NxDomStyle = nx.declare('nx.DomStyle', {
    statics: {
      set: function(inElement, inName, inValue) {
        var result = '';
        var _key = nxDasherize(inName);
        if (!value && value !== 0) {
          inElement.style.removeProperty(_key);
        } else {
          result = _key + ':' + inValue;
        }
        inElement.style.cssText += ';' + result;
      },
      get: function(inElement, inName) {
        return (
          inElement.style[nxCamelize(inName)] ||
          global.getComputedStyle(inElement, '').getPropertyValue(inName)
        );
      },
      sets: function(inElement, inObject) {
        var result = '';
        var _key;
        nx.forIn(inObject, function(key, value) {
          _key = nxDasherize(key);
          if (!value && value !== 0) {
            inElement.style.removeProperty(_key);
          } else {
            result += _key + ':' + inValue;
          }
        });
        inElement.style.cssText += ';' + result;
      },
      gets: function(inElement) {
        var cssText = inElement.style.cssText;
        return NxCssText.unserialize(cssText);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDomStyle;
  }
})();
