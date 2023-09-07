import Image from "next/image";
import Link from "next/link";
import laptopPic from "../images/laptop.jpg";
import styles from "../css/landing.module.css";

export default function Landing() {
  return (
    <section className={styles.hero} id="landing" data-section>
      <div className={styles.socials}>
        <ul>
          <li>
            <Link href="https://github.com/LeroyL711" target="blank" className={styles.socialLinks}>
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
                alt="Link to Leroy's GitHub"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/leroy-lau/" target="blank" className={styles.socialLinks}>
              <Image 
              src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
              alt="Link to Leroy's LinkedIn"
              width={30}
              height={30}
              />
            </Link>
          </li>
          <li>
            <Link href="https://discord.com/users/268973793425358868" className={styles.socialLinks}>
              <Image
              src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg"
              alt="Link to Leroy's Discord"
              width={30}
              height={30}/>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeading}>
            Hey, I'm <span className={styles.name}>Leroy Lau</span>
          </div>
          <div className={styles.heroText}>
            Welcome to my site! Here, you will be able to see some of the things
            I've worked on, as well as more about myself!
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
            className={styles.heroImage}
            src={laptopPic}
            fill
            alt="Colourful picture of a laptop"
          />
        </div>
      </div>
    </section>
  );
}
