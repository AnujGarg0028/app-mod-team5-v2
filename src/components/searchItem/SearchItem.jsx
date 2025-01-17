import "./searchItem.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SearchItem = (props) => {
  const navigate = useNavigate()
  const formHandeler = () => {
    localStorage.setItem("room_type", props.name)
    navigate('/form')
  }
  return (
    <div className="searchItem">
      <img
        src="https://hotelbookingstorage.blob.core.windows.net/app-mod-images/seitem1.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{props.roomName}</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp" style={props.textstyle}>{props.available}</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
        Free airport taxi
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs. {props.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={formHandeler}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
