import React from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const sendEmail = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Log the form data to inspect what is being sent
        console.log("Form Data:", e.target);

        emailjs.sendForm('service_nrghn6d', 'template_3s6e6s6', e.target, '1ucBYuSzk2kSh9gnv')
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log('Failed to send email:', error.text);
                alert('Failed to send message, please try again later.');
            });
    };

    return (
        <div id="contact" className="contact-form max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={sendEmail}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="text"
                    name="surname"
                    placeholder="Surname"
                    required
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="w-full p-2 mb-4 border rounded"
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    required
                    className="w-full p-2 mb-4 border rounded h-32"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                >
                    Send Message
                </button>
            </form>
            <a
                href="https://wa.me/+355689909618"
                className="block text-center mt-4 text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
                >
                Contact me on WhatsApp
            </a>
        </div>
    );
};

export default ContactMe;
