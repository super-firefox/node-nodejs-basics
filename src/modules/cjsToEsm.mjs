import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';
import { release, version } from 'os';
import {createServer as createServerHttp} from 'http'
import './files/c.js';

const random = Math.random();
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

let unknownObject;

if (random > 0.5) {
    let jsonA = path.resolve(__dirname, './files/a.json')
    unknownObject = JSON.parse(await fs.readFile(jsonA));
} else {
    let jsonB = path.resolve(__dirname, './files/b.json')
    unknownObject = JSON.parse(await fs.readFile(jsonB));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export default {
    unknownObject,
    createMyServer
};
