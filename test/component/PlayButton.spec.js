import 'jsdom-global/register';
import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import sinon from 'sinon';
import { PlayButton } from "../../lib";

const initArgv = {
  src: encodeURI(
    "https://hts.ithuan.tw/"+
    "語音合成?查詢腔口=閩南語&查詢語句=逐-家｜tak8-ke1"
  ),
};

const hakkaArgv = {
  src: encodeURI(
    "https://hts.ithuan.tw/"+
    "語音合成?查詢腔口=四縣腔&查詢語句=逐-家｜Tak8-ke1"
  ),
}

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
  const audio = wrapper.find('audio');
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
    it("passes prop src to source", () => {
      const wrapper = shallowSetup();
      expect(wrapper.find("source").get(0).props.src)
      .to.equal(initArgv.src);
    });
    it("passes prop children to title", () => {
      const title = 'Hello button';
      const wrapper = shallowSetup({
        ...initArgv,
        children: title
      });
      expect(wrapper.find("button").first().text())
      .to.equal(title);
    });
    it("reloads audio when update props", () => {
      const { wrapper, onload } = mountSetup();
      wrapper.setProps({ src: hakkaArgv.src });
      expect(onload.calledOnce).to.equal(true);
    });
    it("ignores same props", () => {
      const { wrapper, onload } = mountSetup();
      wrapper.setProps({ src: initArgv.src });
      expect(onload.called).to.equal(false);
    });
    it("plays audio on click", () => {
      const { wrapper, onplay, button } = mountSetup();
      wrapper.setProps({ src: hakkaArgv.src });
      button.simulate('click');
      expect(onplay.called).to.equal(true);
    });
    it("shows red button when audio error", () => {
      const { wrapper, button } = mountSetup({
        src: encodeURI(
          "https://hts.ithuan.tw/"+
          "語音合成?查詢腔口=海陸腔&"+
          "查詢語句=啼｜tai 嘎｜gaˊ 共-下｜kiung+-ha+ 來｜loi 𢯭-手｜tenˇ-shiuˊ ！"
        ),
      });
     wrapper.setState({isError:true}); 
     expect(button.at(0).hasClass('negative')).to.equal(true);
    });
    it("shows darker button when playing", () => {
      const { wrapper, button } = mountSetup({
        src: encodeURI(
          "https://hts.ithuan.tw/"+
          "語音合成?查詢腔口=海陸腔&"+
          "查詢語句=啼｜tai 嘎｜gaˊ 共-下｜kiung+-ha+ 來｜loi 𢯭-手｜tenˇ-shiuˊ ！"
        ),
      });
     wrapper.setState({isPlaying:true}); 
     expect(button.at(0).hasClass('grey')).to.equal(true);
    });
    it("shows normal button", () => {
      const { wrapper, button } = mountSetup({
        src: encodeURI(
          "https://hts.ithuan.tw/"+
          "語音合成?查詢腔口=海陸腔&"+
          "查詢語句=啼｜tai 嘎｜gaˊ 共-下｜kiung+-ha+ 來｜loi 𢯭-手｜tenˇ-shiuˊ ！"
        ),
      });
     expect(['negative', 'disabled', 'grey'].every(c => 
      wrapper.hasClass(c))).to.equal(false);
    });
  });
});