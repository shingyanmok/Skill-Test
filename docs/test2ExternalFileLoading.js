$(document).ready(function(){
	var catagory = [];

	const test="<p>Test ver 1.0</p>";
	$(test).add("#test div");

	$.getJSON('test2JsonExample.json', function(data) {
		$.each(data.catagory.cd , function(i, f) {
			var tblRow = "<tr>" + "<td>" + f.cd_id + "</td>" + "<td>" + f.title + "</td>" + "<td>" + f.artist + "</td>" + "<td>" + f.country + "</td>" + "<td>" + f.company + "</td>" + "<td>" + f.price + "</td>" + "<td>" + f.year + "</td>" + "</tr>";
			$(tblRow).add("#externalJson tbody");
		});

	});
});