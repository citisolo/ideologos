import React from 'react';
export const ListItemInput = () => (<div id="list-item-input" class="list-item">
  <div class="list-item-group">
    <label for="idea-title-input"></label>
    <input type="text" class="idea-title" name="idea-title-input" placeholder="Title" />
  </div>
  <div class="list-item-group">
    <textarea class="idea-text" rows="10" columns="4"> </textarea>
  </div>
  <div class="list-item-group add-button">
    <button id="add-idea">Add</button>
  </div>
</div>);
