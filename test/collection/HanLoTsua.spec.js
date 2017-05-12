import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { Block, HanLoSu, PlayButton, HanLoTsua } from "../../lib";

const initArgv = {
  臺羅閏號調: "Ta̍k-ke",
  漢字: "逐家",
  分詞: "",
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
    playbtn: component.find(PlayButton)
  };
};

describe("Component", () => {
  describe("HanLoTsua(漢羅一逝)", () => {
    it("renders 1 HanLoSu in a line", () => {
      const { hanlosu } = setup();
      expect(hanlosu).to.have.length(1);
    });
    it("renders multiple HanLoSu in a line", () => {
      const { hanlosu } = setup({
        ...initArgv,
        臺羅閏號調: "Ta̍k-ke tsò-hué lâi-tshit-thô ！",
        漢字: "逐家 做伙 來𨑨迌 ！",
      });
      expect(hanlosu).to.have.length(4);
    });
    it("passes props to 1 HanLoSu", () => {
      const { hanlosu } = setup();
      expect(hanlosu.props()).to.eql({
        臺羅閏號調: "Ta̍k-ke",
        漢字: "逐家",
      });
    });
    it("passes props to 2 HanLoSu", () => {
      const { hanlosu } = setup({
        ...initArgv,
        臺羅閏號調: "Ta̍k-ke tsò-hué",
        漢字: "逐家 做伙",
      });
      expect(hanlosu.at(1).props()).to.eql({
        臺羅閏號調: "tsò-hué",
        漢字: "做伙",
      });
    });
    it("renders 1 PlayButton in a line", () => {
      const { playbtn } = setup();
      expect(playbtn).to.have.length(1);
    });
    it("passes props to PlayButton", () => {
      const { playbtn } = setup({
        ...initArgv,
        分詞: "逐-家｜tak8-ke1",
      });
      expect(playbtn.at(0).props()).to.eql({
        分詞: "逐-家｜tak8-ke1"
      });
    });
    it("render no PlayButton as option", () => {
      const { playbtn } = setup({
        ...initArgv,
        是否合音: false
      });
      expect(playbtn).to.have.length(0);
    });
  });
});