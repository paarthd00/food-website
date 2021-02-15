import React, { useState } from "react"
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import "./layout.css"
init("user_ftnuhY2RHYOnSz8gwmbFJ");

const Contact = () => {
    const [userName, setName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userMessage, setMessage] = useState("");
    const [errorMessage, setErrors] = useState("Enter the Fields");

    const validate = () => {
        if (userName === "" || userEmail === "" || userMessage === "")
            return false
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userEmail) === false)
            return false

        return true
    }
    const sendEmail = (e) => {
        e.preventDefault();
        if (validate())
            emailjs.send("gmail", "template_kcj1o3s", {
                user_email: userEmail,
                user_name: userName,
                message: userMessage,
            })
                .then(response => alert(`Message sent, status + ${response.status}`))
                .catch(err => alert(err))
        else
            alert('Please fill the fields correctly')
    }
    const userNameHandler = (e) => {
        e.preventDefault();
        let val = e.target.value;
        let err = ''
        if (e.target.name === "userName" && val === "") {
            err = <strong style={{ color: `red` }}>Please enter a correct Name</strong>
        }

        setErrors(err)
        setName(val)
    }
    const userEmailHandler = (e) => {
        e.preventDefault();
        let val = e.target.value;
        let err = ''
        if (e.target.name === "userEmail" && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val) === false)
            err = <strong style={{ color: `red` }}>Please enter a valid email</strong>

        setErrors(err)
        setEmail(val)
    }
    const userMessageHandler = (e) => {
        e.preventDefault();
        let val = e.target.value;
        let err = ''
        if (e.target.name === "userMessage" && val === "")
            err = <strong style={{ color: `red` }}>Please enter a message</strong>

        setErrors(err)
        setMessage(val)
    }

    return (
        <div style={{ maxWidth: `600px`, margin: `auto`, padding: `10px 15px` }}>
            <h3> Feeling Formal ?</h3>
            <p>Send a quick message, and let's connect</p>
            <form className="contact-form md-form" onSubmit={sendEmail} style={{
                display: `grid`
            }}>
                <input type="hidden" name="contact_number" />
                <div className="form-group">
                    {/* <label>Name</label> */}
                    <input placeholder="Name" className="form-control" type="text" name="userName" value={userName} onChange={userNameHandler} />
                </div>

                <div className="form-group">
                    {/* <label>Email</label> */}
                    <input placeholder="Email@hotmail.com"className="form-control" type="email" name="userEmail" value={userEmail} onChange={userEmailHandler} />
                </div>
                <div className="form-group">
                    {/* <label>Message</label> */}
                    <textarea placeholder="say hi!!"className="md-textarea form-control" name="userMessage" value={userMessage} onChange={userMessageHandler} />
                </div>
                {
                    errorMessage !== '' &&
                    errorMessage
                }
                {
                    errorMessage === '' &&
                    <input type="submit" className="btn btn-dark" value="send" />
                }

            </form>

        </div>

    )
}

export default Contact






