(function load() {
    // remove the items in the booking list
    var remove = document.getElementsByClassName('btn-remove');

    // loop through all the buttons inside the booking list
    for (var i = 0; i < remove.length; i++) {
        // remove the item if the btn-remove is clicked
        var btn = remove[i];
        btn.addEventListener('click', removeBookingItem);
    }

    // get the value of pax
    var pax = document.getElementsByClassName('booking-pax-input');

    for (var i = 0; i < pax.length; i++) {
        var input = pax[i];
        input.addEventListener('change', paxUpdated);
    }

    // adding the element to the list
    var addToBtn = document.getElementsByClassName('booking-item-btn')

    for (var i = 0; i < addToBtn.length; i++) {
        var btn = addToBtn[i];
        btn.addEventListener('click', addTo);
    }

    document.getElementsByClassName('btn-booking')[0].addEventListener('click', bookingNow);
})();

// remove the booking item in the list
function removeBookingItem(event) {
    // whatever button we click on
    var btn = event.target;
    
    // completely remove the item from the list
    btn.parentElement.parentElement.remove();
    updateBookingTotal();
}

// updating the value of pax
function paxUpdated(event) {
    var i = event.target;

    // check if the value is valid
    // check if the input is a number or not and check whether it is negative
    if (isNaN(i.value) || i.value <= 0) {
        // set input value as the minimum value
        i.value = 1;
    }

    updateBookingTotal();
}

// update the list total
function updateBookingTotal() {
    // get the every first element of the array
    var bookingItemContainer = document.getElementsByClassName('booking-items')[0];
    // get all the rows that are inside the container 
    var bookingRows = bookingItemContainer.getElementsByClassName('booking-row');
    var total = 0;

    // loop each row
    for (var i = 0; i < bookingRows.length; i++) {
        var bookingRow = bookingRows[i];
        var cost = bookingRow.getElementsByClassName('booking-price')[0];
        var pax = bookingRow.getElementsByClassName('booking-pax-input')[0];
        // return only the number without the $ sign
        var price = parseFloat(cost.innerText.replace('$', ''));
        var quantity = pax.value;

        total += (price * quantity);
    }

    // round to 2 decimal places
    total = Math.round(total * 100) / 100;

    // display the total
    document.getElementsByClassName('booking-total-price')[0].innerText = '$' + total;
}

// adding all elements 
function addTo(event) {
    var btn = event.target;
    var bookingItem = btn.parentElement.parentElement;
    var title = bookingItem.getElementsByClassName('booking-item-title')[0].innerText;
    var price = bookingItem.getElementsByClassName('booking-item-price')[0].innerText;
    var imageSrc = bookingItem.getElementsByClassName('booking-item-image')[0].src;

    addItemToList(title, price, imageSrc);
    updateBookingTotal();
}

function addItemToList(title, price, imageSrc) {
    // create rows
    var bookingRow = document.createElement('div');
    bookingRow.classList.add('booking-row');

    var bookingItem = document.getElementsByClassName('booking-items')[0];
    var bookingItems = bookingItem.getElementsByClassName('booking-item-title');

    // telling the user that the item is already in the list
    for (var i = 0; i < bookingItems.length; i++) {
        if (bookingItems[i].innerText == title) {
            alert('This package has already been added to the list.');
            return;
        }
    }

    // styling of the row when creating a new one
    var newBookingRow = `
        <div class="booking-item booking-column">
            <img class="booking-item-image" src="${imageSrc}" width="100" height="100">
            <span class="booking-item-title">${title}</span>
        </div>
        <span class="booking-price booking-column">${price}</span>
        <div class="booking-pax booking-column">
            <input class="booking-pax-input" type="number" value="1">
            <button class="btn btn-remove" type="button">REMOVE</button>
        </div>`;

    bookingRow.innerHTML = newBookingRow;
    bookingItem.append(bookingRow);
    bookingRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeBookingItem);
    bookingRow.getElementsByClassName('booking-pax-input')[0].addEventListener('change', paxUpdated);
}

// remove all 
function bookingNow() {
    alert('Thank you for booking with us!');
    var bookingItems = document.getElementsByClassName('booking-items')[0];

    // loop all the children in the list
    while (bookingItems.hasChildNodes()) {
        bookingItems.removeChild(bookingItems.firstChild);
    }

    updateBookingTotal();
}




