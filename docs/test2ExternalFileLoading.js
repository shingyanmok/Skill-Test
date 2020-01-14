$(document).ready(function(){
	var catagory = [];

	const test="<p>Test ver 1.0</p>";
	$(test).appendTo("#test div");

	$.getJSON('test2JsonExample.json', function(data) {
		$.each(data.catagory.cd , function(i, f) {
			var tblRow = "<tr>" + "<td>" + f.cd_id + "</td>" + "<td>" + f.title + "</td>" + "<td>" + f.artist + "</td>" + "<td>" + f.country + "</td>" + "</tr>" + "</td>" + "<td>" + f.company + "</td>" + "</tr>"+ "</td>" + "<td>" + f.price + "</td>" + "</tr>"+ "</td>" + "<td>" + f.year + "</td>" + "</tr>";
			$(tblRow).appendTo("#externalJson tbody");
		});

	});
});