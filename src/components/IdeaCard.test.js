import React from 'react';
import { shallow } from 'enzyme';

import { IdeaCard } from './IdeaCard';


describe('IdeaCard tests', () => {


  it('renders without crashing', () => {
    shallow(<IdeaCard />);
  });

  it('renders timestamp', () => {
    const wrapper = shallow(<IdeaCard timestamp={new Date()} />);
    expect(wrapper.contains(<time></time>));
  });

});