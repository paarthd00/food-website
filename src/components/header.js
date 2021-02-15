import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import logo from '../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import insta from '../images/insta.svg'
import { ToggleCartContext } from '../context/CartContext'

const Header = ({ siteTitle }) => {
  const [cartState, setCartState] = useContext(ToggleCartContext)

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

  const cart = <FontAwesomeIcon onClick={toggleCart} style={{ margin: `auto` }} icon={faShoppingCart} />

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
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img src={logo} alt={siteTitle} width="200px"></img>
          </Link>
        </h1>
        <div style={{ display: `flex`, justifyContent: `center`, cursor: `pointer` }}>
          {cart}
          <a href="https://www.instagram.com/lola.yvr/"> <img style={{ margin: `auto` }} src={insta} alt="insta" width="20px">
          </img></a>
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
