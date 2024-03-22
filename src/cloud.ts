import { S3 } from "aws-sdk"
import fs from 'fs';

const s3= new S3({
    accessKeyId: "AKIAVRUVUJWOQ4F4DYGN",
    secretAccessKey: "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",
})



export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const params = {
        Body: fileContent,
        Bucket: "vercel-mod",
        Key: fileName,
      };
    
    const response = await s3.upload(params).promise();
    console.log(response);
}