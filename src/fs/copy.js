import fs from 'fs/promises';
import path from 'path';

async function copyFolder(from, to) {
    try {
        const dir = await fs.opendir(path.resolve(from));
        await fs.mkdir(path.resolve(to));
        
        for await (const item of dir) {
            if (item.isDirectory()) {
                copyFolder(path.resolve(from, item.name), path.resolve(to, item.name))
            } else {
                const f = path.resolve(from, item.name);
                const t = path.resolve(to, item.name);
                await fs.copyFile(f, t);
            }
        }
    } catch (error) {
        console.error(error);
    }

}

export const copy = async () => {
    const INPUT_DIR_NAME = 'files';
    const OUTPUT_DIR_NAME = 'files_copy';
    const MSG_ERRROR = 'FS operation failed';

    try {
        const dirFiles = await fs.readdir(path.resolve());
        if (!dirFiles.includes(OUTPUT_DIR_NAME) && dirFiles.includes(INPUT_DIR_NAME)) {
            await copyFolder(path.resolve(INPUT_DIR_NAME), path.resolve(OUTPUT_DIR_NAME));
        } else {
            throw new Error(MSG_ERRROR);
        }
    } catch (error) {
        console.error(error);
    }
};

copy();