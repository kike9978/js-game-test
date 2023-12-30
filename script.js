const player = document.querySelector(`[data-game="player"]`)
const speedInput = document.querySelector("#speed")
player.style.backgroundColor = "blue";
let x = 100
let y = 100
player.style.translate = `${x}px ${y}px`;

let speed = 1;
const offset = 1;

speedInput.value = speed;
speedInput.addEventListener("blur", updateInputValue)
function updateInputValue(){
    speed = speedInput.value
}
let intervalId = null;

function translate(direction) {
    let finalDirection;
    switch (direction){
        case "right":
            finalDirection = -1;
        case "left":
            finalDirection = 1;
        case "up":
            finalDirection = -1;
        case "down":
            finalDirection = 1;
        default:
            direction = 1;
    }
    console.log(direction)
    console.log(finalDirection)

    intervalId = setInterval(() =>{
        console.log("hola")
        x = x + ((offset * direction) * speed);
        console.log({x})
        console.log({offset})
        console.log({speed})
        player.style.translate = `${x}px ${y}px`;
    }, 16.66)
        
}

function stopX(){
    clearInterval(intervalId)
}

document.addEventListener("keydown", (e) => {

    switch (e.key){
        case "ArrowRight":
            translate("right");
        case "ArrowLeft":
            translate("left");
        case "ArrowUp":
            translate("up");
        case "ArrowDown":
            translate("down");
        default:
            console.log("Hola")
    }
    if (e.key === "ArrowRight") {
    }
})

document.addEventListener("keyup", (e) =>{
    if (e.key === "ArrowRight") {
        stopX();
    }

})