toki = require("..")
converting = toki.fromHex

describe "hex to toki pona", ->

  it "converts simple sentences", ->
    buf = new Buffer("\u006d\u0056\u0027\u0056")
    converting(buf).should.equal "toki pona li pona"

  it "converts sentences with punctuation", ->
    buf = new Buffer("\u0000\u007a\u0036\u0027\u0056\u0079")
    converting(buf).should.equal 'a! moku li pona.'
