import React from 'react';
import { render } from 'react-dom';
import { Layout, Footer, MainSection, HanLoSu } from '../lib';

const sites = [{
      title: '意傳文化科技',
      url: 'https://xn--v0qr21b.xn--kpry57d/',
    },];

class Demo extends React.Component {
  render() {
    return (
      <Layout>
        <MainSection>
          <p>HelloWorld</p>
          <p>我很<HanLoSu 臺羅閏號調="sui2" 漢字詞="媠"/></p>
        </MainSection>
        <Footer sites={sites}/>
      </Layout>
    );
  }
}

export default Demo;
