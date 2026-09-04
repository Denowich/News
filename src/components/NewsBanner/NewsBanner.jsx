import { Image } from '../Image/Image';
import styles from './styles.module.css';

export const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h1 className={styles.title}>
        "Dublin Archbishop says ‘young people have all but given up hope of
        having a home of their own’"
      </h1>
      {/* {item.title} */}
      <p className={styles.author}>by Denis Globa</p>
      {/* {item.author} */}
    </div>
  );
};
