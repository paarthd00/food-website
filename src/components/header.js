import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import logo from '../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import insta from '../images/insta.svg'
import { ToggleCartContext } from '../context/CartContext'
// import { Link } from "gatsby"
const Header = ({ siteTitle }) => {
  const [cartState, setCartState] = useContext(ToggleCartContext)
  const cart = <FontAwesomeIcon className="cartButton" onClick={toggleCart} style={{ margin: `auto` }} icon={faShoppingCart} />
  const instaimage = <a className="instaButton" href="https://www.instagram.com/lola.yvr/"><img style={{ margin: `auto` }} src={insta} alt="insta" width="20px" /></a>
  const contactButton =  <Link className="contactButton" to="/contact">contactus</Link>
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



  return (
    <header
      style={{
        background: `darkcyan`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `auto`,
          maxWidth: `650px`,
          padding: `1.45rem 1.0875rem`,
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          alignItems: `center`,
          textAlign: `center`,

        }}
      >
        <h1 style={{ margin: 0 }}>
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
        </h1>
        <div style={{ display: `grid`, justifyContent: `center`, cursor: `pointer` }}>
          {cart}
          {instaimage}
          {contactButton}
        </div>

      </div>
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
