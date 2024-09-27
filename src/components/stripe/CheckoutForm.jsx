// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
// import { useState } from 'react';

// const CheckoutForm = ({amount}) => {
//   const stripe = useStripe();
//     const elements = useElements();
//     const [errorMessage, setErrorMessaeg] = useState('');
//     const [clientSecret, setClientSecret] = useState('');
//     const [loading, setLoading] = useState(false)

//   const handleSubmit = async (event) => {
//     // We don't want to let default form submission happen here,
//     // which would refresh the page.
//     event.preventDefault();

//       if (!stripe || !elements) {
        
//       // Stripe.js hasn't yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     const result = await stripe.confirmPayment({
//       //`Elements` instance that was used to create the Payment Element
//       elements,
//       confirmParams: {
//         return_url: "http://localhost:3500/userdash",
//       },
//     });

//     if (result.error) {
//         // Show error to your customer (for example, payment details incomplete)
        
//       console.log(result.error.message);
//     } else {
//       // Your customer will be redirected to your `return_url`. For some payment
//       // methods like iDEAL, your customer will be redirected to an intermediate
//       // site first to authorize the payment, then redirected to the `return_url`.
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <button disabled={!stripe}>Submit</button>
//     </form>
//   )
// };

// export default CheckoutForm;

import {ElementsConsumer, PaymentElement} from '@stripe/react-stripe-js';
import React from 'react';

class CheckoutForm extends React.Component {
  handleSubmit = async (e) => {
    // We don't want to let default form submission happen here,
    e.preventDefault()
    // which would refresh the page.
    event.preventDefault();

    const {stripe, elements} = this.props;

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://localhost:3500/userdash",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <PaymentElement />
        <button disabled={!this.props.stripe}>Submit</button>
      </form>
    );
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({stripe, elements}) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  )
}