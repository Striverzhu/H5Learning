// 控制窗口加载完毕后运行相应的函数
function addonloadfunc(func){
	var oldfunc=window.onload;
	if(typeof window.onload !='function'){
		window.onload=func;
		}
		else{
		window.onload=function(){
			oldfunc();
			func();	
			}	
		}
	}
//在指定的元素后面添加新元素
function insertAfter(newelement,targetelement){
	var parent=targetelement.parentNode;
	if(parent.lastNode==targetelement){
		parent.appendChild(newelement);
		}
		else{
			parent.insertBefore(newelement,parent.nextSibling);
			}
	}

//鼠标点击链接，在本页显示相应的图片
function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	if(placeholder.nodeName!="IMG") return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description"))
	{
		var text=whichpic.getAttribute("title");
		var description=document.getElementById("description");
		description.firstChild.nodeValue= text!=null ? text : "";
		}
	return true; 
	}

//新建一个新窗口
function newWindow(winurl){
	window.open(winurl,"popup","width=320,height=480");
	}
	
function prepareLinks() {
	if(!document.getElementsByTagName) return false;
	var links=document.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		if(links[i].getAttribute("class")=="popup"){
			 links[i].onclick=function(){
				 newWindow(this.getAttribute("href"));
				 return false;
				 }
			}
		}   
	}
	
function prepareGallary(){
	if(!document.getElementsByTagName||!document.getElementById) return false;
	var gallary=document.getElementById("imagegallary");
	if(!gallary) return false;
	var links=gallary.getElementsByTagName("a");
	if(!links) return false;
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return !showPic(this);
			}
		}
	}

function preparePlaceholder(){
	if(document.getElementById) return false;
	if(document.getElementsByTagName) return false;
	if(document.createElement) return false;
	if(document.createTextNode) return false;
	var placeholder=document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/moren.jpeg");
	placeholder.setAttribute("alt","my image gallary");
	var description=document.createElement("p");
	var txt=document.createTextNode("choose a image.");
	description.setAttribute("id","description");
	description.appendChild(txt);
	
	var gallary=document.getElementById("imagegallary");
	insertAfter(placeholder,gallary);
	insertAfter(description,placeholder);
	}

addonloadfunc(prepareGallary);
addonloadfunc(prepareLinks);
addonloadfunc(preparePlaceholder);