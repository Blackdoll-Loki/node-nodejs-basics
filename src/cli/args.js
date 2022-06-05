import process from 'process';
import { stdout } from 'process';

export const parseArgs = () => {
    const flagsArr = process.argv.slice(2);
    for (let i = 0; i < flagsArr.length; i += 2){
        stdout.write(`${flagsArr[i]} is ${flagsArr[i+1]}\n`)
    }
};
parseArgs()

