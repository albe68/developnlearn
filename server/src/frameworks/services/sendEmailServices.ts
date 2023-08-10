import nodemailer,{Transporter} from 'nodemailer';
import configKeys from '../../config';
export const sendEmailService=()=>{
    const transporter:Transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:configKeys.user,
            pass:configKeys.pass
        },
    });

    const sendEmail=(email:string,subject:string,text:string)=>{   
        const mailOptions = {
            from: '`test_sender <${configKeys.user}>`',
            to: email,
            subject: subject,
            text: text,
          };
     transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.error(`Error sending email to instructor`,error)
        }else{
            console.log(`Email sent`,info.response)
        }
     });
    };

    const sendOtp=(email:string,subject:string,text:string)=>{   
        const mailOptions = {
            from: '`test_sender <${configKeys.user}>`',
            to: email,
            subject: subject,
            text: text,
          };
     transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.error(`Error sending email to instructor`,error)
        }else{
            console.log(`Email sent`,info.response)
        }
     });
    };
    return{
        sendEmail,
        sendOtp
    };

}

export type SendEmailService=typeof sendEmailService;