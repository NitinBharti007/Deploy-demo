var typed = new Typed(".typing", {
    strings: ["","Web Developer", "web Designer", "Graphic Designer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop:true
})

function sendEmail(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    const data = { name, email, subject, message };
  
    fetch('https://nitinbharti.netlify.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // You can do something with the response if needed
        // Optionally, show a success message to the user
        alert('Message sent successfully!');
        // Clear the form after successful submission
        document.getElementById('contactForm').reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        // Optionally, show an error message to the user
        alert('Failed to send message. Please try again later.');
      });
  }