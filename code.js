function renderMovie(data){
    document.querySelector(".infosection h1").textContent = data.title;
    document.querySelector(".infosection p").textContent = data.description;
    document.querySelector(".myImage").setAttribute("src",data.movieImage);

    let actorList = "";
    for (let i = 0; i < data.listOfActors.length; i++) {
        actorList += "<li>" + data.listOfActors[i] + "</li>";
    }
    document.querySelector(".infosection ul").innerHTML = actorList;
}

renderMovie(movieData);

