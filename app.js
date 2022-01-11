const input = document.querySelector('#input');
const mainTag = document.querySelector('#main');
const movieTitle = document.getElementById('movie-title');
const imagesDiv = document.querySelector('.movies');
const button = document.querySelector('.search-input button');
const bars = document.querySelector('.fa-bars');
const cross = document.querySelector('.fa-times');
const withNav = document.querySelector('.with-nav');
const top50Container = document.querySelector('.top-50');
const normalView = document.querySelector('.normal-view');
const topFiftyMoviesBTN = document.querySelector('#Top250Movies');
const apiKey = 'k_czik298u';
const top50Movies =[];


async function getMovieData() {
  const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/${apiKey}/${input.value}`);
  const receivedData = await response.json();
  displayImages(receivedData.results);
};


const displayImages = (array) => {
  imagesDiv.innerHTML = '';
  array.forEach(result => {
    const div = document.createElement('div');
    const imageTag = document.createElement('img');
    const pTag = document.createElement('p');
    div.className = "movie";
    imageTag.src = result.image;
    pTag.id = 'title';
    pTag.innerText = result.title.toUpperCase();
    div.appendChild(imageTag);
    div.appendChild(pTag);
    imagesDiv.appendChild(div);
  });
}


async function getTopFiftyMovies() {
  const response = await fetch(`https://imdb-api.com/en/API/${topFiftyMoviesBTN.id}/k_czik298u`);
  const receivedData = await response.json();
    for(let i =0;i<50;i++){
      top50Movies.push(receivedData.items[i]);
    }
    displayTop50Movies(top50Movies);
}

const displayTop50Movies = (array) => {
  top50Container.innerHTML = '';
  array.forEach(result => {
    const div = document.createElement('div');
    const imageTag = document.createElement('img');
    const pTag = document.createElement('p');
    div.className = "movie";
    imageTag.src = result.image;
    pTag.id = 'title';
    pTag.innerText = result.title.toUpperCase();
    div.appendChild(imageTag);
    div.appendChild(pTag);
    top50Container.appendChild(div);
  });
}


topFiftyMoviesBTN.addEventListener('click', getTopFiftyMovies);



button.addEventListener('click', getMovieData);

bars.addEventListener('click',()=>{
  withNav.style.display = 'flex';
  top50Container.style.display = 'flex';
  normalView.style.display = 'none';
});

cross.addEventListener('click',()=>{
  normalView.style.display = 'block';
  withNav.style.display = 'none';
  top50Container.style.display = 'none';
  top50Container.innerHTML = '';
})













