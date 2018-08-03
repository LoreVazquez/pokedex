$(document).ready(function() {
    var drawGifs = function(data) {
        var name = "";
        var img = "";
        data.forEach(ele => {
            name = ele.pokemon_entries.pokemon_species.name;
            img = ele.bitly_gif_url;
            $('#elements').append(armarTemplate(img, name));
        });
    }


    var armarTemplate = function(img, name) {
        var t = `<div class= "element">
                    <img src="${img}"/>
                    <p>${name}</p>
                </div>`;
        return t;
    }

    var ajaxGif = function() {
        $.ajax({
                url: 'https://pokeapi.co/api/v2/pokedex/1/',
                type: 'GET',
                datatype: 'json',
                data: {
                    q: gif,
                    api_key: 'jwJNnrQBdjo5W9XASLAJfz6yHAv4iVjN'
                }
            })
            .done(function(response) {
                console.log(response);
                drawGifs(response.data);
            })
            .fail(function() {
                console.log("error")
            })
    }

    $('#gif-search').click(function(event) {
        console.log('Entro');
        $('#elements').empty();
        var gif = $("#gif-text").val();
        ajaxGif();
    })
});