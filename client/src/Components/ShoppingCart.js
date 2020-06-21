import React, { Component} from 'react';
import { connect } from 'react-redux';
import { ElementsConsumer } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import OrderSummary from './OrderSummary';

class ShoppingCart extends Component {
    constructor(props) {
       super(props) 
    }
    
    render() {
        
        const { bought } = this.props
        let sum = 0;
        let total = bought.forEach(b => {
            sum += b.price
        })
        total = sum
        const display = bought.map(b => (
            <OrderSummary b={b} increment={this.props.increment} 
            decrement={this.props.decrement} removeItem={this.props.removeItem}/>
        ))

        return (
            <div className='cart-container'>
                <div className='leftPage'>
                    <div style={{margin: '10%'}}>
                        <h6>Order Summary</h6>
                        {display}
                        <div className='small-container' >
                            <p className="total">Total: </p>
                            <p className="output">${total}</p>
                        </div>
                    </div>
                </div>
                <div className='rightPage'>
                    <div style={{margin: '10%'}}>
                        <h6>Payment Selection</h6>
                        <div style={{marginTop: '10px'}}>
                            <ElementsConsumer>
                                {({stripe, elements}) => (
                                    <CheckOutForm stripe={stripe} elements={elements} total={total}/>
                                )}
                            </ElementsConsumer> 
                        </div>        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        bought: state.Display.bought
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increment: (b) => { dispatch({type: 'INCREMENT', Item: b }) },
        decrement: (b) => { dispatch({type: 'DECREMENT', Item: b }) },
        removeItem: (b) => { dispatch({type: 'REMOVE', Item: b }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)