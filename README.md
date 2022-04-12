<div align="center">

# ᔕᗩᔕᔕ-EO

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/for-you.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/open-source.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/for-dago.svg?raw=true)](https://forthebadge.com) [![forthebadge](https://github.com/RajaRakoto/github-docs/blob/master/badge/build-by.svg?raw=true)](https://forthebadge.com)

![Sass](https://img.shields.io/badge/-Sass-777?style=flat&logo=sass&logoColor=ffffff&labelColor=%23CC6699) ![JSON](https://img.shields.io/badge/-JSON-777?style=flat&logo=JSON&logoColor=777&labelColor=ffffff) ![Git](https://img.shields.io/badge/-Git-777?style=flat&logo=git&logoColor=F05032&labelColor=ffffff) ![Gitub](https://img.shields.io/badge/-Gitub-777?style=flat&logo=github&logoColor=777&labelColor=ffffff) ![NPM](https://img.shields.io/badge/-NPM-777?style=flat&logo=npm&labelColor=ffffff) ![Grunt](https://img.shields.io/badge/-Grunt-777?style=flat&logo=grunt&logoColor=orangered&labelColor=ffffff) <br>

| Table des matières             |
| :----------------------------- |
| [Installation](#-installation) |
| [Sassdoc](#-sassdoc)           |
| [Variables](#-variables)       |
| [Libraries](#-libraries)       |
| [Frameworks](#-frameworks)     |

</div>

### `📌 Installation`

Executer la commande ci-dessous pour installer **sass-eo**

```bash
git clone --depth 1 https://github.com/RajaRakoto/sass-eo.git
```

<hr>
<br>

### `📌 Sassdoc`

**sass-eo** utilise `sassdoc` pour créer sa `documentation` en un clin d'œil en utilisant un `syntaxe particulier`

Executez la commande ci-dessous dans le repertoire racine de **sass-eo** pour `generer & mettre a jour` la documentation localement

```bash
sassdoc .
```

Vous pouvez maintenant consulter la documentation dans **sassdoc/index.html**

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/sassdoc-sc.png?raw=true" width="700">
</div>
<br>

[En savoir plus sur sassdoc](http://sassdoc.com/getting-started/)

<hr>
<br>

### `📌 Variables`

**Sassdoc** ne permet pas de generer la documentaiton concernant `les variables` contenant dans certains mixins, c'est pour cela qu'on les traites dans cette section

##### `📍colors`

Voici les `echantillons de couleur` pret a etre utilisE en juste appelant le nom de la `variable` correspondante:

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/4web/colors.png?raw=true" width="500"><br>
</div>

<hr>
<br>

### `📌 Libraries`

Voici les listes des `bibliotheques` integrE dans **sass-eo**

> **NOTE**: Toute les documentations reliE aux bibliotheques se trouvent dans le dossier `./docs`

##### `📍Hamburgers`

`Hamburgers` est une collection de savoureuses icônes de hamburger animées par CSS. La source est également incluse en tant que bibliothèque SASS modulable et personnalisable, alors préparez votre propre hamburger.

<div align="center">
<img src="http://i.imgur.com/t7cUjDu.gif" width="700">
</div>
<br>

Voici la liste des `classes` de type Hamburger que vous pouvez choisir:

```
  hamburger--3dx
  hamburger--3dx-r
  hamburger--3dy
  hamburger--3dy-r
  hamburger--3dxy
  hamburger--3dxy-r
  hamburger--arrow
  hamburger--arrow-r
  hamburger--arrowalt
  hamburger--arrowalt-r
  hamburger--arrowturn
  hamburger--arrowturn-r
  hamburger--boring
  hamburger--collapse
  hamburger--collapse-r
  hamburger--elastic
  hamburger--elastic-r
  hamburger--emphatic
  hamburger--emphatic-r
  hamburger--minus
  hamburger--slider
  hamburger--slider-r
  hamburger--spin
  hamburger--spin-r
  hamburger--spring
  hamburger--spring-r
  hamburger--stand
  hamburger--stand-r
  hamburger--squeeze
  hamburger--vortex
  hamburger--vortex-r
```

<br>

> **NOTE**: `-r` sont des variantes inverse (par exemple `hamburger--spin` dans le sens des aiguilles d'une montre tandis que `hamburger--spin-r` dans le sens anti-horaire.

<br>

**Usage:**

**1.** Importer le fichier `sass-eo-libraries` - decommentez la ligne correspondante `@import './hamburgers'`

**2.** Decommentez le type d'hamburger a utiliser dans le fichier `./libs/_hamburgers.scss`

**3.** Ajoutez la class correspondante dans votre page HTML:

```html
<!-- Déclencher l'état actif en ajoutant le nom de la classe `is-active`, il suffit de l'enlever pour l'etat inactif -->
<button class="hamburger hamburger--collapse is-active" type="button">
	<span class="hamburger-box">
		<span class="hamburger-inner"></span>
	</span>
</button>
```

**4.** Étant donné que le nom de la classe devrait être basculé via JavaScript:

```js
var hamburger = document.querySelector('.hamburger');
// On click
hamburger.addEventListener('click', function () {
	// Toggle class "is-active"
	hamburger.classList.toggle('is-active');
});
```

**5.** Vous pouvez modifier les paramètres par défaut de votre hamburger - trouvés dans `./libs/_hamburgers.scss`;

<br>

##### `📍Loaders`

Les `loaders` sont des collections de mixins servant a ajouter un effet de chargement pour chaque element

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/loader.gif?raw=true" width="700">
</div>
<br>

> **NOTE**: Certains loader ne contiennent qu'une seule couleur ,i-e 1 seul argument pour le mixin (Exemple -> `@include loader-10(dodgerblue)`)

<br>

**Usage:**

```scss
// SCSS
#my-loader {
	//utilisation de loader-1 avec 2 couleurs comme argument (primary, secondary)
	@include loader-1(gold, orangered);
}
```

```html
<!-- HTML - Juste apres la balise ouvrante <body> -->
<div id="my-loader"></div>
```

```js
// Javascript - ce script permet de lancer un loder portant l'id "my-loader" comme chargement de la page web
const loader = document.getElementById('my-loader');
window.addEventListener('load', () => {
	loader.style.display = 'none';
});
```

<br>

##### `📍Magic`

`Magic` est un bibliotheque d'animation CSS integrE dans sass-eo, il suffit d'appeler un mixin magic pour animer un element

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/magic.gif?raw=true" width="700">
</div>
<br>

**Usage:**

```scss
// SCSS - appelez le mixin magic a l'interieur d'un selecteur
.cards {
	//L'argument de chaque mixin magic correspond a son "animation-delay" exprimE en seconde
	@include magic-boingInUp(1s);
}
```

<hr>
<br>

### `📌 Frameworks`

<div align="center">
<img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/bootstrap.png?raw=true" width="100"><img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/semantic.png?raw=true" width="100"><img src="https://github.com/RajaRakoto/github-docs/blob/master/sass-eo/milligram.png?raw=true" width="130">
</div>
<br>

- **Bootstrap:** sass-eo integre la code source SASS de bootstrap 5 afin d'utiliser partiellement ses fonctionnalitEs -> https://getbootstrap.com/docs/5.0/getting-started/introduction/

<br>

- **Semantic-ui:** je trouve personnellement ce framework la meilleure alternative à BT5, sematic-ui facilite la création de mises en page responsives, l'un des avantages de ce framework est qu'il intègre semantic-ui-react, une collection de composants React de Semantic-ui
  - semantic-ui -> https://semantic-ui.com/introduction/getting-started.html
  - semantic-ui-react -> https://react.semantic-ui.com/

<br>

- **Milligrid:** Milligrid est un system de grille CSS flexbox configurable et facile a apprendre basée sur Milligram -> http://bencoveney.github.io/Milligrid/
