window.onload = function(){

    var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var c4 = document.querySelector("#c4");
var c5 = document.querySelector("#c5");
var box = [c1, c2, c3, c4, c5];
var boxId = [-1, 0, 1, 2, 3];
var coins;

document.querySelector("#c7").addEventListener("click", moveleft);
document.querySelector("#c6").addEventListener("click", moveright);

loadcoins();

function showm() {
    
    var menu = document.querySelector("#nav");
    if (menu.className == "nav-bar") {
        menu.className += "show";
    } else {
        menu.className = "nav-bar";
    }
}


function moveleft() {
    debugger;
    if (boxId[4] == 10) {
        boxId[4] = 0;
    }
    box[4].style.background = `url("../images/coin/${coins[boxId[4]].name
        }.png") no-repeat center`;
    i = 20;
    showdata(boxId[3]);
    leftint = setInterval(lposition, 20);
}

function lposition() {
    if (i == 0) {
        lchanger();
        clearInterval(leftint);
    } else {
        box[0].style.left = "80%";
        box[1].style.left = i - 1 + "%";
        box[2].style.left = i + 20 - 1 + "%";
        box[3].style.left = i + 40 - 1 + "%";
        box[4].style.left = i + 60 - 1 + "%";
        i--;
    }
}
function lchanger() {
    let x = box[0];
    box[0] = box[1];
    box[1] = box[2];
    box[2] = box[3];
    box[3] = box[4];
    box[4] = x;

    boxId[0] = boxId[1];
    boxId[1] = boxId[2];
    boxId[2] = boxId[3];
    boxId[3] = boxId[4];
    boxId[4] = boxId[4] + 1;
    // alert(boxId);
}

function moveright() {
    if (boxId[0] == -1) {
        boxId[0] = 9;
    }
    box[0].style.background = `url("../images/coin/${coins[boxId[0]].name
        }.png") no-repeat center`;
    i = 0;
    showdata(boxId[1]);
    rightint = setInterval(rposition, 20);
}

function rposition() {
    if (i == 20) {
        rchanger();
        clearInterval(rightint);
    } else {
        box[0].style.left = i + 1 + "%";
        box[1].style.left = i + 21 + "%";
        box[2].style.left = i + 41 + "%";
        box[3].style.left = i + 61 + "%";
        box[4].style.left = "0%";
        i++;
    }
}
function rchanger() {
    let x = box[4];
    box[4] = box[3];
    box[3] = box[2];
    box[2] = box[1];
    box[1] = box[0];
    box[0] = x;

    boxId[4] = boxId[3];
    boxId[3] = boxId[2];
    boxId[2] = boxId[1];
    boxId[1] = boxId[0];
    boxId[0] = boxId[0] - 1;
    // alert(boxId);
}









function loadcoins() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "../coin.json", true);
    xhr.onload = function () {
        if (this.status === 200) {
            coins = JSON.parse(this.responseText);

            c2.style.background = `url("../images/coin/${coins[0].name}.png") no-repeat center`;
            c3.style.background = `url("../images/coin/${coins[1].name}.png") no-repeat center`;
            c4.style.background = `url("../images/coin/${coins[2].name}.png") no-repeat center`;
            showdata(1);
        }
    };

    xhr.send();

}

function showdata(a) {
    document.querySelector("#name").innerHTML = `${coins[a].name}`;
    document.querySelector("#hp").innerHTML = `${coins[a].hprice}`;
    document.querySelector("#lp").innerHTML = `${coins[a].lprice}`;
    document.querySelector("#v").innerHTML = `${coins[a].value}`;
    document.querySelector("#mshare").innerHTML = `${coins[a].mshare}`;
}
}
