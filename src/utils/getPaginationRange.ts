export default function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount: number = 1,
): (number | "ellipsis")[] {
  const range: (number | "ellipsis")[] = [];

  // Always show the first page
  range.push(1);

  // Add ellipsis if there's a gap between first and left sibling
  if (currentPage > siblingCount + 2) {
    range.push("ellipsis");
  }

  // Pages around the current page
  const leftSibling = Math.max(currentPage - siblingCount, 2);
  const rightSibling = Math.min(currentPage + siblingCount, totalPages - 1);

  for (let i = leftSibling; i <= rightSibling; i++) {
    range.push(i);
  }

  // Add ellipsis if there's a gap between right sibling and last page
  if (currentPage < totalPages - siblingCount - 1) {
    range.push("ellipsis");
  }

  // Always show the last page
  if (totalPages > 1) {
    range.push(totalPages);
  }

  return range;
}
