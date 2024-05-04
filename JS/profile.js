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

function confirmDeleteAccount() {
    if (confirm("Are you sure you want to delete your account?")) {
      // Redirect to index.html on confirmation
      window.location.href = "../index.html";
    }
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

            img.onload = function() {
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


  