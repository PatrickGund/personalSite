import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react'

class NavMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='aboutMe'
          active={activeItem === 'aboutMe'}
          onClick={this.handleItemClick}
        >
          About Me
        </Menu.Item>

        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        >
          My Projects
        </Menu.Item>
      </Menu>
    )
  }
}

const mapState = null;
const mapDispatch = null;

export default connect(mapState, mapDispatch)(NavMenu);