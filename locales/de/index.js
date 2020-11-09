var Locale = function() {
  function Locale(){
    this.adjectives = require("./adjectives.json")
    this.nouns = require("./nouns.json")
  }

  Locale.prototype.getRandomName = function(){
    const rand = Math.floor(Math.random() * 3);
    let noun;
    let gender;
    if (rand === 0){
      gender = "maskulin"
      noun = this.nouns.maskulin[Math.floor(Math.random() * this.nouns.maskulin.length)]
    }
    else if (rand === 1){
      gender = "feminin"
      noun = this.nouns.feminin[Math.floor(Math.random() * this.nouns.feminin.length)]
    }
    else {
      gender = "neutrum"
      noun = this.nouns.neutrum[Math.floor(Math.random() * this.nouns.neutrum.length)]
    }

    let adjective = this.adjectives[Math.floor(Math.random() * this.adjectives.length)]
    switch (gender){
      case "maskulin":  adjective = removeLastE(adjective)+ "er"
                        break;
      case "feminin":   adjective = removeLastE(adjective)+ "e"
                        break;
      default: adjective = removeLastE(adjective)+ "es"
    }

    return {noun: noun, adjective: adjective}
  }

  function removeLastE (adjective) {
    if (adjective.substring(adjective.length-1) === "e"){
        adjective = adjective.substring(0, adjective.length-1);
    }

    return adjective;
}

  return Locale
}()

module.exports = Locale;
