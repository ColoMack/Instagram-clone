firebase.auth().onAuthStateChanged((user)=>{
    if (user){

        let userID = user.uid;
        console.log(userID);

        firebase.firestore().collection("credentials").doc(userID).get().then((doc)=>{

            let profilepic = doc.data().theProfilepicID;
            console.log(profilepic);
            
            document.getElementById("profilePhoto").src = profilepic
        })

    } else {

        window.location = "login.html"

    }
})