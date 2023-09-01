import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./checkoutform";
import { useEffect, useState } from "react";
import {
  paymentConfigService,
  createStripePayment,
} from "../../../api/endpoints/payment/payment";
import { useParams } from "react-router-dom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('INSERT_publishable_key_HERE');

export default function PaymentPage() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const courseId  = useParams();
  const fetchConfig = async () => {
    try {
      const response = await paymentConfigService();
      console.log(response.data,'getit')
      const publish_key = response.data;
      setStripePromise(() => loadStripe(publish_key));
    } catch (err) {
      console.log(err);
    }
  };
  const paymentIntentHandler =async () => {
    try {
      const response = await createStripePayment(courseId ?? "");
      const { clientSecret } = response.data;
      console.log(clientSecret,"hi");
      setClientSecret(clientSecret);
    } catch {
      console.log("err");
    }
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  useEffect(() =>{ paymentIntentHandler()}, []);

  return (
  <div className="bg-red-400 p-5 flex items-center h-screen justify-center ">
  <div className="bg-blue-400 p-4 w-1/2">


   {clientSecret && stripePromise && (
    <Elements stripe={stripePromise} options={{ clientSecret }} key={clientSecret}>
      <CheckoutForm />
    </Elements>)}
    </div>
    </div>

  );
}
