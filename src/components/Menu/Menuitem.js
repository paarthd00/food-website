import React from 'react'
import PropTypes from 'prop-types';
import API from '../../utils/api'
const MenuItem = (myitem) => {
    console.log(myitem)
    const deleteMenuItem = () => {
        API.delete(myitem.myitem)
        window.location.reload();
    }
    // myitem._id
    return (
        <div key={myitem.myitem._id} style={{ marginBottom: `50px`, textAlign: `center`, alignItems: `center` }}>
            <div style={{ display: `grid`, gridTemplateColumns: `1fr 1fr 1fr`, textAlign: `center`, alignItems: `center` }}>
                {/* {myitem.myitem.image && <img src={myitem.myitem.image} alt={myitem.myitem.name} style={{ width: `100px`, borderRadius: `50%` }}></img>} */}
                <h5>{myitem.myitem.name}</h5>
                <p>$ {myitem.myitem.price}</p>
                <button style={{ width: `50px` }} onClick={deleteMenuItem} className="btn btn-danger">X</button>
            </div>
            <p>{myitem.myitem.description}</p>

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