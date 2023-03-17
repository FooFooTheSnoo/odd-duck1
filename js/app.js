
let voteCount = 25;
let previousIndexes = [];

let state = {
  allProductsArray: [],
};

let imgContainer = document.getElementById('products');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');
let resultsButton = document.getElementById('results-button');
let resultsList = document.getElementById('results-list');

const ctx = document.getElementById('results-chart');

function Products(name, fileExtension = 'jpg') {
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `img/${name}.${fileExtension}`;

  state.allProductsArray.push(this);
}


new Products('bag');
new Products('banana');
new Products('bathroom');
new Products('boots');
new Products('breakfast');
new Products('bubblegum');
new Products('chair');
new Products('cthulhu');
new Products('dog-duck');
new Products('dragon');
new Products('pen');
new Products('pet-sweep');
new Products('scissors');
new Products('shark');
new Products('sweep', 'png');
new Products('tauntaun');
new Products('unicorn');
new Products('water-can');
new Products('wine-glass');

console.log(state.allProductsArray);
function getUniqueIndex() {
  const indexes = new Set();
  while (indexes.size < 3) {
    const randomIndex = Math.floor(Math.random() * state.allProductsArray.length);
    if (!indexes.has(randomIndex) && !previousIndexes.includes(randomIndex)) {
      indexes.add(randomIndex);
    }
  }
  const uniqueIndexes = Array.from(indexes);
  previousIndexes = uniqueIndexes;
  return uniqueIndexes;
}

function renderImg() {

  let indices = getUniqueIndex();

  imgOne.src = state.allProductsArray[indices[0]].photo;
  imgOne.alt = state.allProductsArray[indices[0]].name;
  state.allProductsArray[indices[0]].views++;

  imgTwo.src = state.allProductsArray[indices[1]].photo;
  imgTwo.alt = state.allProductsArray[indices[1]].name;
  state.allProductsArray[indices[1]].views++;

  imgThree.src = state.allProductsArray[indices[2]].photo;
  imgThree.alt = state.allProductsArray[indices[2]].name;
  state.allProductsArray[indices[2]].views++;

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
  // eslint-disable-next-line no-undef
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

}
for(let  i = 0; i < 10; i++) {
  console.log(getUniqueIndex());
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













