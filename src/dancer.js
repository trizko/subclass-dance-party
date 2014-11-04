var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition();
  this.chill = false;
  this.lineUpSpeed = 2000;
};
Dancer.prototype.step = function() {
  if (!this.chill) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};
Dancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};
Dancer.prototype.lineUp = function() {
  this.$node.animate({
    left: "0px"}, this.lineUpSpeed);
  if(!this.chill){
    this.chill = true;
  } else {
    this.chill = false;
    this.step();
  }
};

