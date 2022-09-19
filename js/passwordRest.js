document.getElementById("resetbtn").onclick = function(){
    var actionCodeSettings = {
        url: 'https://www.example.com/?email=user@example.com',
        iOS: {
          bundleId: 'com.example.ios'
        },
        android: {
          packageName: 'com.example.android',
          installApp: true,
          minimumVersion: '12'
        },
        handleCodeInApp: true
      };
      firebase.auth().sendPasswordResetEmail(
          'user@example.com', actionCodeSettings)
          .then(function() {
            // Password reset email sent.
          })
          .catch(function(error) {
            // Error occurred. Inspect error.code.
          });
}
