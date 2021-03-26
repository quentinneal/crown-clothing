import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import CustomButton from '../custom-button/custom-button.component';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HSDBNF9tDvUZwSBXWgYw49NHuxvCdCJrkiFYd0s2Aj8k3M3nIYmFgQlRJ8yKgun0YSWhbnRi2bq4c8Tf4jn6jM000iwBCyekc'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      >
        <CustomButton>Pay Now</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;