// validateForm
//let MoviesDefaultData=[{"Title":"Captain America: The First Avenger","Year":"2011","imdbID":"tt0458339","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"},{"Title":"The Toxic Avenger","Year":"1984","imdbID":"tt0090190","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzViNmQ5MTYtMmI4Yy00N2Y2LTg4NWUtYWU3MThkMTVjNjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"The Toxic Avenger Part II","Year":"1989","imdbID":"tt0098503","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODhiNTljYTctMmIzZC00ZGVkLTk2NmItN2RjMzY3ZTYyNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Citizen Toxie: The Toxic Avenger IV","Year":"2000","imdbID":"tt0212879","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMWI0NWY0ODUtNGY3Yy00ZDU1LTllYjUtMDFkYWEzZGQwY2I1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"The Toxic Avenger Part III: The Last Temptation of Toxie","Year":"1989","imdbID":"tt0098502","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjVlNzFjMGItMTEwYy00OTc0LWFmY2ItM2U0MmQyYWI5Njk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Avenger","Year":"2006","imdbID":"tt0473445","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTMzMjMwMjcyNl5BMl5BanBnXkFtZTcwNTA1NDgzMQ@@._V1_SX300.jpg"},{"Title":"Knives of the Avenger","Year":"1966","imdbID":"tt0059045","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmM1NGI1M2QtYWU2Zi00N2RjLWJjODgtYjhkN2ViOWY2YmEzXkEyXkFqcGdeQXVyNTE1MTU0Mzc@._V1_SX300.jpg"},{"Title":"Samurai Avenger: The Blind Wolf","Year":"2009","imdbID":"tt1243972","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTAwNjc4MTkyNjBeQTJeQWpwZ15BbWU3MDg3NTQyMzI@._V1_SX300.jpg"},{"Title":"The Avenger","Year":"1962","imdbID":"tt0056174","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjNmOTEzN2YtYTcyMC00NDQ1LTg5NTMtMjQ3M2ZlOGU2YmFkXkEyXkFqcGdeQXVyMzg1ODEwNQ@@._V1_SX300.jpg"},{"Title":"The Avenger","Year":"1960","imdbID":"tt0054257","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNzU5YzM3MmEtNTE2MS00MzVjLWI5Y2EtNGU3M2YwMGYzMGQ0XkEyXkFqcGdeQXVyMDExMzA0Mw@@._V1_SX300.jpg"}];
let validateForm = () => {
    //event.preventDefault();
  
    let isValid = validateFullName()
                    && validateEmail()
                    && validatePassword()
                   
    if(isValid){
        console.log(isValid);
        displaySuccessMessage("Submitted successfully !");
        return true;
        
    }
    else{
        return false;
    }
};


// validate UserName
let validateFullName = () => {
    let usernameField= document.querySelector('#fullname');
     console.log(usernameField);
        //let usernameField.replace(/^\s+|\s+$/gm,'');
    if(usernameField.value === ''){
        applyColors(usernameField);
        displayErrorMessage('UserName is Required');
        return false;
    }
    // Length Validation
   /* else if(usernameField.value.length < 15){
        applyColors(usernameField);
        displayErrorMessage('Required min 15 letters');
        return false;
    }*/
    // no special Chars
   /*else if(!usernameField.value.match(/^[A-Za-z0-9_]{1,32}$/)){
        applyColors(usernameField);
        displayErrorMessage('No Special Characters');
        return false;
    }*/
    else{
        removeColors(usernameField);
        return true;
    }
};

// validate Email
let validateEmail = () => {
    
    let emailField = document.querySelector('#email');
    console.log(emailField);
    if(emailField.value === ''){
        applyColors(emailField);
        displayErrorMessage('Email is Required');
        return false;
    }
    else{
        removeColors(emailField);
        return true;
    }
};

// validate Password
let validatePassword = () => {
    let passwordField = document.querySelector('#password');
    console.log(passwordField);
    if(passwordField.value === ''){
        applyColors(passwordField);
        displayErrorMessage('Password is Required');
        return false;
    }
    else{
        removeColors(passwordField);
        return true;
    }
};



// apply Colors
let applyColors = (inputField) => {
    inputField.style.border = '1px solid red';
    inputField.style.boxShadow = '0 0 10px red';
};

// remove Colors
let removeColors = (inputField) => {
    inputField.style.border = '1px solid green';
    inputField.style.boxShadow = '0 0 10px green';
};

// display Error Message
let displayErrorMessage = (message) => {
    let h3Tag = document.createElement('h3');
    h3Tag.style.backgroundColor = 'red';
    h3Tag.innerText = message;
    document.querySelector('#error-msg').appendChild(h3Tag);
    setTimeout(deleteErrorMessage,2000);

};
   //display Success Message
let displaySuccessMessage = (message) => {
    let h3Tag = document.createElement('h3');
    h3Tag.style.backgroundColor = 'sky';
    h3Tag.innerText = message;
    document.querySelector('#error-msg').appendChild(h3Tag);
    setTimeout(deleteErrorMessage,2000);
    
};

// delete Error Message
let deleteErrorMessage = () => {
    document.querySelector('#error-msg h3').remove();
};



$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
      let searchText = $('#searchText').val();
      getMovies(searchText);
      e.preventDefault();
    });
  });
      

  
  function getMovies(searchText){
    axios.get('https://www.omdbapi.com/?apikey=87a63bbc&s='+searchText)
      .then((response) => {
        let Global = response.data.Search;
        //console.log("Global");
       
        let output = '';
        $.each(Global, (index, movie) => {
           
          output += `
          <div class="col-md-3 ">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
          `;
        });
  
        $('#movies').html(output); 
      })
      .catch((err) => {
        console.log(err);
      });
    }
    function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'Movie.html';
  return false;
}

function getMovieInfo(){
  let movieId = sessionStorage.getItem('movieId');
 
  /*
  var result = Object.keys(MoviesData).map(function(key) {
    return [Number(key), MoviesData[key]];
  });
  
  console.log(result);
  */
  axios.get('https://www.omdbapi.com/?apikey=87a63bbc&i='+movieId)
    .then((response) => {
      console.log(response);
      let movie = response.data;
      let output =`
        <div class="row">
          <div class="col-md-4">
            <img style="margin-top:40px" src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2 style="color:white">${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3 style="color:white">Plot</h3>
           <p style="color:white"> ${movie.Plot}</p>
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="MovieList.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
      `;
       $('#movie').html(output);
       
    })
    .catch((err) => {
      console.log(err);
    });
}