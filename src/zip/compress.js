import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const compress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const input = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    const output = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
    const gzip = zlib.createGzip();
    input.pipe(gzip).pipe(output);
};
compress()