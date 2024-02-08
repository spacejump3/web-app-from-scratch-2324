// API key
const apiKey = '54a87690'

const favoriteMovies = ['memento', 'kill+bill', 'oppenheimer', 'rush+hour', `schindler's+list`, 'empire+strikes+back', 'arrival', 'shutter+island', 'se7en', 'fight+club', 'star+wars', 'django+unchained']

// testing w/ 1 movie
// const favoriteMovies = ['memento']

// fetching API JSON data and adding my favorite movies
async function getData() {
    const promises = favoriteMovies.map(async title => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`);
        return await response.json();
    })
    return Promise.all(promises)
}

async function displayMovies() {
    const movieData = await getData()
    const movieContainer = document.getElementById('movieListContainer')

    movieData.forEach(data => {
        const poster = document.createElement('li')

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
        poster.addEventListener("click", async function changeMinWidth() {
            if (poster.classList.contains('regularPoster')) {
                poster.classList.add('extendedPoster')
                poster.classList.remove('regularPoster')
        
                document.querySelectorAll(".movieInfo").forEach(function(element) {
                    element.classList.remove('hidden')
                    element.classList.add('visible')
                })
                
            } else {
                poster.classList.add('regularPoster')
                poster.classList.remove('extendedPoster')
        
                document.querySelectorAll(".movieInfo").forEach(function(element) {
                    element.classList.remove('visible')
                    element.classList.add('hidden')
                })
            }
        });
    movieContainer.appendChild(poster)
    })
}

displayMovies()