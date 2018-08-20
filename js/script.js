function cardAlign () {
	var max = 0;
	var cards = document.querySelectorAll(".card-text");
	for (i of cards) {
		max = i.clientHeight > max ? i.clientHeight : max;
	}
	var value = max + "px";
	for (i of cards) {
		i.style.minHeight = value;
	}
}

cardAlign();

window.addEventListener("resize", cardAlign);

document.querySelector("#bhome").addEventListener("click", () => {
	document.querySelector('#home').scrollIntoView({ 
		behavior: 'smooth' 
	});
});

document.querySelector("#bprojects").addEventListener("click", () => {
	window.scroll({
		top: document.querySelectorAll("#home")[0].clientHeight, 
		left: 0, 
		behavior: 'smooth' 
	});
});

document.querySelector("#bcontact").addEventListener("click", () => {
	document.querySelector('#contact').scrollIntoView({ 
		behavior: 'smooth' 
	});
});



messageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var messageForm = document.getElementById('messageForm');
  
  // 1. Setup the request
  // ================================
  // 1.1 Headers
  var headers = new Headers();
  // Tell the server we want JSON back
  headers.set('Accept', 'application/json');
  

  var form = {
    "name" : messageForm[0].value,
    "email" : messageForm[1].value,
    "message": messageForm[2].value
  }
  

  // 2. Make the request
  // ================================
  var url = 'https://ct7wgzpknj.execute-api.eu-west-2.amazonaws.com/Dev';
  var fetchOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify(form)
  };
  
  var responsePromise = fetch(url, fetchOptions);
  
  // 3. Use the response
  // ================================
  responsePromise
  	// 3.1 Convert the response into JSON-JS object.
    .then(function(response) {
      return response.json();
    })
    // 3.2 Do something with the JSON data
    .then(function(jsonData) {
    	console.log(jsonData);
    })
    .catch(function(error) {
      console.log(error);
    })
  

  
});