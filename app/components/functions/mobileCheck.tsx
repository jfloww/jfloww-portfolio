import { useState, useEffect } from 'react';

export const useMobileCheck = (): boolean => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = simpleMobileCheck();
      setMobile(isMobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return mobile;
};

const simpleMobileCheck = (): boolean => {
  return typeof window !== 'undefined' && window.innerWidth <= 768;
};
