const titleRef = document.getElementById("title");

console.log(titleRef);

const itemRef= document.getElementsByClassName("item");
console.log(itemRef);

const altTitleRef=document.querySelector("#title");

console.log(altTitleRef);

const itemsAltRef= document.querySelectorAll(".item");

console.log(itemsAltRef);

console.log(titleRef.innerHTML);

const ulRef = document.querySelector("body>ul");

console.log(ulRef.innerHTML);

titleRef.innerHTML= "DOM manipulation";

ulRef.innerHTML="";

const melons=["cantaloupe", "watermelon", "regular melon", "blind melon", "honeydew",];

for (let i = 0; i < melons.length; i++) {
    const melon = melons[i];
    ulRef.innerHTML += "<li class='item'>" +melon + "</li>";
    
}

titleRef.style.backgroundColor="white";
titleRef.style.color="#460a03";
titleRef.style.fontSize="100px";

document.querySelector("body>ul li").style.display ="none";

document.querySelector("body>ul li").style.display ="block";

document.querySelector("nav ul").style.display="flex";

const firstAref=document.querySelector("a");

console.log("first a:", firstAref),

firstAref.href="dom.html";
firstAref.setAttribute("target","_blank");