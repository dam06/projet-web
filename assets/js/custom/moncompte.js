var xhr = null;


function initXhr(){
	xhr = new XMLHttpRequest();

}
initXhr();

xhr.onreadystatechange = function(){
	if(xhr.readyState == 4 && xhr.status == 200) //xhr.status == 0 si ftp ou file
		console.log(xhr.responseText); // ou maCallback(xhr.responseXML);
};

function maCallback(response){
	xhr.open('post','/moncompte/test',true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send();

}
document.getElementById('getAdresse').addEventListener('click',maCallback)
