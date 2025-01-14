import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localStorage";

ChartJS.register(...registerables);

const PageToRead = () => {
  const readBooks = useLoaderData(); // Data loaded from a route loader
  const [readBooksList, setReadBooksList] = useState([]);

  useEffect(() => {
    const savedReadBookIds = getStoredBooks("read-Book-List");

    if (savedReadBookIds?.length > 0) {
      const filteredBooks = readBooks.filter((book) =>
        savedReadBookIds.includes(book.bookId)
      );
      setReadBooksList(filteredBooks); // Update the state
    }
  }, [readBooks]);

  // Prepare chart data
  const data = {
    labels: readBooksList.map((book) => book.bookName),
    datasets: [
      {
        label: "Total Pages",
        data: readBooksList.map((book) => book.totalPages),
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) {
            return null;
          }
          const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
          gradient.addColorStop(0, "#FBB929"); // Top (Green)
          gradient.addColorStop(0.5, "#0085F6"); // Middle (Blue)
          gradient.addColorStop(1, "#00C29C"); // Bottom (Yellow)

          return gradient;
        },
        borderWidth: 1,
        borderRadius: 100, // Makes bars tapered/spiked
        barPercentage: 0.6, // Adjusts bar width
        categoryPercentage: 0.8,
      },
    ],
  };

  // Chart options
  const options = {
    indexAxis: "x",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw} pages`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#555",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#e0e0e0",
        },
        ticks: {
          color: "#555",
        },
      },
    },
  };

  return (
    <div style={{ padding: "2rem" }}>
      <p className=" text-xl font-medium p-3 m-3 text-center border-b-2 border-purple-500">The chart below displays the total pages of each read book with a spiked bar style.</p>
      <div style={{ height: "400px" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default PageToRead;
