// JavaScript Document
function stripleTables(){
	if(!document.getElementsByTagName) return false;
	var tables=document.getElementsByTagName("table");
	var odd,rows;
	for(var i=0;i<tables.length;i++){
		odd=false;
		rows=tables[i].getElementsByTagName("tr");
		for(var j=0;j<rows.length;j++){
			if(odd==true){
				rows[j].style.backgroundColor="#ffc";
				odd=false;
				}
				else{ 
				odd=true;
					}
			}
		}
	}
	
function displayAbbreviations(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	
	var abbreviations=document.getElementsByTagName("abbr");
	if(abbreviations.length<1) return false;
	var defs=new Array();
	for(var i=0;i<abbreviations.length;i++){
		if(abbreviations[i].childNodes.length<1) continue;
		var definition=abbreviations[i].getAttribute("title");
		var key=abbreviations[i].lastChild.nodeValue;
		defs[key]=definition;
		}
	
	var dlist=document.createElement("dl");
	for(key in defs){
		var definition=defs[key];
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc=document.createElement("dd");
		var ddesc_text=document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
		}
		
	var header=document.createElement("h2");
	var header_text=document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.getElementsByTagName("body")[0].appendChild(header);
	document.getElementsByTagName("body")[0].appendChild(dlist);
	}
	
function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var trs=document.getElementsByTagName("tr");
	for(var i=0;i<trs.length;i++){
		trs[i].onmouseover=function(){
			this.style.color="red";
			}
		trs[i].onmouseout=function(){
			this.style.color="black";
			}
		}
	}
	
window.onload=function(){
	stripleTables();
	displayAbbreviations();
	highlightRows();
}