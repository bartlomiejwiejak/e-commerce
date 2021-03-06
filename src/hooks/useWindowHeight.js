import { useEffect } from 'react';

const useWindowHeight = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const listener = window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    })
    return () => window.removeEventListener('resize', listener);
  }, [])
}

export default useWindowHeight;