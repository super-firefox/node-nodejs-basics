import path from 'path'
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const create = async () => {
    const DIR_NAME = 'files';
    const NAME_FILE = 'fresh.txt';
    const CONTENT = 'I am fresh and young';
    const MSG_ERRROR = 'FS operation failed';
    const scriptPath = path.dirname(fileURLToPath(import.meta.url));
    const outputPath = path.resolve(scriptPath, DIR_NAME, NAME_FILE);
    const folderPath = path.resolve(scriptPath, DIR_NAME);

    try {
        const dirFiles = await fs.readdir(folderPath);
        if(!dirFiles.includes(NAME_FILE)) {
            fs.writeFile(outputPath, CONTENT);
        } else {
            throw new Error(MSG_ERRROR);
        }
    } catch (error) {
        console.error(error);
    }
};

create();
