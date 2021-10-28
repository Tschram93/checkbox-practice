// Selectors
// checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes); //verifying it's selecting the checkboxes

// Event Listener
// Loop over the checkboxes
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));


// Functions
handleCheck(e) {
    console.log(e);
}