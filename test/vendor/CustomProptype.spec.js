import React from "react";
import { expect } from "chai";
import { 分詞格式 } from "../../src/vendor/CustomProptype";

describe('vendor CustomProptype', ()=>{
  it('passes empty string', () => {
    expect(function(){
      throw 分詞格式({分詞: ''},'分詞', 'FakeComponent');
    }).to.not.throw(Error);
  });
  it('passes substring ｜', () => {
    expect(function(){
      throw 分詞格式({分詞: '媠｜sui2'},'分詞', 'FakeComponent');
    }).to.not.throw(Error);
  });
  it('throws Error', () => {
    expect(function(){
      throw 分詞格式({分詞: '媠'},'分詞', 'FakeComponent');
    }).to.throw(Error);
  });
});