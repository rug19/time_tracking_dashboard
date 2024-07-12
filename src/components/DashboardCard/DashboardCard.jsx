import MainCard from "../MainCard/MainCard";
import SubCard from "../SubCard/SubCard";
import styles from "./Dashboard.module.css";

export default function DashboardCard() {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.item1}>
        <MainCard />
      </div>
      <div className={styles.item2}>
        {/* card Work */}
        <SubCard
          background="workBackground"
          image={`${import.meta.env.VITE_PUBLIC_URL}icon-work.svg`}
          action="Work"
          time="32hrs"
          event="Last week - 36hrs"
        />
      </div>

      {/*  card play */}
      <div className={styles.item3}>
        <SubCard
          background="playBackground"
          image={`${import.meta.env.VITE_PUBLIC_URL}icon-play.svg`}
          action="Play"
          time="10hrs"
          event="Last week - 8hrs"
        />
      </div>

      {/* Card Study */}
      <div className={styles.item4}>
        <SubCard
          background="studyBackground"
          image={`${import.meta.env.VITE_PUBLIC_URL}icon-study.svg`}
          action="Study"
          time="4hrs"
          event="Last week - 7hrs"
        />
      </div>

      {/* card exercise */}
      <div className={styles.item5}>
        <SubCard
          background="exerciseBackground"
          image={`${import.meta.env.VITE_PUBLIC_URL}icon-exercise.svg`}
          action="Exercise"
          time="4hrs"
          event="Last week - 5hrs"
        />
      </div>
      {/* social card */}
      <div className={styles.item6}>
        <SubCard
          background="socialBackground"
          image={`${import.meta.env.VITE_PUBLIC_URL}icon-social.svg`}
          action="Social"
          time="5hrs"
          event="Last week - 10hrs"
        />
      </div>
      <div className={styles.item7}>
        <SubCard
          background="selfCareBackground"
          image={`${import.meta.env.VITE_PUBLIC_URL}icon-self-care.svg`}
          action="Self Care"
          time="2hrs"
          event="Last week - 2hrs"
        />
      </div>
    </div>
  );
}
