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
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.addEventListener("click", function () {
        if (i.recipeName.toLowerCase() === "pancakes") {
            window.location.href = "edit-recipe.html";
        }
    });
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("recipe-name");
    name.innerText = i.recipeName.toUpperCase();
    container.appendChild(name);

    card.appendChild(container);
    document.getElementById("recipes").appendChild(card);
}

function filterProduct(value) {
    let elements = document.querySelectorAll(".card");

    elements.forEach((element) => {
        if (value === "MyRecipe") {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        } else if (value === "LikedRecipe") {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });

    let profileJudul = document.querySelector(".profile-judul");
    if (value === "MyRecipe") {
        profileJudul.textContent = "My Recipe";
    } else if (value === "LikedRecipe") {
        profileJudul.textContent = "Liked Recipe";
    }
}

window.onload = () => {
    filterProduct("MyRecipe");
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
            window.location.href = "../index.html";
        }
    });
}

document.getElementById('profile_photo').onchange = function (evt) {
    var files = evt.target.files;

    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            var img = new Image();

            var maxWidth = 500;
            var maxHeight = 500;

            img.onload = function () {
                var width = img.width;
                var height = img.height;

                var aspectRatio = width / height;

                if (width > maxWidth || height > maxHeight) {
                    if (width / maxWidth > height / maxHeight) {
                        width = maxWidth;
                        height = Math.round(width / aspectRatio);
                    } else {
                        height = maxHeight;
                        width = Math.round(height * aspectRatio);
                    }
                }

                img.width = width;
                img.height = height;

                var previewContainer = document.getElementById('photo-preview');
                if (!previewContainer) {
                    previewContainer = document.createElement('div');
                    previewContainer.id = 'photo-preview';
                    document.querySelector('form').appendChild(previewContainer);
                }

                previewContainer.innerHTML = "";

                previewContainer.appendChild(img);
            };

            img.src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    } else {
        var previewContainer = document.getElementById('photo-preview');
        if (previewContainer) {
            previewContainer.innerHTML = "";
        }
    }
};

feather.replace();

$(document).ready(function () {
    function validateInput(inputId, errorId, errorMessage, isValid) {
        if (!isValid) {
            $(errorId).text(errorMessage);
        } else {
            $(errorId).text('');
        }
    }

    $('#username').on('input', function () {
        var username = $(this).val().trim();
        var isUsernameValid = username.length > 0;
        validateInput('#username', '#name-error', '*Username cannot be empty.', isUsernameValid);
    });

    $('#pass').on('input', function () {
        var password = $(this).val().trim();
        var isValidPassword = password.length >= 7 && /[^\w\s]/.test(password);
        validateInput('#pass', '#password-error', '*Password must be at least 7 characters long and contain at least one symbol.', isValidPassword);
    });

    $('#email').on('input', function () {
        var email = $(this).val().trim();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isValidEmail = emailPattern.test(email);
        validateInput('#email', '#email-error', '*Please enter a valid email address.', isValidEmail);
    });

    $('#pass-repeat').on('input', function () {
        var repeatPass = $(this).val().trim();
        var password = $('#pass').val().trim();
        var isRepeatPassValid = repeatPass === password;
        validateInput('#pass-repeat', '#repeat-password-error', '*Password not match.', isRepeatPassValid);
    });

    $('.update-button').click(function (event) {
        event.preventDefault();

        var username = $('#username').val().trim();
        var password = $('#pass').val().trim();
        var email = $('#email').val().trim();
        var repeatPass = $('#pass-repeat').val().trim();

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isValidEmail = emailPattern.test(email);

        var isValidPassword = password.length >= 7 && /[^\w\s]/.test(password);

        var isUsernameValid = username.length > 0;

        var isRepeatPassValid = repeatPass === password;

        if (isValidEmail && isValidPassword && isUsernameValid && isRepeatPassValid) {
            window.location.href = 'profile.html';
        } else {
            validateInput('#username', '#name-error', '*Username cannot be empty.', isUsernameValid);
            validateInput('#pass', '#password-error', '*Password must be at least 7 characters long and contain at least one symbol.', isValidPassword);
            validateInput('#email', '#email-error', '*Please enter a valid email address.', isValidEmail);
            validateInput('#pass-repeat', '#repeat-password-error', '*Password not match.', isRepeatPassValid);
        }
    });

    $('#exampleModal').on('hidden.bs.modal', function () {
        $('#name-error').text('');
        $('#password-error').text('');
        $('#email-error').text('');
        $('#repeat-password-error').text('');
        $('#username').val('');
        $('#pass').val('');
        $('#email').val('');
        $('#pass-repeat').val('');
    });
});



