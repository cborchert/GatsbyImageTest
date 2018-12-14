import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

import Header from './header'
import './layout.css'

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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <div>
            Contents
            <ul>
              <li>
                <Link to="/">200 Images, 200 Individual Components</Link>
              </li>
              <li>
                <Link to="/page-2">
                  200 Images, 200 Instances of the Reusable Component
                </Link>
              </li>
              <li>
                <Link to="/page-3">1 Image, 1 Individual Component</Link>
              </li>
              <li>
                <Link to="/page-4">
                  1 Image, 1 Instance of the Reusable Component
                </Link>
              </li>
              <li>
                <Link to="/page-5">
                  200 Images, loaded the old fashioned way
                </Link>
              </li>
              <li>
                <Link to="/page-6">1 Image, loaded the old fashioned way</Link>
              </li>
            </ul>
          </div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
