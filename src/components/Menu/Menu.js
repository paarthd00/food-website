import React, { useEffect, useState } from "react";
import Products from "../Products/Products"
import "./menu.css"
import MenuItem from './Menuitem'
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
        <div>
            {list}
            <Products />
        </div>
    )
}

export default Menu