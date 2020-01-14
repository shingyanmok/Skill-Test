$(document).ready(function(){
	var catagory = [];

   $(tblRow).appendTo("#externalJson table");
   $("Test1").appendTo("#test p");
   $.getJSON('test2JsonExample.json', function(data) {
       $.each(data, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.title + "</td>" + "<td>" + f.artist + "</td>" + "<td>" + f.country + "</td>" + "<td>" + f.company + "</td>" + "</tr>"
           $(tblRow).appendTo("#externalJson table");
     });

   });
});