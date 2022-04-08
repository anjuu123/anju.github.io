import React from 'react'
import {AiFillGithub,} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './Contact.css'

export default function Contact() {
  return (
    <>
          <div md={12} className="contact-social">
            <h1>CONNECT WITH ME ON</h1>
           
            <ul className="contact-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/anjuu123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  contact-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anju-dhungana/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  contact-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        
    </>
  )
}
