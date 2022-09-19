firebase.auth().onAuthStateChanged((user)=>{
    if (user){
        //this means that if user is signed in...
        var userID = user.uid;
        var userEmail = user.email;
        
        console.log("User is signed in");
        console.log(userID);
        console.log(userEmail);
        
        //for logging out...
        document.getElementById("logout").onclick = function(){
            firebase.auth().signOut().then(() => {

                // Sign-out successful.
                window.location.href = "login.html";

              }).catch((error) => {

                // An error happened.....fails to log out the user
                error.message;

              });
        }

        //this is code for pulling data from firestore and modelling it to html...

        firebase.firestore().collection("posts").get().then((snapshot)=>{

            var content = ''    //empty variable...

            snapshot.forEach((doc)=>{
                
                var theTweet = doc.data().thePost;
                console.log(theTweet);

                content += '<div>'
                    content += '<p>' + theTweet + '<p>'
                content += '</div>'
            })

            $("#samplediv").append(content)
        })
        //same as document.getelememntbyid('')....

        //$("#samplediv").append(content);


        //this code is for storing a picture,video or pdf in the firebase-storage...

        //uploading a photo..
        /*document.getElementById("uploadingprofilepic").onclick = function(){

            //gets the choosen file from html
            var profilephoto = document.getElementById("profilephoto").files[0];

            //storage reference
            var storageRef = firebase.storage().ref();

            //uploading task
            var uploadtask = storageRef.child("photo/").child(Math.random() + profilephoto.name).put(profilephoto);

            uploadtask.on('state_changed', (snapshot)=>{

                var uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(uploadProgress);

            }, (error)=>{
                //handle unsuccessful upload errors...

            }, ()=>{
                //handle successful uploads..
                console.log("image uploaded successfully");

                //getting the download url link..
                uploadtask.snapshot.ref.getDownloadURL().then((downloadURL)=>{

                    console.log(downloadURL)

                    //for updating the profile picture in firebase-firestore...
                    firebase.firestore().collection("credentials").doc(userID).update({
                        
                        profilephoto:downloadURL

                    }).then(()=>{

                        console.log("profile picture updates successfully");
                        window.location.reload();

                    }).catch((error)=>{

                        console.log("error updating the profile picture");
                        console.log(userID)
                    })
                })
            }
            )
        }*/

    } else{
        window.location.href = "signup.html";
    }
        
        
    
})