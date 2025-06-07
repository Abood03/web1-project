function totalPrice() {
    let fullName=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phoneNum=document.getElementById("mobile").value;
    let start = new Date(document.getElementById("startDate").value);
    let end = new Date(document.getElementById("endDate").value);
    let date = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    let curruntTime=new Date();
    console.log(date) ;
    let total=0
    if(document.getElementById("name").value!=""&&document.getElementById("email").value!=""&&
        document.getElementById("mobile").value!=""){
        if (document.getElementById("Stander").checked){
            if (document.getElementById("serves").checked){
                total = total + parseInt(document.getElementById("serves").value);
            }
            if (document.getElementById("serves2").checked){
                total = total + parseInt(document.getElementById("serves2").value);
            }
            if (document.getElementById("serves3").checked){
                total = total + parseInt(document.getElementById("serves3").value);
            }
            total=total+parseInt(document.getElementById("Stander").value);
        }
        if (document.getElementById("delux").checked){
            if (document.getElementById("serves").checked){
                total = total + parseInt(document.getElementById("serves").value);
            }
            if (document.getElementById("serves2").checked){
                total = total + parseInt(document.getElementById("serves2").value);
            }
            if (document.getElementById("serves3").checked){
                total = total + parseInt(document.getElementById("serves3").value);
            }
            total=total+parseInt(document.getElementById("delux").value);
        }
        if (document.getElementById("suite").checked){
            if (document.getElementById("serves").checked){
                total = total + parseInt(document.getElementById("serves").value);
            }
            if (document.getElementById("serves2").checked){
                total = total + parseInt(document.getElementById("serves2").value);
            }
            if (document.getElementById("serves3").checked){
                total = total + parseInt(document.getElementById("serves3").value);
            }
            total=total+parseInt(document.getElementById("suite").value);
        }
        document.getElementById("summary").removeAttribute("hidden");
        document.getElementById("summary").removeAttribute("hidden");
        // or document.getElementById("summary").hidden=false;
        document.getElementById("summary").innerHTML =
            "<h3>Reservation receipt</h3>" +
            "<p><b>Name: </b>" + fullName + "</p>" +
            "<p><b>Email: </b>" + email + "</p>" +
            "<p><b>Number of Nights: </b>" + date + "</p>" +
            "<p><b>Receipt Date: </b>" + curruntTime.getDate()+"/"+(curruntTime.getMonth()+1)+"/"+curruntTime.getFullYear() + "</p>" +
            "<p><b>phone: </b>" + phoneNum + "</p>" +
            "<p><b>Total Price: </b>" + (total*date) + "$</p>";

        }
    }
function click12(){
    let fullName=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phoneNum=document.getElementById("mobile").value;

    if(document.getElementById("name").value!=""&&document.getElementById("email").value!=""&&
        document.getElementById("mobile").value!=""){
    totalPrice();
    window.alert("Submitted Reservation")


    }
    else
        window.alert("fill your info")
}
