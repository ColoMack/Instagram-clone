firebase.auth().onAuthStateChanged((user)=>{

    if (user){
        let changeprofile = document
        let userID = user.uid;
        console.log(userID);

        if (document.changeprofile != null){
            // for changing the profile photo of the user..
            console.log("field is not empty");
            document.getElementById("submitprofilechanges").addEventListener("click", function() {
                let choosenprofilepic = document.getElementById("changeprofile").files[0];
                let storageRef = firebase.storage().ref();
                let uploadtask = storageRef.child("profile_Photo").child(Math.random() + choosenprofilepic.name).put(choosenprofilepic);

                uploadtask.on('state_changed', (snapshot)=>{

                    let uploadprogress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(uploadprogress);
                }, (error)=>{
                    //unsuccessful uploading of the profile picture
                    alert.window("error uploading profile pic");
                    console.log("error uploading profile pic");
                }, ()=>{

                    console.log("success upploading profile picture");

                    uploadtask.snapshot.ref.getDownloadURL().then((downloadURL)=>{

                        console.log(downloadURL);

                        firebase.firestore().collection("credentials").doc(userID).update({

                            theProfilepicID:downloadURL

                        }).then(()=>{

                            console.log("success updating the profilepiciD");
                            window.location.reload();

                        }).catch((error)=>{

                            console.log("error updating the profilepicID in firebase.firestore");
                            alert.window("error occured while updating the profile")
                        })
                    })
                }
                )
            })
        } else{
            console.log("field is empty");
        }
        
        
        
        firebase.firestore().collection("credentials").doc(userID).get().then((doc)=>{

            let profilepic = doc.data().theProfilepicID;
            document.getElementById("profilePhoto").src = profilepic
        })

        

    } else{

        window.location = "login.html"
    }
})