// import { element } from 'prop-types';
import Checkout from "../components/checkout"
import React, { useContext } from 'react'
import { CartListContext } from "../context/CartContext";
const _ = require('lodash');

const Cart = () => {
    const [cartList, setCartList] = useContext(CartListContext)
    // const [currentitemname, setState] = useState('')
    const cartArray = Object.keys(cartList).map(key =>
        cartList[key]
    )
    console.log(cartArray)
    return (
        <div>
            <h3>Cart</h3>
            {cartArray.map((element, i) => {
                if (element && element.name && element.price && element.cartquantity) {
                    return (
                        <div key={i}>
                            <button style={{ color: `red` }} type="button" onClick={() =>
                                setCartList(_.pullAt(cartList, [--i]))}>X</button>
                            <li>{element.name}</li>
                            <li>{element.price}</li>
                            <li>{element.cartquantity}</li>

                        </div>
                    )
                }
                return <div key={i + 100}></div>
            }
            )}
            {
                (cartArray.length && typeof (cartList[0]) === 'undefined')
                    ? (<p>Keep Shopping</p>)
                    : (<p>Keep Shopping</p>)
            }

            {
                (cartArray.length)
                    ? (typeof (cartList[0]) !== 'undefined') && <Checkout />
                    : (<p>Empty Cart, add items to the cart :)</p>)
            }


        </div>
    )
}

export default Cart