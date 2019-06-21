import React from 'react';
import { shallow, mount } from 'enzyme';
import { IdeaBoard } from './IdeaBoard';
import { IdeaCard } from './IdeaCard';

describe('IdeaBoard tests', () => {
  it('renders without crashing', () => {
    shallow(<IdeaBoard />);
  });

  it('adds an item to the board', () => {
    const wrapper = mount(<IdeaBoard />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find(IdeaCard).exists()).toBe(true);
  });
});
