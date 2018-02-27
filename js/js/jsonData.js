var pageCounter = 1;
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("container");

btn.addEventListener('click', function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
	ourRequest.onload = function(){
		if(ourRequest.status >= 200 && ourRequest.status > 400){
			var ourData = JSON.parse(ourRequest.responseText);
			renderHTML(ourData);
		}else{
			console.log("Data is connected but, showing errow!");
		}
		
	};
	ourRequest.send();
	pageCounter++;
	if( pageCounter > 3){
		btn.style.display = "none";		
	}
});

function renderHTML(data){
		var htmlString = "";
		
		for(var i = 0; i < data.length; i++){			
			htmlString += "<p>" + data[i].name + " is a " + data[i].species + " this is a ";
			for(var ii = 0; ii < data[i].foods.likes.length; ii++){
				if(ii == 0){
					htmlString += data[i].foods.likes[ii];
				}else{
					htmlString += " and " + data[i].foods.likes[ii];
				}
			}
			htmlString += " and dislikes ";
			for(var ii = 0; ii < data[i].foods.dislikes.length; ii++){
				if(ii == 0){
					htmlString += data[i].foods.dislikes[ii];
				}else{
					htmlString += " and " + data[i].foods.dislikes[ii];
				}
			}
			
			htmlString += ".</p>";
		}
		animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

