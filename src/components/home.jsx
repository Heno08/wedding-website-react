import styles from "../styles/home.module.css";
import handsphoto from "../images/H&SPhoto.jpg";

export default function TextBox({ t }) {
  return (
    <div className={styles.center}>
      <h2 className={styles.textboxh2}>{t("Introduction")}</h2>
      <h1 className={styles.textboxh1}>Henry And Sebastien</h1>
      <h2 className={styles.textboxh2}>28 July 2023</h2>
      <img alt="henry&seb" src={handsphoto}/>
    </div>
  )
}
