import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const list = async () => {
    const INPUT_DIR = 'files';
    const MSG_ERRROR = 'FS operation failed';
    const scriptPath = path.dirname(fileURLToPath(import.meta.url));

    try {
        const rootFolder = await fs.readdir(
            path.resolve(scriptPath)
        );

        if(rootFolder.includes(INPUT_DIR)) {
            const dirFiles = await fs.readdir(
                path.resolve(scriptPath, INPUT_DIR)
            );
            console.log(dirFiles);
        } else {
            throw new Error(MSG_ERRROR);
        }

    } catch (error) {
        console.error(error);
    }
};

list();