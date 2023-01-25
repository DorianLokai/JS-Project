$(document).ready(function(){

	$('#get-pokemon-button').on('click', function(){

		$.get('https://pokeapi.co/api/v2/pokemon/', function(data, status){

			console.log(data);

			var string = "";

			string += "<table class='table'>";

				$.each(data.results, function(index, item){
					string += "<tr><td><a href='"+item.url+"'>"+item.name+"</td><td><button class='hide-button btn btn-primary'>Hide</button></td</tr>";
				});

			string += "</table>";

			$('#poke-list').html(string);

			if(status){
				$('.hide-button').on('click', function(){

					$(this).parent().parent().hide();

				});
			}

		});
	});


});

/*to check some thing using console log
use the line: console.log('button clicked!'); then look in your console log to see if it works.
you can also use the console log to see if the variables are set, or information is assigned to the
right variable*/