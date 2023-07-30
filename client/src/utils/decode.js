import jwtDecode from 'jwt-decode';

const decodeToken=(jwtToken)=>{
    try{
        const decodeToken=jwtDecode(jwtToken);
        return decodeToken;
    }catch(err){
        console.log("Error while decoding token in decode file",err);
        return null;
    }
}

export default decodeToken;
