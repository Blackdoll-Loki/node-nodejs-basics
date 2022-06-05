import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const create = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, 'files', 'fresh.txt');
    if (!fs.existsSync(pathToFile)) {
        fs.writeFile(pathToFile,
            'I am fresh and young',
            (err) => {
                if (err) console.log(err)
            }
        )
    } else {
        throw new Error('FS operation failed');
    }
};
create()