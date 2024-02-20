import { useEffect, useRef } from 'react';

const scrollToTop = () => {
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return scrollRef;
};

export default scrollToTop;