import React from "react";
import { razorPayment } from "../../../api/endpoints/payment/payment";
import { enrollStudent } from "../../../api/endpoints/payment/payment";
import {

  Button,
} from "@material-tailwind/react";
// import COMMON_CONSTANTS from "../../../constants/common";

const handlePay = async () => {
  const response_create = await razorPayment(); //create razor api
  console.log(response_create,"h")
  const response = response_create.razorpay_payment_id; // response of oreder object from server
  const options = {
    key: response_create.data.rzp_id,
    name: "developnearn",
    description: "Some Description",
    order_id: response_create.data.order.id,
    /**
     *
     * @param {*razorpay_order_id,razorpay_payment_id,razorpay_signature} res
     */
    handler: async (res) => {
      try {
        const currency=response_create.data.order.currency;
        const amount= response_create.data.order.amount;
        const payment_method='visa';
        const source={
          currency,amount,payment_method
        }
        console.log(source,"might be");

       const value= Object.assign(res,source)
       console.log("ys",value)
        await enrollStudent("64d2658868387e584584959b",value)
        //handler can be used
        //capture can be manulaly done but no need since it is automtated in
        //order object
        console.log(res,"touch")
      } catch (err) {
        console.log(err);
      }
    },
    theme: {
      color: "#686CFD",
    },
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};

export default function Razorpay_button() {
  return(
       <div className="flex justify-center pb-3">
            <Button size="sm" className="w-24 flex items-center justify-center " ripple={true} onClick={handlePay}>Pay</Button>

        </div>

  ) 
}
