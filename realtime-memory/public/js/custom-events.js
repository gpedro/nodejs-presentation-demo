var io = io('http://localhost:3000');
var memoryDonut;
io.on('memoryListener', function (data) {
	memoryDonut.setData([{
        label: "Free Memory",
        value: data.free,
    }, {
        label: "Used Memory",
        value: data.used,
    }]);
});