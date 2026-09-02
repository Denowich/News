import styles from './styles.module.css';

export const Image = ({ image }) => {
  return (
    <div className={styles.wrapper}>
      {image ? (
        <img image={image} alt='image' className={styles.image} />
      ) : null}
    </div>
  );
};
