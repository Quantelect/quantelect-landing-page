document.addEventListener('DOMContentLoaded', function() {  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {  
        anchor.addEventListener('click', function(e) {  
            e.preventDefault();  
            document.querySelector(this.getAttribute('href')).scrollIntoView({  
                behavior: 'smooth'  
            });  
        });  
    });  
  
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
            fetch('/.netlify/functions/send-email', {  
                method: 'POST',  
                headers: {  
                    'Content-Type': 'application/json',  
                },  
                body: JSON.stringify({ name, email, message }),  
            })  
            .then(response => response.json())  
            .then(data => {  
                if (data.status === 'success') {  
                    alert('Thank you for your message. We will get back to you shortly.');  
                    document.getElementById('contact-form').reset();  
                } else {  
                    alert('There was an error sending your message. Please try again later.');  
                }  
            })  
            .catch(error => {  
                alert('There was an error sending your message. Please try again later.');  
            });  
        }  
    });  
  
    function validateEmail(email) {  
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
        return re.test(String(email).toLowerCase());  
    }  
});  
