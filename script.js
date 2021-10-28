// Selectors
// checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes); //verifying it's selecting the checkboxes

// Variables
let lastChecked;

// Event Listener
// Loop over the checkboxes
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));


// Functions
function handleCheck(e) {
    // console.log(e);
    let inBetween = false;
    //Check if the shift key is pressed down and that they are checking the boxes (not un-checking)
    if (e.shiftKey && this.checked) {
        // Loop over checkboxes to see the first and last box that is 'checked'
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
        })
        if (inBetween) {
            checkbox.checked = true;
        }
    }

    lastChecked = this;
}