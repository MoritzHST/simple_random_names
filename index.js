var RandomNames = function() {
  function RandomNames(locale) {
    this.data = {}
    switch (locale.toLowerCase()){
      case "en":
          var Locale = require("./locales/en/index.js")
          var locale = new Locale();
          this.data.adjectives = locale.getAdjectives()
          this.data.nouns = locale.getNouns()
    }
  }

  RandomNames.prototype.getRandomName = function() {
    var adjective = this.data.adjectives[Math.floor(Math.random() * this.data.adjectives.length)]
    var noun = this.data.nouns[Math.floor(Math.random() * this.data.nouns.length)]

    return capitalizeFirstLetter(adjective) + capitalizeFirstLetter(noun)
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return RandomNames
}();

module.exports = RandomNames
