function movemessage(elems,x,y,internal){
	if(!document.getElementById) return false;
	var elem=document.getElementById(elems);
	if(elem.movement){
		clearTimeout(elem.movement);
		}
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if(xpos==x&&ypos==y){
		return true;
		}
	if(xpos<x){
		xpos++;
		}
	if(xpos>x){
		xpos--;
		}
	if(ypos<y){
		ypos++;
		}
	if(ypos>y){
		ypos--;
		}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat="movemessage('"+elems+"',"+x+","+y+","+internal+")";
	elem.movement=setTimeout(repeat,internal);
	}
	
function prepareSlideshow(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("linklist")) return false;
	if(!document.getElementById("preview")) return false;
	var preview = document.getElementById("preview");
	preview.style.position="absolute";
	preview.style.left="0px";
	preview.style.top="0px";
	var list=document.getElementById("linklist");
	var links=list.getElementsByTagName("a");
	links[0].onmouseover=function(){
		movemessage("preview",-100,0,10);
		}
	links[1].onmouseover=function(){
		movemessage("preview",-200,0,10);
		}
	links[2].onmouseover=function(){
		movemessage("preview",-300,0,10);
		}
	}

window.onload=function(){
	prepareSlideshow();
}