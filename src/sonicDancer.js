var SonicDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, 50);
  this.images = [];
  for(var i = 1; i < 13; i++){
    this.images.push('url(img/sonic/sonic_dance' + i + '.png)');
  }
  this.imageStatus = true;
  this.numImages = this.images.length;
  this.currentImage = 0;
  this.$node.removeClass("dancer").addClass("sonicDancer");
  this.lineUpSpeed = 1000;
};

SonicDancer.prototype = Object.create(Dancer.prototype);
SonicDancer.prototype.constructor = SonicDancer;

SonicDancer.prototype.step = function (){
  Dancer.prototype.step.call(this);
  if(this.currentImage === 0){
    this.imageStatus = this.imageStatus === false ? true : false;
  }
  if (typeof this.currentImage === 'number') {
    this.currentImage = (++this.currentImage)%12;
    this.$node.css('background-image', this.images[this.currentImage]);
    if(this.imageStatus){
      this.$node.css('left', this.left -= 10);
    }else{
      this.$node.css('left', this.left += 10);
    }
  }
};
