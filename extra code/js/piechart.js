google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        const data = google.visualization.arrayToDataTable([
            ['DISTRICT', 'Mhl'],
            ['RATNAGIRI', 238],
            ['RAIGAD', 121],
            ['SINDHUDURG', 120],
            ['PALGHAR', 110.5],
            ['MUMBAI', 114],
            ['THANE', 16.5]
        ]);

        const windowWidth = window.innerWidth;

        let chartWidth = '100%';
        let chartHeight = 550;

        // Adjust size based on window width
        if (windowWidth <= 200) {
            chartWidth = windowWidth - 20; // Slight margin for padding
            chartHeight = 150;
        } else if (windowWidth <= 300) {
            chartWidth = 280; // Adjusted width to match CSS
            chartHeight = 200;
        } else if (windowWidth <= 480) {
            chartWidth = '100%';
            chartHeight = 250;
        } else if (windowWidth <= 767) {
            chartWidth = '100%';
            chartHeight = 300;
        }

        const options = {
            title: 'COASTALINE LENGTH IN 720(KM)',
            is3D: true,
            width: chartWidth,
            height: chartHeight
        };

        const chart = new google.visualization.PieChart(document.getElementById('myChart'));
        chart.draw(data, options);
    }

    // Redraw chart on window resize
    window.onresize = drawChart;

    // Initial chart draw
    google.charts.setOnLoadCallback(drawChart);

    <script src="https://www.gstatic.com/charts/loader.js"></script>