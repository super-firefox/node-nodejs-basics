import process from 'process';

/**
 * WARNING!!!
 * If you use npm script then first argument must "--".
 * Example:
 * $ npm run cli:args -- --prop1Name value1 --prop2Name value2
 */
export const parseArgs = () => {
    const argumentsArray = process.argv;
    const len = argumentsArray.length;
    for(let i = 0; i < len-1; i++) {
        const item = argumentsArray[i];
        if(item.startsWith('--')) {
            const value = argumentsArray[i+1];
            console.log(`${item.slice(2)} is ${value}${i !== len-2 ? ',': ''}`);
        }
    }
};

parseArgs();