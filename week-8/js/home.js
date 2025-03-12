
//reference variables (referencing the DOM html page)
const petsULRef= document.querySelector("#pets");

//data variables
const pets=["cat","dog","fox","mouse","fish","fox","bird","posssum"];
const images=[
    "https://picsum.photos/200",
    "https://picsum.photos/210",
    "https://picsum.photos/220",
    "https://picsum.photos/230",
    "https://picsum.photos/240",
    "https://picsum.photos/250",
    "https://picsum.photos/260",
    "https://picsum.photos/270",
]
//loop through our list

for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    console.log(pet);

    const image= images[i];
    console.log(image);

    const imageHtml= "<img src ='"+ image+ "'alt='' />";

    petsULRef.innerHTML += "<li>" + pet + imageHtml +"</li>";
   
}
