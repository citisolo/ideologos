import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';

import { useFocus } from '../customHooks.js';



const IdeaCardWrapper = styled.div`
  @media (max-width: 500px) {
    margin: auto;
  } 

  .list-item {
    background: white;
    padding: 1em;
    border-radius: 3px;
    margin: 1em;
    box-shadow: 0 8px 32px #aaa;
    width: 14em;
  }

  .list-item-group {
    margin: 1em;
    time {
      margin-left:1em;
    }
  }

  .list-item textarea {
    resize: none; 
 
  }

  .list-item input {
    font-weight: bold;
    text-transform: uppercase;
    /*font-size: 2em;*/
    /*width:100%;*/
  }

  .list-item-group  input, .list-item-group textarea {
    padding: .5rem;
    border-radius: .2rem;
    border: 1px solid rgba(34,36,38,.15);  
  }

  .readonly-list-item-group {
    margin: 1em;
    width:100%;
  }

  .readonly-list-item-group {
    input {
      padding: .5rem;
      border: none;
    }
    textarea  {
      padding: .5rem;
      border: none;
    }

   }

   .readonly-list-item-group :focus{
     outline: none;
   }


   button {
    padding: .7rem;
    border-radius: .3rem;
    border: 1px solid rgba(34,36,38,.15);
    /*box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)*/
  }
`;

export const IdeaCard = ({
  id,
  title,
  text,
  timestamp,
  isEditable,
  buttonLabel,
  onEdit,
  onTextChange,
  onTitleChange }) => {

  const [itemGroupClass, setItemGroupClass] = useState(isEditable ? 'list-item-group' : 'readonly-list-item-group');
  const [isReadOnly, setReadOnly] = useState(!isEditable);
  const [setFocus, focusProps] = useFocus(true);

  const onToggleReadOnly = () => {
    if (!isEditable) {
      // setItemGroupClass(itemGroupClass === "list-item-group" ? "readonly-list-item-group" : "list-item-group");
      // setReadOnly(!isReadOnly);
    }
  }


  return (
    <IdeaCardWrapper>
      <div className="list-item" onDoubleClick={onToggleReadOnly} >
        <div className={itemGroupClass}>
          <input  {...focusProps} type="text" className="idea-title-input" name="idea-title-input" value={title} onChange={(e) => onTitleChange({ id, ideaTitle: e.target.value })} />
        </div>
        <div className={itemGroupClass}>
          <textarea maxLength="140" className="idea-text" rows="10" value={text} onChange={(e) => onTextChange({ id, ideaText: e.target.value })}></textarea>
        </div>
        <div className="list-item-group">
          <button onClick={() => onEdit({ id })}>{buttonLabel}</button>
          {timestamp && <Moment format="ddd hh:mm:ss" >{timestamp}</Moment>}
        </div>
      </div>
    </IdeaCardWrapper>);
}


IdeaCard.propTypes = {
  id: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date),
  isEditable: PropTypes.bool,
  buttonLabel: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired
};

IdeaCard.defaultProps = {
  isEditable: true,
}