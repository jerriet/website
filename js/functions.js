function myName() {
    var name = document.forms["myForm"]["name"].value
    if (name.length < 9){
    if (name != null) {
        document.getElementById("setname").innerHTML = " Welcome " + name;
        document.getElementById("loginbutton").innerHTML = "<div class='list'> You are logged in </br> <a href='#pubgstats'>My PUBG Stats</a> </br> <a href='#rocketleaguestats'>My RocketLeague Stats</a> </br> <a href='#counterstrike'>My Counterstrike Stats</a> </br><element class='logout'> <button value='login' type='submit' onClick='window.location.reload()'>Uitloggen</button></element></div>";
        } 
    } else {
        alert("Username too long (max 8 characters)!");
    }
}

