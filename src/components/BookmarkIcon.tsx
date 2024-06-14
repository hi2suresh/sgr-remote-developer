import { BookmarkFilledIcon } from '@radix-ui/react-icons';
import { useContext } from 'react';
import { BookMarksContext } from '../contexts/BookMarksContextProvider';
type BookMarkIconProps = {
  id: number;
};
export default function BookmarkIcon({ id }: BookMarkIconProps) {
  const { bookMarkIds, handleBookMarkToggle } = useContext(BookMarksContext);
  return (
    <button
      onClick={(e) => {
        handleBookMarkToggle(id);
        e.stopPropagation();
        e.preventDefault();
      }}
      className="bookmark-btn"
    >
      <BookmarkFilledIcon
        className={`${bookMarkIds.includes(id) ? 'filled' : ''} `}
      />
    </button>
  );
}
