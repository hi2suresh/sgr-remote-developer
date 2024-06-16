import { useBookMarkContext } from '../contexts/BookMarksContextProvider';
import JobList from './JobList';

export default function BookmarksPopover() {
  const { bookMarkedJobItems, isLoading } = useBookMarkContext();
  return (
    <div className="bookmarks-popover">
      <JobList jobItems={bookMarkedJobItems} isLoading={isLoading} />
    </div>
  );
}
