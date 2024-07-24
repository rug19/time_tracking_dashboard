import { useEffect, useState } from "react";
import styles from "./MainCard.module.css";

export default function MainCard({ onTimeFrameChange, onDataLoaded }) {
  const [data, setData] = useState([]);
  const URL = "./time_tracking_dashboard/data.json";

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
      console.log("Fetched data:", data);
      if (onDataLoaded) {
        onDataLoaded(data); // Passa os dados para o DashboardCard
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTimeFrameClick = (event, timeFrame) => {
    event.preventDefault();
    if (onTimeFrameChange) {
      onTimeFrameChange(timeFrame);
    }
  };

  return (
    <section>
      <div className={styles.mainProfileContainer}>
        <div className={styles.subProfileContainer}>
          <picture className={styles.imgContainer}>
            <img
              className={styles.imgProfile}
              src={`${import.meta.env.VITE_PUBLIC_URL}image-jeremy.png`}
              alt="image-jeremy"
            />
          </picture>
          <div>
            <p className={styles.textProfile}>Report for</p>
            <h1 className={styles.titleProfile}>Jeremy Robson</h1>
          </div>
        </div>
        <ul className={styles.buttonProfile}>
          <li>
            <a href="#" onClick={(event) => handleTimeFrameClick(event, "daily")}>
              Daily
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => handleTimeFrameClick(event, "weekly")}>
              Weekly
            </a>
          </li>
          <li>
            <a href="#" onClick={(event) => handleTimeFrameClick(event, "monthly")}>
              Monthly
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
