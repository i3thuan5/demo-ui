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
<HanLoSu 臺羅閏號調="sui2" 漢字="媠"/>  //漢羅詞

<PlayButton 語句={"逐-家｜tak8-ke1"}/>  //播放語音合成按鈕

<CopyButton 複製內容={"Hello copied!"}/> //複製按鈕
```