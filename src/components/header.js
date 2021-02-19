/**
 * src/components/header.js
 * loads up menu component by adding data from mongoDB to MenuItem component
 * @author paarth dhammi
 */

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext, useState } from "react"
import logo from '../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { ToggleCartContext } from '../context/cart-context'
import menuHamburger from '../images/Menuclose.svg'
import menuCross from '../images/Menuopen.svg'
import "./layout.css"

const Header = ({ siteTitle }) => {
  const [cartState, setCartState] = useContext(ToggleCartContext)
  const [menuState, setmenuState] = useState(false)
  const cart = <FontAwesomeIcon className="cartButton" onClick={toggleCart} style={{ cursor: `pointer`, width: `20px`, fontSize: `20px` }} icon={faShoppingCart} />

  function toggleCart() {
    if (cartState) {
      document.getElementById('cartContainer').style.display = "block";
      setCartState(false)
    }
    else {
      document.getElementById('cartContainer').style.display = "none";
      setCartState(true)
    }
  }



  const menuButton = (!menuState) ? <button width="100px" onClick={() => setmenuState(!menuState)} className="btn menuButton">
    <img src={menuHamburger} width="20px" alt="hamburgermenu"></img>
  </button> : <></>



  return (
    <header
      style={{
        background: `whitesmoke`,
        marginBottom: `1.45rem`,
        display: `grid`,
        gridTemplateRows: `1fr `,
        zIndex: `100`
      }}
    >
      <div
        style={{
          margin: `auto`,
          maxWidth: `960px`,
          padding: `20px 15px`,
          display: `flex`,
          alignItems: `center`,
          textAlign: `center`,
          justifyContent: `space-between`,
          width: `100%`
        }}
      >
        {menuButton}
        <Link
          className="Logo"
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt={siteTitle} width="200px"></img>
        </Link>
        {cart}
      </div>
      {
        (menuState) ? <div className="navContainer" style={{ animation: `menuAnimation .6s ease-in`, width: `100%`, background: `#1d1B1B`, color: `whitesmoke`, margin: `auto`, padding: `20px`, maxWidth: `960px` }}>
          <button style={{ marginLeft: `90%` }} width="100px" onClick={() => setmenuState(!menuState)} className="btn menuButton">
            <img src={menuCross} width="20px" alt="hamburgermenu"></img>
          </button>
          <div style={{ display: `flex`, animation: `menuAnimation .6s ease-in-out`, flexDirection: `column` }}>

            <Link style={{ color: `green` }} to="/menupage">Menu</Link>


            <Link style={{ color: `green` }} to="/about">About</Link>


            <Link style={{ color: `green` }} to="/contact">Contact</Link>


            {/* instagram fb */}

          </div>

        </div> : <></>

      }
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}


Header.defaultProps = {
  siteTitle: ``,
}

export default Header
