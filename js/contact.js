//REGEX JAVASCRIPT to test the validation of email and phone number //
const isEmail = (email) => {
    const result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return result.test(String(email).toLowerCase());
}
const isPhone = (phone) => {
    const result = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return result.test(String(phone).toLowerCase());
}

const form = document.querySelector('form');
const feedback = document.querySelector(".feedback");
const fullNameInput = document.querySelector('input[name = "name"]');
const emailInput = document.querySelector('input[name = "email"]');
const phoneNumberInput = document.querySelector('input[name = "phone"]');
const messageInput = document.querySelector('textarea[name = "message"]');

const inputs = [fullNameInput, emailInput, phoneNumberInput, messageInput]; //array to store inputs 

var isFormValid = false;
var isFormValidationOn = false; //to not display the border red before the form is submitted 


/*Helper function*/
const resetElement = (para) => {
    para.classList.remove("invalid");
    para.nextElementSibling.classList.add("hidden");
}

const invalidInput = (para) => {
    para.classList.add("invalid");
    para.nextElementSibling.classList.remove("hidden");
};

/*Validate form functions */
const validateInputs = () => {
    if (!isFormValidationOn) return;

    isFormValid = true;
    inputs.forEach(resetElement);

    if (!fullNameInput.value) {
        isFormValid = false;
        invalidInput(fullNameInput);
    }
    if (!isEmail(emailInput.value)) {
        isFormValid = false;
        invalidInput(emailInput);
    }
    if (!isPhone(phoneNumberInput.value)) {
        isFormValid = false;
        invalidInput(phoneNumberInput);
    }
    if (!messageInput.value) {
        isFormValid = false;
        invalidInput(messageInput);
    }
};

/*event listener for when submit button is click*/
form.addEventListener('submit', (e) => {
    e.preventDefault(); //so the page does not refresh 
    isFormValidationOn = true;
    validateInputs();
    if (isFormValid) {
        form.remove();
        feedback.classList.remove("hidden");
    }
});


inputs.forEach((inputEnter) => {
    inputEnter.addEventListener("input", () => {
        validateInputs();
    })
});

