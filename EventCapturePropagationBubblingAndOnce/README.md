# Event Capture, Propagation, Bubbling and Once

## What did I learn

[Demo](https://eowino.github.io/JS30/EventCapturePropagationBubblingAndOnce/)

### Event capturing
Using emmet notation, imagine a structure like so: `html>body>.parent>.child>.grand-child`.

On click on an element, a modern browser will capture that event. The event will ripple down.
The browser will start at the top of the tree i.e. `html` and traverse down to the element that you clicked on while capturing the
events at each ancestor.

*Top-Down*. The events haven't fired yet, they have just been captured.

### Event bubbling
The browser then starts at the bottom and the event starts to bubble up, triggering the events as its moves along. 
This can be illustrated as follows. With a structure like so `.parent>.child>.grand-child`, where all these classes have a click listener
that logs out the `className` of the element being cliked on, the order of the logged out names will be in reverse order i.e. starting
with `.grand-child`; 

### capture
Setting `capture: true` means the events will be fired as they are captured (on the way down). 
Using the example above, if the `.grand-child` is clicked on the logged out names will be `.parent` down to `.grand-child`.

### e.stopPropagation
Stop bubbling. Will not trigger the events on the parents on the way up.

### once
fires once and unbinds the listener from the element. Useful in scenarios such as checkout button in e-commerce;