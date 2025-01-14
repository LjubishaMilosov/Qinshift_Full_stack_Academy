
jQuery (function() {

    function showName(name) {
        $("#pokemonResult").text("The pokemon we found is " + name)
    }

   

    function callPokemonApi(id){
        $.ajax({
            //method: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${id}`,
            success: function(pokemonResult) { //this code will be executed obly if the call is successful
                console.log(pokemonResult);
                showName(pokemonResult.name);
                
            },
            error: function(err){ // this code will be executed only if error occurs during the call
                console.log(`Error: ${err}`);
                
            }
        })
    }

    let button = $("#getPokemonBtn");

    button.click(function() {
        callPokemonApi(5);
    })
});