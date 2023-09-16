import dotenv from "dotenv";
dotenv.config();

const configKeys = {
  MONGO_DB_URL: process.env.DATABASE as string,

  PORT: process.env.PORT,

  DB_NAME: process.env.DB_NAME as string,

  JWT_SECRET: process.env.JWT_SECRET as string,

  REFRESH_JWT_SECRET: process.env.REFRESH_JWT_SECRET as string,

  NODE_ENV: process.env.NODE_ENV as string,

  test: process.env.CONSOLE as string,

  user: process.env.USER as string,

  pass: process.env.PASS as string,

  CLOUD_NAME: process.env.CLOUDINARY_NAME as string,

  CLOUD_KEY: process.env.API_KEY as string,

  CLOUD_SEC: process.env.API_SECRET as string,

  PAYMENT_SECRET: process.env.STRIPE_SECRET_KEY as string,

  PAYMENT_PUBLISH_KEY: process.env.STRIPE_PUBLISH_KEY as string,

  RAZOR_PAY_ID: process.env.RAZOR_PAY_ID as string,

  RAZOR_PAY_SECRET_KEY: process.env.RAZOR_SECRET_KEY as string,

  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY_ID as string,

  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY as string,

  AWS_BUCKET_REGION: process.env.AWS_BUCKET_REGION as string,

  AWS_BUCKET_NAME: process.env.BUCKET_NAME as string,
};
export default configKeys;
