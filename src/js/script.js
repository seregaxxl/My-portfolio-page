const ruBody = document.querySelector('body').innerHTML;
function eng() {
    document.querySelector('body').innerHTML = `
                <div class="language">
                <img class="language__icon" src="icons/language.png" alt="world">
                <div class="language__choices">
                    <div class="language__choice">RU</div> | <div class="language__choice">ENG</div>
                </div>
            </div>
            
            <nav>
                <div class="hamburger">
                  <span></span>
                  <span class="long"></span>
                  <span></span>
                </div>
                <div class="menu">
                    <div class="menu__block">
                        <div class="menu__close">
                            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" fill="black"/>
                                </svg>  
                        </div>
                        <ul class="menu__list">
                            <li class="menu__link"><a href="#about_me">ABOUT ME</a></li>
                            <li class="menu__link"><a href="#resume">EXPIRIENCE</a></li>
                            <li class="menu__link"><a href="#skills">SKILLS</a></li>
                            <li class="menu__link"><a href="#portfolio">WORKS</a></li>
                            <li class="menu__link"><a href="#price">PRICE</a></li>
                            <li class="menu__link"><a href="#contacts">CONTACTS</a></li>
                        </ul>
                        <div class="menu__social">
                            <a href="https://github.com/seregaxxl"><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="github_icon" d="M10 0C4.475 0 0 4.36167 0 9.74107C0 14.0457 2.865 17.6962 6.8375 18.9832C7.3375 19.0749 7.52083 18.7734 7.52083 18.5148C7.52083 18.2835 7.5125 17.6706 7.50833 16.8585C4.72667 17.4459 4.14 15.5517 4.14 15.5517C3.685 14.4274 3.0275 14.1267 3.0275 14.1267C2.12167 13.5228 3.0975 13.5352 3.0975 13.5352C4.10167 13.603 4.62917 14.5389 4.62917 14.5389C5.52083 16.0283 6.97 15.5979 7.54167 15.3493C7.63167 14.719 7.88917 14.2903 8.175 14.0466C5.95417 13.8029 3.62 12.9652 3.62 9.23304C3.62 8.16988 4.0075 7.30085 4.64917 6.61934C4.53667 6.37317 4.19917 5.3827 4.73667 4.04116C4.73667 4.04116 5.57417 3.78012 7.48667 5.03988C8.28667 4.82345 9.13667 4.71606 9.98667 4.7111C10.8367 4.71606 11.6867 4.82345 12.4867 5.03988C14.3867 3.78012 15.2242 4.04116 15.2242 4.04116C15.7617 5.3827 15.4242 6.37317 15.3242 6.61934C15.9617 7.30085 16.3492 8.16988 16.3492 9.23304C16.3492 12.9752 14.0117 13.7987 11.7867 14.0383C12.1367 14.3307 12.4617 14.928 12.4617 15.8408C12.4617 17.1444 12.4492 18.1918 12.4492 18.5082C12.4492 18.7635 12.6242 19.0683 13.1367 18.9708C17.1375 17.692 20 14.0391 20 9.74107C20 4.36167 15.5225 0 10 0Z" fill="#212121"/>
                            </svg>
                            </a>
                            <a href="https://www.instagram.com/_sivkabyrka/"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="instagram_icon" d="M5 10C5 12.7612 7.23875 15 10 15C12.7613 15 15 12.7612 15 10C15 7.23875 12.7612 5 10 5C7.23875 5 5 7.23875 5 10ZM13.125 10C13.125 11.7225 11.7225 13.125 10 13.125C8.27625 13.125 6.875 11.7225 6.875 10C6.875 8.2775 8.27625 6.875 10 6.875C11.7225 6.875 13.125 8.2775 13.125 10Z" fill="black"/>
                                <path class="instagram_icon" d="M5.29123 4.625C5.29123 4.25704 4.99295 3.95875 4.62499 3.95875C4.25703 3.95875 3.95874 4.25704 3.95874 4.625C3.95874 4.99296 4.25703 5.29125 4.62499 5.29125C4.99295 5.29125 5.29123 4.99296 5.29123 4.625Z" fill="black"/>
                                <path class="instagram_icon" d="M-6.01032e-07 6.25L-2.73196e-07 13.75C-1.22337e-07 17.2012 2.79875 20 6.25 20L13.75 20C17.2013 20 20 17.2012 20 13.75L20 6.25C20 2.79875 17.2012 -7.51891e-07 13.75 -6.01032e-07L6.25 -2.73196e-07C2.79875 -1.22337e-07 -7.51891e-07 2.79875 -6.01032e-07 6.25ZM13.75 1.875C16.1625 1.875 18.125 3.8375 18.125 6.25L18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125L6.25 18.125C3.8375 18.125 1.875 16.1625 1.875 13.75L1.875 6.25C1.875 3.8375 3.8375 1.875 6.25 1.875L13.75 1.875Z" fill="black"/>
                            </svg>    
                            </a>
                            <a href="https://facebook.com/seregaxxl"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="facebook_icon" d="M17.0698 0L2.9292 0C1.3139 0 -0.000488281 1.31439 -0.000488281 2.92969L-0.000488281 17.0703C-0.000488281 18.6856 1.3139 20 2.9292 20L8.82764 20L8.82764 12.9297L6.48389 12.9297L6.48389 9.41406L8.82764 9.41406L8.82764 7.03125C8.82764 5.09262 10.4046 3.51563 12.3433 3.51563L15.8979 3.51563L15.8979 7.03125L12.3433 7.03125L12.3433 9.41406L15.8979 9.41406L15.312 12.9297L12.3433 12.9297L12.3433 20L17.0698 20C18.6851 20 19.9995 18.6856 19.9995 17.0703L19.9995 2.92969C19.9995 1.31439 18.6851 0 17.0698 0Z" fill="black"/>
                            </svg>      
                            </a>
                        </div>
                    </div>
                <div class="menu__overlay">
        
                </div>
            </div>
            </nav>
            <section class="promo">
                <div class="container">
                    <div class="title title_fz16 promo__subtitle">
                        My name is Serhii Khvostikov
                    </div>
                    <h1 class="title title_fz48 promo__title">
                        I'm a web developer originally from Kyiv
                    </h1>
                    <div class="promo__btns">
                        <a href="#portfolio" class="btn promo__link">Portfolio</a>
                        <a href="#about_me" class="promo__link">About me</a>
                    </div>
                </div>
                <aside class="sidebar">
                    <div class="sidebar__text">Social medias</div> 
                    <div class="sidebar__line"></div> 
                    <a href="https://github.com/seregaxxl" class="sidebar__icons"><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="github_icon" d="M-4.37114e-07 9.99951C-1.95608e-07 15.5245 4.36167 19.9995 9.74107 19.9995C14.0457 19.9995 17.6962 17.1345 18.9832 13.162C19.0749 12.662 18.7734 12.4787 18.5148 12.4787C18.2835 12.4787 17.6706 12.487 16.8585 12.4912C17.4459 15.2728 15.5517 15.8595 15.5517 15.8595C14.4274 16.3145 14.1267 16.972 14.1267 16.972C13.5228 17.8778 13.5352 16.902 13.5352 16.902C13.603 15.8978 14.5389 15.3703 14.5389 15.3703C16.0283 14.4787 15.5979 13.0295 15.3493 12.4578C14.719 12.3678 14.2903 12.1103 14.0466 11.8245C13.8029 14.0453 12.9652 16.3795 9.23304 16.3795C8.16988 16.3795 7.30085 15.992 6.61933 15.3503C6.37316 15.4628 5.3827 15.8003 4.04116 15.2628C4.04116 15.2628 3.78012 14.4253 5.03988 12.5128C4.82345 11.7128 4.71606 10.8628 4.7111 10.0128C4.71606 9.16284 4.82345 8.31285 5.03988 7.51284C3.78012 5.61285 4.04116 4.77535 4.04116 4.77535C5.3827 4.23785 6.37316 4.57534 6.61933 4.67535C7.30085 4.03785 8.16988 3.65035 9.23304 3.65035C12.9752 3.65035 13.7987 5.98784 14.0383 8.21284C14.3307 7.86284 14.928 7.53784 15.8408 7.53784C17.1444 7.53784 18.1918 7.55034 18.5082 7.55034C18.7635 7.55034 19.0683 7.37534 18.9708 6.86284C17.692 2.86201 14.0391 -0.000488895 9.74107 -0.000488707C4.36167 -0.000488472 -6.7851e-07 4.47701 -4.37114e-07 9.99951Z" fill="#212121"/>
                        </svg></a>
                    <a href="https://www.instagram.com/_sivkabyrka/" class="sidebar__icons"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="instagram_icon" d="M-6.01032e-07 6.25L-2.73196e-07 13.75C-1.22337e-07 17.2012 2.79875 20 6.25 20L13.75 20C17.2013 20 20 17.2012 20 13.75L20 6.25C20 2.79875 17.2012 -7.51891e-07 13.75 -6.01032e-07L6.25 -2.73196e-07C2.79875 -1.22337e-07 -7.51891e-07 2.79875 -6.01032e-07 6.25ZM13.75 1.875C16.1625 1.875 18.125 3.8375 18.125 6.25L18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125L6.25 18.125C3.8375 18.125 1.875 16.1625 1.875 13.75L1.875 6.25C1.875 3.8375 3.8375 1.875 6.25 1.875L13.75 1.875Z" fill="black"/>
                        <path class="instagram_icon" d="M5 10C5 12.7612 7.23875 15 10 15C12.7613 15 15 12.7612 15 10C15 7.23875 12.7612 5 10 5C7.23875 5 5 7.23875 5 10ZM13.125 10C13.125 11.7225 11.7225 13.125 10 13.125C8.27625 13.125 6.875 11.7225 6.875 10C6.875 8.2775 8.27625 6.875 10 6.875C11.7225 6.875 13.125 8.2775 13.125 10Z" fill="black"/>
                        <path class="instagram_icon" d="M5.29123 4.625C5.29123 4.25704 4.99295 3.95875 4.62499 3.95875C4.25703 3.95875 3.95874 4.25704 3.95874 4.625C3.95874 4.99296 4.25703 5.29125 4.62499 5.29125C4.99295 5.29125 5.29123 4.99296 5.29123 4.625Z" fill="black"/>
                        </svg></a>
                    <a href="https://www.facebook.com/seregaxxl" class="sidebar__icons"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="facebook_icon" d="M-7.46167e-07 2.92969L-1.28061e-07 17.0703C-5.74539e-08 18.6856 1.31439 20 2.92969 20L17.0703 20C18.6856 20 20 18.6856 20 17.0703L20 11.1719L12.9297 11.1719L12.9297 13.5156L9.41406 13.5156L9.41406 11.1719L7.03125 11.1719C5.09262 11.1719 3.51562 9.59488 3.51562 7.65625L3.51562 4.10156L7.03125 4.10156L7.03125 7.65625L9.41406 7.65625L9.41406 4.10156L12.9297 4.6875L12.9297 7.65625L20 7.65625L20 2.92969C20 1.31439 18.6856 -8.16774e-07 17.0703 -7.46167e-07L2.92969 -1.28061e-07C1.31439 -5.74539e-08 -8.16774e-07 1.31439 -7.46167e-07 2.92969Z" fill="black"/>
                        </svg></a>
                </aside>
            </section>
            <section class="about_me" id="about_me">
                <div class="container">
                    <div class="grid-cotainer">
                        <div class="photo" id="grid-elem_foto">
                            <picture>
                                <source media="(max-width: 576px)" srcset="img/Photo_1_mobile.jpg">
                                <source media="(min-width: 577px)" srcset="img/photo_1.jpg">
                                <img src="img/photo_1.jpg" alt="photo_of_mine">
                            </picture>                                        
                        </div>
                        <div class="biografy_text" id="grid-elem_biografy_text">
                            <div class="title title_fz16 about_me__subtitle">
                                About me
                            </div>
                            <h1 class="title about_me__title ">My name is Sergey</h1>
                            <div class="yellow_line"></div>
                            <span> In the childhood i liked videogames and PC, in the middle school i reassembled my PC. After school I studied for 1 year in Taras Shevchenko National University of Kyiv at the Cybernetics Faculty.
                            Then I changed University to Kyiv National University of Trade and Economics. After graduation, I worked in different jobs, in different countries,
                            but software development and computers remained as my passion, so i restarted my development career, finished several courses and now I'm a freelance web-developer.
                            I know C++ at a basic level, it was the first programming language that i have learned. My main skills are HTML, CSS, JavaScript.</span>
                        </div>
                        <div class="my_skills" id="grid-subcontainer_my_skills">     
                            <div class="grid-elem" id="grid-elem_web_dev">
                                <div class="my_skills__icon"><img src="icons/about_me/web_development.svg" alt=""></div>
                                <div class="my_skills__text">
                                    <div class="title title_fz14">
                                        Web-development
                                    </div>
                                    <span>I'm using my skills at 100% to do my job as a webdev</span>
                                </div>
                            </div>
                            <div class="grid-elem" id="grid-elem_copyright">
                                <div class="my_skills__icon"><img src="icons/about_me/text.svg" alt="text_icon"></div>
                                <div class="my_skills__text">
                                    <div class="title title_fz14">Copywriting</div>
                                    <span>I have a big experience as a copywriter, also I'm writing <a href="https://pikabu.ru/story/smertenelno_6060675">novels</a></span>
                                </div>
                            </div>
                            <div class="grid-elem" id="grid-elem_hosting">
                                <div class="my_skills__icon"><img src="icons/about_me/design.svg" alt=""></div>
                                <div class="my_skills__text">
                                    <div class="title title_fz14">Dev-Ops</div>
                                    <span>My hobbie is administration of remote servers, where some of my project are running</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="resume" id="resume">
                <div class="container">
                    <h2 class="title title_fz16 title__subtitle">Exp</h2>
                    <div class="title title_fz36 title__title">How can I be useful</div>
                    <div class="yellow_line"></div>
                    <div class="resume__wrapper">
                        <div class="resume__column">
                            <h3 class="title title_fz20 resume__column-title">Education</h3>
                            <ul>
                                <li>
                                    <div class="resume__item">
                                        <div class="resume__item-head">
                                            <div class="resume__item-icon">
                                                <img src="icons/experience/university.svg" alt="university">
                                            </div>
                                            <h4 class="title title_fz14">Kyiv National University of Trade and Economics</h4>
                                            <div class="resume__item-location">
                                                Bachelor degree 2009-2014
                                            </div>
                                        </div>
                                        <div class="resume__item-body">
                                        Econnnomic degree in one of the best ukrainian universities, main knowledge I have acquired fluent english, understanding of finance and economy of projects, strategic planning.
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="resume__item">
                                        <div class="resume__item-head">
                                            <div class="resume__item-icon">
                                                <img src="icons/experience/courses.svg" alt="courses">
                                            </div>
                                            <h4 class="title title_fz14">CS50 Harvard</h4>
                                            <div class="resume__item-location">
                                                Course CS50 Harvard (Prometheus platform) 2021
                                            </div>
                                        </div>
                                        <div class="resume__item-body">
                                            This course was my comeback into developer's world, it restored my basic knowledge about programming, refreshed C++ knowledge,
                                            gave me some python and PHP skills.<a href="img/certificates/CS50.pdf">Certificate</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="resume__item">
                                        <div class="resume__item-head">
                                            <div class="resume__item-icon">
                                                <img src="icons/experience/courses.svg" alt="courses">
                                            </div>
                                            <h4 class="title title_fz14">Responsive Web Design</h4>
                                            <div class="resume__item-location">
                                                FreeCodeCamp Responsive Web Design 2022
                                            </div>
                                        </div>
                                        <div class="resume__item-body">
                                            This course helped me to take my first steps like a web developer, after completing it i gained HTML and CSS basics <a href="img/certificates/FCC_cert.jpg">Certificate</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="resume__item">
                                        <div class="resume__item-head">
                                            <div class="resume__item-icon">
                                                <img src="icons/experience/courses.svg" alt="courses">
                                            </div>
                                            <h4 class="title title_fz14">Udemy</h4>
                                            <div class="resume__item-location">
                                                Web-development course 2022 
                                            </div>
                                        </div>
                                        <div class="resume__item-body">
                                            Course that helped me to evolve profoundly as a web developer, this course upgrade my skills in HTML and CSS to confident level. With its assistance i created my first projects and this website <a href="img/certificates/Udemy Serificate.pdf">Certificate</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="resume__column">Expirience</h3>
                            <ul>
                                <li>
                                    <div class="resume__item">
                                        <div class="resume__item-head">
                                            <div class="resume__item-icon">
                                                <img src="icons/experience/developer.svg" alt="computer">
                                            </div>
                                            <h4 class="title title_fz14">Senior Specialist</h4>
                                            <div class="resume__item-location">
                                                OTP Bank 2012-2014
                                            </div>
                                        </div>
                                        <div class="resume__item-body">
                                            My main achievment was creation of CRM system with a help of Microsoft Infopath
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="resume__item">
                                        <div class="resume__item-head">
                                            <div class="resume__item-icon">
                                                <img src="icons/experience/dollar.svg" alt="dollar">
                                            </div>
                                            <h4 class="title title_fz14">Economist</h4>
                                            <div class="resume__item-location">
                                                Mushroom rainbow 2018-2020
                                            </div>
                                        </div>
                                        <div class="resume__item-body">
                                                Development, implementation and run of strategic finance-economical plan with a help of Microsoft Excel.
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="resume__item">
                                        <div class="resume__item-head">
                                            <div class="resume__item-icon">
                                                <img src="icons/experience/designer.svg" alt="computer">
                                            </div>
                                            <h4 class="title title_fz14">Senior support engineer</h4>
                                            <div class="resume__item-location">
                                                Ecommpay 2020-2022
                                            </div>
                                        </div>
                                        <div class="resume__item-body">
                                            Technical support of financial project based on PHP and JS
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="resume__item">
                                        <div class="resume__item-head">
                                            <div class="resume__item-icon">
                                                <img src="icons/experience/developer.svg" alt="computer">
                                            </div>
                                            <h4 class="title title_fz14">Front-End Developer</h4>
                                            <div class="resume__item-location">
                                                Freelance 2022
                                            </div>
                                        </div>
                                        <div class="resume__item-body">
                                            Website development, code review, editing existing projects
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
        
                </div>
            </section>
            <section class="skills" id="skills">
                <div class="container">
                    <div class="title title_fz16 title__subtitle">
                        Skills
                    </div>
                    <h1 class="title title__title ">What do i use in work</h1>
                    <div class="yellow_line"></div>
                    <div class="skills_grid-container">
                        <div class="skills_grid-container__element">
                            <img src="icons/skills/html5.svg" alt="HTML">
                            <div class="title title_fz14">HTML5</div>
                            <div class="skills_grid-container__element-text">HTML creates a basic layout of a website and a 5 version allows me to make great SEO optimization</div>
                        </div>
                        <div class="skills_grid-container__element">
                            <img src="icons/skills/css3.svg" alt="CSS">
                            <div class="title title_fz14">CSS3</div>
                            <div class="skills_grid-container__element-text">This style language let me to create a variable design of a website. Design is limited only by imagination!Also i work with SASS/SCSS/LESS</div>
                        </div>
                        <div class="skills_grid-container__element">
                            <img src="icons/skills/js.svg" alt="JavaScript">
                            <div class="title title_fz14">Java Script</div>
                            <div class="skills_grid-container__element-text">This programming language allows make a website live and interactive: sliders, modal windows, hints, tabs, interaction with server </div>
                        </div>
                        <div class="skills_grid-container__element">
                            <img src="icons/skills/jquery.svg" alt="jquery">
                            <div class="title title_fz14">Jquery</div>
                            <div class="skills_grid-container__element-text"> Jquery helps to speed up development. Almost all its functionality exists in native JS, but Jquery knowledge is a usefull skill </div>
                        </div>
                        <div class="skills_grid-container__element">
                            <img src="icons/skills/php.png" alt="php" style="width: 60px">
                            <div class="title title_fz14">PHP and AJAX</div>
                            <div class="skills_grid-container__element-text">PHP and AJAX provide client-server interaction, allowing to work with back-end</div>
                        </div>
                        <div class="skills_grid-container__element">
                            <img src="icons/skills/gulp.svg" alt="gulp" style="width: 60px">
                            <div class="title title_fz14">Gulp</div>
                            <div class="skills_grid-container__element-text">Gulp is a task manager for frequently used tasks, using it with npm greatly accelerate development</div>
                        </div>
                        <div class="skills_grid-container__element">
                            <img src="icons/skills/git.png" alt="git" style="width: 60px">
                            <div class="title title_fz14">Git</div>
                            <div class="skills_grid-container__element-text">A distributed version control system Git saves a interim versions of work, wich allows to roll back if something went wrong, also git is a great tool for working in team on the same project.</div>
                        </div>
                    </div>
                    <div class="scale">
                        <div class="scale_element">
                            <div class="scale_element-text">
                                <div class="title title_fz14">Web development</div>
                                <div class="scale_percent">95%</div>   
                            </div>
                            <div class="scale_bg">
                                <div class="scale_fill"></div>
                            </div>
                        </div>
                        <div class="scale_element">
                            <div class="scale_element-text">
                                <div class="title title_fz14">Creativity</div>
                                <div class="scale_percent">95%</div>   
                            </div>
                            <div class="scale_bg">
                                <div class="scale_fill"></div>
                            </div>
                        </div>
                        <div class="scale_element">
                            <div class="scale_element-text">
                                <div class="title title_fz14">Soft skills</div>
                                <div class="scale_percent">95%</div>   
                            </div>
                            <div class="scale_bg">
                                <div class="scale_fill"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="portfolio" id="portfolio">
                <div class="container">
                    <div class="title title_fz16 title__subtitle">
                        Portfolio
                    </div>
                    <h1 class="title title__title ">My works</h1>
                    <div class="yellow_line"></div>
                    <div class="portfolio__wrapper">
                        <a href="uber" class="portfolio__item">
                            <img src="img/works/uber.jpg" alt="Uber">
                        </a>
                        <a href="pulse" class="portfolio__item">
                            <img src="img/works/pulse.jpg" alt="Pulse">
                        </a>
                        <a href="parallax" class="portfolio__item">
                            <img src="img/works/breadf.jpg" alt="Forest">
                        </a>
                        <a href="food" class="portfolio__item portfolio__item_vertical-2">
                            <img src="img/works/paprika.jpg" alt="Paprika">
                        </a>
                        <a href="#" class="portfolio__item">
                            <img src="img/works/ipadf.jpg" alt="Ipad">
                        </a>
                        <a href="#" class="portfolio__item portfolio__item_horizontal-2">
                            <img src="img/works/macf.jpg" alt="Mac">
                        </a>
                    </div>
                </div>
            </section>
            <section class="contacts" id="contacts">
                <div class="container">
                    <div class="contacts__wrapper">
                        <div class="contacts__foto s-invisible"><img src="img/Untitled.jpg" alt="photo_of_mine"></div>
                        <div class="contacts__descr">
                            <div class="title title_fz16 contacts__subtitle">
                                Contacts
                            </div>
                            <h1 class="title contacts__title">Write to me</h1>
                            <div class="yellow_line"></div>
                            <div class="title title_fz14 contacts__text">in any way convenient for you :</div>
                            <div class="contacts__social">
                                <a href="https://facebook.com/seregaxxl" class="contacts__link"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="facebook_icon" d="M17.0698 0L2.9292 0C1.3139 0 -0.000488281 1.31439 -0.000488281 2.92969L-0.000488281 17.0703C-0.000488281 18.6856 1.3139 20 2.9292 20L8.82764 20L8.82764 12.9297L6.48389 12.9297L6.48389 9.41406L8.82764 9.41406L8.82764 7.03125C8.82764 5.09262 10.4046 3.51563 12.3433 3.51563L15.8979 3.51563L15.8979 7.03125L12.3433 7.03125L12.3433 9.41406L15.8979 9.41406L15.312 12.9297L12.3433 12.9297L12.3433 20L17.0698 20C18.6851 20 19.9995 18.6856 19.9995 17.0703L19.9995 2.92969C19.9995 1.31439 18.6851 0 17.0698 0Z" fill="black"/>
                                </svg></a>
                                <a href="https://t.me/seregaxxl" class="contacts__link"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="telegram_icon" d="M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375 14.675Z" fill="black"/>
                                    </svg>
                                    </a>
                                <a href="https://www.instagram.com/_sivkabyrka/" class="contacts__link"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="instagram_icon" d="M5 10C5 12.7612 7.23875 15 10 15C12.7613 15 15 12.7612 15 10C15 7.23875 12.7612 5 10 5C7.23875 5 5 7.23875 5 10ZM13.125 10C13.125 11.7225 11.7225 13.125 10 13.125C8.27625 13.125 6.875 11.7225 6.875 10C6.875 8.2775 8.27625 6.875 10 6.875C11.7225 6.875 13.125 8.2775 13.125 10Z" fill="black"/>
                                    <path class="instagram_icon" d="M5.29123 4.625C5.29123 4.25704 4.99295 3.95875 4.62499 3.95875C4.25703 3.95875 3.95874 4.25704 3.95874 4.625C3.95874 4.99296 4.25703 5.29125 4.62499 5.29125C4.99295 5.29125 5.29123 4.99296 5.29123 4.625Z" fill="black"/>
                                    <path class="instagram_icon" d="M-6.01032e-07 6.25L-2.73196e-07 13.75C-1.22337e-07 17.2012 2.79875 20 6.25 20L13.75 20C17.2013 20 20 17.2012 20 13.75L20 6.25C20 2.79875 17.2012 -7.51891e-07 13.75 -6.01032e-07L6.25 -2.73196e-07C2.79875 -1.22337e-07 -7.51891e-07 2.79875 -6.01032e-07 6.25ZM13.75 1.875C16.1625 1.875 18.125 3.8375 18.125 6.25L18.125 13.75C18.125 16.1625 16.1625 18.125 13.75 18.125L6.25 18.125C3.8375 18.125 1.875 16.1625 1.875 13.75L1.875 6.25C1.875 3.8375 3.8375 1.875 6.25 1.875L13.75 1.875Z" fill="black"/>
                                </svg>  </a>
                            </div>
                            <div class="title title_fz14 contacts__text">Or left your contacts, so i can reach you:</div>
                            <form class="contacts__form">
                                <div class="contacts__input">
                                    <input required name="name" id="name" type="text">
                                    <label for="name">Your name</label>
                                </div>
                                <div class="contacts__input">
                                    <input required name="email" id="email" type="email">
                                    <label for="email">Your e-mail</label>
                                </div>
                                <div class="contacts__textarea">
                                    <textarea name="text" id="text" cols="30" rows="10"></textarea>
                                    <label for="text">Your message</label>
                                </div>
                                <div class="contacts__triggers">
                                    <button type="submit" class="btn contacts__btn">Send message</button>
                                </div>
                                <div class="contacts__privacy">
                                    <input required type="checkbox"> <span> I accept the <a href="/privacy.html">privacy policy</a> </span>  
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <script
          src="https://code.jquery.com/jquery-3.6.1.min.js"
          integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
          crossorigin="anonymous"></script>
            <script src="js/jquery.validate.min.js"></script>
            <script src="js/script.js"></script>
                `;
}
function main() {
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'); 
        
    hamburger.addEventListener('click', () => {
        menu.classList.add('menu_active');

    });

    document.querySelectorAll('.menu__close, .menu__link').forEach(e => e.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    }));

    const counters = document.querySelectorAll('.scale_percent'),
        lines = document.querySelectorAll('.scale_fill');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    document.querySelector('.language__icon').addEventListener('click', e => {
        document.querySelector('.language__choices').classList.toggle('activechoices');
    });
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          alert("Сообщение успешно отправлено");
          $("form").trigger("reset");
        });
        return false;
    });
    document.querySelectorAll('.language__choice').forEach((e, i) => {
        e.addEventListener('click', e => {
            document.querySelector('.language__choices').classList.toggle('activechoices');
        });
        if (i == 0) {
            e.addEventListener('click', e => {
                document.querySelector('body').innerHTML = ruBody;
                main();
            });
        } else {
            e.addEventListener('click', e => {
                eng();
                main();
            });
        }
    });

}
eng();
main();








//
// jQuery.validator.setDefaults({
//   debug: false,
//   success: "valid"
// });

// function validateForms(form) {
//     $(form).validate({
//       rules: {
//         name: {
//           required: true,
//           minlength: 2
//         },
//         email: {
//           required:true,
//           email: true
//           }
//         },
//       messages: {
//         name:{
//           required: "Пожалуйста, укажите Ваше имя",
//           minlength: jQuery.validator.format("Имя не может быть короче {0} символов!")
//         },
//         email: {
//           required: "Пожалуйста, укажите Ваш e-mail",
//           email: "Используйте формат name@domain.com"
//         }
//       }
//     });
//   };

// validateForms('.contacts__form');



