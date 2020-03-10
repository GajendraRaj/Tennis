import React from 'react';
import { shallow, mount } from 'enzyme';
import TennisGame from "../components/TennisGame";
import Player from "../components/Player";
import Score from '../components/Score';

describe(('TennisGame component'), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TennisGame />);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have two players", () => {
    expect(wrapper.find(Player).length).toBe(2);
  });

  it('should have one score', () => {
    expect(wrapper.find(Score).length).toBe(1);
  });
});

describe(('TennisGame game functionality'), () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<TennisGame />);
    });
  
    it('On Game Start, Score Should be Love All', () => {
        const score = wrapper.find('Score');     
        expect(score.find('label').text()).toEqual('Love all');
    });
});
