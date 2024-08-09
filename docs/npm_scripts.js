export const npm_scripts = `
---

### 📌 NPM Scripts

**Start**

- 📜 \`start\` - Run your application with bun.
- 📜 \`start:smol\` - Run your application with bun and a flag which configures the JavaScriptCore heap size to be smaller and grow slower.
- 📜 \`start:bin\` - Run your standalone binary app.

**Clean**

- 📜 \`clean\` - Remove coverage data, prod, build.

**Development**

- 📜 \`dev\` - Launch your application in development mode with bun.
- 📜 \`dev:watch\` - Interactive watch mode to automatically transpile source files with bun in development.
- 📜 \`dev:hot\` - Hot reloading of source files with bun in development.
- 📜 \`dev:smol:watch\` - Interactive watch mode to automatically transpile source files with bun in development, while using --smol flag.
- 📜 \`dev:smol:hot\` - Hot reloading source files with bun in development, while using --smol flag.

**Build**

- 📜 \`build\` - Transpile and bundle source files with bun.
- 📜 \`build:watch\` - Interactive watch mode to automatically transpile source files with bun.
- 📜 \`build:bin\` - bun's bundler implements a --compile flag for generating a standalone binary from a TypeScript or JavaScript file, use this in your production environment to ensure optimal execution of your app.

**Testing**
- 📜 \`test:plum\` - Run the watched file for sass testing.
- 📜 \`test:unit\` - Run bun test.
- 📜 \`test:unit:watch\` - Interactive watch mode to automatically re-run tests with bun.

**Documentation**
- 📜 \`documentation\` - Generate offline docs with Sassdoc

**Linting and Formatting**
- 📜 \`prettier\` - Reformat source files with Prettier.
- 📜 \`biome:start\` - Starts the Biome daemon server. You can specify a custom configuration file path using the \`--config-path\` option.
- 📜 \`biome:stop\` - Stops the Biome daemon server.
- 📜 \`biome:fix\` - Runs a source code check and applies automatic fixes (linter & formatter) according to the defined rules.
- 📜 \`biome:unsafe\` - Works like \`biome:fix\`, but may apply more invasive or risky changes.

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

**scripts (utils)**
- 📜 \`script:global-docs\` - Generate README.md for documentation
- 📜 \`script:global-charset\` - Adds the @charset "UTF-8" declaration at the beginning of all SCSS files in the project.
- 📜 \`script:hover-comment\` - Used to remove the first line of a SCSS file if it starts with a comment.
`;
