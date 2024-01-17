import React, { useState } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from '../../components/tileList/TileList';

export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointment,
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment(title, name, contact, date, time);
    setName('');
    setContact('');
    setDate('');
    setTime('');
    setTitle('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          name={name}
          setTitle={setTitle}
          setName={setName}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
};
