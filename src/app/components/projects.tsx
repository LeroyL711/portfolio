import styles from "../css/projects.module.css";
import laptopPic from "../images/laptop.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className={styles.projects} id="projects" data-section>
      <div className={styles.mainContainer}>
        <div className={styles.projectsHeader}>Projects</div>

        <div className={styles.projectsContainer}>
          <div className={styles.project}>
            <h3 className={styles.projectName}>CampPass</h3>
            <p className={styles.projectDescription}>
              CampPass is application that enables users to check the
              availability of daypasses for provincial parks on the BC Parks
              Website.
            </p>
            <div className={styles.imageContainer}>
              <Image
                className={styles.projectImage}
                style={{objectFit:"cover"}}
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
            <h3 className={styles.projectName}>Healthify</h3>
            <p className={styles.projectDescription}>
              Healthify is a fitness and nutrition application that leverages AI
              to generate personalized workout and meal plans for users.
            </p>
            <div className={styles.imageContainer}>
              <Image
                className={styles.projectImage}
                src={laptopPic}
                style={{objectFit:"cover"}}
                fill
                alt="Colourful picture of a laptop"
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
            <h3 className={styles.projectName}>ReQuest</h3>
            <p className={styles.projectDescription}>
              ReQuest is a community-oriented application where users can create
              posts requesting help from their neighbours, or offer help to
              anyone that is in need.
            </p>
            <div className={styles.imageContainer}>
              <Image
                className={styles.projectImage}
                src={laptopPic}
                fill
                style={{objectFit:"cover"}}
                alt="Colourful picture of a laptop"
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
              <li className={styles.tech}>Express</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
