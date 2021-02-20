/**
 * src/components/Menu/menu.js
 * 
 * @author paarth dhammi
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types';
import API from '../../utils/api'

const MenuItem = (myitem) => {
    const [errorMessage, setErrors] = useState('')
    const [updateValid, setUpdateValid] = useState(false)
    const [menuItemName, setMenuItemName] = useState(myitem.myitem.name)
    const [menuItemDescription, setMenuDescription] = useState(myitem.myitem.description)
    const [menuItemPrice, setMenuPrice] = useState(myitem.myitem.price)
    console.log(myitem)
    const deleteMenuItem = async () => {
        await API.delete(myitem.myitem);
        window.location.reload();
    }
    const updateMenuItem = async () => {
        await API.update(myitem.myitem._id, { name: menuItemName, description: menuItemDescription, price: menuItemPrice });
        window.location.reload();
    }
    const itemNameHandler = (e) => {
        e.preventDefault();
        let val = e.target.value;
        let err = ''
        if (e.target.name === "itemName" && val === '')
            err = <strong style={{ color: `red` }}>Please enter a valid name</strong>

        setErrors(err)
        setMenuItemName(val)
    }
    const itemDescriptionHandler = (e) => {
        e.preventDefault();
        let val = e.target.value;
        let err = ''
        if (e.target.name === "itemDescription" && val === '')
            err = <strong style={{ color: `red` }}>Please enter a valid description</strong>

        setErrors(err)
        setMenuDescription(val)
    }
    const itemPriceHandler = (e) => {
        e.preventDefault();
        let val = e.target.value;
        let err = ''
        if (e.target.name === "itemPrice" && val <= 0)
            err = <strong style={{ color: `red` }}>Please enter a valid price</strong>

        setErrors(err)
        setMenuPrice(val)
    }
    return (
        <div key={myitem.myitem._id} style={{ marginBottom: `50px`, textAlign: `center`, alignItems: `center` }}>
            {(!updateValid) ? <div style={{ display: `grid`, gridTemplateColumns: `1fr 1fr 1fr`, textAlign: `center`, alignItems: `center` }}>
                {/* {myitem.myitem.image && <img src={myitem.myitem.image} alt={myitem.myitem.name} style={{ width: `100px`, borderRadius: `50%` }}></img>} */}
                <h5>{myitem.myitem.name}</h5>
                <p>$ {myitem.myitem.price}</p>
                <button style={{ width: `50px` }} onClick={deleteMenuItem} className="btn btn-danger">X</button>
                <p>{myitem.myitem.description}</p>
                <button style={{}} onClick={() => setUpdateValid(!updateValid)} className="btn btn-success">update</button>
            </div> :
                <div>
                    <input placeholder="name" value={menuItemName} onChange={itemNameHandler}>

                    </input>
                    <input placeholder="description" value={menuItemDescription} onChange={itemDescriptionHandler}>

                    </input>
                    <input placeholder="price" value={menuItemPrice} onChange={itemPriceHandler}>

                    </input>
                    {
                        errorMessage !== '' &&
                        errorMessage
                    }
                    {
                        errorMessage === '' &&
                        <button onClick={updateMenuItem}>updatethisitem</button>
                    }

                </div>
            }

        </div>
    )
}

MenuItem.propTypes = {
    myitem: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number
    }).isRequired
}

export default MenuItem