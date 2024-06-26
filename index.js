let number = document.getElementById("countLabel");


document.getElementById("increaseBtn").onclick = function(){
    number += 1;
    document.getElementById("countLabel").textContent = number;
}

document.getElementById("decreaseBtn").onclick = function(){
    number -= 1;
    document.getElementById("countLabel").textContent = number;
}

document.getElementById("resetBtn").onclick = function(){
    number = 0;
    document.getElementById("countLabel").textContent = number;
}