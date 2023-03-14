import styles from "../styles/our-story.module.css";
import brugesTrip from "../images/Bruges-Trip.jpg";
import lakeDistrict from "../images/Lake-D.jpeg";
import vienna from "../images/Vienna-Palace.jpg";

export default function OurStory( { t }) {
  return (
    <>
      <div className={styles.text}>
        <h2>{t("Our Story")}</h2>
        <p>{t("Our story text")}</p>
      </div>
      <img alt="Bruges Trip" src={brugesTrip} className={[styles.pic1]}/>
      <img alt="Lake District" src={lakeDistrict} className={[styles.pic2]}/>
      <img alt="Lake District" src={vienna} className={[styles.pic3]}/>
    </>
  )
}
