var MoonDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("moonDancer");
};

MoonDancer.prototype = Object.create(Dancer.prototype);
MoonDancer.prototype.constructor = MoonDancer;

MoonDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.$node.animate({
    left: "+=100"
  }, {
    duration: 1000,
    specialEasing: {
      width: "linear",
      height: "easeOutBounce"
    },
    complete: function(){
      $(this).animate({
        left: "-=100"
      }, 1000);
    }
  });
};
