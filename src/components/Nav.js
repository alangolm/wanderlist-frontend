import React, { Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Nav = ({ location: { pathname } }) => {
  return (
    <Menu className="ui secondary pointing menu">
      <Fragment>
        <Menu.Item as={NavLink} to="/destinations" name="My List" active={pathname === '/destinations'} />
        <Menu.Item as={NavLink} to="/my_world" name="My World" active={pathname === '/my_world'} />
        <Menu.Item as={NavLink} to="/new_destination" name="Add Destination" active={pathname === '/new_destination'} />
      </Fragment>
    </Menu>
  )
}

export default withRouter(Nav)
