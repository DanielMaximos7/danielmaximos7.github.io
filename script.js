document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
  
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        const target = this.getAttribute('href').replace('#', '');
        
        // Remove active class from all tabs and contents
        tabs.forEach(function(tab) {
          tab.classList.remove('active');
        });
        contents.forEach(function(content) {
          content.classList.remove('show');
        });
  
        // Add active class to the clicked tab and show the corresponding content
        this.classList.add('active');
        document.getElementById(target).classList.add('show');
      });
    });
  });
  

// Function to parse the CSV data
function parseCSV(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');

    const data = lines.slice(1).map(line => {
        const values = line.split(',');
        const entry = {};

        headers.forEach((header, index) => {
            entry[header] = parseFloat(values[index]);
        });

        return entry;
    });

    return data;
}

// Function to fetch the CSV file
function fetchCSV(url) {
    return fetch(url)
        .then(response => response.text())
        .then(csv => parseCSV(csv));
}

// URL of your CSV file
const csvURL = "stock_data.csv";

// Fetch the CSV file and generate the chart
fetchCSV(csvURL)
    .then(data => {
        // Extract OHLC data from the parsed data
        const dates = data.map(entry => entry.Date);
        const open = data.map(entry => entry.Open);
        const high = data.map(entry => entry.High);
        const low = data.map(entry => entry.Low);
        const close = data.map(entry => entry.Close);

        // Create a candlestick trace
        const trace = {
            x: dates,
            close: close,
            decreasing: { line: { color: 'red' } },
            high: high,
            increasing: { line: { color: 'green' } },
            line: { color: 'rgba(31,119,180,1)' },
            low: low,
            open: open,
            type: 'candlestick',
            xaxis: 'x',
            yaxis: 'y'
        };

        // Set the layout configuration
        const layout = {
            title: 'Stock Candlestick Chart',
            xaxis: {
                rangeslider: {
                    visible: false
                }
            },
            yaxis: {
                title: 'Price'
            }
        };

        // Create the chart
        Plotly.newPlot('chart', [trace], layout);
    })
    .catch(error => {
        console.error('Error loading CSV:', error);
    });



 // WULHMP2XGLK74SFL
