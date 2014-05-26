toki = require("..")
converting = toki.fromHex

describe "hex to toki pona", ->

  it "converts simple sentences", ->
    str = "6d562756"
    converting(str).should.equal "toki pona li pona"

  it "converts sentences with punctuation", ->
    str = "007a36275679"
    converting(str).should.equal "a! moku li pona."
