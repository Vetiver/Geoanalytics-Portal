import { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./VerticalChart.module.css";
import { useSelector } from "react-redux";

function VerticalChart({ close }) {
  const analytics = useSelector(
    (state) => state.analyticReducer.verticalAnalytics
  );

  const DarkBlue = (ChartJS.defaults.color = "#21648A");

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const arrWithData = useMemo(() => {
    return (
      analytics &&
      analytics.objects.map((el) => {
        return el.data;
      })
    );
  }, [analytics]);

  const arrWithTitles = useMemo(() => {
    return (
      analytics &&
      analytics.objects.map((el) => {
        return el.title;
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

  const options = {
    scales: {
      x: {
        maxBarThickness: 20,
        stepSize: 2,
        border: {
          color: DarkBlue,
        },
     
        ticks: {
             max: 20,
          suggestedMax: 4, // minimum will be 0, unless there is a lower value.
          // OR //
          beginAtZero: true, // minimum value will be 0.
          display: false,
           steps: 3,
                                stepValue: 1,
        },

        grid: {
          display: false,

          lineWidth: [5, 1, 1],
        },
      },
      y: {
        border: {
          color: DarkBlue,
        },
        
        grid: {
          display: false,
          gridLines: {
            color: "red",
          },
        },
      },
    },

    responsive: true,

    plugins: {
      legend: {
        position: "bottom",

        onClick: (evt, legendItem, legend) => {
          const index = legend.chart.data.labels.indexOf(legendItem.text);
          legend.chart.toggleDataVisibility(index);
          legend.chart.update();
        },
        labels: {
          generateLabels: (chart) => {
            let visibility = [];
            for (let i = 0; i < chart.data.labels.length; i++) {
              if (chart.getDataVisibility(i) === true) {
                visibility.push(false);
              } else visibility.push(true);
            }
            return chart.data.labels.map((label, index) => ({
              text: label,
              strokeStyle: "transparent",
              fillStyle: chart.data.datasets[0].backgroundColor[index],
              fontColor: "#fff",
              hidden: visibility[index],
            }));
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

      tooltip: {
        callbacks: {
          label: function (context) {
            console.log(context);
            let label = context.parsed.y;
            return label;
          },
        },
      },
    },
  };

  const data = {
    labels: arrWithTitles,
    datasets: [
      {
        label: arrWithTitles,
        data: arrWithData,
        backgroundColor: arrWithColor,
        barThickness: 35,
      },
    ],
  };

  return (
    analytics && (
      <div>
        <h4 className={styles.header}>{analytics.title}</h4>
        <div className={close === true ? `${styles.chart}` : `${styles.close}`}>
          <Bar options={options} data={data} />
        </div>
      </div>
    )
  );
}

export default VerticalChart;
