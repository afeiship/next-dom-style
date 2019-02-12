(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxCamelize = nx.camelize || require('next-camelize');
  var NxCssText = nx.CssText || require('next-css-text');

  var NxDomStyle = nx.declare('nx.DomStyle', {
    statics: {
      set: function(inElement, inName, inValue) {},
      get: function(inElement, inName) {
        return (
          inElement.style[nxCamelize(inName)] ||
          global.getComputedStyle(inElement, '').getPropertyValue(inName)
        );
      },
      sets: function(inElement, inObject) {},
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
