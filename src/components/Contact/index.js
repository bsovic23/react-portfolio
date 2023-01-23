import React from 'react';

import { AiOutlineSend } from 'react-icons/ai';

function Contact() {
    return(
        <section class="contact-section">
            <h1>Contact Form</h1>
            <form class="contact-form">
                <p>
                    Please enter your information below if you would like me to contact you
                </p>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name"/>
                </div>

                <div>
                    <label htmlFor="github">GitHub:</label>
                    <input type="text" name="github"/>
                </div>

                <div>
                    <label htmlFor="name">Email:</label>
                    <input type="email" name="email" />
                </div>

                <div>
                    <label htmlFor="comment">Comment:</label>
                    <textarea rows="7" name="comment"/>
                </div>

                <button type="submit">Send< AiOutlineSend /></button>
            </form>
        </section>
    )
};

export default Contact;