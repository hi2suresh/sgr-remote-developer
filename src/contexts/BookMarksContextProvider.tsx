import { createContext, useContext } from 'react';
import { useJobItems, useLocalStorage } from '../lib/hooks';
import { JobItemExpanded } from '../lib/types';

type BookMarksContextProps = {
  bookMarkIds: number[];
  handleBookMarkToggle: (id: number) => void;
  bookMarkedJobItems: JobItemExpanded[];
  isLoading: boolean;
};
export const BookMarksContext = createContext<BookMarksContextProps | null>(
  null
);

export default function BookMarksContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bookMarkIds, setBookMarkIds] = useLocalStorage<number[]>(
    'bookMarkIds',
    []
  );
  const { jobItems: bookMarkedJobItems, isLoading } = useJobItems(bookMarkIds);
  const handleBookMarkToggle = (id: number) => {
    if (bookMarkIds.includes(id)) {
      setBookMarkIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookMarkIds((prev) => [...prev, id]);
    }
  };

  return (
    <BookMarksContext.Provider
      value={{
        bookMarkIds,
        handleBookMarkToggle,
        bookMarkedJobItems,
        isLoading,
      }}
    >
      {children}
    </BookMarksContext.Provider>
  );
}

export function useBookMarkContext() {
  const result = useContext(BookMarksContext);
  if (!result) throw Error(`Bookmark context is null`);
  return result;
}
