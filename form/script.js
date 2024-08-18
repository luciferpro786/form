// Get the form element
const form = document.getElementById('myForm');

// Add event listener to the form
form.addEventListener('submit', validateForm);

// Add event listener to each input field
const inputs = form.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('change', validateInput);
});

// Function to validate the form
function validateForm(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate full name
    if (fullName.length < 5) {
        document.getElementById('fullNameError').innerHTML = 'Name must be at least 5 characters';
        return false;
    }

    // Validate email
    if (!email.includes('@')) {
        document.getElementById('emailError').innerHTML = 'Invalid email address';
        return false;
    }


    // Validate phone number
    if (phone.length !== 10) {
      document.getElementById('phoneError').innerHTML = 'Phone number must be 10 digits';
      return false;
    } else if (phone === '123456789') {
      document.getElementById('phoneError').innerHTML = 'Invalid phone number';
      return false;
    } else if (!/^\d+$/.test(phone)) {
      document.getElementById('phoneError').innerHTML = 'Phone number must only contain digits';
      return false;
    }

    // Validate password
if (password === 'password' || password === fullName) {
    document.getElementById('passwordError').innerHTML = 'Password cannot be "password" or your name';
    return false;
} else if (password.length < 8) {
    document.getElementById('passwordError').innerHTML = 'Password must be at least 8 characters';
    return false;
}

// Validate confirm password
if (password !== confirmPassword) {
    document.getElementById('confirmPasswordError').innerHTML = 'Passwords do not match';
    return false;
}

// If all validations pass, submit the form
form.submit();
}

// Function to validate each input field
function validateInput(event) {
    const input = event.target;
    const inputValue = input.value;
    const inputId = input.id;

    switch (inputId) {
        case 'fullName':
            if (inputValue.length < 5) {
                document.getElementById('fullNameError').innerHTML = 'Name must be at least 5 characters';
            } else {
                document.getElementById('fullNameError').innerHTML = '';
            }
            break;
        case 'email':
            if (!inputValue.includes('@')) {
                document.getElementById('emailError').innerHTML = 'Invalid email address';
            } else {
                document.getElementById('emailError').innerHTML = '';
            }
            break;
        case 'phone':
            if (inputValue === '123456789' || inputValue.length !== 10) {
                document.getElementById('phoneError').innerHTML = 'Invalid phone number';
            } else {
                document.getElementById('phoneError').innerHTML = '';
            }
            break;
        case 'password':
            if (inputValue === 'password' || inputValue === document.getElementById('fullName').value) {
                document.getElementById('passwordError').innerHTML = 'Password cannot be "password" or your name';
            } else if (inputValue.length < 8) {
                document.getElementById('passwordError').innerHTML = 'Password must be at least 8 characters';
            } else {
                document.getElementById('passwordError').innerHTML = '';
            }
            break;
        case 'confirmPassword':
            if (inputValue !== document.getElementById('password').value) {
                document.getElementById('confirmPasswordError').innerHTML = 'Passwords do not match';
            } else {
                document.getElementById('confirmPasswordError').innerHTML = '';
            }
            break;
    }
}


function validateForm(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validate the form data
    if (fullName.length < 5) {
      document.getElementById('fullNameError').innerHTML = 'Name must be at least 5 characters';
      return false;
    }
    // ... (rest of the validation code)
  
    // Store the data in Local Storage
    const userData = {
      fullName,
      email,
      phone,
      password
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  

    const storedData = localStorage.getItem('userData');
if (storedData) {
  const userData = JSON.parse(storedData);
  console.log(userData);
}

    // Submit the form
    form.submit();
  }