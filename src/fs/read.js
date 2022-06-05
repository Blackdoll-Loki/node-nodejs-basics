import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const { stdout } = process;

export const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
    if (fs.existsSync(pathToFile)) {
        fs.readFile(pathToFile,
            'utf-8',
            (err, data) => {
                if (err) throw err;
                stdout.write(data);
            });
    } else {
        throw new Error('FS operation failed');
    }
};
read()