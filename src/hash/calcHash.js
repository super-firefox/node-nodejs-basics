import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

export const calculateHash = async () => {
    const INPUT_DIR = 'files';
    const INPUT_FILE = 'fileToCalculateHashFor.txt';
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename);
    const secretFilePath = path.resolve(__dirname, INPUT_DIR, INPUT_FILE);

    try {
        const secret = await fs.readFile(secretFilePath, 'utf-8');
        const hash = crypto.createHmac('sha256', secret);
        const hashToHex = hash.digest('hex');
        console.log(hashToHex);
    } catch (error) {
        console.error(error);
    }
};

calculateHash();