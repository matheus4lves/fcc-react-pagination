import { useMemo } from "react";

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

export const DOTS = "...";

export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /* 
      Case 1: If the number of pages is less than the page numbers we want to show
      in our paginationComponent, we return the range [1..totalPageCount]
     */
    if (totalPageNumbers >= totalPageCount) return range(1, totalCount);

    /* 
      Calculate left and right sibling index and make sure they are within range 1 and the
      totalPageCount
     */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    /* 
      We do not show dots when there is just one page number to be inserted between
      the extremes of sibling and the page limits i. e., 1 and totalPageCount.
      Hence we're using leftSiblingIndex > 2 and righSiblingIndex < totalPageCount -2.
     */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // Case 2: No left dots to show, but right dots to be shown
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }

    // Case 3: No right dots to show, but left dots to be shown
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS, ...rightRange];
    }

    // Case 4: Both left and right dots to be shown
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
