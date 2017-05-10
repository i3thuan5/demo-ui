import 'jsdom-global/register';
import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import sinon from 'sinon';
import { PlayButton } from "../../lib";

const shallowSetup = (語句 = "逐家") => {
  return shallow(
    <PlayButton 語句={語句}/>
  );
};

const mountSetup = (語句 = "逐家") => {
  const wrapper = mount(
    <PlayButton 語句={語句}/>,
    { attachTo: document.body.firstChild }
  );
  let audio = wrapper.ref('合成音檔');
  let onload = sinon.stub(audio.node, "load");
  return { 
    wrapper, audio, onload 
  }
};

describe("Component", () => {
  describe("PlayButton", () => {
    
    beforeEach(function() {
      document.body.innerHTML = '<div></div>';
    });

    it("renders audio", () => {
      const wrapper = shallowSetup();
      expect(wrapper.find("audio")).to.have.length(1);
    });
    it("renders button", () => {
      const wrapper = shallowSetup();
      expect(wrapper.find("button")).to.have.length(1);
    });
    it("reloads audio when update props", () => {
      const { wrapper, audio, onload } = mountSetup('逐家');
      wrapper.setProps({ 語句: '語句' });
      expect(onload.calledOnce).to.equal(true);
    });
    it("ignores same props", () => {
      const { wrapper, audio, onload } = mountSetup('逐家');
      wrapper.setProps({ 語句: '逐家' });
      expect(onload.called).to.equal(false);
    });
  });
});