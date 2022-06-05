import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

export const read = async () => {
    const INPUT_DIR = 'files';
    const FILE_NAME = 'fileToRead.txt';
    const MSG_ERRROR = 'FS operation failed';
    const scriptPath = path.dirname(fileURLToPath(import.meta.url));

    try {
        const dirFiles = await fs.readdir(
            path.resolve(scriptPath, INPUT_DIR)
        );

        if (dirFiles.includes(FILE_NAME)) {
            const filePath = path.resolve(scriptPath, INPUT_DIR, FILE_NAME);
            const content = await fs.readFile(filePath, 'utf-8');
            console.log(content);
        } else {
            throw new Error(MSG_ERRROR);
        }
    } catch (error) {
        console.log(error)
    }
};

read();