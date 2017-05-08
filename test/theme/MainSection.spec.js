import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { MainSection } from '../../lib';

describe('MainSection', ()=> {
  it('renders main block', () => {
    const wrapper = shallow(
      <MainSection />
    );
    expect(wrapper.find('.app.main.block'))
    .to.have.length(1);
  });
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <MainSection>
        <span className="unique"/>
      </MainSection>
    );
    expect(wrapper.contains(<span className="unique"/>))
    .to.be.true;
  });
});
