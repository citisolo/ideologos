import React from 'react';
import { IdeaCard } from "./IdeaCard";

export const IdeaList = ({
  list,
  onItemTextChange,
  onItemTitleChange,
  onEdit }) => {
  const listItems = list.map((item, index) => (
    <IdeaCard
      id={item.id}
      key={item.id}
      title={item.title}
      text={item.text}
      isEditable={false}
      buttonLabel="Remove"
      onTitleChange={onItemTitleChange}
      onTextChange={onItemTextChange}
      onEdit={onEdit} />));
  return (<React.Fragment>
    {listItems}
  </React.Fragment>);
};
