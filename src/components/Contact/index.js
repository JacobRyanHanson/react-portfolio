import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../../utils/helper';

function Contact() {
    const SERVICE_ID = "service_iqcfswe";
    const TEMPLATE_ID = "template_z4w3tqe";
    const PUBLIC_KEY = "HCHhYtsZXLDw5_kJR";

    const [formState, setFormState] = useState({
        from_name: "",
        from_email: "",
        message: ""
    });

    const [subMessage, setSubMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.from_name.length && formState.from_email.length && formState.message.length && validateEmail(formState.from_email)) {
            setSubMessage('Sending email...');
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
                .then((result) => {
                    setSubMessage('Email sent successfully!');
                    setFormState({
                        from_name: "",
                        from_email: "",
                        message: ""
                    });
                }, (error) => {
                    setSubMessage('An internal error has occured. Please refresh the page and try again.');
                });
        } else if (!subMessage.length && !validateEmail(formState.from_email)) {
            setSubMessage('Your email is invalid.');
        } else if (!subMessage.length) {
            setSubMessage('Please fill out the entire form.');
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'from_name') {
            if (!e.target.value.length) {
                setSubMessage(`A name is required.`);
            } else {
                setSubMessage('');
            }
            setFormState({ ...formState, from_name: e.target.value });
        } else if (e.target.name === 'from_email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setSubMessage('Your email is invalid.');
            } else {
                setSubMessage('');
            }
            setFormState({ ...formState, from_email: e.target.value });
        } else {
            if (!e.target.value.length) {
                setSubMessage(`A message is required.`);
            } else {
                setSubMessage('');
            }
            setFormState({ ...formState, message: e.target.value });
        }
    };

    return (
        <>
            <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    {subMessage && (
                        <div>
                            <p className="sub-text">{subMessage}</p>
                        </div>
                    )}
                    <div className="name-container">
                        <label htmlFor="name"></label>
                        <input type="text" name="from_name" placeholder="Name" value={formState.from_name} onChange={handleChange} />
                    </div>
                    <div className="email-container">
                        <label htmlFor="email"></label>
                        <input type="email" name="from_email" placeholder="Email" value={formState.from_email} onChange={handleChange} />
                    </div>
                    <div className="message-container">
                        <label htmlFor="message"></label>
                        <textarea name="message" rows="5" placeholder="Message" className="message-box" value={formState.message} onChange={handleChange} />
                    </div>
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact;