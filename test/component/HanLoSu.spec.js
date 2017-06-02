import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { HanLoSu } from "../../lib";

const setup = ({ 漢字 = "", 羅馬字 = "" }) => {
  const component = shallow(
    <HanLoSu 漢字={漢字}
      羅馬字={羅馬字}/>,
    );
  return component.children().map(node => node.text());
};

describe("Component", () => {
  describe("HanLoSu", () => {
    it("should render 一組漢羅詞", () => {
      const html = setup({
        羅馬字: "Ta̍k-ke",
        漢字: "逐家",
      });
      expect(html).to.eql([
        "Ta̍k-ke",
        "逐家",
      ]);
    });
  });
});