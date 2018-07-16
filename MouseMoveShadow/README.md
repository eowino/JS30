## What did I learn

[Demo](https://eowino.github.io/JS30/MouseMoveShadow/)

## Event delegation with onmousemove
Given a `mousemove` listener is attached to a `DOM` element and you mouseover
one of its children, the x and y properties on the `event` object will be
of the child in question. 

Use `offsetX` and `offsetY` to get cursor position. However, when you have nested
elements, a bit of math will be necessary to obtain expected results.