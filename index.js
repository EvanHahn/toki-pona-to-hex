var words = require("./words.json").words;
var punctuations = ".!?".split("");

var table = words.map(function(word) {
  return word.word;
}).concat(punctuations);

function hexify (n) {
  var result = n.toString(16);
  if (result.length === 1) {
    return "0" + result;
  } else {
    return result;
  }
}

module.exports = {

  toHex: function toHex (str) {

    var result = "";

    var tokens = str.toLowerCase().match(/(?:\w+)|(?:[\.!\?])/g);
    for (var i = 0, len = tokens.length; i < len; i ++) {
      var index = table.indexOf(tokens[i]);
      if (index !== -1) {
        result += hexify(index);
      }
    }

    return result;

  },

  fromHex: function fromHex (str) {

    var result = "";

    for (var i = 0, len = str.length; i < len; i += 2) {
      var index = parseInt(str[i] + str[i + 1], 16);
      var character = table[index];
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
