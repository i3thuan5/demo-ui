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

// export const 後端網址 = () => "https://服務.意傳.台灣/";
  
// export const 語音合成 = 語句 => 
//   encodeURI(後端網址() + '語音合成?查詢腔口=閩南語&查詢語句=' + 語句);

// export const ithuan = (服務函式, 參數) => 服務函式(參數);

// const ithuan = {
//   後端網址: () => ("https://服務.意傳.台灣/"),
//   api: (服務函式, 參數) => (this[服務函式](參數))
// };

// export default ithuan;