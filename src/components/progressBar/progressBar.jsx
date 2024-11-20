import { useEffect, useState } from 'react';

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    setProgress(scrollPercentage);
  };

  useEffect(() => {
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
