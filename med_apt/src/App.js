import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import DoctorCard from './Components/DoctorCard/DoctorCard';
import BookingConsultation from './Components/BookingConsultation'; // Import the BookingConsultation component
import Notification from './Components/Notification/Notification'; // Import the Notification component

function App() {
    // Define an array of doctor data
    const doctors = [
        { id: 1, name: 'Dr. Robert', experience: '10 years', rating: '4.8', specialty: 'Dentist', image: '/images/doctor1.png' },
        { id: 2, name: 'Dr. Bhanu', experience: '8 years', rating: '4.5', specialty: 'Gynecologist', image: '/images/doctor2.png' },
        { id: 3, name: 'Dr. Revathi', experience: '5 years', rating: '4.7', specialty: 'Dermatologist', image: '/images/doctor3.png' },
        { id: 4, name: 'Dr. Vikas', experience: '12 years', rating: '4.9', specialty: 'General Physician', image: '/images/doctor4.png' },
        { id: 5, name: 'Dr. Gupta', experience: '6 years', rating: '4.6', specialty: 'ENT Specialist', image: '/images/doctor5.png' },
        { id: 6, name: 'Dr. William', experience: '15 years', rating: '4.9', specialty: 'Homeopath', image: '/images/doctor6.png' },
        { id: 7, name: 'Dr. Linda', experience: '7 years', rating: '4.4', specialty: 'Ayurveda', image: '/images/doctor7.png' },
        { id: 8, name: 'Dr. Prasad', experience: '9 years', rating: '4.7', specialty: 'Pediatrician', image: '/images/doctor8.png' },
    ];

    // Notification state
    const [notification, setNotification] = useState(null);

    const handleBooking = () => {
        // Show notification when a booking is made
        setNotification("Your appointment has been successfully booked!");
    };

    return ( <
        Router >
        <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = "./logo.svg"
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. <
        /p> <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> { /* Add Link to navigate to Booking Consultation */ } <
        Link to = "/booking-consultation" >
        <
        button onClick = { handleBooking } > Book Consultation < /button> <
        /Link> { /* Add Link to navigate to Instant Consultation */ } <
        Link to = "/instant-consultation" >
        <
        button > Instant Booking Consultation < /button> <
        /Link> <
        /header> <
        Routes > { /* Define the routes for various components */ } <
        Route path = "/booking-consultation"
        element = { < BookingConsultation / > }
        /> <
        Route path = "/instant-consultation"
        element = { < InstantConsultation / > }
        /> <
        /Routes> { /* Render Doctor Cards */ } <
        div className = "doctor-cards-container" > {
            doctors.map((doctor) => ( <
                DoctorCard key = { doctor.id }
                doctor = { doctor } // Pass the entire doctor object
                />
            ))
        } <
        /div>

        { /* Show Notification if it's set */ } {
            notification && ( <
                Notification message = { notification }
                onClose = {
                    () => setNotification(null) } // Reset notification after closing
                />
            )
        } <
        /div> <
        /Router>
    );
}

export default App;