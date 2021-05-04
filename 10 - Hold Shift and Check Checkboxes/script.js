const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastCheckedCheckbox;

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleClick))

function handleClick(e) {
    console.log('s')
    let isBetweenCheckboxes = false;

    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastCheckedCheckbox) {
                isBetweenCheckboxes = !isBetweenCheckboxes;
            }

            if (isBetweenCheckboxes) checkbox.checked = true;
        })
    }
    lastCheckedCheckbox = this;
}