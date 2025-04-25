import React from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import './ClubDetail.css';
import favClubsIcon from '../assets/fav-clubs.png';
import homeIcon from '../assets/home.png';
import calendarIcon from '../assets/calendar.png';
import messagesIcon from '../assets/messages.png';
import backIcon from '../assets/Group.svg';
import pmrigIcon from '../assets/pmrig.png';
import csIcon from '../assets/cs.png';
import historyIcon from '../assets/history.png';

function ClubDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const clubs = [
    { id: 1, name: 'PMRIG', description: 'Serves to inform students about critical resources to learn about residency and future careers', icon: pmrigIcon },
    { id: 2, name: 'CS CLUB', description: 'A club for computer science enthusiasts.', icon: csIcon },
    { id: 3, name: 'HISTORY CLUB', description: 'Romeo, Romeo, where art thou Join the past, we’ll show you how!', icon: historyIcon },
  ];

  const club = clubs.find((club) => club.id === parseInt(id, 10));

  if (!club) {
    return <div className="club-detail-container">Club not found</div>;
  }

  return (
    <div className="club-detail-container">
      <header className="top-bar">
        <div className="rectangle-17" />
        <h1 className="favclubs-title">{club.name}</h1>
      </header>
      <main className="club-detail-content">
        <div className="pink-container">
          <img 
            src={backIcon} 
            alt="Back" 
            className="back-icon" 
            onClick={() => navigate('/fav-clubs')}
          />
          <div className="club-header">
            <img src={club.icon} alt={club.name} className="club-icon" />
            <h2 className="club-title">{club.name}</h2>
          </div>
          <div className="separator-line"></div>
          <div className="description-container">
            <p className="club-detail-description">{club.description}</p>
          </div>
        </div>
      </main>
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
    </div>
  );
}

export default ClubDetail;
