{
    "use strict";

    // General CONST
    const INPUT = document.querySelector(".searchBox input");
    const POCKEMONBOX = document.querySelector(".pokemonBox");
    const UL = document.querySelector(".searchBox ul");

    // request Fetch
    let requestFetch = pokemonName => {
        fetch(`https:pokeapi.co/api/v2/pokemon/`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch((err) => {
                POCKEMONBOX.innerHTML = `
            <h4>Pokemon not found 😞</h4>
            `;
                console.log("Pokemon not found", err);
            })

    }
    requestFetch("")
}