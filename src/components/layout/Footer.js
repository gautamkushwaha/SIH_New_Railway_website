
import React from "react";
import Link from 'next/link'


import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaLinkedin,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
    return (

    <footer>
      <div class="top">
        <div class="pages">
          <ul>
            <h3>India Railways</h3>
            <li><a href="#">Home</a></li>
            <li><a href="#">GoTo</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <ul>
            <h3>Book Tickets</h3>
            <li><a href="#">Apply Online</a></li>
            <li><a href="#">Available Positions</a></li>
          </ul>

          <ul>
            <h3>About Us</h3>
            <li><a href="#">Meet Our Team</a></li>
            <li><a href="#">Our Responsibilities</a></li>
            <li><a href="#">Our Codes</a></li>
            <li><a href="#">Our Values</a></li>
          </ul>
        </div>
        <div class="newsletter">
          <h3>Stay in Touch</h3>
          <form>
            <input
              type="email"
              name="newsletter_email"
              id="newsletter_email"
              placeholder="Email"
            />
            <input type="button" value="Submit" />
          </form>
        </div>
      </div>
      <div class="social">
      <Link href="https://www.linkedin.com/">
                    <a target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </Link>
        <Link href="https://github.com/">
                    <a target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare />
                    </a>
                </Link>
        <Link href="https://www.facebook.com/">
                    <a target="_blank" rel="noopener noreferrer">
                        <FaFacebookSquare />
                    </a>
                </Link>
        <Link href="https://www.instagram.com/">
                    <a target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </Link>
        <Link href="https://twitter.com/">
                    <a target="_blank" rel="noopener noreferrer">
                        <FaTwitterSquare />
                    </a>
                </Link>
      </div>
      {/* <div class="social">
  <FaLinkedin />
  <FaGithubSquare />
  <FaFacebookSquare />
  <FaInstagram />
  <FaTwitterSquare />
  Add more icons as needed 
  <FaYoutube /> 
</div> */}
      <div class="info">
        <div class="legal">
          <a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a>
        </div>
        <div class="copyright">2021 Copyright &copy; Sean B</div>
      </div>
    </footer>
    );
}
