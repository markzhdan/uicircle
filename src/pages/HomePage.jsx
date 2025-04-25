import React from 'react';
import "./HomePage.css"
import PMRIG_icon from "../assets/PMRIG_icon.png";
import PMRIG_event1 from "../assets/PMRIG_event1.png";
import PMRIG_event2 from "../assets/PMRIG_event2.png";
import favClubsIcon from '../assets/fav-clubs.png';
import homeIcon from '../assets/home.png';
import calendarIcon from '../assets/calendar.png';
import messagesIcon from '../assets/messages.png';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className="HomePage">
        <div className="SearchBar">
            <input
                type="text"
                placeholder="Search...."
                className="SearchInput"
            />
        </div>
        <div className="card">
            <div className="card-header">
                <h2 className="text_font">PMRIG</h2>
                <img className="PMRIG_icon" src={PMRIG_icon}></img>
            </div>
            <p className="card-description">
                Serves to inform students about critical resources to learn about residency and future careers. <br/>
            </p>

            <h3 className="section-title">Up Coming Events</h3>
            <div className="events">
                <img className="PMRIG_event1" src={PMRIG_event1}></img>
                <img className="PMRIG_event2" src={PMRIG_event2}></img>
            </div>

            <div className="tags">
                <span className="tag">Helpful</span>
                <span className="tag">Fun</span>
                <span className="tag">Student - Led</span>
            </div>

            <div className="match">86% Match</div>

            <div className="card-actions">
                <button className="btn red">✖</button>
                <button className="btn green">✔</button>
            </div>

        </div>
        <nav className="bottom-nav">
            <div className="rectangle-3" />
            <NavLink to="/fav-clubs" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}>
                <img src={favClubsIcon} alt="Fav Clubs" />
                <span>Fav Clubs</span>
            </NavLink>
            <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}>
                <img src={homeIcon} alt="Home" />
                <span>Home</span>
            </NavLink>
            <NavLink to="/calendar" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}>
                <img src={calendarIcon} alt="Calendar" />
                <span>Calendar</span>
            </NavLink>
            <NavLink to="/messages" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button messages'}>
                <img src={messagesIcon} alt="Messages" />
                <span>Messages</span>
            </NavLink>
        </nav>
    </main>


    
  );
};

export default HomePage;
