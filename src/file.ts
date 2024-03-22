import fs from 'fs';
import path from 'path';

export const readFile = (Folderpath: string) => {
    let response: string[] = [];

    const allFilesandFold=fs.readdirSync(Folderpath);
    allFilesandFold.forEach((file) => {
        const fullpath = path.join(Folderpath, file);
        if(fs.statSync(fullpath).isDirectory()){
            response= response.concat(readFile(fullpath));
        }
        else{
            response.push(fullpath);
        }
    });
    return response;
}