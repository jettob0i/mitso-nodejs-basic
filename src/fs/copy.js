import { promises as fs } from 'fs';
import { join } from 'path';
import { dirname } from 'path'; //для dirname, плохо ищет путь файла
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
    const sourceFolder = join(__dirname, 'files');
    const destinationFolder = join(__dirname, 'files_copy');

    try {

        await fs.access(sourceFolder);

        try {
            await fs.access(destinationFolder);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') throw err;
        }

        await fs.mkdir(destinationFolder);

        const files = await fs.readdir(sourceFolder);
        for (const file of files) {
            const sourceFile = join(sourceFolder, file);
            const destinationFile = join(destinationFolder, file);

            await fs.copyFile(sourceFile, destinationFile);
        }
    } catch (err) {
        throw err;
    }
};

await copy();