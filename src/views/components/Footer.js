import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_bg">
        <div className="footer_container container grid">
          <div>
            <h1 className="footer_title">MineImages</h1>
            <span className="footer_subtitle">การเขียนโปรแกรมบนเว็บเพื่อท้องถิ่น</span>
          </div>
          <ul className="footer_links">
            <li>
              <a href="#" className="footer_link">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="footer_link">
                Image History
              </a>
            </li>
            <li>
              <a href="#" className="footer_link">
                Cart
              </a>
            </li>
			<li>
              <a href="#contact" className="footer_link">
                Contact
              </a>
            </li>
          </ul>
          <div className="footer_socials">
            <a
              href="https://web.facebook.com/lacakp"
              target="_blank"
              className="footer_social"
            >
              <i className="uil uil-facebook-f" />
            </a>
            <a
              href="https://www.linkedin.com/in/lacakp/"
              target="_blank"
              className="footer_social"
            >
              <i className="uil uil-linkedin" />
            </a>
            <a
              href="https://www.github.com/lacakp"
              target="_blank"
              className="footer_social"
            >
              <i className="uil uil-github" />
            </a>
          </div>
        </div>
        <p className="footer_copy" style={{ color: "#fff" }}>
          Copyright © 2022 All Rights Reserved by codetopanda
        </p>
      </div>
    </footer>
  );
}
