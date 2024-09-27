import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51PqZGPDET1b9VVadBnUCE6PtXLNz0Jkv523o9yZztUBbACWgPEfJ2kTBntig2uBjL1JquuHEozwHe6RQt2b0zTtd00t3z0WiBz');

export default function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  const amount = 50.00

  return (

    <main>
      <div>
        <h1>Olabode</h1>
        <h2>has requested<span>${amount}</span></h2>
      </div>

    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={amount} />
    </Elements>
    </main>
  );
};