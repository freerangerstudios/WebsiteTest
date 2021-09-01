window.onload = window.onresize = function() {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    for (let i = 0; i < randomRange(1000, 2000); i++) {
        var r = randomRange(1, 3);
        var x = Math.round(Math.random() * canvas.clientWidth);
        var y = Math.round(Math.random() * canvas.clientHeight);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill()
    }
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}