import { forwardRef } from 'react';
import { useBookMarkContext } from '../contexts/BookMarksContextProvider';
import JobList from './JobList';
import { createPortal } from 'react-dom';

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
  const { bookMarkedJobItems, isLoading } = useBookMarkContext();
  return createPortal(
    <div ref={ref} className="bookmarks-popover">
      <JobList jobItems={bookMarkedJobItems} isLoading={isLoading} />
    </div>,
    document.body
  );
});

export default BookmarksPopover;
