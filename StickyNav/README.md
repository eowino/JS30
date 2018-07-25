## What did I learn

[Demo](https://eowino.github.io/JS30/StickyNav/)

### General
The approach of adding a `className` to the `<body>` when the conditions for an element to be sticky
have been met such that you can style other elements in accordance to that. This seems to be a better
approach that adding a 'sticky' `className` to individual elements.

For sticky nav use cases, remember to offset the height of the nav by adding a padding to the body `===` to the height of the nav.

i.e. `document.body.style.paddingTop = nav.offsetHeight + 'px'`

### Animation
The `width` and `height` of an `HTMLElement` can't be animated. Use the `max-height` and `max-width` properties for transitions.

### 🍒  on top
Set the initial scale of the `body` to `transform: scale(0.98)` (or equivalent), and then change it to `transform: scale(1)` when the nav
is sticky for a nice effect.

side-note: could use debouncing to ensure the scroll function doesn't fire so often.