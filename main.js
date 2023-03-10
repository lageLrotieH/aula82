var eventoMouse=""
var largura=5
var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
canvas.addEventListener("mousedown",mymousedown)
function mymousedown(e){
    color=document.getElementById("color").value
    mousex=e.clientX-canvas.offsetLeft
    mousey=e.clientY-canvas.offsetTop
    circulo(mousex, mousey)
}
function circulo(mousex, mousey){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=5
    ctx.arc(mousex, mousey, 50, 0, 2*Math.PI)
    ctx.stroke()
}
    function clearArea(){
        ctx.clearRect(0,0, canvas.width, canvas.height)
    }

