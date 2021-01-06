import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import sinon from 'sinon';
import { DownloadButton } from "../../lib";

const initArgv = {
  src: encodeURI(
    "https://hts.ithuan.tw/"+
    "語音合成?查詢腔口=閩南語&查詢語句=逐-家｜tak8-ke1"
  ),
};

const shallowSetup = (argv = initArgv, children) => {
  return shallow(
    <DownloadButton {...argv}>
    {children}
    </DownloadButton>
  );
};

describe("Component", () => {
  describe("DownloadButton", () => {   
    it("passes src to href", () => {
      const wrapper = shallowSetup();
      expect(wrapper.find("a").get(0).props.href)
      .to.equal(initArgv.src);
    });
    it("passes children 標題", () => {
      const wrapper = shallowSetup(initArgv, "點我下載");
      expect(wrapper.find("a").text())
      .to.equal("點我下載");
    });
  });
});