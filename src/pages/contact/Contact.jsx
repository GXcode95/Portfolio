import { useState } from 'react';
import * as emailjs from "emailjs-com";

import './contact.css'


const data = {
  email: 'xavier.grenouillet@gmail.com',
  service_id: '',
  template_id: '',
  user_id: '',
}

function Contact() {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: data.email,
      message: formData.message,
    };

    emailjs
      .send(
        data.service_id,
        data.template_id,
        templateParams,
        data.user_id
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! , Looking forward to reading your email.",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Failed to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  }

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact">
      <div className="wrapper">
        <h1>Contact Me</h1>

        <main>
          <aside className="text">
            <h2>Get in touch</h2>
            <p><strong>Email:</strong> <a href="mailto:xavier.grenouillet@gmail.com">xavier.grenouillet@gmail.com</a></p>
            <p>Looking forward to hearing from you!</p>
          </aside>

          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <input 
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={FormData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <textarea 
              placeholder="Message..."
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-outline btn-primary">
              {formData.loading ? "Sending..." : "Send"}
            </button>
          </form>
        </main>

      </div>
    </div>
  )
}

export default Contact