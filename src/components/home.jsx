import styles from "../styles/home.module.css";
import hands from "../images/H&SPhoto.jpg"

export default function TextBox({ t }) {
  return (
    <>
      <h2 className={`${styles.textbox1} ${styles.center}`}>{t("Introduction")}</h2>
      <h1 className={`${styles.textbox2} ${styles.center}`}>Henry and Sebastien</h1>
      <h2 className={`${styles.textbox3} ${styles.center}`}>28 July 2023</h2>
      <img src={hands} alt="Henry & Seb" className={styles.mainimg} />
    </>
  )
}
