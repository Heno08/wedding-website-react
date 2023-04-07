import styles from "../styles/our-story.module.css";
import pic1 from "../images/Bruges-Trip.jpg";
import pic2 from "../images/Lake-D.jpeg";
import pic3 from "../images/Vienna-Palace.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function OurStory( { t }) {
  return (
    <>
      <div className={styles.text}>
        <h2>{t("Our Story")}</h2>
        <p>{t("Our story text")}</p>
      </div>
      <div className={styles.carousel}>
        <Carousel>
          <div>
            <img src={pic1} alt="" />
            <p className="legend">Bruges 2020</p>
          </div>
          <div>
            <img src={pic2} alt="" />
            <p className="legend">Lake District 2021</p>
          </div>
          <div>
            <img src={pic3} alt="" />
            <p className="legend">Vienna 2021</p>
          </div>
        </Carousel>
      </div>
    </>
  )
}
