
let nameCard = document.getElementById('cardName');
let inputNameCard = document.getElementById('cardHolderName');
let inputNumberCard = document.getElementById('cardNumber');
let numberCard = document.getElementById('numberInCard');
let monthDateCard = document.getElementById('month');
let yearDateCard = document.getElementById('year');
let inputMonthDate = document.getElementById('monthDate');
let inputYearDate = document.getElementById('yearDate');
let cvcCard = document.getElementById('cvcCard');
let inputCvcCard = document.getElementById('cvc');
const confirmButton = document.getElementById('confirmButton');
const continueButton = document.getElementById('continueButton');

window.addEventListener('DOMContentLoaded', () => {
    formInput();
    emptyInput();

    String.prototype.isNumber = function() {
        return /^\d+$/.test(this);
    }

    confirmButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (inputNameCard.value != 0 && inputNumberCard.value != 0 && inputNumberCard.value.length < 16 && inputMonthDate.value != 0 && inputYearDate.value != 0 && inputCvcCard.value != 0) {
            
            if (inputNumberCard.value.isNumber()) {
                const formSection = document.getElementById('formSection');
                const completeSection = document.getElementById('completeSection');
                formSection.classList.add('hidden');
                completeSection.classList.remove('hidden');
            } else {
                const formatError = document.getElementById('formatError');
                formatError.classList.remove('hidden');
                inputNumberCard.classList.add('border-red');
            }
        } else {
            if (inputNameCard.value < 1) {
                const nameError = document.getElementById('nameError');

                nameError.classList.remove('hidden');
                inputNameCard.classList.add('border-red');
            }

            if (inputNumberCard.value < 1 || inputNumberCard.value.length < 16) {
                const numberError = document.getElementById('numberError');

                numberError.classList.remove('hidden');
                inputNumberCard.classList.add('border-red');
            }

            if (inputMonthDate.value < 1 || inputYearDate.value < 1) {
                const dateError = document.getElementById('dateError');

                dateError.classList.remove('hidden');
                if (inputMonthDate.value < 1) {
                    inputMonthDate.classList.add('border-red');
                }

                if (inputYearDate.value < 1 ) {
                    inputYearDate.classList.add('border-red');
                }
            }

            if (inputCvcCard.value < 1) {
                const cvcError = document.getElementById('cvcError');

                cvcError.classList.remove('hidden');
                inputCvcCard.classList.add('border-red');
            }
        }
    });

    continueButton.addEventListener('click', (e) => {
        e.preventDefault();

        emptyInput();
        cardDefault();
        completeSection.classList.add('hidden');
        formSection.classList.remove('hidden');
    });
});

function formInput() {
    inputNameCard.addEventListener('keyup', function() {
        const fixNameCard = inputNameCard.value;
        const nameError = document.getElementById('nameError');
        if (!fixNameCard < 1) {
            nameCard.textContent = fixNameCard;
            nameError.classList.add('hidden');
            inputNameCard.classList.remove('border-red');
        } else {
            nameCard.textContent = 'yourname';
        }
    });
    
    inputNumberCard.addEventListener('keyup', function() {
        const fixNumberCard = inputNumberCard.value;
        const numberError = document.getElementById('numberError');
        const formatError = document.getElementById('formatError');
        if (!fixNumberCard < 1) {
            let addSpace = fixNumberCard.match(/.{1,4}/g);
            numberCard.textContent = addSpace.join(' ');
            numberError.classList.add('hidden');
            inputNumberCard.classList.remove('border-red');
        } else {
            numberCard.textContent = '0000 0000 0000 0000';
        }

        if (fixNumberCard.isNumber()) {
            formatError.classList.add('hidden');
            inputNumberCard.classList.remove('border-red');
        }
    });
    
    inputMonthDate.addEventListener('keyup', function() {
        const fixMonthCard = inputMonthDate.value;
        const dateError = document.getElementById('dateError');
        if (!fixMonthCard < 1) {
            monthDateCard.textContent = fixMonthCard;
            if (!inputYearDate.value < 1) {
                dateError.classList.add('hidden');
            }
            inputMonthDate.classList.remove('border-red');
        } else {
            monthDateCard.textContent = '00';
        }
    });
    
    inputYearDate.addEventListener('keyup', function() {
        const fixYearCard = inputYearDate.value;
        const dateError = document.getElementById('dateError');
        if (!fixYearCard < 1) {
            yearDateCard.textContent = fixYearCard;
            if (!inputMonthDate.value < 1) {
                dateError.classList.add('hidden');
            }
            inputYearDate.classList.remove('border-red');
        } else {
            yearDateCard.textContent = '00';
        }
    });
    
    inputCvcCard.addEventListener('keyup', function() {
        const fixCvcCard = inputCvcCard.value;
        const cvcError = document.getElementById('cvcError');
        if (!fixCvcCard < 1) {
            cvcCard.textContent = fixCvcCard;
            cvcError.classList.add('hidden');
            inputCvcCard.classList.remove('border-red');
        } else {
            cvcCard.textContent = '000';
        }
    });
}

function emptyInput() {
    inputNameCard.value = null;
    inputNumberCard.value = null;
    inputMonthDate.value = null;
    inputYearDate.value = null;
    inputCvcCard.value = null;
}

function cardDefault() {
    nameCard.textContent = 'yourname';
    numberCard.textContent = '0000 0000 0000 0000';
    monthDateCard.textContent = '00';
    yearDateCard.textContent = '00';
    cvcCard.textContent = '000';
}