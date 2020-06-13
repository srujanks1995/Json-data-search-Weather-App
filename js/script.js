$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data/data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.weather.search(myExp) != -1) ||
			(val.desc.search(myExp) != -1)) {
				output += '<li>';
				output += '<h2>'+ val.weather +'</h2>';
				output += '<img src="images/'+ val.shortweather +'.jpg" alt="'+ val.weather +'" />';
				output += '<p>'+ val.desc +'</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON
});
