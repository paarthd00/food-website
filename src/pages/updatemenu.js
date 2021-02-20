import React from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"

import Menu from '../components/Menu/menu'

const UpdateMenu = () => {
    // const [cartState, setCartState] = useContext(ToggleCartContext)
    // const cart = <FontAwesomeIcon className="cartButton" onClick={toggleCart} style={{ cursor: `pointer`, width:`40px` }} icon={faShoppingCart} />


    return (
        <Layout>
            <SEO title="Updateadmin" />
            {/* <div className="fancyButtons" style={{display:`flex`,justifyContent:`space-around`, width:`650px`,margin:`auto`}}>
                <button className="btn btn-success">insert</button>
                <button className="btn btn-success">update</button>
                <button className="btn btn-success">delete</button>
            </div> */}
            {/* {cart} */}
            <Menu />


        </Layout>
    )
}

export default UpdateMenu
