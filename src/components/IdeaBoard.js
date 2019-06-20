import React, { useState } from 'react';
import _ from 'lodash';
import { IdeaCard as IdeaCardInput } from "./IdeaCard";
import { IdeaList } from './IdeaList';
import styled from 'styled-components';

const ideaInputId = _.uniqueId("idea-input-");

const IdeaBoardWrapper = styled.div`
  #container {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const IdeaBoard = () => {
  const [ideaList, setIdeaListValues] = useState([]);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');


  const onListTextChange = ({ id, ideaText }) => {
    setIdeaListValues(
      ideaList.map(item => {
        if (item.id === id) {
          return { ...item, text: ideaText }
        } else {
          return item;
        }
      })
    );
  }

  const onListTitleChange = ({ id, ideaTitle }) => {
    setIdeaListValues(
      ideaList.map(item => {
        if (item.id === id) {
          return { ...item, title: ideaTitle }
        } else {
          return item;
        }
      })
    );
  }

  const onEditIdea = ({ id }) => {
    setIdeaListValues(ideaList.filter(item => item.id !== id));
  }

  const onInputTitleChange = ({ id, ideaTitle }) => {
    setTitle(ideaTitle);
  }

  const onInputTextChange = ({ id, ideaText }) => {
    setText(ideaText);
  }

  const onAddIdea = () => {
    setIdeaListValues([...ideaList, { id: _.uniqueId("item-"), title, text }]);
    setText("");
    setTitle("");
  }


  return (
    <IdeaBoardWrapper>
      <div id="container">
        <IdeaCardInput
          key={ideaInputId}
          id={ideaInputId}
          buttonLabel="Add"
          text={text}
          title={title}
          onEdit={onAddIdea}
          onTitleChange={onInputTitleChange}
          onTextChange={onInputTextChange}
        />
        <IdeaList
          list={ideaList}
          onItemTitleChange={onListTitleChange}
          onItemTextChange={onListTextChange}
          onEdit={onEditIdea}
        />
      </div>
    </IdeaBoardWrapper>);
}
