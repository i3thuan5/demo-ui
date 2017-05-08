import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Footer, FooterItem } from '../lib';

describe('Footer', ()=> {
  it('renders .app.footer.inverted', () => {
    expect(shallow(<Footer />).find('.app.footer.inverted'))
    .to.have.length(1);
  });

  it('renders FooterItems when passed in', () => {
    const wrapper = shallow(
      <Footer sites={[{ url: 'sui2', title: 'sui2' }]} />
    );
    expect(wrapper.find(FooterItem))
    .to.have.length(1);
  });
});
