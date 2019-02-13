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
        if (!value && value !== 0) {
          inElement.style.removeProperty(nxDasherize(inName));
        } else {
          result = nxDasherize(inName) + ':' + inValue;
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
        nx.forIn(inObject, function(key, value) {
          if (!value && value !== 0) {
            inElement.style.removeProperty(nxDasherize(key));
          } else {
            result += nxDasherize(key) + ':' + inValue;
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
