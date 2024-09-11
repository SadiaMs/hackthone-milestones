const togglerButton = document.getElementById('toggler-skills') as HTMLButtonElement;
const skills= document.getElementById('skills') as HTMLElement;
togglerButton.addEventListener('click',() => {
    if(skills.style.display === 'none') {
        skills.style.display = 'block';

        
    }
    else {
        skills.style.display = 'none';

    }
});
