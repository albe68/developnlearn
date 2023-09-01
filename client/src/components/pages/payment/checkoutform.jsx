import {PaymentElement} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useStripe,useElements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import PaymentModel from './paymentModel';
import {enrollStudent} from '../../../api/endpoints/course/course'
const CheckoutForm = () => {
  const stripe=useStripe();
  const elements=useElements();
  // const {courseId}=useParams();
  const courseId='64ccf7b1221b3305caa73f40'
  const [message,setMessage]=useState(null);
  const [isProcessing,setIsProcessing]=useState(false);
  const [open,setOpen]=useState(false);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!stripe|| !elements){
      return ;
    }
    setIsProcessing(true);
    console.log("tesets perfexcr")
    const {error,paymentIntent}=await stripe.confirmPayment(
      {
      elements,
      confirmParams:{
        return_url: `${window.location.origin}/`
      },
      redirect:"if_required",
    });

    if(error){
      setMessage(error.message??'Somethign went wrong');

    }
    else if(paymentIntent&&paymentIntent.status){
      setMessage('Payment status'+paymentIntent.status);
      await enrollStudent(courseId?? "",paymentIntent);
      
    }
    setIsProcessing(false);
    console.log("daymn")
  }
  return (
    <div>
      <PaymentModel />
    <form id='payment-form' 
    onSubmit={handleSubmit}>

      <PaymentElement id="payment-element" />
      <button id='submit'>Pay Now</button>
    </form>
    </div>
  );
};

export default CheckoutForm;


