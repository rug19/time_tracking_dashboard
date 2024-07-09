import MainCard from "../MainCard/MainCard";
import SubCard from "../SubCard/SubCard";
import styles from "./Dashboard.module.css";

export default function DashboardCard() {
  return (
    <section>
      <div className={styles.dashboardContainer}>
        <MainCard />
        <div>
          <SubCard background="workBackground" />
        </div>
      </div>
    </section>
  );
}
