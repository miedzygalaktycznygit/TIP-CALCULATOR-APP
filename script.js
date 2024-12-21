document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[class^="button"]');
    const tipAmount = document.getElementById('tip-amount-value');
    const resetButton = document.getElementById('reset');
    const ifInput = document.getElementById('bill-amount');
    const ifInput2 = document.getElementById('people-amount');
    const totalAmount = document.getElementById('total-amount-value');
    const customTip = document.getElementById('custom-tip');
    let selectedTip = null;

    buttons.forEach(function (button) {
        button.dataset.clicked = 'false';

        button.addEventListener('click', function () {
            const isClicked = button.dataset.clicked === 'true';
            buttons.forEach(btn => {
                btn.style.backgroundColor = 'hsl(183, 100%, 15%)';
                btn.style.color = 'hsl(0, 0%, 100%)';
                btn.dataset.clicked = 'false';
            });

            if (isClicked === false) {
                button.style.backgroundColor = 'hsl(172, 67%, 45%)';
                button.style.color = 'hsl(183, 100%, 15%)';
                button.dataset.clicked = 'true';
                customTip.value = '';

                selectedTip = parseFloat(button.textContent);
            } else {
                button.style.backgroundColor = 'hsl(183, 100%, 15%)';
                button.style.color = 'hsl(0, 0%, 100%)';
                button.dataset.clicked = 'false';
                selectedTip = null;
            }

            updateButtonColor();
        });
    });

    function updateButtonColor() {
        const bill = parseFloat(ifInput.value) || 0;
        const people = parseFloat(ifInput2.value) || 1;
        const customTipValue = parseFloat(customTip.value) || 0;
        if (bill > 0 || people > 1 || customTipValue > 0) {
            resetButton.style.backgroundColor = "hsl(172, 67%, 45%)";

            const perPerson = bill / people;
            totalAmount.textContent = "$" + perPerson.toFixed(2);
            if (customTipValue > 0) {
                const tipPerPerson = (bill * customTipValue / 100) / people;
                tipAmount.textContent = "$" + tipPerPerson.toFixed(2);
            } else if (selectedTip !== null) {
                const tipPerPerson = (bill * selectedTip / 100) / people;
                tipAmount.textContent = "$" + tipPerPerson.toFixed(2);
            } else {
                tipAmount.textContent = "$0.00";
            }
        } else {
            resetButton.style.backgroundColor = "hsl(186, 14%, 43%)";
            totalAmount.textContent = "$0.00";
            tipAmount.textContent = "$0.00";
        }
    }

    ifInput.addEventListener('input', () => updateButtonColor());
    ifInput2.addEventListener('input', () => updateButtonColor());
    customTip.addEventListener('input', () => updateButtonColor());

    resetButton.addEventListener("click", function () {
        ifInput.value = '';
        ifInput2.value = '';
        customTip.value = '';
        selectedTip = null;
        buttons.forEach(button => {
            button.style.backgroundColor = 'hsl(183, 100%, 15%)';
            button.style.color = 'hsl(0, 0%, 100%)';
            button.dataset.clicked = 'false';
        });
        updateButtonColor();
    });
});
