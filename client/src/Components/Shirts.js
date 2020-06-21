import React from 'react'
import { connect } from 'react-redux'

const Shirts = (props) => {
    console.log(props)
    const { items } = props

    const display = items.map(item => (
        <div className='prod-item'>
            <img src={item.img} alt='none'/>
            <p className='prod-name'>{item.name}</p>
            <p className='prod-price'>${item.price}</p>
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
        items: state.Shirt.items
    }
}
export default connect(mapStateToProps)(Shirts)