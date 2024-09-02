document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const currentTheme = localStorage.getItem('theme');

    function setTheme(theme) {
        if (theme === 'dark') {
            themeStylesheet.setAttribute('href', 'dark.css');
        } else {
            themeStylesheet.setAttribute('href', 'light.css');
        }
        localStorage.setItem('theme', theme);
    }

    // Set theme on load
    if (currentTheme) {
        setTheme(currentTheme);
    } else {
        // Auto theme detection (e.g., system theme)
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDarkScheme ? 'dark' : 'light');
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
});
