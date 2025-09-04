// imgcng-replace.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDirs = ["./public", "./src"];
const backupDir = "./originals";
const validExts = [".jpg", ".jpeg", ".png", ".gif", ".tiff", ".bmp"];

async function convertAndReplace(filePath, relativePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!validExts.includes(ext)) return;

  const buffer = fs.readFileSync(filePath);
  const originalSize = buffer.length;

  // Destination WebP path (replace extension with .webp)
  const webpPath = filePath.replace(ext, ".webp");

  // Backup path for original
  const backupPath = path.join(backupDir, relativePath);
  fs.mkdirSync(path.dirname(backupPath), { recursive: true });

  // Move original into backup folder
  fs.renameSync(filePath, backupPath);

  // Write converted WebP in place of original
  await sharp(buffer).webp({ quality: 80 }).toFile(webpPath);

  const newSize = fs.statSync(webpPath).size;

  console.log(
    `${relativePath} → ${path.basename(webpPath)} | ${(originalSize / 1024).toFixed(
      1
    )} KB → ${(newSize / 1024).toFixed(1)} KB | Saved ${(
      100 - (newSize / originalSize) * 100
    ).toFixed(1)}%`
  );
}

function walkDir(dir, callback, baseDir = dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const relativePath = path.relative(".", filePath);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath, callback, baseDir);
    } else {
      callback(filePath, relativePath);
    }
  });
}

(async () => {
  const tasks = [];
  for (const dir of inputDirs) {
    if (fs.existsSync(dir)) {
      walkDir(dir, (filePath, rel) => {
        tasks.push(convertAndReplace(filePath, rel));
      });
    }
  }
  await Promise.all(tasks);
  console.log("\n✅ Conversion complete. Originals moved to ./originals/");
})();
