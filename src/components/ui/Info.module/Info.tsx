import styles from "./Info.module.css";

export default function Info() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <input type="text" placeholder="Your name" className={styles.input} />
        <input type="email" name="email" id="email" placeholder="Your email address" className={styles.input} />
        <button>Subscribe</button>
      </div>
    </section>
  );
}