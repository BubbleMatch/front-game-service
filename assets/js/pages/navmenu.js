export default function setNavMenu() {

    const home = document.querySelector('.home.nav-item');
    const play = document.querySelector('.play.nav-item');
    const lobby = document.querySelector('.lobby.nav-item');
    const rules = document.querySelector('.rules.nav-item');

    if (home) {
        home.onclick = function () {
            window.location.href = 'http://bubblematch.io:' + window.location.port;
        }
    }

    if (play) {
        play.onclick = function () {
            window.location.href = 'http://play.bubblematch.io:' + window.location.port;
        }
    }

    if (lobby) {
        lobby.onclick = function () {
            window.location.href = 'http://lobby.bubblematch.io:' + window.location.port;
        }
    }

    if (rules) {
        rules.onclick = function () {
            window.location.href = 'http://rules.bubblematch.io:' + window.location.port;
        }
    }
}