import './globals.css';
import styles from './page.module.css';
import { Header, Footer, Sidebar } from '../components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={ styles.wrapper }>
      <Header className={ styles.header } />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>
        {children}
      </div>
      <Footer className={styles.footer} />
    </div>
  );
}
