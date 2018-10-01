import React, { Component, Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Nav extends Component {

  render() {
    return (
      <Fragment>
        <Menu className="ui secondary pointing menu">
          <Menu.Item
            as={NavLink}
            to="/destinations"
            name="My List"
          />
          <Menu.Item
            as={NavLink}
            name='My World'
            to="/my_world"
          />
          <Menu.Item
            // position='center'
            name='Add Destination'
            as={NavLink}
            to="/new_destination"
          />
        </Menu>
      </Fragment>
    )
  }
}

export default withRouter(Nav)
