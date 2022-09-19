document.getElementById("login").onclick = function(){

    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;

    document.getElementById("spinner").style.display = "block";
    document.getElementById("login").style.display = "none";

    firebase.auth().signInWithEmailAndPassword(email, password).then((usercred)=>{

        window.location.href = "homepage.html";

    }).catch((error)=>{

        document.getElementById("reseterror").innerText = error.message;
        document.getElementById("reseterror").style.display = "block";
        document.getElementById("spinner").style.display = "none";
        document.getElementById("login").style.display = "block";
        
        setTimeout(function(){
            
            document.getElementById("reseterror").style.display = "none"; 
            
       }, 4500);
    })

    
}

