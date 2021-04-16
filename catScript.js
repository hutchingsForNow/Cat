//joke of the day
document.getElementById("jokeOfDaySubmit").addEventListener("click", function(event) {
  event.preventDefault();
  //api
  const url = "https://api.jokes.one/jod?category=animal";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
          console.log(json);
          let results = "";
          results += "<h3>" + json.contents.jokes[0].joke.title + "</h3>";
          results += "<p>" + json.contents.jokes[0].joke.text + "</p><br/>";
          document.getElementById("jokeOfDayResults").innerHTML = results;
    });
});


//Chuck Noris Button Joke
document.getElementById("norisSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("norisNumJokes").value;
  if (value === "")
    return;
  console.log(value);
  //api
  const url = "http://api.icndb.com/jokes/random/" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
          console.log(json);
          let results = "";
          for(let i = 0; i < value; ++i){
            results += "<p>" + json.value[i].joke + "</p><br/>";
          }
          document.getElementById("NorisResults").innerHTML = results;
    });
});


//search for a joke
document.getElementById("jokeSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  // api
  const url = "https://official-joke-api.appspot.com/random_joke"; 
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
          console.log(json);
          let results = "";
          results += "<p>" + json.setup + "</p>";
          results += "<p>" + json.punchline + "</p><br/>";
          document.getElementById("searchResults").innerHTML = results;
    });
});
