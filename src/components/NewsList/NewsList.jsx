import styles from './styles.module.css';

export const NewsList = () => {
  const news = [
    {
      id: 1,
      title:
        'Meloni sets a record, leading Italy\u2019s longest-serving government since WWII',
    },
    {
      id: 2,
      title:
        'Germany’s far right AfD eyes election breakthrough in Saxony-Anhalt',
    },
    {
      id: 3,
      title:
        "The return of Washington's negotiators raises hope of progress towards a settlement to end Moscow's war on Ukraine.",
    },
    {
      id: 4,
      title: 'US envoys headed to Russia and Ukraine to relaunch mediation',
    },
    {
      id: 5,
      title:
        "The return of Washington's negotiators raises hope of progress towards a settlement to end Moscow's war on Ukraine.",
    },
    {
      id: 6,
      title: 'US envoys headed to Russia and Ukraine to relaunch mediation',
    },
  ];

  return (
    <div>
      <ul className={styles.list}>
        {news.map((item) => {
          return <li key={item.id}>-- {item.title}</li>;
        })}
      </ul>
    </div>
  );
};
