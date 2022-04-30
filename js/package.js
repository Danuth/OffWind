function load() {
    var remove = document.getElementsByClassName('btn-remove');

    for (var i = 0; i < remove.length; i++) {
        var btn = remove[i];
        btn.addEventListener('click', removeBookingItem);
    }

    var pax = document.getElementsByClassName('booking-pax-input');

    for (var i = 0; i < pax.length; i++) {
        var input = pax[i];
        input.addEventListener('change', paxUpdated);
    }

    var addToBtn = document.getElementsByClassName('booking-item-btn')

    for (var i = 0; i < addToBtn.length; i++) {
        var btn = addToBtn[i];
        btn.addEventListener('click', addTo);
    }

    document.getElementsByClassName('btn-booking')[0].addEventListener('click', bookingNow);
}

load();

function updateBookingTotal() {
    var bookingItemContainer = document.getElementsByClassName('booking-items')[0];
    var bookingRows = bookingItemContainer.getElementsByClassName('booking-row');
    var total = 0;

    for (var i = 0; i < bookingRows.length; i++) {
        var bookingRow = bookingRows[i];
        var cost = bookingRow.getElementsByClassName('booking-price')[0];
        var pax = bookingRow.getElementsByClassName('booking-pax-input')[0];
        var price = parseFloat(cost.innerText.replace('$', ''));
        var quantity = pax.value;

        total += (price * quantity);
    }

    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('booking-total-price')[0].innerText = '$' + total;
}

function addItemToList(title, price, imageSrc) {
    var bookingRow = document.createElement('div');
    bookingRow.classList.add('booking-row');

    var bookingItem = document.getElementsByClassName('booking-items')[0];
    var bookingItems = bookingItem.getElementsByClassName('booking-item-title');

    for (var i = 0; i < bookingItems.length; i++) {
        if (bookingItems[i].innerText == title) {
            alert('This package has already been added to the list.');
            return;
        }
    }

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

function bookingNow() {
    alert('Thank you for booking with us!');
    var bookingItems = document.getElementsByClassName('booking-items')[0];

    while (bookingItems.hasChildNodes()) {
        bookingItems.removeChild(bookingItems.firstChild);
    }

    updateBookingTotal();
}

function removeBookingItem(event) {
    var btn = event.target;

    btn.parentElement.parentElement.remove();
    updateBookingTotal();
}

function paxUpdated(event) {
    var i = event.target;

    if (isNaN(i.value) || i.value <= 0) {
        i.value = 1;
    }

    updateBookingTotal();
}

function addTo(event) {
    var btn = event.target;
    var bookingItem = btn.parentElement.parentElement;
    var title = bookingItem.getElementsByClassName('booking-item-title')[0].innerText;
    var price = bookingItem.getElementsByClassName('booking-item-price')[0].innerText;
    var imageSrc = bookingItem.getElementsByClassName('booking-item-image')[0].src;

    addItemToList(title, price, imageSrc);
    updateBookingTotal();
}



