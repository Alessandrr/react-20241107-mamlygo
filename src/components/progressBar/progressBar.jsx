import { useEffect, useState } from 'react';
import styles from './progressBar.module.css';

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
      className={styles.progressBar}
      style={{
        width: `${progress}%`,
      }}
    ></div>
  );
};
