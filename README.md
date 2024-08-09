<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/plum/plum-gray.png?raw=true" width=512>
</div>

# plum 🩷

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com)

![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff)

**Accelerate your website customization process with PLUM — an efficient mixins toolset driven by SASS. Easily generate uniform, adaptable CSS stylesheets, regardless of project magnitude. Seamlessly incorporate third-party modules like animate, buttons2, flex, grid, hover2, magic, buttons, open-color, shadows ... Enjoy effortless integration with popular CSS frameworks such as Bootstrap for enhanced versatility.**

> Additional tools such as [Plum CLI](https://github.com/RajaRakoto/plum-cli) and [Plum Extension](https://github.com/RajaRakoto/plum-extension) for VSCode are utilized to enhance the use of **Plum** package.

---

### 📌 Get started

You can use [Plum CLI](https://github.com/RajaRakoto/plum-cli) to install **Plum** package in your project:

```bash
npm install -g @raja-rakoto/plum-cli
```

Execute the following command to start CLI:

```bash
plum-cli
```

<img src="https://github.com/RajaRakoto/github-docs/blob/master/plum/plum-cli-demo.gif?raw=true" width="800">

If you use [sass](https://www.npmjs.com/package/sass) package for compiling your SCSS files, you can incorporate the following command in your package.json file to enable SCSS file monitoring:

```json
"scripts": {
  "watch:sass": "sass --watch style.scss:style.css --load-path=node_modules --style=compressed"
},
```

---

### 📌 Basics

Plum's main attributes are consolidated through a mix of diverse mixins and useful functions that users can conveniently access offline via the [plum CLI](https://github.com/RajaRakoto/plum-cli), facilitating easy access to the official documentation.

**Here are some simple examples of different ways to use Plum (you can refer to all use cases in the plum-cli documentation):**

```scss
@import "@raja-rakoto/plum/plum";

@include minireset();
@include normalize();
@include antialias();
@include typo-fontface(
	"Quicksand-regular",
	"./src/assets/fonts/Quicksand-regular.ttf"
);

.box {
	width: __convertToRem(100px);
	height: __convertToEm(150px);
	color: __color-pastel(blue);
}

.zoom-in {
	@include animation-zoom($in-out: in);
}

.box-debug {
	@include box-debugging(
		$colors: red,
		$size: 3px,
		$bg-color: false,
		$status: true
	);
}

.opacity-50 {
	@include effect-opacity($percent: 50%);
}

img {
	@include image-responsive($height: auto);
}

.video-element {
	@include video-responsive("4/3");
}

@include input-all(hover) {
	background-color: orangered;
}

@include button-all {
	background-color: teal;
	color: white;
}

.containing-element {
	@include position-set(sticky, null 30px null 30px);
}

.containing-element {
	@include spacing-padding-size(small);
}

.parent-element {
	@include clearfix;
}

.parent-element {
	@include columnize(4);
	.item {
		background-color: silver;
	}
}

.element {
	@include flex-box();
}

.element {
	@include flex-wrap(wrap-reverse);
}

.containing-element {
	@include breakpoint(only, 1200px) {
		background-color: teal;
	}
}

.main-container {
	@include adaptive();
}

.wrapper {
	.item {
		@include except(first) {
			background-color: dodgerblue;
			color: #eee;
		}
	}
}

.wrapper {
	.item {
		@include only(last) {
			background-color: dodgerblue;
			color: #eee;
		}
	}
}

.wrapper {
	@include overflow-wrap();
}

@include loadify(init);

img {
	@include loadify(0.5s); // note: you must initialize the loadify before
}

.containing-element {
	@include mobile(iPhoneX) {
		background-color: teal;
	}
}

.containing-element {
	@include tablet(iPadPro) {
		background-color: teal;
	}
}

.containing-element {
	@include resizable();
}

.containing-element {
	@include sizer(400px);
}

.element {
	@include trbl(55px, null, null, 15px);
}
```

---

### 📌 Extension (VSCode)

**Plum** simplifies its utilization through a dedicated [VSCode extension](https://github.com/RajaRakoto/plum-extension), encompassing a variety of code snippets. These snippets facilitate swift code generation for invoking mixins, functions, modules, frameworks, and more ...

<img src="https://github.com/RajaRakoto/github-docs/blob/master/plum/plum-extension-demo.gif?raw=true" width="800">

**Usage**: You can install it by typing "plum" in the extension tab of your IDE

**Prefix**: The extension of **Plum** includes a particular "prefix" to better organize and classify its snippets:

```scss
plum-[category]-[name...] // e.g: plum-modules-oc-grape
```

`[category]`: These keywords serve as quick references for identifying the appropriate snippets to utilize. Here are the examples of categories (you can see the full list in the extension):

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

`[name]`: This designation denotes a mixin, function, module, or framework name. It acts as a quick identifier for the specific code snippet you wish to employ. For example, if you're opting for the "blue" color scheme, simply typing "plum-blue" will prompt the extension to suggest "plum-modules-oc-blue" for your selection.

---

### 📌 Modules & Applications & Scripts

Here are the lists of third-party modules, applications, and scripts that you can use with **Plum**:

> The **"module"** tag signifies libraries or frameworks that can be imported into your SASS file using the @import directive. Meanwhile, **"app"** tag refer to a collection of tools that enable you to access documentation or generate code. Lastly, the **"script"** tag indicates that it requires a JavaScript file to be functional. All are available on [plum CLI](https://github.com/RajaRakoto/plum-cli).

**`Animate`** (module + app): A collection of CSS animations to make your website more attractive !

```scss
@import "@raja-rakoto/plum/modules/animate";
.bounce-in-left {
	@include animate-bounceInLeft($duration: second, $delay: second);
}
```

**`Magic`** (module + app): Magic CSS are a set of simple animations to include in your web or app project's.

```scss
@import "@raja-rakoto/plum/modules/magic";
.open-up-left {
	@include magic-openUpLeft($duration: second, $delay: second);
}
```

**`Buttons2`** (module + app + script): A highly customizable production ready mobile web and desktop css button library.

```scss
@import "@raja-rakoto/plum/modules/buttons2";
@include buttons2-borderless();
```

**`Hover2`** (module + app): A collection of CSS3 powered hover effects to be applied to links, buttons, logos, SVG, featured images and so on. Easily apply to your own elements, modify or just use for inspiration.

```scss
@import "@raja-rakoto/plum/modules/hover2";
@include hover2-2d-transitions-shrink();
```

**`Open color | oc-scheme`** (module + app): Open-source color scheme optimized for UI like font, background, border and more ...

```scss
@import "@raja-rakoto/plum/modules/open-color";
h1 {
	color: $oc-green-5;
}
```

**`Fontawesome`** (module): The web's most popular icon set and toolkit.

```scss
@import "@raja-rakoto/plum/modules/fontawesome-free";
```

**`Bootstrap`** (module + script): **Plum** integrates the sass source code of Bootstrap 5 in order to partially use its functionalities. You have 4 choices:

```scss
@import "@raja-rakoto/plum/modules/bootstrap";
@import "@raja-rakoto/plum/modules/bootstrap-grid";
@import "@raja-rakoto/plum/modules/bootstrap-reboot";
@import "@raja-rakoto/plum/modules/bootstrap-utilities";
```

**`Flex`** (app): Generate flexbox CSS code to make dynamic layouts !

**`Grid`** (app): Generate basic CSS Grid code to make dynamic layouts !

**`Buttons`** (app) : Generate stylish buttons in css !

**`Shadows`** (app): Collection of shadow variants for your boxes !

---

### 📌 NPM Scripts

**scripts (utils)**

- 📜 `script:global-docs` - Generate README.md for documentation
- 📜 `script:global-charset` - Adds the @charset "UTF-8" declaration at the beginning of all SCSS files in the project.
- 📜 `script:hover-comment` - Used to remove the first line of a SCSS file if it starts with a comment.

**Testing**

- 📜 `test` - Run the watched file for sass testing.

**Documentation**

- 📜 `documentation` - Generate offline docs with Sassdoc

**Linting and Formatting**

- 📜 `prettier` - Reformat source files with Prettier.
- 📜 `biome:start` - Starts the Biome daemon server. You can specify a custom configuration file path using the `--config-path` option.
- 📜 `biome:stop` - Stops the Biome daemon server.
- 📜 `biome:fix` - Runs a source code check and applies automatic fixes (linter & formatter) according to the defined rules.
- 📜 `biome:unsafe` - Works like `biome:fix`, but may apply more invasive or risky changes.

**Backup and Dependency Management**

- 📜 `backup` - Backup files with Grunt.
- 📜 `pkg-check` - Check useless dependencies with depcheck.
- 📜 `pkg-upgrade` - Upgrade outdated dependencies (interactive mode) with npm-check-updates.

**Versioning**

- 📜 `versioning` - Start ungit server.

**npm Commands**

- 📜 `npm-version:major` - Increments the major version number of your project using npm.
- 📜 `npm-version:minor` - Increments the minor version number of your project using npm.
- 📜 `npm-version:patch` - Increments the version patch number of your project using npm.
- 📜 `npm-publish` - Publish your npm package with public access.
- 📜 `npm-unpublish` - Forcefully unpublish the plum package from npm.
- 📜 `npm-reset:registry` - Delete the custom npm registry.
- 📜 `npm-check:registry` - Get the currently configured registry for npm.
- 📜 `npm-proxy-set:registry` - Set the npm registry to use a local proxy.
- 📜 `npm-proxy:start` - Start a Verdaccio server with a local npm proxy.
- 📜 `npm-login` - Login to a registry user account.
- 📜 `npm-proxy:publish` - Publish your npm package via the local proxy.
- 📜 `npm-proxy:unpublish` - Forcefully unpublish the plum package from the npm registry via the local proxy.
- 📜 `npm-proxy:republish` - Republish your npm package by first unpublishing it and then publishing it again via the local proxy.
