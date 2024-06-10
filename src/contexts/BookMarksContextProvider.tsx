import { useState, createContext } from 'react';
export const BookMarksContext = createContext(null);
export default function BookMarksContextProvider({ children }) {
  const [bookMarkIds, setBookMarkIds] = useState<number[]>([]);
  console.log(bookMarkIds);
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
