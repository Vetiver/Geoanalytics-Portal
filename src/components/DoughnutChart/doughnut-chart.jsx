import styles from "./doughnut-chart.module.css";
import { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import classNames from "classnames";

function DoughnutChart({ hidden }) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const analytics = useSelector((state) => state.analyticReducer.pieAnalytics);
  const arrWithData = useMemo(() => {
    return (
      analytics &&
      analytics.objects.map((el) => {
        return el.data;
      })
    );
  }, [analytics]);
  const arrWithColor = useMemo(() => {
    return (
      analytics &&
      analytics.objects.map((el) => {
        return el.color;
      })
    );
  }, [analytics]);
  const arrWithTitle = useMemo(() => {
    if (analytics !== null) {
      return (
        analytics &&
        analytics.objects.map((el) => {
          return el.title;
        })
      );
    }
  }, [analytics]);
  const data = {
    labels: arrWithTitle,
    datasets: [
      {
        label: [],
        data: arrWithData,
        backgroundColor: arrWithColor,
        borderWidth: 0,
      },
    ],
  };


  const isComponentHidden = classNames({
    [styles.hidden]: !hidden,
  });

  return analytics !== null ? (
    <div className={`${styles.chart} ${isComponentHidden}`}>
      <h4 className={styles.header}>{analytics.title}</h4>
      <Doughnut data={data} />
    </div>
  ) : null;
}

export default DoughnutChart;
