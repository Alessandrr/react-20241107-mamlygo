import { useEffect, useState } from 'react';

const getScrollProgress = () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  return (scrollTop / scrollHeight) * 100;
};

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setProgress(getScrollProgress());
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="progressBar"
      style={{
        width: `${progress}%`,
        position: 'fixed',
        top: 0,
        height: '0.5rem',
        backgroundColor: 'steelblue',
      }}
    ></div>
  );
};
