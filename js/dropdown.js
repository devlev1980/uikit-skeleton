const input = document.querySelector('.yl_dropdown input');
const dropdown = document.querySelector('.yl_dropdown-wrapper');

// Functions
 const showDropDown = () => {
    dropdown.classList.add('show');
 }
const hideDropDown = (e) => {
    console.log(e)
    // dropdown.classList.remove('show');
}

// Event Listeners
input.addEventListener('click',showDropDown);
document.addEventListener('click',hideDropDown)
