// Define constants for movie recommendation
const GENRE = document.getElementById("genre");
const RATING = document.getElementById("rating");
const YEAR = document.getElementById("year");
const LANGUAGE = document.getElementById("language");
const RECOMMEND_BTN = document.getElementById("btn");
const MOVIE_RECOMMENDATIONS = document.getElementById("movies-container");
const tableBody = document.querySelector("#tableBody");

// const table = document.createElement("table");
// const tD = document.createElement("td");
// table.appendChild(tD);

// const tr = document.createElement("tr");

// tD.appendChild(tr);

// table.innerHTML = "hrllo";
// console.log(table);

// Define variable to store movie data

let movies = [];

// Function to fetch movie data from JSON file
async function fetchMovieData() {
    const response = await fetch("data.json");
    const data = await response.json();
    movies = data;
}

//Table creation through dom

console.log();

// Function to filter and recommend movies based on user preferences
function recommendMovies() {
    const genreFilter = GENRE.value;
    const ratingFilter = RATING.value;
    const yearFilter = YEAR.value;
    const languageFilter = LANGUAGE.value;

    const filteredMovies = movies.filter((movie) => {
        const yearOf = new Date(movie.release_date);
        const onlyYear = yearOf.getFullYear();

        // console.log(onlyYear);
        return (
            movie.genres.includes(genreFilter) &&
            movie.vote_average >= ratingFilter &&
            movie.original_language == languageFilter &&
            onlyYear == yearFilter
        );
    });

    // Clear previous recommendations
    MOVIE_RECOMMENDATIONS.innerHTML = "";

    // Display recommendations
    if (filteredMovies.length > 0) {
        let tableData = "";
        filteredMovies.forEach((movie, index) => {
            const yearOf = new Date(movie.release_date);
            const onlyYear = yearOf.getFullYear();
            const timeOf = movie.runtime;


            //minutes to hours

            const convertMinsToHrsMins = (mins) => {
                let h = Math.floor(mins / 60);
                let m = mins % 60;
                h = h < 10 ? '0' + h : h; // (or alternatively) h = String(h).padStart(2, '0')
                m = m < 10 ? '0' + m : m; // (or alternatively) m = String(m).padStart(2, '0')
                return `${h}h ${m}m`;
            }

            let times = convertMinsToHrsMins(timeOf) // { hours: 1, minutes: 0 }
            // console.log(convertMinsToHrsMins(timeOf));

            tableData += `<tr style="height:40px" >
                     <td>${index + 1}</td>
                     <td style="text-align: left; display:flex ; color: blue">   <img  src="https://image.tmdb.org/t/p/w45${movie.poster_path}"/> ${movie.title}<span style=" margin:40px 0px 0px 0px"; ><button>${movie.certification} </button>  ${movie.genres} . ${times} </span></td>
                     <td>${onlyYear}</td>
                   </tr>`;
        });
        tableBody.innerHTML = tableData;

        // MOVIE_RECOMMENDATIONS.appendChild(ul);
    } else {
        MOVIE_RECOMMENDATIONS.textContent = "No movies found";
    }
}

// Add event listener to recommend button
RECOMMEND_BTN.addEventListener("click", recommendMovies);

// Fetch movie data on page load
fetchMovieData();
