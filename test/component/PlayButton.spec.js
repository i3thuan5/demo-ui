import 'jsdom-global/register';
import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import sinon from 'sinon';
import { PlayButton } from "../../lib";

const shallowSetup = (分詞 = "逐-家｜tak8-ke1") => {
  return shallow(
    <PlayButton 分詞={分詞}/>
  );
};

const mountSetup = (分詞 = "逐-家｜tak8-ke1") => {
  const wrapper = mount(
    <PlayButton 分詞={分詞}/>,
    { attachTo: document.body.firstChild }
  );
  const audio = wrapper.ref('合成音檔');
  const onload = sinon.stub(audio.node, "load");
  const onplay = sinon.stub(audio.node, "play");
  const button = wrapper.find('button'); 
  return { 
    wrapper, audio, onload, onplay,
    button
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
      const { wrapper, audio, onload } = mountSetup();
      wrapper.setProps({ 分詞: '媠｜sui2' });
      expect(onload.calledOnce).to.equal(true);
    });
    it("ignores same props", () => {
      const { wrapper, onload } = mountSetup();
      wrapper.setProps({ 分詞: '逐-家｜tak8-ke1' });
      expect(onload.called).to.equal(false);
    });
    it("plays audio on click", () => {
      const { wrapper, onplay, button } = mountSetup();
      wrapper.setProps({ 分詞: '媠｜sui2' });
      button.simulate('click');
      expect(onplay.called).to.equal(true);
    });
  });
});