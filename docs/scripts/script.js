fetch('http://www.omdbapi.com/?apikey=[APIKEYHERE]&t=memento')
    .then((res) => res.json())
    .then((data) => console.log(data));
