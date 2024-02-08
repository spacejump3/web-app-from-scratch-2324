// JSON data
const title = document.getElementById("title")
const year = document.getElementById("year")
const plot = document.getElementById("plot")
const genre = document.getElementById("genre")
const director = document.getElementById("director")
const imdbRating = document.getElementById("imdbRating")

// Poster
const poster = document.querySelector(".moviePoster")

// Movie info
const movieInfo = document.querySelectorAll(".movieInfo")

// API key
const apiKey = '54a87690'

const favoriteMovies = ['memento', 'kill+bill', 'oppenheimer', 'rush+hour', `schindler's+list`, 'empire+strikes+back', 'arrival', 'shutter+island', 'se7en', 'fight+club', 'star+wars']

console.log(favoriteMovies)

// fetching API JSON data
async function getData() {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=memento`);
    const data = await response.json();

    console.log(data)

    title.innerHTML = data.Title;
    year.innerHTML = data.Year;
    plot.innerHTML = data.Plot;
    genre.innerHTML = data.Genre;
    director.innerHTML = data.Director;
    imdbRating.innerHTML = data.imdbRating;

    poster.style.backgroundImage = `url(${data.Poster})`

    // Check whether the li contains the class extendedPoster or regularPoster to add a linear gradient or not
    if (poster.classList.contains('extendedPoster')) {
        poster.style.backgroundImage = `linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(0,0,0,1) 100%), url(${data.Poster})`
    } else {
        poster.style.backgroundImage = `url(${data.Poster})`
    }
}

// Toggle the width of moviePoster with a click
poster.addEventListener("click", async function changeMinWidth() {
    if (poster.classList.contains('regularPoster')) {
        poster.classList.add('extendedPoster')
        poster.classList.remove('regularPoster')

        movieInfo.forEach(function(element) {
            element.classList.remove('hidden')
            element.classList.add('visible')
        })

        await getData()
        
    } else {
        poster.classList.add('regularPoster')
        poster.classList.remove('extendedPoster')

        movieInfo.forEach(function(element) {
            element.classList.remove('visible')
            element.classList.add('hidden')
        })
    }

    await getData()
});

getData();