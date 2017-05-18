import {expect} from 'chai';
import {分詞格式} from '../../src/vendors/CustomPropTypes';

describe('vendors',()=>{
  describe('CustomPropTypes',()=>{
    it('passes ""', ()=>{
      分詞格式({分詞:''},'分詞','FakeComponent');
    });
    it('passes "逐-家｜tak8-ke1"', ()=>{
      分詞格式({分詞:''},'分詞','FakeComponent');
    });
  });
});