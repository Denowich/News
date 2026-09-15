import styles from './styles.module.css';

export const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>

      <div className={styles.info}>
        <h1 className={styles.title}>" - No, this is a stupid dog"</h1>
        <p className={styles.author}>by Vika Globa</p>
      </div>
    </li>
  );
};
