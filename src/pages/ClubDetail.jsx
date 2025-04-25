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
        { 
          date: '2025-05-01', 
          title: 'Residency Info Session',
          time: '3:00 PM',
          location: 'SCE Cardinal Room'
        },
        { 
          date: '2025-05-15', 
          title: 'Career Fair Prep',
          time: '2:00 PM',
          location: 'SELE 2250'
        },
        { 
          date: '2025-05-30', 
          title: 'Mock Interviews',
          time: '1:00 PM',
          location: 'BSB 3rd Floor'
        },
        { 
          date: '2025-06-15', 
          title: 'Guest Speaker',
          time: '4:00 PM',
          location: 'UIC Forum'
        }
      ],
      members: [
        { name: 'Juliette', role: 'President', gender: 'female' },
        { name: 'Sandra', role: 'Vice President', gender: 'female' },
        { name: 'Preethi', role: 'Member', gender: 'female' },
        { name: 'Mike', role: 'Member', gender: 'male' },
      ]
    },
    { 
      id: 2, 
      name: 'CS CLUB', 
      description: 'A club for computer science enthusiasts to collaborate, learn and grow together',
      icon: csIcon,
      events: [
        {
          date: '2025-05-03',
          title: 'Intro to AI Workshop',
          time: '4:00 PM',
          location: 'SELE 2260'
        },
        {
          date: '2025-05-20',
          title: 'Hackathon Kickoff',
          time: '10:00 AM',
          location: 'ERF Building'
        },
        {
          date: '2025-06-01',
          title: 'Tech Interview Prep',
          time: '2:30 PM',
          location: 'BSB 2109'
        },
        {
          date: '2025-06-10',
          title: 'Industry Network Night',
          time: '6:00 PM',
          location: 'Student Center East'
        }
      ],
      members: [
        { name: 'Alex', role: 'President', gender: 'male' },
        { name: 'Emily', role: 'Vice President', gender: 'female' },
        { name: 'David', role: 'Secretary', gender: 'male' },
        { name: 'Sarah', role: 'Treasurer', gender: 'female' },
        { name: 'James', role: 'Member', gender: 'male' },
        { name: 'Lisa', role: 'Member', gender: 'female' }
      ]
    },
    { 
      id: 3, 
      name: 'HISTORY CLUB', 
      description: 'Romeo, Romeo, where art thou Join the past, we\'ll show you how!',
      icon: historyIcon,
      events: [
        {
          date: '2025-05-05',
          title: 'Medieval Fair',
          time: '1:00 PM',
          location: 'East Campus Quad'
        },
        {
          date: '2025-05-25',
          title: 'Civil War Discussion',
          time: '3:30 PM',
          location: 'LH 104'
        },
        {
          date: '2025-06-05',
          title: 'Museum Field Trip',
          time: '10:00 AM',
          location: 'Field Museum'
        },
        {
          date: '2025-06-20',
          title: 'Ancient Rome Night',
          time: '5:00 PM',
          location: 'SCE Illinois Room'
        }
      ],
      members: [
        { name: 'Marcus', role: 'President', gender: 'male' },
        { name: 'Diana', role: 'Vice President', gender: 'female' },
        { name: 'Robert', role: 'Secretary', gender: 'male' },
        { name: 'Isabella', role: 'Member', gender: 'female' },
        { name: 'Thomas', role: 'Member', gender: 'male' }
      ]
    }
  ];

  const club = clubs.find((club) => club.id === parseInt(id, 10));

  if (!club) {
    return <div className="club-detail-container">Club not found</div>;
  }

  const handleMessageClick = (memberName) => {
    if (memberName === "Juliette" || memberName === "Meowmy") {
      navigate(`/messages/${memberName}`);
    } else {
      navigate('/messages');
    }
  };

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
          <div className="separator-line2"></div>
          <div className="up-coming-events">Up Coming Events</div>
          <div className="events-scroll-container">
            <div className="events-list">
              {club.events?.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="event-date">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="event-name">{event.title}</h3>
                  <div className="event-time">{event.time}</div>
                  <div className="event-location">{event.location}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="members-scroll-container">
            <div className="members-list">
              {club.members?.map((member, index) => (
                <div key={index} className="member-item">
                  <img 
                    src={member.gender === 'male' ? require('../assets/user-male.png') : require('../assets/user-female.png')} 
                    alt={`${member.gender} icon`} 
                    className="member-icon"
                  />
                  <div className={`member-name ${member.role.toLowerCase().includes('president') || member.role.toLowerCase().includes('secretary') || member.role.toLowerCase().includes('treasurer') ? 'board-member' : ''}`}>
                    {member.name}
                    {member.role !== 'Member' && ` - ${member.role}`}
                  </div>
                  <img 
                    src={require('../assets/messages.png')} 
                    alt="message" 
                    className="message-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMessageClick(member.name);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <nav className="bottom-nav">
        <div className="rectangle-3" />
        <NavLink to="/fav-clubs" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}>
          <img src={favClubsIcon} alt="Fav Clubs" />
          <span>Fav Clubs</span>
        </NavLink>
        <NavLink to="/homepage" className={({ isActive }) => isActive ? 'nav-button active' : 'nav-button'}>
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
