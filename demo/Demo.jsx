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
            <p>我很 <HanLoSu 臺羅閏號調="sui2" 漢字="媠"/></p>
          </section>

          <section>
            <h3>HanLoTsua</h3>
            <p><HanLoTsua 臺羅閏號調="li1 sui2" 漢字="你 媠" 是否合音={false}/></p>
            <p><HanLoTsua 臺羅閏號調="sui" 漢字="媠" 分詞="逐-家｜tak8-ke1"/></p>
          </section>

          <section>
            <h3>icon-font</h3>
            <ul>
              <li><i className="icon-play"/> icon-play</li>
              <li><i className="icon-docs"/> icon-docs</li>
            </ul>
          </section>

          <section>
            <h3>PlayButton</h3>
            <p>逐-家｜tak8-ke1<PlayButton 語句={"逐-家｜tak8-ke1"}/></p>
            <p>播放合成的句子。使用
              <a href='http://xn--v0qr21b.xn--kpry57d/'>意傳.台灣</a>
              的語音合成服務。只接收分詞後的語句，例：<br/>
              逐-家｜tak8-ke1 來-𨑨-迌｜lai5-tshit4-tho5 ！</p>
          </section>

          <section>
            <h3>CopyButton</h3>
            <p>按我複製<CopyButton 複製內容={"Hello copied!"}/></p>
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
              <CopyButton 複製內容={"1"} 按鈕名={"copy"}/>
              <CopyButton 複製內容={"1"} 按鈕名={"copy"}/>
              <CopyButton 複製內容={"1"} 按鈕名={"copy"}/>
            </ButtonStack>
          </section>

        </MainSection>
        <Footer sites={sites}/>
      </Layout>
    );
  }
}

export default Demo;
