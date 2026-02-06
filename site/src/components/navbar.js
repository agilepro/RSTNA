import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


const menuItems = [
  {
    title: 'About',
    path: '/goals',
    subItems: [
      { title: 'Purpose', path: '/goals' },
      { title: 'History', path: '/history' },
      { title: 'People', path: '/leadership' },
      { title: 'Contact', path: '/contact' },
      { title: 'DEI Statement', path: '/dei-statement' },
    ],
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Committees',
    path: '/goals',
    subItems: [
      { title: 'Communications', path: '/communications' },
      { title: 'Community Action', path: '/community-action' },
      { title: 'Community Building', path: '/beautification' },
      { title: 'Crime Watch', path: '/crime' },
      { title: 'Emergency', path: '/emergency' },
    ],
  },
  {
    title: 'Events',
    path: '/events',
  },
  {
    title: 'Photos',
    path: '/photos',
  },
]

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark navBarStyle">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">Rancho Santa Teresa Neighborhood Association</Link>
        <ul className="main-menu">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
              {item.subItems && (
                <ul className="submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.path}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
