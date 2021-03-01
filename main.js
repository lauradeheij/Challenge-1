var ctx = document.getElementById('zwaartekracht').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
   data: {
        labels: ['0', '30', '60', '90', '120'],
        datasets: [{
            label: 'Zwaartekracht in m.s-2',
            backgroundColor: 'green',
            borderColor: 'white',
            data: [9.81, 6.54, 3.32, 0, 0]
        }]
    },

    // Configuration options go here
    options: {
        legend:{
            display: true,
            labels: {
                fontColor: 'white'
            }
    }}
});

var ctx = document.getElementById('snelheid').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
   data: {
        labels: ['0', '30', '60', '90', '120'],
        datasets: [{
            label: 'Snelheid in km/h',
            backgroundColor: 'orange',
            borderColor: 'white',
            data: [0, 250, 400, 500, 600]
        }]
    },

    // Configuration options go here
    options: {
        legend:{
            display: true,
            labels: {
                fontColor: 'white'
            }
        }
    }
});

var ctx = document.getElementById('brandstof').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
   data: {
        labels: ['0', '30', '60', '90', '120'],
        datasets: [{
            label: 'Brandstof verbruik in liters',
            backgroundColor: 'red',
            borderColor: 'white',
            data: [10000, 9900, 9500, 9000, 8900]
        }]
    },

    // Configuration options go here
    options: {
        legend:{
            display: true,
            labels: {
                fontColor: 'white'
            }
        }
    }
});

var ctx = document.getElementById('voedsel').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
   data: {
        labels: ['brood', 'rijst', 'groente', 'vlees'],
        datasets: [{
            label: 'Soorten voedsel',
            backgroundColor: 'purple',
            borderColor: 'white',
            data: [20, 30, 40, 30,]
        }]
    },

    // Configuration options go here
    options: {
        legend:{
            display: true,
            labels: {
                fontColor: 'white'
            }
        }
    }
});
var ctx = document.getElementById('water').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
   data: {
        labels: ['gebruikt', 'water'],
        datasets: [{
            label: 'Aantal liters water aanwezig',
            backgroundColor: 'blue',
            borderColor: 'white',
            data: [100, 400]
        }]
    },

    // Configuration options go here
    options: {
        legend:{
            display: true,
            labels: {
                fontColor: 'white'
            }
        }
    }
});