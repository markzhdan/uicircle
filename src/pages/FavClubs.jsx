import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './FavClubs.css';
import favClubsIcon from '../assets/fav-clubs.png';
import homeIcon from '../assets/home.png';
import calendarIcon from '../assets/calendar.png';
import messagesIcon from '../assets/messages.png';
import searchIcon from '../assets/search-line.svg';

function FavClubs() {
  const navigate = useNavigate();
  const clubs = [
    { id: 1, name: 'PMRIG' },
    { id: 2, name: 'CS CLUB' },
    { id: 3, name: 'HISTORY CLUB' },
  ];

  const handleSearchClick = () => {
    navigate('/search');
  };

  const handleViewClub = (id) => {
    navigate(`/club/${id}`);
  };

  return (
    <div className="favclubs-container">
      <header className="top-bar">
        <div className="rectangle-17" />
        <h1 className="favclubs-title">Fav Clubs</h1>
        <img
          src={searchIcon}
          alt="Search"
          className="search-icon"
          onClick={handleSearchClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleSearchClick()}
        />
      </header>
      <main className="favclubs-content">
        <div className="clubs-list">
          {clubs.map((club) => (
            <div key={club.id} className="club-card">
              <h2 className="club-name">{club.name}</h2>
              <button
                className="view-button"
                onClick={() => handleViewClub(club.id)}
              >
                VIEW
              </button>
            </div>
          ))}
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

export default FavClubs;
