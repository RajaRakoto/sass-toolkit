export const extension = `
---

### 📌 Extension (VSCode)

**Plum** simplifies its utilization through a dedicated [VSCode extension](https://github.com/RajaRakoto/plum-extension), encompassing a variety of code snippets. These snippets facilitate swift code generation for invoking mixins, functions, modules, frameworks, and more ...

<img src="https://rajarakoto.github.io/github-docs/plum/plum-extension-demo.gif" width="800">

**Usage**: You can install it by typing "plum" in the extension tab of your IDE

**Prefix**: The extension of **Plum** includes a particular "prefix" to better organize and classify its snippets:

\`\`\`scss
plum-[category]-[name...] // e.g: plum-modules-oc-grape
\`\`\`

\`[category]\`: These keywords serve as quick references for identifying the appropriate snippets to utilize. Here are the examples of categories (you can see the full list in the extension):

- import
- modules
- specs
- animation
- box
- effect
- input
- image
- position
...

\`[name]\`: This designation denotes a mixin, function, module, or framework name. It acts as a quick identifier for the specific code snippet you wish to employ. For example, if you're opting for the "blue" color scheme, simply typing "plum-blue" will prompt the extension to suggest "plum-modules-oc-blue" for your selection.
`;
