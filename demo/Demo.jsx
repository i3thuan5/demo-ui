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

          <h2>demo-ui</h2>

          <section>
            <h3>HanLoSu</h3>
            <p>我很 <HanLoSu 臺羅閏號調="sui2" 漢字詞="媠"/></p>
          </section>

          <section>
            <h3>icon-font</h3>
            <ul>
              <li><i className="icon-play"/> icon-play</li>
              <li><i className="icon-docs"/> icon-docs</li>
            </ul>
          </section>

        </MainSection>
        <Footer sites={sites}/>
      </Layout>
    );
  }
}

export default Demo;
