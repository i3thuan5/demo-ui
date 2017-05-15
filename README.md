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
<HanLoSu 臺羅閏號調="ta̍k-ke" 漢字="逐家"/>  //漢羅詞

<PlayButton 腔口="閩南語" 語句="逐-家｜tak8-ke1"/>  //播放語音合成按鈕

<CopyButton 複製內容={"Hello copied!"}/> //複製按鈕

<Block/> //一個區塊

<ButtonStack/> //一組堆疊按鈕
```

## Collection
```javascript
<HanLoTsua 腔口="閩南語" 臺羅閏號調="ta̍k-ke" 漢字="逐家" 分詞="逐-家｜tak8-ke1" 
是否合音={true}/>
//漢羅逝，default 是否合音=true
```

## API
```javascript
意傳服務
```