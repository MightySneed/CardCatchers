const readCookie = (key) => {
    const cookieRegex = new RegExp(`(?<=${key}=)[^;]*`)
    try {
        let token = document.cookie.match(cookieRegex)[0];
        return token;
    } catch (error) {
        console.log(error);
        return false;
    }
};
export default readCookie;