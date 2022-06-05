import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

export const write = async () => {
    const OUTPUT_DIR = 'files';
    const OUTPUT_FILE = 'fileToWrite.txt';
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename);
    const outputFilePath = path.resolve(__dirname, OUTPUT_DIR, OUTPUT_FILE);

    const streamWrite = fs.createWriteStream(outputFilePath);
    process.stdin.on('data',  chunk => streamWrite.write(chunk));
};

write();
