export interface InstructorInterface{
    firsrName:string,
    lastName:string,
    password:string,
    email:string,
    phone:number,
    qualifications:string,
    subjects:string,
    experience:string,
    skills:string,
    about:string,
    certificates:Certificate[],
    dateRequested:Date
    

}
export interface Certificate{
    name:string,
    url:string
}

export interface SavedInstructorInterface extends InstructorInterface{
    _id:string,
    isVerified:boolean,
    dateJoined:Date;
    coursesCreated:Array<string>,

}

