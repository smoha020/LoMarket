import React from 'react'
import { Link } from 'react-router-dom';

const Products = (props) => {
    
    const { item } = props

    return (
        <div className='prod-item'>
            <Link className='prod-link' to={`/description/${item.id}`}>
                <img src={item.img} alt='none'/>
                <p className='prod-name'>{item.name}</p>
                <p className='prod-price'>${item.price}</p>
            </Link>
        </div>
    )
}

export default Products