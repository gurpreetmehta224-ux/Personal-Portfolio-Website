import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import os from 'os';

async function main() {
  const gitUrl = 'https://github.com/git-for-windows/git/releases/download/v2.56.0.windows.1/MinGit-2.56.0-64-bit.zip';
  const targetDir = path.join(os.homedir(), 'AppData', 'Local', 'Programs', 'Git');
  const tempZip = path.join(os.tmpdir(), 'MinGit.zip');

  console.log('Downloading MinGit from', gitUrl);
  const res = await fetch(gitUrl);
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
  const buffer = await res.arrayBuffer();
  fs.writeFileSync(tempZip, Buffer.from(buffer));
  console.log('MinGit downloaded, size:', (buffer.byteLength / 1024 / 1024).toFixed(2), 'MB');

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  console.log('Extracting with tar to:', targetDir);
  execSync(`tar -xf "${tempZip}" -C "${targetDir}"`);
  console.log('Extraction complete!');

  fs.unlinkSync(tempZip);

  const gitExe = path.join(targetDir, 'cmd', 'git.exe');
  if (fs.existsSync(gitExe)) {
    const version = execSync(`"${gitExe}" --version`).toString();
    console.log('Git installed successfully:', version.trim());
  } else {
    console.error('git.exe not found at:', gitExe);
  }
}

main().catch(err => {
  console.error('Error installing Git:', err);
  process.exit(1);
});
