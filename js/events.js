//define functions here

//$('h1').on("eventname", function(){
    //action you want taken
//});

function getIt() {
    $('p').on('click', function() {
      alert('Hey!');
    });
}

function frameIt() {
    $('img').on("load", function() {
      $('img').addClass('tasty');
    });
}

function submitIt() {
    $('form').on('submit', function() {
      alert('Your form is going to be submitted now.');
    });
}

$(document).ready(function(){
// call functions here
  getIt();

  frameIt();

  submitIt();

});
