import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './CircularChart.module.css'
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Very Statisfied', 'UnSatisfied', 'Satisfief'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: ['orange', 'red', 'green'],
      borderWidth: 1,
    },
  ],
};

export function CustomCircularChart(props) {
  const options = {
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };
  

  const aspectRatio = props.aspectRatio || 1; // Default aspect ratio of 1:1

  return (
    <div
      style={{
        position: 'relative',
        width: props.outerWidth||'100%',
        paddingTop: `${(1 / aspectRatio) * 100}%`, // Calculate aspect ratio (inverse)
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: props.left || 0,
          width: props.width|| '100%',
          height: '100%',
        }}
      >
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}