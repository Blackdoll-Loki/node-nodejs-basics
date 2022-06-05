import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
export const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesPath = path.join(__dirname, 'files');
    const filesCopyPath = path.join(__dirname, 'files_copy');
    console.log(filesCopyPath)
    if (!fs.existsSync(filesCopyPath)) {
        fs.mkdir(filesCopyPath, (err) => {
            if (err) {
                throw new Error('FS operation failed');
            }
        });
        fs.readdir(filesPath, (err, files) => {
            if (err) throw err;
            files.forEach((file) => {
                fs.copyFile(path.join(filesPath, file), path.join(filesCopyPath, file), (err) => {
                    if (err) throw err;
                })
            })
        })
    } else {
        throw new Error('FS operation failed');
    }
};
copy()