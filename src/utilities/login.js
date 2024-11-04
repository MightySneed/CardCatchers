import writeCookie from "./writeCookie";

export const login = async (email,username,password) => {
    try {
        const res = await fetch(
            "http://localhost:5002/login",
            {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(
                    {
                        email: email,
                        username: username,
                        password: password
                    }
                )
            }
        )
        const data = await res.json();
        console.log(data.token);
        writeCookie('jwt_token', data.token, 2)
    } catch (error) {
        console.log(error);
    }
}