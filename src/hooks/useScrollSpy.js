import { useEffect, useState } from 'react';

export function useScrollSpy(ids, { offset = 120 } = {}) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    const handle = () => {
      const scrollY = window.scrollY + offset;
      let current = ids[0] ?? null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveId(current);
    };
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, [ids, offset]);

  return activeId;
}
