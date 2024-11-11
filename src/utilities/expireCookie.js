function expireCookie(key) {
    document.cookie = key + "=; expires=Thu, 01 Jan 19700 00:00:00 UTC"
}

export default expireCookie;