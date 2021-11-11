export const range = (start, end) => {
  let length = end - start + 1;
  /* 
    Create an array of certain length and set the elements within it from
    start value to end value.

    Note: The _ has no special meaning here. The documentation for from()
    provide different syntaxes that can be used. In this case, we're using
    the following: Array.from(arrayLike, (element, index) => { ... } ),
    where the _ replaces "element" in the arrow function.

    More on that in the following link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
   */
  return Array.from({ length }, (_, idx) => idx + start);
};
