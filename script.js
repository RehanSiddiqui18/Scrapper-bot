// Smooth Scroll for Navigation Links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 60, // Adjust for fixed header height
      behavior: 'smooth'
    });
  });
});

// Dark/Light Mode Toggle
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  if (currentTheme === 'light') {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    themeToggleButton.textContent = '☀️';  // Change button to sun icon for light mode
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    themeToggleButton.textContent = '🌙';  // Change button to moon icon for dark mode
  }
});

// Contact Form Validation (Optional)
document.querySelector("form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("All fields are required!");
    e.preventDefault();
  }
});