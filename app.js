const input = document.querySelector('#input');
const mainTag = document.querySelector('#main');
const movieTitle = document.getElementById('movie-title');
const imagesDiv = document.querySelector('.movies');
const button = document.querySelector('button');
const bars = document.querySelector('.fa-bars');
const cross = document.querySelector('.fa-times');
const withNav = document.querySelector('.with-nav');
const normalView = document.querySelector('.normal-view');
const apiKey = 'k_czik298u';


async function getMovieData() {
  const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/${apiKey}/${input.value}`);
  const receivedData = await response.json();
  console.log(receivedData)
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




button.addEventListener('click', getMovieData);

bars.addEventListener('click',()=>{
  withNav.style.display = 'flex';
  normalView.style.display = 'none';
});

cross.addEventListener('click',()=>{
  normalView.style.display = 'block';
  withNav.style.display = 'none';
})












