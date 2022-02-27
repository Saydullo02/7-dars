//HTML elements

var elForm = document.querySelector(".prices__form");
var elInput = document.querySelector(".prices__input");
var elSelect = document.querySelector(".prices__select");
var elResult = document.querySelector(".prices__result")

//DEfualt value
var USD_TO_UZS = 10900;
var RUB_TO_UZS = 128.26;
var EUR_TO_UZS = 12129;




elForm.addEventListener("submit", function (event) {
    event.preventDefault()
    
    var inputValue = elInput.value.trim();
    var typeValue = elSelect.value;
    var result

    if (typeValue === "USD") {
        result = inputValue * USD_TO_UZS;

    } else if (typeValue === "RUB") {
        result = inputValue * RUB_TO_UZS;
    } else{
        result = inputValue * EUR_TO_UZS;
        
    }

    elResult.textContent = `${result} so'm`

    console.log(elResult.textContent);
})
