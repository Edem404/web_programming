let priceElements = document.querySelectorAll("[id^='priceId']");

let calculateButton = document.getElementById("countButton");
var cards = document.querySelectorAll(".card");

calculateButton.addEventListener("click", calculateTotalPrice);

function calculateTotalPrice() {
    let totalPrice = 0;
    priceElements.forEach(function (element) {
        var price = parseInt(element.textContent.replace("$", ""));
        if (!isNaN(price) && window.getComputedStyle(element.parentElement).getPropertyValue("display") !== 'none') {
            totalPrice += price;
        }
    });

    let stringTotalPrice = totalPrice + "$";

    let totalPriceToHtml = document.getElementById("totalPrice");
    totalPriceToHtml.textContent = stringTotalPrice;
}

var searchingField = document.getElementById("searchingField");
var searchButton = document.getElementById("searchButton");
var clearButton = document.getElementById("clearButton");

searchButton.addEventListener("click", searchCards);

function searchCards() {
    let searchTerm = searchingField.value.toLowerCase();
    cards.forEach(function (card) {
        let name = card.querySelector("#name").textContent.toLowerCase();
        let price = card.querySelector("[id^='priceId']").textContent.toLowerCase();
        if (name.includes(searchTerm) || price.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

clearButton.addEventListener("click", clearCards);

function clearCards() {
    cards.forEach(function (card) {
        card.style.display = "block";
    });

    searchingField.value = "";
}

let sortButton = document.getElementById("sortButton");

sortButton.addEventListener("click", sortCards);

function sortCards() {
    let priceArray = [];
    cards.forEach(function (card) {
        priceArray.push(parseInt(card.querySelector("[id^='priceId']").textContent));
    });

    priceArray.sort((a, b) => b - a);

    let container = document.querySelector(".content_ul");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let arrayCards = Array.from(cards);
    priceArray.forEach(function (price) {
        let card = arrayCards.find(function (card) {
            return parseInt(card.querySelector("[id^='priceId']").textContent) == price;
        });
        if (card) {
            container.appendChild(card);
        }
    });

    cards = document.querySelectorAll(".card");
}

let createMenu = document.getElementById("createMenu");

document.getElementById("newOrder").addEventListener("click", function () {
    createMenu.style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function () {
    createMenu.style.display = "none";
});

let editMenu = document.getElementById("editMenu");

document.getElementById("editButton").addEventListener("click", function () {
    editMenu.style.display = "block";

    var currentName = document.querySelector("#name").textContent;
    var currentPrice = document.querySelector("#priceId").textContent;

    // Отримайте інпути редагування за їх ID
    var editItemNameInput = document.getElementById("editItemName");
    var editItemPriceInput = document.getElementById("editItemPrice");

    // Заповніть значеннями інпути редагування з поточної карточки
    editItemNameInput.value = currentName;
    editItemPriceInput.value = currentPrice.replace("$", "");
});

document.getElementById("closeEditModal").addEventListener("click", function () {
    editMenu.style.display = "none";
});

document.getElementById("createButton").addEventListener("click", function () {
    var itemName = document.getElementById("itemName").value;
    var itemPrice = document.getElementById("itemPrice").value;

    console.log(/[^0-9]/.test(itemPrice));

    if (itemName && itemPrice) {
        let intPrice = parseInt(itemPrice);

        if (/[^0-9]/.test(itemPrice)) {
            alert("wrong price");
        }
        else if (intPrice < 0) {
            alert("negative price");
        }
        else {
            var ul = document.querySelector(".content_ul");
            let newCardIndex = cards.length + 1;
            var li = document.createElement("li");
            li.className = "card";
            li.innerHTML = "<p id='name'>" + itemName + "</p><p id='priceId" + newCardIndex + "'>" + itemPrice + "$</p><button class='edit_button' id='editButton" + newCardIndex + "'>edit</button>";
            ul.appendChild(li);

            cards = document.querySelectorAll(".card");
            priceElements = document.querySelectorAll("[id^='priceId']");

            var editButton = li.querySelector(".edit_button");
            editButton.addEventListener("click", function () {
                editMenu.style.display = "block";
                editMenu.dataset.targetId = li.querySelector("[id^='priceId']").id;
                var currentName = li.querySelector("#name").textContent;
                var currentPrice = li.querySelector("[id^='priceId']").textContent;

                // Отримайте інпути редагування за їх ID
                var editItemNameInput = document.getElementById("editItemName");
                var editItemPriceInput = document.getElementById("editItemPrice");

                // Заповніть значеннями інпути редагування з поточної карточки
                editItemNameInput.value = currentName;
                editItemPriceInput.value = currentPrice.replace("$", "");
            });
        }


        // createMenu.style.display = "none";

        calculateTotalPrice();
    }
});


document.getElementById("edit").addEventListener("click", function () {

    var editItemName = document.getElementById("editItemName").value;
    var editItemPrice = document.getElementById("editItemPrice").value;

    console.log(/[^0-9]/.test(itemPrice));

    if (editItemName && editItemPrice) {
        var targetId = editMenu.dataset.targetId;
        var targetPriceElement = document.getElementById(targetId);


        let intPrice = parseInt(editItemPrice);

        if (/[^0-9]/.test(editItemPrice)) {
            alert("wrong price");
            editMenu.style.display = "block";
        }
        else if (intPrice < 0) {
            alert("negative price");
        } else {
            console.log(intPrice);
            if (targetPriceElement == null) {
                let price = document.getElementById("priceId");
                let name = document.getElementById("name");
                price.textContent = editItemPrice;
                name.textContent = editItemName + "$";
            }
            else {
                targetPriceElement.textContent = editItemPrice + "$";
            }

            calculateTotalPrice();
            editMenu.style.display = "none";
        }


        
    }
});
