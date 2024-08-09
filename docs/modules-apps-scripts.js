export const modules_apps_scripts = `
---

### 📌 Modules & Applications & Scripts

Here are the lists of third-party modules, applications, and scripts that you can use with **Plum**:

> The **"module"** tag signifies libraries or frameworks that can be imported into your SASS file using the @import directive. Meanwhile, **"app"** tag refer to a collection of tools that enable you to access documentation or generate code. Lastly, the **"script"** tag indicates that it requires a JavaScript file to be functional. All are available on [plum CLI](https://github.com/RajaRakoto/plum-cli).

**\`Animate\`** (module + app): A collection of CSS animations to make your website more attractive !

\`\`\`scss
@import '@raja-rakoto/plum/modules/animate';
.bounce-in-left {
  @include animate-bounceInLeft($duration: second, $delay: second);
}
\`\`\`

**\`Magic\`** (module + app): Magic CSS are a set of simple animations to include in your web or app project's.

\`\`\`scss
@import '@raja-rakoto/plum/modules/magic';
.open-up-left {
  @include magic-openUpLeft($duration: second, $delay: second);
}
\`\`\`

**\`Buttons2\`** (module + app + script): A highly customizable production ready mobile web and desktop css button library.

\`\`\`scss
@import '@raja-rakoto/plum/modules/buttons2';
@include buttons2-borderless();
\`\`\`

**\`Hover2\`** (module + app): A collection of CSS3 powered hover effects to be applied to links, buttons, logos, SVG, featured images and so on. Easily apply to your own elements, modify or just use for inspiration.

\`\`\`scss
@import '@raja-rakoto/plum/modules/hover2';
@include hover2-2d-transitions-shrink();
\`\`\`

**\`Open color | oc-scheme\`** (module + app): Open-source color scheme optimized for UI like font, background, border and more ...

\`\`\`scss
@import '@raja-rakoto/plum/modules/open-color';
h1 {
  color: $oc-green-5;
}
\`\`\`

**\`Fontawesome\`** (module): The web's most popular icon set and toolkit.

\`\`\`scss
@import '@raja-rakoto/plum/modules/fontawesome-free';
\`\`\`

**\`Bootstrap\`** (module + script): **Plum** integrates the sass source code of Bootstrap 5 in order to partially use its functionalities. You have 4 choices:

\`\`\`scss
@import '@raja-rakoto/plum/modules/bootstrap';
@import '@raja-rakoto/plum/modules/bootstrap-grid';
@import '@raja-rakoto/plum/modules/bootstrap-reboot';
@import '@raja-rakoto/plum/modules/bootstrap-utilities';
\`\`\`

**\`Flex\`** (app): Generate flexbox CSS code to make dynamic layouts !

**\`Grid\`** (app): Generate basic CSS Grid code to make dynamic layouts !

**\`Buttons\`** (app) : Generate stylish buttons in css !

**\`Shadows\`** (app): Collection of shadow variants for your boxes !
`;
