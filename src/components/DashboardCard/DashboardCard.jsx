import MainCard from "../MainCard/MainCard";
import SubCard from "../SubCard/SubCard";
import styles from "./Dashboard.module.css";

export default function DashboardCard() {
  return (
    <section>
      <div className={styles.dashboardContainer}>
        <MainCard />
        <div>
          {/* First card Work */}
          <SubCard 
          background="workBackground" 
          image={`${import.meta.env.VITE_PUBLIC_URL}icon-work.svg`}
          action="Work"
          time="32hrs"
          event="Last wek - 36hrs"
          />

          {/* Second card  */}
        </div>
      </div>
    </section>
  );
}
