import React, { Component } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';


class CheckOutForm extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
            error: null,
            success: null
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const button = e.target.children[1];
        button.disabled = true;

        //Avoid charging the customer more than once
        setTimeout(function() {
            button.disabled = false;
        }, 2000)

        
        const {stripe, elements, total} = this.props;

        if (!stripe || !elements) {
        // Stripe.js has not yet loaded.
        // Make  sure to disable form submission until Stripe.js has loaded.
        return;
        }

        const cElement = elements.getElement(CardElement);

        const response = await axios.post('/secret', {amount: (total*100)})

        const { client_secret } = await response.data;
        const result = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: cElement,
                billing_details: {
                    name: this.state.name
                }
            }
        })

        if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
            this.setState({error: result.error.message})
        } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
                // Show a success message to your customer
                console.log(result.paymentIntent)
                this.setState({success: 'Payment Successful!. Check Console!'})
                // There's a risk of the customer closing the window before callback
                // execution. Set up a webhook or plugin to listen for the
                // payment_intent.succeeded event that handles any business critical
                // post-payment actions.
            }
        }
    }

    onChange = (e) => {
        
        this.setState({
            name: e.target.value
        })
    }

    render() {
        let cardOptions = {
            style :{
                base: {
                    fontSize: '15px',
                    backgroundColor: 'white',
                    lineHeight: '2.5',
                    '::placeholder': {
                        color: '#D3D3D3',
                    }
                }
            }
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <div>
                        {this.state.error}
                        {this.state.success}
                    </div>
                    <div>
                        <input style={Styles} 
                        placeholder='Name on card' 
                        type='text' 
                        name='name'
                        onChange={this.onChange}/>
                    </div><br></br>

                    
                    <label>
                        <CardElement options={cardOptions}/> <br></br>
                    </label>
                    
                </label>
                <button style={buttonStyle} type='submit' disabled={!this.props.stripe}>Confirm Order</button>
            </form>
        )
    }
}

const Styles = {
    boxSizing: 'border-box',
    background: 'white', 
    marginTop: '10px', 
    paddingLeft: '15px', 
    width: '100%',
    textDecoration: 'none',
    borderBottom: 'none'
}

const buttonStyle = {
    background: 'black',
    color: 'white',
    height: '45px',
    width: '100%',
    border: 'none'
}
export default CheckOutForm