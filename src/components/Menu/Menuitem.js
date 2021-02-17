import React from 'react'
import PropTypes from 'prop-types';
const MenuItem = (myitem) => {
    console.log(myitem)
    return (
        <div key={myitem.myitem._id} style={{ marginBottom: `50px` }}>
            <div style={{ display: `grid`, gridTemplateColumns: `1fr 1fr 1fr`, textAlign: `center`, alignItems: `center` }}>
                {/* {myitem.myitem.image && <img src={myitem.myitem.image} alt={myitem.myitem.name} style={{ width: `100px`, borderRadius: `50%` }}></img>} */}
                <h5>{myitem.myitem.name}</h5>
                <p>$ {myitem.myitem.price}</p>
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