import type { NextPage } from "next";
import Github from "../assets/github.webp";
import Linkedin from "../assets/linkedin.webp";
import Instagram from "../assets/instagram.webp";
import Gmail from "../assets/gmail.webp";

export const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <div className="footer_copyright">
        <p className="footer_copyright_textOne">Designed By Wesley Rose </p>
        <p className="footer_copyright_textTwo">Copyright &copy; Astral Development</p>
      </div>
      <div className="footer_socialMedia">
        <p>Connect with me!</p>
        <div className="footer_socialMedia_links">
          <img
            src={Github.src}
            alt=""
            onClick={() => window.open("https://github.com/mafiolive", "_blank")}
          />
          <img
            src={Gmail.src}
            alt=""
            onClick={() => window.open("mailto:wesleyrose06@gmail.com", "_blank")}
          />
        </div>
      </div>
    </footer>
  );
};
