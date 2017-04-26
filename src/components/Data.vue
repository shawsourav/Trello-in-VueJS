{
group: "name",
sort: true,  // sorting inside list
delay: 0, // time in milliseconds to define when the sorting should start
disabled: false, // Disables the sortable if set to true.
store: null,  // @see Store
animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
handle: ".my-handle",  // Drag handle selector within list items
filter: ".ignore-elements",  // Selectors that do not lead to dragging (String or Function)
preventOnFilter: true, // Call `event.preventDefault()` when triggered `filter`
draggable: ".item",  // Specifies which items inside the element should be draggable
ghostClass: "sortable-ghost",  // Class name for the drop placeholder
chosenClass: "sortable-chosen",  // Class name for the chosen item
dragClass: "sortable-drag",  // Class name for the dragging item
dataIdAttr: 'data-id',

forceFallback: false,  // ignore the HTML5 DnD behaviour and force the fallback to kick in

fallbackClass: "sortable-fallback",  // Class name for the cloned DOM Element when using forceFallback
fallbackOnBody: false,  // Appends the cloned DOM Element into the Document's Body
fallbackTolerance: 0, // Specify in pixels how far the mouse should move before it's considered as a drag.

scroll: true, // or HTMLElement
scrollFn: function(offsetX, offsetY, originalEvent) { ... }, // if you have custom scrollbar scrollFn may be used for autoscrolling
scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
scrollSpeed: 10, // px

setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
},

// Element is chosen
onChoose: function (/**Event*/evt) {
evt.oldIndex;  // element index within parent
}
