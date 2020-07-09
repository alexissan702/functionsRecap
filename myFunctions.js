
let pokeArray = [
    {name: 'bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name: 'ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name: 'charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {name: 'charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
    {name: 'squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
  
  ];


  var display = document.getElementById("display");
  var pokeName = document.getElementById("name");
  var pokeImage = document.getElementById("pokemon");
  let index = 0;
  display.addEventListener("click", run);
  function run() {
      pokeName.innerHTML = pokeArray[index].name;
      pokeImage.src = pokeArray[index].image;
      index++;
      if (index >= pokeArray.length) {
        index = 0;
      }
      if (index>0){
          var lastPokemon = document.getElementById("lastPokemon");
          var prevName = document.getElementById("name");
          var prevImage = document.getElementById("pokemon");
          prePoke(); 
      }
      
  }
  function prePoke() {
    prevName.innerHTML = pokeArray[index-1].name;
      prevImage.src = pokeArray[index - 1].image;
      newDiv = [];
      newDiv += "<div class='mainContainer'>";
      newDiv += prevName;
      newDiv += prevImage;
      newDiv += "</div>";
      lastPokemon = newDiv[index];
    }
  /*function prePoke() {
      var newDiv = "";
      //preindex = index - 1;
      var prevName = document.getElementById("name");
      var prevImage = document.getElementById("pokemon");
      prevName.innerHTML = pokeArray[index-1].name;
      prevImage.src = pokeArray[index - 1].image;
      newDiv += "<div class='mainContainer'>";
      newDiv += prevName;
      newDiv += prevImage.src;
      newDiv += "</div>";

  }
   function prePoke() {
    pokeName.innerHTML = pokeArray[index].name;
    pokeImage.src = pokeArray[index].image;
    index++;
    if (index >= pokeArray.length) {
      index = 0;
    }  
   }*/