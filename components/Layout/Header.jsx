import React from "react";
import Image from "next/image";
import TelephoneIcon from "../icons/TelephoneIcon";
import EmailIcon from "../icons/EmailIcon";
import TelegramIcon from "../icons/TelegramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon";
import FacebookIcon from "../icons/FacebookIcon";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  return (
    <header className="header">
      <div className="header__avatar">
        <div className="avatar-wrapper">
          <div className="avatar-main">
            <Image src="/img/av.png" alt="avatar" width="110" height="110" />
          </div>
          <div className="sunglesses">
            <Image
              src="/img/sunglesses.png"
              alt="sunglesses"
              width="75"
              height="75"
            />
          </div>
        </div>
      </div>
      <div className="header__info">
        <div className="header__links">
          <h1 className="header__name">
            {router.route === "/ua" ? "Сергій Сав'юк" : "Serhii Saviuk"}
          </h1>
          <ul className="header__contacts">
            <li>
              <a
                href="https://www.linkedin.com/in/serhii-saviuk-910aab168/"
                rel="author"
              >
                <LinkedinIcon />
                <span>Serhii Saviuk</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/varekai-dev" rel="author">
                <GithubIcon />
                <span>varekai-dev</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/serhijsav" rel="author">
                <FacebookIcon />
                <span>serhijsav</span>
              </a>
            </li>

            <li>
              <a href="https://t.me/serhijsav" rel="author">
                <TelegramIcon />
                <span>@serhijsav</span>
              </a>
            </li>
            <li>
              <a href="mailto:serhijsav@gmail.com" rel="author">
                <EmailIcon />
                <span>serhijsav@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+380964983420" rel="author">
                <TelephoneIcon />
                <span>+38 (096) 4983420</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="header__about">
          <h2>{router.route === "/ua" ? "Резюме" : "Resume"} </h2>
          <p>
            {router.route === "/ua"
              ? "Привіт. Я новачок у фронтенді, однак, я маю пристрасть працювати з HTML, CSS та JS. Я люблю створювати щось нове, що буде працювати потім"
              : "— Hello! I am a newbie in the frontend, however, I have a passion to work with HTML, CSS, and JS. I love to create something new that will work after"}{" "}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
