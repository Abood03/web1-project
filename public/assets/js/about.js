const stars = document.querySelectorAll('input[name="rating"]');
const result = document.getElementById('star-result');
const submitButton = document.getElementById('submit-rating');

stars.forEach(star => {
    star.addEventListener('change', function() {
        let rating = this.value;
        result.textContent = `Your rating: ${rating} star${rating !== '1' ? 's' : ''}`;
    });
});

submitButton.addEventListener('click', function() {
    const ratingValue = document.querySelector('input[name="rating"]:checked');
    if (ratingValue) {
        alert(`Thank you for your rating of ${ratingValue.value} star${ratingValue.value !== '1' ? 's' : ''}!`);
    } else {
        alert('Please select a rating before submitting.');
    }
});
