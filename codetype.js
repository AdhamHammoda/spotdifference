var level = 2;
function f() {
    console.log(level);
    var img = document.getElementById("img");
    img.innerHTML = '';
    var outtext = document.getElementById("text1");
    var st = level.toString();
    outtext.innerText = 'Level ' + st;
    var skippedphoto = Math.floor(Math.random() * level);
    var button = document.getElementById("specialbutton");
    for (var i = 0; i < level; i++) {
        var devimage = new Image();
        devimage.src = "grapes.png";
        var rand1 = 5.1 + Math.floor(Math.random() * 41.9);
        var rand2 = 8.2 + Math.floor(Math.random() * 84.9);
        var str1 = (rand1.toString() + '%');
        var str2 = (rand2.toString() + '%');
        devimage.setAttribute('width', '3%');
        devimage.setAttribute('height', '5%');
        devimage.style.position = "absolute";
        devimage.style.left = str1;
        devimage.style.top = str2;
        img.appendChild(devimage);
        if (skippedphoto == i) {
            devimage.style.zIndex = "-1";
            button.style.position = "absolute";
            button.style.left = str1;
            button.style.top = str2;
            button.style.visibility = "visible";
            button.style.opacity = "0";
            continue;
        }
        var devimage2 = new Image();
        devimage2.src = "grapes.png";
        rand1 += 45;
        str1 = rand1.toString() + '%';
        str2 = rand2.toString() + '%';
        devimage2.setAttribute('width', '3%');
        devimage2.setAttribute('height', '5%');
        devimage2.style.position = "absolute";
        devimage2.style.left = str1;
        devimage2.style.top = str2;
        img.appendChild(devimage2);
    }
}
window.onload = f;
function trigger() {
    document.addEventListener("keydown", function (event) {
        var k = event.key;
        console.log(k);
        if (k === 'Enter' || k === ' ') {
            event.preventDefault();
        }
    });
    level++;
    var img = document.getElementById("img");
    img.innerHTML = '';
    console.log(img);
    alert("GAAAAAAMMMMMEDDDD");
    f();
}
