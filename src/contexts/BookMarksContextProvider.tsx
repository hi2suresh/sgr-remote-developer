import { createContext } from 'react';
import { useLocalStorage } from '../lib/hooks';

type BookMarksContextProps = {
  bookMarkIds: number[];
  handleBookMarkToggle: (id: number) => void;
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

  const handleBookMarkToggle = (id: number) => {
    if (bookMarkIds.includes(id)) {
      setBookMarkIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookMarkIds((prev) => [...prev, id]);
    }
  };

  return (
    <BookMarksContext.Provider value={{ bookMarkIds, handleBookMarkToggle }}>
      {children}
    </BookMarksContext.Provider>
  );
}
