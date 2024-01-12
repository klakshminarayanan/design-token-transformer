const StyleDictionary = require('style-dictionary');
const TinyColor = require('@ctrl/tinycolor')

module.exports = {
  type: 'value',
  matcher: function (token) {
    return token.type === 'color'
  },
  transformer: function ({ value }) {
    const hex8 = new TinyColor.TinyColor(value).toHex();
    return `Color(0xff${hex8})`
  }
}