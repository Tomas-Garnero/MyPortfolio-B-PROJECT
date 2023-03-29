import { useState } from "react";

import { eemail, mobile } from "../../constants/images";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {

    const [ formData, setFormData ] = useState({name: "", email: "", message: ""});
    const [ isFormSubmitted, setIsFormSubmitted ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setFormData({...formData, [name]: value});
    }

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: "contact",
            name: formData.name,
            email: email,
            message: message
        }

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
    }

    return (
        <>
            <h2 className="head-text">Take a coffe & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={eemail} alt="email" />
                    <a href="mailto:tomygarnero9429@gmail.com" className="p-text">tomygarnero9429@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={mobile} alt="mobile" />
                    <a href="tel:+54 351 4595592" className="p-text">+54 351 4595592</a>
                </div>
            </div>

            {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input 
                            className="p-text" 
                            type="text" 
                            placeholder="Your Name" 
                            name="name" 
                            value={name} 
                            onChange={handleChangeInput} 
                        />
                    </div>
                    <div className="app__flex">
                        <input 
                            className="p-text" 
                            type="email" 
                            placeholder="Your Email" 
                            name="email" 
                            value={email} 
                            onChange={handleChangeInput} 
                        />
                    </div>
                    <div>
                        <textarea 
                            className="p-text" 
                            placeholder="Your Message" 
                            name="message" 
                            value={message} 
                            onChange={handleChangeInput} 
                        />
                    </div>
                    <button type="button" className="p-text" onClick={handleSubmit}>
                        {loading ? "Sending" : "Send Message"}
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">Thank you for getting in touch!</h3>
                </div>
            )}
        </>
    )
};

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    "contact",
    "app__whitebg"
    );