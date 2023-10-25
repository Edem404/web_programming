let priceElements = document.querySelectorAll("#priceId");


let calculateButton = document.getElementById("countButton");
var cards = document.querySelectorAll(".card");

calculateButton.addEventListener("click", function () {
    let totalPrice = 0;
    let i = 0;
    priceElements.forEach(function (element) {
        var price = parseInt(element.textContent.replace("$", ""))
        if (!isNaN(price) && window.getComputedStyle(cards[i]).getPropertyValue("display") !== 'none') {
            totalPrice += price;
        }
        i++;
    });

    let stringTotalPrice = totalPrice + "$";

    let totalPriceToHtml = document.getElementById("totalPrice");
    totalPriceToHtml.textContent = stringTotalPrice;
});
// НЕ ВИТЯГУВАТИ ДАНІ З ФРОНТЕНДУ
var searchingField = document.getElementById("searchingField");
var searchButton = document.getElementById("searchButton");
var clearButton = document.getElementById("clearButton");


searchButton.addEventListener("click", function () {
    let searchTerm = searchingField.value.toLowerCase();
    console.log(searchTerm);
    cards.forEach(function (card) {
        let name = card.querySelector("#name").textContent.toLowerCase();
        let price = card.querySelector("#priceId").textContent.toLowerCase();
        if (name == searchTerm || price == searchTerm) {
            console.log(name);
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
});

clearButton.addEventListener("click", function () {
    cards.forEach(function (card) {
        card.style.display = "block";
    });

    searchInput.value = "";
});

let sortButton = document.getElementById("sortButton");

sortButton.addEventListener("click", function () {
    let priceArray = [];
    cards.forEach(function (card) {
        priceArray.push(parseInt(card.querySelector("#priceId").textContent));

    });
    console.log(priceArray)

    priceArray.sort((a, b) => b - a);
    console.log(priceArray);

    let container = document.querySelector(".content_ul");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }


    let arrayCards = Array.from(cards)
    priceArray.forEach(function (price) {
        let card = arrayCards.find(function (card) {
            return parseInt(card.querySelector("#priceId").textContent) == price;
        });
        if (card) {
            container.appendChild(card);
        }
    });
});
