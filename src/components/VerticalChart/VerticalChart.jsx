import React,{useMemo} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from "./VerticalChart.module.css";
import faker from 'faker';
import { useDispatch, useSelector } from "react-redux";

function VerticalChart({close}) {
  const analytics = useSelector((state) => state.analyticReducer.verticalAnalytics);
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

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
      
       const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
      };
      const labels = ['Строительство', 'Распашка', 'Зарастание'];
       const data = {
        labels,
        datasets: [
          {
            label: '',
            data: arrWithData,
            backgroundColor: arrWithColor,
          },
          
        ],
      };
    return ( analytics &&
        <div className={close === true ? `${styles.chart}` : `${styles.close}`}>
          <h4 className={styles.header}>{analytics.title}</h4>
            <Bar options={options} data={data} />
        </div>
    );
}

export default VerticalChart;