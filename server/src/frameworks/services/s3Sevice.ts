import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import configKeys from "../../config";
import randomNumber from "random-number";
import crypto from "crypto";
import env from "dotenv";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

env.config();

const s3 = new S3Client({
  credentials: {
    accessKeyId: configKeys.AWS_ACCESS_KEY,
    secretAccessKey: configKeys.AWS_SECRET_ACCESS_KEY,
  },
  region: configKeys.AWS_BUCKET_REGION,
});

const s3CloudFront = () => {
  
};
const randomIdGenerate = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

export const s3Service = () => {
  const uploadObject = async (file: Express.Multer.File) => {
    const key = randomIdGenerate();

    if (configKeys.NODE_ENV != "development") {
      const putObjectParams = {
        Bucket: configKeys.AWS_BUCKET_NAME,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
      };
      const command = new PutObjectCommand(putObjectParams);
      await s3.send(command);
      return {
        name: file.originalname,
        key,
      };
    } else {
      console.log("not added to cloud");
      return {
        name: file.originalname,
        key,
      };
    }
  };

  const getObject = async (fileKey: string) => {
    if (configKeys.NODE_ENV != "development") {
      const getObjectParams = {
        Bucket: configKeys.AWS_BUCKET_NAME,
        Key: fileKey,
      };

      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(s3, command, { expiresIn: 3600 });
      return url;
    } else {
      const url =
        "https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Fplaylists%2Fsquare_covers%2F000%2F973%2F363%2Fthumb%2F_removal_ai__d394fc56-e450-4e7a-bb78-013fc3cbb30d-transformed.png&w=256&q=100";
      return url;
    }
  };

  const getcloudFrontUrl = () => {};
  return {
    uploadObject,
    getObject,
    getcloudFrontUrl,
  };
};

export type CloudServiceImpl = typeof s3Service;
