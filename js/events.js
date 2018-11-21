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

$(document).ready(function(){
// call functions here
  getIt();

  frameIt();

});
