
//this is just set up
let text = 1
let button = "I said don't click me"
function message(){
    //this is
    if (text == 2) {
        button = "don't do it" 
    } else if (text == 3) {
        button = "stop it!"
    } else if (text == 4) {
        button = "STOP IT!!"
    } else if (text == 5) {
        button = "GRRRRRRR!!!"
    } else if (text == 6) {
        document.getElementById("demo").style.display = "none";
        document.getElementById("gif").style.display = "block";
    }
    document.getElementById("demo").innerHTML = button
    text++
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

let spacepressed = false

function keyDownHandler(event) {
    if(event.keyCode == 32) {
        spacePressed = true;
    }
}
function keyupHandler(event) {
    spacepressed = false
}

if (spacepressed = true) {
    text = 1
    button = "I said don't click me"
    document.getElementById("gif").style.display = "none";
    document.getElementById("demo").style.display = "block";
}
