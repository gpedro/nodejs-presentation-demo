// Morris.js Charts sample data for SB Admin template
var memoryDonut;

var converter = function (num) {
    var exponent;
    var unit;
    var neg = num < 0;
    var units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    if (neg) {
        num = -num;
    }

    if (num < 1) {
        return (neg ? '-' : '') + num + ' B';
    }

    exponent = Math.min(Math.floor(Math.log(num) / Math.log(1000)), units.length - 1);
    num = (num / Math.pow(1000, exponent)).toFixed(2) * 1;
    unit = units[exponent];

    return (neg ? '-' : '') + num + ' ' + unit;
};

$(function() {

    // Donut Chart
    memoryDonut = Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Free Memory",
            value: 0
        }, {
            label: "Used Memory",
            value: 0
        }],
        resize: true,
        colors: [
            '#0eac51',
            '#e74c3c'
        ],
        formatter: function (x) { return converter(x); }
    });

});
