import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, 'files', 'fileToRead.txt');

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(data);
  } catch {
    console.log('FS operation failed');
  }
};

await read();
