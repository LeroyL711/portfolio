import styles from "../css/contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection} id="contact" data-section>
      <div className={styles.mainContainer}>
        <span className={styles.formHeader}>Contact Me</span>
        <p className={styles.formDescription}>
          {" "}
          Feel free to contact me through the form below! I will get back to you
          as soon as possible.
        </p>

        <div className={styles.formContainer}>
          <form
            action="https://formsubmit.co/9e4c59e469aea9e00d583ff2a82f4abe"
            method="POST"
          >
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Name</label>
              <input
                type="text"
                className={styles.formInput}
                name="fullname"
                placeholder="Your Name"
                required
              />
              <br />
            </div>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Email</label>
              <input
                type="email"
                className={styles.formInput}
                name="email"
                placeholder="Email"
                required
              />
              <br />
            </div>
            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Message</label>
              <textarea
                name="body"
                className={styles.formInput}
                rows={15}
                cols={60}
                placeholder="Your message"
                required
              ></textarea>
              <br />
            </div>
            <div className={styles.submitBtnContainer}>
              <input type="submit" value="Submit" id={styles.submitBtn} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
