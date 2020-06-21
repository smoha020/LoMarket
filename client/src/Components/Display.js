import React from 'react';
import { Link } from 'react-router-dom';

const Display = ({ item }) => {
    return (
        <React.Fragment>
            <Link to={`/description/${item.id}`}>
                <div className={'image-container item-' + item.id}>
                    <img src={item.img} alt='jpg'/>
                </div>
            </Link>
        </React.Fragment>
    )
}

export default Display 