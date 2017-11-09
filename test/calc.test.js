var add = require('../calc').add;
var expect =require('chai').expect;

describe('test of add',function(){
  before(function(){
    console.log('before');
  });

  after(function(){
    console.log('after');
  });

  beforeEach(function(){
    console.log('beforeEach');
  });

  afterEach(function(){
    console.log('afterEach');
  });

  it('abc + 1 = NaN',function(){
    expect(isNaN(add('abc',1))).to.be.ok;
  });

  it('0 + 0 = 0',function(){
    expect(add(0,0)).to.be.equal(0);
  });

  it('0 + 1 = 1',function(){
    expect(add(0,1)).to.be.equal(1);
  });
  it('1 + 1 = 2',function(){
    expect(add(1,1)).to.be.equal(2);
  });
});
