let recipes = {
    data: [
        {
            recipeName: "Pancakes",
            category: "MyRecipe",
            image: "https://www.allrecipes.com/thmb/kvvETNZfOtAptH69gUsK6FaKRKA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg",
        },
        {
            recipeName: "Omelette",
            category: "LikedRecipe",
            image: "https://joyfoodsunshine.com/wp-content/uploads/2022/07/best-omelette-recipe-1.jpg",
        },
        {
            recipeName: "Smoothie Bowl",
            category: "MyRecipe",
            image: "https://images.themodernproper.com/billowy-turkey/production/posts/2021/Smoothie-Bowl-8.jpeg?w=800&q=82&auto=format&fit=crop&dm=1641225383&s=aa57e01f365c4d0887b3e21589a33029",
        },
        {
            recipeName: "Avocado Toast",
            category: "MyRecipe",
            image: "https://gimmedelicious.com/wp-content/uploads/2016/07/avocado-toast-7-of-13.jpg",
        },
        {
            recipeName: "French Toast",
            category: "LikedRecipe",
            image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/3/26/0/IE0309_French-Toast.jpg.rend.hgtvcom.1280.720.suffix/1431730431340.jpeg",
        },
        {
            recipeName: "Chocolate Cake",
            category: "LikedRecipe",
            image: "https://scientificallysweet.com/wp-content/uploads/2023/06/IMG_4087-er-new1.jpg",
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
    // Add event listener to the image
    image.addEventListener("click", function () {
        // Check if recipeName is "Pancakes"
        if (i.recipeName.toLowerCase() === "pancakes") {
            // If "Pancakes" is clicked, redirect to edit-recipe.html
            window.location.href = "edit-recipe.html";
        }
    });
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

function confirmDeleteAccount() {
    Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to delete your account!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirect to index.html on confirmation
            window.location.href = "../index.html";
        }
    });
}

function confirmLogOutAccount() {
    Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to log out!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Log Out',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirect to index.html on confirmation
            window.location.href = "../index.html";
        }
    });
}


//profile photo
document.getElementById('profile_photo').onchange = function (evt) {
    var files = evt.target.files;

    // Check if a file is selected
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            // Create a new image element to display the preview
            var img = new Image();

            // Set the maximum width and height for the preview image
            var maxWidth = 500; // maximum width
            var maxHeight = 500; // maximum height

            img.onload = function () {
                var width = img.width;
                var height = img.height;

                // Calculate the aspect ratio
                var aspectRatio = width / height;

                // Determine the resizing factor based on the maximum dimensions
                if (width > maxWidth || height > maxHeight) {
                    if (width / maxWidth > height / maxHeight) {
                        width = maxWidth;
                        height = Math.round(width / aspectRatio);
                    } else {
                        height = maxHeight;
                        width = Math.round(height * aspectRatio);
                    }
                }

                // Set the dimensions of the preview image
                img.width = width;
                img.height = height;

                // Get or create the preview container element
                var previewContainer = document.getElementById('photo-preview');
                if (!previewContainer) {
                    previewContainer = document.createElement('div');
                    previewContainer.id = 'photo-preview';
                    document.querySelector('form').appendChild(previewContainer);
                }

                // Clear any existing preview content
                previewContainer.innerHTML = "";

                // Append the image element to the preview container
                previewContainer.appendChild(img);
            };

            img.src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    } else {
        // Clear the preview if no file is selected
        var previewContainer = document.getElementById('photo-preview');
        if (previewContainer) {
            previewContainer.innerHTML = "";
        }
    }
};

feather.replace();

$(document).ready(function () {
    $('.update-button').click(function (event) {
        event.preventDefault(); // Menghentikan tindakan default dari tombol submit

        // Mendapatkan nilai email, password, dan username
        var username = $('#username').val().trim();
        var password = $('#pass').val().trim();
        var email = $('#email').val().trim();
        var repeatPass = $('#pass-repeat').val().trim();

        // Validasi email menggunakan regular expression
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isValidEmail = emailPattern.test(email);

        // Validasi password
        var isValidPassword = password.length >= 7 && /[^\w\s]/.test(password);

        // Validasi username
        var isUsernameValid = username.length > 0;

        var isRepeatPassValid = repeatPass == password;

        // Memeriksa apakah email, password, dan username telah diisi dengan benar
        if (isValidEmail && isValidPassword && isUsernameValid) {
            // Jika sudah terisi dan valid, arahkan pengguna ke halaman index.html
            window.location.href = 'profile.html';
        } else {
            // Jika tidak, tampilkan pesan kesalahan di bawah input field
            if (!isValidEmail) {
                $('#email-error').text('*Please enter a valid email address.');
            } else {
                $('#email-error').text(''); // Menghapus pesan error jika email valid
            }
            if (!isValidPassword) {
                $('#password-error').text('*Password must be at least 7 characters long and contain at least one symbol.');
            } else {
                $('#password-error').text(''); // Menghapus pesan error jika password valid
            }
            if (!isUsernameValid) {
                $('#name-error').text('*Username cannot be empty.');
            } else {
                $('#name-error').text(''); // Menghapus pesan error jika username valid
            }
            if (!isRepeatPassValid) {
                $('#repeat-password-error').text('*Password not match.');
            } else {
                $('#repeat-password-error').text(''); // Menghapus pesan error jika username valid
            }
        }
    });
});


