const input = document.querySelector('#input');
const mainTag = document.querySelector('#main');
const movieTitle = document.getElementById('movie-title');
const imagesDiv = document.querySelector('.movies');
const button = document.querySelector('button')
const apiKey = 'k_czik298u';


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
    imagesDiv.appendChild(div)

  });
}

button.addEventListener('click', getMovieData);














