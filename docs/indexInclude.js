$(function(){
	$("head").load("indexLink.html") 

	var includes = $('[data-include]');
	jQuery.each(includes, function(){
		var file = $(this).data('include') + '.html';
		$(this).load(file);
	});
});