import React, { Component, Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Header, Image, Icon } from 'semantic-ui-react'

class Nav extends Component {

  render() {
    return (
      <Fragment>

          <Menu className="pointing secondary">
            <Header as='h2'>
              <Image className="app-logo" src='https://previews.123rf.com/images/goliath/goliath0606/goliath060600082/445846-detailed-old-globe.jpg' />
              <Header.Content className="nav-bar-header">WanderList</Header.Content>
            </Header>
            <div style={{width: '30%'}} />


            <Menu.Item
              className="my-list-tab"
              as={NavLink}
              to="/destinations"
              name="My List"
            />

            <Menu.Item
              className="my-world-tab"
              as={NavLink}
              name='My World'
              to="/my_world"
            />
            <Menu.Item
              className="new-dest-tab"
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
