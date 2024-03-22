import { S3 } from "aws-sdk"
import fs from 'fs';

const s3= new S3({
    accessKeyId: "5ba92d32b68a31e4479009825ba33b37",
    secretAccessKey: "c121e3b1303ac5c55c69a57f40799598fbdada5fda7242d79f917e472ec7a7a9",
    endpoint: "https://656785d2c6143a472c83e76348a03f3d.r2.cloudflarestorage.com"
})


export const uploadFile = async (fileName: string, localfilepath:string) => {
    console.log("uploading file");
    const filecontent= fs.readFileSync(localfilepath);
    const response= await s3.upload({
        Body: filecontent,
        Bucket: "vercel-mod",
        Key: fileName
    }).promise();
    console.log(response);
}