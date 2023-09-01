import { PaymentServiceImpl } from "../../frameworks/services/paymentService"

export const paymentServiceInterface=(
    service:ReturnType<PaymentServiceImpl>
)=>{
    const createPaymentIntent=async(price:number)=> await service.createPaymentIntent(price);
    
    const getConfig=()=> {
        return service.getConfig(); //return is not returned automatically so had tointroduce return statement
       
    }
    return{
        createPaymentIntent,
        getConfig
    };
};

export type PaymentServiceInterface= typeof paymentServiceInterface;