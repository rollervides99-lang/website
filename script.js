const contactButton = document.getElementById('contactButton');
const message = document.getElementById('message');

if (contactButton) {
  contactButton.addEventListener('click', () => {
    message.textContent = 'Thanks for checking out this demo page! Customize the content and styles to make it your own.';
  });
}
