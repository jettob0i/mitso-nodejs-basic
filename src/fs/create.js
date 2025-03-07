import { promises as fs } from 'fs';

const create = async () => {
    let data = "I am fresh and young";

    try {
        await fs.writeFile(
            "fresh.txt",
            data,
            {
                encoding: "utf8",
                flag: "w",
                mode: 0o666
            }
        );

        console.log("файл записан\n");
    } catch (err) {
        console.log("FS operation failed");
    }
};

await create();