import { NewsBanner } from '../../NewsBanner/NewsBanner';
import styles from './styles.module.css';

export const Main = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Main</h1>
      <NewsBanner />
    </main>
  );
};
