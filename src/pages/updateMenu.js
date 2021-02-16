import React, { useState } from 'react'
import axios from 'axios'

const UpdateMenu = () => {
    const [errorMessage, setErrors] = useState('');
    // const [_ID, setMenuItem_ID] = useState('')
    const [itemName, setMenuItemName] = useState('')
    const [itemDescription, setMenuItemDescription] = useState('')
    const [itemPrice, setMenuItemPrice] = useState()

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
        setMenuItemDescription(val)
    }
    const itemPriceHandler = (e) => {
        e.preventDefault();
        let val = e.target.value;
        let err = ''
        if (e.target.name === "itemPrice" && val <= 0)
            err = <strong style={{ color: `red` }}>Please enter a valid price</strong>

        setErrors(err)
        setMenuItemPrice(val)
    }
    const insertNewItem = () => {
        axios.post('/.netlify/functions/addMenuItem', {
            // "_ID": _ID,
            "name": itemName,
            "description": itemDescription,
            "price": itemPrice
        }).then((response) => console.log(response.status)).catch((err) => console.error(err))
    }
    return (
        <div style={{ maxWidth: `600px`, margin: `auto`, padding: `10px 15px` }}>
            <h3>Insert New Item</h3>
            <p>Admin control, form below will add a new Item to the Menu</p>
            <form className="contact-form md-form" onSubmit={insertNewItem} style={{
                display: `grid`
            }}>
                <div className="form-group">
                    <input placeholder="Item name" className="form-control" type="text" name="itemName" value={itemName} onChange={itemNameHandler} />
                </div>
                <div className="form-group">
                    <textarea placeholder="Menu item description " className="md-textarea form-control" name="itemDescription" value={itemDescription} onChange={itemDescriptionHandler} />
                </div>
                <div className="form-group">
                    <input placeholder="price" className="form-control" type="number" name="itemPrice" value={itemPrice} onChange={itemPriceHandler} />
                </div>

                {
                    errorMessage !== '' &&
                    errorMessage
                }
                {
                    errorMessage === '' &&
                    <input type="submit" className="btn btn-dark" value="send" />
                }

            </form>
        </div>
    )
}

export default UpdateMenu