import { useState } from 'react';
import styles from '../styles/burger.module.css';

export default function Burger({ setPage, setLang }) {
  const [open, setOpen] = useState(false)

  const handleChange = (e) => {
    setLang(e.target.value)
  }

  const onClick = (e) => {
    setOpen(!open)
    const elements = document.querySelectorAll(`.${styles.headerbutton}`)
    const burger = document.querySelector(`.${styles.line}`)
    if (open === true) {
      burger.style.display = 'none'
      elements.forEach((element) => {
        element.style.display = 'block'
      })
    } else {
      burger.style.display = ''
      elements.forEach((element) => {
        element.style.display = 'none'
      })
    }
  }
  return (
    <>
      <div className={`${styles.line}`} onClick={onClick}>
        <div className={`${styles.linediv}`}></div>
        <div className={`${styles.linediv}`}></div>
        <div className={`${styles.linediv}`}></div>
      </div>
      <div className={`${styles.container}`} onClick={onClick}>
          <button className={styles.headerbutton}>x</button>
          <button className={`${styles.home} ${styles.headerbutton}`} onClick={() => setPage('home')}>Home</button>
          <button className={`${styles.ourstory} ${styles.headerbutton}`} onClick={() => setPage('ourstory')}>Our Story</button>
          <button className={`${styles.itinery} ${styles.headerbutton}`} onClick={() => setPage('itinery')}>Itinery</button>
          <button className={`${styles.rsvp} ${styles.headerbutton}`} onClick={() => setPage('rsvp')}>RSVP</button>
          <span className={`${styles.lang}`}>
              <label htmlFor="lang">Language:</label>
              <select name="lang" id="lang" onChange={handleChange}>
                <option value="en">English</option>
                <option value="fr">French</option>
              </select>
            </span>
      </div>
    </>
  );
}
