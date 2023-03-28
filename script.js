const dogImage = document.querySelector('#dog-image');
const likeButton = document.querySelector('#like-button');
const dislikeButton = document.querySelector('#dislike-button');
const likeCounter = document.querySelector('#like-counter');
const dislikeCounter = document.querySelector('#dislike-counter');

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        dogImage.src = data.message;
    });

likeButton.addEventListener('click', () => {
    let likes = parseInt(likeCounter.textContent);
    likes++;
    likeCounter.textContent = likes;

    localStorage.setItem('likes', likes);

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            dogImage.src = data.message;
        });
});

dislikeButton.addEventListener('click', () => {
    let dislikes = parseInt(dislikeCounter.textContent);
    dislikes++;
    dislikeCounter.textContent = dislikes;

    localStorage.setItem('dislikes', dislikes);

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            dogImage.src = data.message;
        });
});

window.addEventListener('load', () => {
    const likes = localStorage.getItem('likes');
    if (likes) {
        likeCounter.textContent = likes;
    }

    const dislikes = localStorage.getItem('dislikes');
    if (dislikes) {
        dislikeCounter.textContent = dislikes;
    }
});