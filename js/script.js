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

var messageForm = document.getElementById('messageForm');

messageForm.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(messageForm[0].value);
  
  
  // 1. Setup the request
  // ================================
  // 1.1 Headers
  var headers = new Headers();
  // Tell the server we want JSON back
  headers.set('Accept', 'application/json');

  // 1.2 Form Data
  // We need to properly format the submitted fields.
  // Here we will use the same format the browser submits POST forms.
  // You could use a different format, depending on your server, such
  // as JSON or XML.
  var formData = new FormData();
  for (var i = 0; i < formEl.length; ++i) {
    formData.append(formEl[i].name, formEl[i].value);
  }
  
  // This is for the purpose of this demo using jsFiddle AJAX Request endpoint
  formData.append('json', JSON.stringify({example: 'return value'}));

  // 2. Make the request
  // ================================
  var url = '/echo/json/';
  var fetchOptions = {
    method: 'POST',
    headers,
    body: formData
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
      document.getElementById('results').innerText =
      	JSON.stringify(jsonData);
    });
  

  event.preventDefault();
});