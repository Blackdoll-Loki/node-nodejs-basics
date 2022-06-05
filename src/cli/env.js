import process from 'process';
import { stdout } from 'process';
export const parseEnv = () => {
    let objKeys = Object.entries(process.env)
    objKeys.forEach((item) => {
      if (item[0].includes('RSS_')) {
        stdout.write(`${item[0]}=${item[1]}\n`);
      }
    })
};
parseEnv()