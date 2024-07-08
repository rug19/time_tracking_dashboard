import styles from "./MainCard.module.css";
export default function MainCard() {
  return (
    <section>
      <div className={styles.maiProfileContainer}>
        <div className={styles.subProfileContainer}>
          <picture className={styles.imgContainer}>
            <img
              className={styles.imgProfile}
              src="time_tracking_dashboard/image-jeremy.png"
              alt="image-jeremy"
            />
          </picture>
          <p className={styles.textProfile}>Report for</p>
          <h1 className={styles.titleProfile}>Jeremy Robson</h1>
        </div>
        <ul className={styles.buttonProfile}>
          <li>
            <a href="">Daily</a>
          </li>
          <li>
            <a href="">Weekly</a>
          </li>
          <li>
            <a href="">Monthly</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
