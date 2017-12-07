/*
Search Term = 'searchTerm'
Number of Records = 'numberOfRecords'
Start Year = 'startYear'
End Year = 'endYear'

Search = 'searchBtn'
Clear = 'clearBtn'

Top Articles = 'topArticles'
*/




function retrieveResults(){
	var searchTerm = $('#searchTerm').val();

	console.log(searchTerm);

	var numberOfRecords = $('#numberOfRecords').val();
	var startYear = $('#startYear').val();
	var endYear = $('#endYear').val();
	var topArticles = $('topArticles');

	var apiKey = 'b975449bdb344e9f8a8141da365dc16c';

	var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&api-key=' + apiKey + '&page=0';

	$.ajax({
		url: queryURL,
		method: 'GET',
	}).done(function(response){
		console.log(queryURL);
		console.log(response);



		for(var i=0; i<5; i++){
			console.log(response.response.docs[i]);

			var articleContainer = $('<div></div>');
			articleContainer.addClass('article');


			var articleNumber = $('<div></div>');
			articleNumber.addClass('article-number');
			articleNumber.text(i + 1);

			var articleTitle = $('<div></div>');
			articleTitle.addClass('article-title');
			var title = response.response.docs[i].headline.main;
			articleTitle.text(title);

			var articleAuthor = $('<div></div>');
			articleAuthor.addClass('article-author');

			if(!response.response.docs[i].byline) {
				author = 'Unknown (fake news)';
			} else {
				author = response.response.docs[i].byline.original;
			}

			articleAuthor.text(author);

			articleContainer.append(articleNumber);
			articleContainer.append(articleTitle);
			articleContainer.append(articleAuthor);
			
			$('#top-articles').append(articleContainer);

			console.log(author);


		}
	});
}

