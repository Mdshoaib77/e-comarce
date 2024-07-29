// Script for Newsletter
document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const email = document.getElementById("email").value;

    
    if (validateEmail(email)) {
        
        document.getElementById("success-message").style.display = "block";
    } else {
        alert("Please enter a valid Gmail address.");
    }
});

function validateEmail(email) {
    
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
}

const bar = document.getElementById('bar'); 
const close = document.getElementById('close'); 
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
    nav.classList.add('active');
    })
}
if(close) {
    close.addEventListener('click', () => {
    nav.classList.remove('active');
    })
}

