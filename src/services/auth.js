export function getUser() {
    const token = localStorage.getItem('ateller-token');
    if (token) {
        const tokenResponse = checkTokenValidity(token);
        return tokenResponse;
    }else {
        return false
    }
}



 function checkTokenValidity(token) {

    return true;
}