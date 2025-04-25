import "./MainPage.css";
import { Link } from "react-router-dom";
import splash from "../assets/UICircle_Full.png";
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
//import "./MainPage.css";
//import { Link } from "react-router-dom";

// function MainPage() {
//   return (
//     <main className="MainPage">
//       <h1>Put the main page here</h1>
//<div class="intro_text">Immerse into the pixelated flames of UIC, and embark on a path to sealing your future success</div>
      //<button class="intro_button"><p class="button_text">Create Account</p></button>
//       <Link to="/messages">
//         <button type="button">To Messages</button>
//       </Link>
//     </main>
//   );
// }


// export default MainPage;
