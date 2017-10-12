function myName() {
    var name = prompt("Please enter your name", "");
    if (name.length < 9){
    if (name != null) {
        document.getElementById("setname").innerHTML = " Welcome " + name;
        document.getElementById("loginbutton").innerHTML = "You are logged in </br> <a href='#pubgstats'>My PUBG Stats</a> </br> <a href='#rocketleaguestats'>My RocketLeague Stats</a> </br> <a href='#counterstrike'>My Counterstrike Stats</a> </br> <button onClick='window.location.reload()'>Uitloggen</button>";
        } 
    } else {
        alert("Username too long (max 8 characters)!");
        myName();
    }
}

