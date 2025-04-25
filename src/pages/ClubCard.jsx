import React from 'react';
import "./ClubCard.css"
import PMRIG_icon from "../assets/PMRIG_icon.png";
import PMRIG_event1 from "../assets/PMRIG_event1.png";
import PMRIG_event2 from "../assets/PMRIG_event2.png";
import cs_event2 from "../assets/cs_event2.png";
import history_event1 from "../assets/history_event1.png";
import history_event2 from "../assets/history_event2.png";
import cs from "../assets/cs.png";
import history from "../assets/history.png";
import favClubsIcon from '../assets/fav-clubs.png';
import homeIcon from '../assets/home.png';
import calendarIcon from '../assets/calendar.png';
import messagesIcon from '../assets/messages.png';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import FavClubs from './FavClubs';


  

const ClubCard = ({
    name,
    icon,
    description,
    eventImages,
    tags,
    matchPercent,
    onReject,
    onAccept,
    onSideArrowClick,
}) => {
  return (
    
    <div className="card">
        <div className="card-header">
            <h2 className="text_font">{name}</h2>
            <img className="club-icon1" src={icon}></img>
        </div>
        <p className="card-description">
            {description}
        </p>

        <h3 className="section-title">Up Coming Events</h3>
        {/* <div className="side-arrow" onClick={onSideArrowClick}></div> */}
        
        <div className="events">
            {eventImages.map((img, index) => (
            <img key={index} src={img} alt={`event-${index}`} className="event-image" />
            ))}
        </div>

        <div className="tags">
            {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
            ))}
        </div>

        <div className="match">{matchPercent}% Match</div>

        <div className="card-actions">
            <button className="btn red" onClick={onReject}>✖</button>
            <button className="btn green" onClick={onAccept}>✔</button>
        </div>
    </div>
  );
};

export default ClubCard;
