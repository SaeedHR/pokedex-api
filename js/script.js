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
            .then(data => {
                const newList = []
                data.results.map(data => newList.push(data.name))
                getPokemon(newList)

            })
            .catch((err) => {
                POCKEMONBOX.innerHTML = `
            <h4>Pokemon not found 😞</h4>
            `;
                console.log("Pokemon not found", err);
            })

    }


    // Get and input Keyup
    let getPokemon = data => {
        INPUT.onkeyup = e => {
            POCKEMONBOX.innerHTML = "";
            let inputValue = lowerCaseName(e.target.value);
            const sortList = [].sort();
            for (let i = 0; i < data.length; i++)  data[i].includes(inputValue) ? sortList.push(data[i]) : '';
            console.log(sortList)
        }
    }
    requestFetch("")
}