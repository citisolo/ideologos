import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';


export const NavBar = ({ handleSortByDate, handleSortByTitle }) => {
  const [activeItem, setActiveItem] = useState('sortbyDate');

  return (
    <Menu>
      <Menu.Item
        name="sortbyDate"
        active={activeItem === 'sortbyDate'}
        onClick={(_e, { name }) => {
          handleSortByDate();
          setActiveItem(name);
        }}
      />
      <Menu.Item
        name="ABC"
        active={activeItem === 'ABC'}
        onClick={(_e, { name }) => {
          handleSortByTitle();
          setActiveItem(name);
        }}
      />
    </Menu>
  );
};

NavBar.propTypes = {
  handleSortByDate: PropTypes.func.isRequired,
  handleSortByTitle: PropTypes.func.isRequired,
};
