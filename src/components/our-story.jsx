import styles from "../styles/our-story.module.css";
import Carousel from "./carousel";
import pic1 from "../images/Bruges-Trip.jpg";
import pic2 from "../images/Lake-D.jpeg";
import pic3 from "../images/Vienna-Palace.jpg";

export default function OurStory( { t }) {
  const pictures = [pic1, pic2, pic3]

  return (
    <>
      <div className={styles.text}>
        <h2>{t("Our Story")}</h2>
        <p>{t("Our story text")}</p>
      </div>
      {pictures.filter((picture, i )=> {
        return (
          <img src={picture} alt="" className={styles.pic1} key={i} />
        )
       })}
      {/* <div className={[styles.pic1]}></div>
      <div className={[styles.pic2]}></div>
      <div className={[styles.pic3]}></div> */}
      {/* <img alt="Bruges Trip" src={brugesTrip} className={[styles.pic1]}/>
      <img alt="Lake District" src={lakeDistrict} className={[styles.pic2]}/>
      <img alt="Lake District" src={vienna} className={[styles.pic3]}/> */}
    </>
  )
}

// Bigger picture, justify text, gap between picture and text, bigger text/ line spacing (less blocky)
