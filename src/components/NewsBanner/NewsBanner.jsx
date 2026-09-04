import { Image } from '../Image/Image';
import styles from './styles.module.css';

export const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h1 className={styles.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, modi
        provident fuga non blanditiis aperiam eos voluptatibus cumque eum nihil!
      </h1>
      {/* {item.title} */}
      <p className={styles.author}>by Denis Globa</p>
      {/* {item.author} */}
    </div>
  );
};
