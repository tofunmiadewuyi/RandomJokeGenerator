//declaring the joke paragraph
const jokeContainer = document.getElementById("joke");
//declaring the button
const button = document.getElementById("btn");
//declaring the joke api
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist&type=single";

//calling the API and parsing the repsonse
let getJoke = () => {
  //removing a class to create an animation
  jokeContainer.classList.remove("fade");
  fetch(url)
  .then(data => data.json())
  .then(item => {
    jokeContainer.textContent = `${item.joke}`; 
    //adding a class to create an animation
    jokeContainer.classList.add("fade")
  });
};
//Adding an event listener to the button
btn.addEventListener("click", getJoke);
getJoke();