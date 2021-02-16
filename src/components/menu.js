import React, { useEffect, useState } from "react";
import Products from "../components/Products/Products"
import "./menu.css"
import MenuItem from '../components/menuitem'
// import axios from 'axios'


const Menu = () => {

    const [menuitems, setMenuItems] = useState([])


    useEffect(() => {

        async function fetchdata() {
            await fetch('/.netlify/functions/displayMenuItems')
                .then(response => response.json())
                .then(json => setMenuItems(json))
                .catch(err => console.log(err))
        }
        if(!menuitems.length)
        fetchdata()
        console.log(menuitems)
    }, [menuitems])


    const list = (menuitems) ? menuitems.map((el,i) => {
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