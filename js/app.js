$(document).ready(function() {
    const drawPokemon = (data) => {
        data.forEach(ele => {
            let name = ele.pokemon_species.name;
            let id = ele.entry_number;
            let picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
            $('#elements').append(armarTemplate(name,picture));
        });
    }


    const armarTemplate = (name,picture) => {
        let t = `<div class= "element">
                   <img  src="${picture}"/>
                   <p class= "name">${name}</p>
                </div>`;
        return t;
    }

    const ajaxPokedex = () => {
        $.ajax({
                url: 'https://pokeapi.co/api/v2/pokedex/1/',
                type: 'GET',
                datatype: 'json'
            })
            .done(function(response) {
                drawPokemon(response.pokemon_entries);
            })
            .fail(function() {
                console.log("error")
            })
    }
    
    ajaxPokedex();
});
