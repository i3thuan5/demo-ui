import React from 'react';
import { render } from 'react-dom';
import { 
  Layout, 
  Footer, 
  MainSection, 
  HanLoTsua,
  HanLoSu,
  PlayButton, 
  CopyButton,
  ButtonStack,
  Block
 } from '../lib';

const sites = [{
      title: '意傳文化科技',
      url: 'https://xn--v0qr21b.xn--kpry57d/',
    },];

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <MainSection>

          <h2>demo-ui</h2>

          <section>
            <h3>HanLoSu</h3>
            <p>字字字<HanLoSu 臺羅閏號調="ta̍k-ke" 漢字="逐家"/>字字字</p>
          </section>

          <section>
            <h3>PlayButton</h3>
            <p><PlayButton 腔口="閩南語" 分詞="逐-家｜tak8-ke1"/></p>
            <p>播放合成的句子。使用
              <a href='http://xn--v0qr21b.xn--kpry57d/'>意傳.台灣</a>
              的語音合成服務，只接收分詞後的語句。<br/>
              例：逐-家｜tak8-ke1 來-𨑨-迌｜lai5-tshit4-tho5 ！</p>
          </section>

          <section>
            <h3>HanLoTsua</h3>
            <HanLoTsua 腔口="閩南語" 臺羅閏號調="ta̍k-ke" 漢字="逐家" 分詞="逐-家｜tak8-ke1"/>
            <HanLoTsua 腔口="閩南語" 臺羅閏號調="ta̍k-ke" 漢字="逐家" 是否合音={false}/>
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

          <hr/>

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
