import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
  <div className="ui vertical center aligned segment">
    <div className="ui container">
      <div className="ui secondary pointing menu">
        <a className="item">
          <h1 style={{fontFamily: 'Open Sans, sans-serif', color: '#404040', fontSize: '2em'}}>
            <Link to="/">
              <strong>Hudub</strong>
            </Link>
            </h1>
        </a>
        <div className="right item">
          <Link to="/contact/">Contact</Link>
        </div>
      </div>
    </div>
  </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
