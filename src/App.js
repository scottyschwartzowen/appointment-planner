import React, { useState } from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import Root, { ROUTES } from './components/root/Root';
import { AppointmentsPage } from './containers/appointmentsPage/AppointmentsPage';
import { ContactsPage } from './containers/contactsPage/ContactsPage';

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const newContact = (name, phoneNumber, email) => {
    const contact = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
    };

    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const newAppointment = (name, contact, date, time, title) => {
    const appointment = {
      name: name,
      contact: contact,
      date: date,
      time: time,
      title: title,
    };

    setAppointments((prevAppointments) => [...prevAppointments, appointment]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage newContact={newContact} contacts={contacts} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              newAppointment={newAppointment}
              appointments={appointments}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
