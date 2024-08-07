import styles from "./SubCard.module.css";
import PropTypes from "prop-types";

export default function SubCard({ background, image, action, time, event }) {
  return (
    <section className={styles.mainContainer}>
      <div className={`${styles.subCard} ${styles[background]}`}>
        <img className={styles.cardImg} src={image} alt="card img" />
        <div className={styles.card}>
          <div className={styles.actionContainer}>
            <p className={styles.textAction}>{action}</p>
            <img
              src={`${import.meta.env.VITE_PUBLIC_URL}icon-ellipsis.svg`}
              alt=""
            />
          </div>
          <div className={styles.timeContainer}>
            <h1 className={styles.titleAction}>{time}</h1>
            <p className={styles.titleTextAction}>{event}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

SubCard.propTypes = {
  background: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
};
