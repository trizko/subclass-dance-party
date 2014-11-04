var MoonDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, 150);
  this.mjArray = [];
  for(var i = 1; i <= 7; i++){
    this.mjArray.push('url(img/mjleft/mj' + i + '.png)');
  }
  for(var i = 1; i <= 4; i++){
    this.mjArray.push('url(img/mjturn/mj' + i + '.png)');
  }
  for(var i = 1; i <= 7; i++){
    this.mjArray.push('url(img/mjright/mj' + i + '.png)');
  }
  for(var i = 4; i >= 1; i--){
    this.mjArray.push('url(img/mjturn/mj' + i + '.png)');
  }
  this.explodeArray = [];
  for(var i = 0; i <= 14; i++){
    this.explodeArray.push('url(img/explode/explode' + i + '.png)');
  }
  this.currentImage = 0;
  this.explodeImage = 0;
  this.$node.removeClass("dancer").addClass("moonDancer");
};

MoonDancer.prototype = Object.create(Dancer.prototype);
MoonDancer.prototype.constructor = MoonDancer;

MoonDancer.prototype.step = function (){
  Dancer.prototype.step.call(this);

  if (typeof this.currentImage === 'number') {
    if(this.currentImage <= 7){
      this.$node.css('left', this.left -= 15);
    } else if(this.currentImage <= 11) {
    } else if(this.currentImage <= 18) {
      this.$node.css('left', this.left += 15);
    } else {
      if(this.currentImage === this.mjArray.length - 1){
        this.currentImage = 0;
      }
    }
    this.$node.css('background-image', this.mjArray[this.currentImage]);
    this.currentImage++;
  }
};

MoonDancer.prototype.explode = function() {
  this.chill = true;
  setTimeout(this.explode.bind(this), 50);
  if (typeof this.explodeImage === 'number') {
    this.$node.css('background-image', this.explodeArray[this.explodeImage++]);
  }
  if (this.explodeImage === 14) {
    this.$node.remove();
  }
};


