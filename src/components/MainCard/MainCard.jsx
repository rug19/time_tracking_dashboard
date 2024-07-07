import styles from './MainCard.module.css'
export default function MainCard() {
  return (
    <section>
      <div className={styles.mainCardContainer}>
        <picture>
          <img src="time_tracking_dashboard/image-jeremy.png" alt="image-jeremy" />
        </picture>
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </div>
      <ul>
        <li>
          <button>Daily</button>
        </li>
        <li>
          <button>Weekly</button>
        </li>
        <li>
          <button>Monthly</button>
        </li>
      </ul>
    </section>
  );
}
