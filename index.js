var words = require("./words.json").words;
var punctuation = require("./punctuations.json").punctuations;

var table = words.map(function(word) {
  return word.word;
}).concat(punctuation);

module.exports = {

  toCode: function toCode (n) {
  },

  fromCode: function fromCode (n) {

  },

  toHex: function toHex (str) {

  },

  fromHex: function fromHex (buffer) {

    var words = [];
    for (var i = 0; i < buffer.length; i ++) {
      var code = buffer[i];
      words.push(table[code]);
    }

    return words.join(" ");

  }

};
