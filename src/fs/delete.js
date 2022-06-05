import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const fsPromises = fs.promises

export const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');
    if (fs.existsSync(filePath)) {
        fsPromises.unlink(filePath, (err) => {
            if (err) throw err;
        })
    } else {
        throw new Error('FS operation failed');
    }
};
remove()