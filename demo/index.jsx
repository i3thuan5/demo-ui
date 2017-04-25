import React from 'react';
import { render } from 'react-dom';
import { Layout, Footer, MainSection } from '../lib';

const sites = [{
      title: '意傳文化科技',
      url: 'https://xn--v0qr21b.xn--kpry57d/',
    },];

render(
  <Layout>
    <MainSection>sui2</MainSection>
    <Footer sites={sites}/>
  </Layout>,
  document.getElementById('app')
);
