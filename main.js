var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var DNAs = [];
function DNA(y, rad){
    this.x = canvas.width/2;
    this.y = y;
    this.rad = rad;
    this.speed = 0.03;
    this.color1 = "rgba(0,0,255,1)";
    this.color2 = "rgba(0,255,0,1)";
    this.dist = 100;
    this.raduis = 10;
}
DNA.prototype.update = function(){
    this.rad += this.speed;
}
DNA.prototype.render = function(){
    this.update();
    
    //blue circle
    context.beginPath();
    context.arc(this.x + this.dist * Math.sin(this.rad),this.y,this.raduis,0,Math.PI * 2);
    context.fillStyle = this.color1;
    context.fill();
    context.closePath();

    //green circle
    context.beginPath();
    context.arc(this.x + this.dist * -Math.sin(this.rad),this.y,this.raduis,0,Math.PI * 2);
    context.fillStyle = this.color2;
    context.fill();
    context.closePath();
}
for(var i = 0; i<= 30; i++){
    DNAs.push(new DNA(10 + 10 * 2 * i, Math.PI * (i / 15)));
}
function render(){
    context.clearRect(0,0,canvas.width,canvas.height);
   for(var i = 0; i< DNAs.length; i++){
       DNAs[i].render();
   }
}
setInterval(render,1000/60);