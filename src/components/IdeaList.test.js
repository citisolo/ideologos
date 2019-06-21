import React from 'react';
import { shallow, mount } from 'enzyme';
import { IdeaList } from './IdeaList';
import { IdeaCard } from './IdeaCard';
import _ from 'lodash';

describe('IdeaList tests', () => {
  it('renders without crashing', () => {
    shallow(<IdeaList />);
  });

  it('handles empty lists', () => {
    shallow(<IdeaList list={[]} />);
  });

  it('renders all items', () => {
    const list = [...Array(5).keys()].map(item => ({ id: "", key: _.uniqueId(), title: "", text: "", timestamp: new Date() }));
    const wrapper = mount(<IdeaList list={list} />);

    expect(wrapper.find(IdeaCard).length).toBe(5);

  });

});