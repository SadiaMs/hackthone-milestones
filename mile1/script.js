const togglerButton = document.getElementById('toggle-skills'); // Corrected id
const skills = document.getElementById('skills');
togglerButton.addEventListener('click', () => {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    } else {
        skills.style.display = 'none';
    }
});
