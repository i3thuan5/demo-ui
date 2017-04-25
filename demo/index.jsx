import React from 'react';
import { render } from 'react-dom';
import { Layout, Footer } from '../lib';

const sites = [{
      title: '意傳文化科技',
      url: 'https://xn--v0qr21b.xn--kpry57d/',
    }, ];

render(
  <Layout>
    <h1>Hello demo-ui</h1>
    <Footer sites={sites}/>
  </Layout>,
  document.getElementById('app')
);
