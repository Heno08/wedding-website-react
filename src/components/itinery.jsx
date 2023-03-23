import styles from "../styles/itinery.module.css";
import reception from "../images/FV-Wedding.jpg"
import castle from "../images/CR-wedding.jpg";
import trainRide from "../images/TrainRide.png";

export default function Itinery( { t } ) {
  return(
    <>
      <div className={styles.itinery}>
        <h1>{t("Itinery")}</h1>
        <p>{t("Theme")}</p>
      </div>
      <div className={styles.ceremony}>
        <h2>{t("Ceremony")}</h2>
          <p>{t("Ceremony1")}</p>
          <p>{t("Ceremony2")}</p>
          <p>{t("Ceremony3")}</p>
      </div>
      <img alt="Ceremony" className={styles.ceremonyPic} src={castle}/>
      <div className={styles.trainRide}>
        <h2>{t("Train Ride")}</h2>
          <p>{t("Train Ride1")}</p>
          <p>{t("Train Ride2")}</p>
      </div>
      <img alt="Train Ride" className={styles.trainRidePic} src={trainRide}/>
      <div className={styles.reception}>
        <h2>{t("Reception")}</h2>
          <p>{t("Reception1")}</p>
          <p>{t("Reception2")}</p>
          <p>{t("Reception3")}</p>
          <p>{t("Reception4")}</p>
          <p>{t("Reception5")}</p>
      </div>
      <img alt="Reception" className={styles.receptionPic} src={reception}/>
      <div className={styles.weddingGiftList}>
        <h2>{t("Wedding Gift List")}</h2>
          <p>{t("Wedding Gift List1")}</p>
          <p>{t("Wedding Gift List2")}</p>
            <p>{t("Name")}</p>
            <p>IBAN: IBAN4511</p>
            <p>BIC: </p>
          <p>{t("Wedding Gift List3")}</p>
      </div>
      <img alt="Wedding Gift List" className={styles.weddingGiftListPic}/>
    </>
  )
}
// justify text, arrage for heading then picture, picture then heading
