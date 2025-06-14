function totalPrice() {
    let fullName=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phoneNum=document.getElementById("mobile").value;
    let start = new Date(document.getElementById("startDate").value);
    let end = new Date(document.getElementById("endDate").value);
    let numOfNights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));//86,400,000 milliseconds/day ceil
    let curruntTime=new Date();
    console.log(numOfNights) ;
    let total=0
    if(document.getElementById("name").value!=""&&document.getElementById("email").value!=""&&
        document.getElementById("mobile").value!=""&&numOfNights>=1){
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
            if (total>0){
                document.getElementById("summary").removeAttribute("hidden");
                document.getElementById("summary").innerHTML =
                "<h3 >Reservation receipt</h3>" +
                "<p><b>Name: </b>" + fullName + "</p>" +
                "<p><b>Email: </b>" + email + "</p>" +
                "<p><b>Number of Nights: </b>" + numOfNights + "</p>" +
                "<p><b>Receipt Date: </b>" + curruntTime.getDate()+"/"+(curruntTime.getMonth()+1)+"/"+curruntTime.getFullYear() + "</p>" +
                "<p><b>phone: </b>" + phoneNum + "</p>" +
                "<p><b>Total Price: </b>" + (total*numOfNights) + "$</p>";

            }
        }
    }
function click12(){
    let fullName=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phoneNum=document.getElementById("mobile").value;
    let start = new Date(document.getElementById("startDate").value);
    let end = new Date(document.getElementById("endDate").value);
    let numOfNights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if(document.getElementById("name").value!=""&&document.getElementById("email").value!=""&&
        document.getElementById("mobile").value!=""&&numOfNights>0){
    window.alert("Submitted Reservation")
    }
    else
        window.alert("fill your info")
}
