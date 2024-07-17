document.getElementById('generateButton').addEventListener('click', generatePassword);
document.getElementById('copyButton').addEventListener('click', copyToClipboard);
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.querySelectorAll('.length-button').forEach(button => button.addEventListener('click', setLength));
document.getElementById('increaseLength').addEventListener('click', () => changeLength(1));
document.getElementById('decreaseLength').addEventListener('click', () => changeLength(-1));

let length = 8;

function setLength(event) {
    length = parseInt(event.target.getAttribute('data-length'));
    updateLengthDisplay();
}

function changeLength(delta) {
    length = Math.max(4, length + delta); // Ensure length does not go below 4
    updateLengthDisplay();
}

function updateLengthDisplay() {
    document.getElementById('lengthDisplay').textContent = length;
}

function generatePassword() {
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeDigits = document.getElementById('digits').checked;
    const includeSpecial = document.getElementById('special').checked;

    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeDigits) charset += '0123456789';
    if (includeSpecial) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

    if (charset === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select at least one character type.'
        });
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('generatedPassword').textContent = password;
}

function copyToClipboard() {
    const password = document.getElementById('generatedPassword').textContent;
    navigator.clipboard.writeText(password).then(() => {
        Swal.fire({
            icon: 'success',
            title: 'Copied!',
            text: 'Password copied to clipboard!'
        });
    }).catch(err => {
        Swal.fire({
            icon: 'error',
            title: 'Failed to copy',
            text: 'Failed to copy password: ' + err
        });
    });
}

function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('themeToggle');
    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')) {
        themeToggleBtn.textContent = 'Switch to Dark Theme';
    } else {
        themeToggleBtn.textContent = 'Switch to Light Theme';
    }
}

// Check internet connection on load and show alert if offline
if (!navigator.onLine) {
    Swal.fire({
        icon: 'error',
        title: 'No Internet Connection',
        text: 'You cannot use this feature right now. Please check your internet connection.'
    });
}

// Add event listeners for online and offline events
window.addEventListener('offline', () => {
    Swal.fire({
        icon: 'error',
        title: 'No Internet Connection',
        text: 'You cannot use this feature right now. Please check your internet connection.'
    });
});


// Initial display update
updateLengthDisplay();
