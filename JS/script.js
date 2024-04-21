$(document).ready(function() {
    $('.login-button').click(function(event) {
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

$(document).ready(function() {
    $('.register-button').click(function(event) {
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


