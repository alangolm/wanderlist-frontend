import React, { Component, Fragment } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Header, Image, Icon } from 'semantic-ui-react'

class Nav extends Component {

  // divStyle = {
  //   padding: '1em'
  // }

  render() {
    return (
      <Fragment>

          <Menu className="pointing secondary">
            <Header as='h2'>
              <Image className="app-logo" src='https://previews.123rf.com/images/goliath/goliath0606/goliath060600082/445846-detailed-old-globe.jpg' />
              {/* <Icon name='world' /> */}
              <Header.Content className="nav-bar-header">WanderList</Header.Content>
            </Header>
            {/* <div style={this.divStyle}> */}
            <div style={{width: '23%'}} />


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
          {/* </div> */}
          </Menu>
      </Fragment>
    )
  }
}

export default withRouter(Nav)
