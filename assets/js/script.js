// there are 391 different villagers in the API
// there are + - x / and random expressions in the math API

// need to create a dropdown menu with all of the villager options
// array of objects
// var villagers = [
//   {
//     name: "Peppy",
//     id: 3,
//   },
// ];

var fetchButton = document.getElementById("fetch-button");

// chooses random number between 0 and 391 (total villager endpoints in API)
function randomVillager() {
  var randomNum = Math.floor(Math.random() * 391);
  // villagerAPI(randomNum);
  villagerAPI();
}

// fetches our random villager from the API
// function villagerAPI(randomVillager) {
function villagerAPI() {
  // replace `octocat` with anyone else's GitHub username
  // var requestUrl = `https://acnhapi.com/v1/villagers/${randomVillager}`;

  let dataImgURL = "https://acnhapi.com/v1/images/villagers/62";
  // fetch(requestUrl)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  // console.log(data.image_uri);
  console.log(dataImgURL);
  $("#villager-pic").attr("src", dataImgURL);
  // });
}

fetchButton.addEventListener("click", randomVillager);

// maybe do something like this general API call to villagers on page load, and use the response to iterate 0-391 to create the dropdown options for each villager
// grab the name and id from each
// then depending on the user's selection, add that id to the end of the specific villager call
// once specific villager has been called, grab the image_uri to get a good image of that villager

// then do the math API call to retrieve a math equation
// have the expression displayed and a form input for the user's answer
// some sort of reaction happens when the user answers correct or incorrect, maybe grab the saying from the specific villager object
