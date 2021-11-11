import { useMemo } from "react";
import range from "./range";

export const usePagination = ({ totalCount, pageSize, siblingCount = 1, currentPage }) => {
  const paginationRange = useMemo(() => {}, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
