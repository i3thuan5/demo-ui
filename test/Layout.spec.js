import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Layout } from '../lib';

describe('Layout', ()=> {
  it('renders .app.background', () => {
    expect(shallow(<Layout />).find('.background'))
    .to.have.length(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Layout>
        <div className="unique" />
      </Layout>
    );
    expect(wrapper.contains(<div className="unique" />))
    .to.equal(true);
  });
});
