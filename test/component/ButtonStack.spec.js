import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import { ButtonStack } from "../../lib";

const shallowSetup = (children) => 
  shallow(
    <ButtonStack>{children}</ButtonStack>
  )

const btnarr = (n=0) => {
  const result = [];
  for(let i=0;i<n;i++) {
    result.push(<button key={i}/>);
  }
  return result;
}

describe("Component", () => {
  describe("ButtonStack", () => {   
    it("gets classname `one` from numbers of children", () => {
      const wrapper = shallowSetup(btnarr(1));
      expect(wrapper.find(".one.buttons")).to.have.length(1);
    });
    it("gets classname `twelve` from numbers of children", () => {
      const wrapper = shallowSetup(btnarr(12));
      expect(wrapper.find(".twelve.buttons")).to.have.length(1);
    });
    it("gets classname `one` when no children", () => {
      const wrapper = shallowSetup([]);
      expect(wrapper.find(".one.buttons")).to.have.length(1);
    });
  });
});