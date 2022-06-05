import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const rename = async () => {
    const INPUT_DIR = 'files';
    const CURRENT_NAME = 'wrongFilename.txt';
    const NEW_NAME = 'properFilename.md';
    const MSG_ERRROR = 'FS operation failed';
    const scriptPath = path.dirname(fileURLToPath(import.meta.url));
    
    try {
        const dirFiles = await fs.readdir(
            path.resolve(scriptPath, INPUT_DIR)
        );

        if(dirFiles.includes(CURRENT_NAME) && !dirFiles.includes(NEW_NAME)) {
            await fs.rename(
                path.resolve(scriptPath, INPUT_DIR, CURRENT_NAME),
                path.resolve(scriptPath, INPUT_DIR, NEW_NAME)
            )
        } else {
            throw new Error(MSG_ERRROR);
        }
    } catch (error) {
        console.error(error);
    }
};

rename();