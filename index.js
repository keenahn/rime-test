'use strict'

// see also: https://github.com/jimkang/word-phoneme-map

const co = require('co')
const promisify = require('es6-promisify')
const Rime = promisify(require('rime'))

const init = co.wrap(function* () {
  const rime = yield Rime({})
  const getRhymes = promisify(rime.getRhymes)
  const rhymes = yield getRhymes({
    base: 'rock',
  })
  console.log(rhymes)
})

init()
