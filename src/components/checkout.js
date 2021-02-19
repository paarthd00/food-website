/**
 * src/components/Menu/menu.js
 * loads up menu component by adding data from mongoDB to MenuItem component
 * @author paarth dhammi
 */


import React, { useState, useContext } from "react"
import getStripe from "../utils/stripejs"
import { CartListContext } from "../context/cart-context";


const buttonStyles = {
    fontSize: "13px",
    textAlign: "center",
    color: "#000",
    padding: "12px 60px",
    boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
    backgroundColor: "rgb(255, 178, 56)",
    borderRadius: "6px",
    letterSpacing: "1.5px",
    cursor: "pointer"
}

const buttonDisabledStyles = {
    opacity: "0.5",
    cursor: "not-allowed",
}


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [cartList] = useContext(CartListContext)
    let temparr = []
    if (cartList) {
        cartList.map((e) => {
            if (e && e.price && e.cartquantity) {
                return temparr.push({ price: "" + e.price, quantity: e.cartquantity })
            }
            return false;
        })
    }

    const redirectToCheckout = async event => {
        event.preventDefault()
        setLoading(true)

        const stripe = await getStripe()
        const { error } = await stripe.redirectToCheckout({
            mode: "payment",
            lineItems: temparr,
            successUrl: `http://localhost:8000/page-2/`,
            cancelUrl: `http://localhost:8000/`,
        })

        if (error) {
            console.warn("Error:", error)
            setLoading(false)
        }
    }

    return (
        <button
            disabled={loading}
            style={
                loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
            }
            onClick={redirectToCheckout}
        >
            Proceed to Checkout
        </button>
    )
}

export default Checkout