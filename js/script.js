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


// Form handler
messageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var messageForm = document.getElementById('messageForm');
  var loader = document.getElementById("loader-div");
  var alertSuccess = document.getElementById("alert-success");
  var alertDanger = document.getElementById("alert-danger");

  loader.style.display = "block";
  messageForm.style.display = "none";

  // 1. Setup the request
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
  var url = 'https://ct7wgzpknj.execute-api.eu-west-2.amazonaws.com/Dev';
  var fetchOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify(form)
  };
  
  var responsePromise = fetch(url, fetchOptions);
  // 3. Use the response
  responsePromise
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      loader.style.display = "none";
    	if(jsonData.successMessage) {
        alertSuccess.style.display = "block";  
      } else if(jsonData.errorMessage) {
        alertDanger.style.display = "block";
      }
    })
    .catch(function(error) {
      loader.style.display = "none";
      alertDanger.style.display = "block";
    })
});