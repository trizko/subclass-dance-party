var MoonDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("moonDancer");
};

MoonDancer.prototype = Object.create(Dancer.prototype);
MoonDancer.prototype.constructor = MoonDancer;

MoonDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.animate({width:'toggle'}, 1000);
};
