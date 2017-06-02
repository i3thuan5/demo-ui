# demo-ui
demo網頁中常用的版面元素

## Running
```
npm run start
open http://localhost:3333/
```

## Demo
```javascript
<Layout>
  
  <MainSection>
    <p> Hello world! </p>
  </MainSection>

  <Footer/>
</Layout>
```

## Theme
```javascript
<Layout/>  //網站

<MainSection/> //主內容

<Footer/> //頁腳
```

## Component
```javascript
<HanLoSu 羅馬字="ta̍k-ke" 漢字="逐家"/>  //漢羅詞

<PlayButton 腔口="閩南語" 分詞="逐-家｜tak8-ke1"/>  //播放語音合成按鈕

<DownloadButton 腔口="閩南語" 分詞="逐-家｜tak8-ke1"/> //下載按鈕

<CopyButton 複製內容={"Hello copied!"}/> //複製按鈕

<Block/> //一個區塊

<ButtonStack/> //一組堆疊按鈕
```

## Collection
```javascript
<HanLoTsua 羅馬字="ta̍k-ke" 漢字="逐家" src={音檔網址}
是否合音={true}/>
//漢羅逝，default 是否合音=true
```

## API
```javascript
意傳服務
  網域
  語音合成
  文本直接合成
```

## Fonts
參考自[萌典](https://github.com/audreyt/moedict-webkit)
* 𢯭手𨑨迌：MOEDICT萌典
* a̍：FiraSansOT
* ABCDabcd123：basicLatin本專案自訂字型