import React, { useState } from "react";
import "./Calendar.css";
import favClubsIcon from "../assets/fav-clubs.png";
import homeIcon from "../assets/home.png";
import calendarIcon from "../assets/calendar.png";
import messagesIcon from "../assets/messages.png";
import { useParams, useNavigate, NavLink } from "react-router-dom";

const Calendar = () => {
  const [events, setEvents] = useState([
    {
      title: "General Body Meeting (GBM)",
      time: "6pm",
      date: 23,
      color: "blue",
      club: "PMRIG",
      rsvp: null,
    },
    {
      title: "Welcome Day",
      time: "4pm",
      date: 24,
      color: "green",
      club: "Chess",
      rsvp: null,
    },
    {
      title: "Meet A Doc",
      time: "7pm",
      date: 24,
      color: "yellow",
      club: "PMRIG",
      rsvp: null,
    },
    {
      title: "Hackathon",
      time: "All Day",
      date: 26,
      color: "pink",
      club: "CS",
      rsvp: null,
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [rsvpMessage, setRsvpMessage] = useState("");
  const [rsvpStatus, setRsvpStatus] = useState("");

  const openDialog = (event) => {
    setSelectedEvent(event);
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedEvent(null);
  };

  const handleAccept = () => {
    if (selectedEvent) {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.title === selectedEvent.title
            ? { ...event, rsvp: "Going!" }
            : event
        )
      );
    }
    setRsvpMessage("Successfully RSVPd! Excited to see you!");
    setRsvpStatus("success");
    setTimeout(() => {
      setRsvpMessage("");
      setRsvpStatus("");
    }, 3000);
    closeDialog();
  };

  const handleReject = () => {
    if (selectedEvent) {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.title === selectedEvent.title
            ? { ...event, rsvp: "Not going..." }
            : event
        )
      );
    }
    setRsvpMessage("Too bad! Wish you could make it!");
    setRsvpStatus("fail");
    setTimeout(() => {
      setRsvpMessage("");
      setRsvpStatus("");
    }, 3000);
    closeDialog();
  };

  return (
    <main className="Calendar">
      <div className="SearchBar">
        <input type="text" placeholder="Search...." className="SearchInput" />
      </div>

      <div className="card-navigation-wrapper">
        <div className="card">
          <div className="card-header">
            <h2 className="text_font">Your Events</h2>
          </div>

          <h3 className="section-title">March</h3>

          <div className="events">
            {[23, 24, 25, 26, 27, 28].map((day) => (
              <div key={day} className="day-block">
                {events
                  .filter((event) => event.date === day)
                  .map((event, i) => (
                    <div
                      key={i}
                      className={`event event${event.color}`}
                      onClick={() => openDialog(event)}
                    >
                      {event.title} - {event.time}
                    </div>
                  ))}
                <div className="day-number">{day}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {dialogOpen && selectedEvent && (
        <div className="Calendar-modal-backdrop" onClick={closeDialog}>
          <div className="Calendar-modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedEvent.title}</h2>
            <div className="modal-inside">
              <p>
                <strong>Date:</strong> March {selectedEvent.date}
              </p>
              <p>
                <strong>Time:</strong> {selectedEvent.time}
              </p>
              <p>
                <strong>Club:</strong> {selectedEvent.club}
              </p>
              <p>
                <strong>RSVP:</strong>{" "}
                {events.find((e) => e.title === selectedEvent.title)?.rsvp ||
                  "Not yet"}
              </p>
            </div>

            <div className="Calendar-modal-buttons">
              <button className="going-button" onClick={handleAccept}>
                Going
              </button>
              <button className="cant-come-button" onClick={handleReject}>
                Can’t Come
              </button>
            </div>
            <button className="Calendar-close" onClick={closeDialog}>
              ×
            </button>
          </div>
        </div>
      )}

      {rsvpMessage && (
        <div className={`Calendar-rsvp-message ${rsvpStatus}`}>
          {rsvpMessage}
        </div>
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

export default Calendar;
