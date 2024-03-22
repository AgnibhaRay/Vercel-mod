"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const aws_sdk_1 = require("aws-sdk");
const fs_1 = __importDefault(require("fs"));
const s3 = new aws_sdk_1.S3({
    accessKeyId: "5ba92d32b68a31e4479009825ba33b37",
    secretAccessKey: "c121e3b1303ac5c55c69a57f40799598fbdada5fda7242d79f917e472ec7a7a9",
    endpoint: "https://656785d2c6143a472c83e76348a03f3d.r2.cloudflarestorage.com"
});
const uploadFile = (fileName, localfilepath) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("uploading file");
    const filecontent = fs_1.default.readFileSync(localfilepath);
    const response = yield s3.upload({
        Body: filecontent,
        Bucket: "vercel-mod",
        Key: fileName
    }).promise();
    console.log(response);
});
exports.uploadFile = uploadFile;
