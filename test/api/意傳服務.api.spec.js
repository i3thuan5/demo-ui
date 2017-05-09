import {expect} from 'chai';
import {意傳服務 as API} from '../../lib';

const initDomain = "https://服務.意傳.台灣/";

describe("服務.意傳.台灣", () => {
  describe("API", () => {
    it("domain", () => {
      const domain = API.網域();
      expect(domain).to.equal(initDomain);
    });
    it("returns 語音合成", () => {
      const url = API.語音合成({
        語句: "逐家"
      });
      expect(url).to.equal(encodeURI(
        initDomain + "語音合成?查詢腔口=閩南語&查詢語句=逐家"
      ));
    });
  });
});