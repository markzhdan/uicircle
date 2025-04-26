import React, { useState } from "react";
import "./HomePage.css";
import PMRIG_icon from "../assets/PMRIG_icon.png";
import PMRIG_event1 from "../assets/PMRIG_event1.png";
import PMRIG_event2 from "../assets/PMRIG_event2.png";
import cs_event2 from "../assets/cs_event2.png";
import history_event1 from "../assets/history_event1.png";
import history_event2 from "../assets/history_event2.png";
import cs from "../assets/cs.png";
import history from "../assets/history.png";
import favClubsIcon from "../assets/fav-clubs.png";
import homeIcon from "../assets/home.png";
import calendarIcon from "../assets/calendar.png";
import messagesIcon from "../assets/messages.png";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import FavClubs from "./FavClubs";
import ClubCard from "./ClubCard";

const clubs = [
  {
    name: "PMRIG",
    icon: PMRIG_icon,
    description:
      "Serves to inform students about critical resources to learn about residency and future careers.",
    eventImages: [PMRIG_event1, PMRIG_event2],
    tags: ["Helpful", "Fun", "Student-led"],
    matchPercent: 90,
  },
  {
    name: "CS CLUB",
    icon: cs,
    description:
      "Connects students with like-minded inviduals with common interests to create fun projects",
    eventImages: [PMRIG_event1, cs_event2],
    tags: ["Creative", "Technology", "Student-led"],
    matchPercent: 86,
  },
  {
    name: "HISTORY CLUB",
    icon: history,
    description: "Romeo, Romeo, where are thou",
    eventImages: [history_event1, history_event2],
    tags: ["History", "Creative", "Student-led"],
    matchPercent: 46,
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [rejectMessage, setRejectMessage] = useState("");

  const handleNextClub = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < clubs.length - 1 ? prevIndex + 1 : 0
    );
  };
  const handleAccept = () => {
    setWelcomeMessage(`Welcome to ${clubs[currentIndex].name}!`);
    setTimeout(() => setWelcomeMessage(""), 3000);
  };
  const handleReject = () => {
    setRejectMessage(`No worries!! explore more clubs`);
    setTimeout(() => setRejectMessage(""), 3000);
  };

  return (
    <main className="HomePage">
      <div className="SearchBar">
        <input type="text" placeholder="Search...." className="SearchInput" />
      </div>

      <div className="card-navigation-wrapper">
        {currentIndex > 0 && (
          <button
            className="side-arrow left-arrow"
            onClick={() => setCurrentIndex(currentIndex - 1)}
          >
            ◀
          </button>
        )}

        <ClubCard
          {...clubs[currentIndex]}
          onReject={handleReject}
          onAccept={handleAccept}
        />

        {currentIndex < clubs.length - 1 && (
          <button
            className="side-arrow right-arrow"
            onClick={() => setCurrentIndex(currentIndex + 1)}
          >
            ▶
          </button>
        )}
      </div>
      {rejectMessage && <div className="reject-message">{rejectMessage}</div>}
      {welcomeMessage && (
        <div className="welcome-message">{welcomeMessage}</div>
      )}
      <nav className="bottom-nav">
        <NavLink to="/fav-clubs" className="nav-item">
          <img src={favClubsIcon} alt="Fav Clubs" />
          <span>Fav Clubs</span>
        </NavLink>
        <NavLink to="/home" className="nav-item">
          <img src={homeIcon} alt="Home" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/calendar" className="nav-item">
          <img src={calendarIcon} alt="Calendar" />
          <span>Calendar</span>
        </NavLink>
        <NavLink to="/messages" className="nav-item">
          <img src={messagesIcon} alt="Messages" />
          <span>Messages</span>
        </NavLink>
      </nav>
    </main>
  );
};

export default HomePage;
