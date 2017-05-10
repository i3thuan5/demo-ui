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
  return mount(
    <PlayButton 語句={語句}/>,
    { attachTo: document.body.firstChild }
  );
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
      const wrapper = mountSetup();
      let sui='0';
      let audio = wrapper.ref('合成音檔');
      audio.node.load = () => {sui='1'};
      wrapper.setProps({ 語句: '語句' });
      expect(sui).to.equal('1');
    });
    it("ignores same props", () => {
      const wrapper = mountSetup();
      let sui='0';
      let audio = wrapper.ref('合成音檔');
      audio.node.load = () => {sui='1'};
      wrapper.setProps({ 語句: '逐家' });
      expect(sui).to.equal('0');
    });
  });
});