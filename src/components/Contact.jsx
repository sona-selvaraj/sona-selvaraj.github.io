import { useState } from 'react';
import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
// import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full bg-[#0a192f] text-gray-300 py-6 px-4 flex flex-col items-center justify-center">
      <p className="text-lg font-semibold mb-4">Connect with me on social media:</p>

      <div className="flex space-x-6 text-2xl mb-4">
        <a href="https://github.com/sona-selvaraj/" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/sona-selvaraj/" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-white" />
        </a>
        <a href="mailto:sonaselvaraj2401@gmail.com">
          <FaEnvelope className="hover:text-white" />
        </a>
        <a href="tel:+17745359352">
          <FaPhone className="hover:text-white" />
        </a>
      </div>

      <div className="text-sm text-center space-y-1">
        <p>Email: <a href="mailto:sonaselvaraj2401@gmail.com" className="text-cyan-400 hover:underline">sonaselvaraj2401@gmail.com</a></p>
        <p>Phone: <a href="tel:+17745359352" className="text-cyan-400 hover:underline">+1 7745359352</a></p>
      </div>

      <hr className="w-full my-4 border-gray-700" />
      <p className="text-xs text-gray-500">Made with React JS</p>
    </div>
  );
};

export default Contact;
