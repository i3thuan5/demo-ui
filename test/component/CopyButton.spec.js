import 'jsdom-global/register';
import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import sinon from 'sinon';
import { CopyButton } from "../../lib";

const shallowSetup = (內容 = "請複製這句話") => 
  shallow(<CopyButton 複製內容={內容}/>)

const mountSetup = (內容 = "請複製這句話") => {
  const wrapper = mount(
    <CopyButton 複製內容={內容}/>,
    { attachTo: document.body.firstChild }
  );
  const button = wrapper.find('button'); 
  //mock document copy method
  document.execCommand = function(){return true;}
  const oncopy = sinon.spy(document, 'execCommand');
  return { 
    wrapper, button, oncopy
  }
};

describe("Component", () => {
  describe("CopyButton", () => {   
    it("renders button", () => {
      const wrapper = shallowSetup();
      expect(wrapper.find("button")).to.have.length(1);
    });
    it("copys on click", () => {
      const { button, oncopy } = mountSetup();
      button.simulate('click');
      expect(oncopy.called).to.equal(true);
    });
    it("copys the same as original text", () => {
      let 欲複製字串 = "A-hí--á láu --tio̍h,";
      const { wrapper, button, oncopy } = mountSetup(欲複製字串);
      button.simulate('click');
      // expect(wrapper.find("textarea").innerText).to.equal(true);
      console.log('document.body.childNodes=', document.body.childNodes)
    });
  });
});