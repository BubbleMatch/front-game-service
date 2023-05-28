import {getCookie} from "./cookie";

function validate() {

    let user = document.querySelector('.navigationMenu .user');
    let mmr = document.querySelector('.navigationMenu .mmr');
    let login = document.querySelector('.navigationMenu .login');

    let token = getCookie('token');
    if (token === undefined) {

        user.style.display = "none";

        mmr.style.display = "none";
        login.style.display = "flex";
        login.addEventListener('click', evt => {
            window.location.href = "http://auth.bubblematch.io:" + window.location.port;
        })
    }
}

export {
    validate
}