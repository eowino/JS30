## What did I learn

[Demo](https://eowino.github.io/JS30/CSSJSClock/)

### CSS transform-origin

By default `transform-origin` is set to `50%`. Setting this value to `100%` on the x-axis will move
the pivot point to the edge of the right hand side of the element being transformed.

### CSS: transition-timing-function

Allows you to establish an acceleration curve so that the speed of the transition can vary 
over its duration.

see: https://mdn.io/transition-timing-function

In this example, `transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);` was used to create
the overshoot effect of the clock hands as they rotate when the time ticks.