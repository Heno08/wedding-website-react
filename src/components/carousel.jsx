import pic1 from "../images/Bruges-Trip.jpg";
import pic2 from "../images/Lake-D.jpeg";
import pic3 from "../images/Vienna-Palace.jpg";

export default function Carousel() {

  const pictures = [pic1, pic2, pic3]

  pictures.map((picture, i )=> {
    return (
      <div>
        <img src={picture[i]} alt="" />
      </div>
    )
  })
}
