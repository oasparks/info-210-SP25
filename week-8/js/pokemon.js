console.log("pokemon");

function showAlert(){
    alert("annoying message");
}

const confirmBtnRef=document.querySelector("#confirm-btn");
function showConfirm(){
    const userConfirmed= confirm("you are robot?");

    console.log(userConfirmed);
}

confirmBtnRef.onclick=showConfirm;

function showPrompt() {
    const userInput= prompt(
        "whats your favorite ice cream?", "vanilla"
    );
    console.log(userInput);
}

const JourneyRef=document.querySelector("#journey");

function startJourney(){
    JourneyRef.innerHTML= 
    "<p></p>you are so so excited, today you get your first pokemon. in front of you are pokeballs for bulbasaur, charmander, squirtle. Choose your pokemon:</p>";

    const starterPokemon= [
        {name: "Bulbasaur", 
            img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png" },
        {name: "Charmander", 
            img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png" },
        {name: "Squirtle", 
            img: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png" },
        ];

    for (let i = 0; <starterPokemon.length; i++) {
    const pokemon = starterPokemon[i];
    const newSection=document.createElement("section");
    newSection.innerHTML +=
    "<img height='100' src='"+ pokemon.img+
    "' alt='"+
    pokemon.name+
    "'/>"
    newSection.innerHTML +="<h4>" +pokemon.name + "</h4>";

    JourneyRef.appendChild(newSection);

    console.log(pokemon);    
        }
}

function choosePokemon