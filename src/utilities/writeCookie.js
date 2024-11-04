const writeCookie = (key, value, days) => {
    let expiryDate = new Date();
    days = days || 7;
 
    expiryDate.setDate(expiryDate.getDate() + days);
 
    let cookie = document.cookie = key + "=" + value + ";" + " expires="+expiryDate.toGMTString() + ";" + "path=/";
    console.log(cookie);
}
 
export default writeCookie;