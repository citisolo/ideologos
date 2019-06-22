import React from 'react';
import { shallow, mount } from 'enzyme';
import uniqid from 'uniqid';
import { IdeaList } from './IdeaList';
import { IdeaCard } from './IdeaCard';

describe('IdeaList tests', () => {
  it('renders without crashing', () => {
    shallow(
      <IdeaList
        onItemTitleChange={() => { }}
        onItemTextChange={() => { }}
        onEdit={() => { }}
      />,
    );
  });

  it('handles empty lists', () => {
    shallow(
      <IdeaList
        list={[]}
        onItemTitleChange={() => { }}
        onItemTextChange={() => { }}
        onEdit={() => { }}
      />,
    );
  });

  it('renders all items', () => {
    const list = [...Array(5)].map(() => ({
      id: '', key: uniqid('id-'), title: '', text: '', timestamp: new Date(),
    }));
    const wrapper = mount(
      <IdeaList
        list={list}
        onItemTitleChange={() => { }}
        onItemTextChange={() => { }}
        onEdit={() => { }}
      />,
    );

    expect(wrapper.find(IdeaCard).length).toBe(5);
  });
});
