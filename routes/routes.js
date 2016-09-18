exports.dispHome = function(req, res) {
    var name = req.params.name.toUpperCase();
	var d = new Date();
	
	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	
	var day = weekday[d.getDay()].toUpperCase();
	
	var output = '<html><body><font face="verdana" color="green" size="10">HAPPY ';
	output += day + ', ' + name + '!';
	output += '</font><br><br><font face="verdana" size="3">';
	output += "It's currently " + d.toString();
	output += '</font></body></html>';
	
    res.send(output);
};