import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import IdeaCard from './IdeaCard';

describe('IdeaCard tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('displays the right text', () => {
    const wrapper = shallow(
      <IdeaCard
        id={ideaInputId}
        buttonLabel="Add"
        text={text}
        title={title}
        onEdit={onAddIdea}
        onTitleChange={onInputTitleChange}
        onTextChange={onInputTextChange} />
    );

    expect(
      wrapper.contains("")
    )

  });

  it('remains read only', () => {
    const wrapper = shallow(
      <IdeaCard
        key={ideaInputId}
        id={ideaInputId}
        buttonLabel="Add"
        text={text}
        title={title}
        onEdit={onAddIdea}
        onTitleChange={onInputTitleChange}
        onTextChange={onInputTextChange} />
    );

    expect(
      wrapper.contains("")
    )

  });

});