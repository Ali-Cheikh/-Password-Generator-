// script.js

document.getElementById('generateButton').addEventListener('click', generatePassword);
document.getElementById('copyButton').addEventListener('click', copyToClipboard);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.querySelector('input[name="uppercase"]').checked;
    const includeLowercase = document.querySelector('input[name="lowercase"]').checked;
    const includeDigits = document.querySelector('input[name="digits"]').checked;
    const includeSpecial = document.querySelector('input[name="special"]').checked;

    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'UWU';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz' + 'uwu';
    if (includeDigits) charset += '0123456789';
    if (includeSpecial) charset += '!@#$%^&*()_+[]{}|;:,.<>?';

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
        alert('Password copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy password: ', err);
    });
}
