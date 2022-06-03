import path from 'path'
import fs from 'fs/promises';

export const create = async () => {
    const DIR_NAME = 'files';
    const NAME_FILE = 'fresh.txt';
    const CONTENT = 'I am fresh and young';
    const MSG_ERRROR = 'FS operation failed';

    try {
        const outputPath = path.resolve(DIR_NAME, NAME_FILE);
        const dirFiles = await fs.readdir(DIR_NAME);

        if(!dirFiles.includes(NAME_FILE)) {
            fs.writeFile(outputPath, CONTENT)
        } else {
            throw new Error(MSG_ERRROR);
        }
    } catch (error) {
        console.error(error);  
    }
};
