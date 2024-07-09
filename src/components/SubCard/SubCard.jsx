import styles from "./SubCard.module.css";
import PropTypes from "prop-types";

export default function SubCard({ background, image, action, time, event }) {
  return (
    <section>
      {/* Para acessar uma classe dinamicamente é preciso utilizar o colchete para especifica a classe que deseja acessar  */}
      <div className={`${styles.card} ${styles[background]}`}>
        <img src={image} alt="" />
        <div>
          <p>{action}</p>
          <img src="" alt="" />
        </div>
        <h1>{time}</h1>
        <p>{event}</p>
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
