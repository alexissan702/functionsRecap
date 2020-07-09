
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
      prePoke();
  }
  function prePoke() {
      var newDiv = "";
      newDiv.innerHTML = "<div>";
      prexindex= index-1;
      pokeName.innerHTML = pokeArray[preindex].name;
      pokeImage.src = pokeArray[preindex].image;
  }