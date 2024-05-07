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
        var isValidPassword = password.length >= 7 && /[^\w\s]/.test(password);

        // Memeriksa apakah email dan password telah diisi dengan benar
        if (isValidEmail && isValidPassword) {
            // Jika sudah terisi dan valid, arahkan pengguna ke halaman index.html
            window.location.href = 'page-after-login/Home.html';
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
        }
    });
});



$(document).ready(function () {
    $('.register-button').click(function (event) {
        event.preventDefault(); 


        var email = $('#login-email').val().trim();
        var password = $('#login-pass').val().trim();
        var username = $('#login-username').val().trim();
        var repeatPass = $('#login-pass-repeat').val().trim();


        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isValidEmail = emailPattern.test(email);
        
        var isValidPassword = password.length >= 7 && /[^\w\s]/.test(password);

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
            if (!isValidEmail) {
                $('#email-error').text('*Please enter a valid email address.');
            } else {
                $('#email-error').text(''); 
            }
            if (!isValidPassword) {
                $('#password-error').text('*Password must be at least 7 characters long and contain at least one symbol.');
            } else {
                $('#password-error').text(''); 
            }
            if (!isUsernameValid) {
                $('#name-error').text('*Username cannot be empty.');
            } else {
                $('#name-error').text(''); 
            }
            if (!isRepeatPassValid) {
                $('#repeat-password-error').text('*Password not match.');
            } else {
                $('#repeat-password-error').text(''); 
            }
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

let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};



//Dropdown


document.getElementById('up-recipe').addEventListener('click', function (event) {
    // Tampilkan pesan peringatan menggunakan SweetAlert
    Swal.fire({
        icon: 'warning',
        title: 'You should login first to add your recipe.',
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        // Redirect pengguna ke halaman login jika mereka mengklik tombol "Login"
        if (result.isConfirmed) {
            window.location.href = 'login.html';
        }
    });

    // Menghentikan aksi default dari link
    event.preventDefault();
});

document.getElementById('up-recipe-btn').addEventListener('click', function (event) {
    // Tampilkan pesan peringatan menggunakan SweetAlert
    Swal.fire({
        icon: 'warning',
        title: 'You should login first to add your recipe.',
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Cancel'
    }).then((result) => {
        // Redirect pengguna ke halaman login jika mereka mengklik tombol "Login"
        if (result.isConfirmed) {
            window.location.href = 'login.html';
        }
    });

    // Menghentikan aksi default dari link
    event.preventDefault();
});

