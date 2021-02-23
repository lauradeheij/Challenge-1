var ctx = document.getElementById('zwaartekracht').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
   data: {
        labels: ['0', '30', '60', '90', '120'],
        datasets: [{
            label: 'Zwaartekracht in m.s-2',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [9.81, 6.54, 3.32, 0, 0]
        }]
    },

    // Configuration options go here
    options: {}
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
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 250, 400, 500, 600]
        }]
    },

    // Configuration options go here
    options: {
        legend:{
            display: true,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
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
            label: 'Brandstof verbruik',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10000, 9900, 9500, 9000, 8900]
        }]
    },

    // Configuration options go here
    options: {
        legend:{
            display: true,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }
    }
});

var ctx = document.getElementById('voedsel').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
   data: {
        labels: ['0', '30', '60', '90', '120'],
        datasets: [{
            label: 'Soorten voedsel',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10000, 9900, 9500, 9000, 8900]
        }]
    },

    // Configuration options go here
    options: {
        legend:{
            display: true,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }
    }
});
var ctx = document.getElementById('water').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
   data: {
        labels: ['0', '30', '60', '90', '120'],
        datasets: [{
            label: 'Aantal liters water aanwezig',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10000, 9900, 9500, 9000, 8900]
        }]
    },

    // Configuration options go here
    options: {
        legend:{
            display: true,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }
    }
});