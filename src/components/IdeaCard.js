import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const IdeaCard = ({
  id,
  title,
  text,
  isTitleEditable,
  isTextEditable,
  buttonLabel,
  onEdit,
  onTextChange,
  onTitleChange }) => (
    <div className="list-item" >
      <div className="list-item-group">
        <label htmlFor="idea-title-input"></label>
        <input type="text" className="idea-title" name="idea-title-input" placeholder="Title" value={title} onChange={(e) => onTitleChange({ id, ideaTitle: e.target.value })} />
      </div>
      <div className="list-item-group">
        <textarea className="idea-text" rows="10" columns="4" value={text} onChange={(e) => onTextChange({ id, ideaText: e.target.value })}></textarea>
      </div>
      <div className="list-item-group add-button">
        <button id="add-idea" onClick={() => onEdit({ id })}>{buttonLabel}</button>
      </div>
    </div>);


IdeaCard.propTypes = {
  id: PropTypes.any.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
  isTitleEditable: PropTypes.bool,
  isTextEditable: PropTypes.bool,
  buttonLabel: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired
};

IdeaCard.defaultProps = {
  title: "",
  text: "",
  isTitleEditable: false,
  isTextEditable: false,
}