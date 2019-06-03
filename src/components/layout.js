/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "../../node_modules/semantic-ui-less/semantic.less";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <div className="ui middle aligned stackable grid container">
        <div className="row">
          <div className="site">
            <Header siteTitle={data.site.siteMetadata.title} />
              <div className="site-content">{children}</div>
              <Footer />
            </div>
        </div>
      </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
