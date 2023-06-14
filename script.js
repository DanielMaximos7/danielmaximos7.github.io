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
  
  document.addEventListener("DOMContentLoaded", function () {
    // Load data from CSV
    Plotly.d3.csv("stock_data.csv", function (err, rows) {
      if (err) throw err;
  
      // Extract the OHLC data
      var dates = [];
      var opens = [];
      var highs = [];
      var lows = [];
      var closes = [];
  
      rows.forEach(function (row) {
        dates.push(row.Date);
        opens.push(parseFloat(row.Open));
        highs.push(parseFloat(row.High));
        lows.push(parseFloat(row.Low));
        closes.push(parseFloat(row.Close));
      });
  
      // Create the candlestick chart
      var trace = {
        x: dates,
        close: closes,
        decreasing: { line: { color: "red" } },
        high: highs,
        increasing: { line: { color: "green" } },
        line: { color: "rgba(31,119,180,1)" },
        low: lows,
        open: opens,
        type: "candlestick",
        xaxis: "x",
        yaxis: "y"
      };
  
      var layout = {
        dragmode: "zoom",
        showlegend: false,
        xaxis: { rangeslider: { visible: false } },
        yaxis: { autorange: true },
        margin: { t: 0 }
      };
  
      var data = [trace];
  
      Plotly.newPlot("chart", data, layout);
    });
  });
  



 // WULHMP2XGLK74SFL
