const numbers_classification = document.querySelectorAll(".number-classification");
const btn_send_classification = document.querySelector("#btn-send-classification");
let numberSelected = 0;

function selectNumber(numberElement, number) {

    if (numberElement.classList.contains("selected")) {

        numberElement.classList.remove("selected");

    } else {

        numberElement.classList.add("selected");

        numbers_classification.forEach(element => {
            if (element.textContent == number) {
            }
            else {
                element.classList.remove("selected");
            }
        });

    }

}

function classification(number) {

    if (number === 1) {
        numbers_classification.forEach(element => {
            if (element.textContent == number) {
                selectNumber(element, number);
                numberSelected = parseInt(number);
            }
        })
    }
    if (number === 2) {
        numbers_classification.forEach(element => {
            if (element.textContent == number) {
                selectNumber(element, number);
                numberSelected = parseInt(number);
            }
        })

    }
    if (number === 3) {
        numbers_classification.forEach(element => {
            if (element.textContent == number) {
                selectNumber(element, number);
                numberSelected = parseInt(number);
            }
        })

    }
    if (number === 4) {
        numbers_classification.forEach(element => {
            if (element.textContent == number) {
                selectNumber(element, number);
                numberSelected = parseInt(number);
            }
        })

    }

    if (number === 5) {
        numbers_classification.forEach(element => {
            if (element.textContent == number) {
                selectNumber(element, number);
                numberSelected = parseInt(number);
            }
        })

    }
}

function send() {
    localStorage.setItem("numberClassification", numberSelected);
    location.href = "thanks.html"
}

btn_send_classification.onclick = send;



