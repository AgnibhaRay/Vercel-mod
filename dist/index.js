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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const simple_git_1 = __importDefault(require("simple-git"));
const utils_1 = require("./utils");
const path_1 = __importDefault(require("path"));
const file_1 = require("./file");
const cloud_1 = require("./cloud");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/deploy', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repoUrl = req.body.repoUrl;
    console.log(`Deploying ${repoUrl}`);
    const id = (0, utils_1.idgen)();
    yield (0, simple_git_1.default)().clone(repoUrl, path_1.default.join(__dirname, `./output/${id}`));
    const files = (0, file_1.readFile)(path_1.default.join(__dirname, `output/${id}`));
    files.forEach((file) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, cloud_1.uploadFile)(file.slice(__dirname.length + 1), file);
    }));
    res.json({
        status: "success",
        id: id
    });
    //home/agnibha/Vercel-Dev-Clone/Vercel-mod/output/ts/app.tsx
}));
app.listen(3001, () => {
    console.log('Server listening on port 3000');
});
