export function setCookie() {
    const domain = ".bubblematch.io"; // установка домена для cookie
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=" + domain;

}

export function getCookie() {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

export function removeCookie() {
    const domain = ".bubblematch.io"; // установка домена для cookie
    document.cookie = name + "=; Max-Age=-99999999; path=/; domain=" + domain;
}