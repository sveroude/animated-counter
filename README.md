# Animated Counter

## Functionality

A simple counter effect, achieved by spinning digits using CSS animations.

## Usage

Uses [Nunjucks](https://mozilla.github.io/nunjucks/) for reusability.
Each digit is imported as a macro, taking the digit the animation should
end at as its argument.

Import the macro:

```html
{% import "macros/digit/digit.html" as digit %}
```

```html
{{ digit.animate(8) }}
```

### `.animate()`

Creates an animated digit

index | parameter | type | description
--- | --- | --- | ---
0 | n | number | specifies the digit the animation should end at