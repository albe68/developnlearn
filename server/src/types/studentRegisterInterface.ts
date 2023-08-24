interface Intrest{
    value:string,
    label:string,

}

export interface StudentRegisterInterface{
    firstName:string,
    lastName:string,
    email:string
    mobile:string,
    password:string, //used any instead of string
    interests?:Array<string>,
    profilePic?:{
        key?:string;
        name?:string;
        url?:string;
    },
    isGoogleUser:boolean,
    isVerified:boolean ,   
}