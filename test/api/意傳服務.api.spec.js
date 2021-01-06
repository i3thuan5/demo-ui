import {expect} from 'chai';
import {意傳服務 as API} from '../../lib';

const initDomain = "https://hts.ithuan.tw/";

describe("hts.ithuan.tw", () => {
  describe("API", () => {
    it("domain", () => {
      const domain = API.網域();
      expect(domain).to.equal(initDomain);
    });
    it("returns 語音合成 閩南語", () => {
      const url = API.語音合成({
        腔口: "閩南語",
        分詞: "逐-家｜Tak8-ke1"
      });
      expect(url).to.equal(encodeURI(
        initDomain + 
        "語音合成?查詢腔口=閩南語&查詢語句=逐-家｜Tak8-ke1"
      ));
    });
    it("returns 語音合成 四縣腔", () => {
      const url = API.語音合成({
        腔口: "四縣腔",
        分詞: "逐-家｜Tak8-ke1"
      });
      expect(url).to.equal(encodeURI(
        initDomain + 
        "語音合成?查詢腔口=四縣腔&查詢語句=逐-家｜Tak8-ke1"
      ));
    });
    it("returns 文本直接合成 Pangcah", () => {
      const url = API.文本直接合成({
        腔口: "Pangcah",
        語句: "Maolahay"
      });
      expect(url).to.equal(encodeURI(
        initDomain + 
        "文本直接合成?查詢腔口=Pangcah&查詢語句=Maolahay"
      ));
    });
  });
});