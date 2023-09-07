import styles from "../css/about.module.css";

export default function about() {
  return (
    <section className={styles.about} id="about" data-section>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>About Me</div>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              Coming from a background in Molecular Biology, I was fascinated at
              the machinery involved in the analysis of DNA and other protein
              samples. Seeing these machines in action piqued my curiosity as to how
              they worked and led me down the rabbit hole that is the world of
              programming.{" "}
            </p>
            <br />
            <p>
              As someone who finds joy in learning new things, programming turned
              out to be a great match. This led me to enroll at BCIT where I
              learned new programming languages and developed my foundations.
              Eager for fresh challenges and the opportunity to embrace new
              technologies, I am currently on the hunt for a <strong>Co-op position as a
              Software Developer</strong>.
            </p>
            <br/>
            <p>
              Away from the screen, I can often be found in the mountains, whether hiking or camping. I am also always in search of hidden gems to dine in, and I love to spend time with my dogs!
            </p>
          </div>
          <div className={styles.skillsSection}>
            <h2 className={styles.skillsHeading}>Skills</h2>
            <ul className={styles.aboutSkills}>
              <li className={styles.aboutSkill}>HTML</li>
              <li className={styles.aboutSkill}>CSS</li>
              <li className={styles.aboutSkill}>BootStrap</li>
              <li className={styles.aboutSkill}>JavaScript</li>
              <li className={styles.aboutSkill}>Java</li>
              <li className={styles.aboutSkill}>React</li>
              <li className={styles.aboutSkill}>Node.js</li>
              <li className={styles.aboutSkill}>Express</li>
              <li className={styles.aboutSkill}>Firebase</li>
              <li className={styles.aboutSkill}>MongoDB</li>
              <li className={styles.aboutSkill}>GitHub</li>
              <li className={styles.aboutSkill}>Python</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.heroImage}></div>
    </section>
  );
}
