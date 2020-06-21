import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const Pants = (props) => {
    console.log(props)
    const { items } = props

    const display = items.map(item => (
        <div className='prod-item'>
            <Link className='prod-link' to={`/description/${item.id}`}>
                <img src={item.img} alt='none'/>
                <p className='prod-name'>{item.name}</p>
                <p className='prod-price'>${item.price}</p>
            </Link>
        </div>
    ))
    return (
        <React.Fragment>
            <div className='prod-container'>
                {display}
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.Pants.items
    }
}
export default connect(mapStateToProps)(Pants)