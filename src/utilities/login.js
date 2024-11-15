import writeCookie from "./writeCookie"
export const login = async (email, username, password) => {
    try {
        const res = await fetch(
            "https://cardcatchersbackend-production.up.railway.app/login",
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
        let token = data.token;
        console.log(data.token);
        writeCookie("jwt_token", token, 2);
        return res.status;
    } catch (error) {
        console.log(error);
    }
}
