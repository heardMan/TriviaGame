// Built by LucyBot. www.lucybot.com
function apiCall (query, startDate, endDate){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "e22b9491a0434e80bf5db7648b89012a",
      'q': query,
      'begin_date': startDate,
      'end_date': endDate,
      'sort': "newest",
      'page': 1,
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
    }).fail(function(err) {
      throw err;
    });
    
}