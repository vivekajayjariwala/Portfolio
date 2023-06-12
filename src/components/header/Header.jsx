import React from 'react';
import { useState } from 'react';
import "./header.css";



const Header = () => {

    const scrollToPortfolio = (e) => {
        e.preventDefault();

        const headerHeight = document.querySelector(".header").getBoundingClientRect().height;
        const portfolioSection = document.querySelector("#portfolio");
        const portfolioSectionTop = portfolioSection.getBoundingClientRect().top;

        window.scrollBy({
            top: portfolioSectionTop - headerHeight - 70,
            left: 0,
            behavior: "smooth",
        });

        setActiveNav("#portfolio");
    };
    // change background header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if(this.scrollY >= 70) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header"); 
    })
    /*==Toggle Menu==*/
    const[Toggle, showMenu] = useState(false); 
    const [activeNav, setActiveNav] = useState("#home")

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    Vivek Jariwala
                </a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" onClick={scrollToPortfolio} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> Portfolio
                            </a>
                        </li>


                    </ul>

                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>

            </nav>
        </header>
    )
}

export default Header