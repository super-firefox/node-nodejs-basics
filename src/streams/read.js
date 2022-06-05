import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

export const read = async () => {
    const INPUT_DIR = 'files';
    const INPUT_FILE = 'fileToRead.txt';
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename);
    const inputFilePath = path.resolve(__dirname, INPUT_DIR, INPUT_FILE);
    const stream = fs.createReadStream(inputFilePath, 'utf-8');
    stream.on('data', chunk => process.stdout.write(chunk));
};

read();