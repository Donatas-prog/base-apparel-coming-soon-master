const form = document.getElementById('form');
const email = document.getElementById('email');
const errorElem = document.getElementById('error');
const errorIcon = document.getElementById('danger-button');

form.addEventListener('submit', (e) => {
    let messages = [];
    if(!email.value.match(/^(\w+)@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        messages.push('Please provide a valid email');
        errorIcon.style.display = 'block';
        email.style.borderColor = 'red';
    }
    e.preventDefault();
    errorElem.innerText = messages.join(', ');
    
})