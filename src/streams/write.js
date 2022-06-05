import { stdin } from 'process';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
export const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
    const output = fs.createWriteStream(filePath);
    stdin.on('data', chunk => {
        output.write(chunk);
    })
};
write()