// 1.
let h1 = document.getElementById('gen-1');
h1.innerText = 'Generasión 1 Pokimon';

// 2.
let contenedor_1g = document.querySelector('.infocard-list-pkmn-lg');
contenedor_1g.style.background = 'aqua';

// 3.
console.log("La URL es " + document.URL);

// 4.
console.log("El dominio es " + document.domain);

// 5.
let img_pokemons = document.getElementsByTagName('img')
console.log(img_pokemons.length);

// 6.
for(img of img_pokemons) {
    img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}

// 7 (Opcional)
let pokimon_voladores = document.getElementsByClassName('itype flying');
console.log(pokimon_voladores[0].parentElement.parentElement);
for (const pokemon of pokimon_voladores) {
    pokemon.parentElement.parentElement.style.background = 'pink';
}
