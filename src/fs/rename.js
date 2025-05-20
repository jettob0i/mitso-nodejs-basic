import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const oldFilePath = join(__dirname, 'files', 'properFilename1.md');
    const newFilePath = join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.access(oldFilePath);

        try {
            await fs.access(newFilePath);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') throw err;
        }

        await fs.rename(oldFilePath, newFilePath);
        console.log("файл переименован\n");
    } catch (err) {
        console.log("FS operation failed");
    }
};

await rename();
