import Logo from '../images/Logo.png';
import styles from '../styles/header.module.css';

export default function Header({setPage}) {
  return (
    <div className={styles.container}>
        <button className={`${styles.home} ${styles.headerbutton}`} onClick={() => setPage('home')}>Home</button>
        <button className={`${styles.ourstory} ${styles.headerbutton}`} onClick={() => setPage('ourstory')}>Our Story</button>
        <img src={Logo} alt="logo" className={styles.logo} />
        <button className={`${styles.itinery} ${styles.headerbutton}`} onClick={() => setPage('itinery')}>Itinery</button>
        <button className={`${styles.rsvp} ${styles.headerbutton}`} onClick={() => setPage('rsvp')}>RSVP</button>
    </div>
  );
}
