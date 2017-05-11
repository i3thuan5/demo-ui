export default class 意傳服務 {

  static 網域() {
    return "https://服務.意傳.台灣/";
  }
  
  static 語音合成({語句=''}) {
    return encodeURI(
      this.網域() + '語音合成?查詢腔口=閩南語&查詢語句=' + 語句
    );
  }
}