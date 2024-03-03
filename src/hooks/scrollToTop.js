import { useEffect, useRef } from 'react';

const scrollToTop = () => {
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: '100000', behavior: 'smooth' });
    }
  }, []);

  return scrollRef;
};

export default scrollToTop;