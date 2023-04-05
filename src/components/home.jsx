import styles from "../styles/home.module.css";

export default function TextBox({ t }) {
  return (
    <>
      <h2 className={`${styles.textbox1} ${styles.center}`}>{t("Introduction")}</h2>
      <h1 className={`${styles.textbox2} ${styles.center}`}>Henry and Sebastien</h1>
      <h2 className={`${styles.textbox3} ${styles.center}`}>28 July 2023</h2>
      <div className={`${styles.mainimage} ${styles.center}`}></div>
    </>
  )
}
