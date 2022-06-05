import process from 'process';

export const parseEnv = () => {
    const variableRgx = 'RSS_'
    const envObj = process.env;
    const envKeyArray = Object.keys(envObj).filter((item) => item.startsWith(variableRgx));

    const len = envKeyArray.length;
    let result = '';
    for (let i = 0; i < len; i++) {
        const item = envKeyArray[i];
        if (i !== len-1) {
            result += `${item}=${process.env[item].trim()}; `
        } else {
            result += `${item}=${process.env[item].trim()}`
        }
    }
    console.log(result);
};

parseEnv();