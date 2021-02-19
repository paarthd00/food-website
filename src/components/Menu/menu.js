/**
 * src/components/Menu/menu.js
 * loads up menu component by adding data from mongoDB to MenuItem component
 * @author paarth dhammi
 */

import React, { useEffect, useState } from "react";
import Products from "../Products/products"
import "./menu.css"
import MenuItem from './menu-item'
import API from '../../utils/api';
const Menu = () => {

    const [menuitems, setMenuItems] = useState([])

    useEffect(() => {
        if (!menuitems.length)
            API.readAll()
                .then(json => setMenuItems(json))
                .catch(err => console.log(err))

    }, [menuitems])

    const list = (menuitems) ? menuitems.map((el, i) => {
        return (
            <MenuItem key={i} myitem={el} />
        )
    }) : <></>

    return (
        <div style={{maxWidth: `300px`,margin:`auto`,width:`300px`}}>
            {list}
            <Products />
        </div>
    )
}

export default Menu