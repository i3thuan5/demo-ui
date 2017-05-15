export default class 意傳服務 {

  static 網域() {
    return "https://服務.意傳.台灣/";
  }
  
  static 語音合成({分詞='', 腔口=''}) {
    console.log('語音合成', 分詞, 腔口);
    return encodeURI(
      `${this.網域()}語音合成?查詢腔口=${腔口}&查詢語句=${分詞}`
    );
  }
}