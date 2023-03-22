import styles from "./doughnut-chart.module.css";
import { useMemo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { quickSort } from "../../utils/functions";
import ChartDataLabels from "chartjs-plugin-datalabels";

function DoughnutChart({ hidden }) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  ChartJS.defaults.datasets.doughnut.cutout = "60%";

  ChartJS.showTooltips = false;

  const analytics = useSelector((state) => state.analyticReducer.pieAnalytics);
  // ChartJS.defaults.global.maintainAspectRatio = false;

  const arrWithTitles = useMemo(() => {
    return (
      analytics &&
      analytics.objects.map((el) => {
        return el.title;
      })
    );
  }, [analytics]);

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
          labels: arrWithTitles,
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
              label: "100%",
            },
          ],
        }
      : null;
  }, [modifiedAnalytics]);
  console.log(data);

  const centerText = {
    display: true,
    text: "280",
  };

  const options = {
    layout: {
      padding: 0,
      margin: 0,
    },
    animation: {
      duration: 0,
    },
    responsive: true,
    radiusBackground: {
      color: "#000", // Set your color per instance if you like
    },
    elements: {
      center: {
        text: "Red is 2/3 the total numbers",
        color: "#FF6384", // Default is #000000
        fontStyle: "Arial", // Default is Arial
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 25, // Default is 25 (in px), used for when text wraps
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        onClick: (evt, legendItem, legend) => {
          return;
        },
        labels: {
          generateLabels: (chart) => {
            console.log(chart.data);

            let visibility = [];
            for (let i = 0; i < chart.data.labels.length; i++) {
              if (chart.getDataVisibility(i) === true) {
                visibility.push(false);
              } else visibility.push(true);
            }
            return chart.data.labels.map(
              (label, index) =>
                true && {
                  // "transparent" // chart.data.datasets[0].backgroundColor[index] ===
                  text: label,
                  strokeStyle: "transparent",
                  fillStyle: chart.data.datasets[index].backgroundColor[0],
                  fontColor: "#fff",
                  hidden: visibility[index],
                }
            );
          },
          usePointStyle: true,
          boxWidth: 8,
          boxHeight: 8,
          color: "#fff",
          font: {
            family: "Nunito",
            size: 16,
            weight: 300,
            lineHeight: "22px",
          },
        },
      },
    },
    // legend: {
    //   display: true,
    // },
    // legend: {
    //   position: "right",
    //   display: true,
    //   labels: {
    //     generateLabels: (chart) => {
    //       console.log(chart)
    //       let visibility = [];
    //       for (let i = 0; i < chart.data.labels.length; i++) {
    //         if (chart.getDataVisibility(i) === true) {
    //           visibility.push(false);
    //         } else visibility.push(true);
    //       }
    //       return chart.data.labels.map((label, index) => ({
    //         text: label,
    //         strokeStyle: "transparent",
    //         fillStyle: chart.data.datasets[0].backgroundColor[index],
    //         fontColor: "#fff",
    //         hidden: visibility[index],
    //       }));
    //     },

    // boxWidth: 8,
    // boxHeight: 8,
    // color: "#fff",
    // font: {
    //   family: "Nunito",
    //   size: 16,
    //   weight: 300,
    //   lineHeight: "22px",
    // },
    //   },
    // },
    title: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    ChartDataLabels,
    datalabels: {
      // // display: false,
      // color: "black",
      // font: {
      //   size: 20,
      //   weight: "bold",
      // },
      labels: [
        {
          text: "Due ≤ 60 Days",
          font: {
            size: "25",
          },
          color: "#fff",
        },
      ],
      formatter: function (value, context) {
        if (value === 0) return "";
        return value;
      },
    },
    tooltips: {
      plugins: {
        doughnutlabel: {
          labels: [
            {
              text: "Due ≤ 60 Days",
              font: {
                size: "25",
              },
              color: "grey",
            },
          ],
        },
        // callback: {
        //   label: function (tooltipItem, data) {
        //     console.log(tooltipItem.datasetIndex);
        //     var dataset = data.datasets[tooltipItem.datasetIndex];
        //     var index = tooltipItem.index;
        //     return dataset.labels[index] + ": " + dataset.data[index];
        //   },
        // },
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

  const textCenter = {
    id: "textCenter",
    beforeDatasetDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = "700 25px Nunito";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "100%",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  return analytics !== null ? (
    <div>
      <h4 className={styles.header}>{analytics.title}</h4>
      <div className={`${styles.chart} ${isComponentHidden}`}>
        <Doughnut
          style={{ marginRight: "-100px", width: "400px", height: "400px" }}
          data={data}
          options={options}
          plugins={[textCenter]}
        />
      </div>
    </div>
  ) : null;
}

export default DoughnutChart;
