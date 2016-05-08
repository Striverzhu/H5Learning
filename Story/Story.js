// JavaScript Document
function addLoadEvent(func){
	var old=window.onload;
	if(typeof window.onload == "function"){
		window.onload=function(){
			old();
			func();
			}
		}
		else{
			window.onload=func;
			}
	}
	
function addClass(element,value){
	if(!element.className){
		element.className=value;
		}
	else{
		var newclassname=elem.className;
		newclassname+=" ";
		newclassname+=value;
		element.className=newclassname;
		}
	}
	
function styleHeaderSiblings(){
	if(!document.getElementsByTagName) return false;
	var headers=document.getElementsByTagName("h1");
	var elem;
	for(var i=0;i<headers.length;i++){
		elem=getNextElement(headers[i].nextSibling);
		//elem=headers[i];
		//elem.style.fontWeight="bold";
		//elem.style.fontSize="1.2em";
		//elem.style.color="red";
		//elem.setAttribute("class","intro");
		addClass(elem,"intro");
		}
	}
	
function getNextElement(node){
	if(node.nodeType==1){
		return node;
		}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
		}
	return null;
	}
	
addLoadEvent(styleHeaderSiblings);