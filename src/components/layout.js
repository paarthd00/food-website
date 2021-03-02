/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { CartListContext, ToggleCartContext, UserLoginContext } from "../context/cart-context";
import Header from "./header"
import "./layout.css"
import Cart from "../components/cart"
import insta from '../images/insta.svg'
import facebook from '../images/fb.svg'

const Layout = ({ children }) => {
  const [userState, setUserState] = useState(true)
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
    backgroundColor: `black`,
    zIndex: `100`,
    padding: `10px`,
    position: `fixed`,
    top: `120px`,
    overflowY: `scroll`,
    height: `80vh`,
    color: `white`,
    width: `200px`,
    animation: `fade .33s ease-in-out`,
    paddingRight: `17px`, /* Increase/decrease this value for cross-browser compatibility */
    boxSizing: `content-box`,
    // right: `-17px`
  }

  return (
    <>
      <UserLoginContext.Provider value={[userState, setUserState]}>
        <ToggleCartContext.Provider value={[cartState, setCartState]}>
          <CartListContext.Provider value={[cartList, setCartList]}>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

            <div
              style={{
                margin: `0 auto`,
                maxWidth: `960px`,
                padding: `0 1.0875rem 1.45rem`,
              }}
            >
              <div id="cartContainer" style={menuStyle}>
                <Cart />
              </div>
              <main style={{ fontFamily: `system-ui` }}>{children}</main>
              <footer
                style={{
                  marginTop: `2rem`,
                  textAlign: `center`,
                  width:`100%`,
                  margin:`0`,
                  padding:`10px 10px`,
                  cursor:`pointer`
                }}
              >
                © Lola Comfort Food, 2021 | 
              
              (778)-222-3470 | 
              <a style={{ marginLeft: `10px`, marginRight: `10px` }} className="instaButton" href="https://www.instagram.com/lola.yvr/"><img style={{ margin: `auto` }} src={insta} alt="insta" width="20px" /></a>
              <a style={{ marginLeft: `10px`, marginRight: `10px` }} className="facebookButton" href="https://www.facebook.com/lola.yvr/"><img style={{ margin: `auto` }} src={facebook} alt="facebook" width="20px" /></a>
              </footer>
            </div>
          </CartListContext.Provider>
        </ToggleCartContext.Provider>
      </UserLoginContext.Provider>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
