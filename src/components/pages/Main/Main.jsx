import { useEffect, useState } from 'react';
import { NewsBanner } from '../../NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';
import { NewsList } from '../../NewsList/NewsList';

export const Main = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const respNews = await getNews();
        setNews(respNews.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}

      <NewsList item={news} />
    </main>
  );
};
