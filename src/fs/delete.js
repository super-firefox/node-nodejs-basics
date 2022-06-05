import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const remove = async () => {
    const INPUT_DIR = 'files';
    const FILE_NAME = 'fileToRemove.txt';
    const MSG_ERRROR = 'FS operation failed';
    const scriptPath = path.dirname(fileURLToPath(import.meta.url));

    try {
        const dirFiles = await fs.readdir(
            path.resolve(scriptPath, INPUT_DIR)
        );

        if(dirFiles.includes(FILE_NAME)) {
            await fs.rm(
                path.resolve(scriptPath, INPUT_DIR, FILE_NAME)
            )
        } else {
            throw new Error(MSG_ERRROR);
        }
    } catch (error) {
        console.error(error);
    }
};

remove();
