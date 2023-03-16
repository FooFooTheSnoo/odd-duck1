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

const ctx = document.getElementById('results-chart');


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
    indexTwo = getRandomIndex();
  }
  while (indexThree === indexOne) {
    indexThree = getRandomIndex();
  }


  imgOne.src = state.allProductsArray[indexOne].photo;
  imgOne.alt = state.allProductsArray[indexOne].name;
  console.log(state.allProductsArray[indexOne].views++);
  console.log(imgOne);
  state.allProductsArray[indexOne].views++;

  imgTwo.src = state.allProductsArray[indexTwo].photo;
  imgTwo.alt = state.allProductsArray[indexTwo].name;
  state.allProductsArray[indexTwo].views++;

  imgThree.src = state.allProductsArray[indexThree].photo;
  imgThree.alt = state.allProductsArray[indexThree].name;
  state.allProductsArray[indexThree].views++;

}

function renderChart() {

  let productNames = [];

  let productVotes = [];

  for (let i = 0; i < state.allProductsArray.length; i++) {
    productNames.push(state.allProductsArray[i].name);
    productVotes.push(state.allProductsArray[i].votes);
  }
  let resultsChart = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: '# of Votes',
        data: productVotes,
        borderWidth: 1,
        color: [
          'red',    // color for data at index 0
          'blue',   // color for data at index 1
          'green',  // color for data at index 2
          'black',  // color for data at index 3

        ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  new Chart(ctx, resultsChart);
}


function handleClick(event) {
  voteCount--;

  let imgClick = event.target.alt;

  for (let i = 0; i < state.allProductsArray.length; i++) {
    if (imgClick === state.allProductsArray[i].name) {
      state.allProductsArray[i].votes++;

      console.log(imgClick);
      console.log(imgClick, state.allProductsArray[i].votes);
    }
  }
  renderImg();

  if (voteCount === 0) {
    imgContainer.removeEventListener('click', handleClick);
  }
  console.log(voteCount);
}

function handleShowResults() {
  if (voteCount === 0) {
    for (let i = 0; i < state.allProductsArray.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${state.allProductsArray[i].name} was shown ${state.allProductsArray[i].views} times and had ${state.allProductsArray[i].votes} votes`;
      resultsList.appendChild(liElem);
    }
    resultsButton.style.display = 'none';
    renderChart();
  }
}


imgContainer.addEventListener('click', handleClick);
resultsButton.addEventListener('click', handleShowResults);

renderImg();













