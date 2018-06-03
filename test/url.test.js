require('should')
const url = require('../lib/url')

describe('url test', function () {
  it('ACCESS_TOKEN', function () {
    url.ACCESS_TOKEN.should.equal('https://api.weixin.qq.com/cgi-bin/token')
  })
})
