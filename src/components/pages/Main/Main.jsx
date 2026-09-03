import { useEffect } from 'react';
import { NewsBanner } from '../../NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';

export const Main = () => {
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const news = await getNews();
        console.log(news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Main</h1>
      <NewsBanner />
    </main>
  );
};
