var Locale = function() {
  function Locale(){
    this.adjectives = require("./adjectives.json")
    this.nouns = require("./nouns.json")
  }

  Locale.prototype.getRandomName = function(){
    var noun = this.nouns[Math.floor(Math.random() * this.nouns.length)]
    var adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)]

    return {noun: noun, adjective: adjective}
  }

  return Locale
}()

module.exports = Locale;
