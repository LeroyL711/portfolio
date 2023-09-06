import styles from '../css/about.module.css'

export default function about() {
  return (
    <section className={styles.about} id="about" data-section>
      <div className={styles.aboutContainer}>
          <div className={styles.aboutHeader}>
            About Me
          </div>
          <div className={styles.aboutText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi recusandae natus a labore nulla nobis perspiciatis magni maxime harum fugit culpa quidem, sint id! Mollitia non, maiores adipisci nostrum cupiditate harum alias minima eum numquam, asperiores aliquid animi. Magni magnam omnis aperiam assumenda cupiditate, dignissimos nihil et! Veniam, quasi animi.
          </div>
        </div>
        <div className={styles.heroImage}>
        </div>
    </section>
  );
}
