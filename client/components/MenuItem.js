import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { setMenu } from '../store';

const MenuItem = ({
  value, display, navbar, changeActiveMenuItem,
}) => (
  <Menu.Item
    name={value}
    active={navbar === value}
    onClick={() => changeActiveMenuItem(value)}
  >
    {display}
  </Menu.Item>
);

const mapState = ({ navbar }) => ({ navbar });
const mapDispatch = dispatch => ({
  changeActiveMenuItem: (item) => {
    dispatch(setMenu(item));
  },
});

export default connect(mapState, mapDispatch)(MenuItem);
