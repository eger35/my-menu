function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function addFood(sectionId) {
    const input = document.getElementById(`new-${sectionId}`);
    const foodName = input.value.trim();
    if (foodName === '') return;

    const ul = document.getElementById(`${sectionId}-list`);
    const li = document.createElement('li');
    li.textContent = foodName;
    li.onclick = () => showRecipe(foodName);
    ul.appendChild(li);

    input.value = '';
}

function showRecipe(foodName) {
    alert(`Recipe for ${foodName}`);
}

// Initially show the carbs section
showSection('carbs');
