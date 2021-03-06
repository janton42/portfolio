var portfolio = [
  {
    'name': 'Resume',
    'description': 'Responsive resume built in Python and Django, deployed on Heroku. Generates .pdf from what\'s displayed on the screen, not from a static .pdf file.',
    'url': 'http://jeffstock.herokuapp.com/',
    'thumbnail': 'static/resume_thumbnail.GIF'
  },
  {
    'name': 'Portfolio',
    'description': 'Look I\'m recursive!',
    'url': 'http://10.0.0.251/portfolio/',
    'thumbnail': 'static/Capture.GIF'
  },
];

$(document).ready(function(){
	$('#main-heading').css('color', 'black');
	$('#work-sample').append(display.showPortfolioItems(portfolio))
});