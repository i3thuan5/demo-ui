import React from 'react';
import { render } from 'react-dom';
import { Layout, Footer, MainSection, HanLoSu } from '../lib';

const sites = [{
      title: '意傳文化科技',
      url: 'https://xn--v0qr21b.xn--kpry57d/',
    },];

render(
  <Layout>
    
    <MainSection>
      <p>HelloWorld</p>
      <p>臺羅詞<HanLoSu 臺羅閏號調="11" 漢字詞="22"/></p>
    </MainSection>
    
    <Footer sites={sites}/>
  </Layout>,
  document.getElementById('app')
);
