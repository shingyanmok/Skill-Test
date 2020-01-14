$(document).ready(function(){
	var cds = [];

   $.getJSON('test2JsonExample.json', function(data) {
       $.each(data, function(i, f) {
          tblRow.push("<tr>" + "<td>" + f.title + "</td>" + "<td>" + f.artist + "</td>" + "<td>" + f.country + "</td>" + "<td>" + f.company + "</td>" + "</tr>");
           $(tblRow).appendTo("#externalJson tbody");
     });

   });
});