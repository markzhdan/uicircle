import "./MainPage.css";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <main className="MainPage">
      <h1>Put the main page here</h1>

      <Link to="/messages">
        <button type="button">To Messages</button>
      </Link>
    </main>
  );
}

export default MainPage;
