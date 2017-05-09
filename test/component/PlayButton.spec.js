import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import sinon from 'sinon';
import { PlayButton } from "../../lib";

const shallowSetup = (語句 = "逐家") => {
  return shallow(
    <PlayButton 語句={語句}/>
  );
};

const mountSetup = (語句 = "逐家") => {
  return mount(
    <PlayButton 語句={語句}/>
  );
};

describe("Component", () => {
  describe("PlayButton", () => {
    it("renders audio", () => {
      const wrapper = shallowSetup();
      expect(wrapper.find("audio")).to.have.length(1);
    });
    it("renders button", () => {
      const wrapper = shallowSetup();
      expect(wrapper.find("button")).to.have.length(1);
    });
    // it("updates audio ref", () => {
    //   const wrapper = mount(<PlayButton 語句={"逐家"}/>);
    //   // const wrapper = mountSetup();
    //   // wrapper.setProps({ 語句: '語句' });
    //   // expect(componentWillReceiveProps.calledOnce).to.equal(true);
    // });

    // it("ignores same src", () => {
    //   const { wrapper } = mountSetup();
    //   wrapper.setProps({ 語句: '逐家' });
    //   expect(componentWillReceiveProps.calledOnce)
    //   .to.equal(false);
    // });
    // it("call play on click", () => {
    //   const { button } = setup();
    //   expect(audio).to.have.length(1);
    // });
  });
});