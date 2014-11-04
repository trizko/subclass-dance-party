$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    dancer.$node.mouseover(function() {
      dancer.explode();
    });
  });
  $(".lineUpDancersButton").on("click", function(event){
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });
  interact();
});
var interact = function() {
  setTimeout(interact, 1000);
  for (var i = 0; i < window.dancers.length; i++) {
    var iTop = window.dancers[i].top;
    var iLeft = window.dancers[i].left;
    for(var j = 0; j < window.dancers.length; j++){
      if(!(i === j)){
        var jTop = window.dancers[j].top;
        var jLeft = window.dancers[j].left;
        var topDist = Math.abs(iTop - jTop);
        var leftDist = Math.abs(iLeft - jLeft);
        var dist = Math.sqrt(Math.pow(topDist,2) + Math.pow(leftDist,2));
        if (dist <= 1000) {
          window.dancers[i].chill = true;
          window.dancers[j].chill = true;
        }
      }
    }
  }
}


