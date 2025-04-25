import "./MainPage.css";
import splash from "../assets/UICircle_Full.png";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <main className="MainPage">
      <div class="main_components">
        <img src={splash} height={300} width={400} />
        <div className="intro_text">Immerse into the pixelated flames of UIC, and embark on a path to sealing your future success</div>
        <Link to="/profile">
          <button className="intro_button" type="button"><p className="button_text">Create Account</p></button>
        </Link>
      </div>
    </main>
    
  );
}

export default MainPage;