function details1(){
    document.getElementById("details1").removeAttribute("hidden");
    document.getElementById("details1").innerHTML =
        "<h2>Price for each room</h2>"+
        "<p>Stander 100$ for each night</p>"+
        "<p>delux 200$ for each night</p>"+
        "<p>suite 300$ for each night</p>"
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
function all() {

    let x =  window.prompt("budget :");

    if (x == null || x === "") {
        window.alert("Please enter a valid number!");


    }

    else if (x >= 100 && x < 200) {
        window.alert("standard is suitable for you!");
    }
    else if (x >= 200 && x < 300) {
        window.alert("Delux is suitable for you!");
    }
    else if (x >= 300) {
        window.alert("Suite is suitable for you!");
    }
    else {
        window.alert("Budget too low for our rooms!");
    }
}