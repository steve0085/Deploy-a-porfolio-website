const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Optional: Change button text
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Light Mode';
  } else {
    toggleButton.textContent = 'Dark Mode';
  }
});
