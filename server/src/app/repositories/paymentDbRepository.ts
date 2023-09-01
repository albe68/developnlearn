import { PaymentImplInterface } from "../../frameworks/database/mongoDB/repositories/paymentRepoMongoDb";
import { PaymentInfo } from "@src/types/payment";

export const paymentInterface =
 (repository:ReturnType<PaymentImplInterface> ) => {
  const savePayment = (paymentInfo:PaymentInfo) => repository.savePaymentInfo(paymentInfo);
  

  return {
    savePayment,
  };
};

export type PaymentInterface = typeof paymentInterface;
