/* This should be done after authentication of user*/

/*document.getElementById("submit").onclick = function(){

    let post = document.getElementById("postText").value;
    let timestamp = new Date();

    firebase.firestore().collection("posts").doc().set({

        thePost:post,
        postTime:timestamp

    }).then(()=>{

        window.location.reload();

    }).catch((error)=>{

        alert(error.message);

    })
}*/