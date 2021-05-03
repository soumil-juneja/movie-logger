window.onload = () => {
    const addMovieButton = document.getElementById("addMovieButton")
    const mymovies = document.getElementById("mymovies")
    const addArea = document.getElementById("addArea")
    const addForm = document.getElementById("addForm")
    const searchBar = document.getElementById("searchBar")
    const searchMoviesDiv = document.getElementById("searchMovies")

    addMovieButton.addEventListener("click", () => {
        mymovies.style.display = "none"
        addArea.style.display = "flex"
    })
    addForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const searchQuery = searchBar.value
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=c467ddab940734b55111748d4ef3b4da&query=${searchQuery}&page=1`, {method: 'GET'})
        .then(async (response) => {
            const responseJSON = await response.json()
            const searchMovies = responseJSON.results
            console.log(searchMovies)

            searchMovies.forEach(movie => {
                if(movie.poster_path !=null && movie.title != null){
                    searchMoviesDiv.innerHTML += `<div class="card">
                    <div style="text-align: center;">
                    <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" width="200"></div>
                    <h3>${movie.title}</h3>
                    <div style="text-align: center;">
                    <button class="btn addMovie-btn" onclick="addMovie('${movie.title}', '${movie.poster_path}')">Add Movie</button>
                </div>
            </div>`
                }
                
            })
addArea.style.height = "fit-content"
addForm.style.marginTop = "7rem"
        })
    })
}
function addMovie(title, poster_path) {
    const storedMovies = localStorage.getItem("movies")
    const rating = prompt("Rate this movie ou of 10")
    const review = prompt("Give a review")
    if(storedMoviesJSON == null) {
    const initialJSON = {}
    initialJSON[1] = {movieName: title, movieImage: poster_path, movieRating: rating, moviereview: review}
    localStorage.setitem("movies", JSOn.stringify(initialJSON) )
    } else {
        const storedMoviesJSON = JSON.parse(storedMovies)
        Object.keys(storedMoviesJSON).forEach(key => {
            if(Number(key) > biggestKey) {
               biggestKey = Number(key)
            }
        })
storedMoviesJSON[biggestKey+1] = {movieName: title, movieImage: poster_path, movieRating: rating, moviereview: review}
    }
}