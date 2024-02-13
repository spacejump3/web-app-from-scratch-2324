// local api fetch
async function fetchLocalData() {
    const response = await fetch('./info.json');
    const data = await response.json();

    bio.innerHTML = data.bio
    hobbies.innerHTML += data.hobbies
    city.innerHTML += data.city
    favouriteAnimal.innerHTML += data.favouriteAnimal
    avatar_url.src = data.avatar_url
}

fetchLocalData()

// OMDB api fetch
const favoriteMovies = ['memento', 'kill+bill', 'oppenheimer', 'rush+hour', `schindler's+list`, 'empire+strikes+back', 'arrival', 'shutter+island', 'se7en', 'fight+club', 'star+wars', 'django+unchained', 'blade+runner']

// fetching API JSON data and adding my favorite movies
async function getData() {
    const promises = favoriteMovies.map(async title => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=54a87690&t=${encodeURIComponent(title)}`);
        return await response.json();
    })
    return Promise.all(promises)
}

// function to display the movies fetched from the API
async function displayMovies() {
    const movieData = await getData()
    const movieContainer = document.getElementById('movieListContainer')

    movieData.forEach(data => {
        const poster = document.createElement('li')

        poster.setAttribute('tabIndex', '1')

        poster.classList.add('moviePoster')
        poster.classList.add('regularPoster')
        poster.innerHTML = `
        <h2 id="title" class="movieInfo hidden">${data.Title}</h2>
        <p id="year" class="movieInfo hidden">${data.Year}</p>
        <p id="plot" class="movieInfo hidden">${data.Plot}</p>
        <p id="genre" class="movieInfo hidden">Genre: ${data.Genre}</p>
        <p id="director" class="movieInfo hidden">Director ${data.Director}</p>
        <p id="imdbRating" class="movieInfo hidden">imdB Rating: ${data.imdbRating}</p>
        `
        poster.style.backgroundImage = `url(${data.Poster})`

        // function to change min-width on click
        poster.addEventListener("click", async function changeMinWidth() {
            if (poster.classList.contains('regularPoster')) {
                poster.classList.add('extendedPoster')
                poster.classList.remove('regularPoster')

                poster.style.backgroundImage = `linear-gradient(90deg, rgba(45,33,245,0) 0%, rgba(0,0,0,1) 100%), url(${data.Poster})`
        
                poster.querySelectorAll(".movieInfo").forEach(function(element) {
                    element.classList.remove('hidden')
                    element.classList.add('visible')
                })
                
            } else {
                poster.classList.add('regularPoster')
                poster.classList.remove('extendedPoster')

                poster.style.backgroundImage = `url(${data.Poster})`
        
                poster.querySelectorAll(".movieInfo").forEach(function(element) {
                    element.classList.remove('visible')
                    element.classList.add('hidden')
                })
            }
        });
    movieContainer.appendChild(poster)
    })
}

displayMovies()