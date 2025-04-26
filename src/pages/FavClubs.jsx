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
      {/* <div className="favclubs-title">Fav Clubs</div> */}
      <div className="SearchBar">
            <input
                type="text"
                placeholder="Search...."
                className="SearchInput"/>
      </div>
      <div className="club-list">
        {clubs.map((club) => (
          <div key={club.id} className="club-card">
            <span className="club-name">{club.name}</span>
            <button className="view-button" onClick={() => handleViewClub(club.id)}>VIEW</button>
          </div>
        ))}
      </div>
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
    </div>
  );
}

export default FavClubs;

