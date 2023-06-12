import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Vivek Jariwala</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/vivek-jariwala-6701711b5/" className="home__social-icon" target="_blank">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://github.com/vivekajayjariwala" className="home__social-icon" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">Vivek Jariwala. All rights reserved.</span>

            </div>
        </footer>
    );
}

export default Footer;
