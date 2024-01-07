import { useState } from 'react';
import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
// import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    emailjs.sendForm("service_p0dbhsf", "template_8tmrsia", e.target, "UIB0V22w4Ve0a3EX7")
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
  };
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_p0dbhsf', 'template_8tmrsia', form.current, 'UIB0V22w4Ve0a3EX7')
      .then((result) => {
        // show the user a success message
        alert("successfully sent an email")
      }, (error) => {
        // show the user an error
        alert(error)
      });
  }
  return (
    <div
      name="contact"
      className="w-full h-screen p-4"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto md:h-screen">
        <div className="pb-8">
          <p className="flex justify-center text-4xl font-bold inline text-purple-800 border-b-2 content-center">
            Contact
          </p>
          <p className="flex justify-center text-xl py-6 font-bold text-purple-800" >Get in touch</p>
        </div>

        <div className=" flex justify-center items-center">
        {/* <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="from_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="from_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="message"
          placeholder="Message…"
          required
        />
        <button>click me</button>
        <Button type="submit" color="green">Submit</Button>
      </Form> */}
          <form
            ref = {form}
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            onSubmit={sendEmail}
          >
            <textarea
              type="text"
              // value={toSend.from_name}
              name="from_name"
              rows="1"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
              type="text"
              rows="1"
              name="from_email"
              // value={toSend.reply_to}
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="7"
              className="p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" onClick={() => sendEmail()}> Let's Talk</button>
            {/* <button >
              Let's talk
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
