//declaring the joke type
const jokeType = document.getElementById("joketype");
//declaring the joke paragraph/setup
const jokeContainer = document.getElementById("joke");
//declaring the joke delivery
const jokeDelivery = document.getElementById("delivery");
//declaring the button
const button = document.getElementById("btn");
//declaring the joke api
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

//calling the API and parsing the repsonse
let getJoke = async () => {
  //removing a class to create an animation
  jokeContainer.classList.remove("fade");
  jokeDelivery.classList.remove("fade");
  
  const data = await fetch(url);
  const item = await data.json();
  const jokeCategory = item.category;

  console.log(jokeCategory);

  //delcaring the svgs for the categories
  const smiley = document.getElementById("smiley");
  const dark = document.getElementById("dark");
  const christmas = document.getElementById("christmas");

  
  //check the joke category
  if (jokeCategory === "Dark") {
    dark.classList.remove("hide");
    dark.classList.add("fade", "show");
  
    smiley.classList.remove("show");
    smiley.classList.add("fade", "hide");
    christmas.classList.remove("show");
    christmas.classList.add("fade", "hide");
    
  } else if (jokeCategory === "Christmas") {
    christmas.classList.remove("hide");
    christmas.classList.add("fade");
    christmas.classList.add("show");
    
    smiley.classList.remove("show");
    smiley.classList.add("fade", "hide");
    dark.classList.remove("show");
    dark.classList.add("fade", "hide");
    
  } else {
    smiley.classList.remove("hide");
    smiley.classList.add("fade", "show");
    
    dark.classList.remove("show");
    dark.classList.add("fade", "hide");
    christmas.classList.remove("show");
    christmas.classList.add("fade", "hide");
    
  }
  
  jokeType.textContent = `${item.type}`;
  
  if (item.type == "twopart") {
      jokeContainer.textContent = `${item.setup}`;
      jokeDelivery.textContent = `${item.delivery}`;
      jokeDelivery.classList.remove("hide");
      jokeDelivery.classList.add("show");
    }
    else {
      jokeContainer.textContent = `${item.joke}`;
      jokeDelivery.classList.remove("show");
      jokeDelivery.classList.add("hide");
    };
  
  //adding a class to create an animation
    jokeContainer.classList.add("fade");
    jokeDelivery.classList.add("fade");
};
//Adding an event listener to the button
btn.addEventListener("click", getJoke);
getJoke();