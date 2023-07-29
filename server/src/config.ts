import dotenv from 'dotenv';
dotenv.config();

const configKeys={
    
    MONGO_DB_URL: process.env.DATABASE as string,

    PORT: process.env.PORT,

    DB_NAME : process.env.DB_NAME as string,

    JWT_SECRET : process.env.JWT_SECRET as string,

    NODE_ENV :process.env.NODE_ENV as string 
}
export default configKeys;