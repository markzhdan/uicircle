import "./Profile.css";
import dragon_img from "../assets/UICircle_Icon.png";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className="Profile">
      <img className="img" src={dragon_img} height="200px" width="200px"></img>
      <h1 className="title">Who Are You?</h1>
      <Link to="/home">
        <button className="intro_button" type="button">
          <p className="buttonText">Proceed to Clubs</p>
        </button>
      </Link>
    </div>
  );
}

export default Profile;
