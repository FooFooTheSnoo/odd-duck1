/* eslint-disable no-unused-vars */
// >>>>>>> GLOBAL VARIABLES
let voteCount = 25;




// single source of truth
// for data that can change with our application state

let state = {
  allProductsArray: [],
};

// DOM referenceces

let imgContainer = document.getElementById('products');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultsButton = document.getElementById('results-button');
let resultsList = document.getElementById('results-list');


// >>>>>>> CONSTRUCTOR FUNCTION
function Products(name, fileExtension = 'jpg') {
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `img/${name}.${fileExtension}`;

  state.allProductsArray.push(this);
}

// eslint-disable-next-line no-unused-vars
let bag = new Products('bag');
let banana = new Products('banana');
let bathroom = new Products('bathroom');
let boots = new Products('boots');
let breakfast = new Products('breakfast');
let bubblegum = new Products('bubblegum');
let chair = new Products('chair');
let cthulhu = new Products('cthulhu');
let dog = new Products('dog-duck');
let dragon = new Products('dragon');
let pen = new Products('pen');
let petsweep = new Products('pet-sweep');
// eslint-disable-next-line no-unused-vars
let scissors = new Products('scissors');
let shark = new Products('shark');
let sweep = new Products('sweep', 'png');
let tauntaun = new Products('tauntaun');
let unicorn = new Products('unicorn');
let water = new Products('water-can');
let wine = new Products('wine-glass');

console.log(state.allProductsArray);

function getRandomIndex() {
  return Math.floor(Math.random() * state.allProductsArray.length);
}
// console.log(getRandomIndex());
function renderImg() {

  let indexOne = getRandomIndex();
  let indexTwo = getRandomIndex();
  let indexThree = getRandomIndex();

  while (indexOne === indexTwo) {
    indexOne = getRandomIndex();
  }
  while (indexTwo === indexThree) {
    indexTwo === getRandomIndex();
  }
  while (indexThree === indexOne) {
    indexThree === getRandomIndex();
  }


  imgOne.src = state.allProductsArray[indexOne].photo;
  imgTwo.src = state.allProductsArray[indexTwo].photo;
  imgThree.src = state.allProductsArray[indexThree].photo;
}
renderImg();


// >>>>>>> HELPER FUNCTIONS
// Randomly generate an index
// W3 Resources: Math.floor(Math.random()*items.length)






// Render function
// target the attribute of that img element to add the path





// >>>>>>> EVENT HANDLERS





// >>>>>>> LISTENERS
