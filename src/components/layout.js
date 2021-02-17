/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { CartListContext, ToggleCartContext } from "../context/CartContext";
import Header from "./header"
import "./layout.css"
import Cart from "../components/cart"
import insta from '../images/insta.svg'

const Layout = ({ children }) => {
  // const instaimage = 
  const [cartList, setCartList] = useState([])
  const [cartState, setCartState] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const menuStyle = {
    display: `none`,
    float: `right`,
    backgroundColor: `#669DB3FF`,
    zIndex: `100`,
    padding: `10px`,
    position: `absolute`,
    top: `95px`,
    overflow: `scroll`,
    height: `500px`,
    color: `#F0F6F7FF`,
    width: `200px`,
    animation: `fade .66s ease-in-out`
  }

  return (
    <>
      <ToggleCartContext.Provider value={[cartState, setCartState]}>
        <CartListContext.Provider value={[cartList, setCartList]}>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <div id="cartContainer" style={menuStyle}>
            <Cart />
          </div>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
            }}
          >
            <main style={{ fontFamily: `system-ui` }}>{children}</main>
            <footer
              style={{
                marginTop: `2rem`,
              }}
            >
              © Lola Comfort Food, 2021
              <a style={{ marginLeft: `30px` }} className="instaButton" href="https://www.instagram.com/lola.yvr/"><img style={{ margin: `auto` }} src={insta} alt="insta" width="20px" /></a>

            </footer>
          </div>
        </CartListContext.Provider>
      </ToggleCartContext.Provider>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
