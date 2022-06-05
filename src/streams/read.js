import { stdin, stdout } from 'process';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
export const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt')
    const stream = fs.createReadStream(filePath, 'utf-8');
    stream.on('data', chunk => {
        stdout.write(`${chunk}\n`);
    });
};
read()