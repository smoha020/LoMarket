import React from 'react';
import { connect } from 'react-redux';


const Description = (ownProps) => {
    const item = ownProps.item
    console.log(ownProps)

    function handleClick() {
        ownProps.addToCart(item)
        ownProps.history.push('/Cart')
    }

    return (
        <React.Fragment>
            <div className='description-container'>
                <div className='description-left'>
                    <div className='desc-item'>
                        <img className={`image-${item.id}`} src={item.img} alt='jpg'/>
                    </div>
                </div>
                <div className='description-right'>
                    <h4 style={{textAlign: 'left', margin: '0px'}}>{item.name}</h4>
                    <p className='description-price'>${item.price}</p>

                    <button onClick={handleClick} className='desc-addcart'>ADD TO CART</button>

                    <p className='description-info'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                        aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id
    console.log(state.Items)
    return {
        item: state.Items.items.find(item => item.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: item => { dispatch({type: 'ADDTOCART', item}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Description)