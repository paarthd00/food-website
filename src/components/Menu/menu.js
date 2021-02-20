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
    const [valid, setValid] = useState(true)
    useEffect(() => {
        if (!menuitems.length && valid){
            API.readAll()
            .then((json) =>{ setMenuItems(json); (!menuitems.length) ? setValid(false): setValid(true)})
            .catch(err => console.log(err))
        }


    }, [menuitems,valid])

    const list = (menuitems) ? menuitems.map((el, i) => {
        return (
            <MenuItem key={i} myitem={el} />
        )
    }) : <></>

    return (
        <div className="menulayout" style={{ maxWidth: `300px`, margin: `auto`, width: `300px` }}>
        
            {list}
            <div>

                <Products />
            </div>

        </div>
    )
}

export default Menu