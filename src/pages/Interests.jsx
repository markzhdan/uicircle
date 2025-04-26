import React, { useState } from "react"; // Import useState
import "./Interests.css";
import art from "../assets/art.jpg";
import dance from "../assets/dance.png";
import forensics from "../assets/forensics.png";
import history_img from "../assets/history_img.png";
import medical from "../assets/medical.jpg";
import plant from "../assets/plant.png";
import reading from "../assets/reading.png";
import tech from "../assets/tech.png";
import business from "../assets/business.png";
import crochet from "../assets/crochet.png";
import chess from "../assets/chess.png";
import law from "../assets/law.png";
import science from "../assets/science.png";
import travel from "../assets/travel.png";
import sports from "../assets/sports.png";
import rock from "../assets/rock.png";
import dragon_img from "../assets/UICircle_Icon.png";
import { Link } from "react-router-dom";

function Interests() {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interestName) => {
    setSelectedInterests(
      (prevSelected) =>
        prevSelected.includes(interestName)
          ? prevSelected.filter((name) => name !== interestName) // Deselect
          : [...prevSelected, interestName] // Select
    );
  };

  const renderInterestCard = (src, label) => (
    <div
      className={`interest-card ${
        selectedInterests.includes(label) ? "selected" : ""
      }`}
      onClick={() => toggleInterest(label)}
    >
      <img src={src} alt={`${label} icon`} className="icon" />
      <div className="interest-label">{label}</div>
    </div>
  );

  return (
    <main className="Interests">
      <img
        className="img"
        src={dragon_img}
        height="150px"
        width="150px"
        alt="UICircle Icon"
      />
      <h1 className="interest_title">
        What do you <br /> like to do?
      </h1>
      <div className="interest components">
        <div className="checkboxes_div">
          <div className="label_div">
            <input type="checkbox" />
            <label className="checkbox_label">academics</label>
          </div>
          <div className="label_div">
            <input type="checkbox" />
            <label className="checkbox_label">miscellaneous</label>
          </div>
        </div>
        <div className="vertical-menu">
          <a>
            <div className="interests-grid" id="pink_row">
              {renderInterestCard(art, "Art")}
              {renderInterestCard(plant, "Planting")}
              {renderInterestCard(reading, "Reading")}
              {renderInterestCard(history_img, "History")}
            </div>
          </a>
          <a>
            <div className="interests-grid" id="blue_row">
              {renderInterestCard(medical, "Medical")}
              {renderInterestCard(dance, "Dance")}
              {renderInterestCard(forensics, "Forensics")}
              {renderInterestCard(rock, "Climbing")}
            </div>
          </a>
          <a>
            <div className="interests-grid" id="pink_row">
              {renderInterestCard(tech, "Tech")}
              {renderInterestCard(business, "Business")}
              {renderInterestCard(chess, "Chess")}
              {renderInterestCard(crochet, "Crochet")}
            </div>
          </a>
          <a>
            <div className="interests-grid" id="blue_row">
              {renderInterestCard(law, "Law")}
              {renderInterestCard(science, "Science")}
              {renderInterestCard(travel, "Travel")}
              {renderInterestCard(sports, "Sports")}
            </div>
          </a>
        </div>
      </div>
      <div className="buttons_div">
        <Link to="/profile">
          <button
            className="profile_button3"
            type="button"
            style={{ cursor: "pointer" }}
          >
            <p className="button_text">←</p>
          </button>
        </Link>
        <Link to="/home">
          <button
            className="profile_button2"
            type="button"
            style={{ cursor: "pointer" }}
          >
            <p className="button_text">→</p>
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Interests;
