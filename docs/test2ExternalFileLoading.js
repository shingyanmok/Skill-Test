$(document).ready(function(){
	var catagory = [];

   $("<p>Test ver 1.0</p>").appendTo("#test div");

   $.getJSON('test2JsonExample.json', function(data) {
       $.each(data, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.title + "</td>" + "<td>" + f.artist + "</td>" + "<td>" + f.country + "</td>" + "<td>" + f.company + "</td>" + "</tr>"
           $(tblRow).appendTo("#externalJson table");
     });

   });
});