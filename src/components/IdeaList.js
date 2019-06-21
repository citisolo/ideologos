import React from 'react';
import PropTypes from 'prop-types';
import { IdeaCard } from "./IdeaCard";

export const IdeaList = ({
  list,
  onItemTextChange,
  onItemTitleChange,
  onEdit }) => {

  let listItems = [];

  if (list != null) {
    listItems = list.map((item, index) => (
      <IdeaCard
        id={item.id}
        key={item.id}
        title={item.title}
        text={item.text}
        timestamp={item.timestamp}
        isEditable={false}
        buttonLabel="Delete"
        onTitleChange={onItemTitleChange}
        onTextChange={onItemTextChange}
        onEdit={onEdit} />));
  }

  return (<React.Fragment>
    {listItems}
  </React.Fragment>);
};

IdeaList.propTypes = {
  list: PropTypes.array.isRequired,
  onItemTextChange: PropTypes.func.isRequired,
  onItemTitleChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

IdeaList.defaultProps = {
  list: [], //fallback
}
