import "./Interests.css";
import dragon_img from "../assets/UICircle_Icon.png"
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <main className="Interests">
      <img className="img" src={dragon_img} height="200px" width="200px"></img>
      <h1 className="interest_title">What do you <br></br> like to do?</h1>
      <br></br>
      <div className="interest components">
        <div className="interests-grid"> {/* Both cards go inside here */}
          <div className="interest-card">
            {/* <img src={art_img} alt="art icon" className="icon" /> */}
            <div className="interest-label">Art</div>
          </div>
          <div className="interest-card">
            {/* <img src={art_img} alt="art icon" className="icon" /> */}
            <div className="interest-label">Art</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;