import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import IdeaBoard from './IdeaBoard';

describe('IdeaBoard tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('adds an item to the board', () => {
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


  it('removes an item from the list', () => {
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
);