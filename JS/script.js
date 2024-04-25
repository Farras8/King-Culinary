$(document).ready(function () {
    $('.login-button').click(function (event) {
        event.preventDefault(); // Menghentikan tindakan default dari tombol submit

        // Mendapatkan nilai email dan password
        var email = $('#login-email').val().trim();
        var password = $('#login-pass').val().trim();

        // Memeriksa apakah email dan password telah diisi
        if (email !== '' && password !== '') {
            // Jika sudah terisi, arahkan pengguna ke halaman index.html
            window.location.href = 'index.html';
        } else {
            // Jika tidak, tampilkan pesan kesalahan atau lakukan tindakan lain sesuai kebutuhan
            alert('Please fill in both email and password fields.');
        }
    });
});

$(document).ready(function () {
    $('.register-button').click(function (event) {
        event.preventDefault(); // Menghentikan tindakan default dari tombol submit

        // Mendapatkan nilai email dan password
        var user = $('#register-user').val().trim();
        var email = $('#register-email').val().trim();
        var password = $('#register-pass').val().trim();

        // Memeriksa apakah email dan password telah diisi
        if (user !== '' && email !== '' && password !== '') {
            // Jika sudah terisi, arahkan pengguna ke halaman index.html
            window.location.href = 'login.html';
            alert('Thanks, ' + user + ' for register on this website.')
        } else {
            // Jika tidak, tampilkan pesan kesalahan atau lakukan tindakan lain sesuai kebutuhan
            alert('Please fill in username, email and password fields.');
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

const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });

    const autoSlide = () => {
        const interval = setInterval(() => {
            const nextScrollLeft = imageList.scrollLeft + imageList.clientWidth;
            if (nextScrollLeft >= maxScrollLeft) {
                imageList.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                imageList.scrollTo({ left: nextScrollLeft, behavior: "smooth" });
            }
        }, 5000);
        return interval;
    };

    let autoSlideInterval = autoSlide();

    imageList.addEventListener("scroll", () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = autoSlide();
    });

    window.addEventListener("resize", () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = autoSlide();
    });
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

//Dropdown

const dropdowns = document.querySelectorAll('.dropdown');

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
