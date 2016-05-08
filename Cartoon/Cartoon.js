// JavaScript Document

function positionMessage(){
	if(!document.getElementById) return false;
	var elem=document.getElementById("message");
	elem.style.position="absolute";
	elem.style.left="50px";
	elem.style.top="100px";
	movement=setTimeout("movemessage()",1000); 
	}

function movemessage(){
	if(!document.getElementById) return false;
	var elem=document.getElementById("message");
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if(xpos==200&&ypos==250){
		return true;
		}
	if(xpos<200){
		xpos++;
		}
	if(xpos>200){
		xpos--;
		}
	if(ypos<250){
		ypos++;
		}
	if(ypos>250){
		ypos--;
		}
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	setTimeout("movemessage()",10);
	}
	
window.onload=function(){
	positionMessage();
	movemessage();
}