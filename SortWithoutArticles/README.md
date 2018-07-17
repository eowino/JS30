## What did I learn

[Demo](https://eowino.github.io/JS30/SortWithoutArticles/)

### Word of note with `element.innerHTML`
When you try to set something to innerHTML that's not a string, the `toString()` method will be called on it.
For example, if you try `element.innerHTML = someArray`, `someArray` will be turned into a string.
Additonally, multiple values will be coma seperated.

### RegEx to match first characters
The RegEx used to filter out the first characters