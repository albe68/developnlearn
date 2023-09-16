import jwtDecode from 'jwt-decode';

const decodeJwtToken=(jwtToken)=>{
    try{
        const decodeToken=jwtDecode(jwtToken);
        return decodeToken;
    }catch(err){
        console.log("Error while decoding token in decode file",err,jwtToken);
        return null;
    }
}

export default decodeJwtToken;
