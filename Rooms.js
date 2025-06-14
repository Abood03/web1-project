   let budget =  window.prompt("Enter your budget per night :");
    if (budget == null || budget === "") {
        window.alert("Sorry you did not enter a number!");
    }
    else if (budget >= 100 && budget < 200) {
        window.alert("standard is suitable for you!");
    }
    else if (budget>= 200 && budget < 300) {
        window.alert("Delux is suitable for you!");
    }
    else if (budget >= 300) {
        window.alert("Suite is suitable for you!");
    }
    else if (budget <100&&budget>0) {
        window.alert("Budget too low for our rooms!");

    }
    else{
        window.alert("Invalid!");
    }
function details1() {
    document.getElementById("details1").removeAttribute("hidden");
    document.getElementById("details1").innerHTML =
        "<p>Price per night : 100$</p>" +
        "<p>In-Room Amenities:</p>" +
        "<p>55 smart flat-screen HDTV</p>" +
        "<p>Blackout curtains</p>" +
        "<p>Coffee maker</p>" +
        "<p>Minifridge</p>" +
        "<p>Iron and ironing board</p>" +
        "<p>In-room safe</p>"+
        "<p>Double click to hide!</p>"

}

function details2(){
    document.getElementById("details2").removeAttribute("hidden");
    document.getElementById("details2").innerHTML =
        "<p>Price per night : 200$</p>" +
        "<p>In-Room Amenities:</p>" +
        "<p>55 smart flat-screen HDTV</p>" +
        "<p>Blackout curtains</p>" +
        "<p>Coffee maker</p>" +
        "<p>Minifridge</p>" +
        "<p>Iron and ironing board</p>" +
        "<p>In-room safe</p>"+
        "<p>Daily newspaper on request</p>"+
        "<p>Hair dryer</p>"+
        "<p>Robes and slippers</p>"+
        "<p>Double click to hide!</p>"

}
function details3(){
    document.getElementById("details3").removeAttribute("hidden");
    document.getElementById("details3").innerHTML =
        "<p>Price per night : 200$</p>" +
        "<p>In-Room Amenities:</p>" +
        "<p>55 smart flat-screen HDTV</p>" +
        "<p>Blackout curtains</p>" +
        "<p>Coffee maker</p>" +
        "<p>Minifridge</p>" +
        "<p>Iron and ironing board</p>" +
        "<p>In-room safe</p>"+
        "<p>Daily newspaper on request</p>"+
        "<p>Hair dryer</p>"+
        "<p>Robes and slippers</p>"+
        "<p>marina view terrace</p>"+
        "<p>separate living/dining room</p>"+
        "<p>kitchenette</p>"+
        "<p>rain shower and deep soaking tub</p>"+
        "<p>Double click to hide!</p>"

}
function details4(){
    document.getElementById("details4").removeAttribute("hidden");
    document.getElementById("details4").innerHTML =
        "<p>Auditional Fee Per day : 50$</p>" +
        "<p>Spa Hours: 9:00 am till 9:00 pm\n</p>" +
        "<p>Pool Opening time: 11:00 am till sunset</p>" +
        "<p>Last Reservation: 6:30 pm for 8:00 pm treatment</p>" +
        "<p>Aqua Spa & Hyfit Gym Policy: Guests below the age of 18 are not permitted to enter and use the facility.</p>" +
        "<p>Ultimate Serenity and Tranquility</p>" +
        "<p>Reawaken Your Senses</p>" +
        "<p>Rejuvenate Your Wellbeing</p>"+
        "<p>Double click to hide!</p>"

}
function details5(){
    document.getElementById("details5").removeAttribute("hidden");
    document.getElementById("details5").innerHTML =
        "<p>Resturants :</p>" +
        "<p>The Olive Tree</p>" +
        "<p>Tapas del Mar</p>" +
        "<p>Cascades</p>" +
        "<p>La Plage Beach Club</p>" +
        "<p>Vista Lounge & Bar</p>" +
        "<p>RED Restaurant and Lounge</p>"+
        "<p>And there is Room Service</p>"+
        "<p>Double click to hide!</p>"

}
function details6(){
    document.getElementById("details6").removeAttribute("hidden");
    document.getElementById("details6").innerHTML =
        "<p>Gym available 24 hours a day </p>" +
        "<p>Dive Into Ocean Life Conservation</p>" +
        "<p>wallhall Golf</p>" +
        "<p>Tennis Court</p>" +
        "<p>And a lot more activities!</p>" +
        "<p>Double click to hide!</p>"

}
