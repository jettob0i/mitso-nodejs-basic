import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGzip, createGunzip } from 'zlib';

const decompress = async () => {
    const inputFilePath = join('mitso-nodejs-basic', 'src', 'zip', 'files', 'archive.gz');
    const outputFilePath = join('mitso-nodejs-basic', 'src', 'zip', 'files', 'fileToCompress1.txt');

    const readStream = createReadStream(inputFilePath);
    const writeStream = createWriteStream(outputFilePath);
    const gunzip = createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();