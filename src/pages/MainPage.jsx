import "./MainPage.css";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="MainPage">
      <div className="intro_text">
        Immerse into the pixelated flames of UIC, and embark on a path to sealing your future success
      </div>
      <button className="intro_button">
        <p className="button_text">Create Account</p>
      </button>

      <main>
        <h1>Put the main page here</h1>
        <Link to="/messages">
          <button type="button">To Messages</button>
        </Link>
      </main>
    </div>
  );
}

export default MainPage;