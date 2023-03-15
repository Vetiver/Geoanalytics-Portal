import React, {useState, useEffect, useMemo} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styles from "./PieChart.module.css";
import { useDispatch, useSelector } from "react-redux";
function PieChart({close}) {
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
      if(analytics !== null) {
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
    return ( analytics !== null ?
        <div className={close === true ? `${styles.pie}` : `${styles.close}`}>
           <h4 className={styles.header}>{analytics.title}</h4>
            <Pie data={data} />
        </div> : null
    );
}

export default PieChart;