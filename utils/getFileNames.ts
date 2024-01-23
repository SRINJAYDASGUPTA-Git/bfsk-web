"use server";
import fs from "fs";
import path from "path";

const getFileNames = async (folder: string) => {
  const folderPath = path.join(process.cwd(), "public", folder);
  return fs.readdirSync(folderPath);
};

export default getFileNames;
