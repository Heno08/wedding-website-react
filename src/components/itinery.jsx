import styles from "../styles/itinery.module.css";
import ceremonyPic from "../images/CR-wedding.jpg";
import trainRidePic from "../images/TrainRide.jpg";
import receptionPic from "../images/FV-Wedding.jpg"

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
      <img src={ceremonyPic} alt={"Castle Rushen"} className={styles.ceremonyPic}></img>
      <div className={styles.trainRide}>
        <h2>{t("Train Ride")}</h2>
          <p>{t("Train Ride1")}</p>
          <p>{t("Train Ride2")}</p>
      </div>
      <img src={trainRidePic} alt={"Castle Rushen"} className={styles.trainRidePic}></img>
      <div className={styles.reception}>
        <h2>{t("Reception")}</h2>
          <p>{t("Reception1")} <a href="https://www.foragingvintners.com/" target="_blank" rel="noreferrer">Foraging Vintners</a>.</p>
          <p>{t("Reception2")} <a href="https://www.wildthymeiom.co.uk/" target="_blank" rel="noreferrer">Wild Thyme</a>).</p>
          <p>{t("Reception3")}</p>
          <p>{t("Reception4")}</p>
          <p>{t("Reception5")}</p>
      </div>
      <img src={receptionPic} alt={"Castle Rushen"} className={styles.receptionPic}></img>
      <div className={styles.weddingGiftList}>
        <h2>{t("Wedding Gift List")}</h2>
          <p>{t("Wedding Gift List1")}</p>
          <p>{t("Wedding Gift List2")}</p>
            <p>{t("Name")} Sebastien Bar</p>
            <p>IBAN: LT593250091681685151</p>
            <p>BIC: REVOLT21</p>
            <p>{t("Wedding Gift List4")}</p>
          <p>{t("Wedding Gift List3")}</p>
      </div>
    </>
  )
}
// justify text, arrage for heading then picture, picture then heading
