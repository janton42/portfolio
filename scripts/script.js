document.getElementById("saySmth").addEventListener("click", speak);

document.getElementById("day").addEventListener("click", date);

// document.getElementById("first-example").addEventListener('click', caption1);

// document.getElementById("second-example").addEventListener('click', caption2);

// document.getElementById("third-example").addEventListener('click', caption3);

function caption1(){
	document.getElementById('first-caption').innerHTML = jarvis.response();
}

function caption2(){
	document.getElementById('second-caption').innerHTML = jarvis.response();
}

function caption3(){
	document.getElementById('third-caption').innerHTML = jarvis.response();
}

function speak(){
	document.getElementById("sub-heading").innerHTML = jarvis.response();
}

function date(){
	document.getElementById("date").innerHTML = jarvis.day();
}

var jarvis = {
  'day': function (){
    var dayTimeStr = '';
    var d = new Date();
    var day = d.getDay();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    if (day === 0){
      day = 'Sunday';
    } else if (day === 1){
      day = 'Monday';
    } else if (day === 2) {
      day = 'Tuesday';
    } else if (day === 3) {
      day = 'Wednesday';
    } else if (day === 4) {
      day = 'Thursday';
    } else if (day === 5) {
      day = 'Friday';
    } else if (day === 6) {
      day = 'Saturday';
    }
    dayTimeStr += 'Today is : ' + day + '.<br>Current time is : ' + hour + ' : ' + minute + ' : ' +  second;

    return dayTimeStr;
  },

  'factorial': function (num) {
    var factorial = 1;
    while (num > 0){
      factorial *= num;
      num--;
    }
    
    return factorial; 
         
  },

  'response': function(){
    var responseList = [
      'Why yes, I would like a knuckle sandwich!',
      'Thank you, I will go fuck myself!',
      'The only thing worse than your face is the dumb shit you say.',
      'I like tater tots!',
      'Please, Hammer, don\'t hurt \'em!',
      'There\'s always money in the banana stand',
      'There\s got to be some way outta here...',
      'U R BADZ',
      'lololololololololololol',
      'Waka waka waka',
    ]
    var min = 0;
    var max = responseList.length;
    var response = Math.floor(Math.random() * max); 
    return responseList[response];
  }
}



var display = {

  'showPortfolioItems': function(arr) {
      var output = arr.map(function(item){
        var image = item.thumbnail;
        var label = item.description;
        var dest = item.url;
        return '<div class="container"><a href="'+ dest +'"><img src="' + image + '" class="image-responsive thumbnail"></a></br><p>' + label + '</p></div>'
      });
      return output.join('');
    }
}


