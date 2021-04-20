import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

import brandLogo from '../../assets/shopping-bag.svg'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishabeKey = process.env.REACT_APP_STRIPE_KEY

    const onToken = token => {
        console.log(token)
        alert('Payment Successful!')
    }

    return(
        <StripeCheckout 
            label='Pay now'
            name='Clothing ya'
            billingAddress
            shippingAddress
            image={brandLogo}
            description={`Your total price is ${price}`}
            amout={priceForStripe}
            token={onToken}
            stripeKey={publishabeKey}
        />
    )
}

export default StripeCheckoutButton