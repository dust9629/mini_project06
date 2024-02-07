let draggableElem = document.getElementById("draggable-elem");

let initialX = 0,
    initialY = 0;
let moveElement = false;

let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};

let deviceType = "";

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;

    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};
isTouchDevice();
// console.log(isTouchDevice());

