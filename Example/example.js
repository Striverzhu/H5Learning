// JavaScript Document
//alert(typeof document.getElementById("purchases"));
//alert(document.getElementsByTagName("li").length);

//var shopping = document.getElementById("purchases");
//var items = shopping.getElementsByTagName("*");
//alert(items.length);

alert(document.getElementsByClassName("important sale").length);

var sp=document.getElementsByTagName("p");
for(var i=0;i<sp.length;i++)
{
	var title_text=sp[i].getAttribute("title");
	if(title_text!=null)
		alert(title_text);
}

var shopping=document.getElementById("purchases");
alert(shopping.getAttribute("title"));

shopping.setAttribute("title","a funny test.");
alert(shopping.getAttribute("title"));