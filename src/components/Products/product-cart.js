/**
 * src/components/product/product.js
 * component for item in the stripe product
 */


import React, { useContext, useState, useEffect } from "react"
import { CartListContext } from "../../context/cart-context"
import Select from 'react-select';

const _ = require('lodash');
const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "inherit",
  flexWrap: "wrap",
  padding: "1rem",
  boxShadow: "2px 2px 10px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  width: "-webkit-fill-available",
  margin: "auto",
  maxWidth: "300px",
  float: "left",
  marginBottom: "2rem",
}
const buttonStyles = {
  display: "block",
  fontSize: "13px",
  textAlign: "center",
  color: "white",
  padding: "12px",
  backgroundColor: "black",
  borderRadius: "6px",
  letterSpacing: "1.5px",
  cursor: "pointer",
  margin: "auto"
}

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const ProductCard = ({ product }) => {
  const [cartitemid, setCartItemID] = useState()
  const [cartquantity, setQuantity] = useState()
  const [cartitemname, setName] = useState()
  const [contain, setContain] = useState(false)
  const [CartList, setCartList] = useContext(CartListContext)
  const options = [
    { value: 1, label: 'one' },
    { value: 2, label: 'two' },
    { value: 3, label: 'three' },
    { value: 4, label: 'four' },
    { value: 5, label: 'five' }
  ];

  useEffect(() => {
    setCartItemID(product.prices.map(price => (
      price.id
    )))
    setName(product.name)
  }, [product]);

  // check if there are multiple items  with same name 
  //@return boolean based upon if contains multiples or not

  const checkContainFoodQuantity = () => {
    if (CartList.length) {
      _.forEach(CartList, (el) => {
        if (el && CartList && el.name === cartitemname) {
          setContain(true)
          el.cartquantity += cartquantity
        }
        else {
          setContain(false)
        }
      })
    }

    return (contain) ? true : false
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (cartquantity > 0) {
      checkContainFoodQuantity()
      //if doen't contain then adds the new cartdata to the cart else adds to the quantity
      if (!contain)
        setCartList(_.uniqBy([...CartList, { price: cartitemid, name: cartitemname, cartquantity: cartquantity }], 'name'));

      window.alert('Items added to cart')
      setContain(false)
    }

  }

  return (
    <div style={cardStyles}>
      <form onSubmit={handleSubmit}>
        <fieldset style={{ border: "none" }}>
          <legend>
            <h4>{product.name}</h4>
            <p style={{ margin: `auto`, textAlign: `center` }}>{product.description}</p>
          </legend>
          <label className="form-label">
            Price{" "}
            <select name="priceSelect">
              {product.prices.map(price => (
                <option key={price.id} value={price.id}>
                  {formatPrice(price.unit_amount, price.currency)}
                </option>
              ))}
            </select>
          </label>
          <br></br>
          <label className="form-label" style={{ width: `150px` }}>
            Quantity{" "}
            <Select className="form-select" options={options} onChange={(e) => setQuantity(e.value)} />
          </label>
        </fieldset>
        <input type="submit" value="Add to Cart" className="btn btn-dark" style={buttonStyles} />
      </form>
    </div>
  )
}

export default ProductCard