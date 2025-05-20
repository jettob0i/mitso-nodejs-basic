import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const directoryPath = join(__dirname, 'files');

  try {
    await fs.access(directoryPath);

    const files = await fs.readdir(directoryPath);

    console.log(files);
  } catch {
    console.log('FS operation failed');
  }
};

await list();