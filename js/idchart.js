var chart = LightweightCharts.createChart(document.body, {
	width: 800,
	height: 400,
	layout: {
		backgroundColor: '#ffffff',
		textColor: 'rgba(33, 56, 77, 1)',
	},
	grid: {
		vertLines: {
			color: 'rgba(197, 203, 206, 0.7)',
		},
		horzLines: {
			color: 'rgba(197, 203, 206, 0.7)',
		},
	},
	timeScale: {
		timeVisible: true,
		secondsVisible: false,
	},
});

function get(chart, tz, url) {
	var xhr = new XMLHttpRequest();
	xhr.open('Get', url);
	xhr.send();
	xhr.onload = function() {
		if(xhr.status === 200) {
			var data = JSON.parse(this.responseText);
			console.log(data);
			for (var i = 0; i < data.length; i++) {
				data[i].time = data[i].time - tz;
			}
			chart.setData(data);
		}
	}
}

var chart = chart.addLineSeries();
var url = 'https://dcx86r.ca/xbt';
// offset in minutes
var offset = new Date().getTimezoneOffset();
var tz;
if (offset !== 0) { 
	tz = offset * 60;
} else {
	tz = 0;
}

get(chart, tz, url);

setInterval(() => {
	get(chart, tz, url);
}, 3e5);
