import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';
import fs from 'fs';

export const decompress = async () => {
    const INPUT_DIR = 'files';
    const OUTPUT_FILE = 'fileToCompress.txt';
    const INPUT_FILE = 'archive.gz';
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename);
    const inputFilePath = path.resolve(__dirname, INPUT_DIR, INPUT_FILE);
    const outputFilePath = path.resolve(__dirname, INPUT_DIR, OUTPUT_FILE);
    const input = fs.createReadStream(inputFilePath);
    const output = fs.createWriteStream(outputFilePath);
    input.pipe(zlib.createUnzip()).pipe(output);
};

decompress();
