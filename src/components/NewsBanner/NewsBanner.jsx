import { Image } from '../Image/Image';
import styles from './styles.module.css';

export const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h1 className={styles.title}>{item.title}</h1>

      <p className={styles.author}>by {item.author}</p>
    </div>
  );
};
