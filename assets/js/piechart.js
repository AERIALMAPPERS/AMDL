const ctx = document.getElementById('myPieChart').getContext('2d');
        const data = {
            labels: [
                '1:Port And Harbours', 
                '2:Inland Waterways', 
                '3:Maritime Boards', 
                '4:Captive Jetties',
                '5:Shipyards', 
                '6:Oil And Gas', 
                '7:Coastal Protection', 
                '8:Recreation Water Bodies',
                '9:Agriculture'
            ],
            datasets: [{
                data: [10, 10, 10, 10, 10, 10, 10, 10, 10], // Example data points
                backgroundColor: [
                    '#b1121f', // Port And Harbours
                    '#007bff', // Inland Waterways
                    '#ff6f61', // Maritime Boards
                    '#AA6384', // Captive Jetties
                    '#8A2BE2', // Shipyards
                    '#045311', // Oil And Gas
                    '#f08306', // Coastal Protection
                    '#FFD700', // Recreation Water Bodies
                    'rgb(2, 150, 2)'  // Agriculture
                ],
                hoverOffset: 4
            }]
        };

        const config = {
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                plugins: {
                   
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 20,
                            padding: 11
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed !== null) {
                                    label += '' + '';
                                }
                                return label;
                            }
                        }
                    }
                }
            },
        };

        const myPieChart = new Chart(ctx, config);