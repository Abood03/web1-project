const form = document.getElementById('bookForm');
const checkIn = document.getElementById('startDate');
const checkOut = document.getElementById('endDate');
const summary = document.getElementById('summary');
const submitButton = document.getElementById('submit');
const millisecondsPerDay = 86_400_000;
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

function updateQuote() {
    const nights = (checkOut.valueAsNumber - checkIn.valueAsNumber) / millisecondsPerDay;
    checkOut.setCustomValidity(nights <= 0 ? 'Choose a check-out date after check-in.' : '');

    if (!form.checkValidity()) {
        summary.hidden = true;
        return;
    }

    const room = form.querySelector('input[name="roomType"]:checked');
    const extras = form.querySelectorAll('input[name="extras"]:checked');
    const nightlyExtras = Array.from(extras).reduce((sum, extra) => sum + Number(extra.value), 0);

    document.getElementById('quote-name').textContent = document.getElementById('name').value;
    document.getElementById('quote-email').textContent = document.getElementById('email').value;
    document.getElementById('quote-mobile').textContent = document.getElementById('mobile').value;
    document.getElementById('quote-nights').textContent = nights;
    document.getElementById('quote-date').textContent = new Date().toLocaleDateString();
    document.getElementById('quote-total').textContent = currency.format((Number(room.value) + nightlyExtras) * nights);
    summary.hidden = false;
}

form.addEventListener('input', updateQuote);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    updateQuote();
    if (!summary.hidden) {
        summary.focus();
    }
});

submitButton.disabled = false;
