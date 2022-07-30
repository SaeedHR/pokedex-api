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
                if (pokemonName) console.log(data);
                else {
                    const newList = []
                    data.results.map(data => newList.push(data.name))
                    getPokemon(newList)
                }

            })
            .catch((err) => {
                POCKEMONBOX.innerHTML = `
            <h4>Pokemon not found 😞</h4>
            `;
                console.log("Pokemon not found", err);
            })

    }
    // create sort List
    const pokemonSortList = (sortList) => {
        for (let i = 0; i < sortList.length; i++) {
            let li = createEl('li'), a = createEl('a', sortList[i]);
            a.setAttribute('href', '#');
            li.appendChild(a);
            UL.appendChild(li);
        }
    }

    // pokemonlist Clickhandler
    const listHandlerClick = (...sortList) => {
        let listLink = document.querySelectorAll("ul a");
        for (let i = 0; i < listLink.length; i++) {
            listLink[i].onclick = e => {
                INPUT.value = "";
                let onePokemonName;
                for (let i = 0; i < sortList.length; i++) {
                    const pokemonName = e.target.innerText;
                    if (pokemonName === sortList[i]) {
                        onePokemonName = sortList[i];
                        break;
                    }

                }

                UL.innerHTML = "";
                requestFetch(onePokemonName)

            }

        }
    }
    // Get and input Keyup
    let getPokemon = data => {
        INPUT.onkeyup = e => {
            POCKEMONBOX.innerHTML = "";
            let inputValue = lowerCaseName(e.target.value);
            const sortList = [].sort();
            for (let i = 0; i < data.length; i++)  data[i].includes(inputValue) ? sortList.push(data[i]) : '';
            UL.innerHTML = "";
            pokemonSortList(sortList);
            listHandlerClick(...sortList)

            inputValue.length < 1 ? UL.innerHTML = "" : '';

        }
    }
    requestFetch("")
}