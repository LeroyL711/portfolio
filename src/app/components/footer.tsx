"use client";
import "../css/footer.css";
import Image from "next/image";
import githubIcon from "../images/github-ico.png";
import linkedInIcon from "../images/linkedin-ico.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerContent">
          <div className="footerBox1">
            <div className="footerLogo">LEROY LAU</div>
            <p>© 2023 Leroy Lau. All rights reserved.</p>
          </div>
          <div className="footerBox2">
            <div className="footerSocials">
              <h3 className="socialsHeading">SOCIALS</h3>
              <ul>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/leroy-lau/"
                    target="blank"
                    className="socialLinks"
                  >
                    <Image
                      src={linkedInIcon}
                      alt="Link to Leroy's LinkedIn"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/LeroyL711" target="blank">
                    <Image
                      src={githubIcon}
                      alt="Link to Leroy's GitHub"
                      width={30}
                      height={30}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
