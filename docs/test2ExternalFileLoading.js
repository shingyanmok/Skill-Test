$(document).ready(function(){
	var catagory = [];

   $.getJSON('test2JsonExample.json', function(data) {
       $.each(catagory, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.cd.title + "</td>" + "<td>" + f.cd.artist + "</td>" + "<td>" + f.cd.country + "</td>" + "<td>" + f.cd.cd.company + "</td>" + "</tr>"
           $(tblRow).appendTo("#externalJson tbody");
     });

   });
});