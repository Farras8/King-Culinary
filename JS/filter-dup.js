let recipes = {
    data: [
        {
            recipeName: "Pancakes",
            category: "Breakfast",
            image: "https://www.allrecipes.com/thmb/kvvETNZfOtAptH69gUsK6FaKRKA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg",
        },
        {
            recipeName: "Omelette",
            category: "Breakfast",
            image: "https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg",
        },
        {
            recipeName: "Smoothie Bowl",
            category: "Breakfast",
            image: "https://images.themodernproper.com/billowy-turkey/production/posts/2021/Smoothie-Bowl-8.jpeg?w=800&q=82&auto=format&fit=crop&dm=1641225383&s=aa57e01f365c4d0887b3e21589a33029",
        },
        {
            recipeName: "Avocado Toast",
            category: "Breakfast",
            image: "https://gimmedelicious.com/wp-content/uploads/2016/07/avocado-toast-7-of-13.jpg",
        },
        {
            recipeName: "French Toast",
            category: "Breakfast",
            image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/3/26/0/IE0309_French-Toast.jpg.rend.hgtvcom.1280.720.suffix/1431730431340.jpeg",
        },
        {
            recipeName: "Chocolate Cake",
            category: "Dessert",
            image: "https://scientificallysweet.com/wp-content/uploads/2023/06/IMG_4087-er-new1.jpg",
        },
        {
            recipeName: "Apple Pie",
            category: "Dessert",
            image: "https://schoolnightvegan.com/wp-content/uploads/2022/11/vegan-apple-pie-25.webp",
        },
        {
            recipeName: "Tiramisu",
            category: "Dessert",
            image: "https://bakewithzoha.com/wp-content/uploads/2023/08/chocolate-tiramisu-slice-6-scaled.jpg",
        },
        {
            recipeName: "Cheesecake",
            category: "Dessert",
            image: "https://bakewithzoha.com/wp-content/uploads/2023/08/chocolate-tiramisu-slice-6-scaled.jpg",
        },
        {
            recipeName: "Ice Cream Sundae",
            category: "Dessert",
            image: "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-10.jpg",
        },
        {
            recipeName: "Spaghetti Bolognese",
            category: "Dinner",
            image: "https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Spaghetti-Bolognese-tall2-0205.jpg",
        },
        {
            recipeName: "Roast Chicken",
            category: "Dinner",
            image: "https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_1920,c_limit/RoastChicken_RECIPE_080420_37993.jpg",
        },
        {
            recipeName: "Salmon Fillet",
            category: "Dinner",
            image: "https://www.spendwithpennies.com/wp-content/uploads/2023/03/1200-Baked-Salmon-Fillets-SpendWithPennies.jpg",
        },
        {
            recipeName: "Vegetable Stir-Fry",
            category: "Dinner",
            image: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg",
        },
        {
            recipeName: "Beef Stew",
            category: "Dinner",
            image: "https://tatyanaseverydayfood.com/wp-content/uploads/2019/11/The-Best-Beef-Stew-2-768x1024.jpg",
        },
        {
            recipeName: "Chicken Caesar Salad",
            category: "Lunch",
            price: "29",
            image: "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2023/01/caesar-salad-crispy-chicken-1080x1256.jpg",
        },
        {
            recipeName: "Caprese Sandwich",
            category: "Lunch",
            image: "https://ohsweetbasil.com/wp-content/uploads/balsamic-glaze-grilled-caprese-sandwich-recipe-8-1024x1536.jpg",
        },
        {
            recipeName: "Quinoa Salad",
            category: "Lunch",
            image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/08/quinoa-salad-recipes-779x1024.jpg",
        },
        {
            recipeName: "Sushi Rolls",
            category: "Lunch",
            image: "https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0293-II.jpg",
        },
        {
            recipeName: "Mushroom Risotto",
            category: "Lunch",
            image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto-recipe-759x1024.jpg",
        },
        {
            recipeName: "Hot Cocoa",
            category: "Winter",
            image: "https://sugarspunrun.com/wp-content/uploads/2024/01/Hot-cocoa-recipe-1-of-1.jpg",
        },
        {
            recipeName: "Pumpkin Soup",
            category: "Fall",
            image: "https://www.recipetineats.com/wp-content/uploads/2017/10/Pumpkin-Soup-2.jpg",
        },
        {
            recipeName: "Watermelon Salad",
            category: "Summer",
            image: "https://cdn.loveandlemons.com/wp-content/uploads/2013/08/watermelon-salad-732x1024.jpg",
        },
        {
            recipeName: "Butternut Squash Risotto",
            category: "Autumn",
            image: "https://cookieandkate.com/images/2016/01/butternut-risotto-recipe-768x1056.jpg",
        },
        {
            recipeName: "Spinach Artichoke Dip",
            category: "Appetizer",
            image: "https://www.onceuponachef.com/images/2022/11/spinach-artichoke-dip-1-2-1120x1449.jpg",
        },
        {
            recipeName: "Beef Wellington",
            category: "MainCourse",
            image: "https://grillmomma.com/wp-content/uploads/2020/12/IMG_1986_jpg-3-1080x1440.jpg",
        },
        {
            recipeName: "Eggnog",
            category: "Winter",
            image: "https://feelgoodfoodie.net/wp-content/uploads/2023/10/How-to-Make-Eggnog-10.jpg",
        },
        {
            recipeName: "Butternut Squash Soup",
            category: "Fall",
            image: "https://www.onceuponachef.com/images/2023/11/butternut-squash-soup-4-1152x1536.jpg",
        },
        {
            recipeName: "BBQ Ribs",
            category: "Summer",
            image: "https://myfoodbook.com.au/sites/default/files/styles/card_c_wd_wp/public/recipe_photo/Airfryer_Smokey_BBQ_Pork_Spare_Ribs_web.jpg",
        },
        {
            recipeName: "Apple Crisp",
            category: "Autumn",
            image: "https://sallysbakingaddiction.com/wp-content/uploads/2020/10/homemade-apple-crisp.jpg",
        },
        {
            recipeName: "Stuffed Mushrooms",
            category: "Appetizer",
            image: "https://hips.hearstapps.com/hmg-prod/images/stuffed-mushrooms-index-6520269300d9b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
        },
        {
            recipeName: "Lamb Chops",
            category: "MainCourse",
            image: "https://cafedelites.com/wp-content/uploads/2018/02/Lamb-Chops-ONE-1.jpg",
        },
        {
            recipeName: "Peppermint Bark",
            category: "Winter",
            image: "https://cafedelites.com/wp-content/uploads/2018/02/Lamb-Chops-ONE-1.jpg",
        },
        {
            recipeName: "Butternut Squash Salad",
            category: "Fall",
            image: "https://cdn.loveandlemons.com/wp-content/uploads/2017/11/butternut-squash-salad-1-769x1024.jpg",
        },
        {
            recipeName: "Grilled Corn on the Cob",
            category: "Summer",
            image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/06/Grilled-Corn-on-the-Cob-15.jpg",
        },
        {
            recipeName: "Pumpkin Risotto",
            category: "Autumn",
            image: "https://hips.hearstapps.com/hmg-prod/images/pumpkin-risotto-recipe-2-1662607656.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
        },
        {
            recipeName: "Bruschetta",
            category: "Appetizer",
            image: "https://www.simplyrecipes.com/thmb/IH1JTK26k3y4oVHVu8XeFflf33E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Bruschetta-Tomato-Basil-LEAD-3-772fd11de4144552a485af87f7033bf8.jpg",
        },
        {
            recipeName: "Steak",
            category: "MainCourse",
            image: "https://www.seriouseats.com/thmb/sGmCdh11W1YtdHhHjosa2alkPJM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__Anova-Steak-Guide-Sous-Vide-Photos15-beauty-159b7038c56a4e7685b57f478ca3e4c8.jpg",
        },
        {
            recipeName: "Mulled Wine",
            category: "Winter",
            image: "https://www.gimmesomeoven.com/wp-content/uploads/2013/10/Mulled-Wine-Recipe-1-2.jpg",
        },
        {
            recipeName: "Cranberry Sauce",
            category: "Winter",
            image: "https://joyfoodsunshine.com/wp-content/uploads/2016/11/best-homemade-cranberry-sauce-recipe-1.jpg",
        },
        {
            recipeName: "Butternut Squash Casserole",
            category: "Fall",
            image: "https://thecozyapron.com/wp-content/uploads/2020/11/butternut-squash-casserole_thecozyapron_1.jpg",
        },
        {
            recipeName: "Pumpkin Bread",
            category: "Fall",
            image: "https://www.onceuponachef.com/images/2009/09/Pumpkin-Bread-100.jpg",
        },
        {
            recipeName: "Grilled Fish Tacos",
            category: "Summer",
            image: "https://reciperunner.com/wp-content/uploads/2022/04/grilled-fish-tacos-3.jpg",
        },
        {
            recipeName: "Mango Salsa",
            category: "Summer",
            image: "https://cookieandkate.com/images/2015/04/mango-pico-de-gallo-1.jpg",
        },
        {
            recipeName: "Apple Cider",
            category: "Autumn",
            image: "https://www.wellplated.com/wp-content/uploads/2022/08/best-apple-cider.jpg",
        },
        {
            recipeName: "Cranberry Salad",
            category: "Autumn",
            image: "https://www.floatingkitchen.net/wp-content/uploads/2022/11/Cranberry-Apple-Salad-1.jpg",
        },
        {
            recipeName: "Quiche",
            category: "Appetizer",
            image: "https://o-cdn-cas.sirclocdn.com/parenting/images/Quiche_untuk_Appetizer_www.karens.width-800.format-webp.webp",
        },
        {
            recipeName: "Shrimp Cocktail",
            category: "Appetizer",
            image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/4/21/0/bw2b09_shrimp_cocktail.jpg.rend.hgtvcom.826.620.suffix/1557928675507.jpeg",
        },
        {
            recipeName: "Roast Turkey",
            category: "MainCourse",
            image: "https://www.allrecipes.com/thmb/1rSsZZ96LM0QP54yIjH-YuXdR6M=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ALR-56348-a-simply-perfect-roast-turkey-VAT-hero-4x3-c9eaf408d00a4cd89251ea856b1c317f.jpg",
        },
        {
            recipeName: "Beef Bourguignon",
            category: "MainCourse",
            image: "https://recipes.clubandresortchef.com/wp-content/uploads/2023/04/Deconstructed-Beef-Bourguignon_recipe-860x380.jpg",
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
    image.addEventListener("click", function () {
        // Check if recipeName is "Pancakes"
        if (i.recipeName.toLowerCase() === "pancakes") {
            // If "Pancakes" is clicked, redirect to edit-recipe.html
            window.location.href = "pancake-dup.html";
        }
    });
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // container
    let container = document.createElement("div");
    container.classList.add("container");

    let loveIcon = document.createElement("i");
    loveIcon.setAttribute("data-feather", "heart");
    loveIcon.classList.add("love-icon");
    imgContainer.appendChild(loveIcon);
    // recipe
    let name = document.createElement("h5");
    name.classList.add("recipe-name");
    name.innerText = i.recipeName.toUpperCase();
    container.appendChild(name);

    card.appendChild(container);
    document.getElementById("recipes").appendChild(card);
}
feather.replace();

// parameter passed from button (Parameter same as category)
function filterProduct(value) {
    // update the text in the span with the selected value
    document.querySelector("#dropdown .select .selected").innerText = value;

    // select all cards
    let elements = document.querySelectorAll(".card");
    // loop through all cards
    elements.forEach((element) => {
        // display all cards on 'all' button click
        if (value == "Browse by") {
            element.classList.remove("hide");
        } else {
            // Check if element contains category class
            if (element.classList.contains(value)) {
                // display element based on category
                element.classList.remove("hide");
            } else {
                // hide other elements
                element.classList.add("hide");
            }
        }
    });
}

window.onload = () => {
    filterProduct("Browse by");
};

document.getElementById("search-input").addEventListener("input", () => {
    performSearch();
});

function performSearch() {
    // initializations
    let searchInput = document.getElementById("search-input").value.trim().toUpperCase(); // Trim whitespace and convert to uppercase
    let elements = document.querySelectorAll(".recipe-name");
    let cards = document.querySelectorAll(".card");
    let dropdown = document.querySelector(".selected");
    let notFoundMessage = document.querySelector(".not-found");
    let footer = document.querySelector(".footer");

    // If search input is empty, revert to "Browse By"
    if (searchInput === "") {
        dropdown.innerText = "Browse By";
        cards.forEach(card => card.classList.remove("hide")); 
        notFoundMessage.style.display = "none";
        return; 
    }
    let found = false; 
    // loop through all elements
    elements.forEach((element, index) => {
        // check if text includes the search value
        if (element.innerText.toUpperCase().includes(searchInput)) {
            // display matching card
            cards[index].classList.remove("hide");
            found = true;
        } else {
            // hide others
            cards[index].classList.add("hide");
        }
    });
    if (!found) {
        notFoundMessage.style.display = "block";
        footer.style.position = "absolute";
        footer.style.bottom = "0";
    } else {
        notFoundMessage.style.display = "none"; 
        footer.style.position = "static";
    }
}






//dropdown
const dropdowns = document.querySelectorAll('#dropdown');


dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');

    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;

            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});


//tambahan
