var feedWidgetCode = '<!-- start feedwind code --><iframe  height="500"  width="500" src="https://feed.mikle.com/widget/?rssmikle_url=http%3A%2F%2Fwww.reddit.com%2F.rss&rssmikle_frame_width=500&rssmikle_frame_height=500&frame_height_by_article=0&rssmikle_target=_blank&rssmikle_font=Arial%2C%20Helvetica%2C%20sans-serif&rssmikle_font_size=12&rssmikle_border=off&responsive=off&text_align=left&text_align2=left&corner=off&scrollbar=on&autoscroll=on&scrolldirection=up&scrollstep=5&mcspeed=20&sort=Off&rssmikle_title=on&rssmikle_title_sentence=Reddit%20feed&rssmikle_title_link=http%3A%2F%2Fwww.reddit.com%2F.rss&rssmikle_title_bgcolor=%234A4A4A&rssmikle_title_color=%23FFFFFF&rssmikle_item_bgcolor=%23FFFFFF&rssmikle_item_title_length=55&rssmikle_item_title_color=%230066FF&rssmikle_item_border_bottom=on&rssmikle_item_description=on&item_link=off&rssmikle_item_description_length=150&rssmikle_item_description_color=%23666666&rssmikle_item_date=gl1&rssmikle_timezone=Etc%2FGMT&datetime_format=%25b%20%25e%2C%20%25Y%20%25l%3A%25M%20%25p&item_description_style=text%2Btn&item_thumbnail=full&item_thumbnail_selection=auto&article_num=15&rssmikle_item_podcast=off&" scrolling="no" name="rssmikle_frame" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0"></iframe><div style="font-size:10px; text-align:center; width:500px;"><a href="http://feed.mikle.com/" target="_blank" style="color:#CCCCCC;">RSS Feed Widget</a><!--Please display the above link in your web page according to Terms of Service.--></div><!--  end  feedwind code -->';

exports.dispHome = function(req, res) {
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
	
	var output = '<html><body><font face="verdana" size="8"><i>HAPPY ';
	output += day + '!';
	output += '</i></font><br><br><br><br>';
	output += '<font face="verdana" size="4">PayPal Wesley: $ </font>';
	output += '<input type="text" id="payAmount" style="width: 50px;">';
	output += '<input type="button" id="payButton" onclick="goToPayLink()" value="Pay">';
	output += '<script>function goToPayLink() { window.open("https://www.paypal.me/WesleyNg/" + document.getElementById("payAmount").value); }</script>';
	output += '<br><br><br><br>';
	output += feedWidgetCode;
	output += '</body></html>';
	
    res.send(output);
};

exports.dispGreeting = function(req, res) {
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
	
	var output = '<html><body><font face="verdana" size="8"><i>HAPPY ';
	output += day + ', ' + name + '!';
	output += '</i></font><br><br><br><br>';
	output += '<font face="verdana" size="4">PayPal Wesley: $ </font>';
	output += '<input type="text" id="payAmount" style="width: 50px;">';
	output += '<input type="button" id="payButton" onclick="goToPayLink()" value="Pay">';
	output += '<script>function goToPayLink() { window.open("https://www.paypal.me/WesleyNg/" + document.getElementById("payAmount").value); }</script>';
	output += '<br><br><br><br>';
	output += feedWidgetCode;
	output += '</body></html>';
	
    res.send(output);
};