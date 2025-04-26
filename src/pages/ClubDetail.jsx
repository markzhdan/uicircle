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
    {
      id: 1,
      name: 'PMRIG',
      description: 'Serves to inform students about critical resources to learn about residency and future careers',
      icon: pmrigIcon,
      events: [
        { date: 23, title: 'GBM' },
        { date: 17, title: 'Intro' },
      ],
      members: [
        { name: 'Juliette - President', hasMessage: true },
        { name: 'Sandra', hasMessage: false },
        { name: 'Preethi', hasMessage: false },
      ]
    },
    {
      id: 2,
      name: 'CS Club',
      description: 'Connects students with like-minded inviduals with common interests to create fun projects',
      icon: pmrigIcon,
      events: [
        { date: 10, title: 'GBM' },
        { date: 24, title: 'Career Talk' },
      ],
      members: [
        { name: 'Sandra', hasMessage: false },
        { name: 'Preethi', hasMessage: false },
      ]
    },
    {
      id: 3,
      name: 'History',
      description: 'Romeo, Romeo, where are thou',
      icon: pmrigIcon,
      events: [
        { date: 14, title: 'GBM' },
        { date: 16, title: 'Meet Greet' },
      ],
      members: [
        { name: 'Sandra', hasMessage: false },
        { name: 'Preethi', hasMessage: false },
      ]
    }
  ];

  const club = clubs.find((club) => club.id === parseInt(id, 10));

  if (!club) {
    return <div className="club-detail-container">Club not found</div>;
  }

  return (
    <div className="club-detail-container">
      <main className="club-detail-content">
        <div className="pink-container">
          <img src={backIcon} alt="Back" className="back-icon" onClick={() => navigate('/fav-clubs')} />

          <div className="club-header">
            <h2 className="club-title">{club.name}</h2>
            <img src={club.icon} alt={club.name} className="club-icon1" />
          </div>

          <div className="separator-line"></div>

          <div className="description-container">
            <p className="club-detail-description">{club.description}</p>
          </div>

          <div className="separator-line"></div>

          <h3 className="section-title">Up Coming Events</h3>
          <div className="events">
            {club.events.map((event, index) => (
              <div className="event-card" key={index}>
                <div className="event-date">{event.date}</div>
                <div className="event-name">{event.title}</div>
              </div>
            ))}
          </div>


          <div className="members">
            {club.members.map((member, index) => (
              <div className="member" key={index}>
                <span className="member-icon">👤</span>
                <span className="member-name">{member.name}</span>
                <span className="message-icon">💬</span>
              </div>
            ))}
          </div>
        </div>
      </main>
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

export default ClubDetail;