window.onload = window.onresize = function() {
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
    for (let i = 0; i < randomRange(1000, 2000); i++) {
        var r = randomRange(1, 3);
        var x = Math.max(r, Math.round(Math.random() * canvas.clientWidth) - r);
        var y = Math.max(r, Math.round(Math.random() * canvas.clientHeight) - r);

        var color = "#8ad4ff";
        if(randomRange(1, 100) > 50){
            color = "#ffffff";
        }
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill()
    }
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}