document.getElementById("newpostbtn").onclick = function(){

    document.getElementById("modalNewPost").style.display = "block";
    document.getElementById("modalNewPost").style.background = "white";
    document.getElementById("sectionone").style.opacity = "0.1";
    document.getElementById("exit").onclick = function(){

        window.location.reload();
    }
}


document.getElementById("profilesettingsbtn").onclick = function(){

    document.getElementById("sectionthree").style.display = "block";

    window.addEventListener('mouseup', function(event){
        var box = document.getElementById('sectionthree');
        if (event.target != box && event.target.parentNode != box){
            box.style.display = 'none';
        }
    });
    
}

/* This is for the click events in the settings(apps and websites)..
document.getElementById("one").addEventListener("click", displayData);
function displayData() {
    document.getElementById("one").style.borderBottom = "solid 1px black";
    document.getElementById("one").style.color = "black";
    document.getElementById("option1").style.display = "block";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option3").style.display = "none";
}*/
