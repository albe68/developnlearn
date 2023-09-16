// import { StudentRegisterInterface } from "@src/types/studentRegisterInterface";
export interface Students{
  firstName?:string,
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

// export default function createStudent(studentData: StudentRegisterInterface) {
//   firstName=studentData.firstName
//   return {
//     getFirstName: (): string => firstName,
//     getLastName: (): string => lastName,
//     getMobile: (): string => mobile,
//     getEmail: (): string => email,
//     getPassword: (): string => password,
//   };
// }

export class Students{
  constructor(studentData:Students){
    this.firstName = studentData.firstName,
    this.lastName = studentData.lastName,
    this.email = studentData.email,
    this.mobile = studentData.mobile,
    this.password = studentData.password;

  }
}

export default {
  Students,
};