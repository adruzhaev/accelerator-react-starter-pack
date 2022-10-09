import { useEffect, RefObject } from 'react';

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: () => void,
) => {
  useEffect(() => {
    const handleMouseDown = (event: Event) => {
      if (!ref.current || ref.current.contains((event?.target as Node))) {
        return;
      }

      handler();
    };

    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, [ref, handler]);
};
