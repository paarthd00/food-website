import React , {useState} from 'react'
import axios from 'axios'

const updateMenu = () => {
    
    function InsertNewItem () {
        axios.post('/.netlify/functions/addMenuItem',{

        })
    }
    return (
        <div>
            <form action="InsertNewItem()">

            </form>
        </div>
    )
}

export default updateMenu