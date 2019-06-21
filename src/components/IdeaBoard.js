import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { IdeaCard as IdeaCardInput } from "./IdeaCard";
import { IdeaList } from './IdeaList';
import { NavBar } from './NavBar';
import styled from 'styled-components';



const ideaInputId = uniqid("idea-input-");

const IdeaBoardWrapper = styled.div`
  #container {
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 500px) {
    #container {
      margin: auto;
      display: column;
    }
  } 
`;

export const IdeaBoard = ({ list }) => {
  const [ideaList, setIdeaListValues] = useState(list);
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');


  const onListTextChange = ({ id, ideaText }) => {
    setIdeaListValues(
      ideaList.map(item => {
        if (item.id === id) {
          return { ...item, text: ideaText, timestamp: new Date() }
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
          return { ...item, title: ideaTitle, timestamp: new Date() }
        } else {
          return item;
        }
      })
    );
  }

  const onEditIdea = ({ id }) => {
    const newList = ideaList.filter(item => item.id !== id);
    setIdeaListValues(newList);
    localStorage.setItem("idea-list", JSON.stringify(newList))
  }

  const onInputTitleChange = ({ ideaTitle }) => {
    setTitle(ideaTitle);
  }

  const onInputTextChange = ({ ideaText }) => {
    setText(ideaText);
  }

  const onAddIdea = () => {
    const timestamp = new Date();
    const newList = [...ideaList, { id: uniqid("item-"), timestamp, title, text }];
    setIdeaListValues(newList);
    setText("");
    setTitle("");
    localStorage.setItem("idea-list", JSON.stringify(newList)); //FIXME: do this properly
  }

  const sortByDate = () => {
    const sortedList = ideaList.sort((a, b) => {
      return new Date(b.timestamp) - new Date(a.timestamp);
    });
    //console.log(sortedList);
    setIdeaListValues([...sortedList]);
  }

  const sortByTitle = () => {
    //console.log("howdy")
    const sortedList = ideaList.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    //console.log(sortedList);
    setIdeaListValues([...sortedList]);
  }


  return (
    <IdeaBoardWrapper>
      <NavBar handleSortByDate={sortByDate} handleSortByTitle={sortByTitle} />
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


IdeaBoard.propTypes = {
  list: PropTypes.array,
}

IdeaBoard.defaultProps = {
  list: [],
}