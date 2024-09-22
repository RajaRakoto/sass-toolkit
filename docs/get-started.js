export const get_started = `
---

### 📌 Get started

You can use [Plum CLI](https://github.com/RajaRakoto/plum-cli) to install **Plum** package in your project:

\`\`\`bash
npm install -g @raja-rakoto/plum-cli
\`\`\`

Execute the following command to start CLI:

\`\`\`bash
plum-cli
\`\`\`

<img src="https://rajarakoto.github.io/github-docs/plum/plum-cli-demo.gif" width="800">

If you use [sass](https://www.npmjs.com/package/sass) package for compiling your SCSS files, you can incorporate the following command in your package.json file to enable SCSS file monitoring:

\`\`\`json
"scripts": {
  "watch:sass": "sass --watch style.scss:style.css --load-path=node_modules --style=compressed"
},
\`\`\`
`;
