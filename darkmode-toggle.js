function toggleDarkMode() {
    var body = document.body;

    // Toggle the dark mode class on the body
    body.classList.toggle('dark-mode');

    // Check if dark mode is enabled
    var isDarkMode = body.classList.contains('dark-mode');

    // Update the stylesheet link based on the mode
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.href = isDarkMode ? 'CSS/darkmode.css' : 'CSS/style.css';

    // Save the user's preference in localStorage
    localStorage.setItem('darkMode', isDarkMode);
}