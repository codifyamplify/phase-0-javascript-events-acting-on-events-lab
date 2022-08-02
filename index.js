// Your code here
const dodger = document.getElementById("dodger");
// LLLLLLLLLLLLLLLLLLLLLL
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}
// RRRRRRRRRRRRRRRRRRRRRRRRR
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)
    if (left < 360) {
        dodger.style.left = `${left + 1}px`
    }
}
// LISTENER
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
})

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})