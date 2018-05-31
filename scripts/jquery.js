var portfolio = [
  	{
    'description': 'string1',
    'url': 'http://jeffstock.herokuapp.com/',
    'thumbnail': 'static/max_smile_2018'
  },
  	{
    'description': 'string2',
    'url': 'url2',
    'thumbnail': 'static/max_smile_2018'
  },
    {
    'description': 'string3',
    'url': 'url2',
    'thumbnail': 'static/max_smile_2018'
  }
];

$(document).ready(function(){
	$('#main-heading').css('color', 'black');
	$('#work-sample').append(display.showPortfolioItems(portfolio))
});