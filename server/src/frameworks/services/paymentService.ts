import configKeys from "../../config";
import Stripe from "stripe";

const stripe = new Stripe(configKeys.PAYMENT_SECRET || "", {
  apiVersion: "2022-11-15",
});

export const paymentService = () => {
  const createPaymentIntent = async (price:number) => {
    const paymentIntent: Stripe.PaymentIntent =
      await stripe.paymentIntents.create({
        amount: price*100 ,
        currency: "INR",
        automatic_payment_methods: { enabled: true },
      });
    return paymentIntent;
  };
  const getConfig = () => configKeys.PAYMENT_PUBLISH_KEY;

  return {
    createPaymentIntent,
    getConfig,
  };
};

export type PaymentServiceImpl = typeof paymentService;
