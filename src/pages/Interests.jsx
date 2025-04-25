import "./Interests.css";
import dragon_img from "../assets/UICircle_Icon.png"
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <main className="Interests">
      <img className="img" src={dragon_img} height="200px" width="200px"></img>
      <h1 className="interest_title">What do you <br></br> like to do?</h1>
      <div class="interest components">
        {/* <Link to="/newpage">
          <button className="intro_button" type="button"><p className="button_text">Create Account</p></button>
        </Link> */}
      </div>
    </main>
    
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
