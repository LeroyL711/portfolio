import Image from "next/image";
import Link from "next/link";
import laptopPic from "../images/laptop.jpg";
import styles from "../css/landing.module.css";

export default function Landing() {
  return (
    <section className={styles.landing} id="landing" data-section>
      <div className={styles.socials}>
        <ul>
          <li>
            <Link
              href="https://github.com/LeroyL711"
              target="blank"
              className={styles.socialLinks}
            >
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
                alt="Link to Leroy's GitHub"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/leroy-lau/"
              target="blank"
              className={styles.socialLinks}
            >
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
                alt="Link to Leroy's LinkedIn"
                width={30}
                height={30}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.landingHeading}>
          Hey, I&apos;m <span className={styles.name}>Leroy Lau<span className={styles.period}>.</span></span>
        </div>
        <div className={styles.landingText}>
        A self-motivated, collaborative, and lifelong learner with a passion for problem-solving in the ever-evolving world of web development.
        </div>
        <div className={styles.lineDeco}></div>
      </div>
    </section>
  );
}
