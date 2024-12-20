document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[class^="button"]');
    console.log(buttons);
    buttons.forEach(function(button){
        button.dataset.clicked = 'false'; 
        button.addEventListener('click', function(){
            console.log('button clicked');
            if (button.dataset.clicked === 'false') {
                button.style.backgroundColor = 'hsl(172, 67%, 45%)';
                button.style.color = 'hsl(183, 100%, 15%)';
                button.dataset.clicked = 'true';
            } else {
                button.style.backgroundColor = 'hsl(183, 100%, 15%)';
                button.style.color = 'hsl(0, 0%, 100%)';
                button.dataset.clicked = 'false';
            }
            console.log(button.dataset.clicked);
        });
    });

    const activationButton = document.getElementById('reset');
    const ifInput = document.getElementById('bill-amount'); 
    
    ifInput.addEventListener('input', function () {
        const inputValue = parseFloat(ifInput.value); 
        if (inputValue > 0) {
            activationButton.style.backgroundColor = "red";
        } else {
            activationButton.style.backgroundColor = "grey";
        }
    });

});
