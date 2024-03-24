import React, { useState } from 'react';

const EventForm = ({ onEventCreate }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      name: eventName,
      date: eventDate
    };
    onEventCreate(newEvent);
    setEventName('');
    setEventDate('');
  };

  return (
    <div className='container'>
    <form  className='form-group' onSubmit={handleEventSubmit}>
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
      />
      <button type="submit">Create Event</button>
    </form>
    </div>
  );
};

export default EventForm;
