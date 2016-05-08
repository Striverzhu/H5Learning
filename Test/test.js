// JavaScript Document
function insertParagraph(text){
	var str="<p>";
	str+=text;
	str+="</p>";
	document.write(str);	
	}
	
function addElement(){
	var testdiv=document.getElementById("testdiv");
	testdiv.innerHTML="<p>This is <em>my</em> content.</p>";
	}
	
function addDomElement(){
	var para=document.createElement("p");
	var info="nodeName: ";
	info+=para.nodeName;
	info+=" nodeType: ";
	info+=para.nodeType;
	alert(info);
	}
	
function addDom(){
	//var txt=document.createTextNode("Hello world.");
	var para=document.createElement("p");
	var testdiv=document.getElementById("testdiv");
	var txt_1=document.createTextNode("This is ");
	var txt_2=document.createTextNode("my");
	var txt_3=document.createTextNode(" content.");
	var emphasis=document.createElement("em");
	emphasis.appendChild(txt_2);
	para.appendChild(txt_1);
	para.appendChild(emphasis);
	para.appendChild(txt_3);
	testdiv.appendChild(para);
	}
	
window.onload=addDom();