import React from 'react'
import PropTypes from 'prop-types';
const MenuItem = (myitem) => {
    console.log(myitem)
    return (
        <div style={{ marginBottom: `50px` }}>
            <div style={{ display: `grid`, gridTemplateColumns: `1fr 1fr 1fr 1fr`, textAlign: `center`, alignItems: `center` }}>
                {myitem.myitem.image && <img src={myitem.myitem.image} alt={myitem.myitem.name} style={{ width: `100px`, borderRadius: `50%` }}></img>}
                <h5>{myitem.myitem.name}</h5>
                <p>${myitem.myitem.price?.mediumSize}</p>
                <p>${myitem.myitem.price?.familySize}</p>
            </div>
            <p>{myitem.myitem.description}</p>
            <button className="btn" type="submit">Add</button>

        </div>
    )
}

MenuItem.propTypes = {
    myitem: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.object.isRequired
    }).isRequired
}

export default MenuItem