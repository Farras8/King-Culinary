let recipes = {
    data: [
        {
            recipeName: "Recipe 1",
            category: "MyRecipe",
            image: "../image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 2",
            category: "LikedRecipe",
            image: "../image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 3",
            category: "MyRecipe",
            image: "../image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 4",
            category: "LikedRecipe",
            image: "../image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 5",
            category: "MyRecipe",
            image: "../image/dinner title.jpeg",
        },
        {
            recipeName: "Recipe 6",
            category: "LikedRecipe",
            image: "../image/dinner title.jpeg",
        },
    ],
};

for (let i of recipes.data) {
    // Create Card
    let card = document.createElement("div");
    // Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // container
    let container = document.createElement("div");
    container.classList.add("container");
    // recipe
    let name = document.createElement("h5");
    name.classList.add("recipe-name");
    name.innerText = i.recipeName.toUpperCase();
    container.appendChild(name);

    card.appendChild(container);
    document.getElementById("recipes").appendChild(card);
}

function filterProduct(value) {
    // select all cards
    let elements = document.querySelectorAll(".card");

    // loop through all cards
    elements.forEach((element) => {
        // Check if element contains category class
        if (value === "MyRecipe") {
            // display MyRecipe elements
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        } else if (value === "LikedRecipe") {
            // display LikedRecipe elements
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });

    // Set the text in the profile-judul element
    let profileJudul = document.querySelector(".profile-judul");
    if (value === "MyRecipe") {
        profileJudul.textContent = "My Recipe";
    } else if (value === "LikedRecipe") {
        profileJudul.textContent = "Liked Recipe";
    }
}


window.onload = () => {
    filterProduct("MyRecipe"); // Set the default filter to "MyRecipe" on page load
};
