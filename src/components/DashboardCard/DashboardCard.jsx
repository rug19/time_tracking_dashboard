import MainCard from "../MainCard/MainCard";
import SubCard from "../SubCard/SubCard";
import styles from "./Dashboard.module.css";

export default function DashboardCard() {
  return (
    <div className={styles.dashboardContainer}>
      <div>
        <MainCard />
      </div>
      <div className={styles.subCardContainer}>
        {/* card Work */}

        <SubCard
          background="workBackground"
          image={`${import.meta.env.VITE_PUBLIC_URL}icon-work.svg`}
          action="Work"
          time="32hrs"
          event="Last wek - 36hrs"
        />

        {/*  card play */}

        <SubCard
          background="playBackground"
          image={`${import.meta.env.VITE_PUBLIC_URL}icon-play.svg`}
          action="Play"
          time="10hrs"
          event="Last wek - 8hrs"
        />

        {/* Card Study */}

        <SubCard
          background="studyBackground"
          image={`${import.meta.env.VITE_PUBLIC_URL}icon-study.svg`}
          action="Study"
          time="4hrs"
          event="Last wek - 7hrs"
        />

        {/* card exercise */}
        <SubCard
          background="exerciseBackground"
          image={`${import.meta.env.VITE_PUBLIC_URL}icon-exercise.svg`}
          action="Study"
          time="4hrs"
          event="Last wek - 7hrs"
        />
        {/* social card */}
        <SubCard
          background="socialBackground"
          image={`${import.meta.env.VITE_PUBLIC_URL}icon-social.svg`}
          action="Study"
          time="4hrs"
          event="Last wek - 7hrs"
        />
        <SubCard
          background="selfCareBackground"
          image={`${import.meta.env.VITE_PUBLIC_URL}icon-self-care.svg`}
          action="Study"
          time="4hrs"
          event="Last wek - 7hrs"
        />
      </div>
    </div>
  );
}
