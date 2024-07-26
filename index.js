document.addEventListener('DOMContentLoaded', function() {  
    // Smooth scrolling for internal links  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {  
        anchor.addEventListener('click', function(e) {  
            e.preventDefault();  
            document.querySelector(this.getAttribute('href')).scrollIntoView({  
                behavior: 'smooth'  
            });  
        });  
    });  
  
    // Form validation and submission using AJAX  
    document.getElementById('contact-form').addEventListener('submit', function(e) {  
        e.preventDefault();  
        const name = document.getElementById('name').value.trim();  
        const email = document.getElementById('email').value.trim();  
        const message = document.getElementById('message').value.trim();  
  
        if (!name || !email || !message) {  
            alert('Please fill in all fields.');  
        } else if (!validateEmail(email)) {  
            alert('Please enter a valid email address.');  
        } else {  
            // AJAX submission  
            const xhr = new XMLHttpRequest();  
            xhr.open('POST', 'send-email.php', true);  
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');  
            xhr.onreadystatechange = function() {  
                if (xhr.readyState == 4 && xhr.status == 200) {  
                    const response = JSON.parse(xhr.responseText);  
                    if (response.status === 'success') {  
                        alert('Thank you for your message. We will get back to you shortly.');  
                        document.getElementById('contact-form').reset();  
                    } else {  
                        alert('There was an error sending your message. Please try again later.');  
                    }  
                }  
            };  
            xhr.send(`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`);  
        }  
    });  
  
    // Email validation function  
    function validateEmail(email) {  
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
        return re.test(String(email).toLowerCase());  
    }  
});  
