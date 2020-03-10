import React from 'react';
import { shallow } from 'enzyme';
import Score from '../components/Score';

describe(('Scorer component'), () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Score />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have one heading', () => {
    expect(wrapper.find('h5').text()).toEqual('Score');
  });

  it('should have one Label', () => {
    expect(wrapper.find('label').length).toBe(1);
  });

});
