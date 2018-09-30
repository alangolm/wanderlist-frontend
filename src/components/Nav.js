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

// import React, { Component } from 'react'
// import { Menu } from 'semantic-ui-react'
//
// export default class MenuExampleSecondaryPointing extends Component {
//   state = { activeItem: 'home' }
//
//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
//
//   render() {
//     const { activeItem } = this.state
//
//     return (
//       <div>
//         <Menu pointing secondary>
//           <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
//           <Menu.Item
//             name='messages'
//             active={activeItem === 'messages'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Item
//             name='friends'
//             active={activeItem === 'friends'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Menu position='right'>
//             <Menu.Item
//               name='logout'
//               active={activeItem === 'logout'}
//               onClick={this.handleItemClick}
//             />
//           </Menu.Menu>
//         </Menu>
//       </div>
//     )
//   }
// }

export default withRouter(Nav)
