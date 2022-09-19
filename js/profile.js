//for getting the users credentials after signing in then sending them to html tags using their ids....

/*firebase.auth().onAuthStateChanged((user)=>{
    if(user){

        let userID = user.uid;
        console.log(userID);
        
        firebase.firestore().collection("credentials").doc(userID).get().then((credentialDoc)=>{
        
            let fullName = credentialDoc.data().theFullname;
            let emailUser = credentialDoc.data().theEmail;
            let accountDate = credentialDoc.data().signupTimestamp;
            
            //console.log(credentialDoc.data())
            //console.log(emailUser);

            document.getElementById("one").innerText = fullName;
            document.getElementById("two").innerText = emailUser;

            let simpledate = new Date().toDateString(accountDate);
            let month = new Date(simpledate).getUTCMonth() + 1;
            let year = new Date(simpledate).getFullYear();
            let today = new Date();

            document.getElementById("three").innerText = month + "th month of" + " " + year;
            document.getElementById("four").innerText = today;

        })

        document.getElementById("save").onclick = function(){

            var newname = document.getElementById("newname").value;

            firebase.firestore().collection("credentials").doc(userID).update({

                theFullname:newname

            }).then(()=>{

                window.location.reload();

            })

        }
        
    }
}) */