import { createContext, useContext } from 'react';
import { useActiveId } from '../lib/hooks';

type ActiveIdContextProps = {
  activeId: number | null;
};
const ActiveIdContext = createContext<ActiveIdContextProps>(null);

export function ActiveIdContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const activeId = useActiveId();
  return (
    <ActiveIdContext.Provider value={{ activeId }}>
      {children}
    </ActiveIdContext.Provider>
  );
}

export function useActiveIdContext() {
  const context = useContext(ActiveIdContext);
  if (!context) {
    throw Error(`ActiveIdContext shouldn't be null`);
  }
  return context;
}
