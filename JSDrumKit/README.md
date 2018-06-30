## What Did I Learn

[Demo](https://eowino.github.io/JS30/JSDrumKit/)

### audio.currentTime = 0
Invoking the `play()` method on an `HTMLAudioElement` that's already playing will not play it again.

Solution: set the `HTMLAudioElement` element's `currentTime` prop to `0` i.e. `audio.currentTime = 0` to rewind the audio to the start. Therefore, if you repeatedly invoke the `play()` method in succession, 
the audio will simply be rewound to the start.

### transitionend event
`transitionend` event - as the name suggests, this is an event that is fired when a CSS transition
has completed.

see: https://mdn.io/transitionend

This is a better approach compared to using `setTimeout` to fire of an action when a CSS animation
has completed. Why? The CSS animation duration does not need to be explictly defined as an argument
to `setTimeout`, thus removing the potential of the animation duration in CSS being out of sync with JS.