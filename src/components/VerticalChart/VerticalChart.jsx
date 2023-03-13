import React from 'react';
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

function VerticalChart({close}) {
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
      const labels = ['Анализ', 'Система', 'Оборот оборот', 'Погружение', 'Анализ данных'];
       const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          
        ],
      };
    return (
        <div className={close === true ? `${styles.chart}` : `${styles.close}`}>
          <h4 className={styles.header}>Столбчатая диаграмма</h4>
            <Bar options={options} data={data} />
        </div>
    );
}

export default VerticalChart;