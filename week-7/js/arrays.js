const favoriteReptiles=["Gecko","Komodo Dragon", "alligator"];

console.log(favoriteReptiles);
console.table(favoriteReptiles);

console.log("first thing:", favoriteReptiles[0]);

console.log("idk:",favoriteReptiles[13]);

console.log("# of favorite reptiles:", favoriteReptiles.length);

for (let i = 0; i < favoriteReptiles.length; i++) {
const reptile=favoriteReptiles[i];
    console.log(reptile)   
}

for( let i= favoriteReptiles.length -1; i> -1; i--){
    console.log("index:",i);
}