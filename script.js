// Generate random data for the graph
function generateData() {
    var data = [];
    for (var i = 0; i < 10; i++) {
        var randomValue = Math.floor(Math.random() * 100);
        data.push(randomValue);
    }
    return data;
}

// Draw the graph using the generated data
function drawGraph() {
    var graphElement = document.getElementById('graph');
    var data = generateData();

    // Use Chart.js to draw the graph
    new Chart(graphElement, {
        type: 'bar',
        data: {
            labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7', 'Label 8', 'Label 9', 'Label 10'],
            datasets: [{
                label: 'Random Data',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call the function to draw the graph when the page loads
window.onload = drawGraph;
