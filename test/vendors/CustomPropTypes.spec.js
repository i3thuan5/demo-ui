import {expect} from 'chai';
import {分詞格式} from '../../src/vendors/CustomPropTypes';

describe('vendors',()=>{
  describe('CustomPropTypes',()=>{
    it('passes ""', ()=>{
      expect(
        function(){
        分詞格式({分詞:""},'分詞','FakeComponent');
      }).to.not.throw(Error);
    });
    it('passes "逐-家｜tak8-ke1"', ()=>{
      expect(
        function(){
        分詞格式({分詞:"逐-家｜tak8-ke1"},'分詞','FakeComponent');
      }).to.not.throw(Error);
    });
    it('stops "逐-家"', ()=>{
      expect(
        function(){
          throw 分詞格式({分詞:'逐-家'},'分詞','FakeComponent');
      }).to.throw(Error);
    });
  });
});