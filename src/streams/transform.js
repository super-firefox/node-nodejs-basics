import { Transform } from 'stream';
import process from 'process';

function createReversText() {
    return new Transform({
        transform(chunk, encode, callback) {
            const reverse = chunk.reverse();
            callback(null, reverse+'\n');
        }
    })
}

export const transform = async () => {
    process.stdin.pipe(createReversText()).pipe(process.stdout);
};

transform();