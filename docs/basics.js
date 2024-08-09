export const basics = `
---

### 📌 Basics

Plum's main attributes are consolidated through a mix of diverse mixins and useful functions that users can conveniently access offline via the [plum CLI](https://github.com/RajaRakoto/plum-cli), facilitating easy access to the official documentation.

**Here are some simple examples of different ways to use Plum (you can refer to all use cases in the plum-cli documentation):**
\`\`\`scss
@import '@raja-rakoto/plum/plum';

@include minireset();
@include normalize();
@include antialias();
@include typo-fontface(
  'Quicksand-regular',
  './src/assets/fonts/Quicksand-regular.ttf'
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
  @include video-responsive('4/3');
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
\`\`\`
`;
