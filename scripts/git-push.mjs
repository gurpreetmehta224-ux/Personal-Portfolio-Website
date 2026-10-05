import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node';
import fs from 'fs';
import path from 'path';

async function main() {
  const dir = path.resolve('.');
  
  // Accept token from command line argument (e.g. node scripts/git-push.mjs ghp_xxxx)
  // or environment variable GITHUB_TOKEN / GH_TOKEN
  const tokenArg = process.argv[2];
  const token = tokenArg || process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

  console.log('Target Repository: https://github.com/gurpreetmehta224-ux/Personal-Portfolio-Website');
  console.log('Branch: main\n');

  if (!token) {
    console.error('========================================================================');
    console.error('❌ GITHUB AUTHENTICATION TOKEN REQUIRED');
    console.error('========================================================================');
    console.error('GitHub requires a Personal Access Token (PAT) for HTTPS push operations.');
    console.error('\nTo push your code, run one of the following commands:');
    console.error('\nOption 1 (Direct with token):');
    console.error('  node scripts/git-push.mjs <YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>');
    console.error('\nOption 2 (Using environment variable):');
    console.error('  $env:GITHUB_TOKEN="<YOUR_TOKEN>"; node scripts/git-push.mjs');
    console.error('\nHow to generate a token in 30 seconds:');
    console.error('1. Go to https://github.com/settings/tokens/new');
    console.error('2. Give it a note (e.g., "portfolio-push")');
    console.error('3. Check the "repo" scope checkbox');
    console.error('4. Click "Generate token" and copy the token (starts with ghp_...)');
    console.error('========================================================================');
    process.exit(1);
  }

  console.log('🔑 Authentication token detected. Connecting to GitHub...');

  try {
    const pushResult = await git.push({
      fs,
      http,
      dir,
      remote: 'origin',
      ref: 'main',
      force: true,
      onAuth: () => ({
        username: token,
        password: ''
      })
    });

    console.log('========================================================================');
    console.log('🚀 PUSH SUCCESSFUL!');
    console.log('========================================================================');
    console.log('Repository URL: https://github.com/gurpreetmehta224-ux/Personal-Portfolio-Website');
    console.log('Your entire portfolio codebase is now live on GitHub!');
  } catch (err) {
    console.error('❌ Push failed:', err.message);
    if (err.data) console.error('Details:', err.data);
    process.exit(1);
  }
}

main();
