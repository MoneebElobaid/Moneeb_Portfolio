import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("service_cbaeeis", "template_62zv83n", form.current, {
        publicKey: "0rN89mYRPOl8dUl4m",
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
    setFormData({ name: "", email: "", message: "" });
  }

  const invalidImage = <img
                src="/assets/icons/icon-invalid.svg"
                alt=""
                className="contact__invalid-icon"
                width="24"
                height="24"
              />;

  function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        };
    });
  }

  return (
    <section id="contact" className="contact bg-less-dark">
        <div className="wrapper contact__wrapper bottom-border">
          <div className="contact__text">
            <h2 className="contact__headline header-xl">Contact</h2>
            <p className="contact__description">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__control">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                required
              />
              {invalidImage}
            </div>
            <div className="contact__control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                required
              />
              {invalidImage}
            </div>
            <div className="contact__control">
              <textarea
                cols="30"
                rows="3"
                placeholder="Message"
                name="message"
                onChange={handleChange}
                value={formData.message}
                required
              />
              {invalidImage}
            </div>
            <div className="contact__control align-right">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
        <img
          className="contact__rings"
          src="/assets/icons/pattern-rings.svg"
          alt=""
          width="530"
          height="129"
        />
      </section>
  );
}