import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      // text: 'Chart.js Line Chart',
    },
  },
  scales: {
    x: {
      display: false, // Hide the Y-axis labels
    },
    y: {
      grid: {
        display: true, // Show X-axis grid lines
        color: 'rgba(128, 128, 128, 0.3)'
      },
      ticks: {
        display: false, // Hide X-axis labels
        stepSize:4
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [20, 10, 1, 2, 3, 4, 5],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderWidth: 2, // Adjust the line width here
    },
  ],
};

export function CustomLineChart() {
  return (
    <div style={{ width: '85%',height:'95%',marginLeft:'auto',marginRight:'auto'}}> {/* Adjust the width here */}
      <Line options={options} data={data} />
    </div>
  );
}
