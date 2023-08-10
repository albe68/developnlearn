import { SendEmailService } from "@src/frameworks/services/sendEmailServices";

export const sendEmailServiceInterface=(
    service:ReturnType<SendEmailService>
)=>{
    const sendEmail=(email:string,subject:string,text:string)=>
        service.sendEmail(email,subject,text);

    const sendOtp=(email:string,subject:string,text:string)=>
    service.sendOtp(email,subject,text);
    return{
        sendEmail,
        sendOtp
    };
};
export type SendEmailServiceInterface = typeof sendEmailServiceInterface;