
import express from 'express';
import cors from 'cors';
import simpleGit from 'simple-git';
import { idgen } from './utils';
import path from 'path';
import {readFile} from './file';
import { uploadFile } from './cloud';

const app = express();
app.use(cors());
app.use(express.json());



app.post('/deploy',async (req, res) => {
    const repoUrl = req.body.repoUrl;
    console.log(`Deploying ${repoUrl}`);
    const id = idgen();
    await simpleGit().clone(repoUrl, path.join(__dirname,`./ouput/${id}`));
    const files= readFile(path.join(__dirname,`./ouput/${id}`))
    files.forEach(async(file) => {
        await uploadFile(file.slice(__dirname.length+1), file);
    })
    res.json({
        status: "success", 
        id: id 
    });
})
app.listen(3000, () => {
    console.log('Server listening on port 3000');
})