import styles from './styles.module.css';

export const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>

      <div className={styles.info}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.author}>by {item.author}</p>
      </div>
    </li>
  );
};
