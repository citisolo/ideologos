import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';
//import styled from 'styled-components';


export const NavBar = ({ handleSortByDate, handleSortByTitle }) => {
  const [activeItem, setActiveItem] = useState('sortbyDate');

  return (<Menu>
    <Menu.Item
      name='sortbyDate'
      active={activeItem === 'sortbyDate'}
      onClick={(e, { name }) => {
        handleSortByDate();
        setActiveItem(name);
      }} />
    <Menu.Item
      name='ABC'
      active={activeItem === 'ABC'}
      onClick={(e, { name }) => {
        handleSortByTitle();
        setActiveItem(name);
      }} />
  </Menu>);
};

//TODO: Type Checking!