import 'jsdom-global/register';
import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import sinon from 'sinon';
import { PlayButton } from "../../lib";

const initArgv = {
  腔口: "閩南語", 
  分詞: "逐-家｜tak8-ke1"
};

const shallowSetup = (argv = initArgv) => {
  return shallow(
    <PlayButton {...argv}/>
  );
};

const mountSetup = (argv = initArgv) => {
  const wrapper = mount(
    <PlayButton {...argv}/>,
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
    it("passes 腔口 分詞 to source", () => {
      const wrapper = shallowSetup({
        腔口: "四縣腔",
        分詞: "逐-家｜Tak8-ke1"
      });
      expect(wrapper.find("source").get(0).props.src)
      .to.equal(encodeURI(
        "https://服務.意傳.台灣/"+
        "語音合成?查詢腔口=四縣腔&查詢語句=逐-家｜Tak8-ke1"));
    });
    it("reloads audio when update props", () => {
      const { wrapper, onload } = mountSetup();
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
    it("shows red button when audio error", () => {
      const { wrapper, button } = mountSetup({
        腔口: "海陸腔", 
        分詞: "啼｜tai 嘎｜gaˊ 共-下｜kiung+-ha+ 來｜loi 𢯭-手｜tenˇ-shiuˊ ！"
      });
     wrapper.setState({isError:true}); 
     expect(button.at(0).hasClass('negative')).to.equal(true);
    });
    it("shows darker button when playing", () => {
      const { wrapper, button } = mountSetup({
        腔口: "海陸腔", 
        分詞: "啼｜tai 嘎｜gaˊ 共-下｜kiung+-ha+ 來｜loi 𢯭-手｜tenˇ-shiuˊ ！"
      });
     wrapper.setState({isPlaying:true}); 
     expect(button.at(0).hasClass('grey')).to.equal(true);
    });
    it("shows normal button", () => {
      const { wrapper, button } = mountSetup({
        腔口: "海陸腔", 
        分詞: "啼｜tai 嘎｜gaˊ 共-下｜kiung+-ha+ 來｜loi 𢯭-手｜tenˇ-shiuˊ ！"
      });
     expect(['negative', 'disabled', 'grey'].every(c => 
      wrapper.hasClass(c))).to.equal(false);
    });
  });
});