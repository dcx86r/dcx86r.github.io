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

function get(chart, url) {
	var xhr = new XMLHttpRequest();
	xhr.open('Get', url);
	xhr.send();
	xhr.onload = function() {
		if(xhr.status === 200) {
			const data = JSON.parse(this.responseText);
			console.log(data);
			chart.setData(data);
		}
	}
}

var chart = chart.addLineSeries();
var url = 'https://dcx86r.ca/xbt';
get(chart, url);
setInterval(() => {	get(chart, url) }, 3e5);
