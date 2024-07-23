import { useState } from "react";
import MainCard from "../MainCard/MainCard";
import SubCard from "../SubCard/SubCard";
import styles from "./Dashboard.module.css";

export default function DashboardCard() {
  const [timeFrame, setTimeFrame] = useState("daily");
  const [data, setData] = useState([]);

  const handleTimeFrameChange = (timeFrame) => {
    setTimeFrame(timeFrame);
  };

  const handleDataLoaded = (loadedData) => {
    setData(loadedData);
  };

  // Mapeia o timeFrame para a descrição desejada
  const timeFrameLabels = {
    daily: "Yesterday",
    weekly: "Last week",
    monthly: "Last month"
  };

  // Filtrar os dados para o tempo selecionado
  const subCardsData = data.map((item) => ({
    bg: item.title.toLowerCase().replace(" ", "") + "Background", // Exemplo de conversão para o nome da classe
    img: `icon-${item.title.toLowerCase().replace(" ", "-")}.svg`,
    act: item.title,
    time: `${item.timeframes[timeFrame].current}hrs`,
    evt: `${timeFrameLabels[timeFrame] || "Last week"} - ${item.timeframes[timeFrame].previous}hrs`,
  }));

  return (
    <section className={styles.mainContainer}>
      <div className={styles.dashboardContainer}>
        <div className={styles.item1}>
          <MainCard
            onTimeFrameChange={handleTimeFrameChange}
            onDataLoaded={handleDataLoaded}
          />
        </div>
        {subCardsData.length > 0 ? (
          subCardsData.map((card, index) => (
            <div key={index} className={styles[`item${index + 2}`]}>
              <SubCard
                background={card.bg}
                image={`${import.meta.env.VITE_PUBLIC_URL}${card.img}`}
                action={card.act}
                time={card.time}
                event={card.evt}
              />
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </section>
  );
}
