import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import gmail from "../assets/gmail.webp";

export const About: NextPage = () => {
  return (
    <>
      <div className="about_left">
        <h1 className="about_left_head">Hi, I&apos;m Wesley Rose!</h1>
        <p className="about_left_text">
        Hi! I am Wesley Rose from Ontario, Canada. I am Software/Network Engineer.
        </p>
        <div className="about_left_socialMedia">
          <img
            src={github.src}
            alt="Link to github"
            onClick={() => window.open("https://github.com/MafioLive", "_blank")}
          />
          <img
            src={gmail.src}
            alt="Send Me a EMAIL"
            onClick={() => window.open("mailto:wesleyrose06@gmail.com", "_blank")}
          />
        </div>
        <div
          className="about_left_followme"
          onClick={() => window.open("https://github.com/MafioLive", "_blank")}
        >
          Follow me on GitHub
        </div>
      </div>
      <div className="about_right">
        <div className="about_right_profilePic" />
      </div>
    </>
  );
};
