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


const form = document.querySelector('form');
const profilePhotoInput = document.getElementById('profile_photo');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const newPasswordInput = document.getElementById('new_password');
const repeatPasswordInput = document.getElementById('repeat_password');
const submitButton = document.getElementById('submitButton');

function showError(input, message) {
  const errorSpan = document.getElementById(`${input.id}-error`);
  errorSpan.textContent = message;
  errorSpan.style.display = 'block';
  input.classList.add('error');
}

function hideError(input) {
  const errorSpan = document.getElementById(`${input.id}-error`);
  errorSpan.textContent = '';
  errorSpan.style.display = 'none';
  input.classList.remove('error');
}

function validateProfilePhoto() {
  // Validasi profil foto, jika perlu
  // Di sini Anda dapat menambahkan validasi jika file harus diisi atau format file harus sesuai, jika diperlukan.
}

function validateUsername() {
  const username = usernameInput.value.trim();
  if (username === '') {
    showError(usernameInput, 'Username is required');
  } else {
    hideError(usernameInput);
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  if (email === '') {
    showError(emailInput, 'Email is required');
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    showError(emailInput, 'Email is not valid');
  } else {
    hideError(emailInput);
  }
}

function validatePassword() {
  const newPassword = newPasswordInput.value.trim();
  const repeatPassword = repeatPasswordInput.value.trim();

  if (newPassword === '') {
    showError(newPasswordInput, 'Password is required');
  } else if (newPassword.length < 7 || !/[!@#$%^&*]/.test(newPassword)) {
    showError(
      newPasswordInput,
      'Password must be at least 7 characters long and contain at least one symbol (!@#$%^&*)'
    );
  } else {
    hideError(newPasswordInput);
  }

  if (repeatPassword === '') {
    showError(repeatPasswordInput, 'Please repeat your password');
  } else if (newPassword !== repeatPassword) {
    showError(repeatPasswordInput, 'Passwords do not match');
  } else {
    hideError(repeatPasswordInput);
  }
}

function validateForm(event) {
  event.preventDefault();
  validateProfilePhoto();
  validateUsername();
  validateEmail();
  validatePassword();

  if (!document.querySelectorAll('.error').length) {
    const confirmReset = confirm('Are you sure for submitting this form?');
    if (confirmReset) {
      form.reset();
      alert('Thank You for updating your profile');
    }
  }
}

form.addEventListener('submit', validateForm);
submitButton.addEventListener('click', validateForm);
usernameInput.addEventListener('blur', validateUsername);
emailInput.addEventListener('blur', validateEmail);
newPasswordInput.addEventListener('blur', validatePassword);
repeatPasswordInput.addEventListener('blur', validatePassword);