import styles from '../css/form.module.css'


export default function Contact() {
  return (
    <section className={styles.mainContainer} id="contact">
      <span className={styles.formHeader}>Contact Me</span>
      <div className={styles.formContainer}>
        <form action="https://formsubmit.co/9e4c59e469aea9e00d583ff2a82f4abe" method="POST">
          Full Name*<br/>
          <input type="text" name="fullname" placeholder="Your Name" required/><br/>
          Email*<br/>
          <input type="email" name="email" placeholder="Email" required/><br/>
          Message*<br/>
          <textarea name="body" rows={15} cols={60} placeholder='Your message' required></textarea><br/>
          <div className={styles.submitBtnContainer}>
            <input type="submit" value="Send" id={styles.submitBtn}/>
          </div>
        </form>
      </div>
    </section>
  )
}

