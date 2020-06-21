require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const stripe = require('stripe')(process.env.SECRET_KEY);

console.log(process.env.SECRET_KEY)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/secret', async (req, res) => {
    const amount = req.body.amount;

    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        metadata: {integration_check: 'accept_a_payment'}
    });
    res.status(200).json({client_secret: paymentIntent.client_secret});
    
})

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
  
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    });
  }

const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => console.log('running on port '+ PORT))