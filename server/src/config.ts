import dotenv from 'dotenv';
dotenv.config();

const configKeys={
    
    MONGO_DB_URL: process.env.DATABASE as string,

    PORT: process.env.PORT,

    DB_NAME : process.env.DB_NAME as string,

    JWT_SECRET : process.env.JWT_SECRET as string,

    NODE_ENV :process.env.NODE_ENV as string,

    test: process.env.CONSOLE as string,

    user: process.env.USER as string,

    pass: process.env.PASS as string
}
export default configKeys;