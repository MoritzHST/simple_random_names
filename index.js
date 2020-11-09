var RandomNames = function() {
  function RandomNames(locale) {
    var curLocale = locale
    if (!curLocale){
      curLocale = "en";
    }
    var Locale = require("./locales/" +curLocale.toLowerCase()+ "/index.js")
    this.locale = new Locale();
  }

  RandomNames.prototype.getRandomName = function() {
    let {adjective, noun} = this.locale.getRandomName()

    return capitalizeFirstLetter(adjective) + capitalizeFirstLetter(noun)
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return RandomNames
}();

module.exports = RandomNames
