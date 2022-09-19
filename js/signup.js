document.getElementById("signup").onclick = function(){
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    document.getElementById("spinner1").style.display = "block";
    document.getElementById("signup").style.display = "none";

    firebase.auth().createUserWithEmailAndPassword(email, password).then((usercred)=>{

        let fullname = document.getElementById("fullname").value;
        let username = document.getElementById("username").value;
        let userEmail = document.getElementById("email").value;
        let signuptime = new Date();
        
        let userid = usercred.user.uid;

        firebase.firestore().collection("credentials").doc(userid).set({

            theUsername:username,
            theEmail:userEmail,
            theFullname:fullname,
            theUserID:userid,
            signupTimestamp:signuptime

        }).then(()=>{

            window.location.href = "homepage.html";

        }).catch((error)=>{

            alert("Something went wrong.Please try again later.");
            
        })

    }).catch((error)=>{

        document.getElementById("alertwarning").innerText = error.message;
        document.getElementById("alertwarning").style.display = "block";
        document.getElementById("spinner1").style.display = "none";
        document.getElementById("signup").style.display = "block"; 
       
        setTimeout(function(){
            
            document.getElementById("alertwarning").style.display = "none"; 
            
       }, 4500);
        
    })
    
}
