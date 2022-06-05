import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const wrongNamed = path.join(__dirname, 'files', 'wrongFilename.txt')
    const propperlyNamed = path.join(__dirname, 'files', 'properFilename.md');
    if (fs.existsSync(wrongNamed) || !fs.existsSync(propperlyNamed)) {
        fs.rename(wrongNamed, propperlyNamed, (err) => {
            if (err) console.log(err.message)
        }
      )
    } else {
        throw new Error('FS operation failed');
    }
};
rename()