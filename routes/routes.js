exports.dispHome = function(req, res) {
    var name = req.params.name;
	var d = new Date();
	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	
	var output = '<html><body>Happy ' + weekday[d.getDay()] + ', ' + name + '!';
	
	output += '<br><br><img src="shibe.jpg"></body></html>';
	
    res.send(output.toUpperCase());
};