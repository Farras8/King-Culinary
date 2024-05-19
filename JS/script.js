function validateInput(InputId, errorId, errorMessage, isValid) {
    if (!isValid) {
        $(errorId).text(errorMessage);
    } else {
        $(errorId).text('');
    }
}


$('#login-pass').on('input', function () {
    var password = $(this).val().trim();
    var isValidPassword = /[^\w\s]/.test(password);
    validateInput('#login-pass', '#password-error', '*Contain at least one symbol.', isValidPassword);
});

$('#login-email').on('input', function () {
    var email = $(this).val().trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var isValidEmail = emailPattern.test(email);
    validateInput('#login-email', '#email-error', '*Please enter a valid email address.', isValidEmail);
});
$('#login-pass-repeat').on('input', function () {
    var repeatPass = $(this).val().trim();
    var password = $('#pass').val().trim();
    var isRepeatPassValid = repeatPass === password;
    validateInput('#login-pass-repeat', '#repeat-password-error', '*Password not match.', isRepeatPassValid);
});
$('#login-username').on('input', function () {
    var username = $(this).val().trim();
    var isUsernameValid = username.length > 0;
    validateInput('#login-username', '#name-error', '*Username cannot be empty.', isUsernameValid);
});

$(document).ready(function () {
    $('.login-button').click(function (event) {
        event.preventDefault(); // Menghentikan tindakan default dari tombol submit

        // Mendapatkan nilai email dan password
        var email = $('#login-email').val().trim();
        var password = $('#login-pass').val().trim();

        // Validasi email menggunakan regular expression
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isValidEmail = emailPattern.test(email);

        // Validasi password
        var isValidPassword = /[^\w\s]/.test(password);

        // Memeriksa apakah email dan password telah diisi dengan benar
        if (isValidEmail && isValidPassword) {
            // Jika sudah terisi dan valid, arahkan pengguna ke halaman index.html
            window.location.href = 'page-after-login/Home.html';
        } else {
            // Jika tidak, tampilkan pesan kesalahan di bawah input field
            validateInput('#login-pass', '#password-error', '*Contain at least one symbol.', isValidPassword);
            validateInput('#login-email', '#email-error', '*Please enter a valid email address.', isValidEmail);
        }
    });
});


$(document).ready(function () {
    $('.register-button').click(function (event) {
        event.preventDefault(); // Menghentikan tindakan default dari tombol submit

        // Mendapatkan nilai email, password, dan username
        var email = $('#login-email').val().trim();
        var password = $('#login-pass').val().trim();
        var username = $('#login-username').val().trim();
        var repeatPass = $('#login-pass-repeat').val().trim();

        // Validasi email menggunakan regular expression
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isValidEmail = emailPattern.test(email);

        // Validasi password
        var isValidPassword = /[^\w\s]/.test(password);

        // Validasi username
        var isUsernameValid = username.length > 0;

        var isRepeatPassValid = repeatPass == password;

        if (isValidEmail && isValidPassword && isUsernameValid && isRepeatPassValid) {
            Swal.fire({
                icon: 'success',
                title: 'Successfully Registered!',
                text: 'You can now log in.',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {

                    window.location.href = 'login.html';
                }
            });
        } else {
            validateInput('#login-username', '#name-error', '*Username cannot be empty.', isUsernameValid);
            validateInput('#login-pass', '#password-error', '*Ccontain at least one symbol.', isValidPassword);
            validateInput('#login-email', '#email-error', '*Please enter a valid email address.', isValidEmail);
            validateInput('#login-pass-repeat', '#repeat-password-error', '*Password not match.', isRepeatPassValid);
        }
    });
});


let menu = document.querySelector('#menu');
let navbar = document.querySelector('.Navbar');

menu.onclick = (event) => {
    event.preventDefault();
    navbar.classList.toggle('active');
};

// Close navbar menu when user clicks outside of it
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menu.contains(event.target)) {
        navbar.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let slider = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.slider .dots li');

    let lengthItems = items.length - 1;
    let active = 0;
    next.onclick = function() {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    }
    prev.onclick = function() {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    }
    let refreshInterval = setInterval(() => {
        next.click()
    }, 5000);

    function reloadSlider() {
        slider.style.left = -items[active].offsetLeft + 'px';

        let last_active_dot = document.querySelector('.slider .dots li.active');
        last_active_dot.classList.remove('active');
        dots[active].classList.add('active');

        clearInterval(refreshInterval);
        refreshInterval = setInterval(() => {
            next.click()
        }, 5000);
    }

    dots.forEach((li, key) => {
        li.addEventListener('click', () => {
            active = key;
            reloadSlider();
        })
    })

    window.onresize = function(event) {
        reloadSlider();
    };
});




