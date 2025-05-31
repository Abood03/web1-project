function contDay() {
    let start = new Date(document.getElementById("startDate").value);
    let end = new Date(document.getElementById("endDate").value);
    let date = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    console.log(date) ;
}

function totalPrice() {

}

