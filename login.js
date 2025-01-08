document.querySelector('.sign-in-form').addEventListener('submit', (event) => {
    event.preventDefault(); 
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    
    if (username === "malinao@gmail.com" && password === "riri@02") { 
        alert("Login successful!");
        window.location.href = 'website.html';
    } else {
        alert("Incorrect username or password.");
    }
})