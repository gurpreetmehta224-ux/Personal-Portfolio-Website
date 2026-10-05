import git from 'isomorphic-git';
import fs from 'fs';
import path from 'path';

async function main() {
  const dir = path.resolve('.');
  console.log('Initializing Git repository in', dir);

  await git.init({ fs, dir, defaultBranch: 'main' });
  console.log('Git repo initialized!');

  // Read .gitignore
  const gitignoreContent = fs.existsSync('.gitignore') ? fs.readFileSync('.gitignore', 'utf8') : '';
  const ignoredPatterns = gitignoreContent
    .split('\n')
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'));

  console.log('Adding files...');
  // Find all files in project recursively
  function getFiles(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    let files = [];
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      const relativePath = path.relative(dir, fullPath).replace(/\\/g, '/');

      // Check ignore
      if (
        relativePath.startsWith('node_modules') ||
        relativePath.startsWith('.git') ||
        relativePath.startsWith('dist') ||
        relativePath.endsWith('.log')
      ) {
        continue;
      }

      if (entry.isDirectory()) {
        files = files.concat(getFiles(fullPath));
      } else {
        files.push(relativePath);
      }
    }
    return files;
  }

  const allFiles = getFiles(dir);
  console.log(`Found ${allFiles.length} files to stage.`);

  for (const filepath of allFiles) {
    await git.add({ fs, dir, filepath });
  }

  console.log('Committing staged files...');
  const sha = await git.commit({
    fs,
    dir,
    author: {
      name: 'Gurpreet Singh Mehta',
      email: 'gurpreet.mehta@example.com'
    },
    message: 'Initial commit: Complete ReactJS Personal Portfolio Website (Full Stack Task 2)'
  });

  console.log('Committed successfully! Commit SHA:', sha);

  // Set remote origin
  const remoteUrl = 'https://github.com/gurpreetmehta224-ux/Personal-Portfolio-Website';
  await git.addRemote({
    fs,
    dir,
    remote: 'origin',
    url: remoteUrl,
    force: true
  });
  console.log('Remote origin set to:', remoteUrl);

  const currentRemotes = await git.listRemotes({ fs, dir });
  console.log('Configured remotes:', currentRemotes);
}

main().catch(err => {
  console.error('Error during git operation:', err);
  process.exit(1);
});
