import React from 'react';
import { render } from 'react-dom';
import { 
  Layout, 
  Footer, 
  MainSection, 
  HanLoTsua,
  HanLoSu,
  PlayButton, 
  DownloadButton,
  CopyButton,
  ButtonStack,
  Block,
  意傳服務 as API
 } from '../lib';
import './demo.css';

const sites = [{
      title: '意傳文化科技',
      url: 'https://xn--v0qr21b.xn--kpry57d/',
    },];

class Demo extends React.Component {
  render() {
    const src = API.語音合成({
      腔口:"閩南語",
      分詞:"逐-家｜tak8-ke1"
    });
    const errSrc = API.語音合成({
      腔口:"閩南語",
      分詞:"啼｜tai 嘎｜gaˊ 共-下｜kiung+-ha+ 來｜loi 𢯭-手｜tenˇ-shiuˊ ！"
    });
    const 臺羅 = "ta̍k-ke";
    const 漢字 = "逐家";

    return (
      <Layout>
        <MainSection>

          <h2>demo-ui</h2>

          <section>
            <h3>HanLoSu</h3>
            <p><HanLoSu 羅馬字={臺羅} 漢字={漢字}/></p>
          </section>

          <section>
            <h3>PlayButton</h3>
            <p>
              <PlayButton src={src}/>
              <PlayButton src={src}>點我播放</PlayButton>
              <PlayButton src={errSrc}/>
            </p>
            <p>播放合成的句子。使用
              <a href='http://xn--v0qr21b.xn--kpry57d/'>意傳.台灣</a>
              的語音合成服務，只接收分詞後的語句。<br/>
              例：逐-家｜tak8-ke1 來-𨑨-迌｜lai5-tshit4-tho5 ！</p>
          </section>

          <section>
            <h3>DownloadButton</h3>
            <DownloadButton src={src}/>
            <DownloadButton src={errSrc}>點我下載</DownloadButton>
          </section>
          
          <section>
            <h3>HanLoTsua</h3>
            <HanLoTsua src={src} 羅馬字={臺羅} 漢字={漢字}/>
            <HanLoTsua 是否合音={false} 羅馬字={臺羅} 漢字={漢字}/>
            <p>組合了HanLoSu和PlayButton。</p>
          </section>

          <section>
            <h3>CopyButton</h3>
            <p><CopyButton 複製內容="Hello copied!"/>按我複製</p>
          </section>

          <section>
            <h3>icon-font</h3>
            <ul>
              <li><i className="icon-play"/> icon-play</li>
              <li><i className="icon-docs"/> icon-docs</li>
            </ul>
          </section>
         
          <section>
            <h3>Block</h3>
            <Block>Block</Block>
          </section>

          <section>
            <h3>ButtonStack</h3>
            <ButtonStack>
              <button className='ui button'>1</button>
              <button className='ui button'>2</button>
              <button className='ui button'>3</button>
              <button className='ui button'>1</button>
            </ButtonStack>
            <h3>ButtonStack with CopyButton</h3>
            <ButtonStack>
              <CopyButton 複製內容="1" 按鈕名="copy"/>
              <CopyButton 複製內容="1" 按鈕名="copy"/>
              <CopyButton 複製內容="1" 按鈕名="copy"/>
            </ButtonStack>
          </section>

          <section>
            <h3>字體</h3>
            <p>參考自<a href="https://github.com/audreyt/moedict-webkit">萌典</a></p>
            <ul>
            <li>𢯭手𨑨迌：MOEDICT萌典</li>
            <li>a̍：FiraSansOT</li>
            </ul>
          </section>

        </MainSection>
        <Footer sites={sites}/>
      </Layout>
    );
  }
}

export default Demo;
