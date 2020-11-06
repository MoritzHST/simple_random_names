var Locale = function() {
  function Locale(){
    this.adjectives = require("./adjectives.json")
    this.nouns = require("./nouns.json")
  }

  Locale.prototype.getAdjectives = function(){
    return this.adjectives
  }

  Locale.prototype.getNouns = function(){
    return this.nouns
  }

  return Locale
}()

module.exports = Locale;
