let priceElements = document.querySelectorAll("[id^='priceId']");

let calculateButton = document.getElementById("countButton");
var cards = document.querySelectorAll(".card");

calculateButton.addEventListener("click", calculateTotalPrice);
get_all_desks();
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

document.getElementById("closeEditModal").addEventListener("click", function () {
    editMenu.style.display = "none";
});



function getMaxId() {
    return fetch("http://localhost:3000/maxid")
        .then((response) => response.json())
        .then((data) => data.maxId || 0)
        .catch((error) => {
            console.error("Помилка при отриманні максимального id: " + error);
            return 0; // Повернути 0 у випадку помилки
        });
}

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
            const data = {
                name: itemName,
                price: parseInt(itemPrice),
            };

            fetch("http://localhost:3000/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((result) => {
                    alert(result.message);
                })
                .catch((error) => {
                    console.error("Помилка при відправці POST-запиту: " + error);
                });

            var ul = document.querySelector(".content_ul");

            // Отримуємо найбільший id з бази даних
            getMaxId()
                .then((maxId) => {
                    let newCardIndex = maxId + 1;
                    console.log("Найбільший id в базі даних:", maxId);

                    var li = document.createElement("li");
                    li.className = "card";
                    li.innerHTML = "<p id='name'>" + itemName + "</p><p id='priceId" + newCardIndex + "'>"
                        + itemPrice + "$</p><button class='edit_button' id='editButton" + newCardIndex
                        + "'>edit</button><button class='delete_button' id='deleteButton" + newCardIndex + "'>delete</button>";
                    ul.appendChild(li);

                    cards = document.querySelectorAll(".card");
                    priceElements = document.querySelectorAll("[id^='priceId']");

                    var editButton = li.querySelector(".edit_button");
                    editButton.addEventListener("click", function () {
                        editMenu.style.display = "block";
                        editMenu.dataset.targetId = li.querySelector("[id^='priceId']").id;
                        var currentName = li.querySelector("#name").textContent;
                        var currentPrice = li.querySelector("[id^='priceId']").textContent;

                        var editItemNameInput = document.getElementById("editItemName");
                        var editItemPriceInput = document.getElementById("editItemPrice");

                        editItemNameInput.value = currentName;
                        editItemPriceInput.value = currentPrice.replace("$", "");
                    });

                    var deleteButton = li.querySelector(".delete_button");
                    deleteButton.addEventListener("click", function () {
                        var parentLi = this.parentElement;

                        // Отримуємо ідентифікатор об'єкта для видалення з атрибуту `data-target-id`
                        var id = parentLi.querySelector("[id^='priceId']").id.replace("priceId", "");
                        console.log(id);
                        var deleteId = parseInt(id);
                        // Видаляємо батьківський елемент (li), який містить об'єкт
                        if (parentLi) {
                            fetch(`http://localhost:3000/delete/${deleteId}`, {
                                method: 'DELETE'
                            })
                                .then(response => response.json())
                                .then(result => {
                                    parentLi.remove();
                                })
                        }

                        cards = document.querySelectorAll(".card");
                        priceElements = document.querySelectorAll("[id^='priceId']");
                    });
                });
        }

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
        console.log(targetId);
        console.log(targetPriceElement);
        var numericPart = targetId.replace("priceId", "");
        console.log("parse ", parseInt(numericPart));
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

            const updateData = {
                id: parseInt(numericPart),
                newName: editItemName,
                newPrice: editItemPrice
            };

            fetch('http://localhost:3000/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateData)
            })
                .then(response => response.json())
                .then(result => {
                    alert('Обєкт оновлена в базі даних.');
                })
                .catch(error => {
                    console.error('Помилка оновлення:', error);
                });

            calculateTotalPrice();
            editMenu.style.display = "none";
        }
    }
});

function get_all_desks() {
    fetch("http://localhost:3000/read")
        .then((response) => response.json())
        .then((data) => {

            data.data.forEach(element => {
                var ul = document.querySelector(".content_ul");
                let newCardIndex = element.id;
                var li = document.createElement("li");
                li.className = "card";
                li.innerHTML = "<p id='name'>" + element.name + "</p><p id='priceId" + newCardIndex + "'>"
                    + parseInt(element.price) + "$</p><button class='edit_button' id='editButton"
                    + newCardIndex + "'>edit</button><button class='delete_button' id='deleteButton" + newCardIndex + "'>delete</button>";
                ul.appendChild(li);

                cards = document.querySelectorAll(".card");
                priceElements = document.querySelectorAll("[id^='priceId']");

                var editButton = li.querySelector(".edit_button");
                editButton.addEventListener("click", function () {
                    editMenu.style.display = "block";
                    editMenu.dataset.targetId = li.querySelector("[id^='priceId']").id;
                    var currentName = li.querySelector("#name").textContent;
                    var currentPrice = li.querySelector("[id^='priceId']").textContent;

                    var editItemNameInput = document.getElementById("editItemName");
                    var editItemPriceInput = document.getElementById("editItemPrice");

                    editItemNameInput.value = currentName;
                    editItemPriceInput.value = currentPrice.replace("$", "");
                });

                var deleteButton = li.querySelector(".delete_button");
                deleteButton.addEventListener("click", function () {
                    var parentLi = this.parentElement;

                    // Отримуємо ідентифікатор об'єкта для видалення з атрибуту `data-target-id`
                    var id = parentLi.querySelector("[id^='priceId']").id.replace("priceId", "");
                    console.log(id);
                    var deleteId = parseInt(id);
                    // Видаляємо батьківський елемент (li), який містить об'єкт
                    if (parentLi) {
                        fetch(`http://localhost:3000/delete/${deleteId}`, {
                            method: 'DELETE'
                        })
                            .then(response => response.json())
                            .then(result => {
                                // if (result.message === 'Deleted') {
                                parentLi.remove();
                                // } else {
                                //     alert('delete error');
                                // }
                            })
                        // .catch(error => {
                        //     console.error('delete error:', error);
                        // });
                    }
                    cards = document.querySelectorAll(".card");
                    priceElements = document.querySelectorAll("[id^='priceId']");
                });
            });
        })
        .catch((error) => {
            console.error("Помилка при отриманні даних: " + error);
        });
}