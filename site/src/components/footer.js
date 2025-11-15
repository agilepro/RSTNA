import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import DonateButton from "../components/donateButton"

const Footer = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark navBarStyle">
      <div className="container-fluid">
        <Link to="/" className="footer-message" href="#">Rancho Santa Teresa Neighborhood Association</Link>
      </div>
    </nav>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
