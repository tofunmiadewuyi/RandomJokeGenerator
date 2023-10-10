//declaring the joke type
const jokeType = document.getElementById("joketype");
//declaring the joke paragraph/setup
const jokeContainer = document.getElementById("joke");
//declaring the joke delivery
const jokeDelivery = document.getElementById("delivery");
//declaring the button
const button = document.getElementById("btn");
//declaring the joke api
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist";

//calling the API and parsing the repsonse
let getJoke = () => {
  //removing a class to create an animation
  jokeContainer.classList.remove("fade");
  jokeDelivery.classList.remove("fade");
  fetch(url)
  .then(data => data.json())
  .then(item => {
    jokeType.textContent = `${item.type}`;
    if (item.type == "twopart") {
      jokeContainer.textContent = `${item.setup}`;
      jokeDelivery.textContent = `${item.delivery}`;
      jokeDelivery.classList.remove("hide-delivery");
      jokeDelivery.classList.add("show-delivery");
    }
    else {
      jokeContainer.textContent = `${item.joke}`;
      jokeDelivery.classList.remove("show-delivery");
      jokeDelivery.classList.add("hide-delivery");
    };
    //adding a class to create an animation
    jokeContainer.classList.add("fade");
    jokeDelivery.classList.add("fade");
  });
};
//Adding an event listener to the button
btn.addEventListener("click", getJoke);
getJoke();