import styles from "./doughnut-chart.module.css";
import { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { quickSort } from "../utils/functions";

function DoughnutChart({ hidden }) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  ChartJS.defaults.datasets.doughnut.cutout = "60%";

  ChartJS.showTooltips = false;

  const analytics = useSelector((state) => state.analyticReducer.pieAnalytics);
  // const analytics = {
  //   objects: [
  //     { title: "Гари", data: 3423, color: "rgba(168, 173, 255, 1)" },
  //     { title: "Ветровалы", data: 343, color: "rgba(168, 223, 255, 1)" },
  //     { title: "Вырубки", data: 123, color: "rgba(76, 83, 212, 1)" },
  //     { title: "Гари", data: 1645, color: "rgba(168, 173, 255, 1)" },
  //     { title: "Ветровалы", data: 5000, color: "rgba(168, 223, 255, 1)" },
  //   ],
  //   title: "Изменения леса",
  //   type: "pieChart",
  //   units: "га",
  // };

  const allAnalyticsValues = useMemo(() => {
    return (
      analytics &&
      analytics.objects.map((el) => {
        return el.data;
      })
    );
  }, [analytics]);
  const totalValue = useMemo(() => {
    return (
      allAnalyticsValues?.length &&
      allAnalyticsValues.reduce((prevValue, value) => prevValue + value, 0)
    );
  }, [analytics]);

  const modifiedAnalytics = useMemo(() => {
    analytics && quickSort(analytics?.objects);
    return (
      analytics &&
      analytics.objects.map((item) => {
        return {
          ...item,
          secondColor: "transparent",
          secondValue: totalValue - item.data,
        };
      })
    );
  }, [analytics, totalValue]);

  let data = useMemo(() => {
    return modifiedAnalytics?.length
      ? {
          labels: [
            // modifiedAnalytics.map((item) => {
            //   return item.title;
            // }),
          ],
          datasets: [
            ...modifiedAnalytics.map((item) => {
              return {
                data: [item.data, item.secondValue],
                backgroundColor: [item.color, "transparent"],
                label: item.title,
                borderColor: "transparent",
                fill: false, //<-- set this
              };
            }),

            {
              data: [100, 0],
              backgroundColor: ["#E2FCFF", "transparent"],
              borderColor: "transparent",
              fill: false,
            },
          ],
        }
      : null;
  }, [modifiedAnalytics]);

  const options = {
    responsive: true,
    radiusBackground: {
      color: "#000", // Set your color per instance if you like
    },
    legend: {
      display: true,
      position: "left",
    },
    title: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    tooltips: {
      plugins: {
        callback: {
          label: function (tooltipItem, data) {
            console.log(tooltipItem.datasetIndex);
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var index = tooltipItem.index;
            return dataset.labels[index] + ": " + dataset.data[index];
          },
        },
      },
    },
  };

  // label: function (context) {
  //         let label = context.dataset.label || "";
  //         console.log(context);
  //         if (label) {
  //           label += ": ";
  //         }
  //         if (context.parsed.y !== null) {
  //           label += new Intl.NumberFormat("en-US", {
  //             style: "currency",
  //             currency: "USD",
  //           }).format(context.parsed.y);
  //         }
  //         return label;
  //       },

  const isComponentHidden = classNames({
    [styles.hidden]: !hidden,
  });

  return analytics !== null ? (
    <div className={`${styles.chart} ${isComponentHidden}`}>
      <h4 className={styles.header}>{analytics.title}</h4>
      <Doughnut data={data} options={options} />
    </div>
  ) : null;
}

export default DoughnutChart;
