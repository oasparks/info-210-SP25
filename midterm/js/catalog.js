const catalogRef=document.querySelector("#catalog");

const catalogitems=[
    {image:
        "images/i210-midterm-product1.webp",
        name: "My First Fire"
    },
    {image:
        "images/i210-midterm-product2.webp",
        name: "Handy Hand"
    },
    {image:
        "images/i210-midterm-product3.webp",
        name: "NapSack"
    },
    {image:
        "images/i210-midterm-product4.webp",
        name: "Hottub Wildlife Feader"
    },
    {image:
        "images/i210-midterm-product5.webp",
        name: "Toilet Meadow"
    },
    {image:
        "images/i210-midterm-product6.webp",
        name: "Pudding Pouch"
    },
];

catalogRef.innnerHTML="";


for (let index = 0; index < catalogitems.length; index++) {
    const item = catalogitems[index];

    const newArticle=document.createElement("article");
    const newImg= document.createElement("img");
    newImg.src = item.image;
    newArticle.appendChild(newImg);

    const newP="<p>" +item.name + "</p>";
    newArticle.innerHTML += newP;


    catalogRef.appendChild(newArticle);
}