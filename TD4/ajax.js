var xhr = null;


function initXhr(){
	xhr = new XMLHttpRequest();

}
initXhr();

xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200) //xhr.status == 0 si ftp ou file
		maCallback(xhr.responseText); // ou maCallback(xhr.responseXML);
};

function maCallback(response){
	var h1 = document.createElement("h1");
	var doc = eval('('+response+')');   
	var text = document.createTextNode(doc["name"]+ " " + doc["prenom"]);
 	h1.appendChild(text);
	document.body.appendChild(h1);
}

function onLoaded(){
	document.getElementById("button1").addEventListener("click", sendRq1);
	document.getElementById("button2").addEventListener("click", sendRq2);
}

function sendRq1(){
    xhr.open ("get","index1.php?name=valeur",true) ;
    xhr.send(null);
}

function sendRq2(){
    xhr.open("post","index2.php",true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;
    xhr.send("name="+text1+"&prenom="+text2);
}


