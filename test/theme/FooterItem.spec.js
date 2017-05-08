import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { FooterItem } from '../../lib';

describe('FooterItem', ()=> {
  it('renders a site link', () => {
    const site = { url: 'sui2', title: 'sui2' };
    const wrapper = shallow(
      <FooterItem {...site} />
    );
    expect(FooterItem)
    .to.not.be.null;
  });
});
