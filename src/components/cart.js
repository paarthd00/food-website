/**
 * src/components/cart.js
 * component for side bar cart section and displays all the items added to cart
 * @author paarth dhammi
 */

import Checkout from "../components/checkout"
import React, { useContext } from 'react'
import { CartListContext } from "../context/cart-context";
const _ = require('lodash');

const Cart = () => {
    const [cartList, setCartList] = useContext(CartListContext)
    const cartArray = Object.keys(cartList).map(key =>
        cartList[key]
    )


    if (cartList && typeof (cartList)[0] === 'undefined' && cartList.length > 0)
        setCartList([])

    return (
        <div>
            <h3>Cart</h3>
            {cartArray.map((element, i) => {
                if (element && element.name && element.price && element.cartquantity) {
                    return (
                        <div style={{ listStyle: `none`, display: `grid`, gridTemplateColumns: `1fr 1fr 1fr` }} key={i}>

                            <li>{element.name}</li>
                            {/* <li>{element.price}</li> */}
                            <li>{element.cartquantity}</li>
                            <button style={{ color: `red` }} type="button" onClick={() =>
                                setCartList(_.pullAt(cartList, [--i]))}>X</button>
                        </div>
                    )
                }
                return <div key={i + 100}></div>
            }
            )}
            {/* {

                (cartArray.length && typeof (cartList[0]) === 'undefined')
                    ? (<p>Keep Shopping</p>)
                    : <></>
            } */}
            {
                (typeof (cartList[0]) !== 'undefined' && cartArray.length >= 1)
                    ? (<Checkout />)
                    : (<p>Empty Cart, add items to the cart :)</p>)
            }


            {/* {
                (cartArray.length)
                    ? (typeof (cartList[0]) !== 'undefined') && <Checkout />
                    : 
            } */}


        </div>
    )
}

export default Cart