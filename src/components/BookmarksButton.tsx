import { TriangleDownIcon } from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';
import BookmarksPopover from './BookmarksPopover';
import { useOnClickOutside } from '../lib/hooks';

export default function BookmarksButton() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  useOnClickOutside([buttonRef, popoverRef], () => setIsOpen(false));

  return (
    <section>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bookmarks-btn"
        ref={buttonRef}
      >
        Bookmarks <TriangleDownIcon />
      </button>
      {isOpen && <BookmarksPopover ref={popoverRef} />}
    </section>
  );
}
