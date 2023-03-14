import React, {useState, useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from "./PieChart.module.css";
import { useDispatch, useSelector } from "react-redux";
function PieChart({close}) {
    ChartJS.register(ArcElement, Tooltip, Legend);
  const dataArr = [];
  const colorArr = [];
  const labelArr = [];
  const analytics = useSelector((state) => state.analyticReducer.allAnalytic);
  useEffect(() => {
    if (analytics !== null ) {
      analytics.analytics[3].objects.forEach(element => {
        dataArr.push(element.data);
        colorArr.push(element.color);
        labelArr.push(element.title)
      });
    }
  }, [dataArr, colorArr, labelArr])
 const data = {
  labels: labelArr,
  datasets: [
    {
      label: `${labelArr}`,
      data: dataArr,
      backgroundColor: colorArr,
      borderWidth: 0,
    },
  ],
};
    return (
        <div className={close === true ? `${styles.pie}` : `${styles.close}`}>
           <h4 className={styles.header}>Круговая диаграмма</h4>
            <Pie data={data} />
        </div>
    );
}

export default PieChart;