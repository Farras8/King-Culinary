document.getElementById('photo').onchange = function (evt) {
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

function addIngredient(button) {
    var container = button.parentElement;
    var input = document.createElement("input");
    input.type = "text";
    input.name = "ingredient[]";
    input.placeholder = "Add Ingredient";
    input.required = true;

    // Create remove button
    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        container.removeChild(input);
        container.removeChild(removeButton);
    };

    container.insertBefore(input, button);
    container.insertBefore(removeButton, button);
}

function addCookingStep(button) {
    var container = button.parentElement;
    var textarea = document.createElement("textarea");
    textarea.name = "cooking_step[]";
    textarea.rows = "4";
    textarea.cols = "50";
    textarea.placeholder = "Add Cooking Step";
    textarea.required = true;

    // Create remove button
    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        container.removeChild(textarea);
        container.removeChild(removeButton);
    };

    container.insertBefore(textarea, button);
    container.insertBefore(removeButton, button);
}

    function showConfirmationAndSuccessAlert() {
        Swal.fire({
            title: 'Are you sure you want to save your recipe?',
            text: 'Once saved, you won\'t be able to modify it.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, save it!',
            cancelButtonText: 'No, cancel!'
        }).then((result) => {
            if (result.isConfirmed) {
                showSuccessAlert();
            }
        });
    }
    
    // Function to show the success message
    function showSuccessAlert() {
        Swal.fire({
            icon: 'success',
            title: 'Successfully Registered!',
            text: 'You can now log in.',
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'addRecipe.html';
            }
        });
    }

    $(document).ready(function () {
        $('#save').click(function (event) {
            event.preventDefault(); // Prevent the default action of the submit button
    
            // Retrieve input values
            var photo = $('#photo').val().trim();
            var recipe_name = $('#recipe_name').val().trim();
            var recipe_desc = $('#recipe_desc').val().trim();
            var category = $('#category').val().trim();
            var ingredient = $('#ingredient').val().trim();
            var cook_step = $('#cook_step').val().trim();
    
            // Validate inputs
            var isPhotoValid = photo.length > 0;
            var isrecipe_nameValid = recipe_name.length > 0;
            var isrecipe_descValid = recipe_desc.length > 0;
            var iscategoryValid = category.length > 0;
            var isingredientValid = ingredient.length > 0;
            var iscook_stepValid = cook_step.length > 0;
            
            // Check if all inputs are valid
            if (isPhotoValid && isrecipe_nameValid && isrecipe_descValid && isingredientValid && iscategoryValid && iscook_stepValid) {
                showConfirmationAndSuccessAlert();
                
                // Reset error messages
                $('#photo-error, #recipe_name-error, #recipe_desc-error, #category-error, #ingredients-error, #cook_step-error').text('');
            } else {
                // Show error messages for invalid inputs
                $('#photo-error').text(isPhotoValid ? '' : '*Photo cannot be empty.');
                $('#recipe_name-error').text(isrecipe_nameValid ? '' : '*Recipe Name cannot be empty.');
                $('#recipe_desc-error').text(isrecipe_descValid ? '' : '*Description cannot be empty.');
                $('#category-error').text(iscategoryValid ? '' : '*Category cannot be empty.');
                $('#ingredients-error').text(isingredientValid ? '' : '*Ingredient cannot be empty.');
                $('#cook_step-error').text(iscook_stepValid ? '' : '*Cooking Step cannot be empty.');
            }
        });
    });
    
    $(document).ready(function () {
        $('#share').click(function (event) {
            event.preventDefault(); // Prevent the default action of the submit button
    
            // Retrieve input values
            var photo = $('#photo').val().trim();
            var recipe_name = $('#recipe_name').val().trim();
            var recipe_desc = $('#recipe_desc').val().trim();
            var category = $('#category').val().trim();
            var ingredient = $('#ingredient').val().trim();
            var cook_step = $('#cook_step').val().trim();
    
            // Validate inputs
            var isPhotoValid = photo.length > 0;
            var isrecipe_nameValid = recipe_name.length > 0;
            var isrecipe_descValid = recipe_desc.length > 0;
            var iscategoryValid = category.length > 0;
            var isingredientValid = ingredient.length > 0;
            var iscook_stepValid = cook_step.length > 0;
            
            // Check if all inputs are valid
            if (isPhotoValid && isrecipe_nameValid && isrecipe_descValid && isingredientValid && iscategoryValid && iscook_stepValid) {
                showConfirmationAndSuccessAlert();
                
                // Reset error messages
                $('#photo-error, #recipe_name-error, #recipe_desc-error, #category-error, #ingredients-error, #cook_step-error').text('');
            } else {
                // Show error messages for invalid inputs
                $('#photo-error').text(isPhotoValid ? '' : '*Photo cannot be empty.');
                $('#recipe_name-error').text(isrecipe_nameValid ? '' : '*Recipe Name cannot be empty.');
                $('#recipe_desc-error').text(isrecipe_descValid ? '' : '*Description cannot be empty.');
                $('#category-error').text(iscategoryValid ? '' : '*Category cannot be empty.');
                $('#ingredients-error').text(isingredientValid ? '' : '*Ingredient cannot be empty.');
                $('#cook_step-error').text(iscook_stepValid ? '' : '*Cooking Step cannot be empty.');
            }
        });
    });
    