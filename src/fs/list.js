import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const { stdout } = process

export const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, 'files')
    if (fs.existsSync(folderPath)) {
        fs.readdir(folderPath, (err, files) => {
            files.forEach((file) => stdout.write(`${file}\n`))
        })
    } else {
        throw new Error('FS operation failed');
    }
}; 
list()