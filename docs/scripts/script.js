fetch('http://www.omdbapi.com/?apikey=[]t=memento')
    .then((res) => res.json())
    .then((data) => console.log(data));
    
// async function getData() {
//     const response = await fetch('http://www.omdbapi.com/?apikey=[]t=memento');
//     return await response.json();
// }

// console.log(getData())