//JSGHT 2D GameImage Object
function GameImage(src,collis){
	this.img= new Image();
	this.img.src=src;
	this.CollisBox=collis;
}
GameImage.prototype.render=function(ctx){
	ctx.drawImage(this.img,this.CollisBox.x,this.CollisBox.y,this.CollisBox.width,this.CollisBox.height);
}
GameImg.prototype.changeSrc=function(newSrc){
	this.img.src=newSrc;
}
