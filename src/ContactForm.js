import React, { useState } from 'react';
import './ContactForm.css'; // Create a CSS file for styling

function ContactForm({ toggleContactForm }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //console.log('web3 access key:', process.env.REACT_APP_WEB3_ACCESS_KEY);

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: process.env.REACT_APP_WEB3_ACCESS_KEY,
                ...formData
            })
        });

        const result = await response.json();

        if (result.success) {
            alert('Message sent successfully!');
            toggleContactForm();
        } else {
            alert('Failed to send message. Please try again.');
        }

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <div className="contact-form-backdrop" onClick={toggleContactForm}></div>
            <div id="contact-form">
                <button className="close-button" onClick={toggleContactForm}>×</button>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={formData.message} onChange={handleChange} required />
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </>

    );
}

export default ContactForm;