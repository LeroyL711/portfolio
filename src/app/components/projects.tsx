import styles from "../css/projects.module.css";
import laptopPic from "../images/laptop.jpg";
import healthifyPic from "../images/Healthify.png";
import reQuestPic from "../images/ReQuest.png";
import gitHubIcon from "../images/github-black.png";
import linkIcon from "../images/link-black.png";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className={styles.projects} id="projects" data-section>
      <div className={styles.mainContainer}>
        <div className={styles.projectsHeader}>Projects</div>

        <div className={styles.projectsContainer}>
          <div className={styles.project}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectName}>CampPass</h3>
              <div className={styles.links}>
                <Link
                  href="https://github.com/LeroyL711/CampPass"
                  target="blank"
                  className={styles.link}
                >
                  <Image
                    src={gitHubIcon}
                    height={16}
                    width={16}
                    alt="Link to CampPass repo"
                  />
                </Link>
              </div>
            </div>
            <p className={styles.projectDescription}>
              CampPass is application that enables users to check the
              availability of daypasses for provincial parks on the BC Parks
              Website.
            </p>
            <div className={styles.imageContainer}>
              <Image
                className={styles.projectImage}
                style={{ objectFit: "cover" }}
                src={laptopPic}
                fill
                alt="Colourful picture of a laptop"
              />
            </div>
            <ul className={styles.techStack}>
              <li className={styles.tech}>Express.js</li>
              <li className={styles.tech}>React</li>
              <li className={styles.tech}>Node.js</li>
              <li className={styles.tech}>Python</li>
              <li className={styles.tech}>Selenium</li>
            </ul>
          </div>
          <div className={styles.project}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectName}>Healthify</h3>
              <div className={styles.links}>
                <Link
                  href="https://github.com/LeroyL711/Healthify"
                  target="blank"
                  className={styles.link}
                >
                  <Image
                    src={gitHubIcon}
                    height={16}
                    width={16}
                    alt="Link to Healthify repo"
                  />
                </Link>
                <Link
                  href="https://healthifyapp.onrender.com"
                  target="blank"
                  className={styles.link}
                >
                  <Image
                    src={linkIcon}
                    height={16}
                    width={16}
                    alt="Link to Healthify"
                  />
                </Link>
              </div>
            </div>
            <p className={styles.projectDescription}>
              Healthify is a fitness and nutrition application that leverages AI
              to generate personalized workout and meal plans for users.
            </p>
            <div className={styles.imageContainer}>
              <Image
                className={styles.projectImage}
                src={healthifyPic}
                style={{ objectFit: "cover" }}
                fill
                alt="Screen capture of Healthify UI"
              />
            </div>
            <ul className={styles.techStack}>
              <li className={styles.tech}>MongoDB</li>
              <li className={styles.tech}>Express.js</li>
              <li className={styles.tech}>React</li>
              <li className={styles.tech}>Node.js</li>
              <li className={styles.tech}>OpenAI API</li>
            </ul>
          </div>

          <div className={styles.project}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectName}>ReQuest</h3>
              <div className={styles.links}>
                <Link
                  href="https://github.com/LeroyL711/ReQuest"
                  target="blank"
                  className={styles.link}
                >
                  <Image
                    src={gitHubIcon}
                    height={16}
                    width={16}
                    alt="Link to ReQuest repo"
                  />
                </Link>
                <Link
                  href="https://request-f3da5.web.app"
                  target="blank"
                  className={styles.link}
                >
                  {" "}
                  <Image
                    src={linkIcon}
                    height={16}
                    width={16}
                    alt="Link to ReQuest"
                  />
                </Link>
              </div>
            </div>
            <p className={styles.projectDescription}>
              ReQuest is a community-oriented application where users can create
              posts requesting help from their neighbours, or offer help to
              anyone that is in need.
            </p>
            <div className={styles.imageContainer}>
              <Image
                className={styles.projectImage}
                src={reQuestPic}
                fill
                style={{ objectFit: "cover" }}
                alt="Screen capture of the ReQuest website"
              />
            </div>
            <ul className={styles.techStack}>
              <li className={styles.tech}>HTML</li>
              <li className={styles.tech}>CSS</li>
              <li className={styles.tech}>Bootstrap</li>
              <li className={styles.tech}>JavaScript</li>
              <li className={styles.tech}>Firebase</li>
              <li className={styles.tech}>Node.js</li>
              <li className={styles.tech}>Express</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
