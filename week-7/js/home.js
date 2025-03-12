console.log("cozy home");

console.log( "2+7=", 2+ 7);

console.log("'2' + '2'=","2"+"2");

console.log("My name is"+"Olivia");

console.log("2+2=",2+ Number("2"));

if(true){
    console.log("Always true");
} else{
    console.error("This should never happen");
}

let money= 0.75;

if( money>= 0.5){
    console.log("you pay for a bus ticket");
    money-=0.5;
} 
else if(money>=.25){console.log("catch a ride with the mysterious hat man");
    console.warn("sounds a little sketch but its your life");
    money -=.25;
}
else{
    console.log("you're broke, walk home");
    console.warn("It's a 5 hour walk: (");
}
