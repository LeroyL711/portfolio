import styles from '../css/contact.module.css'


export default function Contact() {
  return (
    <section className={styles.contactSection} id="contact" data-section>
      <div className={styles.mainContainer}>
        <span className={styles.formHeader}>Contact Me</span>
        <p className={styles.formDescription}> Feel free to contact me through the form below! I will get back to you as soon as possible.</p>
        
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
      </div>
    </section>
  )
}

