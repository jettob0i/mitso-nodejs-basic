import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGzip } from 'zlib';

const compress = async () => {
    const inputFilePath = join('mitso-nodejs-basic', 'src', 'zip', 'files', 'fileToCompress.txt');
    const outputFilePath = join('mitso-nodejs-basic', 'src', 'zip', 'files', 'archive.gz');

    const readStream = createReadStream(inputFilePath);
    const writeStream = createWriteStream(outputFilePath);
    const gzip = createGzip();

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();