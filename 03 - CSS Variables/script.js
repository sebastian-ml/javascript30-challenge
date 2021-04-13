const inputs = document.querySelectorAll('.controls input');

function updateCssVariables() {
    const dataSizing = this.dataset.sizing || '';
    const cssVariable = this.name;
    const value = this.value;

    document.documentElement.style.setProperty(
        `--${cssVariable}`,
        value + dataSizing
    )
}

inputs.forEach(input => input.addEventListener('change', updateCssVariables));
inputs.forEach(input => input.addEventListener('mousemove', updateCssVariables));
