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


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [80, 50, 30, 20, 70],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};
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
                stepSize: 10
            },
        },
    },
};

export function BarChart() {
    // const options = {
    //     responsive: true,
    //     plugins: {
    //       legend: {
    //         position: 'top',
    //       },
    //       title: {
    //         display: false,
    //         text: 'Chart.js Bar Chart',
    //       },
    //     },
    //     scales: {
    //       y: {
    //         display: true, // Show y-axis labels
    //         grid: {
    //           display: true, // Show y-axis grid lines
    //         },
    //       },
    //       x: {
    //         display: false, // Show x-axis labels
    //         grid: {
    //           display: true, // Show x-axis grid lines
    //         },
    //       },
    //     },
    //   };



    return (<div style={{ width: '85%', height: '83%', marginLeft: 'auto', marginRight: 'auto' }}>
        <Bar options={options} data={data} />
    </div>
    );
}
