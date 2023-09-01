import mongoose,{Schema,Document} from "mongoose";
import { Mongoose } from "mongoose";
interface PaymentI extends Document{
    courseId:string,
    studentId:string,
    paymentId:string,
    amount:string,
    currency:string,
    payment_method:string
}

const paymentSchema:Schema<PaymentI>=new Schema({
    courseId:{type:String,required:true},
    studentId:{type:String,required:true},
    paymentId:{type:String,required:true},
    amount:{type:String,required:true},
    currency:{type:String,required:true},
    payment_method:{type:String,required:true}
   
})

const Payment=mongoose.model<PaymentI>(
    'Payment',paymentSchema,'payment'
);

export default Payment;