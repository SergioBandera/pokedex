
//selecciono el contenedor del html
const selectPokemon = document.querySelector('.contenedor');

//coger datos de la pokedex via id
function buscarPokemon(id){
fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    //pide datos al json    
    .then(response => response.json())
    //muestra datos al json
    .then(json =>{
        mostrarPokemon(json);
    });
}
function informacionPokemon(numero){

    for (let i = 1; i <= numero; i++)
    {
        buscarPokemon(i);
        
    }
}
 function mostrarPokemon(pokemon){
     const tarjeta = document.createElement("div");
     tarjeta.classList.add("bloque-pokemon");

     const cajaSprite = document.createElement("div");
     cajaSprite.classList.add("img-container");

     const sprite = document.createElement("img");
     sprite.src = pokemon.sprites.front_default;

     cajaSprite.appendChild(sprite);

     const num = document.createElement("p");
     num.classList.add("numero");
     num.textContent = `${"Nº" + pokemon.id.toString()}`;

     const nombre = document.createElement("p");
     nombre.classList.add("nombre");
     nombre.textContent = pokemon.name;

     tarjeta.appendChild(cajaSprite);
     tarjeta.appendChild(num);
     tarjeta.appendChild(nombre);

     const p = document.createElement("p");
     p.textContent="me cago en todo";

    
     selectPokemon.appendChild(tarjeta)

 }

 informacionPokemon(12);

