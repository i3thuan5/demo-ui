import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import sinon from 'sinon';
import { DownloadButton } from "../../lib";

const initArgv = {
  腔口: "閩南語", 
  分詞: "逐-家｜tak8-ke1"
};

const shallowSetup = (argv = initArgv) => {
  return shallow(
    <DownloadButton {...argv}/>
  );
};

describe("Component", () => {
  describe("DownloadButton", () => {   
    it("passes 腔口 分詞 to href", () => {
      const wrapper = shallowSetup();
      expect(wrapper.find("a").get(0).props.href)
      .to.equal(encodeURI(
        "https://服務.意傳.台灣/"+
        "語音合成?查詢腔口=閩南語&查詢語句=逐-家｜tak8-ke1"));
    });
  });
});