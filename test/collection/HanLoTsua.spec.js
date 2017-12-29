import 'jsdom-global/register';
import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import { 
  Block, 
  HanLoSu, 
  PlayButton, 
  DownloadButton,
  HanLoTsua,
  意傳服務 as API
} from "../../lib";

const initArgv = {
  羅馬字: "Ta̍k-ke",
  漢字: "逐家",
  src: API.語音合成({
    腔口: "閩南語",
    分詞: "逐-家｜Tak8-ke1"
  }),
  是否合音: true
};

const setup = (argv = initArgv) => {
  const component = shallow(
    <HanLoTsua {...argv}/>,
    );
  return {
    component,
    block: component.find(Block),
    hanlosu: component.find(HanLoSu),
    playbtn: component.find(PlayButton),
    downbtn: component.find(DownloadButton),
  };
};

const mountSetup = (argv = initArgv) => {
  const component = mount(
    <HanLoTsua {...argv}/>,
    );
  return {
    component,
  };
};

describe("Component", () => {
  describe("HanLoTsua(漢羅一逝)", () => {
    it("default props 是否合音", () => {
      const { component } = mountSetup({
        ...initArgv,
        是否合音: undefined
      });
      expect(component.props().是否合音).to.equal(true);
    });
    it("renders 1 HanLoSu in a line", () => {
      const { hanlosu } = setup();
      expect(hanlosu).to.have.length(1);
    });
    it("renders multiple HanLoSu in a line", () => {
      const { hanlosu } = setup({
        ...initArgv,
        羅馬字: "Ta̍k-ke tsò-hué lâi-tshit-thô ！",
        漢字: "逐家 做伙 來𨑨迌 ！",
      });
      expect(hanlosu).to.have.length(4);
    });
    it("passes props to 1 HanLoSu", () => {
      const { hanlosu } = setup();
      expect(hanlosu.props()).to.eql({
        羅馬字: "Ta̍k-ke",
        漢字: "逐家",
      });
    });
    it("passes props to 2 HanLoSu", () => {
      const { hanlosu } = setup({
        ...initArgv,
        羅馬字: "Ta̍k-ke tsò-hué",
        漢字: "逐家 做伙",
      });
      expect([
        hanlosu.at(0).props(),
        hanlosu.at(1).props()
      ]).to.eql([{
        羅馬字: "Ta̍k-ke",
        漢字: "逐家",
      },{
        羅馬字: "tsò-hué",
        漢字: "做伙",
      }]);
    });
    it("輕聲調 傷倚矣Siunn-uá--ah 是兩個漢羅詞", () => {
      const { hanlosu } = setup({
        ...initArgv,
        羅馬字: "Siunn-uá --ah",
        漢字: "傷倚 矣",
      });
      expect(hanlosu.at(0).props()).to.eql({
        羅馬字: "Siunn-uá",
        漢字: "傷倚",
      })
      expect(hanlosu.at(1).props()).to.eql({
        羅馬字: "--ah",
        漢字: "矣",
      });
    });
    it("輕聲調 拍無去 是tsit8個漢羅詞", () => {
      const { hanlosu } = setup({
        ...initArgv,
        羅馬字: "Phah-bô--khì",
        漢字: "拍無去",
      });
      expect(hanlosu.at(0).props()).to.eql({
        羅馬字: "Phah-bô--khì",
        漢字: "拍無去",
      })
    });
    it("renders 1 PlayButton in a line", () => {
      const { playbtn } = setup();
      expect(playbtn).to.have.length(1);
    });
    it("passes props to PlayButton", () => {
      const { playbtn } = setup();
      expect(playbtn.at(0).props()).to.eql({
        src: initArgv.src
      });
    });
    it("passes props to DownloadButton", () => {
      const { downbtn } = setup();
      expect(downbtn.at(0).props()).to.eql({
        src: initArgv.src
      });
    });
    it("render no PlayButton as option", () => {
      const { playbtn } = setup({
        ...initArgv,
        是否合音: false
      });
      expect(playbtn).to.have.length(0);
    });
    it("render no DownloadButton as option", () => {
      const { downbtn } = setup({
        ...initArgv,
        是否合音: false
      });
      expect(downbtn).to.have.length(0);
    });
  });
});
