# x.js
**My** kind of dom library

## concepts
- changes will apply to all dom elements that match the selector or to the one at the index ```index``` if provided (and available on the specific function)
- you can chain functions that don't return anything (-> marks return value)
- if you don't want to pass an optional argument just don't pass it (DO NOT pass null or undefined)

## functions

### .addClass ```(newClass, index)```
adds class ```newClass```

### .append ```(newHtml, index)```
appends ```newHtml``` to the end of the elements

### .css ```(key, value, index) or (obj, index)```
sets the ```key``` css property to value OR sets all key value pairs in obj as css key value pairs

### .each ```customFunction, index```
iterates over the elements and passes them as an js dom element obj (as returned by document.querySelector) to the function as the first argument

### .html ```(newHtml, index) -> innerHTML``` (only returns when no newHtml is provided)
sets the ```innerHTML``` of the element(s) or responds with the ```innerHTML``` if no ```newHtml``` is provided

### .removeAllClasses ```(index)```
removes all classes of the element(s)

### .removeClass ```(oldClass, index)```
removes the class ```oldClass``` form the element(s)