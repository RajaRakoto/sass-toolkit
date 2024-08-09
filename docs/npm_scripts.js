export const npm_scripts = `
---

### 📌 NPM Scripts

**scripts (utils)**
- 📜 \`script:global-docs\` - Generate README.md for documentation
- 📜 \`script:global-charset\` - Adds the @charset "UTF-8" declaration at the beginning of all SCSS files in the project.
- 📜 \`script:hover-comment\` - Used to remove the first line of a SCSS file if it starts with a comment.

**Testing**
- 📜 \`test\` - Run the watched file for sass testing.

**Documentation**
- 📜 \`documentation\` - Generate offline docs with Sassdoc

**Linting and Formatting**
- 📜 \`eslint\` - Lint source files with ESLint.
- 📜 \`prettier\` - Reformat source files with Prettier.

**Backup and Dependency Management**
- 📜 \`backup\` - Backup files with Grunt.
- 📜 \`pkg-check\` - Check useless dependencies with depcheck.
- 📜 \`pkg-upgrade\` - Upgrade outdated dependencies (interactive mode) with npm-check-updates.

**Versioning**
- 📜 \`versioning\` - Start ungit server.

**npm Commands**
- 📜 \`npm-version:major\` - Increments the major version number of your project using npm.
- 📜 \`npm-version:minor\` - Increments the minor version number of your project using npm.
- 📜 \`npm-version:patch\` - Increments the version patch number of your project using npm.
- 📜 \`npm-publish\` - Publish your npm package with public access.
- 📜 \`npm-unpublish\` - Forcefully unpublish the plum package from npm.
- 📜 \`npm-reset:registry\` - Delete the custom npm registry.
- 📜 \`npm-check:registry\` - Get the currently configured registry for npm.
- 📜 \`npm-proxy-set:registry\` - Set the npm registry to use a local proxy.
- 📜 \`npm-proxy:start\` - Start a Verdaccio server with a local npm proxy.
- 📜 \`npm-login\` - Login to a registry user account.
- 📜 \`npm-proxy:publish\` - Publish your npm package via the local proxy.
- 📜 \`npm-proxy:unpublish\` - Forcefully unpublish the plum package from the npm registry via the local proxy.
- 📜 \`npm-proxy:republish\` - Republish your npm package by first unpublishing it and then publishing it again via the local proxy.
`;
