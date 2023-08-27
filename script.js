const dropdowns = document.querySelectorAll('.dropdown');

//loop through the dropdowns
dropdowns.forEach(dropdown => {
    const dropdowns = dropdown.querySelector('.dropdown');
    const links = dropdown.querySelector('.dropdownli');
    const upper = dropdown.querySelector('.dropupli');

    dropdowns.addEventListener('click', () => {

        dropdowns.classList.toggle('dropdown-clicked');
    });
})