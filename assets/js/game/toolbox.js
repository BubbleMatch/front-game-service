const toolboxSwitchBtn = document.querySelector('.switch').children[0]
let toolboxSwitchValue = document.querySelector('.switch').children[0].classList[0]

let chat = document.querySelector('.toolbox > .chat');
let playerWrapper = document.querySelector('.toolbox > .player-wrapper')

import {init as chatInit} from "./chat";


export function initToolbox() {

    toolboxSwitchBtn.onclick = function () {
        toolboxSwitchValue = toolboxSwitchValue === "chat-icon" ? "game-icon" : "chat-icon";

        switch (toolboxSwitchValue) {
            case "chat-icon":
                toolboxSwitchBtn.classList.remove("game-icon");
                toolboxSwitchBtn.classList.add("chat-icon");
                chat.style.display = "none";
                playerWrapper.style.display = "flex";
                break;
            default:
                toolboxSwitchBtn.classList.remove("chat-icon");
                toolboxSwitchBtn.classList.add("game-icon");
                chat.style.display = "flex";
                playerWrapper.style.display = "none";
                break;
        }
    }


    chatInit();


}