import React from 'react';

function Contact() {
    return(
        <section class="contact">
            <h1>Contact Form</h1>
            <form>
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
                    <textarea rows="10" name="comment"/>
                </div>

                <button type="submit">Submit Comment</button>
            </form>
        </section>
    )
};

export default Contact;