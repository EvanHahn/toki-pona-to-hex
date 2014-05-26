toki = require("..")
converting = toki.toHex

describe "toki pona to hex", ->

  it "converts simple sentences", ->
    str = "toki pona li pona"
    converting(str).should.equal "6d562756"

  it "converts sentences with punctuation", ->
    str = "a! moku li pona."
    converting(str).should.equal "007a36275679"
