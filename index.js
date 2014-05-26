var words = require("./words.json").words;
var punctuations = ".!?".split("");

var table = words.map(function(word) {
  return word.word;
}).concat(punctuations);

module.exports = {

  toCode: function toCode (n) {
  },

  fromCode: function fromCode (n) {

  },

  toHex: function toHex (str) {

  },

  fromHex: function fromHex (buffer) {
    var result = "";
    for (var i = 0; i < buffer.length; i ++) {
      var character = table[buffer[i]];
      if (character) {
        result += character + " ";
      }
    }
    return result.trim().replace(
      /\s+([\.!\?])/g,
      "$1"
    );
  }

};
