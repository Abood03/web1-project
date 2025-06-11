   let x =  window.prompt("Enter your budget per night :");

    if (x == null || x === "") {

        window.alert("Sorry you did not enter a number!");


    }
    else if (x >= 100 && x < 200) {
        window.alert("standard is suitable for you!");
    }
    else if (x>= 200 && x < 300) {
        window.alert("Delux is suitable for you!");
    }
    else if (x >= 300) {
        window.alert("Suite is suitable for you!");
    }
    else if (x >100) {
        window.alert("Budget too low for our rooms!");

}else{
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
        "<p>In-room safe</p>"


}

function details2(){
    document.getElementById("details2").removeAttribute("hidden");
    document.getElementById("details2").innerHTML =
        "<h2>Price for each room</h2>"+
        "<p>Stander 100$ for each night</p>"+
        "<p>delux 200$ for each night</p>"+
        "<p>suite 300$ for each night</p>"
}
function details3(){
    document.getElementById("details3").removeAttribute("hidden");
    document.getElementById("details3").innerHTML =
        "<h2>Price for each room</h2>"+
        "<p>Stander 100$ for each night</p>"+
        "<p>delux 200$ for each night</p>"+
        "<p>suite 300$ for each night</p>"
}
function details4(){
    document.getElementById("details4").removeAttribute("hidden");
    document.getElementById("details4").innerHTML =
        "<h2>Price for each room</h2>"+
        "<p>Stander 100$ for each night</p>"+
        "<p>delux 200$ for each night</p>"+
        "<p>suite 300$ for each night</p>"
}
function details5(){
    document.getElementById("details5").removeAttribute("hidden");
    document.getElementById("details5").innerHTML =
        "<h2>Price for each room</h2>"+
        "<p>Stander 100$ for each night</p>"+
        "<p>delux 200$ for each night</p>"+
        "<p>suite 300$ for each night</p>"
}
function details6(){
    document.getElementById("details6").removeAttribute("hidden");
    document.getElementById("details6").innerHTML =
        "<h2>Price for each room</h2>"+
        "<p>Stander 100$ for each night</p>"+
        "<p>delux 200$ for each night</p>"+
        "<p>suite 300$ for each night</p>"
}
